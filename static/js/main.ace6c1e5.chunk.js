(this["webpackJsonpreact-snippets"]=this["webpackJsonpreact-snippets"]||[]).push([[0],{20:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),u=n(1),l=[{component:function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("button",{className:"circular mini ui ".concat(n?"green":"red"," compact icon button"),onClick:function(){return c(!n)}},r.a.createElement("i",{className:"power off icon"})),r.a.createElement("span",null,"I am ",n?"active":"inactive"))},code:"import React, { useState } from 'react';\n\nconst UseState = () => \n{\n  const [active, setActive] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setActive(!active)}>\n        {active ? 'off' : 'on'}\n      </button>\n      <span>I am {active ? 'active' : 'inactive'}</span>\n    </div>\n  );\n};",name:"State"}],i=r.a.createContext(0),s=function(e){var t=e.text;return r.a.createElement(i.Consumer,null,(function(e){return r.a.createElement("span",{style:{margin:5}},t," - ",e)}))},m={component:function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"ui compact mini basic button",onClick:function(){return c(n+1)}},"Value++"),r.a.createElement(i.Provider,{value:n},r.a.createElement(s,{text:"Child 1"}),r.a.createElement(s,{text:"Child 2"})))},code:"import React, { useState } from 'react';\n\nconst Context = React.createContext(0);\n\nconst Basic = () => \n{\n  const [value, setValue] = useState(0);\n  return (\n    <>\n      <button onClick={() => setValue(value + 1)}>Value++</button>\n      <Context.Provider value={value}>\n        <Child text='Child 1' />\n        <Child text='Child 2' />\n      </Context.Provider>\n    </>\n  );\n};\n\nconst Child = ({ text }) => \n{\n  return (<Context.Consumer>\n    {value => <span>{text} - {value}</span>}\n  </Context.Consumer>);\n};\n",name:"Functional Consumer"},C=r.a.createContext(0),p=function(e){var t=e.text;return r.a.createElement(C.Consumer,null,(function(e){var n=e.number,a=e.setValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{marginRight:5}},t," - ",n),r.a.createElement("button",{className:"ui compact mini basic button",onClick:function(){return a(n+1)}},"Value++"))}))},v=[{name:"Hooks",snippets:l},{name:"Context",snippets:[m,{component:function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.Provider,{value:{number:n,setValue:c}},r.a.createElement(p,{text:"Child 1"}),r.a.createElement(p,{text:"Child 2"})))},code:"import React, { useState } from 'react';\n\nconst Context = React.createContext(0);\n\nconst ChangeValueInConsumer = () => \n{\n  const [number, setValue] = useState(0);\n  return (\n    <>\n      <Context.Provider value={{ number, setValue }}>\n        <Child text='Child 1' />\n        <Child text='Child 2' />\n      </Context.Provider>\n    </>\n  );\n};\n\nconst Child = ({ text }) => \n{\n  return (<Context.Consumer>\n    {({ number, setValue }) => (<>\n      <span>{text} - {number}</span>\n      <button onClick={() => setValue(number + 1)}>Value++</button>\n    </>)}\n  </Context.Consumer>);\n};\n",name:"Change value in Consumer"}]}],d=n(16),b=n(63),x=n(18),E=n(62);b.a.registerLanguage("jsx",x.a);var f=function(e){var t=e.component,n=e.code,c=e.name,o=Object(a.useState)(!1),l=Object(u.a)(o,2),i=l[0],s=l[1];return r.a.createElement("div",{style:{marginTop:20,marginBottom:20}},r.a.createElement("h3",{className:"ui header"},c,r.a.createElement("div",{style:{float:"right",cursor:"pointer"}},r.a.createElement(d.CopyToClipboard,{text:n},r.a.createElement("i",{className:"copy link icon","data-content":"Copy code"})),r.a.createElement("i",{className:"code link icon",onClick:function(){return s(!i)}}))),r.a.createElement(t,null),i&&r.a.createElement(b.a,{language:"jsx",style:E.a},n))},h=function(e){var t=e.name,n=e.snippets;return r.a.createElement("div",{className:"ui vertical segment"},r.a.createElement("h1",null,t),n.map((function(e,t){return r.a.createElement(f,Object.assign({key:t},e))})))};n(58);o.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"ui text container"},v.flatMap((function(e,t){return r.a.createElement(h,Object.assign({key:t},e))})))}),null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ace6c1e5.chunk.js.map