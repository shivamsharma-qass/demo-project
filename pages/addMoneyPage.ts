import { Page } from 'playwright';

export class AddMoneyPage {
    private page: Page;
    

    constructor(page: Page) {
        this.page = page;
    }

    // async goto() {
    //     await this.page.goto('https://shivam-wallt-trunk3.myshopify.com/password'); // Front Login URLs
    // }

    // async fillPassword(password: string) {
    //     await this.page.fill(this.storeFrontPassword, password);
    // }

    // async clickLogin() {
    //     await this.page.click(this.clickLoginSelector);
    // }

    // async clickAccount(){
    //     await this.page.click(this.clickAccountButton);
    // }
    
    // async customerLogin(custlogin: string){
    //     await this.page.fill(this.enterEmail, custlogin);
    // }
    // async customerPassword(password: string){
    //     await this.page.fill(this.enterPassword, password);
    // }
    // async signin(){
    //     await this.page.click(this.customerSignin);
    // }
    // async addmoney(){
    //     await this.page.click(this.addMoney);
    // }
    // async addamount(amount: string){
    //     await this.page.fill(this.addAmount, amount);
    // }
    // async addmoneycust(){
    //     await this.page.click(this.addmoneybutton);
    // }
   


    
}