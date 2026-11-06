import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{a as g,j as f}from"./glyphs-Dy1q1Og_.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({state:t="search",focus:l="false",a11yLabel:u,testId:p}){return e.jsxs("div",{className:"ddgds-toggle-object"+(l==="true"?" is-focused":""),role:"group","aria-label":u||"Search or Duck.ai","data-testid":p,"data-state":t,"data-focus":l,children:[e.jsxs("span",{className:"ddgds-toggle-item"+(t==="search"?" is-active":""),children:[e.jsx(g,{})," Search"]}),e.jsxs("span",{className:"ddgds-toggle-item"+(t==="duck_ai"?" is-active":""),children:[e.jsx(f,{})," Duck.ai"]})]})}a.__docgenInfo={description:"DDGDS Toggle / Object — Search | Duck.ai segmented control.",methods:[],displayName:"ToggleObject",props:{state:{required:!1,tsType:{name:"union",raw:'"search" | "duck_ai"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"duck_ai"'}]},description:"",defaultValue:{value:'"search"',computed:!1}},focus:{required:!1,tsType:{name:"union",raw:'"false" | "true"',elements:[{name:"literal",value:'"false"'},{name:"literal",value:'"true"'}]},description:"",defaultValue:{value:'"false"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"DDGDS/Toggle/Object",component:a,parameters:{layout:"padded",...x("54693:26410")}},s={name:"Example / Default",args:{state:"search",focus:"false"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(a,{state:"search"}),e.jsx(a,{state:"duck_ai"}),e.jsx(a,{state:"search",focus:"true"})]})};var n,c,o;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "search",
    focus: "false"
  }
}`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <ToggleObject state="search" />
      <ToggleObject state="duck_ai" />
      <ToggleObject state="search" focus="true" />
    </div>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const T=["Example","Gallery"];export{s as Example,r as Gallery,T as __namedExportsOrder,v as default};
