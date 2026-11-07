import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as t}from"./SidebarListItem-CDeev8Tz.js";import{f as c}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";/* empty css                  */import"./glyphs-Dy1q1Og_.js";const g={title:"DDGDS/Sidebar/List Item",component:t,parameters:{layout:"padded",...c("54693:26551")},decorators:[d=>e.jsx("div",{role:"list",children:e.jsx(d,{})})]},a={name:"Example / Default",args:{state:"rest",label:"Default Browser"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(t,{state:"rest"}),e.jsx(t,{state:"hover"}),e.jsx(t,{state:"selected",label:"Privacy"}),e.jsx(t,{state:"focused"})]})};var s,l,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "rest",
    label: "Default Browser"
  }
}`,...(n=(l=a.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      <SidebarListItem state="rest" />
      <SidebarListItem state="hover" />
      <SidebarListItem state="selected" label="Privacy" />
      <SidebarListItem state="focused" />
    </div>
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const D=["Example","Gallery"];export{a as Example,r as Gallery,D as __namedExportsOrder,g as default};
