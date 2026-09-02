import{t as e}from"./react.OrosJ8bI.js";import{_ as t,g as n,h as r,n as i,t as a,v as o,y as s}from"./TitleSection.DE1y3FvA.js";e();var c=t.div`
  ${n`w-full flex flex-wrap`};
`,l=t.div`
  ${n`w-full sm:w-1/2 p-3`};
`,u=t.div`
  ${n`w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
`,d=t.div`
  ${n`p-4 text-indigo-900`};
`,f=t.figure`
  ${n`w-full`};
`,p=t.h3`
  ${n`font-semibold mb-4`};
`,m=t.p``,h=t.h3`
  ${n`text-xs text-indigo-500`};
`,g=t.div`
  ${n`p-4 pt-2 mt-auto`}
`,_=t.span`
  ${n`text-xs text-indigo-900 border border-teal-400 rounded-full px-2 py-1 mr-2`}
`,v=s(),y=({posts:e,sectionTitle:t})=>(0,v.jsxs)(r,{section:!0,children:[(0,v.jsx)(a,{title:t.title,subtitle:t.subtitle,center:!0}),(0,v.jsx)(c,{children:e.map(e=>{let{id:t,fields:{slug:n},frontmatter:{title:r,cover:i,description:a,date:s,tags:c}}=e.node;return(0,v.jsx)(l,{children:(0,v.jsx)(`a`,{href:n,children:(0,v.jsx)(o.div,{whileHover:{scale:1.05},whileTap:{scale:1},children:(0,v.jsxs)(u,{children:[(0,v.jsx)(f,{children:(0,v.jsxs)(`picture`,{children:[i.webpSrcSet&&(0,v.jsx)(`source`,{type:`image/webp`,srcSet:i.webpSrcSet,sizes:i.sizes}),(0,v.jsx)(`img`,{src:i.url,srcSet:i.srcSet,sizes:i.sizes,alt:r,width:i.width,height:i.height,loading:`lazy`,decoding:`async`})]})}),(0,v.jsxs)(d,{children:[(0,v.jsx)(h,{children:s}),(0,v.jsx)(p,{children:r}),(0,v.jsx)(m,{children:a})]}),(0,v.jsx)(g,{children:c.map(e=>(0,v.jsx)(_,{children:e},e))})]})})})},t)})})]}),b=({currentPath:e,posts:t,sectionTitle:n})=>(0,v.jsx)(i,{currentPath:e,children:(0,v.jsx)(y,{posts:t,sectionTitle:n})});export{b as default};