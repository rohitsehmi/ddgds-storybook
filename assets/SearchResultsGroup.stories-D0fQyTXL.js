import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{S as l}from"./SearchSuggestions-DzlSeWKD.js";import{f as g}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";import"./glyphs-Dy1q1Og_.js";const n={top_hits:"Top Hits",search_results:"Search Suggestions",local_results:"On This Device",footer:""};function r({platform:o="ios",group:s="top_hits",a11yLabel:f,testId:h}){return e.jsxs("section",{className:"ddgds-card",style:{width:"min(402px, 100%)",paddingBottom:8},"aria-label":f||n[s]||"Search","data-testid":h,"data-platform":o,"data-group":s,children:[s!=="footer"?e.jsx("h2",{className:"ddgds-group-head",children:n[s]}):null,s==="footer"?e.jsx(l,{platform:o,type:"router_footer"}):e.jsx(l,{platform:o,type:s==="local_results"?"history":"site"})]})}r.__docgenInfo={description:"DDGDS Search / Results Group.",methods:[],displayName:"SearchResultsGroup",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},group:{required:!1,tsType:{name:"union",raw:'"top_hits" | "search_results" | "local_results" | "footer"',elements:[{name:"literal",value:'"top_hits"'},{name:"literal",value:'"search_results"'},{name:"literal",value:'"local_results"'},{name:"literal",value:'"footer"'}]},description:"",defaultValue:{value:'"top_hits"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"DDGDS/Search/Results Group",component:r,parameters:{layout:"padded",...g("54725:2192")}},a={name:"Example / Default",args:{platform:"ios",group:"top_hits"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(r,{group:"top_hits"}),e.jsx(r,{group:"search_results"}),e.jsx(r,{group:"footer",platform:"android"})]})};var i,p,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    group: "top_hits"
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const j=["Example","Gallery"];export{a as Example,t as Gallery,j as __namedExportsOrder,v as default};
