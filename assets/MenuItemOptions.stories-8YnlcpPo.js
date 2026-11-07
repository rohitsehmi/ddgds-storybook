import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";/* empty css                  */import{n as _,f as x,k as y}from"./glyphs-NNnosKFO.js";import{f as h}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({platform:u="ios",action:a="page_right",state:s="rest",a11yLabel:c,testId:f}){const g={delete:"Delete",fill_up:"Move up",fill_down:"Move down",open_in:"Open in",page_right:"More"};return e.jsx("button",{type:"button",className:"ddgds-hit ddgds-icon-btn"+(s==="focused"?" is-focused":""),"aria-label":c||g[a],"data-testid":f,"data-platform":u,"data-action":a,"data-state":s,children:a==="delete"?e.jsx(_,{}):a==="open_in"?e.jsx(x,{}):e.jsx(y,{dir:a==="fill_up"?"up":a==="fill_down"?"down":"right"})})}t.__docgenInfo={description:"DDGDS Menu / Item Options — trailing action.",methods:[],displayName:"MenuItemOptions",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"",defaultValue:{value:'"ios"',computed:!1}},action:{required:!1,tsType:{name:"union",raw:'"delete" | "fill_up" | "fill_down" | "open_in" | "page_right"',elements:[{name:"literal",value:'"delete"'},{name:"literal",value:'"fill_up"'},{name:"literal",value:'"fill_down"'},{name:"literal",value:'"open_in"'},{name:"literal",value:'"page_right"'}]},description:"",defaultValue:{value:'"page_right"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"rest"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"DDGDS/Menu/Item Options",component:t,parameters:{layout:"padded",...h("54725:2190")}},n={name:"Example / Default",args:{platform:"ios",action:"page_right",state:"rest"}},l={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(t,{action:"page_right"}),e.jsx(t,{action:"delete"}),e.jsx(t,{action:"fill_up"}),e.jsx(t,{action:"open_in",state:"focused"})]})})};var i,r,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Example / Default",
  args: {
    platform: "ios",
    action: "page_right",
    state: "rest"
  }
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var p,d,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    }}><MenuItemOptions action="page_right" /><MenuItemOptions action="delete" /><MenuItemOptions action="fill_up" /><MenuItemOptions action="open_in" state="focused" /></div>
    </div>
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const w=["Example","Gallery"];export{n as Example,l as Gallery,w as __namedExportsOrder,O as default};
