import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{f}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({displayMode:n="light",state:l="rest",glyph:s="return",a11yLabel:m,testId:y}){return e.jsx("button",{type:"button",className:"ddgds-hit ddgds-key is-accent"+(n==="dark"?" is-dark":"")+(l==="focused"?" is-focused":""),style:{width:s.length>1?72:32},"aria-label":m||s,"data-testid":y,"data-display-mode":n,"data-state":l,children:s})}a.__docgenInfo={description:"DDGDS Keyboard / Key Accent — return and shift keys.",methods:[],displayName:"KeyboardKeyAccent",props:{displayMode:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},glyph:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"return"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const b={title:"DDGDS/Keyboard/Key Accent",component:a,parameters:{layout:"padded",...f("54805:91010")}},t={name:"Example / Default",args:{displayMode:"light",state:"rest",glyph:"return"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{glyph:"return"}),e.jsx(a,{glyph:"⇧",displayMode:"dark"}),e.jsx(a,{glyph:"return",state:"focused"})]})})};var d,i,o;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    displayMode: "light",
    state: "rest",
    glyph: "return"
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    }}><KeyboardKeyAccent glyph="return" /><KeyboardKeyAccent glyph="⇧" displayMode="dark" /><KeyboardKeyAccent glyph="return" state="focused" /></div>
    </div>
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const v=["Example","Gallery"];export{t as Example,r as Gallery,v as __namedExportsOrder,b as default};
