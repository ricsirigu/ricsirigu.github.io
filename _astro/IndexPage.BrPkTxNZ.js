import{t as e}from"./react.OrosJ8bI.js";import{_ as t,g as n,h as r,n as i,t as a,v as o,y as s}from"./TitleSection.DE1y3FvA.js";import{t as c}from"./InfoBlock.Br1tSqQc.js";e();var l=o.create(t.button`
  outline: none !important;
  ${n`py-2 px-8 rounded-full border border-teal-300 text-indigo-900`};

  ${({$primary:e})=>e?n`bg-teal-300`:n`text-indigo-600`};

  ${({$block:e})=>e&&n`w-full`};
`),u=s(),d=({primary:e,block:t,children:n,name:r})=>(0,u.jsx)(l,{"aria-label":r,$primary:e,$block:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:n}),f=t.section`
  ${n`bg-gray-100 border-b border-indigo-100 `};
`,p=t.p`
  ${n`mb-8`};
`,m=({title:e,subtitle:t,content:n,linkTo:i,linkText:o})=>(0,u.jsx)(f,{children:(0,u.jsxs)(r,{section:!0,children:[(0,u.jsx)(a,{title:e,subtitle:t}),(0,u.jsx)(p,{children:n}),(0,u.jsx)(`a`,{href:i,children:(0,u.jsx)(d,{primary:!0,name:`riccardo sirigu profile`,children:o})})]})}),h=({heroBanner:e})=>(0,u.jsx)(m,{title:e.title,subtitle:e.subtitle,content:e.content,linkTo:e.linkTo,linkText:e.linkText}),g=t.div`
  ${n`flex flex-wrap -mx-3`};
`,_=t.div`
  ${n`w-full sm:w-1/2`};
`,v=({sectionTitle:e,services:t})=>(0,u.jsxs)(r,{section:!0,children:[(0,u.jsx)(a,{title:e.title,subtitle:e.subtitle,center:!0}),(0,u.jsx)(g,{children:t.map(e=>{let{id:t,frontmatter:{title:n,icon:r,description:i}}=e.node;return(0,u.jsx)(_,{children:(0,u.jsx)(c,{icon:r,title:n,content:i})},t)})})]}),y=({currentPath:e,heroBanner:t,sectionTitle:n,services:r})=>(0,u.jsxs)(i,{currentPath:e,children:[(0,u.jsx)(h,{heroBanner:t}),(0,u.jsx)(v,{sectionTitle:n,services:r}),(0,u.jsx)(`hr`,{})]});export{y as default};