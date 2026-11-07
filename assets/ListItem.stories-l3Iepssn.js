import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Z,b as J}from"./icons-DhzaqDc2.js";import{f as K}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({platform:i="ios",type:c="search",state:u="rest",title:I="DuckDuckGo — Privacy, simplified",details:m="duckduckgo.com",titleVisible:q=!0,detailsVisible:N=!0,startVisual:p,endVisual:f,startVisualVisible:P=!0,endVisualVisible:w=!1,actionButton:y,actionButtonVisible:F=!0,statusIndicatorVisible:G,statusLabel:M="On",separatorVisible:C=!0,swipeActionVisible:R=!1,swipeLabel:E="Delete",a11yLabel:O,testId:z,className:A,...$}){const H=G??c==="settings",W=["ddgds-list-item",`ddgds-list-item--${i}`,`ddgds-list-item--${c}`,`ddgds-list-item--${u}`,A].filter(Boolean).join(" ");return e.jsxs("div",{className:W,role:"listitem","aria-label":O||void 0,"data-testid":z||void 0,"data-platform":i,"data-type":c,"data-state":u,tabIndex:u==="focused"?0:void 0,...$,children:[P&&p?e.jsx("span",{className:"ddgds-list-item__visual","aria-hidden":"true",children:p}):null,e.jsxs("div",{className:"ddgds-list-item__content",children:[e.jsxs("div",{className:"ddgds-list-item__text",children:[q?e.jsx("span",{className:"ddgds-list-item__title",children:I}):null,N&&m?e.jsx("span",{className:"ddgds-list-item__details",children:m}):null]}),H?e.jsxs("span",{className:"ddgds-list-item__status","aria-hidden":"true",children:[e.jsx("span",{className:"ddgds-list-item__status-dot"}),e.jsx("span",{className:"ddgds-list-item__status-label",children:M})]}):null,F&&y?e.jsx("span",{className:"ddgds-list-item__action","aria-hidden":"true",children:y}):null]}),w&&f?e.jsx("span",{className:"ddgds-list-item__visual","aria-hidden":"true",children:f}):null,R?e.jsx("span",{className:"ddgds-list-item__swipe","aria-hidden":"true",children:E}):null,C?e.jsx("span",{className:"ddgds-list-item__separator"}):null]})}t.__docgenInfo={description:"DDGDS List Item — Figma SoT: Platform × State × Type, Start/End slots, code-only props.",methods:[],displayName:"ListItem",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"search" | "menu" | "settings"',elements:[{name:"literal",value:'"search"'},{name:"literal",value:'"menu"'},{name:"literal",value:'"settings"'}]},description:"",defaultValue:{value:'"search"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"State axis — Rest | Focused (WCAG 2.4.7)",defaultValue:{value:'"rest"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"DuckDuckGo — Privacy, simplified"',computed:!1}},details:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"duckduckgo.com"',computed:!1}},titleVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},detailsVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startVisual:{required:!1,tsType:{name:"ReactNode"},description:""},endVisual:{required:!1,tsType:{name:"ReactNode"},description:""},startVisualVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},endVisualVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},actionButton:{required:!1,tsType:{name:"ReactNode"},description:""},actionButtonVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},statusIndicatorVisible:{required:!1,tsType:{name:"boolean"},description:""},statusLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"On"',computed:!1}},separatorVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},swipeActionVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},swipeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Delete"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const te={title:"DDGDS/List Item",component:t,parameters:{layout:"padded",...K("54725:2188"),docs:{description:{component:"Figma SoT: Platform × State × Type. Start/End Children slots, status for Settings, code-only props. Token paths only."}}},argTypes:{platform:{control:"select",options:["ios","android"]},type:{control:"select",options:["search","menu","settings"]},state:{control:"select",options:["rest","focused"]}}},Q={display:"flex",flexDirection:"column",gap:0,width:402,background:"#fff",borderRadius:12,overflow:"hidden"};function d({children:i}){return e.jsx("div",{role:"list",style:Q,children:i})}const s=()=>e.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{d:"M7 4.5h10a1 1 0 0 1 1 1V19l-6-3.2L6 19V5.5a1 1 0 0 1 1-1Z",fill:"currentColor"})}),a=()=>e.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{cx:"6",cy:"12",r:"1.6",fill:"currentColor"}),e.jsx("circle",{cx:"12",cy:"12",r:"1.6",fill:"currentColor"}),e.jsx("circle",{cx:"18",cy:"12",r:"1.6",fill:"currentColor"})]}),r={name:"Example / Search hit",args:{platform:"ios",type:"search",title:"DuckDuckGo — Privacy, simplified",details:"duckduckgo.com",startVisual:e.jsx(s,{}),actionButton:e.jsx(a,{}),a11yLabel:"DuckDuckGo — Privacy, simplified",testId:"ddgds-list-item-search"},render:i=>e.jsx(d,{children:e.jsx(t,{...i})})},o={name:"Types",parameters:{controls:{disable:!0}},render:()=>e.jsxs(d,{children:[e.jsx(t,{type:"search",title:"Search result",details:"example.com",startVisual:e.jsx(s,{}),actionButton:e.jsx(a,{})}),e.jsx(t,{type:"menu",title:"Bookmarks",details:"Open library",startVisual:e.jsx(s,{}),actionButton:e.jsx(a,{})}),e.jsx(t,{type:"settings",title:"App Tracking Protection",details:"Blocks trackers in other apps",startVisual:e.jsx(J,{}),statusIndicatorVisible:!0,actionButton:e.jsx(Z,{})}),e.jsx(t,{type:"search",state:"focused",title:"Focused row",details:"keyboard focus",startVisual:e.jsx(s,{}),actionButton:e.jsx(a,{})})]})},l={name:"Platforms",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"monospace",fontSize:11,color:"#888",marginBottom:8},children:"ios · search"}),e.jsx(d,{children:e.jsx(t,{platform:"ios",type:"search",startVisual:e.jsx(s,{}),actionButton:e.jsx(a,{})})})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"monospace",fontSize:11,color:"#888",marginBottom:8},children:"android · search"}),e.jsx(d,{children:e.jsx(t,{platform:"android",type:"search",startVisual:e.jsx(s,{}),actionButton:e.jsx(a,{})})})]})]})},n={args:{platform:"ios",type:"search",title:"List item",details:"details",startVisual:e.jsx(s,{}),actionButton:e.jsx(a,{})}};var h,x,g,k,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Example / Search hit",
  args: {
    platform: "ios",
    type: "search",
    title: "DuckDuckGo — Privacy, simplified",
    details: "duckduckgo.com",
    startVisual: <Bookmark />,
    actionButton: <More />,
    a11yLabel: "DuckDuckGo — Privacy, simplified",
    testId: "ddgds-list-item-search"
  },
  render: args => <ListStack>
      <ListItem {...args} />
    </ListStack>
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"Ready made — Search hit (matches News / SERP list rows).",...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};var j,V,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Types",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ListStack>
      <ListItem type="search" title="Search result" details="example.com" startVisual={<Bookmark />} actionButton={<More />} />
      <ListItem type="menu" title="Bookmarks" details="Open library" startVisual={<Bookmark />} actionButton={<More />} />
      <ListItem type="settings" title="App Tracking Protection" details="Blocks trackers in other apps" startVisual={<IconShield />} statusIndicatorVisible actionButton={<IconChevron />} />
      <ListItem type="search" state="focused" title="Focused row" details="keyboard focus" startVisual={<Bookmark />} actionButton={<More />} />
    </ListStack>
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var b,B,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Platforms",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div>
        <div style={{
        fontFamily: "monospace",
        fontSize: 11,
        color: "#888",
        marginBottom: 8
      }}>
          ios · search
        </div>
        <ListStack>
          <ListItem platform="ios" type="search" startVisual={<Bookmark />} actionButton={<More />} />
        </ListStack>
      </div>
      <div>
        <div style={{
        fontFamily: "monospace",
        fontSize: 11,
        color: "#888",
        marginBottom: 8
      }}>
          android · search
        </div>
        <ListStack>
          <ListItem platform="android" type="search" startVisual={<Bookmark />} actionButton={<More />} />
        </ListStack>
      </div>
    </div>
}`,...(T=(B=l.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var L,_,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    platform: "ios",
    type: "search",
    title: "List item",
    details: "details",
    startVisual: <Bookmark />,
    actionButton: <More />
  }
}`,...(D=(_=n.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const se=["SearchHit","Types","Platforms","Playground"];export{l as Platforms,n as Playground,r as SearchHit,o as Types,se as __namedExportsOrder,te as default};
