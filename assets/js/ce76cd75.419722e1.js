"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6189],{397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var s=n(4848),r=n(8453),o=n(6540),a=n(5429);const d=function(){var e=(0,o.useState)("primary"),t=e[0],n=e[1],r=(0,o.useState)("#ff0000"),d=r[0],c=r[1],l=(0,o.useState)("secondary"),i=l[0],u=l[1],h=(0,o.useState)("#00ff00"),g=h[0],x=h[1];return(0,s.jsxs)("div",{className:"dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg",children:[(0,s.jsxs)(a.A,{title:"/src/theme/theme.config.ts",metastring:"ts",children:["export const config = { \n  //... \n  backgrounds: {\n    ",(0,s.jsx)("input",{type:"text",className:"w-[90px]",value:t,onChange:function(e){return n(e.target.value)}}),": ",(0,s.jsx)("input",{type:"text",className:"w-[70px]",value:d,onChange:function(e){return c(e.target.value)}}),",\n    ",(0,s.jsx)("input",{type:"text",className:"w-[90px]",value:i,onChange:function(e){return u(e.target.value)}}),": ",(0,s.jsx)("input",{type:"text",className:"w-[70px]",value:g,onChange:function(e){return x(e.target.value)}}),",\n    // you can add more key/value here\n  },\n  //...\n}"]}),(0,s.jsx)("p",{className:" dark:text-gray-300 text-gray-500 font-bold text-2xl text-center mb-4 border dark:border-gray-700 border-gray-200 p-2 ",children:"Generated classes"}),(0,s.jsx)("div",{className:"max-h-[300px] overflow-auto",children:(0,s.jsxs)("table",{className:"table-fixed",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Property"}),(0,s.jsx)("th",{children:"Value"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"backgrounds."+t}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ backgroundColor: "+d+" }"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"backgrounds."+i}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"{ backgroundColor: "+g+" }"})})]})]})]})})]})},c={slug:"/theming/generated-styles/backgrounds",sidebar_label:"Backgrounds",title:"Backgrounds",id:"theming-generated-styles_backgrounds",keywords:["background","backgrounds","colors","color"]},l=void 0,i={id:"Guides/Theming/Generated styles/theming-generated-styles_backgrounds",title:"Backgrounds",description:"How to use ?",source:"@site/docs/04-Guides/04-Theming/03-Generated styles/03-Backgrounds.mdx",sourceDirName:"04-Guides/04-Theming/03-Generated styles",slug:"/theming/generated-styles/backgrounds",permalink:"/react-native-boilerplate/docs/theming/generated-styles/backgrounds",draft:!1,unlisted:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs/docs/04-Guides/04-Theming/03-Generated styles/03-Backgrounds.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/theming/generated-styles/backgrounds",sidebar_label:"Backgrounds",title:"Backgrounds",id:"theming-generated-styles_backgrounds",keywords:["background","backgrounds","colors","color"]},sidebar:"tutorialSidebar",previous:{title:"Fonts",permalink:"/react-native-boilerplate/docs/theming/generated-styles/fonts"},next:{title:"Borders",permalink:"/react-native-boilerplate/docs/theming/generated-styles/borders"}},u={},h=[{value:"How to use ?",id:"how-to-use-",level:2},{value:"Generated backgrounds",id:"generated-backgrounds",level:2},{value:"Static backgrounds styles",id:"static-backgrounds-styles",level:2},{value:"Playground",id:"playground",level:2}];function g(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"how-to-use-",children:"How to use ?"}),"\n",(0,s.jsxs)(t.p,{children:["The styles generated by the ",(0,s.jsx)(t.code,{children:"backgrounds"})," section of the theme configuration are designed to apply background colors to your components.\nTo access these styles, you can use the following code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const { backgrounds } = useTheme()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"generated-backgrounds",children:"Generated backgrounds"}),"\n",(0,s.jsxs)(t.p,{children:["Here is the representation of the generated styles for a given\n",(0,s.jsx)(t.code,{children:"BackgroundConfig"})," like the one below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"title=/src/theme/theme.config.ts",children:"export const config = {\n    //...\n    backgrounds: {\n        [colorName]: colorValue,\n        //...\n    },\n    //...\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The generated styles take the following form:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"background name"}),(0,s.jsx)(t.th,{children:"Generated style"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["backgrounds.",(0,s.jsx)(t.em,{children:"colorName"})]}),(0,s.jsxs)(t.td,{children:["{ backgroundColor: ",(0,s.jsx)(t.em,{children:"colorValue"})," }"]})]})})]}),"\n",(0,s.jsx)(t.p,{children:"These styles enable you to easily apply background colors to your components as needed."}),"\n",(0,s.jsx)(t.h2,{id:"static-backgrounds-styles",children:"Static backgrounds styles"}),"\n",(0,s.jsxs)(t.p,{children:["Some background styles, don't require dynamic generation.\nTo accommodate this, we offer the ",(0,s.jsx)(t.code,{children:"staticBackgroundStyles"})," object that houses static styles for background.\nYou can use this file as-is or customize it to your preferences.\nThese styles will be seamlessly merged with the generated ones,\nmaking them accessible through the ",(0,s.jsx)(t.code,{children:"backgrounds"})," object of the ",(0,s.jsx)(t.code,{children:"useTheme"})," hook."]}),"\n",(0,s.jsx)(t.h2,{id:"playground",children:"Playground"}),"\n",(0,s.jsxs)(t.p,{children:["Here's a simple playground that provides a visual representation of the objects generated from a given ",(0,s.jsx)(t.code,{children:"backgrounds"})," configuration:"]}),"\n",(0,s.jsx)(d,{})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);