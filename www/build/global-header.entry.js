import { r as registerInstance, h } from './core-e3d1aa18.js';

const GlobalHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("header", null, h("a", { class: "logo", href: "/" }, h("img", { src: "./assets/icon/logo.jpg" })), h("nav", { role: "navigation" }, h("stencil-route-link", { url: '/', activeClass: 'green', exact: true }, "Home"), h("stencil-route-link", { url: '/about', activeClass: 'green' }, "About"), h("stencil-route-link", { url: '/products', activeClass: 'green' }, "Products"), h("stencil-route-link", { url: '/treatments', activeClass: 'green' }, "Treatments"), h("stencil-route-link", { url: '/book-a-consultation', activeClass: 'green' }, "Book an appointment"), h("stencil-route-link", { url: '/price-list', activeClass: 'green' }, "Price List"), h("stencil-route-link", { url: '/contact-us', activeClass: 'green' }, "Contact Us"))));
    }
    static get style() { return ":host {\n  display: block;\n}\n\nheader {\n  font-size: 1.6rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n\@media screen and (max-width: 930px) {\n  header { \n    -ms-flex-pack: center; \n    justify-content: center;\n  }\n\n  nav {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n}\n\n.header,\n.subHeader {\n  color: #928E1E\n}\n\nheader {\n  background-color: #280840;\n  padding: 1rem\n}\n\n/* \n  Logo \n*/\n.logo {\n  width: 27rem;\n  display: block;\n  text-decoration: none;\n  /* margin: 0 auto */\n}\n\nimg {\n  width: 100%;\n}\n\n/* .logo-ny {\n  font-size: 4.9rem\n}\n\n.logo-m {\n  font-size: 1.6rem\n} */\n\n/* \n  Nav bar \n*/\nnav {\n  text-align: center;\n  padding-top: 1rem\n}\n\nnav a {\n  color: #FFF;\n  font-family: Lao-UI, Arial, sans-serif;\n  padding: 0 1rem;\n  line-height: 3rem;\n  text-transform: lowercase;\n  white-space: nowrap;\n  font-size: 1.5rem;\n  text-decoration: none\n}\n\nnav a.green,\nnav a:hover {\n  color: #928E1E\n}"; }
};

export { GlobalHeader as global_header };
