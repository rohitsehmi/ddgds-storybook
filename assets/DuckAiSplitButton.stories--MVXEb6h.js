import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{k as x}from"./glyphs-NNnosKFO.js";import{f as b}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({state:r="rest",sidebar:l="closed",a11yLabel:m,testId:f}){const n=l==="open"?"Sidebar":l==="detached"?"Window":"Duck.ai";return e.jsxs("div",{className:"ddgds-split"+(r==="hover"?" is-hover":"")+(r==="focused"?" is-focused":""),role:"group","aria-label":m||n,"data-testid":f,"data-state":r,"data-sidebar":l,children:[e.jsx("button",{type:"button",children:n}),e.jsx("span",{className:"ddgds-split__sep"}),e.jsx("button",{type:"button","aria-label":"More",children:e.jsx(x,{})})]})}a.__docgenInfo={description:"DDGDS Duck.ai / Split Button.",methods:[],displayName:"DuckAiSplitButton",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},sidebar:{required:!1,tsType:{name:"union",raw:'"closed" | "open" | "detached"',elements:[{name:"literal",value:'"closed"'},{name:"literal",value:'"open"'},{name:"literal",value:'"detached"'}]},description:"",defaultValue:{value:'"closed"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"DDGDS/Duck.ai/Split Button",component:a,parameters:{layout:"padded",...b("54693:26108")}},t={name:"Example / Default",args:{state:"rest",sidebar:"closed"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(a,{sidebar:"closed"}),e.jsx(a,{sidebar:"open"}),e.jsx(a,{sidebar:"detached",state:"focused"})]})};var o,i,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "rest",
    sidebar: "closed"
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <DuckAiSplitButton sidebar="closed" />
      <DuckAiSplitButton sidebar="open" />
      <DuckAiSplitButton sidebar="detached" state="focused" />
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const j=["Example","Gallery"];export{t as Example,s as Gallery,j as __namedExportsOrder,S as default};
