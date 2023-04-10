
class LoginDetails {

    static elements = {

        insertUserName: () => cy.get('#user-name'),
        insertPassword: () => cy.get('#password'),
        submitButton: () => cy.get("#login-button"),
        errorMessage: () => cy.get('.error-message-container.error'),
        titleForPage: () => cy.get('.title')
    }

    static loginDetails(userType) {
        cy.fixture('login').then((el) => {
            switch (userType) {
                case 'standard':
                    this.elements.insertUserName().type(el.standard)
                    this.elements.insertPassword().type(el.password)
                    break
                case 'locked':
                    this.elements.insertUserName().type(el.locked)
                    this.elements.insertPassword().type(el.password)
                    break
                case 'problem':
                    this.elements.insertUserName().type(el.problem)
                    this.elements.insertPassword().type(el.password)
                    break
                case 'wrongusername':
                    this.elements.insertUserName().type(el.wrongusername)
                    this.elements.insertPassword().type(el.password)
                    break
                case 'glitch':
                    this.elements.insertUserName().type(el.glitch)
                    this.elements.insertPassword().type(el.password)
                    break
            }
        })
    }

    static verifyLoginHomePage() {
        cy.visit(Cypress.env('url'))
        cy.get('.login_logo').should('contain.text', 'Swag Labs')
    }

    static clickSubmitButton() {
        this.elements.submitButton().click()
    }

    static verifyTitleOfPage() {
        this.clickSubmitButton()
        this.elements.titleForPage().contains('Products').should('be.visible')
    }

    static errorMessageForLockedUser() {
        this.clickSubmitButton()
        this.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    }

    static invalidImageForHomePage() {
        this.verifyTitleOfPage()
        cy.get('.inventory_item_img').first().compareSnapshot('problemImage', 0.2)

    }

    static errorMessageForWrongUserName() {
        this.clickSubmitButton()
        this.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }

}

export default LoginDetails;
