import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as t}from"./index-B5hC7eBp.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BBwksc5d.js";import"./index-B6ujFmsw.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"DDGDS/Introduction"}),`
`,e.jsx(n.h1,{id:"ddgds",children:"DDGDS"}),`
`,e.jsx(n.p,{children:"Unofficial take-home by Ro / Deesyn. This is not the DuckDuckGo design system, and it is not affiliated with DuckDuckGo."}),`
`,e.jsxs(n.p,{children:["Web emit of the Figma ",e.jsx(n.strong,{children:"DDGDS"})," library: ",e.jsx(n.strong,{children:"37 components"}),", EGDS-shaped JSON, and a kit handoff."]}),`
`,e.jsx(n.h2,{id:"requirement-11-across-platforms",children:"Requirement: 1:1 across platforms"}),`
`,e.jsxs(n.p,{children:["Figma craft masters ↔ Web Storybook must ",e.jsx(n.strong,{children:"look the same"}),". iOS / Android share the same axes and tokens — stubs are not a free pass to diverge."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Why:"})," DuckDuckGo is one product on many platforms. Drift burns review and breaks trust. See ",e.jsx(n.strong,{children:"DDGDS / Parity"})," and ",e.jsx(n.code,{children:"docs/PARITY.md"}),"."]}),`
`,e.jsxs(n.p,{children:[`| Today | Count |
| --- | --- |
| Paint-accurate Web | `,e.jsx(n.strong,{children:"37"}),` |
| Shells | `,e.jsx(n.strong,{children:"0"})," |"]}),`
`,e.jsx(n.h2,{id:"how-to-browse",children:"How to browse"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Parity"})," — scoreboard and why"]}),`
`,e.jsx(n.li,{children:"Component stories — real UI vs Figma"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Kit handoff"})," / ",e.jsx(n.strong,{children:"Machine-readable"})," — rules for humans and agents"]}),`
`]}),`
`,e.jsx(n.h2,{id:"sources-of-truth",children:"Sources of truth"}),`
`,e.jsxs(n.p,{children:[`| Layer | Own |
| --- | --- |
| Figma `,e.jsx(n.code,{children:"DDGDS …"}),` sets | Craft + Ready made |
| `,e.jsx(n.code,{children:"kit/"})," + ",e.jsx(n.code,{children:"specs/*.spec.json"}),` | Machine-readable contracts |
| This Storybook | Living Web proof |`]}),`
`,e.jsx(n.p,{children:"The source repository is private. This Storybook is the public view of the take-home."})]})}function u(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default};
