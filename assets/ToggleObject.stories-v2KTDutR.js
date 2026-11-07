import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{a as g,j as f}from"./glyphs-NNnosKFO.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({mode:t="search",state:l="rest",a11yLabel:u,testId:p}){return e.jsxs("div",{className:"ddgds-toggle-object"+(l==="focused"?" is-focused":""),role:"group","aria-label":u||"Search or Duck.ai","data-testid":p,"data-mode":t,"data-state":l,children:[e.jsxs("span",{className:"ddgds-toggle-item"+(t==="search"?" is-selected":""),children:[e.jsx(g,{})," Search"]}),e.jsxs("span",{className:"ddgds-toggle-item"+(t==="duck_ai"?" is-selected":""),children:[e.jsx(f,{})," Duck.ai"]})]})}a.__docgenInfo={description:"DDGDS Toggle / Object. Search or Duck.ai, at rest or focused.",methods:[],displayName:"ToggleObject",props:{mode:{required:!1,tsType:{name:"union",raw:'"search" | "duck_ai"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"duck_ai"'}]},description:"",defaultValue:{value:'"search"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"DDGDS/Toggle/Object",component:a,parameters:{layout:"padded",...x("54693:26410")}},s={name:"Example / Default",args:{mode:"search",state:"rest"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(a,{mode:"search"}),e.jsx(a,{mode:"duck_ai"}),e.jsx(a,{mode:"search",state:"focused"})]})};var o,n,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    mode: "search",
    state: "rest"
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
      <ToggleObject mode="search" />
      <ToggleObject mode="duck_ai" />
      <ToggleObject mode="search" state="focused" />
    </div>
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["Example","Gallery"];export{s as Example,r as Gallery,v as __namedExportsOrder,T as default};
