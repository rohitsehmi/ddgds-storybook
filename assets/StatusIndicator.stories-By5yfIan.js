import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as S}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({platform:n="ios",on:o=!0,a11yLabel:p,testId:f,className:g,...x}){const s=o===!0||o==="true",y=["ddgds-status",`ddgds-status--${n}`,s?"ddgds-status--on":"ddgds-status--off",g].filter(Boolean).join(" ");return e.jsxs("span",{className:y,role:"status","aria-label":p||(s?"On":"Off"),"data-testid":f||void 0,"data-platform":n,"data-on":String(s),...x,children:[e.jsx("span",{className:"ddgds-status__dot","aria-hidden":"true"}),e.jsx("span",{className:"ddgds-status__label",children:s?"On":"Off"})]})}a.__docgenInfo={description:"DDGDS Status / Indicator — Platform × On. Privacy-green when on.",methods:[],displayName:"StatusIndicator",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android" | "macos"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'},{name:"literal",value:'"macos"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},on:{required:!1,tsType:{name:"union",raw:'boolean | "true" | "false"',elements:[{name:"boolean"},{name:"literal",value:'"true"'},{name:"literal",value:'"false"'}]},description:"",defaultValue:{value:"true",computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"DDGDS/Status/Indicator",component:a,parameters:{layout:"centered",...S("54725:2195")},argTypes:{platform:{control:"select",options:["ios","android","macos"]},on:{control:"boolean"}}},t={name:"Example / On",args:{platform:"ios",on:!0}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{platform:"ios",on:!0}),e.jsx(a,{platform:"ios",on:!1}),e.jsx(a,{platform:"android",on:!0}),e.jsx(a,{platform:"macos",on:!0})]})};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Example / On",
  args: {
    platform: "ios",
    on: true
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,u,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Gallery",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <StatusIndicator platform="ios" on />
      <StatusIndicator platform="ios" on={false} />
      <StatusIndicator platform="android" on />
      <StatusIndicator platform="macos" on />
    </div>
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const D=["On","Gallery"];export{r as Gallery,t as On,D as __namedExportsOrder,I as default};
