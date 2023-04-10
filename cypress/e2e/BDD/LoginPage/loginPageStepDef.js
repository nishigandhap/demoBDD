/// <reference types = 'cypress'/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginDetails from "./LoginPageModel";


Given('Visit sauce page', () => {
    LoginDetails.verifyLoginHomePage()
})

When('Enter the {string} credentials and submit', userType => {
    LoginDetails.loginDetails(userType)
})

Then('Verify user is on home page', () => {
    LoginDetails.verifyTitleOfPage()
})

Then('Verify error mesaage on the page', () => {
    LoginDetails.errorMessageForLockedUser()

})

Then('Verify invalid Image for home page', () => {
    LoginDetails.invalidImageForHomePage()
})

Then('Verify error mesaage for invalid credentials', () => {
    LoginDetails.errorMessageForWrongUserName()
})