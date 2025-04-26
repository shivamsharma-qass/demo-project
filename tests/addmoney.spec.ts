import { test, expect } from '@playwright/test';
import { AddMoneyPage } from '../pages/addMoneyPage';
import { WalletAccountPage } from '../pages/customerAccountPage';
import { checkout } from '../pages/checkout';
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
        await loginPage.clickAccount();
        await loginPage.customerLogin('shopifytest@webkul.in');
        await loginPage.customerPassword('123456');
        await loginPage.signin();
        await expect(page).toHaveURL('https://shivam-wallt-trunk3.myshopify.com/account');
        console.log("Customer Successfully Login");
    });

    test('1. Add Money by Bogus Payment Gateway', async ({ page }) => {
        await page.locator('#wk_add_money_myBtn').getByRole('img').click();
        await page.getByRole('spinbutton').click();
        await page.getByRole('spinbutton').fill('100');
        console.log("Add 100 Rupees in wallet");
        await page.getByRole('button', { name: 'Add Money' }).click();
        await checkout(page);
        await page.getByRole('button', { name: 'Pay now' }).click();
        await expect(page).toHaveTitle('Thank you for your purchase! - shivam-wallt-trunk3 - Checkout');  
    });

    
});



