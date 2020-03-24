import { r as registerInstance, h } from './core-e3d1aa18.js';

const SocialBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "social", itemscope: true, itemtype: "http://data-vocabulary.org/Organization" }, h("div", { class: "telephone" }, h("span", { class: "phoneIcon", "aria-hidden": "true" }), h("a", { itemprop: "tel", href: "tel:01912573141" }, "0191 257 3141")), h("a", { class: "socialMedia", href: "https://www.facebook.com/pages/New-You-Medispa/464518073640015", title: "View New You Medispa on Facebook", target: "_blank" }, h("span", { class: "facebookIcon", "aria-hidden": "true" }), h("span", { class: "iconFontExplination" }, "New You Medispa on Facebook"))));
    }
    static get style() { return ":host {\n  display: block;\n}\n\n.social {\n  background-color: #38204A;\n  padding: 1rem;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.social * {\n  color: #FFF;\n  text-decoration: none\n}\n\n.telephone {\n  /* flex-grow: 3; */\n}\n\n.socialMedia {\n  /* flex-grow: 1; */\n}\n\n\n/* \n  Icons \n*/\n.phoneIcon:before {\n  font-family: IconFonts;\n  font-size: 1.2rem;\n  content: \"\\e942\";\n  margin-right: .5rem;\n}\n\n.facebookIcon:before {\n  font-family: IconFonts;\n  font-size: 2rem;\n  content: \"\\ea8c\"\n}\n\n\n/* \n  Helper \n*/\n.iconFontExplination,\n.hidden {\n  display: none\n}"; }
};

export { SocialBar as social_bar };
