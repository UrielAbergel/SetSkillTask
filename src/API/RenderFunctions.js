import React from "react";
import {MyButton} from "../Component/MyButton"
import {MyInput} from "../Component/MyInput"
import {MyTabs} from "../Component/MyTabs"
import { MyLabel } from "../Component/MyLabel";


const keysToComponentMap = {
    MyButton: MyButton,
    MyInput: MyInput,
    MyTabs: MyTabs,
    MyLabel: MyLabel,
  };

function renderChildTab(params) {

    
}
  
function renderer(config) {
    if (typeof keysToComponentMap[config.base_component] !== 'undefined'){
        return React.createElement(
             keysToComponentMap[config.base_component],
             {
                id: config.id,
                key: config.id,
                text: config.text ? config.text : null,
                attributes: config.attributes ? config.attributes : null,
                click: config.click ? config.click : null,
             },
             config.children &&
                 (typeof config.children === 'string'
                 ? config.children
                 : config.children.map(child => renderer(child)))
     
         )  
    }
}

export default renderer;
