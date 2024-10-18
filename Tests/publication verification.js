import { expect } from '@playwright/test'
export class PublicationVerification {
    constructor(page) {
        this.page = page
        this.published = page.getByRole('button', { name: 'Опубликовано' })
        this.project = page.getByText('Тест SDA (не удалять не использовать)№ 549Артём Тренихин18.10.2024, 12:15')
        this.successAllert = page.getByRole('heading', { name: 'Изменения цен успешно опубликованы' })
        this.choice = page.locator('[data-index="14836386"]')
        this.toDraftList = page.getByRole('link', { name: 'Редакторе цен.' })
    }
    async verification_1() {
        await this.published.click()
        await this.project.click()
    }
    async verification_2() {
        await expect(this.successAllert).toHaveText('Изменения цен успешно опубликованы'); // проверка надичия текса в аллерте успеха
    }

    async verification_3() {
        return this.choice;
    }

    async verification_4() {
        await this.toDraftList.click()
    }
}

