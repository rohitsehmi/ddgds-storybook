import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{f as O}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";const A="/ddgds/assets/ios-light-CtrxTcXk.png",R="/ddgds/assets/ios-dark-CGvBXYPQ.png",T="/ddgds/assets/android-Dn6Vm1Zb.png";function r({platform:e="ios",displayMode:n="light",a11yLabel:S,testId:D}){const i=e==="ios"&&n==="dark",M=e==="android"?"Android keyboard":i?"iOS keyboard, dark":"iOS keyboard",v=e==="android"?T:i?R:A;return a.jsx("img",{src:v,alt:S||M,width:e==="android"?412:402,"data-testid":D,"data-platform":e,"data-display-mode":n,style:{display:"block",height:"auto",maxWidth:"100%"}})}r.__docgenInfo={description:`The system keyboard, for reference. These are the keyboards from the
iOS and Android shells, not a DuckDuckGo component to restyle.`,methods:[],displayName:"Keyboard",props:{platform:{required:!1,tsType:{name:"union",raw:'"ios" | "android"',elements:[{name:"literal",value:'"ios"'},{name:"literal",value:'"android"'}]},description:"Which operating system this reference follows. Not a theme.",defaultValue:{value:'"ios"',computed:!1}},displayMode:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"",defaultValue:{value:'"light"',computed:!1}},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"DDGDS/Keyboard",component:r,parameters:{layout:"padded",...O("54805:91010"),docs:{description:{component:"Reference only. These are the system keyboards from the iOS and Android shells. iOS has a light keyboard and a dark keyboard. Android has no dark keyboard in the file. Do not restyle one to match the other. A system alert is the same kind of platform chrome."}}}},s={name:"Reference / iOS",args:{platform:"ios",displayMode:"light"}},o={name:"Reference / iOS dark",args:{platform:"ios",displayMode:"dark"}},d={name:"Reference / Android",args:{platform:"android",displayMode:"light"}},t={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[a.jsx(r,{platform:"ios",displayMode:"light"}),a.jsx(r,{platform:"ios",displayMode:"dark"}),a.jsx(r,{platform:"android",displayMode:"light"})]})};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Reference / iOS",
  args: {
    platform: "ios",
    displayMode: "light"
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,y,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Reference / iOS dark",
  args: {
    platform: "ios",
    displayMode: "dark"
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,h,u;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Reference / Android",
  args: {
    platform: "android",
    displayMode: "light"
  }
}`,...(u=(h=d.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var k,b,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      <Keyboard platform="ios" displayMode="light" />
      <Keyboard platform="ios" displayMode="dark" />
      <Keyboard platform="android" displayMode="light" />
    </div>
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const w=["Example","Dark","Android","Gallery"];export{d as Android,o as Dark,s as Example,t as Gallery,w as __namedExportsOrder,q as default};
