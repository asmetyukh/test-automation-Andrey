import footer from '../pages/footer.page';
import selectors from '../selectors/footer.sel';
import expected from '../expected/footer.exp';


describe('footer', () => {

    describe('elements-displayed', () => {

        before(() => {
            footer.openPage();
        })

        it('Language-selection', () => {
            browser.url('/')
            expect($(selectors.links)).toBeDisplayed()
        })
        
        it('Copyright-text', () => {
            expect($(selectors.copyrightTxT)).toBeDisplayed()
        })
    
        it('Version', () => {
            expect($(selectors.versionTxT)).toBeDisplayed()
        })
    
        it('Developer-link', () => {
            expect($(selectors.developerLink)).toBeDisplayed()
        })

    })

    describe('elements-values', () => {

        it('copyright-text', () => {
            expect($(selectors.copyrightTxT)).toHaveTextContaining(expected.copyright)
        })
    
        it('Version-text', () => {
            expect($(selectors.versionTxT)).toHaveTextContaining(expected.version)
        })
    
        it('Version-text', () => {
            expect($(selectors.versionTxT)).toHaveTextContaining(expected.webBy)
        })
    
        it('Developer-link', () => {
            expect($(selectors.developerLink)).toHaveHref(expected.developerLinkUrl)
        })
    
    })

})