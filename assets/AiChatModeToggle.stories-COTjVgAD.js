import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{a as g,j as h}from"./glyphs-DATQVZBr.js";import{p as n}from"./haptic-CO53tiLf.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({aiChat:a="on",state:o="rest",a11yLabel:u,testId:f}){return e.jsxs("div",{className:"ddgds-mode-toggle"+(o==="focused"?" is-focused":""),role:"group","aria-label":u||"AI chat mode","data-testid":f,"data-ai-chat":a,"data-state":o,children:[e.jsx("button",{type:"button",className:a==="off"?"is-on":"","aria-pressed":a==="off","aria-label":"Search",onPointerDown:()=>n("select"),children:e.jsx(g,{})}),e.jsx("button",{type:"button",className:a==="on"?"is-on":"","aria-pressed":a==="on","aria-label":"Duck.ai",onPointerDown:()=>n("select"),children:e.jsx(h,{})})]})}t.__docgenInfo={description:"DDGDS AI Chat / Mode Toggle — Search vs AI chat.",methods:[],displayName:"AiChatModeToggle",props:{aiChat:{required:!1,tsType:{name:"union",raw:'"on" | "off"',elements:[{name:"literal",value:'"on"'},{name:"literal",value:'"off"'}]},description:"",defaultValue:{value:'"on"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"DDGDS/AI Chat/Mode Toggle",component:t,parameters:{layout:"padded",...x("54693:26361")}},s={name:"Example / Default",args:{aiChat:"on",state:"rest"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(t,{aiChat:"on"}),e.jsx(t,{aiChat:"off"}),e.jsx(t,{aiChat:"on",state:"focused"})]})};var l,i,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    aiChat: "on",
    state: "rest"
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <AiChatModeToggle aiChat="on" />
      <AiChatModeToggle aiChat="off" />
      <AiChatModeToggle aiChat="on" state="focused" />
    </div>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const A=["Example","Gallery"];export{s as Example,r as Gallery,A as __namedExportsOrder,b as default};
