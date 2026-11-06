import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as C}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({type:s="new_tab",state:l="rest",aiChat:i=!1,query:T="Ask anything privately",hintText:N="Search DuckDuckGo",domain:j="example",tld:q="com",subdomain:S="www",subdomainVisible:D=!0,startVisual:o,endVisual:c,a11yLabel:k,testId:A,className:V,...B}){const E=["ddgds-address",`ddgds-address--${s}`,`ddgds-address--${l}`,i?"ddgds-address--ai":"",V].filter(Boolean).join(" "),F=s==="browsing"||s==="local_page"||s==="results",G=s==="new_tab"||s==="searching";return e.jsx("div",{className:E,role:"search","aria-label":k||"Address and search","data-testid":A||void 0,"data-type":s,"data-state":l,...B,children:e.jsxs("div",{className:"ddgds-address__pill",children:[e.jsxs("span",{className:"ddgds-address__left",children:[o?e.jsx("span",{className:"ddgds-address__slot","aria-hidden":"true",children:o}):e.jsx("span",{className:"ddgds-address__shield","aria-hidden":"true"}),F?e.jsxs("span",{className:"ddgds-address__url",children:[D?e.jsxs("span",{className:"ddgds-address__sub",children:[S,"."]}):null,e.jsxs("span",{className:"ddgds-address__host",children:[j,".",q]})]}):null,G?e.jsx("span",{className:"ddgds-address__query",children:s==="searching"?T:N}):null]}),e.jsxs("span",{className:"ddgds-address__right",children:[i?e.jsx("span",{className:"ddgds-address__ai",children:"Duck.ai"}):null,c?e.jsx("span",{className:"ddgds-address__slot","aria-hidden":"true",children:c}):null]})]})})}a.__docgenInfo={description:"DDGDS Browser / Address Field — paint-audited omnibar (New Tab / Browsing / Searching…).",methods:[],displayName:"AddressField",props:{type:{required:!1,tsType:{name:"union",raw:`| "new_tab"
| "browsing"
| "searching"
| "local_page"
| "results"`,elements:[{name:"literal",value:'"new_tab"'},{name:"literal",value:'"browsing"'},{name:"literal",value:'"searching"'},{name:"literal",value:'"local_page"'},{name:"literal",value:'"results"'}]},description:"",defaultValue:{value:'"new_tab"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},aiChat:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},query:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ask anything privately"',computed:!1}},hintText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search DuckDuckGo"',computed:!1}},domain:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"example"',computed:!1}},tld:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"com"',computed:!1}},subdomain:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"www"',computed:!1}},subdomainVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startVisual:{required:!1,tsType:{name:"ReactNode"},description:""},endVisual:{required:!1,tsType:{name:"ReactNode"},description:""},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"DDGDS/Browser/Address Field",component:a,parameters:{layout:"padded",...C("54693:26166")}},r={name:"Example / New Tab",args:{type:"new_tab",state:"rest",hintText:"Search DuckDuckGo"}},t={name:"Example / Searching",args:{type:"searching",state:"focused",query:"privacy browser",aiChat:!0}},d={name:"Example / Browsing",args:{type:"browsing",state:"rest",domain:"duckduckgo",tld:"com"}},n={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{type:"new_tab",state:"rest"}),e.jsx(a,{type:"new_tab",state:"hover"}),e.jsx(a,{type:"searching",state:"focused",query:"Ask anything privately",aiChat:!0})]})};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Example / New Tab",
  args: {
    type: "new_tab",
    state: "rest",
    hintText: "Search DuckDuckGo"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Example / Searching",
  args: {
    type: "searching",
    state: "focused",
    query: "privacy browser",
    aiChat: true
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,w,_;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Example / Browsing",
  args: {
    type: "browsing",
    state: "rest",
    domain: "duckduckgo",
    tld: "com"
  }
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var x,b,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <AddressField type="new_tab" state="rest" />
      <AddressField type="new_tab" state="hover" />
      <AddressField type="searching" state="focused" query="Ask anything privately" aiChat />
    </div>
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const L=["NewTab","Searching","Browsing","States"];export{d as Browsing,r as NewTab,t as Searching,n as States,L as __namedExportsOrder,H as default};
