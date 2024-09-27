export class loginIn {

    constructor(page) {
        this.page = page
        this.username = page.getByLabel('Логин / E-mail')
        this.password = page.getByLabel('Пароль')
        this.login_button = page.getByRole('button', { name: 'Войти' })
    }
    async gotoLoginPage() {
        await this.page.goto('https://pb15312.profitbase.ru/new')
    }
    async login() {
        await this.username.fill('atrenihin.profitbase@gmail.com')
        await this.password.fill('2→P@s$—w0®d←8⅓')
        await this.login_button.click()
    }
}