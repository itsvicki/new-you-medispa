import { r as registerInstance, h } from './core-e3d1aa18.js';

const AppPriceList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("h2", null, "Treatment Price List")));
    }
    static get style() { return ""; }
};

export { AppPriceList as app_price_list };
