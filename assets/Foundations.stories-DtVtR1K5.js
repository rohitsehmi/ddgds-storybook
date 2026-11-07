import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-G8LIXM5I.js";import{I as W,a as G,b as F}from"./icons-DhzaqDc2.js";import{a as D,j as R,q as A,o as C,p as B,r as $,s as L,h as H,G as E,d as O,b as U,e as P,g as M,n as N,l as q,c as K,f as _,m as X,k as Z,i as J}from"./glyphs-DATQVZBr.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const Q="/ddgds-storybook/assets/icon-sheet-DXZr1u3H.png",V=[1,2,4,8,12,16,20,24,32,40,48,64],Y=[0,4,8,12,16,24],l="#111111",s="rgba(0,0,0,0.6)",u="var(--ddgds-font)",ee=[["Display","display","The bigger picture"],["Headline large","headline-lg","Fusion test sets a new confinement mark"],["Headline medium","headline-md","A calmer homepage for people who care about privacy"],["Headline small","headline-sm","Why tracker blocking still matters on the open web"],["Body large","body-lg","A research team reported a longer stable plasma confinement window. Coverage agrees the result is notable."],["Body","body","Article text uses Newsreader at body size. Card summaries stay in the UI face until a reading test says otherwise."],["Label","label","Science"],["Caption","caption","Reuters · 2h ago"]],ne=[["Canvas","#fafafa","#1c1c1c"],["Surface","#f2f2f2","#282828"],["Text","rgba(0,0,0,0.96)","#ffffff"],["Text secondary","rgba(0,0,0,0.60)","rgba(255,255,255,0.70)"],["Control fill","rgba(0,0,0,0.06)","rgba(255,255,255,0.04)"]];function ie({label:n,token:i,sample:t}){const a=o.useRef(null),[r,h]=o.useState("");return o.useEffect(()=>{const c=a.current;if(!c)return;const d=getComputedStyle(c),p=d.fontFamily.replaceAll('"',"");h(`${p} · ${d.fontSize} / ${d.lineHeight} · weight ${d.fontWeight}`)},[]),e.jsxs("div",{children:[e.jsx("div",{ref:a,style:{fontFamily:`var(--ddgds-type-${i}-family), var(--ddgds-font)`,fontWeight:`var(--ddgds-type-${i}-weight)`,fontSize:`var(--ddgds-type-${i}-size)`,lineHeight:`var(--ddgds-type-${i}-line)`,margin:0},children:t}),e.jsxs("div",{style:{marginTop:4,fontSize:12,color:s},children:[n," · ",i," · ",r]})]})}function se({n}){return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[e.jsx("div",{style:{width:Math.max(n*4,4),height:16,borderRadius:2,background:"#1074cc"}}),e.jsx("span",{style:{fontSize:13,color:l},children:n})]})}const ge={title:"DDGDS/Foundations",parameters:{layout:"padded",docs:{description:{component:"Spacing, radius, colour, type, and the web glyphs. Type and Icons are their own stories. The full glyph set stays on Figma Icons & shells."}}}},m={name:"Scale",render:()=>e.jsxs("div",{style:{fontFamily:u,color:l,maxWidth:720,display:"grid",gap:36},children:[e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Spacing, base 4"}),e.jsx("p",{style:{margin:"0 0 16px",color:s,maxWidth:560},children:"No 0. Keep 1 and 2, then steps of 4."}),V.map(n=>e.jsx(se,{n},n))]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Radius"}),e.jsx("p",{style:{margin:"0 0 16px",color:s,maxWidth:560},children:"Square is 0. Then 4, 8, 12, 16, 24 and a pill."}),e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[Y.map(n=>e.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[e.jsx("div",{style:{width:64,height:40,borderRadius:n,background:"#1074cc"}}),e.jsx("div",{style:{marginTop:8},children:n})]},n)),e.jsxs("div",{style:{textAlign:"center",fontSize:13},children:[e.jsx("div",{style:{width:64,height:40,borderRadius:999,background:"#1074cc"}}),e.jsx("div",{style:{marginTop:8},children:"pill"})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Type and icons"}),e.jsx("p",{style:{margin:0,color:s,maxWidth:560},children:"Type and Icons are separate stories in this group, so they show in the sidebar."})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Colour, default theme"}),e.jsx("p",{style:{margin:"0 0 16px",color:s,maxWidth:560},children:"Figma has eight themes, and each one has a light and a dark semantic set. This is the default theme. Web components still paint the light set only."}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 1fr 1fr",gap:8,alignItems:"center"},children:[e.jsx("div",{}),e.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Light"}),e.jsx("div",{style:{fontSize:13,fontWeight:600},children:"Dark"}),ne.map(([n,i,t])=>e.jsxs("div",{style:{display:"contents"},children:[e.jsx("div",{style:{fontSize:13},children:n}),e.jsx("div",{style:{height:36,borderRadius:8,background:i,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{height:36,borderRadius:8,background:t,border:"1px solid rgba(255,255,255,0.12)"}})]},n))]})]})]})},te=[["Button","var(--ddgds-type-size-button)","var(--ddgds-type-line-button)","var(--ddgds-type-weight-regular)","Save"],["UI","var(--ddgds-type-size)","var(--ddgds-type-line)","var(--ddgds-type-weight)","Search the web"],["List title, iOS","var(--ddgds-type-list-title)","var(--ddgds-type-list-title-line)","var(--ddgds-type-weight-regular)","DuckDuckGo"],["List title, Android","var(--ddgds-type-list-title-android)","var(--ddgds-type-list-title-line-android)","var(--ddgds-type-weight-regular)","DuckDuckGo"],["List details, iOS","var(--ddgds-type-list-details)","var(--ddgds-type-list-details-line)","var(--ddgds-type-weight-regular)","duckduckgo.com"],["List details, Android","var(--ddgds-type-list-details-android)","var(--ddgds-type-list-details-line)","var(--ddgds-type-weight-regular)","duckduckgo.com"]];function ae({label:n,size:i,line:t,weight:a,sample:r}){const h=o.useRef(null),[c,d]=o.useState("");return o.useEffect(()=>{const p=h.current;if(!p)return;const g=getComputedStyle(p),I=g.fontFamily.replaceAll('"',"");d(`${I} · ${g.fontSize} / ${g.lineHeight} · weight ${g.fontWeight}`)},[]),e.jsxs("div",{children:[e.jsx("div",{ref:h,style:{fontFamily:u,fontWeight:a,fontSize:i,lineHeight:t,margin:0},children:r}),e.jsxs("div",{style:{marginTop:4,fontSize:12,color:s},children:[n," · ",c]})]})}const y={render:()=>e.jsxs("div",{style:{display:"grid",gap:40,color:l,fontFamily:u,padding:8,maxWidth:720},children:[e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Editorial"}),e.jsx("p",{style:{margin:"0 0 16px",color:s,maxWidth:560},children:"Figma brand type is Duck Sans. The web build does not ship it. Editorial text here is Newsreader. Product UI is Inter. iOS chrome stays SF Pro and Android chrome stays Roboto."}),e.jsx("div",{style:{display:"grid",gap:20},children:ee.map(([n,i,t])=>e.jsx(ie,{label:n,token:i,sample:t},i))})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"UI"}),e.jsx("p",{style:{margin:"0 0 16px",color:s,maxWidth:560},children:"Button labels are 13 Regular. List titles are 17 on iOS and 16 on Android. Details are 13 on iOS and 14 on Android. The web face stays Inter."}),e.jsx("div",{style:{display:"grid",gap:20},children:te.map(([n,i,t,a,r])=>e.jsx(ae,{label:n,size:i,line:t,weight:a,sample:r},n))})]})]})},de=[{name:"Search",node:e.jsx(D,{})},{name:"Spark",node:e.jsx(R,{})},{name:"Chevron",node:e.jsx(A,{})},{name:"Close",node:e.jsx(C,{})},{name:"Audio",node:e.jsx(B,{})},{name:"Trash",node:e.jsx($,{})},{name:"Flame",node:e.jsx(L,{})},{name:"Plus",node:e.jsx(H,{})},{name:"Lock",node:e.jsx(E,{})},{name:"Menu",node:e.jsx(O,{})},{name:"Back",node:e.jsx(U,{})},{name:"Forward",node:e.jsx(P,{})},{name:"Tabs",node:e.jsx(M,{})},{name:"Shield",node:e.jsx(N,{})},{name:"Star",node:e.jsx(q,{})},{name:"Home",node:e.jsx(K,{})},{name:"Share",node:e.jsx(_,{})},{name:"Book",node:e.jsx(X,{})},{name:"Clock",node:e.jsx(Z,{})},{name:"Globe",node:e.jsx(J,{})},{name:"Search slot",node:e.jsx(W,{})},{name:"Chevron slot",node:e.jsx(G,{})},{name:"Shield slot",node:e.jsx(F,{})}],x={render:()=>e.jsxs("div",{style:{display:"grid",gap:32,color:l,fontFamily:u,padding:8},children:[e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Figma glyph set"}),e.jsx("p",{style:{margin:"0 0 16px",color:s,maxWidth:640},children:"180 glyphs live on Icons & shells, named DDGDS Icon glyph, at 12, 16 and 24. This is that sheet. Invisible 16 has no visible layers, so it does not draw."}),e.jsx("img",{src:Q,alt:"The Figma Icons sheet: DDGDS Icon glyphs at 12, 16 and 24",style:{width:"100%",maxWidth:1024,height:"auto",background:"#fff",borderRadius:12}})]}),e.jsxs("section",{children:[e.jsx("h2",{style:{fontSize:22,margin:"0 0 8px"},children:"Glyphs the web controls compose"}),e.jsx("p",{style:{margin:"0 0 16px",color:s,maxWidth:640},children:"These are the stand-ins inside the web components. They are not the Figma masters."}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:de.map(n=>e.jsxs("figure",{style:{margin:0,width:88,textAlign:"center",color:l},children:[e.jsx("div",{style:{display:"grid",placeItems:"center",height:32},children:n.node}),e.jsx("figcaption",{style:{marginTop:6,fontSize:12,color:s},children:n.name})]},n.name))})]})]})};var f,v,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      }}>Type and icons</h2>
        <p style={{
        margin: 0,
        color: muted,
        maxWidth: 560
      }}>
          Type and Icons are separate stories in this group, so they show in the sidebar.
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
}`,...(b=(v=m.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,j,w;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 40,
    color: ink,
    fontFamily: font,
    padding: 8,
    maxWidth: 720
  }}>
      <section>
        <h2 style={{
        fontSize: 22,
        margin: "0 0 8px"
      }}>Editorial</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 560
      }}>
          Figma brand type is Duck Sans. The web build does not ship it. Editorial text here is Newsreader. Product UI is Inter. iOS chrome stays SF Pro and Android chrome stays Roboto.
        </p>
        <div style={{
        display: "grid",
        gap: 20
      }}>
          {typeScale.map(([label, token, sample]) => <TypeRow key={token} label={label} token={token} sample={sample} />)}
        </div>
      </section>
      <section>
        <h2 style={{
        fontSize: 22,
        margin: "0 0 8px"
      }}>UI</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 560
      }}>
          Button labels are 13 Regular. List titles are 17 on iOS and 16 on Android. Details are 13 on iOS and 14 on Android. The web face stays Inter.
        </p>
        <div style={{
        display: "grid",
        gap: 20
      }}>
          {uiType.map(([label, size, line, weight, sample]) => <UiRow key={label} label={label} size={size} line={line} weight={weight} sample={sample} />)}
        </div>
      </section>
    </div>
}`,...(w=(j=y.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,T,z;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 32,
    color: ink,
    fontFamily: font,
    padding: 8
  }}>
      <section>
        <h2 style={{
        fontSize: 22,
        margin: "0 0 8px"
      }}>Figma glyph set</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 640
      }}>
          180 glyphs live on Icons & shells, named DDGDS Icon glyph, at 12, 16 and 24. This is that sheet. Invisible 16 has no visible layers, so it does not draw.
        </p>
        <img src={iconSheet} alt="The Figma Icons sheet: DDGDS Icon glyphs at 12, 16 and 24" style={{
        width: "100%",
        maxWidth: 1024,
        height: "auto",
        background: "#fff",
        borderRadius: 12
      }} />
      </section>
      <section>
        <h2 style={{
        fontSize: 22,
        margin: "0 0 8px"
      }}>Glyphs the web controls compose</h2>
        <p style={{
        margin: "0 0 16px",
        color: muted,
        maxWidth: 640
      }}>
          These are the stand-ins inside the web components. They are not the Figma masters.
        </p>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16
      }}>
          {webGlyphs.map(glyph => <figure key={glyph.name} style={{
          margin: 0,
          width: 88,
          textAlign: "center",
          color: ink
        }}>
              <div style={{
            display: "grid",
            placeItems: "center",
            height: 32
          }}>{glyph.node}</div>
              <figcaption style={{
            marginTop: 6,
            fontSize: 12,
            color: muted
          }}>{glyph.name}</figcaption>
            </figure>)}
        </div>
      </section>
    </div>
}`,...(z=(T=x.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const me=["Scale","Type","Icons"];export{x as Icons,m as Scale,y as Type,me as __namedExportsOrder,ge as default};
