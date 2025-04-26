import { test, expect } from '@playwright/test';
import { WalletAccountPage } from '../pages/customerAccountPage';
test.setTimeout(60000); // 60000ms = 60 seconds

test.describe('Wallet Testing Automation', () => 
    {
    let loginPage: WalletAccountPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new WalletAccountPage(page);
        await loginPage.goto();
        await loginPage.fillPassword('1');
        await loginPage.clickLogin();
        await expect(page).toHaveURL('https://shivam-wallt-trunk3.myshopify.com');
    });

    test('1. Firstly Old Customer Login', async ({ page }) => {
        await loginPage.clickAccount();
        await loginPage.customerLogin('shopifytest@webkul.in');
        await loginPage.customerPassword('123456');
        await loginPage.signin();
        await expect(page).toHaveURL('https://shivam-wallt-trunk3.myshopify.com/account');
        console.log("Customer Successfully Login");
        await page.getByRole('link', { name: 'Catalog' }).click();
        await page.getByRole('link', { name: 'Graphql changes' }).click();
        await page.getByRole('button', { name: 'Add to cart' }).click();
        await expect(page).toHaveURL("https://shivam-wallt-trunk3.myshopify.com/cart");
        await page.getByRole('button', { name: 'PAY FROM WALLET' }).click();
        await page.getByRole('button', { name: 'Complete order' }).click();
        console.log("Order Created With wallet balance");
    });
    
});   