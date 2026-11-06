import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{p as g}from"./haptic-CO53tiLf.js";import{f as x}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({displayMode:d="light",state:n="rest",glyph:r="q",a11yLabel:u,testId:f}){const l=r==="space";return e.jsx("button",{type:"button",className:"ddgds-hit ddgds-key"+(l?" is-space":"")+(d==="dark"?" is-dark":"")+(n==="focused"?" is-focused":""),"aria-label":u||(l?"space":r),"data-testid":f,"data-display-mode":d,"data-state":n,onPointerDown:()=>g("key"),children:l?"":r})}a.__docgenInfo={description:"DDGDS Keyboard / Key.",methods:[],displayName:"KeyboardKey",props:{displayMode:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},glyph:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"q"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"DDGDS/Keyboard/Key",component:a,parameters:{layout:"padded",...x("54805:91010")}},s={name:"Example / Default",args:{displayMode:"light",state:"rest",glyph:"q"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{glyph:"q"}),e.jsx(a,{glyph:"w",displayMode:"dark"}),e.jsx(a,{glyph:"e",state:"focused"})]})})};var i,o,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    displayMode: "light",
    state: "rest",
    glyph: "q"
  }
}`,...(p=(o=s.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,c,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    }}><KeyboardKey glyph="q" /><KeyboardKey glyph="w" displayMode="dark" /><KeyboardKey glyph="e" state="focused" /></div>
    </div>
}`,...(y=(c=t.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const j=["Example","Gallery"];export{s as Example,t as Gallery,j as __namedExportsOrder,q as default};
