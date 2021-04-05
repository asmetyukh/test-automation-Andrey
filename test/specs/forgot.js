import selectors from '../selectors/login.sel';
import forgotSelectors from '../selectors/forgot.sel';
import expected from '../expected/login.exp';
import forgotExpected from '../expected/forgot.exp'
import forgot from '../pages/forgot.page';


describe('Forgot', () => {

    describe('app-data', () => {

        before(() => {
            login.openPage();
        })

        it('Page-title-is-correct', () => {
            browser.url('/forgot');
            expect(browser).toHaveTitle(expected.pageTitle)
        })
    
        it('Page-URL-is-correct', () => {
            const URL = browser.getUrl();
            expect(browser).toHaveUrl(forgotExpected.forgotPageUrl)
        })
    
    })
    
    
    describe('Forgot-Elements-displayed', () => {
  
        it('logo', () => {
            expect($(selectors.logo)).toBeDisplayed()
        })
    
        it('Remind-password-link', () => {
            expect($(forgotSelectors.btnRmnd)).toBeDisplayed()
        })
    
        it('Email-Field', () => {
            expect($(forgotSelectors.forgotEmail)).toBeDisplayed()
        })
    
        it('footer', () => {
            expect($('#footer')).toBeDisplayed()
        })
    
      
    })
    
    
    describe('Forgot-Elements-values', () => {
    
        it('Email-placeholder', () => {
            forgot.checkPlaceholder(selectors.emailField, expected.placeholderEmail)
        })
    
        it('remind-password-button', () => {
            expect($(forgotSelectors.btnRmnd)).toHaveText(expected.rmdPassBtnTxt)
        })
    
    
    })

    describe('Functionality', () => {

        it('Remind-Password-redirecs-to', () => {
            browser.url('/')
            $(selectors.remindPassLink).click()
            expect(browser).toHaveUrl(forgotExpected.forgotPageUrl)
        })

        it('Remind-password-page', () => {
            expect($(forgotSelectors.forgotPage)).toBeDisplayed()
        })
        
        it('Email-empty-error-msg', () => {
            forgot.emptyEmailError()
        })
        
        it('Error-message-disapears-on-input-in-Email-field', () => {
            forgot.errorMessageDisappears(forgotSelectors.forgotEmail, selectors.errorTxt)
        }) 

        it('Error-message-appears-if-Email-is-incorrect', () => {
            forgot.incorrectEmailError()
        })

        it('Success-message-appears-if-Email-is-correct', () => {
            forgot.Success()
        })
        
       
        it('Redirected-to-starting-page-in-3-sec',()=>{
            wait: 3000
            expect(browser).toHaveUrl(expected.pageUrl)
        })
        

    })
       

})







