import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as s}from"./BrowserAddressBar-7mISzP-g.js";import{f as d}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";/* empty css                  */import"./glyphs-DATQVZBr.js";const g={title:"DDGDS/Browser/Address Bar",component:s,parameters:{layout:"padded",...d("54725:2185")}},r={name:"Example / Default",args:{platform:"ios",state:"rest",type:"new_tab"}},a={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(s,{type:"new_tab"}),e.jsx(s,{type:"searching",state:"focused"}),e.jsx(s,{type:"browsing",platform:"android"})]})};var t,n,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    state: "rest",
    type: "new_tab"
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <BrowserAddressBar type="new_tab" />
      <BrowserAddressBar type="searching" state="focused" />
      <BrowserAddressBar type="browsing" platform="android" />
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const w=["Example","Gallery"];export{r as Example,a as Gallery,w as __namedExportsOrder,g as default};
