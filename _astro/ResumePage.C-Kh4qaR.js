import{t as e}from"./react.OrosJ8bI.js";import{_ as t,g as n,h as r,n as i,t as a,y as o}from"./TitleSection.DE1y3FvA.js";import{t as s}from"./FormatHtml.DsGdfQlh.js";e();var c=t.div`
  ${n`flex flex-col sm:flex-row w-full p-4 relative border-l border-indigo-200`};

  &:last-child {
    ${n`pb-0`};
  }
`,l=t.div`
  ${n`w-full sm:w-1/3`};
`,u=t.div`
  ${n`w-full sm:w-2/3 mt-4 sm:mt-0`};
`,d=t.div`
  ${n`font-semibold mt-3`};
`,f=t.div`
  ${n`text-xs`};
`,p=t.div`
  ${n`text-xs border  border-teal-400 rounded-full px-2`};
  width: fit-content;
`,m=t.span`
  ${n`w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute`};
  left: -6px;
  top: 20px;
`,h=o(),g=({title:e,subtitle:t,content:n,startDate:r,endDate:i})=>(0,h.jsxs)(c,{children:[(0,h.jsx)(m,{}),(0,h.jsxs)(l,{children:[(0,h.jsxs)(p,{children:[r,` - `,i]}),(0,h.jsx)(d,{children:e}),(0,h.jsx)(f,{children:t})]}),(0,h.jsx)(u,{children:n})]}),_=({experiences:e,sectionTitle:t})=>(0,h.jsxs)(r,{section:!0,children:[(0,h.jsx)(a,{title:t.title,subtitle:t.subtitle}),e.map(e=>{let{id:t,html:n,frontmatter:{company:r,position:i,startDate:a,endDate:o}}=e.node;return(0,h.jsx)(g,{title:r,subtitle:i,content:(0,h.jsx)(s,{content:n}),startDate:a,endDate:o},t)})]}),v=({education:e,sectionTitle:t})=>(0,h.jsxs)(r,{section:!0,children:[(0,h.jsx)(a,{title:t.title,subtitle:t.subtitle}),e.map(e=>{let{id:t,html:n,frontmatter:{university:r,degree:i,startDate:a,endDate:o}}=e.node;return(0,h.jsx)(g,{title:r,subtitle:i,content:(0,h.jsx)(s,{content:n}),startDate:a,endDate:o},t)})]}),y=({currentPath:e,education:t,educationSection:n,experiences:r,experienceSection:a})=>(0,h.jsxs)(i,{currentPath:e,children:[(0,h.jsx)(_,{experiences:r,sectionTitle:a}),(0,h.jsx)(`hr`,{}),(0,h.jsx)(v,{education:t,sectionTitle:n}),(0,h.jsx)(`hr`,{})]});export{y as default};