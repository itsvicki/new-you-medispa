import { r as registerInstance, h } from './core-e3d1aa18.js';

const AppBook = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("h2", null, "Book an appointment"), h("p", null, "Sadly, we have had to temporarily close the clinic, the safety of our clients is paramount to us. We will update you via Facebook and email."), h("p", null, "Take care and keep safe.")));
    }
    static get style() { return ":root {\n  --primary-purple: #38204A;\n  --secondary-purple: #280840;\n  --primary-green: #928E1E;\n\n  --font-family: Arial, sans-serif;\n  --secondary-font-family: GeoSlab-Light, Arial, sans-serif;\n  --default-font-size: 16px;\n  --paragraph-font-size: 1.4rem;\n  --h2-font-size: 2rem;\n}\n\nh2 {\n  color: var(--primary-green);\n  font-family: var(--font-family);\n  font-size: var(--h2-font-size);\n  font-weight: normal;\n  margin-bottom: 10px;\n  \n}\n\nh3 {\n  font-size: var(--default-font-size);\n  font-weight: 700;\n  color: var(--primary-purple);\n}\n\np {\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n  color: var(--primary-purple);\n  margin-bottom: 1rem;\n  line-height: 2rem\n}\n\np:first-child {\n  margin-top: 0;\n}\n\na {\n  color: var(--primary-purple);\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n}"; }
};

export { AppBook as app_book };
