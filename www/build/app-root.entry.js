import { r as registerInstance, h } from './core-e3d1aa18.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("global-header", null), h("social-bar", null), h("div", { id: "body" }, h("aside", null, h("treatment-sidebar", null), h("testimonial-sidebar", null)), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'app-home', exact: true }), h("stencil-route", { url: '/about', component: 'app-about' }), h("stencil-route", { url: '/book-a-consultation', component: 'app-book' }), h("stencil-route", { url: '/price-list', component: 'app-price-list' }), h("stencil-route", { url: '/contact-us', component: 'app-contact-us' })))))));
    }
    static get style() { return "#body {\n  margin: 1rem 1rem 3rem;\n  display: -ms-flexbox;\n  display: flex;\n}\n\naside {\n  margin-right: 2rem;\n  -ms-flex: 0 0 24%;\n  flex: 0 0 24%;\n}\n\n\@media screen and (max-width: 940px) {\n  /*aside {\n    display: block;\n    width: 100%;\n    flex-grow: 2;\n    margin-top: 4rem; \n  }*/\n}"; }
};

export { AppRoot as app_root };
