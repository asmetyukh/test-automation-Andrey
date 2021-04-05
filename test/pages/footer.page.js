import selectors from '../selectors/footer.sel';
import expected from '../expected/footer.exp';
import Base from './base.page';

class footer extends Base {

    openPage() {
        browser.url(selectors.Url)
    }

}

export default new footer;