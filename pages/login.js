exports.LoginPage = class LoginPage{
    constructor(page){

        this.page = page
        this.username_textbox = page.getByPlaceholder('E-mail or username *')
        this.password_textbox = page.getByPlaceholder('Password *')
        this.login_button = page.getByRole('button', { name: 'Log in' })

    }
    async gotoLoginPage(){
        await this.page.goto('https://dev.meetingpackage.com/user/login');

    }
    async login(username,Password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(Password)
        await this.login_button.click()
    }


}