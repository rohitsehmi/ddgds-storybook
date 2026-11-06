import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-G8LIXM5I.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const f=[1,2,4,8,12,16,20,24,32,40,48,64],u=[4,8,12,16,24],m="#111111",i="rgba(0,0,0,0.6)",v="var(--ddgds-font)",b=[["Display","display","The bigger picture"],["Headline large","headline-lg","Fusion test sets a new confinement mark"],["Headline medium","headline-md","A calmer homepage for people who care about privacy"],["Headline small","headline-sm","Why tracker blocking still matters on the open web"],["Body large","body-lg","A research team reported a longer stable plasma confinement window. Coverage agrees the result is notable."],["Body","body","Article text uses Newsreader at body size. Card summaries stay in the UI face until a reading test says otherwise."],["Label","label","Science"],["Caption","caption","Reuters · 2h ago"]],S=[["Canvas","#fafafa","#1c1c1c"],["Surface","#f2f2f2","#282828"],["Text","rgba(0,0,0,0.96)","#ffffff"],["Text secondary","rgba(0,0,0,0.60)","rgba(255,255,255,0.70)"],["Control fill","rgba(0,0,0,0.06)","rgba(255,255,255,0.04)"]];function j({label:n,token:t,sample:s}){const o=d.useRef(null),[g,y]=d.useState("");return d.useEffect(()=>{const l=o.current;if(!l)return;const a=getComputedStyle(l),x=a.fontFamily.replaceAll('"',"");y(`${x} · ${a.fontSize} / ${a.lineHeight} · weight ${a.fontWeight}`)},[]),e.jsxs("div",{children:[e.jsx("div",{ref:o,style:{fontFamily:`var(--ddgds-type-${t}-family), var(--ddgds-font)`,fontWeight:`var(--ddgds-type-${t}-weight)`,fontSize:`var(--ddgds-type-${t}-size)`,lineHeight:`var(--ddgds-type-${t}-line)`,margin:0},children:s}),e.jsxs("div",{style:{marginTop:4,fontSize:12,color:i},children:[n," · ",t," · ",g]})]})}function w({n}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[e.jsx("div",{style:{width:Math.max(n*4,4),height:16,borderRadius:2,background:"#1074cc"}}),e.jsx("span",{style:{fontSize:13,color:m},children:n})]})}const R={title:"DDGDS/Foundations",parameters:{layout:"padded",docs:{description:{component:"Spacing, colour, type and radius as they exist in Figma. Spacing is base 4, with 1 and 2 kept. There is no 0."}}}},r={name:"Scale",render:()=>e.jsxs("div",{style:{fontFamily:v,color:m,maxWidth:720,display:"grid",gap:36},children:[e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Spacing, base 4"}),e.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"No 0. Keep 1 and 2, then steps of 4."}),f.map(n=>e.jsx(w,{n},n))]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Radius"}),e.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"A tidy set is 4, 8, 12, 16, 24 and a pill. Figma still has 0, 1, 3, 5, 6, 7, 9, 10, 14, 20, 22, 27, 32, 40 and 63."}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[u.map(n=>e.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[e.jsx("div",{style:{width:64,height:40,borderRadius:n,background:"#1074cc"}}),e.jsx("div",{style:{marginTop:8},children:n})]},n)),e.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[e.jsx("div",{style:{width:64,height:40,borderRadius:999,background:"#1074cc"}}),e.jsx("div",{style:{marginTop:8},children:"pill"})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Type"}),e.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"Editorial text is Newsreader. Product UI on the web is Inter, the same family as the Figma variables News/UI/Web and Brand/Proxy/Family. iOS chrome stays SF Pro and Android chrome stays Roboto. Proxima Nova is the preferred product face in the news spec, and it is not licensed here, so it is not the variable."}),e.jsx("div",{style:{display:"grid",gap:20},children:b.map(([n,t,s])=>e.jsx(j,{label:n,token:t,sample:s},t))}),e.jsx("p",{style:{margin:"20px 0 0",color:i,maxWidth:560,fontSize:13},children:"Web buttons stay 15px on 20px at weight 600. That is the product control size, not a news headline."})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Colour, default theme"}),e.jsx("p",{style:{margin:"0 0 16px",color:i,maxWidth:560},children:"Figma has eight themes, and each one has a light and a dark semantic set. This is the default theme. Web components still paint the light set only."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 1fr 1fr",gap:8,alignItems:"center"},children:[e.jsx("div",{}),e.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Light"}),e.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Dark"}),S.map(([n,t,s])=>e.jsxs("div",{style:{display:"contents"},children:[e.jsx("div",{style:{fontSize:13},children:n}),e.jsx("div",{style:{height:36,borderRadius:8,background:t,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{height:36,borderRadius:8,background:s,border:"1px solid rgba(255,255,255,0.12)"}})]},n))]})]})]})};var c,h,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          Editorial text is Newsreader. Product UI on the web is Inter, the same family as the Figma variables News/UI/Web and Brand/Proxy/Family. iOS chrome stays SF Pro and Android chrome stays Roboto. Proxima Nova is the preferred product face in the news spec, and it is not licensed here, so it is not the variable.
        </p>
        <div style={{
        display: "grid",
        gap: 20
      }}>
          {typeScale.map(([label, token, sample]) => <TypeRow key={token} label={label} token={token} sample={sample} />)}
        </div>
        <p style={{
        margin: "20px 0 0",
        color: muted,
        maxWidth: 560,
        fontSize: 13
      }}>
          Web buttons stay 15px on 20px at weight 600. That is the product control size, not a news headline.
        </p>
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
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const F=["Scale"];export{r as Scale,F as __namedExportsOrder,R as default};
