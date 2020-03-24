import { r as registerInstance, h } from './core-e3d1aa18.js';

const AppHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("div", { id: 'intro' }, h("p", null, "New You Medispa are the leading experts in affordable skin rejuventation."), h("p", null, "We understand that every person is unique, that's why we provide each client with your own custom-made treatment plan to give you a fresh and youthful look."), h("p", null, "Whether we're giving dermal fillers, muscle relaxing treatment or skin peels we pride ourselves on always providing a relaxed, friendly atmosphere, where your satisfaction is both paramount and guaranteed."), h("p", null, "All treatments are provided by our expert Harley Street trained nurse with over 12 years of experience."), h("p", null, "Call today for your free consultation and find out how we can give you your own New You look."), h("p", { class: "em" }, "New You Medispa, ", h("em", null, "be your own kind of beautiful.")))));
    }
    static get style() { return ":root {\n  --primary-purple: #38204A;\n  --secondary-purple: #280840;\n  --primary-green: #928E1E;\n\n  --font-family: Arial, sans-serif;\n  --secondary-font-family: GeoSlab-Light, Arial, sans-serif;\n  --default-font-size: 16px;\n  --paragraph-font-size: 1.4rem;\n  --h2-font-size: 2rem;\n}\n\nh2 {\n  color: var(--primary-green);\n  font-family: var(--font-family);\n  font-size: var(--h2-font-size);\n  font-weight: normal;\n  margin-bottom: 10px;\n  \n}\n\nh3 {\n  font-size: var(--default-font-size);\n  font-weight: 700;\n  color: var(--primary-purple);\n}\n\np {\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n  color: var(--primary-purple);\n  margin-bottom: 1rem;\n  line-height: 2rem\n}\n\np:first-child {\n  margin-top: 0;\n}\n\na {\n  color: var(--primary-purple);\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n}"; }
};

export { AppHome as app_home };
