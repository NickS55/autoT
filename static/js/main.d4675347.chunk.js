(this.webpackJsonpauto_trader=this.webpackJsonpauto_trader||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"Heading":"tempor do tempor","Subheading":"ipsum et","Price":22000},{"Heading":"lorem","Subheading":"do incididunt","Price":33000},{"Heading":"ut magna ipsum","Subheading":"labore sed","Price":14000},{"Heading":"lorem incididunt elit","Subheading":"aliqua ipsum","Price":43000,"showBridge":true},{"Heading":"adipiscing ipsum do et do elit eiusmod","Subheading":"et dolor","Price":27000},{"Heading":"magna lorem","Subheading":"eisumod do","Price":15000},{"Heading":"ipsum","Subheading":"elit elit","Price":43000},{"Heading":"sed eiusmod","Subheading":"consectetur dolor","Price":25000},{"Heading":"labore eiusmod elit ipsum aliqua sit lore ipsum","Subheading":"aliqua sed","Price":37000,"showBridge":true},{"Heading":"aliqua ipsum sed ut elit","Subheading":"tempor aliqua","Price":1000},{"Heading":"aliqua","Subheading":"elit ut","Price":4000},{"Heading":"amet adipiscing","Subheading":"eisumod sit","Price":23000}]')},17:function(e,i,a){},18:function(e,i,a){},19:function(e,i,a){},21:function(e,i,a){"use strict";a.r(i);var t=a(1),n=a.n(t),r=a(8),c=a.n(r),d=(a(17),a(11)),s=(a(18),a(19),a(22)),o=a(0),u=function(e){var i=e.Data;return Object(o.jsx)("div",{className:"grid",children:i.map((function(e,i){return Object(o.jsxs)(s.a,{className:"card",children:[Object(o.jsx)(s.a.Img,{className:"card-image",variant:"top",src:(a=e.showBridge,a?"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/540px-GoldenGateBridge-001.jpg":"https://wallpaperaccess.com/full/1750672.jpg"),alt:"No Image"}),Object(o.jsxs)(s.a.Body,{classname:"card-body",children:[Object(o.jsx)(s.a.Title,{className:"card-title",children:e.Heading}),Object(o.jsx)(s.a.Text,{className:"card-text",children:e.Subheading}),Object(o.jsxs)("div",{className:"card-footer",children:[Object(o.jsx)("hr",{className:"card-line"}),Object(o.jsxs)(s.a.Text,{className:"card-price",children:["$",e.Price]})]})]})]},i);var a}))})},l=a(23),g=a(10);var b=function(){var e=g,i=Object(t.useState)("Price"),a=Object(d.a)(i,2),n=a[0],r=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.a,{onClick:function(){return r("Price")},children:"Sort By Price"}),Object(o.jsx)(l.a,{onClick:function(){return r("Heading")},children:"Sort By Heading"}),Object(o.jsx)(l.a,{onClick:function(){return r("Subheading")},children:"Sort By Subheading"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(u,{Data:function(e,i){var a,t;return"Price"===i?e.sort((function(e,i){return e.Price-i.Price})):e.sort((function(e,n){return"Heading"===i?(a=e.Heading.toUpperCase(),t=n.Heading.toUpperCase()):(a=e.Subheading.toUpperCase(),t=n.Subheading.toUpperCase()),a<t?-1:a>t?1:0}))}(e,n)})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(i){var a=i.getCLS,t=i.getFID,n=i.getFCP,r=i.getLCP,c=i.getTTFB;a(e),t(e),n(e),r(e),c(e)}))};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()}},[[21,1,2]]]);
//# sourceMappingURL=main.d4675347.chunk.js.map