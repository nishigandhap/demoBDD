Feature: Login Page validations

    My login page suite

    Scenario: Valid credentials for login
        Given  Visit sauce page
        When  Enter the 'standard' credentials and submit
        Then  Verify user is on home page

    Scenario: Verify for locked user
        Given  Visit sauce page
        When Enter the 'locked' credentials and submit
        Then  Verify error mesaage on the page

    Scenario: Verify for problem user
        Given Visit sauce page
        When Enter the 'problem' credentials and submit
        Then Verify invalid Image for home page

    Scenario: Verify incorrect credentials for login
        Given Visit sauce page
        When Enter the 'wrongusername' credentials and submit
        Then  Verify error mesaage for invalid credentials