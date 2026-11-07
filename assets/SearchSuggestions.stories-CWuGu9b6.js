import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as a}from"./SearchSuggestions-DygEkvq7.js";import{f as c}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";/* empty css                  */import"./glyphs-NNnosKFO.js";const S={title:"DDGDS/Search/Suggestions",component:a,parameters:{layout:"padded",...c("54725:2193")},decorators:[m=>e.jsx("div",{role:"listbox","aria-label":"Suggestions",children:e.jsx(m,{})})]},r={name:"Example / Default",args:{platform:"ios",type:"site"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(a,{type:"site"}),e.jsx(a,{type:"search"}),e.jsx(a,{type:"ai_chat"}),e.jsx(a,{type:"bookmark",platform:"desktop"})]})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    type: "site"
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,l,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      <SearchSuggestions type="site" />
      <SearchSuggestions type="search" />
      <SearchSuggestions type="ai_chat" />
      <SearchSuggestions type="bookmark" platform="desktop" />
    </div>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const h=["Example","Gallery"];export{r as Example,s as Gallery,h as __namedExportsOrder,S as default};
