(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"5+Nz":function(e,t,a){"use strict";a.r(t);var o=a("55Ip"),n=a("q1tI"),l=a.n(n),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"getting-started"},l.a.createElement("a",{"aria-hidden":"true",href:"#getting-started"},l.a.createElement("span",{className:"icon icon-link"})),"Getting Started"),l.a.createElement("p",null,"ahooks is a React Hooks library dedicated to providing commonly used and high quality Hooks."),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Before start, you need to know the basic usage of React and React Hooks. Follow the ",l.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer"},"link",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))," to learn the official React Hooks documentation.")),l.a.createElement("h2",{id:"first-example"},l.a.createElement("a",{"aria-hidden":"true",href:"#first-example"},l.a.createElement("span",{className:"icon icon-link"})),"First Example"),l.a.createElement("p",null,"Here is a simple codesandbox example to show the usage of ahooks."),l.a.createElement("h3",{id:"1-create-one-codesandbox"},l.a.createElement("a",{"aria-hidden":"true",href:"#1-create-one-codesandbox"},l.a.createElement("span",{className:"icon icon-link"})),"1. Create one codesandbox"),l.a.createElement("p",null,"Visit ",l.a.createElement("a",{href:"https://codesandbox.io/s/ahooks-template-k5l7x",target:"_blank",rel:"noopener noreferrer"},"https://codesandbox.io/s/ahooks-template-k5l7x",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))," to create a codesandbox. Don't forget to press the save button."),l.a.createElement("h3",{id:"2-using-ahooks"},l.a.createElement("a",{"aria-hidden":"true",href:"#2-using-ahooks"},l.a.createElement("span",{className:"icon icon-link"})),"2. Using ahooks"),l.a.createElement("p",null,"Replace the content of App.js with the following code, use the ",l.a.createElement(o["a"],{to:"/state/use-toggle"},"useToggle")," of ahooks."),l.a.createElement(c.a,{code:'import React from "react";\nimport { useToggle } from "ahooks";\n\nexport default () => {\n  const [ state, { toggle } ] = useToggle();\n\n  return (\n    <div>\n      <p>Current Boolean: {String(state)}</p>\n      <p>\n        <button onClick={() => toggle()}>Toggle</button>\n      </p>\n    </div>\n  );\n};\n',lang:"javascript"}),l.a.createElement("h3",{id:"3-explore-more-hooks"},l.a.createElement("a",{"aria-hidden":"true",href:"#3-explore-more-hooks"},l.a.createElement("span",{className:"icon icon-link"})),"3. Explore more Hooks"),l.a.createElement("p",null,"You can look up Hooks in the side menu like useRequest, useHover etc. Our document provides a variety of examples, you can click the icon in the lower right corner to view the code. At the same time, the Hooks API can be consulted at the bottom of the document. Go and try it."),l.a.createElement("h2",{id:"import-on-demand"},l.a.createElement("a",{"aria-hidden":"true",href:"#import-on-demand"},l.a.createElement("span",{className:"icon icon-link"})),"Import on demand"),l.a.createElement("p",null,"we can import individual Hooks on demand\u3002"),l.a.createElement(c.a,{code:"import useToggle from 'ahooks/es/useToggle';\n",lang:"javascript"}),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Note: ahooks supports ES6 tree shaking, so ",l.a.createElement("code",null,"import ","{"," useToggle ","}"," from 'ahooks'")," will drop the js code you don't use too.")),l.a.createElement("p",null,"We strongly recommend using ",l.a.createElement("a",{href:"https://github.com/ant-design/babel-plugin-import",target:"_blank",rel:"noopener noreferrer"},"babel-plugin-import",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),", which can convert the following code to the ",l.a.createElement("code",null,"import useToggle from 'ahooks/es/useToggle'")," way:"),l.a.createElement(c.a,{code:"import { useToggle } from 'ahooks';\n",lang:"javascript"})))}}}]);