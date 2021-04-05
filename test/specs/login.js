import selectors from '../selectors/login.sel';
import expected from '../expected/login.exp';
import login from '../pages/login.page';



describe('Login', () => {


    describe('Elements', () => {

        before(() => {
            login.openPage();
        })
        
        it('Page-title-is-correct', () => {
           expect(browser).toHaveTitle(expected.pageTitle)
        })
    
        it('Page-URL-is-correct', () => {
            const URL = browser.getUrl();
            expect(browser).toHaveUrl(expected.pageUrl)
        })
    
    })
    
    
    describe('Elements-displayed', () => {
    
    
        it('Logo', () => {
            expect($(selectors.logo)).toBeDisplayed()
        })
    
        it('Footer', () => {
            expect($('#footer')).toBeDisplayed()
        })
    
        it('Email-form', () => {
            expect($(selectors.emailField)).toBeDisplayed()
        })
    
        it('Password-form', () => {
            expect($(selectors.passField)).toBeDisplayed()
        })
    
        it('Remind-password', () => {
            expect($(selectors.remindPassLink)).toBeDisplayed()
        })
    
      
    })
    
     
    
    describe('Elements-values', () => {
    
        it('Email-placeholder', () => {
            login.checkPlaceholder(selectors.emailField, expected.placeholderEmail)
        })
    
        it('Password-placeholder', () => {
            login.checkPlaceholder(selectors.passField, expected.placeholderPass)
        })
    
        it('Login-button', () => {
            expect($(selectors.btnLogin)).toHaveText(expected.btnLoginTxt)
        })
    
        it('Remind-Password-button', () => {
            expect($(selectors.remindPassLink)).toHaveText(expected.rmdPassBtnTxt)
        })
    
       
    
    }) 
    
    
    describe('Functionality', () => {

      
        it('Public-game-button', () => {
            $(selectors.gameBttn).click();
            expect(browser).toHaveUrl(expected.publicUrl)
        })

        it('Public-game-page-displayed', () => {
            expect($(selectors.publicGameBttn)).toBeDisplayed()
        })

        it('Back-to-login-btn', () => {
            $(selectors.btnLogin).click()
            expect(browser).toHaveUrl(expected.pageUrl)
        })   

        it('UserName-and-Password-Empty', () => {
            login.bothFieldsEmptyError()
        })

        it('Error-message-disapears-on-input-in-Email-field', () => {
            login.errorMessageDisappears(selectors.emailField, selectors.errorTxt)
        }) 

        it('Empty-userName', () => {
            login.emptyEmailError()
        })

        it('Empty-password', () => {
            login.emptyPasswordError()
        })

        it('Error-message-disapears-on-input-in-Password-field', () => {
            login.errorMessageDisappears(selectors.passField, selectors.errorTxt)
        }) 
        
        it('Incorrect-email', () => {
            login.incorrectEmailError()
        })

        it('Incorrect-password', () => {
            login.incorrectPasswordError()
        })
        
        
    })
    
    
    
})









   