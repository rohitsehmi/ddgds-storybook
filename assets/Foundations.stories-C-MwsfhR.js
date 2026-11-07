import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const c=[1,2,4,8,12,16,20,24,32,40,48,64],h=[0,4,8,12,16,24],r="#111111",t="rgba(0,0,0,0.6)",g="var(--ddgds-font)",p=[["Canvas","#fafafa","#1c1c1c"],["Surface","#f2f2f2","#282828"],["Text","rgba(0,0,0,0.96)","#ffffff"],["Text secondary","rgba(0,0,0,0.60)","rgba(255,255,255,0.70)"],["Control fill","rgba(0,0,0,0.06)","rgba(255,255,255,0.04)"]];function m({n:e}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[n.jsx("div",{style:{width:Math.max(e*4,4),height:16,borderRadius:2,background:"#1074cc"}}),n.jsx("span",{style:{fontSize:13,color:r},children:e})]})}const f={title:"DDGDS/Foundations",parameters:{layout:"padded",docs:{description:{component:"Spacing, radius and colour. Typography, Icons and Asset are their own groups in the sidebar."}}}},i={name:"Scale",render:()=>n.jsxs("div",{style:{fontFamily:g,color:r,maxWidth:720,display:"grid",gap:36},children:[n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Spacing, base 4"}),n.jsx("p",{style:{margin:"0 0 16px",color:t,maxWidth:560},children:"No 0. Keep 1 and 2, then steps of 4."}),c.map(e=>n.jsx(m,{n:e},e))]}),n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Radius"}),n.jsx("p",{style:{margin:"0 0 16px",color:t,maxWidth:560},children:"Square is 0. Then 4, 8, 12, 16, 24 and a pill."}),n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[h.map(e=>n.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[n.jsx("div",{style:{width:64,height:40,borderRadius:e,background:"#1074cc"}}),n.jsx("div",{style:{marginTop:8},children:e})]},e)),n.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[n.jsx("div",{style:{width:64,height:40,borderRadius:999,background:"#1074cc"}}),n.jsx("div",{style:{marginTop:8},children:"pill"})]})]})]}),n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Colour, default theme"}),n.jsx("p",{style:{margin:"0 0 16px",color:t,maxWidth:560},children:"Figma has eight themes, and each one has a light and a dark semantic set. This is the default theme. Web components still paint the light set only."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 1fr 1fr",gap:8,alignItems:"center"},children:[n.jsx("div",{}),n.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Light"}),n.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Dark"}),p.map(([e,l,o])=>n.jsxs("div",{style:{display:"contents"},children:[n.jsx("div",{style:{fontSize:13},children:e}),n.jsx("div",{style:{height:36,borderRadius:8,background:l,border:"1px solid rgba(0,0,0,0.08)"}}),n.jsx("div",{style:{height:36,borderRadius:8,background:o,border:"1px solid rgba(255,255,255,0.12)"}})]},e))]})]})]})};var s,a,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Scale",
  render: () => <div style={{
    fontFamily: font,
    color: ink,
    maxWidth: 720,
    display: "grid",
    gap: 36
  }}>
      <section>
        <h2 style={{
        fontSize: 22,
        margin: "0 0 8px"
      }}>Spacing, base 4</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 560
      }}>
          No 0. Keep 1 and 2, then steps of 4.
        </p>
        {scale.map(n => <Bar key={n} n={n} />)}
      </section>

      <section>
        <h2 style={{
        fontSize: 22,
        margin: "0 0 8px"
      }}>Radius</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 560
      }}>
          Square is 0. Then 4, 8, 12, 16, 24 and a pill.
        </p>
        <div style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-end"
      }}>
          {radius.map(n => <div key={n} style={{
          textAlign: "center",
          fontSize: 13
        }}>
              <div style={{
            width: 64,
            height: 40,
            borderRadius: n,
            background: "#1074cc"
          }} />
              <div style={{
            marginTop: 8
          }}>{n}</div>
            </div>)}
          <div style={{
          textAlign: "center",
          fontSize: 13
        }}>
            <div style={{
            width: 64,
            height: 40,
            borderRadius: 999,
            background: "#1074cc"
          }} />
            <div style={{
            marginTop: 8
          }}>pill</div>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{
        fontSize: 22,
        margin: "0 0 8px"
      }}>Colour, default theme</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 560
      }}>
          Figma has eight themes, and each one has a light and a dark semantic set. This is the default theme. Web components still paint the light set only.
        </p>
        <div style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr 1fr",
        gap: 8,
        alignItems: "center"
      }}>
          <div />
          <div style={{
          fontSize: 13,
          fontWeight: 600
        }}>Light</div>
          <div style={{
          fontSize: 13,
          fontWeight: 600
        }}>Dark</div>
          {swatches.map(([name, light, dark]) => <div key={name} style={{
          display: "contents"
        }}>
              <div style={{
            fontSize: 13
          }}>{name}</div>
              <div style={{
            height: 36,
            borderRadius: 8,
            background: light,
            border: "1px solid rgba(0,0,0,0.08)"
          }} />
              <div style={{
            height: 36,
            borderRadius: 8,
            background: dark,
            border: "1px solid rgba(255,255,255,0.12)"
          }} />
            </div>)}
        </div>
      </section>
    </div>
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const u=["Scale"];export{i as Scale,u as __namedExportsOrder,f as default};
