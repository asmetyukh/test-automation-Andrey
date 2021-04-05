import selectors from '../selectors/login.sel';
import expected from '../expected/login.exp';
import creds from '../data/credentials';
import Base from './base.page';


class Login extends Base {
    openPage() {
        browser.url(selectors.Url)
    }

    emptyPasswordError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.btnLogin).click();
        expect($(selectors.errorTxt)).toBeDisplayed();
        expect($(selectors.errorTxt)).toHaveText(expected.emptyErrorMsg);
    }

    emptyEmailError() {
        this.openPage();
        $(selectors.passField).setValue(creds.player.password); //Enter valid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.errorTxt)).toBeDisplayed();
        expect($(selectors.errorTxt)).toHaveText(expected.emptyErrorMsg);
    }

    bothFieldsEmptyError() {
        this.openPage();
        $(selectors.btnLogin).click();
        expect($(selectors.errorTxt)).toBeDisplayed();
        expect($(selectors.errorTxt)).toHaveText(expected.emptyErrorMsg);
    }

    incorrectEmailError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email + 'a'); //Enter invalid email into email field
        $(selectors.passField).setValue(creds.player.password); //Enter valid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.errorTxt)).toBeDisplayed();
        expect($(selectors.errorTxt)).toHaveText(expected.incorrectEmailTxt);
    }

    incorrectPasswordError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.passField).setValue(creds.player.password + 'a'); //Enter invalid pass into password field
        $(selectors.btnLogin).click();
        expect($(selectors.errorTxt)).toBeDisplayed();
    }    

 

}

export default new Login;