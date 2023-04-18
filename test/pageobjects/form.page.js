import Page from "./page.js";

class formPage extends Page {
     //define multiple selectors using getter methods
    get header() {
        return $('#wb-cont'); //uses Element with certain text selector
    }
     // Email Selector
    get inputEmail() {
          return $("#mail"); //uses CSS query selector
    }
    get submit()
    {
        return $('#validation-example > input.btn.btn-primary');
    }
    get errortext()
    {
        return $('//*[@id="errors-validation-example"]/h2');
    }
    get title()
    {
        return $('#title1')
    }
    get titleesq()
    {
        return $('#title1 > option:nth-child(3)')
    }
    get firstname()
    {
        return $('//*[@id="fname1"]')
    }
    get lastname()
    {
        return $('//*[@id="lname1"]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to enter in a valid email
     */
    async emailInput() {
        await this.emailInput.setValue(input);
        await this.submit.click();
    }

    async firstnameInput(nameInput){
        await this.firstname.setValue(nameInput);
    }

    async lastnameInput(nameInput){
        await this.lastname.setValue(nameInput);
    }
    /**
      * overwrite specific options to adapt it to page object
      */
    open() {
        return super.open('');
    }
}

export default new formPage();