import { r as registerInstance, h, H as Host } from './core-e3d1aa18.js';

const AsideSector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = '';
    }
    render() {
        return (h(Host, null, h("article", { class: "treatments" }, h("h3", null, this.heading), h("slot", null))));
    }
    static get style() { return ":root {\n  --primary-purple: #38204A;\n  --secondary-purple: #280840;\n  --primary-green: #928E1E;\n\n  --font-family: Arial, sans-serif;\n  --secondary-font-family: GeoSlab-Light, Arial, sans-serif;\n  --default-font-size: 16px;\n  --paragraph-font-size: 1.4rem;\n  --h2-font-size: 2rem;\n}\n\nh2 {\n  color: var(--primary-green);\n  font-family: var(--font-family);\n  font-size: var(--h2-font-size);\n  font-weight: normal;\n  margin-bottom: 10px;\n  \n}\n\nh3 {\n  font-size: var(--default-font-size);\n  font-weight: 700;\n  color: var(--primary-purple);\n}\n\np {\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n  color: var(--primary-purple);\n  margin-bottom: 1rem;\n  line-height: 2rem\n}\n\np:first-child {\n  margin-top: 0;\n}\n\na {\n  color: var(--primary-purple);\n  font-family: var(--font-family);\n  font-size: var(--paragraph-font-size);\n}\n\n:host {\n  display: block;\n}\n\narticle {\n  margin-bottom: 2rem;\n  -ms-flex: 1 100%;\n  flex: 1 100%;\n  margin-right: .5rem\n}\n\n/* .title {\n  margin: 0 0 1rem;\n  padding: 1rem;\n  background-color: var(--primary-purple);\n  background-image: url(\"../images/background_dot_pink.png\");\n}*/\n\nh3 {\n  font-family: var(--secondary-font-family);\n  font-size: var(--default-font-size);\n  font-weight: normal;\n  color: #FFF;\n  margin: 0 0 1rem;\n  padding: 10px;\n  \n  background-image: url(\"./assets/images/background_dot_pink.png\");\n  background-color: var(--secondary-purple);\n\n  text-align: center;\n  text-transform: lowercase;\n  vertical-align: middle\n}"; }
};

export { AsideSector as aside_sector };
