import { configure } from "@testing-library/react";
import React from "react";


function renderer(componentListConfig) {
    return React.createElement(
        componentListConfig.base_component,
        {
            src: componentListConfig.src
        },
        componentListConfig.children &&
            (typeof componentListConfig.children === 'string'
            ? componentListConfig.children
            : componentListConfig.children.map(child => renderer(child)))

    )
}

export default renderer;
