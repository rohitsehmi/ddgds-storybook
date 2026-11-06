import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";const x={"16_9":"ddgds-media--16-9","4_3":"ddgds-media--4-3","1_1":"ddgds-media--1-1",thumb:"ddgds-media--thumb"};function a({ratio:i="16_9",src:t,alt:d="",a11yLabel:c,testId:g,className:_,...y}){const b=["ddgds-media",x[i],_].filter(Boolean).join(" ");return e.jsx("div",{className:b,role:"img","aria-label":c||d||"Media","data-testid":g||void 0,"data-ratio":i,...y,children:t?e.jsx("img",{className:"ddgds-media__img",src:t,alt:d}):e.jsx("span",{className:"ddgds-media__placeholder","aria-hidden":"true"})})}a.__docgenInfo={description:"DDGDS Media — News imagery ratios from Figma (16:9 · 4:3 · 1:1 · Thumb).",methods:[],displayName:"Media",props:{ratio:{required:!1,tsType:{name:"union",raw:'"16_9" | "4_3" | "1_1" | "thumb"',elements:[{name:"literal",value:'"16_9"'},{name:"literal",value:'"4_3"'},{name:"literal",value:'"1_1"'},{name:"literal",value:'"thumb"'}]},description:"",defaultValue:{value:'"16_9"',computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"DDGDS/News/Media",component:a,parameters:{layout:"padded",...f("54749:41")}},s={name:"Example / 16:9",args:{ratio:"16_9",a11yLabel:"Story image"}},r={name:"Ratios",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:16,alignItems:"end"},children:[e.jsx(a,{ratio:"16_9",a11yLabel:"16:9"}),e.jsx(a,{ratio:"4_3",a11yLabel:"4:3"}),e.jsx(a,{ratio:"1_1",a11yLabel:"1:1"}),e.jsx(a,{ratio:"thumb",a11yLabel:"Thumb"})]})};var n,o,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Example / 16:9",
  args: {
    ratio: "16_9",
    a11yLabel: "Story image"
  }
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Ratios",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    alignItems: "end"
  }}>
      <Media ratio="16_9" a11yLabel="16:9" />
      <Media ratio="4_3" a11yLabel="4:3" />
      <Media ratio="1_1" a11yLabel="1:1" />
      <Media ratio="thumb" a11yLabel="Thumb" />
    </div>
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const M=["Widescreen","Ratios"];export{r as Ratios,s as Widescreen,M as __namedExportsOrder,L as default};
