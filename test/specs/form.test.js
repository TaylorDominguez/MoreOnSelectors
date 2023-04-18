import formPage from '/Users/mcm-mac-18/taylorD/moreOnSelectors/test/pageobjects/form.page.js';


describe('My Form application', () => {
    it('should find an h1 with the text "Form validation" ', async () => {
        await formPage.open();
        await expect(formPage.header).toHaveTextContaining(
            'Form validation');
    })
    it('should display appropriate message when submitted without meeting the minimum criteria', async () => {
        await formPage.submit.waitForExist()       
        await formPage.submit.click();    
        await expect(formPage.errortext).toHaveTextContaining(
            'The form could not be submitted'
        ); 
    })
    it('should select an option from a dropdown', async () => {
        await formPage.open()
        await formPage.titleesq.waitForExist()
        await formPage.titleesq.click();
        await expect(formPage.title).toHaveTextContaining(
            'Esq.'
        )
    })
    it('should write a first name', async () => {
        await formPage.firstnameInput('taylor')
        await formPage.submit.click()
        await expect(formPage.errortext).toHaveTextContaining(
            'The form could not be submitted because 7 errors were found.'
        )
    })
    it('should write a last name', async () => {
        await formPage.lastnameInput('dominguez')
        await formPage.submit.click()
        await expect(formPage.errortext).toHaveTextContaining(
            'The form could not be submitted because 6 errors were found.'
        )
    })
});