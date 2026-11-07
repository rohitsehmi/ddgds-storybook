import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{l as y,m as x}from"./glyphs-NNnosKFO.js";import{f as v}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({state:o="rest",type:a="audio",a11yLabel:p,testId:c}){const f=a==="close"?"Close tab":a==="muted"?"Unmute tab":"Mute tab";return e.jsx("button",{type:"button",className:"ddgds-hit ddgds-icon-btn"+(o==="hover"?" is-hover":"")+(o==="focused"?" is-focused":""),"aria-label":p||f,"data-testid":c,"data-state":o,"data-type":a,children:a==="close"?e.jsx(y,{}):e.jsx(x,{muted:a==="muted"})})}t.__docgenInfo={description:"DDGDS Browser / Tab Button — audio, mute, close.",methods:[],displayName:"BrowserTabButton",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"audio" | "muted" | "close"',elements:[{name:"literal",value:'"audio"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"close"'}]},description:"",defaultValue:{value:'"audio"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"DDGDS/Browser/Tab Button",component:t,parameters:{layout:"padded",...v("54693:26094")}},s={name:"Example / Default",args:{state:"rest",type:"close"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(t,{type:"audio"}),e.jsx(t,{type:"muted"}),e.jsx(t,{type:"close",state:"hover"}),e.jsx(t,{type:"close",state:"focused"})]})})};var l,n,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "rest",
    type: "close"
  }
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,u,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <div style={{
      display: "flex",
      gap: 8
    }}><BrowserTabButton type="audio" /><BrowserTabButton type="muted" /><BrowserTabButton type="close" state="hover" /><BrowserTabButton type="close" state="focused" /></div>
    </div>
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const D=["Example","Gallery"];export{s as Example,r as Gallery,D as __namedExportsOrder,j as default};
