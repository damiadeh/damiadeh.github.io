(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{258:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},261:function(e,a,l){"use strict";var t=l(4),c=l(23),r=l(0),o=l.n(r),n=l(1),m=l.n(n),s=l(256),d=l.n(s),i=l(257),u={tag:i.q,noGutters:m.a.bool,className:m.a.string,cssModule:m.a.object,form:m.a.bool},E=function(e){var a=e.className,l=e.cssModule,r=e.noGutters,n=e.tag,m=e.form,s=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(i.m)(d()(a,r?"no-gutters":null,m?"form-row":"row"),l);return o.a.createElement(n,Object(t.a)({},s,{className:u}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},262:function(e,a,l){"use strict";var t=l(4),c=l(23),r=l(258),o=l.n(r),n=l(0),m=l.n(n),s=l(1),d=l.n(s),i=l(256),u=l.n(i),E=l(257),h=d.a.oneOfType([d.a.number,d.a.string]),b=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),push:Object(E.h)(h,'Please use the prop "order"'),pull:Object(E.h)(h,'Please use the prop "order"'),order:h,offset:h})]),f={tag:E.q,xs:b,sm:b,md:b,lg:b,xl:b,className:d.a.string,cssModule:d.a.object,widths:d.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},p=function(e){var a=e.className,l=e.cssModule,r=e.widths,n=e.tag,s=Object(c.a)(e,["className","cssModule","widths","tag"]),d=[];r.forEach(function(a,t){var c=e[a];if(delete s[a],c||""===c){var r=!t;if(o()(c)){var n,m=r?"-":"-"+a+"-",i=x(r,a,c.size);d.push(Object(E.m)(u()(((n={})[i]=c.size||""===c.size,n["order"+m+c.order]=c.order||0===c.order,n["offset"+m+c.offset]=c.offset||0===c.offset,n)),l))}else{var h=x(r,a,c);d.push(h)}}}),d.length||d.push("col");var i=Object(E.m)(u()(a,d),l);return m.a.createElement(n,Object(t.a)({},s,{className:i}))};p.propTypes=f,p.defaultProps=N,a.a=p},264:function(e,a,l){"use strict";var t=l(4),c=l(23),r=l(0),o=l.n(r),n=l(1),m=l.n(n),s=l(256),d=l.n(s),i=l(257),u={tag:i.q,inverse:m.a.bool,color:m.a.string,block:Object(i.h)(m.a.bool,'Please use the props "body"'),body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.color,n=e.block,m=e.body,s=e.inverse,u=e.outline,E=e.tag,h=e.innerRef,b=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),f=Object(i.m)(d()(a,"card",!!s&&"text-white",!(!n&&!m)&&"card-body",!!r&&(u?"border":"bg")+"-"+r),l);return o.a.createElement(E,Object(t.a)({},b,{className:f,ref:h}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},265:function(e,a,l){"use strict";var t=l(4),c=l(23),r=l(0),o=l.n(r),n=l(1),m=l.n(n),s=l(256),d=l.n(s),i=l(257),u={tag:i.q,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.innerRef,n=e.tag,m=Object(c.a)(e,["className","cssModule","innerRef","tag"]),s=Object(i.m)(d()(a,"card-body"),l);return o.a.createElement(n,Object(t.a)({},m,{className:s,ref:r}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},266:function(e,a,l){"use strict";var t=l(4),c=l(23),r=l(0),o=l.n(r),n=l(1),m=l.n(n),s=l(256),d=l.n(s),i=l(257),u={tag:i.q,className:m.a.string,cssModule:m.a.object},E=function(e){var a=e.className,l=e.cssModule,r=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),m=Object(i.m)(d()(a,"card-header"),l);return o.a.createElement(r,Object(t.a)({},n,{className:m}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},293:function(e,a,l){"use strict";var t=l(4),c=l(23),r=l(0),o=l.n(r),n=l(1),m=l.n(n),s=l(256),d=l.n(s),i=l(257),u={className:m.a.string,cssModule:m.a.object,size:m.a.string,bordered:m.a.bool,borderless:m.a.bool,striped:m.a.bool,inverse:Object(i.h)(m.a.bool,'Please use the prop "dark"'),dark:m.a.bool,hover:m.a.bool,responsive:m.a.oneOfType([m.a.bool,m.a.string]),tag:i.q,responsiveTag:i.q,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])},E=function(e){var a=e.className,l=e.cssModule,r=e.size,n=e.bordered,m=e.borderless,s=e.striped,u=e.inverse,E=e.dark,h=e.hover,b=e.responsive,f=e.tag,N=e.responsiveTag,x=e.innerRef,p=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),k=Object(i.m)(d()(a,"table",!!r&&"table-"+r,!!n&&"table-bordered",!!m&&"table-borderless",!!s&&"table-striped",!(!E&&!u)&&"table-dark",!!h&&"table-hover"),l),v=o.a.createElement(f,Object(t.a)({},p,{ref:x,className:k}));if(b){var g=!0===b?"table-responsive":"table-responsive-"+b;return o.a.createElement(N,{className:g},v)}return v};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},511:function(e,a,l){"use strict";l.r(a);var t=l(95),c=l(96),r=l(99),o=l(97),n=l(98),m=l(0),s=l.n(m),d=l(261),i=l(262),u=l(264),E=l(266),h=l(265),b=l(293),f=l(291),N=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(n.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(d.a,null,s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch default"),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"success",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"warning",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"info",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"danger",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"light",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"dark",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"primary",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch pills"),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"disabled"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"success",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"warning",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"info",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"danger",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"light",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"dark",checked:!0,disabled:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt"'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"success",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"warning",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"info",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"danger",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"light",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"dark",checked:!0,outline:"alt"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,"label"))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"3d Switch ",s.a.createElement("small",null,s.a.createElement("code",null,'outline="alt" label'))," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"success",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"warning",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"info",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"danger",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"light",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"dark",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"success",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"warning",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"info",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"danger",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"light",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"dark",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch outline alternative - pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"success",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"warning",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"info",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"danger",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"light",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"dark",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"primary",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",outline:!0,label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",label:!0,checked:!0}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,disabled:!0})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12",md:"6"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),s.a.createElement(h.a,null,s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),s.a.createElement(f.o,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),s.a.createElement(i.a,{xs:"12"},s.a.createElement(u.a,null,s.a.createElement(E.a,null,"Sizes"),s.a.createElement(h.a,{className:"p-0"},s.a.createElement(b.a,{hover:!0,striped:!0,className:"table-align-middle mb-0"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Size"),s.a.createElement("th",null,"Example"),s.a.createElement("th",null,"Props"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Large"),s.a.createElement("td",null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"lg"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","lg"))),s.a.createElement("tr",null,s.a.createElement("td",null,"Normal"),s.a.createElement("td",null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",checked:!0})),s.a.createElement("td",null,"-")),s.a.createElement("tr",null,s.a.createElement("td",null,"Small"),s.a.createElement("td",null,s.a.createElement(f.o,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"sm"})),s.a.createElement("td",null,"Add ",s.a.createElement("code",null,"size=","sm"))))))))))}}]),a}(m.Component);a.default=N}}]);
//# sourceMappingURL=28.9affe905.chunk.js.map