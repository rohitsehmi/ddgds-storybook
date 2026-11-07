import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{a as f}from"./glyphs-DATQVZBr.js";import{p as h}from"./haptic-CO53tiLf.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({state:t="rest",label:l="Search",a11yLabel:p,testId:u}){const g=["ddgds-hit","ddgds-toggle-item",t==="selected"?"is-selected":"",t==="hover"?"is-hover":"",t==="focused"?"is-focused":""].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",className:g,"aria-pressed":t==="selected","aria-label":p||l,"data-testid":u,"data-state":t,onPointerDown:()=>h("select"),children:[e.jsx(f,{}),e.jsx("span",{children:l})]})}a.__docgenInfo={description:"DDGDS Toggle / Item. Rest, hover, selected, focused.",methods:[],displayName:"ToggleItem",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "selected" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"selected"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Search"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"DDGDS/Toggle/Item",component:a,parameters:{layout:"padded",...x("54693:26419")}},s={name:"Example / Default",args:{state:"rest",label:"Search"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(a,{state:"rest",label:"Search"}),e.jsx(a,{state:"hover",label:"Search"}),e.jsx(a,{state:"selected",label:"Search"}),e.jsx(a,{state:"focused",label:"Search"})]})};var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "rest",
    label: "Search"
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,i,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <ToggleItem state="rest" label="Search" />
      <ToggleItem state="hover" label="Search" />
      <ToggleItem state="selected" label="Search" />
      <ToggleItem state="focused" label="Search" />
    </div>
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const j=["Example","Gallery"];export{s as Example,r as Gallery,j as __namedExportsOrder,T as default};
