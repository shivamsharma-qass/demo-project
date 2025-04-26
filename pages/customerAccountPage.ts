import { Page } from 'playwright';

export class WalletAccountPage {
    private page: Page;
    private storeFrontPassword = "//*[@id='password']";
    private clickLoginSelector = "button[type='submit']";
    private clickAccountButton = "//a[@class='header__icon header__icon--account link focus-inset small-hide']";
    private enterEmail = "//input[@id='CustomerEmail']";
    private enterPassword = "//input[@id='CustomerPassword']";
    private customerSignin = "form[id='customer_login'] button";
    private addMoney = "//div[@id='wk_add_money_myBtn']//img";
    private addAmount ="//div[@class='wk_money_add_content']//input[@id='wk_money_input']";
    private addmoneybutton = "//button[normalize-space()='Add Money']";


    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://shivam-wallt-trunk3.myshopify.com/password'); // Front Login URLs
    }

    async fillPassword(password: string) {
        await this.page.fill(this.storeFrontPassword, password);
    }

    async clickLogin() {
        await this.page.click(this.clickLoginSelector);
    }

    async clickAccount(){
        await this.page.click(this.clickAccountButton);
    }
    
    async customerLogin(custlogin: string){
        await this.page.fill(this.enterEmail, custlogin);
    }
    async customerPassword(password: string){
        await this.page.fill(this.enterPassword, password);
    }
    async signin(){
        await this.page.click(this.customerSignin);
    }
    async addmoney(){
        await this.page.click(this.addMoney);
    }
    async addamount(amount: string){
        await this.page.fill(this.addAmount, amount);
    }
    async addmoneycust(){
        await this.page.click(this.addmoneybutton);
    }
    


    
}

