import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{f as v}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({state:l="rest",active:s="true",label:n="Search",a11yLabel:m,testId:f}){return e.jsxs("button",{type:"button",className:"ddgds-hit ddgds-vtab"+(s==="true"?" is-active":"")+(l==="focused"?" is-focused":""),"aria-label":m||n,"aria-current":s==="true"?"page":void 0,"data-testid":f,"data-state":l,"data-active":s,children:[e.jsx("span",{children:n}),e.jsx("span",{className:"ddgds-vtab__bar"})]})}a.__docgenInfo={description:"DDGDS Browser / Vertical Tab.",methods:[],displayName:"BrowserVerticalTab",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},active:{required:!1,tsType:{name:"union",raw:'"true" | "false"',elements:[{name:"literal",value:'"true"'},{name:"literal",value:'"false"'}]},description:"",defaultValue:{value:'"true"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"DDGDS/Browser/Vertical Tab",component:a,parameters:{layout:"padded",...v("54693:25340")}},r={name:"Example / Default",args:{state:"rest",active:"true",label:"Search"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(a,{active:"true",label:"Search"}),e.jsx(a,{active:"false",label:"Duck.ai"}),e.jsx(a,{active:"true",state:"focused",label:"Settings"})]})})};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "rest",
    active: "true",
    label: "Search"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var o,u,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    }}><BrowserVerticalTab active="true" label="Search" /><BrowserVerticalTab active="false" label="Duck.ai" /><BrowserVerticalTab active="true" state="focused" label="Settings" /></div>
    </div>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const h=["Example","Gallery"];export{r as Example,t as Gallery,h as __namedExportsOrder,D as default};
