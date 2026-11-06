import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{M as d}from"./MenuApplication-CbQ7xtPs.js";import{f as g}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function r({platform:n="ios",expanded:s="true",type:l="new_tab",a11yLabel:f,testId:x}){return e.jsxs("section",{className:"ddgds-sheet","aria-label":f||"Menu","data-testid":x,"data-platform":n,"data-expanded":s,"data-type":l,children:[e.jsx("div",{className:"ddgds-sheet__handle"}),e.jsx("div",{className:"ddgds-row",style:{fontWeight:600},children:l==="browsing"?"duckduckgo.com":"New Tab"}),s==="true"?e.jsxs(e.Fragment,{children:[e.jsx(d,{platform:n,group:"page"}),e.jsx(d,{platform:n,group:"utilities"})]}):e.jsx("div",{className:"ddgds-row",children:"Duck.ai"})]})}r.__docgenInfo={description:"DDGDS Menu / Sheet.",methods:[],displayName:"MenuSheet",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},expanded:{required:!1,tsType:{name:"union",raw:'"false" | "true"',elements:[{name:"literal",value:'"false"'},{name:"literal",value:'"true"'}]},description:"",defaultValue:{value:'"true"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"new_tab" | "browsing"',elements:[{name:"literal",value:'"new_tab"'},{name:"literal",value:'"browsing"'}]},description:"",defaultValue:{value:'"new_tab"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"DDGDS/Menu/Sheet",component:r,parameters:{layout:"padded",...g("54725:2191")}},a={name:"Example / Default",args:{platform:"ios",expanded:"true",type:"new_tab"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(r,{expanded:"false",type:"new_tab"}),e.jsx(r,{expanded:"true",type:"browsing",platform:"android"})]})};var i,o,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    expanded: "true",
    type: "new_tab"
  }
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var u,m,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      <MenuSheet expanded="false" type="new_tab" />
      <MenuSheet expanded="true" type="browsing" platform="android" />
    </div>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const j=["Example","Gallery"];export{a as Example,t as Gallery,j as __namedExportsOrder,_ as default};
