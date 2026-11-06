import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{p as Z}from"./haptic-CO53tiLf.js";import{I as y,a as P,b as m}from"./icons-DJlvk8Ys.js";import{f as ee}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({label:W="Button",style:A,styleVariant:O="standard",state:l="rest",startVisual:p,endVisual:b,a11yLabel:z,testId:U,disabled:$,className:J,type:K="button",onPointerDown:u,...Q}){const x=A??O,h=$||l==="disabled",X=["ddgds-button",`ddgds-button--${x}`,l!=="rest"?`ddgds-button--state-${l}`:"",J].filter(Boolean).join(" ");return e.jsxs("button",{type:K,className:X,disabled:h,"data-state":l,"aria-label":z||void 0,"data-testid":U||void 0,onPointerDown:Y=>{u==null||u(Y),h||Z(x==="destructive"?"heavy":"tap")},...Q,children:[e.jsxs("span",{className:"ddgds-button__cluster",children:[p?e.jsx("span",{className:"ddgds-button__visual","aria-hidden":"true",children:p}):null,e.jsx("span",{className:"ddgds-button__label",children:W})]}),b?e.jsx("span",{className:"ddgds-button__visual","aria-hidden":"true",children:b}):null]})}t.__docgenInfo={description:`DDGDS Button — Figma SoT: Style × State, Start/End Children slots, Code only props.
@see ../figma-notes/button/component.spec.yaml`,methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"Visible label — Figma `Label`",defaultValue:{value:'"Button"',computed:!1}},style:{required:!1,tsType:{name:"union",raw:'"standard" | "accent" | "destructive"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"destructive"'}]},description:"Style axis. The spec name is `style`."},styleVariant:{required:!1,tsType:{name:"union",raw:'"standard" | "accent" | "destructive"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"destructive"'}]},description:"Style axis. HTML already owns `style`, so this is the React name.",defaultValue:{value:'"standard"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"rest" | "hover" | "pressed" | "disabled" | "focused"',elements:[{name:"literal",value:'"rest"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"focused"'}]},description:"State axis: rest, hover, pressed, disabled, focused",defaultValue:{value:'"rest"',computed:!1}},startVisual:{required:!1,tsType:{name:"ReactNode"},description:"Leading slot (Start visual)"},endVisual:{required:!1,tsType:{name:"ReactNode"},description:"Trailing slot (End visual)"},a11yLabel:{required:!1,tsType:{name:"string"},description:"Code only — accessibility name"},testId:{required:!1,tsType:{name:"string"},description:"Code only — automation id"},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const re={title:"DDGDS/Button",component:t,parameters:{layout:"centered",...ee("54693:26580"),docs:{description:{component:"Figma SoT: Style × State, Start/End Children slots, Code only props. Tokens only — no hardcoded hex in the contract."}}},argTypes:{style:{control:"select",options:["standard","accent","destructive"]},styleVariant:{control:"select",options:["standard","accent","destructive"]},state:{control:"select",options:["rest","hover","pressed","disabled","focused"]},label:{control:"text"},disabled:{control:"boolean"},a11yLabel:{control:"text"},testId:{control:"text"}}},v={display:"flex",flexWrap:"wrap",gap:16,alignItems:"center",justifyContent:"center"},c={display:"flex",flexDirection:"column",gap:20,alignItems:"flex-start",fontFamily:"var(--ddgds-font)",fontSize:12,color:"#666"},a={fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:11,color:"#888",marginBottom:8},s={name:"Example / Save",args:{label:"Save",styleVariant:"accent",a11yLabel:"Save",testId:"ddgds-button-save"}},n={args:{label:"Button",styleVariant:"accent",a11yLabel:"Button",testId:"ddgds-button-playground"}},r={name:"Styles",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:c,children:[e.jsxs("div",{children:[e.jsx("div",{style:a,children:"standard"}),e.jsx(t,{label:"Standard",styleVariant:"standard"})]}),e.jsxs("div",{children:[e.jsx("div",{style:a,children:"accent"}),e.jsx(t,{label:"Accent",styleVariant:"accent"})]}),e.jsxs("div",{children:[e.jsx("div",{style:a,children:"destructive"}),e.jsx(t,{label:"Destructive",styleVariant:"destructive"})]})]})},d={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:c,children:e.jsxs("div",{style:v,children:[e.jsxs("div",{children:[e.jsx("div",{style:a,children:"rest"}),e.jsx(t,{label:"Rest",styleVariant:"accent",state:"rest"})]}),e.jsxs("div",{children:[e.jsx("div",{style:a,children:"hover"}),e.jsx(t,{label:"Hover",styleVariant:"accent",state:"hover"})]}),e.jsxs("div",{children:[e.jsx("div",{style:a,children:"pressed"}),e.jsx(t,{label:"Pressed",styleVariant:"accent",state:"pressed"})]}),e.jsxs("div",{children:[e.jsx("div",{style:a,children:"disabled"}),e.jsx(t,{label:"Disabled",styleVariant:"accent",state:"disabled"})]}),e.jsxs("div",{children:[e.jsx("div",{style:a,children:"focused"}),e.jsx(t,{label:"Focused",styleVariant:"accent",state:"focused"})]})]})})},i={name:"Slots",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:c,children:[e.jsx("p",{style:{margin:0,maxWidth:440,lineHeight:1.45},children:"Start / End are Children slots — not baked into masters. Compose icons in Ready made or product UI."}),e.jsxs("div",{style:v,children:[e.jsx(t,{label:"Search",styleVariant:"standard",startVisual:e.jsx(y,{})}),e.jsx(t,{label:"Protected",styleVariant:"standard",startVisual:e.jsx(P,{})}),e.jsx(t,{label:"Next",styleVariant:"accent",endVisual:e.jsx(m,{})}),e.jsx(t,{label:"Open site",styleVariant:"accent",startVisual:e.jsx(y,{}),endVisual:e.jsx(m,{})})]})]})},o={name:"Ready made set",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:c,children:[e.jsxs("p",{style:{margin:0,maxWidth:440,lineHeight:1.45},children:["Named like Figma: ",e.jsxs("code",{children:["DDGDS Button / Example / ","{name}"]})]}),e.jsxs("div",{style:v,children:[e.jsx(t,{label:"Save",styleVariant:"accent",testId:"example-save"}),e.jsx(t,{label:"Search",styleVariant:"accent",startVisual:e.jsx(y,{})}),e.jsx(t,{label:"Protected",styleVariant:"standard",startVisual:e.jsx(P,{})}),e.jsx(t,{label:"Share",styleVariant:"standard"}),e.jsx(t,{label:"Next",styleVariant:"accent",endVisual:e.jsx(m,{})}),e.jsx(t,{label:"Delete",styleVariant:"destructive"})]})]})};var S,V,j,g,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Example / Save",
  args: {
    label: "Save",
    styleVariant: "accent",
    a11yLabel: "Save",
    testId: "ddgds-button-save"
  }
}`,...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:"Ready made — Accent Save (matches Figma DDGDS Button / Example / Save).",...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var B,I,D,C,T;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Button",
    styleVariant: "accent",
    a11yLabel: "Button",
    testId: "ddgds-button-playground"
  }
}`,...(D=(I=n.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"Interactive playground — brand tokens via controls.",...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var N,R,E;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Styles",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={stack}>
      <div>
        <div style={labelStyle}>standard</div>
        <Button label="Standard" styleVariant="standard" />
      </div>
      <div>
        <div style={labelStyle}>accent</div>
        <Button label="Accent" styleVariant="accent" />
      </div>
      <div>
        <div style={labelStyle}>destructive</div>
        <Button label="Destructive" styleVariant="destructive" />
      </div>
    </div>
}`,...(E=(R=r.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var _,k,F;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={stack}>
      <div style={row}>
        <div>
          <div style={labelStyle}>rest</div>
          <Button label="Rest" styleVariant="accent" state="rest" />
        </div>
        <div>
          <div style={labelStyle}>hover</div>
          <Button label="Hover" styleVariant="accent" state="hover" />
        </div>
        <div>
          <div style={labelStyle}>pressed</div>
          <Button label="Pressed" styleVariant="accent" state="pressed" />
        </div>
        <div>
          <div style={labelStyle}>disabled</div>
          <Button label="Disabled" styleVariant="accent" state="disabled" />
        </div>
        <div>
          <div style={labelStyle}>focused</div>
          <Button label="Focused" styleVariant="accent" state="focused" />
        </div>
      </div>
    </div>
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var q,L,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Slots",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={stack}>
      <p style={{
      margin: 0,
      maxWidth: 440,
      lineHeight: 1.45
    }}>
        Start / End are Children slots — not baked into masters. Compose icons in Ready made or
        product UI.
      </p>
      <div style={row}>
        <Button label="Search" styleVariant="standard" startVisual={<IconSearch />} />
        <Button label="Protected" styleVariant="standard" startVisual={<IconShield />} />
        <Button label="Next" styleVariant="accent" endVisual={<IconChevron />} />
        <Button label="Open site" styleVariant="accent" startVisual={<IconSearch />} endVisual={<IconChevron />} />
      </div>
    </div>
}`,...(H=(L=i.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var w,G,M;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Ready made set",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={stack}>
      <p style={{
      margin: 0,
      maxWidth: 440,
      lineHeight: 1.45
    }}>
        Named like Figma: <code>DDGDS Button / Example / {"{name}"}</code>
      </p>
      <div style={row}>
        <Button label="Save" styleVariant="accent" testId="example-save" />
        <Button label="Search" styleVariant="accent" startVisual={<IconSearch />} />
        <Button label="Protected" styleVariant="standard" startVisual={<IconShield />} />
        <Button label="Share" styleVariant="standard" />
        <Button label="Next" styleVariant="accent" endVisual={<IconChevron />} />
        <Button label="Delete" styleVariant="destructive" />
      </div>
    </div>
}`,...(M=(G=o.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};const de=["Save","Playground","Styles","States","Slots","ReadyMade"];export{n as Playground,o as ReadyMade,s as Save,i as Slots,d as States,r as Styles,de as __namedExportsOrder,re as default};
