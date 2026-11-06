import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as W}from"./index-G8LIXM5I.js";import{B as A}from"./ButtonDisclosure-Ccel8KdT.js";import{f as C}from"./figmaDesign-CnvWdO2n.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./haptic-CO53tiLf.js";const G=[{name:"Facebook",count:"310"},{name:"Google",count:"279"},{name:"Amazon",count:"186"},{name:"Mixpanel",count:"93"},{name:"Oracle",count:"91"}];function r({expanded:t=!0,title:s="Protections Report",heading:p="48,113 tracking attempts blocked",period:S="PAST 7 DAYS",tab:n="summary",rows:T=G,onToggle:w,onShowMore:E,a11yLabel:D,testId:q,className:R,...k}){const a=t===!0||t==="true",P=["ddgds-report",a?"ddgds-report--expanded":"ddgds-report--collapsed",R].filter(Boolean).join(" ");return e.jsxs("section",{className:P,"aria-label":D||s,"data-testid":q||void 0,"data-expanded":String(a),...k,children:[e.jsxs("header",{className:"ddgds-report__header",children:[e.jsxs("div",{className:"ddgds-report__title-row",children:[e.jsx("span",{className:"ddgds-report__shield","aria-hidden":"true",children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[e.jsx("path",{fill:"currentColor",d:"M12 2.5 20 6v6.5c0 4.8-3.3 8.4-8 9.5-4.7-1.1-8-4.7-8-9.5V6l8-3.5Z"}),e.jsx("path",{fill:"#fff",d:"m10.6 15.2-3.4-3.4 1.4-1.4 2 2 4.2-4.2 1.4 1.4-5.6 5.6Z"})]})}),e.jsx("h2",{className:"ddgds-report__title",children:s}),e.jsx(A,{type:a?"close":"open",a11yLabel:a?"Collapse protections report":"Expand protections report",onClick:w})]}),e.jsxs("div",{className:"ddgds-report__heading-block",children:[e.jsx("p",{className:"ddgds-report__heading",children:p}),e.jsx("p",{className:"ddgds-report__period",children:S})]})]}),a?e.jsxs("div",{className:"ddgds-report__content",children:[e.jsxs("div",{className:"ddgds-report__tabs",role:"tablist","aria-label":"Report view",children:[e.jsx("span",{className:n==="summary"?"ddgds-report__tab ddgds-report__tab--active":"ddgds-report__tab",role:"tab","aria-selected":n==="summary",children:"Summary"}),e.jsx("span",{className:n==="details"?"ddgds-report__tab ddgds-report__tab--active":"ddgds-report__tab",role:"tab","aria-selected":n==="details",children:"Details"})]}),e.jsx("ul",{className:"ddgds-report__list",children:T.map(c=>e.jsxs("li",{className:"ddgds-report__row",children:[e.jsx("span",{className:"ddgds-report__row-name",children:c.name}),e.jsx("span",{className:"ddgds-report__row-count",children:c.count})]},c.name))}),e.jsx("button",{type:"button",className:"ddgds-report__more",onClick:E,children:"Show more"})]}):null]})}r.__docgenInfo={description:"DDGDS Protections / Report Widget — Expanded × collapsed card from Figma craft.",methods:[],displayName:"ProtectionsReportWidget",props:{expanded:{required:!1,tsType:{name:"union",raw:'boolean | "true" | "false"',elements:[{name:"boolean"},{name:"literal",value:'"true"'},{name:"literal",value:'"false"'}]},description:"",defaultValue:{value:"true",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Protections Report"',computed:!1}},heading:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"48,113 tracking attempts blocked"',computed:!1}},period:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"PAST 7 DAYS"',computed:!1}},tab:{required:!1,tsType:{name:"union",raw:'"summary" | "details"',elements:[{name:"literal",value:'"summary"'},{name:"literal",value:'"details"'}]},description:"",defaultValue:{value:'"summary"',computed:!1}},rows:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; count: number | string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"count",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}}],raw:"{ name: string; count: number | string }[]"},description:"",defaultValue:{value:`[
  { name: "Facebook", count: "310" },
  { name: "Google", count: "279" },
  { name: "Amazon", count: "186" },
  { name: "Mixpanel", count: "93" },
  { name: "Oracle", count: "91" },
]`,computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onShowMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},a11yLabel:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:""}}};const z={title:"DDGDS/Protections/Report Widget",component:r,parameters:{layout:"padded",...C("54693:26477")}},d={name:"Example / Expanded",args:{expanded:!0}},o={name:"Example / Collapsed",args:{expanded:!1}},l={name:"Interactive",parameters:{controls:{disable:!0}},render:()=>{const[t,s]=W.useState(!0);return e.jsx(r,{expanded:t,onToggle:()=>s(p=>!p)})}},i={name:"Gallery",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:504},children:[e.jsx(r,{expanded:!0}),e.jsx(r,{expanded:!1})]})};var m,u,g;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Example / Expanded",
  args: {
    expanded: true
  }
}`,...(g=(u=d.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Example / Collapsed",
  args: {
    expanded: false
  }
}`,...(_=(f=o.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var h,y,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Interactive",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <ProtectionsReportWidget expanded={open} onToggle={() => setOpen(v => !v)} />;
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,j,N;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Gallery",
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    maxWidth: 504
  }}>
      <ProtectionsReportWidget expanded />
      <ProtectionsReportWidget expanded={false} />
    </div>
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Y=["Expanded","Collapsed","Interactive","Gallery"];export{o as Collapsed,d as Expanded,i as Gallery,l as Interactive,Y as __namedExportsOrder,z as default};
