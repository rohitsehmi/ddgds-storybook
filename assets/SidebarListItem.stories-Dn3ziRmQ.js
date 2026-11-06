import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as a}from"./SidebarListItem-CMEMMIkl.js";import{f as d}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";/* empty css                  */import"./glyphs-Dy1q1Og_.js";const y={title:"DDGDS/Sidebar/List Item",component:a,parameters:{layout:"padded",...d("54693:26551")}},t={name:"Example / Default",args:{state:"default",label:"Default Browser"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(a,{state:"default"}),e.jsx(a,{state:"hover"}),e.jsx(a,{state:"selected",label:"Privacy"}),e.jsx(a,{state:"focused"})]})};var s,l,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "default",
    label: "Default Browser"
  }
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var o,m,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      <SidebarListItem state="default" />
      <SidebarListItem state="hover" />
      <SidebarListItem state="selected" label="Privacy" />
      <SidebarListItem state="focused" />
    </div>
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const g=["Example","Gallery"];export{t as Example,r as Gallery,g as __namedExportsOrder,y as default};
