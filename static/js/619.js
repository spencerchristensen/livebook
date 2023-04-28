"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[619],{10619:(e,t,l)=>{l.r(t),l.d(t,{diagram:()=>b});var n=l(25001),a=l(74309),o=l(45625),i=l(53110),s=l(12566),r=l(81188);l(27856),l(27484),l(29451),l(69368),l(31898),l(17967);const d=e=>i.e.sanitizeText(e,(0,i.g)());let c={dividerMargin:10,padding:5,textHeight:10,curve:void 0};function g(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const p={setConf:function(e){c={...c,...e}},draw:function(e,t,l,n){i.l.info("Drawing class - ",t);const p=(0,i.g)().flowchart??(0,i.g)().class,b=(0,i.g)().securityLevel;i.l.info("config:",p);const u=(null==p?void 0:p.nodeSpacing)??50,y=(null==p?void 0:p.rankSpacing)??50,f=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:u,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=n.db.getClasses(),v=n.db.getRelations(),w=n.db.getNotes();let x;i.l.info(v),function(e,t,l,n){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.forEach((function(l){var a,o;const s=e[l];let r="";s.cssClasses.length>0&&(r=r+" "+s.cssClasses.join(" "));const c=s.label??s.id,g={labelStyle:"",shape:"class_box",labelText:d(c),classData:s,rx:0,ry:0,class:r,style:"",id:s.id,domId:s.domId,tooltip:n.db.getTooltip(s.id)||"",haveCallback:s.haveCallback,link:s.link,width:"group"===s.type?500:void 0,type:s.type,padding:(null==(a=(0,i.g)().flowchart)?void 0:a.padding)??(null==(o=(0,i.g)().class)?void 0:o.padding)};t.setNode(s.id,g),i.l.info("setNode",g)}))}(h,f,0,n),function(e,t){const l=(0,i.g)().flowchart;let n=0;e.forEach((function(e){var o;n++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+n,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:g(e.relation.type1),arrowTypeEnd:g(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,r.o)(null==l?void 0:l.curve,a.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,r.n)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(o=(0,i.g)().flowchart)?void 0:o.htmlLabels)??(0,i.g)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,n)}))}(v,f),function(e,t,l,n){i.l.info(e),e.forEach((function(e,o){var s,g;const p=e,b=p.text,u={labelStyle:"",shape:"note",labelText:d(b),noteData:p,rx:0,ry:0,class:"",style:"",id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(s=(0,i.g)().flowchart)?void 0:s.padding)??(null==(g=(0,i.g)().class)?void 0:g.padding)};if(t.setNode(p.id,u),i.l.info("setNode",u),!p.class||!(p.class in n))return;const y=l+o,f={id:`edgeNote${y}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,r.o)(c.curve,a.c_6)};t.setEdge(p.id,p.class,f,y)}))}(w,f,v.length+1,h),"sandbox"===b&&(x=(0,a.Ys)("#i"+t));const k="sandbox"===b?(0,a.Ys)(x.nodes()[0].contentDocument.body):(0,a.Ys)("body"),m=k.select(`[id="${t}"]`),T=k.select("#"+t+" g");if((0,s.r)(T,f,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),r.u.insertTitle(m,"classTitleText",(null==p?void 0:p.titleTopMargin)??5,n.db.getDiagramTitle()),(0,r.s)(f,m,null==p?void 0:p.diagramPadding,null==p?void 0:p.useMaxWidth),!(null==p?void 0:p.htmlLabels)){const e="sandbox"===b?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},b={parser:n.p,db:n.d,renderer:p,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);