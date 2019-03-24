import React from './ReactFake';
import Details from './Details'

export default class DetailsError extends Details {
    constructor({itemid=undefined, metaapi=undefined, message="Undefined error message"}={}) {
        super({ itemid, metaapi});
        this.message = message;
    }
    theatreIaWrap() {
        return (
        <div class="dweb-message">
            {this.message}
        </div>
        )
    }
    render(res) {
        super.render(res)
    }
    itemDetailsAboutJSX() { }
}
