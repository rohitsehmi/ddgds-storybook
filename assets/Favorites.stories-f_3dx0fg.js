import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{F as n}from"./FavoritesTile-EuAM1DvX.js";import{f as y}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";import"./glyphs-DATQVZBr.js";import"./haptic-CO53tiLf.js";function s({count:r="3",state:u="rest",a11yLabel:f,testId:x}){const v=r==="0"?0:3;return e.jsxs("div",{className:"ddgds-favorites",role:"list","aria-label":f||"Favorites","data-testid":x,"data-count":r,"data-state":u,children:[Array.from({length:v}).map((g,l)=>e.jsx("div",{role:"listitem",children:e.jsx(n,{type:"site",label:["DuckDuckGo","Wikipedia","News"][l]})},l)),e.jsx("div",{role:"listitem",children:e.jsx(n,{type:"add"})}),r==="0"?e.jsx("div",{role:"listitem",children:e.jsx("span",{className:"ddgds-muted",children:"No favorites yet"})}):null]})}s.__docgenInfo={description:"DDGDS Favorites — row of tiles.",methods:[],displayName:"Favorites",props:{count:{required:!1,tsType:{name:"union",raw:'"3" | "0"',elements:[{name:"literal",value:'"3"'},{name:"literal",value:'"0"'}]},description:"",defaultValue:{value:'"3"',computed:!1}},state:{required:!1,tsType:{name:"literal",value:'"rest"'},description:"",defaultValue:{value:'"rest"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"DDGDS/Favorites",component:s,parameters:{layout:"padded",...y("54693:26432")}},a={name:"Example / Default",args:{count:"3",state:"rest"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(s,{count:"3"}),e.jsx(s,{count:"0"})]})};var i,o,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    count: "3",
    state: "rest"
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <Favorites count="3" />
      <Favorites count="0" />
    </div>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const T=["Example","Gallery"];export{a as Example,t as Gallery,T as __namedExportsOrder,N as default};
