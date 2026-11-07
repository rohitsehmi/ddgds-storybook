import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{B as f}from"./BrowserAddressBar-DY1oRK1k.js";import{B as g}from"./BrowserToolbar-utP2SWmJ.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";import"./glyphs-Dy1q1Og_.js";function s({platform:m="android",type:t="browsing",a11yLabel:c,testId:u}){return e.jsxs("header",{className:"ddgds-header","aria-label":c||"Browser header","data-testid":u,"data-platform":m,"data-type":t,children:[e.jsxs("div",{className:"ddgds-statusbar",children:[e.jsx("span",{children:"12:30"}),e.jsx("span",{children:"●● LTE"})]}),t==="settings"?e.jsx("div",{className:"ddgds-row",style:{background:"#fff",fontWeight:600},children:"Settings"}):e.jsx(f,{platform:"android",type:"browsing"}),e.jsx(g,{platform:"android",type:t==="settings"?"settings_toolbar":"toolbar"})]})}s.__docgenInfo={description:"DDGDS Browser / Header — Android status + chrome.",methods:[],displayName:"BrowserHeader",props:{platform:{required:!1,tsType:{name:"literal",value:'"android"'},description:"",defaultValue:{value:'"android"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"browsing" | "settings"',elements:[{name:"literal",value:'"browsing"'},{name:"literal",value:'"settings"'}]},description:"",defaultValue:{value:'"browsing"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"DDGDS/Browser/Header",component:s,parameters:{layout:"padded",...x("54693:25354")}},r={name:"Example / Default",args:{platform:"android",type:"browsing"}},a={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(s,{type:"browsing"}),e.jsx(s,{type:"settings"})]})};var n,o,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "android",
    type: "browsing"
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,l,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <BrowserHeader type="browsing" />
      <BrowserHeader type="settings" />
    </div>
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const E=["Example","Gallery"];export{r as Example,a as Gallery,E as __namedExportsOrder,v as default};
