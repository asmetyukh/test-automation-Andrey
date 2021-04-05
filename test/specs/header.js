import selectors from '../selectors/header.sel';
import expected from '../expected/header.exp';
import header from '../pages/header.page';

describe('header', () => {

    describe('elements-displayed', () => {

        before(() => {
            header.openPage();
        })
       
        it('Header', () => {
            browser.url('/')
            expect($(selectors.header)).toBeDisplayed()
        })
    
        it('Rating-button', () => {
            expect($(selectors.ratingBtn)).toBeDisplayed()
        })
    
        it('Public-game-button', () => {
            expect($(selectors.gameBttn)).toBeDisplayed()
        })
    
    })

    describe('functionality', () => {

        it('Ratings-button-redirects', () => {
            $(selectors.ratingBtn).click();
            expect(browser).toHaveUrl(expected.usersUrl)
        })
    
        it('Ratings-page-displayed', () => {
            expect($(selectors.ratings)).toBeDisplayed()
        })

        it('Back-to-login-button-displayed', () => {
            expect($(selectors.btnLogin)).toBeDisplayed()
        })

        it('Ratings-button-redirects', () => {
            $(selectors.btnLogin).click();
            expect(browser).toHaveUrl(expected.pageUrl)
        })

        it('login-page-displayed', () => {
            expect($(selectors.loginPage)).toBeDisplayed()
        })

        it('public-game-button-redirects', () => {
            $(selectors.gameBttn).click();
            expect(browser).toHaveUrl(expected.publicUrl)
        })

        it('public-game-page-displayed', () => {
            expect($(selectors.publicGameBttn)).toBeDisplayed()
        })
    
    })

})