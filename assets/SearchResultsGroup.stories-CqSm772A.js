import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{S as i}from"./SearchSuggestions-DygEkvq7.js";import{f as g}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";import"./glyphs-NNnosKFO.js";const l={top_hits:"Top Hits",search_results:"Search Suggestions",local_results:"On This Device",footer:""};function s({platform:o="ios",group:r="top_hits",a11yLabel:f,testId:h}){return e.jsxs("section",{className:"ddgds-card",style:{width:"min(402px, 100%)",paddingBottom:8},"aria-label":f||l[r]||"Search","data-testid":h,"data-platform":o,"data-group":r,children:[r!=="footer"?e.jsx("h2",{className:"ddgds-group-head",children:l[r]}):null,e.jsx("div",{role:"listbox","aria-label":l[r]||"Search",children:r==="footer"?e.jsx(i,{platform:o,type:"router_footer"}):e.jsx(i,{platform:o,type:r==="local_results"?"history":"site"})})]})}s.__docgenInfo={description:"DDGDS Search / Results Group.",methods:[],displayName:"SearchResultsGroup",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},group:{required:!1,tsType:{name:"union",raw:'"top_hits" | "search_results" | "local_results" | "footer"',elements:[{name:"literal",value:'"top_hits"'},{name:"literal",value:'"search_results"'},{name:"literal",value:'"local_results"'},{name:"literal",value:'"footer"'}]},description:"",defaultValue:{value:'"top_hits"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"DDGDS/Search/Results Group",component:s,parameters:{layout:"padded",...g("54725:2192")}},a={name:"Example / Default",args:{platform:"ios",group:"top_hits"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(s,{group:"top_hits"}),e.jsx(s,{group:"search_results"}),e.jsx(s,{group:"footer",platform:"android"})]})};var n,p,u;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    group: "top_hits"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <SearchResultsGroup group="top_hits" />
      <SearchResultsGroup group="search_results" />
      <SearchResultsGroup group="footer" platform="android" />
    </div>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Example","Gallery"];export{a as Example,t as Gallery,j as __namedExportsOrder,G as default};
