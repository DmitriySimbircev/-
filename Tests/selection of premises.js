export class SelectionOfPremises {

    constructor(page) {


        this.page = page;
        this.shahmatkaSelect = page.getByLabel('Шахматка [object Object]');
        this.shahmatkaPlus = page.getByRole('option', { name: 'Шахматка+' });
        this.oneFloor = page.locator('span').filter({ hasText: /^1$/ }).nth(1);
        this.changePrice_1 = page.getByRole('button', { name: 'Изменить цену' });
        this.value_1 = page.getByPlaceholder('Укажите значение');
        this.apply_1 = page.getByRole('button', { name: 'Изменить', exact: true });

        this.twoFloor_1 = page.getByText('Квартира 35 м²№4 1 Стоимость, ₽ 5 000 000 Цена, ₽/м² NaN');
        this.twoFloor_2 = page.getByText('Квартира 70 м²№6 3 Стоимость, ₽ 5 000 000 Цена, ₽/м² NaN');
        this.changePrice_2 = page.getByRole('button', { name: 'Изменить цену' });
        this.value_2 = page.getByPlaceholder('Укажите значение');
        this.replaceSelect_1 = page.getByLabel('Как изменяем Увеличить up');
        this.decrease_1 = page.getByRole('option', { name: 'Уменьшить' });
        this.apply_2 = page.getByRole('button', { name: 'Изменить', exact: true });

        this.threeFloor = page.locator('span').filter({ hasText: /^3$/ }).nth(1);
        this.changePrice_3 = page.getByRole('button', { name: 'Изменить цену' });
        this.replaceSelect_2 = page.getByLabel('Как изменяем Увеличить up');
        this.replace = page.getByRole('option', { name: 'Заменить' });
        this.value_3 = page.getByPlaceholder('Укажите значение');
        this.apply_3 = page.getByRole('button', { name: 'Изменить', exact: true });

        this.fourFloor = page.locator('span').filter({ hasText: /^4$/ }).nth(1);
        this.changePrice_4 = page.getByRole('button', { name: 'Изменить цену' });
        this.procentSelect_1 = page.getByLabel('Единица измерения ₽ absolute');
        this.procent_1 = page.getByRole('option', { name: '%' });
        this.value_4 = page.getByPlaceholder('Укажите значение');
        this.apply_4 = page.getByRole('button', { name: 'Изменить', exact: true });

        this.fiveFloor = page.locator('span').filter({ hasText: /^5$/ }).nth(1);
        this.changePrice_5 = page.getByRole('button', { name: 'Изменить цену' });
        this.decreaseSelect = page.getByLabel('Как изменяем Увеличить up');
        this.decrease_2 = page.getByRole('option', { name: 'Уменьшить' });
        this.procentSelect_2 = page.getByLabel('Единица измерения ₽ absolute');
        this.procent_2 = page.getByRole('option', { name: '%' });
        this.value_5 = page.getByPlaceholder('Укажите значение');
        this.apply_5 = page.getByRole('button', { name: 'Изменить', exact: true });

    }
    async switchToChess() {
        await this.shahmatkaSelect.click()
        await this.shahmatkaPlus.click()
    }
    async oneFloor_() {
        await this.oneFloor.click()
        await this.changePrice_1.click()
        await this.value_1.fill('10000')
        await this.apply_1.click()
    }
    async twoFloor_() {
        await this.twoFloor_1.click()
        await this.twoFloor_2.click()
        await this.changePrice_2.click()
        await this.value_2.fill('10000')
        await this.replaceSelect_1.click()
        await this.decrease_1.click()
        await this.apply_2.click()
    }
    async threeFloor_() {
        await this.threeFloor.click()
        await this.changePrice_3.click()
        await this.replaceSelect_2.click()
        await this.replace.click()
        await this.value_3.fill('555555')
        await this.apply_3.click()
    }
    async fourFloor_() {
        await this.fourFloor.click()
        await this.changePrice_4.click()
        await this.procentSelect_1.click()
        await this.procent_1.click()
        await this.value_4.fill('5')
        await this.apply_4.click()
    }
    async fiveFloor_() {
        await this.fiveFloor.click()
        await this.changePrice_5.click()
        await this.decreaseSelect.click()
        await this.decrease_2.click()
        await this.procentSelect_2.click()
        await this.procent_2.click()
        await this.value_5.fill('5')
        await this.apply_5.click()
    }

}
/* 
В тесте проходим по всем этажам и изменяем стоимость. 
На каждом этаже изменение идут разными способами (увеличение, уменьшение, замена цены) 
Выбор помещения осуществляется разными способами 
*/