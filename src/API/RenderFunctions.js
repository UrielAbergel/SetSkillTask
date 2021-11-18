import React from "react";
import {MyButton} from "../Component/MyButton"
import {MyInput} from "../Component/MyInput"
import {MyTabs} from "../Component/MyTabs"
import { MyLabel } from "../Component/MyLabel";
import { MyTab } from "../Component/MyTab";


const keysToComponentMap = {
    MyButton: MyButton,
    MyInput: MyInput,
    MyTabs: MyTabs,
    MyLabel: MyLabel,
    components: MyTab,
  };


  function renderTab(config){
        return React.createElement(
             MyTab,
             {
                title: config.title,
                key: config.id,
                components: config.components
             },
             config.components &&
                 (typeof config.components === 'string'
                 ? config.components
                 : config.components.map(child => renderer(child)))
     
         )  
    
  }

  
function renderer(config) {
    console.log(config)
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
                 : config.children.map(child => renderTab(child)))
     
         )  
    }
}

export default renderer;
