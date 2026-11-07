import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{f as b}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({state:l="rest",selected:s="true",label:n="Search",a11yLabel:m,testId:f}){return e.jsxs("button",{type:"button",className:"ddgds-hit ddgds-vtab"+(s==="true"?" is-selected":"")+(l==="focused"?" is-focused":""),"aria-label":m||n,"aria-current":s==="true"?"page":void 0,"data-testid":f,"data-state":l,"data-selected":s,children:[e.jsx("span",{children:n}),e.jsx("span",{className:"ddgds-vtab__bar"})]})}a.__docgenInfo={description:"DDGDS Browser / Vertical Tab.",methods:[],displayName:"BrowserVerticalTab",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},selected:{required:!1,tsType:{name:"union",raw:'"true" | "false"',elements:[{name:"literal",value:'"true"'},{name:"literal",value:'"false"'}]},description:"",defaultValue:{value:'"true"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"DDGDS/Browser/Vertical Tab",component:a,parameters:{layout:"padded",...b("54693:25340")}},r={name:"Example / Default",args:{state:"rest",selected:"true",label:"Search"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(a,{selected:"true",label:"Search"}),e.jsx(a,{selected:"false",label:"Duck.ai"}),e.jsx(a,{selected:"true",state:"focused",label:"Settings"})]})})};var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "rest",
    selected: "true",
    label: "Search"
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var o,u,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Gallery",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "flex-start"
  }}>
      <div style={{
      display: "flex",
      gap: 12
    }}><BrowserVerticalTab selected="true" label="Search" /><BrowserVerticalTab selected="false" label="Duck.ai" /><BrowserVerticalTab selected="true" state="focused" label="Settings" /></div>
    </div>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const h=["Example","Gallery"];export{r as Example,t as Gallery,h as __namedExportsOrder,D as default};
