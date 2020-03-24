import { r as registerInstance, h } from './core-e3d1aa18.js';

const AppContactUs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("div", { class: "location" }, h("iframe", { src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2287.852942479825!2d-1.4460263000000002!3d55.010742799999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e6ef1ca10e32b%3A0x8c4b5096ea3a3f7c!2s17+Northumberland+Square%2C+North+Shields%2C+Tyne+and+Wear+NE30+1PX!5e0!3m2!1sen!2suk!4v1416777768507", width: "100%", height: "300", frameborder: "0" })), h("div", { class: "contact-information" }, h("h2", null, "Contact us"), "New You Medispa", h("p", null, h("strong", null, "Email:"), " reception@newyou-medispa.co.uk"), h("p", null, h("strong", null, "Address:"), h("br", null), "17 Northumberland Square,", h("br", null), "North Shields,", h("br", null), "Tyne and Wear,", h("br", null), "NE30 1PX"))));
    }
    static get style() { return ":root {\n  --primary-purple: #38204A;\n  --secondary-purple: #280840;\n  --primary-green: #928E1E;\n\n  --font-family: Arial, sans-serif;\n  --secondary-font-family: GeoSlab-Light, Arial, sans-serif;\n  --default-font-size: 16px;\n  --paragraph-font-size: 1.4rem;\n  --h2-font-size: 2rem;\n}\n\nh2 {\n  color: var(--primary-green);\n  font-family: var(--font-family);\n  font-size: var(--h2-font-size);\n  font-weight: normal;\n  margin-bottom: 10px;\n  \n}\n\nh3 {\n  font-size: var(--default-font-size);\n  font-weight: 700;\n  color: var(--primary-purple);\n}\n\np {\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n  color: var(--primary-purple);\n  margin-bottom: 1rem;\n  line-height: 2rem\n}\n\np:first-child {\n  margin-top: 0;\n}\n\na {\n  color: var(--primary-purple);\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n}\n\n:host {\n  display: block;\n}\n\niframe, .location {\n  width: 100%;\n}"; }
};

export { AppContactUs as app_contact_us };
