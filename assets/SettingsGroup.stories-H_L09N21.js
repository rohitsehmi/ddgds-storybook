import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{S as x}from"./SidebarListItem-DFApJCIm.js";import{f as y}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";import"./glyphs-Dy1q1Og_.js";const S={protections:{title:"Privacy Protections",rows:["Default Browser","App Tracking Protection"]},subscription:{title:"DuckDuckGo Subscription",rows:["Privacy Pro"]},main_settings:{title:"Settings",rows:["Appearance","Accessibility"]},next_steps:{title:"Next Steps",rows:["Add to Dock","Import Bookmarks"]},about:{title:"About",rows:["What’s New","Send Feedback"]}};function r({platform:u="ios",group:o="protections",a11yLabel:g,testId:f}){const s=S[o];return e.jsxs("section",{className:"ddgds-card",style:{width:"min(402px, 100%)",padding:"8px 8px 12px"},"aria-label":g||s.title,"data-testid":f,"data-platform":u,"data-group":o,children:[e.jsx("h2",{className:"ddgds-group-head",children:s.title}),s.rows.map(n=>e.jsx(x,{label:n},n))]})}r.__docgenInfo={description:"DDGDS Settings / Group.",methods:[],displayName:"SettingsGroup",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},group:{required:!1,tsType:{name:"union",raw:"keyof typeof GROUPS",elements:[{name:"literal",value:"protections"},{name:"literal",value:"subscription"},{name:"literal",value:"main_settings"},{name:"literal",value:"next_steps"},{name:"literal",value:"about"}]},description:"",defaultValue:{value:'"protections"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"DDGDS/Settings/Group",component:r,parameters:{layout:"padded",...y("54725:2194")}},t={name:"Example / Default",args:{platform:"ios",group:"protections"}},a={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(r,{group:"protections"}),e.jsx(r,{group:"about",platform:"android"})]})};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    group: "protections"
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <SettingsGroup group="protections" />
      <SettingsGroup group="about" platform="android" />
    </div>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const k=["Example","Gallery"];export{t as Example,a as Gallery,k as __namedExportsOrder,j as default};
