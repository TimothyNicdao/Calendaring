(this.webpackJsonpcalendaring=this.webpackJsonpcalendaring||[]).push([[0],{211:function(e,t,n){e.exports=n(396)},216:function(e,t,n){},217:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},218:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(25),o=n.n(l),r=(n(216),n(217),n(218),n(179)),c=n(50),s=n(51),u=n(200),h=n(199),d=n(409),m=n(57),g=n(122),E=n.n(g),v=(n(219),function(){function e(t,n,a,i,l,o,r,s){Object(c.a)(this,e),this.begin="Begin:VEVENT",this.classification="CLASS:"+(t||"PUBLIC"),this.geo="GEO:"+n+";"+a,this.summary="SUMMARY:"+o,this.start="DTSTART;VALUE=DATE:"+r,this.end="DTEND;VALUE=DATE:"+s,this.priority="PRIORITY:"+l,this.location="LOCATION:"+i,this.ending="END:VEVENT"}return Object(s.a)(e,[{key:"build",value:function(){var e=this,t="";return t=(t=Object.keys(this).reduce((function(t,n){return t+e[n]+"\n"}),"")).substring(0,t.length-1)}}]),e}()),p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;Object(c.a)(this,e),this.prodID="PRODID:".concat(n||"-//ICS 414 Turkey Pie//Calendar Project //EN"),this.version="VERSION:".concat(a||"2.0"),this.timezone="TZID:".concat(i||"Pacific/Honolulu"),this.vevents=t}return Object(s.a)(e,[{key:"build",value:function(){return("BEGIN:VCALENDAR".concat("\n",this.prodID,"\n").concat(this.version,"\n").concat(this.timezone,"\n")+"".concat(this.vevents.reduce((function(e,t){return e+t.build()+"\n"}),""))).trim()+"\nEND:VCALENDAR"}}]),e}(),f=n(180),C=n.n(f),b=[{text:"Public",value:"PUBLIC"},{text:"Private",value:"PRIVATE"}],D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={classification:"PUBLIC",latitude:"",longtitude:"",summary:"",start:new Date,end:new Date,priority:"",location:""},e.handleChange=function(t,n){var a=n.name,i=n.value;e.setState(Object(r.a)({},a,i))},e.handleDateStartChange=function(t){e.setState({start:t})},e.handleDateEndChange=function(t){e.setState({end:t})},e.buildDate=function(e){var t=e.getYear()+1900,n=e.getMonth()+1>9?e.getMonth()+1:"0"+(e.getMonth()+1),a=e.getDate()>9?e.getDate():"0"+e.getDate();return"".concat(t).concat(n).concat(a)},e.handleSubmit=function(){var t=e.state,n=t.classification,a=t.latitude,i=t.longtitude,l=t.location,o=t.priority,r=t.summary,c=t.start,s=t.end;c=e.buildDate(c),s=e.buildDate(s);var u=[new v(n,a,i,l,o,r,c,s)],h=new p(u).build();console.log(e.state),C()(h,"Calendar.ics")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.classification,n=e.latitude,a=e.longtitude,l=e.summary,o=e.start,r=e.end;e.priority,e.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{method:"get",action:"../App.js"},i.a.createElement(d.a.Select,{label:"Classification",options:b,placeholder:"Classification",value:t,width:2,name:"classification",onChange:this.handleChange}),i.a.createElement(d.a.Input,{inline:!0,label:"Latitude",placeholder:"Latitude",value:n,name:"latitude",onChange:this.handleChange}),i.a.createElement(d.a.Input,{inline:!0,label:"Longtitude",placeholder:"Longtitude",value:a,name:"longtitude",onChange:this.handleChange}),i.a.createElement(d.a.Input,{inline:!0,label:"Summary",value:l,onChange:this.handleChange,name:"summary"}),i.a.createElement(d.a.Group,{inline:!0},i.a.createElement(d.a.Input,{readOnly:!0,label:"Start",placeholder:"StartDate",width:2,value:o}),i.a.createElement(m.a,null,i.a.createElement(E.a,{selected:this.state.date,onChange:this.handleDateStartChange,name:o}))),i.a.createElement(d.a.Group,{inline:!0},i.a.createElement(d.a.Input,{label:"EndDate",placeholder:"EndDate",width:2,value:r,readOnly:!0}),i.a.createElement(m.a,null,i.a.createElement(E.a,{selected:this.state.date,onChange:this.handleDateEndChange,name:r}))),i.a.createElement(d.a.Input,{label:"Priority",placeholder:"Priority: 1-10",width:2,onChange:this.handleChange,name:"priority"}),i.a.createElement(d.a.Input,{label:"Location",placeholder:"Location",width:2,onChange:this.handleChange,name:"location"})),i.a.createElement("button",{onClick:this.handleSubmit},"Click to download file"))}}]),n}(a.Component);var y=function(){return i.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[211,1,2]]]);
//# sourceMappingURL=main.fa94694e.chunk.js.map