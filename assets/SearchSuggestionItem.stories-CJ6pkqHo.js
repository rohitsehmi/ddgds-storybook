import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as D}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function s({state:r="rest",title:d="DuckDuckGo — Privacy, simplified",details:i="duckduckgo.com",detailsVisible:p=!0,boldEnd:g="go browser",boldEndVisible:f=!1,extraInfo:v="Ask privately",extraInfoVisible:x=!1,icon:k,a11yLabel:h,testId:y,className:b,type:S="button",..._}){const j=["ddgds-suggest",`ddgds-suggest--${r}`,b].filter(Boolean).join(" ");return e.jsxs("button",{type:S,className:j,"aria-label":h||d,"data-testid":y||void 0,"data-state":r,..._,children:[e.jsx("span",{className:"ddgds-suggest__icon","aria-hidden":"true",children:k??e.jsx("span",{className:"ddgds-suggest__dot"})}),e.jsxs("span",{className:"ddgds-suggest__text",children:[e.jsx("span",{className:"ddgds-suggest__title",children:d}),f?e.jsx("span",{className:"ddgds-suggest__bold",children:g}):null,p&&i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ddgds-suggest__dash",children:"–"}),e.jsx("span",{className:"ddgds-suggest__meta",children:i})]}):null]}),x?e.jsx("span",{className:"ddgds-suggest__extra",children:v}):null]})}s.__docgenInfo={description:"DDGDS Search / Suggestion Item — Rest / Hover / Active / Focused for SERP + omnibar.",methods:[],displayName:"SearchSuggestionItem",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "active" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"active"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"DuckDuckGo — Privacy, simplified"',computed:!1}},details:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"duckduckgo.com"',computed:!1}},detailsVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},boldEnd:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"go browser"',computed:!1}},boldEndVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},extraInfo:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ask privately"',computed:!1}},extraInfoVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const N={title:"DDGDS/Search/Suggestion Item",component:s,parameters:{layout:"padded",...D("54693:26309")}},a={name:"Example / Rest",args:{state:"rest",title:"DuckDuckGo — Privacy, simplified",details:"duckduckgo.com"}},t={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,width:640,background:"#fff",borderRadius:12,padding:8},children:[e.jsx(s,{state:"rest"}),e.jsx(s,{state:"hover",extraInfoVisible:!0,extraInfo:"Ask privately"}),e.jsx(s,{state:"active",details:"duckduckgo.com"}),e.jsx(s,{state:"focused",details:"duckduckgo.com"})]})};var l,n,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Example / Rest",
  args: {
    state: "rest",
    title: "DuckDuckGo — Privacy, simplified",
    details: "duckduckgo.com"
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 4,
    width: 640,
    background: "#fff",
    borderRadius: 12,
    padding: 8
  }}>
      <SearchSuggestionItem state="rest" />
      <SearchSuggestionItem state="hover" extraInfoVisible extraInfo="Ask privately" />
      <SearchSuggestionItem state="active" details="duckduckgo.com" />
      <SearchSuggestionItem state="focused" details="duckduckgo.com" />
    </div>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Rest","States"];export{a as Rest,t as States,T as __namedExportsOrder,N as default};
