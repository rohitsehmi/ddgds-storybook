import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{p as y}from"./haptic-CO53tiLf.js";import{f as v}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({state:l="rest",selected:r="false",style:p="solid",a11yLabel:m,testId:f}){return e.jsx("button",{type:"button",className:"ddgds-hit ddgds-split-overlay"+(r==="true"?" is-selected":"")+(l==="focused"?" is-focused":""),"aria-label":m||"Duck.ai","data-testid":f,"data-state":l,"data-selected":r,"data-style":p,style:l==="pressed"?{transform:"scale(0.98)"}:void 0,onPointerDown:()=>y("tap"),children:"Duck.ai"})}t.__docgenInfo={description:"DDGDS Duck.ai / Split Button Overlay.",methods:[],displayName:"DuckAiSplitButtonOverlay",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "pressed" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},selected:{required:!1,tsType:{name:"union",raw:'"false" | "true"',elements:[{name:"literal",value:'"false"'},{name:"literal",value:'"true"'}]},description:"",defaultValue:{value:'"false"',computed:!1}},style:{required:!1,tsType:{name:"literal",value:'"solid"'},description:"",defaultValue:{value:'"solid"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"DDGDS/Duck.ai/Split Button Overlay",component:t,parameters:{layout:"padded",...v("54693:26133")}},a={name:"Example / Default",args:{state:"rest",selected:"false",style:"solid"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(t,{selected:"false"}),e.jsx(t,{selected:"true"}),e.jsx(t,{state:"focused",selected:"true"})]})};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "rest",
    selected: "false",
    style: "solid"
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,u,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <DuckAiSplitButtonOverlay selected="false" />
      <DuckAiSplitButtonOverlay selected="true" />
      <DuckAiSplitButtonOverlay state="focused" selected="true" />
    </div>
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const j=["Example","Gallery"];export{a as Example,s as Gallery,j as __namedExportsOrder,O as default};
