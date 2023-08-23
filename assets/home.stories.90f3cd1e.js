var u=Object.defineProperty;var a=(o,t)=>u(o,"name",{value:t,configurable:!0});import"./jsx-runtime.9c618e4b.js";import{c as e,A as i,M as c}from"./Props.15e7636b.js";import"./iframe.020113d5.js";import"./string.52c38437.js";import"./index.26d99b17.js";import"./es.map.constructor.316dd717.js";import"./es.number.to-fixed.fdaa5f4b.js";function l(){return l=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(o[s]=r[s])}return o},l.apply(this,arguments)}a(l,"_extends");const p={},d="wrapper";function m({components:o,...t}){return e(d,l({},p,t,{components:o,mdxType:"MDXLayout"}),e(c,{title:"Home",mdxType:"Meta"}),e("h1",null,"VenusUI Design System"),e("p",null,"A set of tools and guidelines to empower developers to create universal experiences faster, more scalable and more consistently."),e("h2",null,"Packages"),e("p",null,"This codebase is a monorepo with a set of individually versioned libraries."),e("ul",null,e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/rcasachi/venus/tree/main/packages/tokens"},"@venusui/tokens")," : Design tokens are a tech-agnostic way to store variables"),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/rcasachi/venus/tree/main/packages/docs"},"@venusui/docs")," : Our documentation website/stories"),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/rcasachi/venus/tree/main/packages/components"},"@venusui/components")," : A set of React styled components that follow our design tokens")),e("h2",null,"Install"),e("p",null,"In order to install VenusUI components, you should run:"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`yarn add @venusui/components
`)),e("p",null,"If you want to get access to VenusUI tokens, you may run:"),e("pre",null,e("code",{parentName:"pre",className:"language-bash"},`yarn add @venusui/tokens
`)),e("h2",null,"Usage"),e("p",null,"You should wrap your application with ThemeProvider and use the components normally:"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@venusui/components";

import App from "./App";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
`)),e("h3",null,"How to switch through themes"),e("p",null,"You may create a button to change your theme:"),e("pre",null,e("code",{parentName:"pre",className:"language-javascript"},`const ThemeToggleButton = () => {
  return (
    <ThemeContext.Consumer>
      {(context: any) => (
        <Button onClick={context.cycleToggleMode}>
          Mode: {context.colorMode}
        </Button>
      )}
    </ThemeContext.Consumer>
  );
};
`)),e("h2",null,"Contributing"),e("p",null,"We welcome all kind of contributions. Please read our CONTRIBUTING.md first, we follow some practices to keep a common and standarized architecture in our changes."))}a(m,"MDXContent");m.isMDXComponent=!0;const h=a(()=>{throw new Error("Docs-only story")},"__page");h.parameters={docsOnly:!0};const n={title:"Home",includeStories:["__page"]},g={};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:()=>e(i,{mdxStoryNameToKey:g,mdxComponentAnnotations:n},e(m,null))};const x=["__page"];export{x as __namedExportsOrder,h as __page,n as default};
//# sourceMappingURL=home.stories.90f3cd1e.js.map
