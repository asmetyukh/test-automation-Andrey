import selectors from '../selectors/forgot.sel';
import expected from '../expected/forgot.exp';
import creds from '../data/credentials';
import Base from './base.page';


class forgot extends base {

    openPage() {
        browser.url(selectors.URL)
    }

    correctURL() {
        expect(browser).toHaveUrl(expected.forgotPageUrl);
    }

    emptyEmailError() {
        this.openPage();
        $(selectors.btnRmnd).click();
        expect($(selectors.errorTxt)).toBeDisplayed();
        expect($(selectors.errorTxt)).toHaveText(expected.EmtyEmailTxt);
    }

    incorrectEmailError() {
        this.openPage();
        $(selectors.forgotEmail).setValue(creds.player.email + 'a'); //Enter invalid email into email field
        $(selectors.btnRemind).click();
        expect($(selectors.errorTxt)).toBeDisplayed();
        expect($(selectors.errorTxt)).toHaveText(expected.forgotIncorrectEmailTxt);
    }

    Success() {
        this.openPage();
        $(selectors.forgotEmail).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.btnRemind).click();
        expect($(selectors.success)).toBeDisplayed();
        expect($(selectors.success)).toHaveText(expected.success);
    }
}

export default new forgot;