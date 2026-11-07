import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as r}from"./index-Cs996wCB.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-X0M4RXkD.js";import"./index-B6ujFmsw.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"DDGDS/Kit handoff"}),`
`,e.jsx(n.h1,{id:"kit--pd--ai-handoff",children:"Kit · PD + AI handoff"}),`
`,e.jsxs(n.p,{children:["Figma is craft SoT. The ",e.jsx(n.strong,{children:"kit"})," is what you open so you don’t invent a fourth Button."]}),`
`,e.jsx(n.h2,{id:"product-designer",children:"Product designer"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.strong,{children:"DDGDS Button"})," + Docs in Figma (Overview · Design · Web · iOS · Android · Accessibility)."]}),`
`,e.jsxs(n.li,{children:["Copy ",e.jsx(n.strong,{children:"Ready made"})," examples into screens — masters stay empty of icons."]}),`
`,e.jsxs(n.li,{children:["Compose ",e.jsx(n.strong,{children:"Start / End"})," Children slots; don’t bake icons into the set."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One Accent"})," per screen. Standard for secondary. Destructive = irreversible only."]}),`
`,e.jsxs(n.li,{children:["Read ",e.jsx(n.code,{children:"kit/components/button/HANDOFF.md"})," in this repo."]}),`
`]}),`
`,e.jsx(n.h2,{id:"cursor--claude",children:"Cursor / Claude"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Open ",e.jsx(n.code,{children:"kit/AGENTS.md"})," then ",e.jsx(n.code,{children:"kit/catalog.json"}),"."]}),`
`,e.jsxs(n.li,{children:["Specs: ",e.jsx(n.code,{children:"kit/components/button/*.spec.json"})," (same as ",e.jsx(n.code,{children:"specs/"}),")."]}),`
`,e.jsxs(n.li,{children:["Foundations: ",e.jsx(n.code,{children:"kit/foundations/tokens.json"}),"."]}),`
`,e.jsxs(n.li,{children:["Prove: ",e.jsx(n.code,{children:"npm run prepare:contract"})," (fails on hardcoded ",e.jsx(n.code,{children:"#hex"})," / ",e.jsx(n.code,{children:"px"}),")."]}),`
`,e.jsxs(n.li,{children:["Screens ",e.jsx(n.strong,{children:"compose"})," components — do not encode whole screens as ",e.jsx(n.code,{children:"variant.spec.json"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"same-process-for-the-next-component",children:"Same process for the next component"}),`
`,e.jsx(n.p,{children:"Plan → Figma set → EGDS JSON → Ready made → catalog entry → emit → Storybook."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Deferred:"})," Ghost, outlined, brand, and loading. The button is one height, 44. See ",e.jsx(n.code,{children:"docs/deferred.md"})," and ",e.jsx(n.code,{children:"kit/SIZE.md"}),"."]})]})}function u(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{u as default};
