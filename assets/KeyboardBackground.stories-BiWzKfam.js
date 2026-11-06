import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{f as u}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function s({displayMode:d="light",a11yLabel:m,testId:c}){return e.jsx("div",{className:"ddgds-kb-bg"+(d==="dark"?" is-dark":""),role:"presentation","aria-label":m,"data-testid":c,"data-display-mode":d})}s.__docgenInfo={description:"DDGDS Keyboard / Background.",methods:[],displayName:"KeyboardBackground",props:{displayMode:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"DDGDS/Keyboard/Background",component:s,parameters:{layout:"padded",...u("54805:91010")}},a={name:"Example / Default",args:{displayMode:"light"}},r={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(s,{displayMode:"light"}),e.jsx(s,{displayMode:"dark"})]})})};var l,t,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    displayMode: "light"
  }
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,o,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      gap: 12
    }}><KeyboardBackground displayMode="light" /><KeyboardBackground displayMode="dark" /></div>
    </div>
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const b=["Example","Gallery"];export{a as Example,r as Gallery,b as __namedExportsOrder,k as default};
