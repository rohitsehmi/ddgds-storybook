import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as j}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";const v={pop_up:"Pop-ups Blocked",cookie:"Cookies Managed",trackers:"Trackers Blocked",youtube_ads:"YouTube Ads Blocked"};function t({state:a="rest",type:s="trackers",count:i=13,icon:f,a11yLabel:x,testId:h,className:y,...g}){const k=a==="expanded",_=["ddgds-chip",`ddgds-chip--${a}`,`ddgds-chip--${s}`,y].filter(Boolean).join(" "),o=v[s];return e.jsx("button",{type:"button",className:_,"aria-label":x||`${i} ${o}`,"data-testid":h||void 0,"data-state":a,"data-type":s,...g,children:e.jsxs("span",{className:"ddgds-chip__chiclet",children:[e.jsx("span",{className:"ddgds-chip__icon","aria-hidden":"true",children:f??e.jsx(b,{type:s})}),k?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ddgds-chip__count",children:i}),e.jsx("span",{className:"ddgds-chip__label",children:o})]}):null]})})}function b({type:a}){return a==="trackers"?e.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:[e.jsx("path",{fill:"currentColor",d:"M8 1.5 13.5 4v4.2c0 3.2-2.2 5.6-5.5 6.3C4.7 13.8 2.5 11.4 2.5 8.2V4L8 1.5Z"}),e.jsx("path",{fill:"#fff",d:"M7.1 10.2 4.8 7.9l1-.9 1.3 1.2 2.7-2.7 1 1-3.7 3.7Z"})]}):e.jsx("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":"true",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",fill:"currentColor"})})}t.__docgenInfo={description:"DDGDS Notification / Chip — State × Type. Rest is icon chiclet; Expanded adds count + label.",methods:[],displayName:"NotificationChip",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "expanded" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"expanded"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| "pop_up"
| "cookie"
| "trackers"
| "youtube_ads"`,elements:[{name:"literal",value:'"pop_up"'},{name:"literal",value:'"cookie"'},{name:"literal",value:'"trackers"'},{name:"literal",value:'"youtube_ads"'}]},description:"",defaultValue:{value:'"trackers"',computed:!1}},count:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"13",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"DDGDS/Notification/Chip",component:t,parameters:{layout:"centered",...j("54693:26374")},argTypes:{state:{control:"select",options:["rest","expanded","focused"]},type:{control:"select",options:["pop_up","cookie","trackers","youtube_ads"]}}},r={name:"Example / Rest",args:{state:"rest",type:"trackers"}},n={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[e.jsx(t,{state:"rest",type:"trackers"}),e.jsx(t,{state:"expanded",type:"trackers",count:13}),e.jsx(t,{state:"expanded",type:"cookie",count:4}),e.jsx(t,{state:"focused",type:"youtube_ads"})]})};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Example / Rest",
  args: {
    state: "rest",
    type: "trackers"
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Gallery",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "flex-start"
  }}>
      <NotificationChip state="rest" type="trackers" />
      <NotificationChip state="expanded" type="trackers" count={13} />
      <NotificationChip state="expanded" type="cookie" count={4} />
      <NotificationChip state="focused" type="youtube_ads" />
    </div>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const w=["Rest","Gallery"];export{n as Gallery,r as Rest,w as __namedExportsOrder,T as default};
