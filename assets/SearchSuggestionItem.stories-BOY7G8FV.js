import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as D}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function s({state:d="rest",title:r="DuckDuckGo — Privacy, simplified",details:l="duckduckgo.com",detailsVisible:p=!0,boldEnd:g="go browser",boldEndVisible:f=!1,extraInfo:x="Ask privately",extraInfoVisible:k=!1,icon:v,a11yLabel:h,testId:y,className:b,type:S="button",..._}){const j=["ddgds-suggest",`ddgds-suggest--${d}`,b].filter(Boolean).join(" ");return e.jsxs("button",{type:S,className:j,"aria-label":h||r,"data-testid":y||void 0,"data-state":d,..._,children:[e.jsx("span",{className:"ddgds-suggest__icon","aria-hidden":"true",children:v??e.jsx("span",{className:"ddgds-suggest__dot"})}),e.jsxs("span",{className:"ddgds-suggest__text",children:[e.jsx("span",{className:"ddgds-suggest__title",children:r}),f?e.jsx("span",{className:"ddgds-suggest__bold",children:g}):null,p&&l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ddgds-suggest__dash",children:"–"}),e.jsx("span",{className:"ddgds-suggest__meta",children:l})]}):null]}),k?e.jsx("span",{className:"ddgds-suggest__extra",children:x}):null]})}s.__docgenInfo={description:"DDGDS Search / Suggestion Item. Rest, hover, pressed, and focused.",methods:[],displayName:"SearchSuggestionItem",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "pressed" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"DuckDuckGo — Privacy, simplified"',computed:!1}},details:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"duckduckgo.com"',computed:!1}},detailsVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},boldEnd:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"go browser"',computed:!1}},boldEndVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},extraInfo:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ask privately"',computed:!1}},extraInfoVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const N={title:"DDGDS/Search/Suggestion Item",component:s,parameters:{layout:"padded",...D("54693:26309")}},a={name:"Example / Rest",args:{state:"rest",title:"DuckDuckGo — Privacy, simplified",details:"duckduckgo.com"}},t={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,width:640,background:"#fff",borderRadius:12,padding:8},children:[e.jsx(s,{state:"rest"}),e.jsx(s,{state:"hover",extraInfoVisible:!0,extraInfo:"Ask privately"}),e.jsx(s,{state:"pressed",details:"duckduckgo.com"}),e.jsx(s,{state:"focused",details:"duckduckgo.com"})]})};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / Rest",
  args: {
    state: "rest",
    title: "DuckDuckGo — Privacy, simplified",
    details: "duckduckgo.com"
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
      <SearchSuggestionItem state="pressed" details="duckduckgo.com" />
      <SearchSuggestionItem state="focused" details="duckduckgo.com" />
    </div>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Rest","States"];export{a as Rest,t as States,T as __namedExportsOrder,N as default};
