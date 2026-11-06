import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const h=[1,2,4,8,12,16,20,24,32,40,48,64],p=[6,9,10,11,14,26],g=[4,8,12,16,24],l="#111111",i="rgba(0,0,0,0.6)",m="ui-sans-serif, system-ui, sans-serif",x=[["Canvas","#fafafa","#1c1c1c"],["Surface","#f2f2f2","#282828"],["Text","rgba(0,0,0,0.96)","#ffffff"],["Text secondary","rgba(0,0,0,0.60)","rgba(255,255,255,0.70)"],["Control fill","rgba(0,0,0,0.06)","rgba(255,255,255,0.04)"]];function a({n:e,faded:s}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[n.jsx("div",{style:{width:Math.max(e*4,4),height:16,borderRadius:2,background:s?"#c8c8c8":"#1074cc"}}),n.jsx("span",{style:{fontSize:13,color:l},children:e})]})}const u={title:"DDGDS/Foundations",parameters:{layout:"padded",docs:{description:{component:"The spacing scale to move onto, and the colour, type and radius that already exist in Figma. Web components have not moved onto the scale yet."}}}},t={name:"Scale",render:()=>n.jsxs("div",{style:{fontFamily:m,color:l,maxWidth:720,display:"grid",gap:36},children:[n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Spacing, base 4"}),n.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"No 0. Keep 1 and 2, then steps of 4. The grey row is still in the components."}),h.map(e=>n.jsx(a,{n:e},e)),n.jsx("p",{style:{margin:"16px 0 8px",fontSize:13,fontWeight:600},children:"Still in components"}),p.map(e=>n.jsx(a,{n:e,faded:!0},e))]}),n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Radius"}),n.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"A tidy set is 4, 8, 12, 16, 24 and a pill. Figma still has 0, 1, 3, 5, 6, 7, 9, 10, 14, 20, 22, 27, 32, 40 and 63."}),n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[g.map(e=>n.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[n.jsx("div",{style:{width:64,height:40,borderRadius:e,background:"#1074cc"}}),n.jsx("div",{style:{marginTop:8},children:e})]},e)),n.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[n.jsx("div",{style:{width:64,height:40,borderRadius:999,background:"#1074cc"}}),n.jsx("div",{style:{marginTop:8},children:"pill"})]})]})]}),n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Type"}),n.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"Figma keeps a role for each platform. Web buttons use 15px on 20px at weight 600, which matches the brand button size and not the iOS regular size."}),n.jsxs("div",{style:{display:"grid",gap:8,fontSize:15},children:[n.jsx("div",{children:"iOS regular, SF Pro, 17 / 22"}),n.jsx("div",{children:"iOS callout 16, footnote 13, caption 12, title 28"}),n.jsx("div",{children:"Android body 16 and 14, caption 12, Roboto"}),n.jsx("div",{children:"Brand body 14 / 20, callout 15, button 15, caption 12, Inter"})]})]}),n.jsxs("section",{children:[n.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Colour, default theme"}),n.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"Figma has eight themes, and each one has a light and a dark semantic set. This is the default theme. Web components still paint the light set only."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 1fr 1fr",gap:8,alignItems:"center"},children:[n.jsx("div",{}),n.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Light"}),n.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Dark"}),x.map(([e,s,c])=>n.jsxs("div",{style:{display:"contents"},children:[n.jsx("div",{style:{fontSize:13},children:e}),n.jsx("div",{style:{height:36,borderRadius:8,background:s,border:"1px solid rgba(0,0,0,0.08)"}}),n.jsx("div",{style:{height:36,borderRadius:8,background:c,border:"1px solid rgba(255,255,255,0.12)"}})]},e))]})]})]})};var d,o,r;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          No 0. Keep 1 and 2, then steps of 4. The grey row is still in the components.
        </p>
        {scale.map(n => <Bar key={n} n={n} />)}
        <p style={{
        margin: "16px 0 8px",
        fontSize: 13,
        fontWeight: 600
      }}>Still in components</p>
        {stillOff.map(n => <Bar key={n} n={n} faded />)}
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
          A tidy set is 4, 8, 12, 16, 24 and a pill. Figma still has 0, 1, 3, 5, 6, 7, 9, 10, 14, 20, 22, 27, 32, 40 and 63.
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
      }}>Type</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 560
      }}>
          Figma keeps a role for each platform. Web buttons use 15px on 20px at weight 600, which matches the brand button size and not the iOS regular size.
        </p>
        <div style={{
        display: "grid",
        gap: 8,
        fontSize: 15
      }}>
          <div>iOS regular, SF Pro, 17 / 22</div>
          <div>iOS callout 16, footnote 13, caption 12, title 28</div>
          <div>Android body 16 and 14, caption 12, Roboto</div>
          <div>Brand body 14 / 20, callout 15, button 15, caption 12, Inter</div>
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const v=["Scale"];export{t as Scale,v as __namedExportsOrder,u as default};
