(this["webpackJsonpreact-hex-grid"]=this["webpackJsonpreact-hex-grid"]||[]).push([[0],{10:function(n,t,e){},11:function(n,t,e){},13:function(n,t,e){"use strict";e.r(t);var o=e(1),i=e.n(o),r=e(3),c=e.n(r),s=(e(10),e(11),e(0)),a={f0:1.5,f1:0,f2:Math.sqrt(3)/2,f3:Math.sqrt(3),b0:2/3,b1:0,b2:-1/3,b3:Math.sqrt(3)/3,angle:0},u={f0:Math.sqrt(3),f1:Math.sqrt(3)/2,f2:0,f3:1.5,b0:Math.sqrt(3)/3,b1:-1/3,b2:0,b3:2/3,angle:.5},x={flat:!0,origin:{x:0,y:0},size:{x:12,y:12},spacing:1};var f=function(n){var t=n.height,e=void 0===t?600:t,o=n.width,r=void 0===o?800:o,c=n.viewBox,f=void 0===c?"-50 -50 100 100":c,h=n.children,l=void 0===h?null:h,g=n.settings,d=void 0===g?x:g,v=function(n,t){var e=[],o=n;return Array.from(new Array(6),(function(n,i){var r=function(n,t){var e=2*Math.PI*(n+t.angle)/6;return{x:d.size.x*Math.cos(e),y:d.size.y*Math.sin(e)}}(i,t),c={x:o.x+r.x,y:o.y+r.y};e.push(c)})),e},b=function(){var n=d.flat?a:u;return{settings:d,orientation:n,getPoints:function(t){return v(t,n).map((function(n){return"".concat(n.x,",").concat(n.y)})).join(" ")}}}();return console.log(b),Object(s.jsx)("svg",{className:"grid",height:e,width:r,viewBox:f,version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:i.a.Children.map(l,(function(n){if(i.a.isValidElement(n))return i.a.cloneElement(n,{hexContext:b})}))})},h=e(5),l=e(4),g=function n(t,e){Object(l.a)(this,n),this.x=void 0,this.y=void 0,this.z=void 0,this.x=t,this.y=e,this.z=-t-e},d={equals:function(n,t){return n.x===t.x&&n.y===t.y&&n.z===t.z},hexToPixel:function(n,t,e){return{x:e.origin.x+(t.f0*n.x+t.f1*n.y)*e.size.x*e.spacing,y:e.origin.y+(t.f2*n.x+t.f3*n.y)*e.size.y*e.spacing}},pixelToHex:function(n,t,e){var o=(n.x-e.origin.x)/e.size.x,i=(n.y-e.origin.y)/e.size.y,r=t.b0*o+t.b1*i,c=t.b2*o+t.b3*i;return d.round(new g(r,c))},round:function(n){var t=Math.round(n.x),e=Math.round(n.y),o=Math.round(n.z),i=Math.abs(t-n.x),r=Math.abs(e-n.y),c=Math.abs(o-n.z);return i>r&&i>c?new g(-e-o,e):new g(t,r>c?-t-o:e)}},v=d;var b=function(n){var t=Object(o.useState)({}),e=Object(h.a)(t,2),i=e[0];e[1],console.log(n.coordinates);var r=n.hexContext?v.hexToPixel(n.coordinates,n.hexContext.orientation,n.hexContext.settings):{x:0,y:0},c=n.hexContext?n.hexContext.getPoints(r):"0,0 250,190 160,210";return Object(o.useEffect)((function(){console.log(n)})),Object(s.jsx)("g",{onMouseEnter:function(t){return function(t){n.onMouseEnter&&n.onMouseEnter(t)}(t)},onMouseOver:function(t){return function(t){n.onMouseOver&&n.onMouseOver(t)}(t)},onMouseLeave:function(t){return function(t){n.onMouseLeave&&n.onMouseLeave(t)}(t)},onClick:function(t){return function(t){console.log("onClick"),console.log(i),console.log(n.coordinates),console.log(r),n.onClick&&n.onClick(t)}(t)},onDragStart:function(t){return function(t){n.onDragStart&&n.onDragStart(t)}(t)},onDragEnd:function(t){return function(t){n.onDragEnd&&(t.preventDefault(),n.onDragEnd(t))}(t)},onDragOver:function(t){return function(t){n.onDragOver&&n.onDragOver(t)}(t)},onDrop:function(t){return function(t){n.onDrop&&(t.preventDefault(),n.onDrop(t))}(t)},children:Object(s.jsxs)("g",{className:"hex",children:[n.hexContext?Object(s.jsx)("polygon",{points:c,fill:"lime"}):Object(s.jsx)("polygon",{points:"0,0 250,190 160,210",fill:"lime"}),n.children]})})};var j=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(f,{height:210,width:500,children:[Object(s.jsx)(b,{coordinates:new g(0,0)}),Object(s.jsx)(b,{coordinates:new g(1,0)}),Object(s.jsx)(b,{coordinates:new g(-1,0)}),Object(s.jsx)(b,{coordinates:new g(-1,1)}),Object(s.jsx)(b,{coordinates:new g(-1,2)}),Object(s.jsx)(b,{coordinates:new g(-2,1)})]})})},y=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,14)).then((function(t){var e=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;e(n),o(n),i(n),r(n),c(n)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),y()}},[[13,1,2]]]);
//# sourceMappingURL=main.fd30d1fa.chunk.js.map