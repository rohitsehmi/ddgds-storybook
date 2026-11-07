import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as t}from"./index-CxbY7dAs.js";import{M as o}from"./index-DLwhjTAI.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C5B5q5bh.js";import"./index-B6ujFmsw.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"DDGDS/Machine-readable"}),`
`,e.jsx(n.h1,{id:"why-machine-readable",children:"Why machine-readable"}),`
`,e.jsxs(n.p,{children:["A human Usage page describes the Button. A ",e.jsx(n.strong,{children:"machine-readable contract"})," describes it so a script can:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Validate"})," — Storybook args, React props, and emit stubs stay aligned with ",e.jsx(n.code,{children:"component.spec.json"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Generate"})," — ",e.jsx(n.code,{children:"variant.spec.json"})," token paths → ",e.jsx(n.code,{children:"tokens.generated.css"})," (and Compose / SwiftUI stubs)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Diff"})," — Style × State changes show up as JSON diffs in Git"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spot hardcoding"})," — every colour/size must be ",e.jsx(n.code,{children:"$theme/…"})," or ",e.jsx(n.code,{children:"$tokens/…"}),"; ",e.jsx(n.code,{children:"#hex"})," and ",e.jsx(n.code,{children:"px"})," fail CI"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Same shape as EGDS Component Spec + Variant Spec: configurations, element ",e.jsx(n.code,{children:"$ref"}),"s, default breakdown, then ",e.jsx(n.code,{children:"variants[]"})," with ",e.jsx(n.code,{children:"match"})," / ",e.jsx(n.code,{children:"baseline"}),"."]}),`
`,e.jsx(n.h2,{id:"artefacts-in-this-package",children:"Artefacts in this package"}),`
`,e.jsxs(n.p,{children:[`| Path | Role |
| --- | --- |
| `,e.jsx(n.code,{children:"specs/component.spec.json"}),` | API surface |
| `,e.jsx(n.code,{children:"specs/variant.spec.json"}),` | Visual contract |
| `,e.jsx(n.code,{children:"scripts/token-registry.json"}),` | Resolves paths for Web |
| `,e.jsx(n.code,{children:"kit/"}),` | Agent + PD handoff mirror |
| `,e.jsx(n.code,{children:"emit/ios"})," · ",e.jsx(n.code,{children:"emit/android"})," | Stubs from the same component spec |"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm run prepare:contract   # tokens + emit + validate
npm run storybook
`})})]})}function u(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{u as default};
