import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{p as j}from"./haptic-CO53tiLf.js";import{f as B}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({state:r="rest",icon:b,a11yLabel:m="Toolbar button",testId:f,disabled:y,className:v,type:h="button",onPointerDown:l,...x}){const o=y||r==="disabled",g=["ddgds-toolbar-btn",`ddgds-toolbar-btn--${r}`,v].filter(Boolean).join(" ");return e.jsx("button",{type:h,className:g,disabled:o,"aria-label":m,"data-testid":f||void 0,"data-state":r,onPointerDown:T=>{l==null||l(T),o||j("tap")},...x,children:e.jsx("span",{className:"ddgds-toolbar-btn__hit","aria-hidden":"true",children:e.jsx("span",{className:"ddgds-toolbar-btn__icon",children:b??e.jsx(L,{})})})})}function L(){return e.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:e.jsx("path",{fill:"currentColor",d:"M2.5 7.25h11v1.5h-11v-1.5Zm0-3.5h11v1.5h-11V3.75Zm0 7h11v1.5h-11v-1.5Z"})})}a.__docgenInfo={description:"DDGDS Browser / Toolbar Button — 44×44 hit, 28 click area, Start visual slot.",methods:[],displayName:"ToolbarButton",props:{state:{required:!1,tsType:{name:"union",raw:`| "rest"
| "hover"
| "pressed"
| "disabled"
| "focused"`,elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Start visual — 16px icon"},a11yLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Toolbar button"',computed:!1}},testId:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const S={title:"DDGDS/Browser/Toolbar Button",component:a,parameters:{layout:"centered",...B("54693:26152")},argTypes:{state:{control:"select",options:["rest","hover","pressed","disabled","focused"]}}},t={name:"Example / Rest",args:{state:"rest",a11yLabel:"Menu"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{state:"rest",a11yLabel:"Rest"}),e.jsx(a,{state:"hover",a11yLabel:"Hover"}),e.jsx(a,{state:"pressed",a11yLabel:"Pressed"}),e.jsx(a,{state:"disabled",a11yLabel:"Disabled"}),e.jsx(a,{state:"focused",a11yLabel:"Focused"})]})};var n,d,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / Rest",
  args: {
    state: "rest",
    a11yLabel: "Menu"
  }
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,c,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Gallery",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <ToolbarButton state="rest" a11yLabel="Rest" />
      <ToolbarButton state="hover" a11yLabel="Hover" />
      <ToolbarButton state="pressed" a11yLabel="Pressed" />
      <ToolbarButton state="disabled" a11yLabel="Disabled" />
      <ToolbarButton state="focused" a11yLabel="Focused" />
    </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const q=["Rest","Gallery"];export{s as Gallery,t as Rest,q as __namedExportsOrder,S as default};
