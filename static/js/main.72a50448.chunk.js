(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/2.06c8cef7.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.774fdd3d.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.f3eff7d2.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.ef8559b5.jpg"},,,function(e,t,a){e.exports=a(68)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/s-f.e95e1c7d.jpg"},function(e,t,a){e.exports=a.p+"static/media/s-m.42b79d4e.png"},function(e,t,a){e.exports=a.p+"static/media/1.d3aa8a94.jpeg"},function(e,t,a){e.exports=a.p+"static/media/3.e1cc0930.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.4c35f3b4.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.d5d178cb.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.7e786550.jpg"},function(e,t,a){e.exports=a.p+"static/media/Crete-f.ebdf8b8d.jpg"},function(e,t,a){e.exports=a.p+"static/media/Crete-m.40e28201.png"},function(e,t,a){e.exports=a.p+"static/media/1.28546b6d.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.3033020a.jpg"},function(e,t,a){e.exports=a.p+"static/media/Venice-f.e0e35f7d.jpg"},function(e,t,a){e.exports=a.p+"static/media/Venice-m.94baa52c.png"},function(e,t,a){e.exports=a.p+"static/media/1.91b27504.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.e138acc7.jpg"},function(e,t,a){e.exports=a.p+"static/media/Tokyo-f.883e80c9.jpg"},function(e,t,a){e.exports=a.p+"static/media/Tokyo-m.d31f77b5.png"},function(e,t,a){e.exports=a.p+"static/media/1.e207231b.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.11e6a5a5.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.a8acc3b6.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.e7c4b244.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.ec9b7aaa.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.863450a1.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),s=(a(25),a(1)),o=a(2),l=a(4),p=a(3),m=a(5),d=(a(27),a(28),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e)))._goNext=function(){var e=a.state.selected;e<=a.props.navigation.length-1-1&&(a.setState({selected:e+1}),a.props.selected(e+1))},a._goPrev=function(){var e=a.state.selected;a.props.navigation.length;e>0&&(a.setState({selected:e-1}),a.props.selected(e-1))},a.state={selected:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"renderArrow",value:function(){var e=this;return i.a.createElement("div",{className:"arrows"},i.a.createElement("div",{onClick:function(){return e._goPrev()}}),i.a.createElement("div",{onClick:function(){return e._goNext()}}))}},{key:"render",value:function(){var e=this,t=(this.state.selected,window.innerWidth),a={paddingTop:"120px",transform:"translateY(".concat(t>414?-150*this.state.selected:-60*this.state.selected,"px)"),transition:"all .5s ease"},n=function(t){if(t===e.state.selected)return{color:"#444",transition:"all .5s ease"}},c=this.props.navigation.map(function(e,t){return i.a.createElement("div",{className:"name",key:t,style:n(t)},i.a.createElement("h1",null,e.name),i.a.createElement("h3",null,e.time))});return i.a.createElement("nav",null,this.renderArrow(),i.a.createElement("div",{style:a,className:"nav-wrapper"},c))}}]),t}(n.Component)),u=a(6),g=a(18),f=a.n(g),h=a(19),v=a.n(h),b=(a(43),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={photoIndex:0,isOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,c=this.props.images;return i.a.createElement("div",{className:"gallery"},i.a.createElement("div",{className:"cards"},c.map(function(t,a){return i.a.createElement("figure",{className:"card",key:a,style:{background:"url(".concat(t.src,") 0 0/cover")},onClick:function(){return e.setState({isOpen:!0,photoIndex:a})}},i.a.createElement("figcaption",null,i.a.createElement("div",{className:"name"},t.name),i.a.createElement("div",{className:"description"},t.caption)))})),n&&i.a.createElement(v.a,{mainSrc:c[a].src,imageTitle:c[a].name,imageCaption:c[a].caption,nextSrc:c[(a+1)%c.length].src,prevSrc:c[(a+c.length-1)%c.length].src,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+c.length-1)%c.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%c.length})}}))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).goBack=function(){u.a.timeline({easing:"easeOutSine",duration:300}).add({targets:".App .detail-wrapper .title",translateY:[0,20],opacity:[1,0]}).add({targets:[".detail-wrapper",".detail-wrapper .blank"],translateY:"0",easing:"easeInOutSine",delay:u.a.stagger(400)}),a.props.onBack()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){new f.a(".rellax")}},{key:"render",value:function(){var e=this.props.content.photos,t=this.props.content.name,a=this.props.content.time,n=this.props.content.description,c=this.props.content.gallery,r=e[3],s=e[4],o=e[5];return i.a.createElement("div",{className:"detail-wrapper"},i.a.createElement("div",{className:"blank"}),i.a.createElement("div",{className:"landing",style:{background:"url('".concat(e[0],"') center /cover")}},i.a.createElement("div",{className:"mask",style:{background:"url('".concat(e[2],"') center /cover")}}),i.a.createElement("div",{className:"title",style:{top:r+"em",left:0!=s?s+"em":"unset"}},i.a.createElement("div",{className:"rellax text",style:{fontSize:"2em",color:o,margin:".5em 0"},"data-rellax-speed":"-2"},a),i.a.createElement("div",{className:"rellax text",style:{fontSize:"8em",letterSpacing:".2em",paddingLeft:".2em"},"data-rellax-speed":"-4"},t)),i.a.createElement("div",{className:"back",style:{color:o},onClick:this.goBack},"\u21bc Back")),i.a.createElement("div",{className:"quote"},n),i.a.createElement(b,{images:c}))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(){Object(u.a)({targets:".pagination .current-page",translateY:[20,0],opacity:[0,1],duration:400,easing:"easeInSine"})}},{key:"render",value:function(){var e=this.props.selected,t=this.props.total;return i.a.createElement("div",{className:"pagination"},i.a.createElement("div",{className:"current-page"},"0"+(e+1)),i.a.createElement("div",{className:"dash"}),i.a.createElement("div",null,"0"+t))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={src:a.props.src.photos},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.src;return i.a.createElement("div",{className:"decors"},i.a.createElement("div",{className:"square1"},i.a.createElement("div",{style:{backgroundImage:"url('".concat(e[0],"')")}})),i.a.createElement("div",{className:"square2"},i.a.createElement("div",{style:{backgroundImage:"url('".concat(e[1],"')")}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.src.photos!==t.src?{src:e.src.photos}:void 0}}]),t}(n.Component),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).onSelected=function(e){n.setState({selected:e})},n.onBack=function(){n.ref_App.current.classList.remove("selected")},n.onDetail=function(){var e=n.ref_App.current;u.a.timeline({easing:"easeInSine",duration:500}).add({targets:[".detail-wrapper .blank",".detail-wrapper"],translateY:"-100vh",delay:u.a.stagger(300),easing:"easeInOutSine"}).add({targets:".detail-wrapper .title",translateY:[40,0],opacity:[0,1],delay:150,complete:function(){e.classList.add("selected")}})},n.ref_App=i.a.createRef(),n.state={selected:0,content:[{name:"Santorini",description:"The 1st city in my bucket list.",time:"10/2016",photos:[a(45),a(14),a(46),20],gallery:[{src:a(47),name:"Fira Ocean",caption:"Fira at the gloriest time of the day."},{src:a(14),name:"Tunnel",caption:"Hide away from the heat."},{src:a(48),name:"Greek Yogurt",caption:"Little treat after lunch."},{src:a(49),name:"A Lone Boat",caption:"Approaching the harbour."},{src:a(50),name:"Tourist",caption:"Blending in with tourist group."},{src:a(51),name:"Frame",caption:"Santorini throught a frame."}]},{name:"Crete",description:"The next destination after Santorini which I know little about.",time:"10/2016",photos:[a(52),a(15),a(53),10,0],gallery:[{src:a(54),name:"Lighthouse",caption:"Gorgeous sunset at Chania Port."},{src:a(15),name:"Sunset",caption:"Dinner with view."},{src:a(55),name:"Sunrise",caption:"Sunrise at the airport."}]},{name:"Venice",description:"One of the most, if not the most glorious locations in the world.",time:"1/2017",photos:[a(56),a(16),a(57),5,,"rgba(119,71,57,.7)"],gallery:[{src:a(58),name:"Backlight",caption:"Afternoon shine."},{src:a(16),name:"The View",caption:"No caption needed."},{src:a(59),name:"Ariel",caption:"Ariel view from a tower."}]},{name:"Tokyo",description:"The city where I dream to be since I was a little kid.",time:"4/2016",photos:[a(60),a(17),a(61),1,0,"rgba(3,14,34,.7)"],gallery:[{src:a(62),name:"Name",caption:"Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi."},{src:a(17),name:"Name",caption:"Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi."},{src:a(63),name:"Name",caption:"Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi."},{src:a(64),name:"Name",caption:"Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi."},{src:a(65),name:"Name",caption:"Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi."},{src:a(66),name:"Name",caption:"Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi."},{src:a(67),name:"Name",caption:"Labore quis adipisicing ipsum adipisicing et labore nisi ullamco proident laborum elit nisi."}]}]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.selected,t=this.state.content;return i.a.createElement("div",{className:"App",ref:this.ref_App},i.a.createElement("div",{className:"wrapper"},i.a.createElement(d,{selected:this.onSelected,navigation:t}),i.a.createElement(y,{selected:e,total:t.length}),i.a.createElement("div",{className:"button",onClick:this.onDetail},"\u21bc Gallery"),i.a.createElement(x,{src:t[e]}),i.a.createElement("div",{className:"copyrights"},"\xa9 2018 Tam Nguyen.  All rights reserved."),i.a.createElement("div",{className:"title"},"Journey")),i.a.createElement(j,{content:t[e],onBack:this.onBack}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,2,1]]]);
//# sourceMappingURL=main.72a50448.chunk.js.map