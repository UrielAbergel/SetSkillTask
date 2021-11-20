# SetSkill Junior Task

# Instructions
* Run ` git clone git@github.com:UrielAbergel/SetSkillTask.git `
* Run `cd SetSkillTask && npm install`
* Run `cd SetSkillTask && npm start`


# Explain the implementaion 
The files that responsible for creating the components.

* ComponentJson.js is responsible for storing a JSON file that defines the structure of the website.
  
* RenderFunctions.js is responsible  for rendering the ComponentJSON file, The main renderer function uses the file and checks it recursively, For each component, the function create ReactElement and pass all the props and children recursively.


<img width="767" alt="Screen Shot 2021-11-21 at 0 44 04" src="https://user-images.githubusercontent.com/54840897/142743425-84b49ed7-13ab-43f2-90e0-969df73140ef.png">



