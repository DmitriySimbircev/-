import { test, expect } from '@playwright/test'
import { loginIn } from './login'
import { GoToPrices } from './go to prices'
import { Filter } from './filter'
import { SelectionOfPremises } from './selection of premises'
import { PriceCheck } from './price check'
import { ListOfChanges } from './list of changes'
import { PublicationVerification } from './publication verification'

/*
0. Логин
1. Создание черновика
2. Применение фильтра 
3. Переключение на Шахматку+, выбор помещений (разными спосабами) и изменение цены. На один этаж увеличить на второй уменьшить на третий заменить
4. Переход на шахматку и проверка цен
5. Переход в список изменений, часть удаляется, часть редактируется, и изменяется цена на первичные значения.
6. Публикация и проверка 
*/

test('Редактор цен', async ({ page }) => {

    test.setTimeout(180000);

    const login = new loginIn(page)
    await login.gotoLoginPage()
    await login.login()

    const selectionAndEditing = new GoToPrices(page)
    await selectionAndEditing.withoutDeletion()

    const filtration = new Filter(page);
    const filteringAssertion = await filtration.filters();
    await expect(filteringAssertion).toHaveAttribute('data-filtered', 'true'); // Проверка фильтрации на шахматке
    await filtration.resetFiltering()

    const selectionOfPremises = new SelectionOfPremises(page)
    await selectionOfPremises.switchToChess()
    await selectionOfPremises.oneFloor_()
    await selectionOfPremises.twoFloor_()
    await selectionOfPremises.threeFloor_()
    await selectionOfPremises.fourFloor_()
    await selectionOfPremises.fiveFloor_()

    const priceCheck = new PriceCheck(page)
    await priceCheck.check()
    await priceCheck.allertReselection()

    const listOfChanges = new ListOfChanges(page)
    await listOfChanges.changesList()
    await listOfChanges.publicationPrice()

    const publicationVerification = new PublicationVerification(page)
    await publicationVerification.verification_1()
    await publicationVerification.verification_2()
    await publicationVerification.verification_3()

    const choice = await publicationVerification.verification_3()
    await expect(choice).toHaveAttribute('data-selected', 'true') // проверка что помещения отмечены на шахматке 
    await publicationVerification.verification_4()

})