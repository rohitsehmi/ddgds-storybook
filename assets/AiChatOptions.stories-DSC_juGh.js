import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{h as u}from"./glyphs-Dy1q1Og_.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function s({state:i="active",a11yLabel:p,testId:m}){return e.jsxs("div",{className:"ddgds-ai-options",role:"toolbar","aria-label":p||"AI chat options","data-testid":m,"data-state":i,children:[e.jsxs("div",{className:"ddgds-ai-options__cluster",children:[e.jsx("button",{type:"button",className:"ddgds-chip-btn","aria-label":"Attach",children:e.jsx(u,{})}),e.jsx("button",{type:"button",className:"ddgds-chip-btn",children:"Tools"})]}),e.jsxs("div",{className:"ddgds-ai-options__cluster",children:[e.jsx("span",{className:"ddgds-chip-btn",children:"GPT-4o mini"}),e.jsx("button",{type:"button",className:"ddgds-ai-options__submit"+(i==="initial"?" is-idle":""),"aria-label":"Submit",children:"↑"})]})]})}s.__docgenInfo={description:"DDGDS AI Chat / Options — composer tools row.",methods:[],displayName:"AiChatOptions",props:{state:{required:!1,tsType:{name:"union",raw:'"initial" | "active"',elements:[{name:"literal",value:'"initial"'},{name:"literal",value:'"active"'}]},description:"",defaultValue:{value:'"active"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"DDGDS/AI Chat/Options",component:s,parameters:{layout:"padded",...x("54693:26334")}},a={name:"Example / Default",args:{state:"active"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(s,{state:"initial"}),e.jsx(s,{state:"active"})]})};var n,r,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "active"
  }
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var o,d,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      <AiChatOptions state="initial" />
      <AiChatOptions state="active" />
    </div>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const j=["Example","Gallery"];export{a as Example,t as Gallery,j as __namedExportsOrder,v as default};
