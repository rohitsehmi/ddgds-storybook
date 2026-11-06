import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{i as y,o as x}from"./glyphs-Dy1q1Og_.js";import{f as g}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({state:t="active",layout:n="normal",title:r="DuckDuckGo",a11yLabel:p,testId:f}){const v=["ddgds-hit","ddgds-tab",t==="active"?"is-active":"",t==="hover"?"is-hover":"",n==="pinned"?"is-pinned":"",t==="focused"?"is-focused":""].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",className:v,"aria-label":p||r,"data-testid":f,"data-state":t,"data-layout":n,children:[e.jsx(y,{}),n==="normal"?e.jsx("span",{className:"ddgds-tab__title",children:r}):null,n==="normal"&&t!=="inactive"?e.jsx(x,{}):null]})}a.__docgenInfo={description:"DDGDS Browser / Tab.",methods:[],displayName:"BrowserTab",props:{state:{required:!1,tsType:{name:"union",raw:'"inactive" | "hover" | "active" | "focused"',elements:[{name:"literal",value:'"inactive"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"active"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"active"',computed:!1}},layout:{required:!1,tsType:{name:"union",raw:'"normal" | "pinned"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"pinned"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"DuckDuckGo"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"DDGDS/Browser/Tab",component:a,parameters:{layout:"padded",...g("54693:26039")}},s={name:"Example / Default",args:{state:"active",layout:"normal",title:"DuckDuckGo"}},l={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end"},children:[e.jsx(a,{state:"active",layout:"normal"}),e.jsx(a,{state:"inactive",layout:"normal",title:"News"}),e.jsx(a,{state:"hover",layout:"normal",title:"Settings"}),e.jsx(a,{state:"focused",layout:"pinned"})]})})};var i,o,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    state: "active",
    layout: "normal",
    title: "DuckDuckGo"
  }
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,c,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        <BrowserTab state="active" layout="normal" />
        <BrowserTab state="inactive" layout="normal" title="News" />
        <BrowserTab state="hover" layout="normal" title="Settings" />
        <BrowserTab state="focused" layout="pinned" />
      </div>
    </div>
}`,...(u=(c=l.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const w=["Example","Gallery"];export{s as Example,l as Gallery,w as __namedExportsOrder,T as default};
