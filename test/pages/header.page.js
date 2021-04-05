import selectors from '../selectors/header.sel';
import expected from '../expected/header.exp';
import Base from './base.page';

class header extends Base {

    openPage() {
        browser.url(selectors.Url)
    }

}

export default new header;