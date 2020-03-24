import { r as registerInstance, h } from './core-e3d1aa18.js';

const TestimonialSideBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("aside-sector", { heading: "what our clients say about us.." }));
    }
    static get style() { return ":host {\n  display: block;\n}"; }
};

export { TestimonialSideBar as testimonial_sidebar };
