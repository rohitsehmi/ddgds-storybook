import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as r}from"./ButtonDisclosure-eV0HCdtY.js";import{f as m}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";import"./haptic-CO53tiLf.js";const f={title:"DDGDS/Button/Disclosure",component:r,parameters:{layout:"centered",...m("54693:26518")}},t={name:"Example / Open",args:{type:"open",state:"rest"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(r,{type:"open",state:"rest"}),e.jsx(r,{type:"close",state:"rest"}),e.jsx(r,{type:"open",state:"focused"})]})};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Example / Open",
  args: {
    type: "open",
    state: "rest"
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Gallery",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <ButtonDisclosure type="open" state="rest" />
      <ButtonDisclosure type="close" state="rest" />
      <ButtonDisclosure type="open" state="focused" />
    </div>
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const D=["Open","Gallery"];export{s as Gallery,t as Open,D as __namedExportsOrder,f as default};
