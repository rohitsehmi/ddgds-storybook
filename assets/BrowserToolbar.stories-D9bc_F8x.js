import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as t}from"./BrowserToolbar-CTrg7SB0.js";import{f as i}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";/* empty css                  */import"./glyphs-Dy1q1Og_.js";const b={title:"DDGDS/Browser/Toolbar",component:t,parameters:{layout:"padded",...i("54725:2186")}},r={name:"Example / Default",args:{platform:"ios",type:"new_tab",state:"rest"}},a={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(t,{type:"new_tab"}),e.jsx(t,{type:"browsing"}),e.jsx(t,{type:"settings_toolbar",platform:"android",state:"focused"})]})};var s,o,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    type: "new_tab",
    state: "rest"
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <BrowserToolbar type="new_tab" />
      <BrowserToolbar type="browsing" />
      <BrowserToolbar type="settings_toolbar" platform="android" state="focused" />
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const g=["Example","Gallery"];export{r as Example,a as Gallery,g as __namedExportsOrder,b as default};
