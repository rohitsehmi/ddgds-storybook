import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{s as y,r as x}from"./glyphs-DATQVZBr.js";import{p as g}from"./haptic-CO53tiLf.js";import{f as v}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function a({platform:i="ios",type:t="delete",a11yLabel:u,testId:f}){const c=t==="fire"?"Fire":"Delete";return e.jsx("button",{type:"button",className:"ddgds-hit ddgds-swipe"+(t==="fire"?" is-fire":""),"aria-label":u||c,"data-testid":f,"data-platform":i,"data-type":t,style:i==="android"?{borderRadius:0,width:72}:void 0,onPointerDown:()=>g("heavy"),children:t==="fire"?e.jsx(y,{}):e.jsx(x,{})})}a.__docgenInfo={description:"DDGDS List / Swipe Menu — delete or fire action.",methods:[],displayName:"ListSwipeMenu",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"delete" | "fire"',elements:[{name:"literal",value:'"delete"'},{name:"literal",value:'"fire"'}]},description:"",defaultValue:{value:'"delete"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"DDGDS/List/Swipe Menu",component:a,parameters:{layout:"padded",...v("54725:2187")}},r={name:"Example / Default",args:{platform:"ios",type:"delete"}},s={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(a,{type:"delete"}),e.jsx(a,{type:"fire"}),e.jsx(a,{platform:"android",type:"delete"})]})})};var l,n,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    type: "delete"
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    }}><ListSwipeMenu type="delete" /><ListSwipeMenu type="fire" /><ListSwipeMenu platform="android" type="delete" /></div>
    </div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const L=["Example","Gallery"];export{r as Example,s as Gallery,L as __namedExportsOrder,G as default};
