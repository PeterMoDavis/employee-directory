(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),s=r(12),a=r.n(s),o=(r(22),r(23),r(0));var l=function(){return Object(o.jsxs)("div",{className:"Header text-center headerContainer",style:{backgroundColor:"salmon",paddingBottom:"20px",paddingTop:"10px",color:"navy",borderBottom:"solid 3px turquoise"},children:[Object(o.jsx)("h1",{className:"h2",children:"Employee Directory"}),Object(o.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results"})]})},i=r(13),d=r(14),u=r(17),h=r(16);var b=function(e){return Object(o.jsxs)("tr",{"text-center":!0,children:[Object(o.jsx)("td",{className:"border-0 text-center",children:Object(o.jsx)("img",{style:{width:"75px"},src:e.picture,alt:""})}),Object(o.jsxs)("td",{className:"border-0 align-middle text-center",children:[e.first," ",e.last]}),Object(o.jsx)("td",{className:"border-0 align-middle text-center",children:e.phone.replace(/[-\(\) ]/gi,"").replace(/(\d{3})(\d{3})(\d{4})/,"($1)-$2-$3")}),Object(o.jsx)("td",{className:"border-0 align-middle text-center",children:Object(o.jsx)("a",{href:"emailto:",children:e.email})}),Object(o.jsx)("td",{className:"border-0 align-middle text-center",children:e.DOB})]})},j=r(15),m=r.n(j),p=function(e){return m.a.get("https://randomuser.me/api/?results=1500")},x=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",results:[]},e.styles={input:{width:"200px",border:"none"}},e.searchPeople=function(){p().then((function(t){return e.setState({results:t.data.results})})).then((function(){return console.log(e.state.results)})).catch((function(e){console.log(e)}))},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.searchPeople()}},{key:"handleClickName",value:function(){this.setState({results:this.state.results.sort((function(e,t){var r=e.name.last.toUpperCase(),n=t.name.last.toUpperCase();return r<n?-1:r>n?1:0}))})}},{key:"handleClickDOB",value:function(){this.setState({results:this.state.results.sort((function(e,t){return e.dob.date.substring(0,4)-t.dob.date.substring(0,4)}))})}},{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[Object(o.jsx)("form",{action:"",children:Object(o.jsx)("div",{className:"form-group d-flex justify-content-center bg-light",children:Object(o.jsx)("input",{onChange:function(t){e.setState({search:t.target.value}),console.log(e.state.search)},className:"form-control-sm my-3",style:this.styles.input,type:"text",placeholder:"Search"})})}),Object(o.jsxs)("table",{className:"table table-hover table-striped container ",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"border-top border-bottom",children:[Object(o.jsx)("th",{className:"border-0 align-center text-center",scope:"col",children:"Image"}),Object(o.jsx)("th",{onClick:function(){return e.handleClickName()},className:"border-0 align-center text-center name",scope:"col",children:"Name"}),Object(o.jsx)("th",{className:"border-0 align-center text-center",scope:"col",children:"Phone"}),Object(o.jsx)("th",{className:"border-0 align-center text-center",scope:"col",children:"Email"}),Object(o.jsx)("th",{onClick:function(){return e.handleClickDOB()},className:"border-0 align-center text-center DOB",scope:"col",children:"DOB"})]})}),Object(o.jsx)("tbody",{children:this.state.results.filter((function(t){return""===e.state.search||t.name.first.toLowerCase().includes(e.state.search.toLowerCase())||t.name.last.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).map((function(e,t){var r=e.dob.date.slice(0,-14).split("-"),n="".concat(r[1],"-").concat(r[2],"-").concat(r[0]);return Object(o.jsx)(b,{first:e.name.first,last:e.name.last,picture:e.picture.medium,phone:e.phone,email:e.email,DOB:n},t)}))})]})]})}}]),r}(n.Component);var f=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(x,{})]})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,45)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};r(43);a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.28b6ee41.chunk.js.map