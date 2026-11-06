import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{a as g}from"./glyphs-Dy1q1Og_.js";import{p as f}from"./haptic-CO53tiLf.js";import{f as h}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({active:t="inactive",label:s="Search",a11yLabel:p,testId:u}){const v=["ddgds-hit","ddgds-toggle-item",t==="active"?"is-active":"",t==="hover"?"is-hover":"",t==="focused"?"is-focused":""].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",className:v,"aria-pressed":t==="active","aria-label":p||s,"data-testid":u,"data-active":t,onPointerDown:()=>f("select"),children:[e.jsx(g,{}),e.jsx("span",{children:s})]})}a.__docgenInfo={description:"DDGDS Toggle / Item — icon + label. Active, hover, focused.",methods:[],displayName:"ToggleItem",props:{active:{required:!1,tsType:{name:"union",raw:'"inactive" | "active" | "hover" | "focused"',elements:[{name:"literal",value:'"inactive"'},{name:"literal",value:'"active"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"inactive"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"DDGDS/Toggle/Item",component:a,parameters:{layout:"padded",...h("54693:26419")}},r={name:"Example / Default",args:{active:"inactive",label:"Search"}},l={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(a,{active:"inactive",label:"Search"}),e.jsx(a,{active:"hover",label:"Search"}),e.jsx(a,{active:"active",label:"Search"}),e.jsx(a,{active:"focused",label:"Search"})]})};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    active: "inactive",
    label: "Search"
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,m,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <ToggleItem active="inactive" label="Search" />
      <ToggleItem active="hover" label="Search" />
      <ToggleItem active="active" label="Search" />
      <ToggleItem active="focused" label="Search" />
    </div>
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const j=["Example","Gallery"];export{r as Example,l as Gallery,j as __namedExportsOrder,T as default};
