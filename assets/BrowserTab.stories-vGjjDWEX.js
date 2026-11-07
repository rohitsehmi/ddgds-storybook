import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{i as x,l as g}from"./glyphs-NNnosKFO.js";import{f as v}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({state:a="selected",layout:s="normal",title:n="DuckDuckGo",a11yLabel:p,testId:f}){const y=["ddgds-hit","ddgds-tab",a==="selected"?"is-selected":"",a==="hover"?"is-hover":"",s==="pinned"?"is-pinned":"",a==="focused"?"is-focused":""].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",role:"tab",className:y,"aria-label":p||n,"aria-selected":a==="selected","data-testid":f,"data-state":a,"data-layout":s,children:[e.jsx(x,{}),s==="normal"?e.jsx("span",{className:"ddgds-tab__title",children:n}):null,s==="normal"&&a!=="rest"?e.jsx(g,{}):null]})}t.__docgenInfo={description:"DDGDS Browser / Tab.",methods:[],displayName:"BrowserTab",props:{state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "selected" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"selected"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"selected"',computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"normal" | "pinned"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"pinned"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"DuckDuckGo"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"DDGDS/Browser/Tab",component:t,parameters:{layout:"padded",...v("54693:26039")},decorators:[a=>e.jsx("div",{role:"tablist","aria-label":"Tabs",children:e.jsx(a,{})})]},l={name:"Example / Default",args:{state:"selected",layout:"normal",title:"DuckDuckGo"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end"},children:[e.jsx(t,{state:"selected",layout:"normal"}),e.jsx(t,{state:"rest",layout:"normal",title:"News"}),e.jsx(t,{state:"hover",layout:"normal",title:"Settings"}),e.jsx(t,{state:"focused",layout:"pinned"})]})})};var o,i,d;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "selected",
    layout: "normal",
    title: "DuckDuckGo"
  }
}`,...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      gap: 8,
      alignItems: "flex-end"
    }}>
        <BrowserTab state="selected" layout="normal" />
        <BrowserTab state="rest" layout="normal" title="News" />
        <BrowserTab state="hover" layout="normal" title="Settings" />
        <BrowserTab state="focused" layout="pinned" />
      </div>
    </div>
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const w=["Example","Gallery"];export{l as Example,r as Gallery,w as __namedExportsOrder,G as default};
