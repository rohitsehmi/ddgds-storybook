import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-CxbY7dAs.js";import{M as r}from"./index-BnMMvZb4.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Dp55PzAK.js";import"./index-B6ujFmsw.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function t(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"DDGDS/Parity"}),`
`,e.jsx(s.h1,{id:"11-across-platforms",children:"1:1 across platforms"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Requirement:"})," Figma craft ↔ Web Storybook look the same. iOS / Android share the same axes and tokens — no forked API."]}),`
`,e.jsx(s.h2,{id:"why",children:"Why"}),`
`,e.jsxs(s.p,{children:["DuckDuckGo is one product on many platforms. Drift between Figma and code (or between platforms) burns review time and breaks trust. DDGDS is EGDS-quality only if you can ",e.jsx(s.strong,{children:"see"})," the same control everywhere that matters."]}),`
`,e.jsxs(s.p,{children:[`| Layer | Owns |
| --- | --- |
| Figma masters | Visual SoT |
| This Storybook | Proof you can open in a browser |
| `,e.jsx(s.code,{children:"kit/"})," + ",e.jsx(s.code,{children:"specs/*.spec.json"}),` | Shared contract |
| iOS / Android stubs | Same contract until native paint |`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Shells were interim."})," A grey card with axis chips was contract-only. Storybook no longer registers those cards."]}),`
`,e.jsx(s.h2,{id:"scoreboard-web",children:"Scoreboard (Web)"}),`
`,e.jsxs(s.p,{children:[`| Status | Count | Meaning |
| --- | --- | --- |
| Paint-accurate | `,e.jsx(s.strong,{children:"33"}),` | Component sets with a web control. Compare with the Figma master. |
| Platform chrome | `,e.jsx(s.strong,{children:"4"}),` | Keyboard stories. Figma keeps the system keyboards as a reference. |
| Shell (not 1:1) | `,e.jsx(s.strong,{children:"0"})," | No ",e.jsx(s.code,{children:"DdgdsControl"})," stories left |"]}),`
`,e.jsx(s.p,{children:"Open any component in the sidebar. Each story exposes the Figma axes (state, platform, type) on a painted control."}),`
`,e.jsxs(s.p,{children:["Screens · Archive is the original and is not scored. Glyphs live on Icons & shells as ",e.jsx(s.code,{children:"DDGDS Icon glyph"}),". Brand marks live on the Asset page as ",e.jsx(s.code,{children:"DDGDS Asset / Mark"}),". The keyboard and a system alert stay platform chrome. Phone shells follow iOS 26 and Material 3 phone size. Tablet layouts are not in this file. The Figma Notes page records this pass."]}),`
`,e.jsx(s.h2,{id:"how-to-read-a-story",children:"How to read a story"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Green / real control"})," → compare to Figma masters on that craft page."]}),`
`,e.jsx(s.li,{children:"If a story is still a grey card with chips, treat it as a shell and do not sign off visual QA."}),`
`,e.jsxs(s.li,{children:["Figma note: ",e.jsx(s.strong,{children:"NOTE · 1:1 platform parity"})," on the Notes page of the Challenge file."]}),`
`,e.jsxs(s.li,{children:["Figma a11y: ",e.jsx(s.strong,{children:"NOTE · WCAG AA craft pass"})," — Focused rings, 44×44 toolbar hits, Disclosure Accent stroke. Why: WCAG 2.4.7 / 2.5.8 / 1.4.11 so Web and native can mirror the same states."]}),`
`]}),`
`,e.jsx(s.h2,{id:"closing-the-gap",children:"Closing the gap"}),`
`,e.jsxs(s.p,{children:["Follow ",e.jsx(s.code,{children:"kit/PROCESS.md"})," / ",e.jsx(s.code,{children:"docs/PARITY.md"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"2026-11-03:"})," all 37 Web stories are painted from the live Figma axes (size, fill, label, Focused ring). iOS and Android stay on the same contract as stubs."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Audit, same day:"})," the contract check passed. Live Storybook has 37 titles and 85 stories. Axe passed on five stories. The other 32 are not in that test. The iOS catalog runs in the simulator and the Android catalog runs on the Pixel 8 emulator. Native paint is still open. Figma Notes has ",e.jsx(s.strong,{children:"NOTE · Audit"}),"."]}),`
`,e.jsxs(s.p,{children:["Repo: ",e.jsx(s.a,{href:"https://github.com/rohitsehmi/ddgds",rel:"nofollow",children:"github.com/rohitsehmi/ddgds"})," · Figma: Challenge file ",e.jsx(s.code,{children:"HSqTm4…"})]})]})}function j(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{j as default};
