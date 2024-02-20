"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9030],{5693:(n,e,t)=>{t.d(e,{A:()=>M});var i=t(6540),a=t(4848);function s(n){var e,t=function(n){var e=i.Children.toArray(n),t=e.find((function(n){return i.isValidElement(n)&&"mdxAdmonitionTitle"===n.type})),s=e.filter((function(n){return n!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:s.length>0?(0,a.jsx)(a.Fragment,{children:s}):null}}(n.children),s=t.mdxAdmonitionTitle,r=t.rest,c=null!=(e=n.title)?e:s;return Object.assign({},n,c&&{title:c},{children:r})}var r=t(8215),c=t(1312),o=t(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(n){var e=n.type,t=n.className,i=n.children;return(0,a.jsx)("div",{className:(0,r.A)(o.G.common.admonition,o.G.common.admonitionType(e),l.admonition,t),children:i})}function u(n){var e=n.icon,t=n.title;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:e}),t]})}function m(n){var e=n.children;return e?(0,a.jsx)("div",{className:l.admonitionContent,children:e}):null}function h(n){var e=n.type,t=n.icon,i=n.title,s=n.children,r=n.className;return(0,a.jsxs)(d,{type:e,className:r,children:[(0,a.jsx)(u,{title:i,icon:t}),(0,a.jsx)(m,{children:s})]})}function j(n){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},n,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var g={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(n){return(0,a.jsx)(h,Object.assign({},g,n,{className:(0,r.A)("alert alert--secondary",n.className),children:n.children}))}function x(n){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},n,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var v={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(n){return(0,a.jsx)(h,Object.assign({},v,n,{className:(0,r.A)("alert alert--success",n.className),children:n.children}))}function b(n){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},n,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var A={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(n){return(0,a.jsx)(h,Object.assign({},A,n,{className:(0,r.A)("alert alert--info",n.className),children:n.children}))}function O(n){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},n,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var C={icon:(0,a.jsx)(O,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function y(n){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},n,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var _={icon:(0,a.jsx)(y,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var w={icon:(0,a.jsx)(O,{}),title:(0,a.jsx)(c.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var T={note:f,tip:p,info:N,warning:function(n){return(0,a.jsx)(h,Object.assign({},C,n,{className:(0,r.A)("alert alert--warning",n.className),children:n.children}))},danger:function(n){return(0,a.jsx)(h,Object.assign({},_,n,{className:(0,r.A)("alert alert--danger",n.className),children:n.children}))}},z={secondary:function(n){return(0,a.jsx)(f,Object.assign({title:"secondary"},n))},important:function(n){return(0,a.jsx)(N,Object.assign({title:"important"},n))},success:function(n){return(0,a.jsx)(p,Object.assign({title:"success"},n))},caution:function(n){return(0,a.jsx)(h,Object.assign({},w,n,{className:(0,r.A)("alert alert--warning",n.className),children:n.children}))}};const k=Object.assign({},T,z);function M(n){var e,t=s(n),i=(e=t.type,k[e]||(console.warn('No admonition component found for admonition type "'+e+'". Using Info as fallback.'),k.info));return(0,a.jsx)(i,Object.assign({},t))}},2873:(n,e,t)=>{t.d(e,{A:()=>m});t(6540);var i=t(1312),a=t(7559),s=t(8774),r=t(1367),c=t(8215);const o={iconEdit:"iconEdit_Z9Sw"};var l=t(4848),d=["className"];function u(n){var e=n.className,t=(0,r.A)(n,d);return(0,l.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.A)(o.iconEdit,e),"aria-hidden":"true"},t,{children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function m(n){var e=n.editUrl;return(0,l.jsxs)(s.A,{to:e,className:a.G.common.editThisPage,children:[(0,l.jsx)(u,{}),(0,l.jsx)(i.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},9017:(n,e,t)=>{t.d(e,{A:()=>E});var i=t(6540),a=t(8453),s=t(5260),r=t(5429),c=t(4848);function o(n){return(0,c.jsx)("code",Object.assign({},n))}var l=t(8774);var d=t(8215),u=t(1367),m=t(5066),h=t(3427),j=t(2303),g=t(1422);const f={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var x=["summary","children"];function v(n){return!!n&&("SUMMARY"===n.tagName||v(n.parentElement))}function p(n,e){return!!n&&(n===e||p(n.parentElement,e))}function b(n){var e=n.summary,t=n.children,a=(0,u.A)(n,x);(0,h.A)().collectAnchor(a.id);var s=(0,j.A)(),r=(0,i.useRef)(null),o=(0,g.u)({initialState:!a.open}),l=o.collapsed,d=o.setCollapsed,b=(0,i.useState)(a.open),A=b[0],N=b[1],O=i.isValidElement(e)?e:(0,c.jsx)("summary",{children:null!=e?e:"Details"});return(0,c.jsxs)("details",Object.assign({},a,{ref:r,open:A,"data-collapsed":l,className:(0,m.A)(f.details,s&&f.isBrowser,a.className),onMouseDown:function(n){v(n.target)&&n.detail>1&&n.preventDefault()},onClick:function(n){n.stopPropagation();var e=n.target;v(e)&&p(e,r.current)&&(n.preventDefault(),l?(d(!1),N(!0)):d(!0))},children:[O,(0,c.jsx)(g.N,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:function(n){d(n),N(!n)},children:(0,c.jsx)("div",{className:f.collapsibleContent,children:t})})]}))}const A={details:"details_b_Ee"};var N="alert alert--info";function O(n){var e=Object.assign({},(function(n){if(null==n)throw new TypeError("Cannot destructure "+n)}(n),n));return(0,c.jsx)(b,Object.assign({},e,{className:(0,d.A)(N,A.details,e.className)}))}function C(n){var e=i.Children.toArray(n.children),t=e.find((function(n){return i.isValidElement(n)&&"summary"===n.type})),a=(0,c.jsx)(c.Fragment,{children:e.filter((function(n){return n!==t}))});return(0,c.jsx)(O,Object.assign({},n,{summary:t,children:a}))}var y=t(8141);function _(n){return(0,c.jsx)(y.A,Object.assign({},n))}const w={containsTaskList:"containsTaskList_mC6p"};function T(n){if(void 0!==n)return(0,d.A)(n,(null==n?void 0:n.includes("contains-task-list"))&&w.containsTaskList)}const z={img:"img_ev3q"};var k=t(5693);const M={Head:s.A,details:C,Details:C,code:function(n){return function(n){return void 0!==n.children&&i.Children.toArray(n.children).every((function(n){return"string"==typeof n&&!n.includes("\n")}))}(n)?(0,c.jsx)(o,Object.assign({},n)):(0,c.jsx)(r.A,Object.assign({},n))},a:function(n){return(0,c.jsx)(l.A,Object.assign({},n))},pre:function(n){return(0,c.jsx)(c.Fragment,{children:n.children})},ul:function(n){return(0,c.jsx)("ul",Object.assign({},n,{className:T(n.className)}))},li:function(n){return(0,h.A)().collectAnchor(n.id),(0,c.jsx)("li",Object.assign({},n))},img:function(n){return(0,c.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},n,{className:(e=n.className,(0,d.A)(e,z.img))}));var e},h1:function(n){return(0,c.jsx)(_,Object.assign({as:"h1"},n))},h2:function(n){return(0,c.jsx)(_,Object.assign({as:"h2"},n))},h3:function(n){return(0,c.jsx)(_,Object.assign({as:"h3"},n))},h4:function(n){return(0,c.jsx)(_,Object.assign({as:"h4"},n))},h5:function(n){return(0,c.jsx)(_,Object.assign({as:"h5"},n))},h6:function(n){return(0,c.jsx)(_,Object.assign({as:"h6"},n))},admonition:k.A,mermaid:function(){return null}};function E(n){var e=n.children;return(0,c.jsx)(a.x,{components:M,children:e})}},9022:(n,e,t)=>{t.d(e,{A:()=>r});t(6540);var i=t(8215),a=t(8774),s=t(4848);function r(n){var e=n.permalink,t=n.title,r=n.subLabel,c=n.isNext;return(0,s.jsxs)(a.A,{className:(0,i.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},6403:(n,e,t)=>{t.d(e,{A:()=>c});t(6540);var i=t(8215),a=t(8774);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=t(4848);function c(n){var e=n.permalink,t=n.label,c=n.count;return(0,r.jsxs)(a.A,{href:e,className:(0,i.A)(s.tag,c?s.tagWithCount:s.tagRegular),children:[t,c&&(0,r.jsx)("span",{children:c})]})}},2323:(n,e,t)=>{t.d(e,{A:()=>o});t(6540);var i=t(8215),a=t(1312),s=t(6403);const r={tags:"tags_jXut",tag:"tag_QGVx"};var c=t(4848);function o(n){var e=n.tags;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,i.A)(r.tags,"padding--none","margin-left--sm"),children:e.map((function(n){var e=n.label,t=n.permalink;return(0,c.jsx)("li",{className:r.tag,children:(0,c.jsx)(s.A,{label:e,permalink:t})},t)}))})]})}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var i=t(6540);const a={},s=i.createContext(a);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);