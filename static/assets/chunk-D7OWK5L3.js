import{Ma as w,a as b,da as x}from"./chunk-Y2SMFNMK.js";import{s as m}from"./chunk-AC3NSOOG.js";function k(l){let e=l.replace(/\n{2,}/g,`
`);return b(e)}function v(l){let e=k(l),{children:n}=m(e),r=[[]],i=0;function a(t,c="normal"){t.type==="text"?t.value.split(`
`).forEach((s,o)=>{o!==0&&(i++,r.push([])),s.split(" ").forEach(u=>{u&&r[i].push({content:u,type:c})})}):(t.type==="strong"||t.type==="emphasis")&&t.children.forEach(f=>{a(f,t.type)})}return n.forEach(t=>{t.type==="paragraph"&&t.children.forEach(c=>{a(c)})}),r}function $(l){let{children:e}=m(l);function n(r){return r.type==="text"?r.value.replace(/\n/g,"<br/>"):r.type==="strong"?`<strong>${r.children.map(n).join("")}</strong>`:r.type==="emphasis"?`<em>${r.children.map(n).join("")}</em>`:r.type==="paragraph"?`<p>${r.children.map(n).join("")}</p>`:`Unsupported markdown: ${r.type}`}return e.map(n).join("")}function j(l,e){e&&l.attr("style",e)}function C(l,e,n,r,i=!1){let a=l.append("foreignObject"),t=a.append("xhtml:div"),c=e.label,f=e.isNode?"nodeLabel":"edgeLabel";t.html(`
    <span class="${f} ${r}" `+(e.labelStyle?'style="'+e.labelStyle+'"':"")+">"+c+"</span>"),j(t,e.labelStyle),t.style("display","table-cell"),t.style("white-space","nowrap"),t.style("max-width",n+"px"),t.attr("xmlns","http://www.w3.org/1999/xhtml"),i&&t.attr("class","labelBkg");let s=t.node().getBoundingClientRect();return s.width===n&&(t.style("display","table"),t.style("white-space","break-spaces"),t.style("width",n+"px"),s=t.node().getBoundingClientRect()),a.style("width",s.width),a.style("height",s.height),a.node()}function T(l,e,n){return l.append("tspan").attr("class","text-outer-tspan").attr("x",0).attr("y",e*n-.1+"em").attr("dy",n+"em")}function S(l,e,n){let r=l.append("text"),i=T(r,1,e);E(i,[{content:n,type:"normal"}]);let a=i.node().getComputedTextLength();return r.remove(),a}function H(l,e,n,r=!1){let a=e.append("g"),t=a.insert("rect").attr("class","background"),c=a.append("text").attr("y","-10.1"),f=0;if(n.forEach(s=>{let o=s.map(p=>p.content).join(" "),u="",h=[],d=0;if(S(a,1.1,o)<=l)h.push(o);else{for(let p=0;p<=o.length;p++)if(u=o.slice(d,p),x.info(u,d,p),S(a,1.1,u)>l){let g=o.slice(d,p).lastIndexOf(" ");g>-1&&(p=d+g+1),h.push(o.slice(d,p).trim()),d=p,u=null}u!=null&&h.push(u)}let L=h.map(p=>({content:p,type:s.type}));for(let p of L){let y=T(c,f,1.1);E(y,[p]),f++}}),r){let s=c.node().getBBox(),o=2;return t.attr("x",-o).attr("y",-o).attr("width",s.width+2*o).attr("height",s.height+2*o),a.node()}else return c.node()}function E(l,e){l.text(""),e.forEach((n,r)=>{let i=l.append("tspan").attr("font-style",n.type==="em"?"italic":"normal").attr("class","text-inner-tspan").attr("font-weight",n.type==="strong"?"bold":"normal");r===0?i.text(n.content):i.text(" "+n.content)})}var N=(l,e="",{style:n="",isTitle:r=!1,classes:i="",useHtmlLabels:a=!0,isNode:t=!0,width:c,addSvgBackground:f=!1}={})=>{if(x.info("createText",e,n,r,i,a,t,f),a){let s=$(e),o={isNode:t,label:w(s).replace(/fa[blrs]?:fa-[\w-]+/g,h=>`<i class='${h.replace(":"," ")}'></i>`),labelStyle:n.replace("fill:","color:")};return C(l,o,c,i,f)}else{let s=v(e);return H(c,l,s,f)}};export{N as a};