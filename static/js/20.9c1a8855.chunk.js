(this["webpackJsonpstarcoin-explorer"]=this["webpackJsonpstarcoin-explorer"]||[]).push([[20],{688:function(e,t,a){"use strict";var n=a(1),r=a(35),c=a(37),i=a(88),o=a(87),s=a(4),l=a(0),d=a.n(l),p=a(48),b=a.n(p),g=a(600),j=a(609),m=a(718),u=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,r=e.classes;return Object(n.jsx)(m.a,{className:b()(a,r.root),container:!0,spacing:0,justifyContent:"center",children:Object(n.jsx)(m.a,{className:r.gridItem,item:!0,xs:12,sm:12,md:10,children:Object(n.jsx)("div",{className:r.col,children:t})})})}}]),a}(d.a.PureComponent);t.a=Object(j.a)((function(e){var t;return Object(g.a)((t={},Object(s.a)(t,e.breakpoints.down("md"),{root:{padding:e.spacing(1)}}),Object(s.a)(t,e.breakpoints.up("sm"),{root:{padding:e.spacing(2)}}),Object(s.a)(t,"root",{margin:0,width:"100%",backgroundColor:e.palette.background.default,color:e.palette.getContrastText(e.palette.background.paper)}),Object(s.a)(t,"col",{display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:1200,width:"100%"}),Object(s.a)(t,"gridItem",{display:"flex",justifyContent:"center"}),t))}))(u)},689:function(e,t,a){"use strict";var n=a(9),r=a(1),c=a(4),i=a(35),o=a(37),s=a(88),l=a(87),d=a(0),p=a.n(d),b=a(48),g=a.n(b),j=a(600),m=a(609),u=a(682),h=a(104),O=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a=this.props,i=a.path,o=a.title,s=a.variant,l=a.white,d=a.absolute,b=a.newTab,j=a.onClick,m=a.className,O=a.classes,v=s||"body1",f=g()((e={},Object(c.a)(e,O.link,!l),Object(c.a)(e,O.linkWhite,!!l),e),O.commonLink);return t="string"===typeof o?Object(r.jsx)(u.a,{variant:v,className:g()(f,m),children:o}):p.a.cloneElement(o,Object(n.a)(Object(n.a)({},o.props),{},{className:g()(f,m,o.props.className)}),o.props.children),d||i.startsWith("http")||b?Object(r.jsx)("a",{className:f,href:i,target:b?"_blank":void 0,onClick:j,children:t}):Object(r.jsx)(h.a,{className:f,to:i,onClick:j,children:t})}}]),a}(p.a.PureComponent);t.a=Object(m.a)((function(e){return Object(j.a)({commonLink:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},link:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightRegular,textDecoration:"none","&:hover":{color:e.palette.primary.dark,textDecoration:"underline"}},linkWhite:{color:"#fff",fontWeight:e.typography.fontWeightRegular,textDecoration:"underline","&:hover":{color:"rgba(255, 255, 255, 0.87)",textDecoration:"underline"}}})}))(O)},701:function(e,t,a){"use strict";var n=a(1),r=a(35),c=a(37),i=a(88),o=a(87),s=a(4),l=a(0),d=a.n(l),p=a(716),b=a(48),g=a.n(b),j=a(600),m=a(609),u=a(682),h=a(712),O=a(689),v=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,r=e.name,c=e.pluralName,i=e.searchRoute,o=e.icon,s=e.backgroundColorClassName,l=e.t,d=e.className,p=e.classes,b="body1",j=Object(n.jsx)(u.a,{className:g()(p.text,p.margin,p.static),variant:b,children:"/"}),m=null;null!=o&&(m=Object(n.jsx)(h.a,{className:g()(p.margin,p.text),children:o}));var v=null,f=null,x=Object(n.jsx)(u.a,{className:g()(p.linkSelected,p.static),variant:b,children:c});return null!=t&&(v=Object(n.jsx)(u.a,{className:g()(p.text,p.id),variant:"body2",children:t})),null!=t&&null!=i&&(v=Object(n.jsx)(u.a,{className:p.text,variant:"body2",children:t}),x=Object(n.jsx)(O.a,{className:g()(p.link,p.margin,p.static),variant:b,path:i,title:c}),f=Object(n.jsxs)(u.a,{className:g()(p.linkSelected,p.static),variant:b,children:[r," Information"]})),Object(n.jsxs)("div",{className:g()(p.root,d,null==s?p.backgroundColor:s),children:[Object(n.jsxs)("div",{className:p.leftHeader,children:[m,Object(n.jsx)(u.a,{className:g()(p.margin,p.text),component:"h4",children:null==a?c:a}),v]}),Object(n.jsxs)("div",{className:p.rightHeader,children:[Object(n.jsx)(O.a,{className:g()(p.link,p.margin,p.static),variant:b,path:"/",title:l("header.home")}),j,x,null==f?null:j,f]})]})}}]),a}(d.a.PureComponent);t.a=Object(m.a)((function(e){var t;return Object(j.a)((t={},Object(s.a)(t,e.breakpoints.down("md"),{root:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(1)},leftHeader:{marginBottom:e.spacing(1)},rightHeader:{marginBottom:e.spacing(1)}}),Object(s.a)(t,e.breakpoints.up("sm"),{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(2)},leftHeader:{marginBottom:e.spacing(2)},rightHeader:{marginBottom:e.spacing(2)}}),Object(s.a)(t,"root",{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}),Object(s.a)(t,"leftHeader",{alignItems:"center",display:"flex"}),Object(s.a)(t,"rightHeader",{alignItems:"center",display:"flex"}),Object(s.a)(t,"static",{overflow:"initial"}),Object(s.a)(t,"margin",{marginRight:e.spacing(1)}),Object(s.a)(t,"text",{color:"#fff",fontSize:"1.3125rem",fontWeight:700}),Object(s.a)(t,"id",{fontSize:"0.875rem",fontWeight:400,flex:"0 1 auto",minWidth:"0",overflow:"hidden",textOverflow:"ellipsis"}),Object(s.a)(t,"link",{color:"#fff",textDecoration:"underline","&:hover":{color:"rgba(255, 255, 255, 0.87)"}}),Object(s.a)(t,"linkSelected",{color:"rgba(255, 255, 255, 0.87)",textDecoration:"underline"}),Object(s.a)(t,"backgroundColor",{backgroundColor:"#3d454d"}),t))}))(Object(p.a)()(v))},831:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(35),c=a(37),i=a(88),o=a(87),s=a(4),l=a(0),d=a(716),p=a(600),b=a(609),g=a(133),j=a(151),m=a(719),u=a(701),h=a(688),O=a(48),v=a.n(O),f=a(682),x=a(834),k=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onCardEnter=function(){n.setState({displayHover:!0})},n.onCardLeave=function(){n.setState({displayHover:!1})},n.state={displayHover:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,r=e.link,c=e.image,i=e.cover,o=e.classes;return Object(n.jsx)("div",{className:v()(o.cardCommon,this.state.displayHover?o.cardHover:o.cardNoHover),onClick:function(){window.open(r,"_blank")},onMouseEnter:this.onCardEnter,onMouseLeave:this.onCardLeave,children:Object(n.jsxs)(m.a,{className:o.card,children:[Object(n.jsx)("div",{className:o.header,children:Object(n.jsx)(f.a,{variant:"h5",gutterBottom:!0,className:o.title,children:t})}),Object(n.jsx)(x.a,{component:"img",className:v()(o.media,i?o.mediaCover:o.mediaContain),src:"".concat("","/").concat(c),title:t}),Object(n.jsx)(f.a,{className:o.text,variant:"body2",children:a})]})})}}]),a}(l.PureComponent);k.defaultProps={key:void 0,title:void 0,description:void 0,link:void 0,image:void 0,cover:void 0};var y=Object(b.a)((function(e){var t;return Object(p.a)((t={root:{backgroundColor:"dark"===e.palette.mode?e.palette.grey[800]:void 0,color:e.palette.getContrastText(e.palette.background.paper)},text:{padding:e.spacing(2),height:e.spacing(14),overflowY:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{display:"none"},"-ms-overflow-style":"none",scrollbarWidth:"none"}},Object(s.a)(t,e.breakpoints.down("sm"),{cardCommon:{transition:".4s ease box-shadow",borderRadius:"4px"}}),Object(s.a)(t,e.breakpoints.up("sm"),{cardCommon:{transition:".4s ease box-shadow",borderRadius:"4px"}}),Object(s.a)(t,e.breakpoints.up("lg"),{cardCommon:{transition:".4s ease box-shadow",borderRadius:"4px"}}),Object(s.a)(t,"cardHover",{boxShadow:"\n    calc(".concat(0*e.spacing(1)," -").concat(1*e.spacing(1)," -").concat(e.spacing(3)," - ").concat(e.spacing(1)," * 0) rgba(0,0,0,0.2),\n    calc(").concat(0*e.spacing(1)," -").concat(1*e.spacing(1),"- ").concat(1*e.spacing(1)," - ").concat(e.spacing(1)," * 0) rgba(0,0,0,0.14),\n    calc(").concat(0*e.spacing(1)," -").concat(e.spacing(2)," -").concat(1*e.spacing(1)," - ").concat(e.spacing(1)," * 1) rgba(0,0,0,0.12)\n    "),cursor:"pointer"}),Object(s.a)(t,"cardNoHover",{}),Object(s.a)(t,"media",{height:140}),Object(s.a)(t,"mediaCover",{objectFit:"cover"}),Object(s.a)(t,"mediaContain",{objectFit:"contain"}),Object(s.a)(t,e.breakpoints.down("md"),{header:{padding:e.spacing(1)}}),Object(s.a)(t,e.breakpoints.up("sm"),{header:{padding:e.spacing(2)}}),Object(s.a)(t,"header",{alignItems:"center",borderBottom:"1px solid rgba(0, 0, 0, 0.075)",display:"flex",backgroundColor:e.palette.background.default,color:e.palette.getContrastText(e.palette.background.paper)}),Object(s.a)(t,"card",{display:"flex",backgroundColor:"dark"===e.palette.mode?e.palette.grey[800]:void 0,color:e.palette.getContrastText(e.palette.background.paper),flexDirection:"column"}),Object(s.a)(t,"title",{fontWeight:700}),t))}))(k),C=[{link:"https://starcoin.org",image:"pic_01.png",cover:!0},{link:"https://starcoin.org/en/overview/technology_whitepaper/",image:"pic_02.png",cover:!0},{link:"http://starcoin.org/en/developer",image:"pic_03.png",cover:!0}],N=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.t,a=e.classes,r=t("header.ecosystems");return Object(n.jsxs)("div",{children:[Object(n.jsx)(g.b,{children:Object(n.jsx)("title",{children:r})}),Object(n.jsx)(h.a,{children:Object(n.jsxs)(m.a,{className:a.card,children:[Object(n.jsx)(u.a,{name:r,pluralName:r}),Object(n.jsx)("div",{className:a.gridCards,children:C.map((function(e,a){var r=e.link,c=e.image,i=e.cover;return Object(n.jsx)(y,{title:t("ecosystems.cards.title_".concat(a)),description:t("ecosystems.cards.description_".concat(a)),link:r,image:c,cover:i},Object(j.sha3_256)(t("ecosystems.cards.title_".concat(a))))}))})]})})]})}}]),a}(l.PureComponent);t.default=Object(b.a)((function(e){var t;return Object(p.a)((t={},Object(s.a)(t,e.breakpoints.down("sm"),{gridCards:{display:"grid",gridTemplateColumns:"1fr",gridGap:e.spacing(2),padding:e.spacing(2)}}),Object(s.a)(t,e.breakpoints.up("sm"),{gridCards:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:e.spacing(2),padding:e.spacing(2)}}),Object(s.a)(t,e.breakpoints.up("lg"),{gridCards:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:e.spacing(2),padding:e.spacing(2)}}),Object(s.a)(t,"card",{display:"flex",backgroundColor:"dark"===e.palette.mode?e.palette.grey[800]:void 0,color:e.palette.getContrastText(e.palette.background.paper),flexDirection:"column"}),Object(s.a)(t,"root",{padding:e.spacing(1),margin:e.spacing(10)}),t))}))(Object(d.a)()(N))}}]);
//# sourceMappingURL=20.9c1a8855.chunk.js.map