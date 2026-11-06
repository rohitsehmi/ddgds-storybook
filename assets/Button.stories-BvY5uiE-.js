import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{p as K}from"./haptic-CO53tiLf.js";import{I as u,a as A,b as m}from"./icons-DJlvk8Ys.js";import{f as Q}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";function t({label:M="Button",styleVariant:y="standard",startVisual:v,endVisual:b,a11yLabel:w,testId:O,disabled:x,className:P,type:z="button",onPointerDown:c,...U}){const $=["ddgds-button",`ddgds-button--${y}`,P].filter(Boolean).join(" ");return e.jsxs("button",{type:z,className:$,disabled:x,"aria-label":w||void 0,"data-testid":O||void 0,onPointerDown:J=>{c==null||c(J),x||K(y==="destructive"?"heavy":"tap")},...U,children:[e.jsxs("span",{className:"ddgds-button__cluster",children:[v?e.jsx("span",{className:"ddgds-button__visual","aria-hidden":"true",children:v}):null,e.jsx("span",{className:"ddgds-button__label",children:M})]}),b?e.jsx("span",{className:"ddgds-button__visual","aria-hidden":"true",children:b}):null]})}t.__docgenInfo={description:`DDGDS Button — Figma SoT: Style × State, Start/End Children slots, Code only props.
@see ../figma-notes/button/component.spec.yaml`,methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"Visible label — Figma `Label`",defaultValue:{value:'"Button"',computed:!1}},styleVariant:{required:!1,tsType:{name:"union",raw:'"standard" | "accent" | "destructive"',elements:[{name:"literal",value:'"standard"'},{name:"literal",value:'"accent"'},{name:"literal",value:'"destructive"'}]},description:"Style axis — Standard | Accent | Destructive",defaultValue:{value:'"standard"',computed:!1}},startVisual:{required:!1,tsType:{name:"ReactNode"},description:"Leading slot (Start visual)"},endVisual:{required:!1,tsType:{name:"ReactNode"},description:"Trailing slot (End visual)"},a11yLabel:{required:!1,tsType:{name:"string"},description:"Code only — accessibility name"},testId:{required:!1,tsType:{name:"string"},description:"Code only — automation id"},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const ae={title:"DDGDS/Button",component:t,parameters:{layout:"centered",...Q("54693:26580"),docs:{description:{component:"Figma SoT: Style × State, Start/End Children slots, Code only props. Tokens only — no hardcoded hex in the contract."}}},argTypes:{styleVariant:{control:"select",options:["standard","accent","destructive"]},label:{control:"text"},disabled:{control:"boolean"},a11yLabel:{control:"text"},testId:{control:"text"}}},p={display:"flex",flexWrap:"wrap",gap:16,alignItems:"center",justifyContent:"center"},o={display:"flex",flexDirection:"column",gap:20,alignItems:"flex-start",fontFamily:"var(--ddgds-font)",fontSize:12,color:"#666"},n={fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:11,color:"#888",marginBottom:8},a={name:"Example / Save",args:{label:"Save",styleVariant:"accent",a11yLabel:"Save",testId:"ddgds-button-save"}},s={args:{label:"Button",styleVariant:"accent",a11yLabel:"Button",testId:"ddgds-button-playground"}},r={name:"Styles",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:o,children:[e.jsxs("div",{children:[e.jsx("div",{style:n,children:"standard"}),e.jsx(t,{label:"Standard",styleVariant:"standard"})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"accent"}),e.jsx(t,{label:"Accent",styleVariant:"accent"})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"destructive"}),e.jsx(t,{label:"Destructive",styleVariant:"destructive"})]})]})},l={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:o,children:[e.jsxs("p",{style:{margin:0,maxWidth:420,lineHeight:1.45},children:["Rest is the default. Hover, pressed, and focus use CSS. Disabled is the"," ",e.jsx("code",{children:"disabled"})," prop (maps to Figma State=Disabled)."]}),e.jsxs("div",{style:p,children:[e.jsxs("div",{children:[e.jsx("div",{style:n,children:"rest"}),e.jsx(t,{label:"Rest",styleVariant:"accent"})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"disabled"}),e.jsx(t,{label:"Disabled",styleVariant:"accent",disabled:!0})]})]}),e.jsx("p",{style:{margin:0,color:"#888"},children:"Tip: tab to a button for focus-visible; click-hold for pressed."})]})},d={name:"Slots",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:o,children:[e.jsx("p",{style:{margin:0,maxWidth:440,lineHeight:1.45},children:"Start / End are Children slots — not baked into masters. Compose icons in Ready made or product UI."}),e.jsxs("div",{style:p,children:[e.jsx(t,{label:"Search",styleVariant:"standard",startVisual:e.jsx(u,{})}),e.jsx(t,{label:"Protected",styleVariant:"standard",startVisual:e.jsx(A,{})}),e.jsx(t,{label:"Next",styleVariant:"accent",endVisual:e.jsx(m,{})}),e.jsx(t,{label:"Open site",styleVariant:"accent",startVisual:e.jsx(u,{}),endVisual:e.jsx(m,{})})]})]})},i={name:"Ready made set",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:o,children:[e.jsxs("p",{style:{margin:0,maxWidth:440,lineHeight:1.45},children:["Named like Figma: ",e.jsxs("code",{children:["DDGDS Button / Example / ","{name}"]})]}),e.jsxs("div",{style:p,children:[e.jsx(t,{label:"Save",styleVariant:"accent",testId:"example-save"}),e.jsx(t,{label:"Search",styleVariant:"accent",startVisual:e.jsx(u,{})}),e.jsx(t,{label:"Protected",styleVariant:"standard",startVisual:e.jsx(A,{})}),e.jsx(t,{label:"Share",styleVariant:"standard"}),e.jsx(t,{label:"Next",styleVariant:"accent",endVisual:e.jsx(m,{})}),e.jsx(t,{label:"Delete",styleVariant:"destructive"})]})]})};var S,h,g,j,V;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Example / Save",
  args: {
    label: "Save",
    styleVariant: "accent",
    a11yLabel: "Save",
    testId: "ddgds-button-save"
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:"Ready made — Accent Save (matches Figma DDGDS Button / Example / Save).",...(V=(j=a.parameters)==null?void 0:j.docs)==null?void 0:V.description}}};var f,B,I,D,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Button",
    styleVariant: "accent",
    a11yLabel: "Button",
    testId: "ddgds-button-playground"
  }
}`,...(I=(B=s.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:"Interactive playground — brand tokens via controls.",...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};var R,N,k;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(k=(N=r.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var T,E,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "States",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={stack}>
      <p style={{
      margin: 0,
      maxWidth: 420,
      lineHeight: 1.45
    }}>
        Rest is the default. Hover, pressed, and focus use CSS. Disabled is the{" "}
        <code>disabled</code> prop (maps to Figma State=Disabled).
      </p>
      <div style={row}>
        <div>
          <div style={labelStyle}>rest</div>
          <Button label="Rest" styleVariant="accent" />
        </div>
        <div>
          <div style={labelStyle}>disabled</div>
          <Button label="Disabled" styleVariant="accent" disabled />
        </div>
      </div>
      <p style={{
      margin: 0,
      color: "#888"
    }}>
        Tip: tab to a button for focus-visible; click-hold for pressed.
      </p>
    </div>
}`,...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,H,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var q,W,G;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(W=i.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const se=["Save","Playground","Styles","States","Slots","ReadyMade"];export{s as Playground,i as ReadyMade,a as Save,d as Slots,l as States,r as Styles,se as __namedExportsOrder,ae as default};
