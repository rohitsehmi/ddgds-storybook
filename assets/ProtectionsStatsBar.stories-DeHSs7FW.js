import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{f as h}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";const x={min_width:"8%",100:"100%",75:"75%",50:"50%",25:"25%"};function t({width:r="min_width",count:n="48,113",a11yLabel:p,testId:u}){return e.jsxs("div",{className:"ddgds-stats",role:"img","aria-label":p||`${n} blocked`,"data-testid":u,"data-width":r,children:[e.jsx("span",{children:n}),e.jsx("span",{className:"ddgds-stats__track",children:e.jsx("span",{className:"ddgds-stats__bar",style:{width:x[r]||"8%"}})})]})}t.__docgenInfo={description:"DDGDS Protections / Stats Bar.",methods:[],displayName:"ProtectionsStatsBar",props:{width:{required:!1,tsType:{name:"union",raw:'"min_width" | "100" | "75" | "50" | "25"',elements:[{name:"literal",value:'"min_width"'},{name:"literal",value:'"100"'},{name:"literal",value:'"75"'},{name:"literal",value:'"50"'},{name:"literal",value:'"25"'}]},description:"",defaultValue:{value:'"min_width"',computed:!1}},count:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"48,113"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"DDGDS/Protections/Stats Bar",component:t,parameters:{layout:"padded",...h("54693:26528")}},a={name:"Example / Default",args:{width:"75",count:"48,113"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(t,{width:"min_width",count:"000"}),e.jsx(t,{width:"25"}),e.jsx(t,{width:"50"}),e.jsx(t,{width:"75"}),e.jsx(t,{width:"100"})]})};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    width: "75",
    count: "48,113"
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var o,m,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      <ProtectionsStatsBar width="min_width" count="000" />
      <ProtectionsStatsBar width="25" />
      <ProtectionsStatsBar width="50" />
      <ProtectionsStatsBar width="75" />
      <ProtectionsStatsBar width="100" />
    </div>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const S=["Example","Gallery"];export{a as Example,s as Gallery,S as __namedExportsOrder,_ as default};
