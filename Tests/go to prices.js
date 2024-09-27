export class GoToPrices {
    constructor(page) {
        this.page = page;
        this.priceEditor = page.getByRole('link', { name: 'Редактор цен' });
        this.newPrices = page.getByRole('button', { name: 'Редактировать цены' });
        this.projectSelection = page.locator('label').filter({ hasText: 'Тест SDA' });
        this.confirmation = page.getByRole('dialog').getByRole('button', { name: 'Редактировать цены' });
        this.cancellation = page.getByRole('button', { name: 'Отменить' });
        this.modalWindow = page.locator('article').filter({ hasText: 'Тест SDA' }).getByRole('button');
        this.delete = page.getByRole('button', { name: 'Удалить' });
    }

    async withoutDeletion() {
        try {

            await this.page.waitForSelector('text="Редактор цен"', { timeout: 70000 });
            await this.priceEditor.click();
            await this.page.waitForTimeout(3000); // накинул время для прогрузки списка
            await this.page.waitForSelector('text="Редактировать цены"', { timeout: 70000 });
            await this.newPrices.click();
            

            const isProjectSelectionEnabled = await this.projectSelection.isEnabled(); // смотрим что ЖК активен и его можно выбрать

            if (isProjectSelectionEnabled) {
                await this.projectSelection.click();
                await this.page.waitForSelector('button:has-text("Редактировать цены")', { timeout: 70000 });
                await this.confirmation.click();

            } else {
                await this.withDeletion(); // Если элемент не активен, переход ко второму сценарию
            }

        } catch (error) {
            console.error('Ошибка:', error);
            await this.withDeletion();
        }
    }
    async withDeletion() { // удаление

        await this.cancellation.click();
        await this.modalWindow.click();
        await this.delete.click();
        await this.withoutDeletion(); // Повторный запуск первого сценария после удаления
    }
}

