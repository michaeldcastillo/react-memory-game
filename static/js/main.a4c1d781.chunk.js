(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/bs-200x200-01.d044192d.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-02.6de216d4.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-03.a0992850.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-04.ec0e079e.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-05.ae51dded.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-06.421d5cac.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-07.df28e3eb.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-08.a4b5c569.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-09.9b2216e4.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-10.c14b7f2e.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-11.c54cc4df.jpg"},function(e,t,a){e.exports=a.p+"static/media/bs-200x200-12.6532d599.jpg"},,,function(e,t,a){e.exports=a(22)},function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(4),s=a(19),r=a(5),i=a(1),o=a(20),l=a(0),p=a.n(l),u=a(6),m=a.n(u),d=(a(28),a(7)),f=a.n(d),g=a(8),h=a.n(g),k=a(9),x=a.n(k),b=a(10),v=a.n(b),E=a(11),j=a.n(E),w=a(12),y=a.n(w),C=a(13),S=a.n(C),M=a(14),N=a.n(M),A=a(15),I=a.n(A),O=a(16),B=a.n(O),G=a(17),J=a.n(G),T=a(18),W=a.n(T),P=[f.a,h.a,x.a,v.a,j.a,y.a,S.a,N.a,I.a,B.a,J.a,W.a],Y=function(e){return p.a.createElement("div",{className:"navbar "},p.a.createElement("div",null,"Memory Game"),p.a.createElement("div",null,e.navMessage),p.a.createElement("div",null,"Score: ",p.a.createElement("span",{style:{fontWeight:"bold"}},e.score)," ",p.a.createElement("span",{className:"pipe"},"|")," Top Score: ",p.a.createElement("span",{style:{fontWeight:"bold"}},e.topScore)))},_=function(e){return p.a.createElement("div",{className:"card",onClick:function(t){return e.clickEvent(t.target.src)}},p.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:e.name}))},q=function(e){return p.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.characters.map(function(t,a){return p.a.createElement(_,{name:t,key:a,clickEvent:e.clickEvent})}))},z=function(){return p.a.createElement("div",{className:"footer text-center"},p.a.createElement("a",{href:"http://www.austintexas.gov/department/barton-springs-pool",target:"_blank"},"Barton Springs Pool")," Austin, Texas.")},D=function(){return p.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},p.a.createElement("p",{className:"m-0"},"Click on an image to earn points, but don't click on any more than once."))},F=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={score:0,topScore:0,navMessage:"Click an image to begin!",allImages:a.shuffleArray(),wasClicked:[],shake:!1},a.clickEvent=a.checkClicked.bind(Object(i.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"shuffleArray",value:function(){var e=P.slice();console.log("\nnewArr = ",e);for(var t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]),console.log("\nshuffleArr = ",t);return t}},{key:"checkClicked",value:function(e){var t=this.state.wasClicked.slice(),a=this.shuffleArray(),n=this.state.score,c=this.state.topScore;if(this.state.wasClicked.includes(e)||(n===c?(n++,c++):n++,t.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,topScore:c,navMessage:"Incorrect guess!",allImages:a,wasClicked:[],shake:!0})}this.setState({score:n,topScore:c,navMessage:"You Guessed Correctly!",allImages:a,wasClicked:t,shake:!1})}},{key:"render",value:function(){var e=this.state;return p.a.createElement("div",null,p.a.createElement(Y,{score:e.score,topScore:e.topScore,navMessage:e.navMessage}),p.a.createElement(D,null),p.a.createElement(q,{shake:e.shake,characters:e.allImages,clickEvent:this.clickEvent}),p.a.createElement(z,null))}}]),t}(l.Component);m.a.render(p.a.createElement(F,null),document.getElementById("root"))},,,,,,function(e,t,a){}],[[21,1,2]]]);
//# sourceMappingURL=main.a4c1d781.chunk.js.map