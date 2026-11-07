import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{h as u}from"./glyphs-Dy1q1Og_.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({mode:r="idle",a11yLabel:p,testId:c}){return e.jsxs("div",{className:"ddgds-ai-options",role:"toolbar","aria-label":p||"AI chat options","data-testid":c,"data-mode":r,children:[e.jsxs("div",{className:"ddgds-ai-options__cluster",children:[e.jsx("button",{type:"button",className:"ddgds-chip-btn","aria-label":"Attach",children:e.jsx(u,{})}),e.jsx("button",{type:"button",className:"ddgds-chip-btn",children:"Tools"})]}),e.jsxs("div",{className:"ddgds-ai-options__cluster",children:[e.jsx("span",{className:"ddgds-chip-btn",children:"GPT-4o mini"}),e.jsx("button",{type:"button",className:"ddgds-ai-options__submit"+(r==="idle"?" is-idle":""),"aria-label":"Submit",children:"↑"})]})]})}t.__docgenInfo={description:"DDGDS AI Chat / Options. Idle until the composer is ready.",methods:[],displayName:"AiChatOptions",props:{mode:{required:!1,tsType:{name:"union",raw:'"idle" | "ready"',elements:[{name:"literal",value:'"idle"'},{name:"literal",value:'"ready"'}]},description:"",defaultValue:{value:'"idle"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"DDGDS/AI Chat/Options",component:t,parameters:{layout:"padded",...x("54693:26334")}},a={name:"Example / Default",args:{mode:"ready"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(t,{mode:"idle"}),e.jsx(t,{mode:"ready"})]})};var i,n,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    mode: "ready"
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,o,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <AiChatOptions mode="idle" />
      <AiChatOptions mode="ready" />
    </div>
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const D=["Example","Gallery"];export{a as Example,s as Gallery,D as __namedExportsOrder,j as default};
