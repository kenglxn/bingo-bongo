(this["webpackJsonpbingo-bongo"]=this["webpackJsonpbingo-bongo"]||[]).push([[0],{167:function(e,t,n){},211:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(0),r=n.n(a),o=n(45),c=n.n(o),l=(n(167),n(78)),s=n(26),u=n(20),b=n(48),j=n(60),d="games",h=Object(a.createContext)([]),m=JSON.parse(localStorage.getItem(d))||[],g="set",O="create",p="update";function f(e,t){switch(t.type){case g:return t.payload||[];case O:return[].concat(Object(j.a)(e),[t.payload]);case p:return e.map((function(e){return e.id===t.payload.id?t.payload:e}));default:throw new Error("unsupported action: ".concat(JSON.stringify(t)))}}var x=function(e){var t=e.children,n=Object(a.useReducer)(f,m),r=Object(b.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){localStorage.setItem(d,JSON.stringify(o))}),[o]),Object(i.jsx)(h.Provider,{value:{state:o,set:function(e){c({type:g,payload:e})},create:function(e){var t=Object(u.a)({id:o.length+1,created_at:Date.now()},e);return c({type:O,payload:t}),t},update:function(e){var t=Object(u.a)(Object(u.a)({},e),{},{updated:Date.now()});return c({type:p,payload:t}),t},find:function(e){return o.find((function(t){return t.id===e}))}},children:t})},y=function(){return Object(a.useContext)(h)},v=n(302),k=n(303),S=n(304),w=n(158),C=n(154),B=n(307),_=n(313),L=n(314);var T=function(){var e=Object(s.f)(),t=y().state;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v.a,{children:"Bingo"}),Object(i.jsx)(k.a,{justify:"center",gutter:[10,10],children:Object(i.jsxs)(S.a,{flex:"0 1 80vw",children:[Object(i.jsx)(w.a,{title:"opprett nytt spill",children:Object(i.jsx)(C.a,{"data-testid":"opprett nytt spill",onClick:function(){return e.push("/game")},type:"primary",icon:Object(i.jsx)(_.a,{}),children:"Lag spill"})}),Object(i.jsx)(B.b,{locale:{emptyText:Object(i.jsx)(i.Fragment,{})},itemLayout:"horizontal",dataSource:t,pagination:{pageSize:10,hideOnSinglePage:!0},renderItem:function(e){return Object(i.jsx)(B.b.Item,{children:Object(i.jsx)(B.b.Item.Meta,{avatar:Object(i.jsx)(L.a,{}),title:Object(i.jsx)(l.b,{to:"/game/".concat(e.id),children:e.name}),description:"".concat(e.name,": ").concat(new Date(e.created_at).toLocaleString())})})}})]})})]})},G=n(306),D=n(308),I=n(311),F=n(312),N=n(309),M=n(310),P=n(305),q=n(315),J=n(316),z=n(317),A=n(318),V=n(319),R=n(320),W=n(159),E=n(104),Y=n(105);function H(e){var t=Object(j.a)(e);return t.sort((function(e){return t=-1,n=1,Math.floor(Math.random()*(n+1-t)+t);var t,n})),t}function K(e,t){return H(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e?Object(j.a)(Array(e+1).keys()).filter((function(e){return e>=t})):[]}(e,t))}var Q=function(){function e(t,n){Object(E.a)(this,e),this.number=t,this.winner=n,this.created_at=Date.now()}return Object(Y.a)(e,[{key:"toJSON",value:function(){return{number:this.number,winner:this.winner,created_at:this.created_at}}}],[{key:"from",value:function(t){return Object.assign(new e,"string"===typeof t?JSON.parse(t):t)}}]),e}(),U=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Object(E.a)(this,e),this.number=t,this.winner=n,this.type=i,this.created_at=Date.now()}return Object(Y.a)(e,[{key:"toJSON",value:function(){return{number:this.number,winner:this.winner,type:this.type,created_at:Date.now()}}},{key:"localeType",get:function(){switch(this.type){case 1:return"En rad";case 2:return"To rader";case 3:return"Fullt hus";default:return null}}}],[{key:"from",value:function(t){return Object.assign(new e,"string"===typeof t?JSON.parse(t):t)}}]),e}(),X=function(){function e(t,n,i){Object(E.a)(this,e),this.name=t,this.min_ticket=n,this.max_ticket=i,this.bingo_numbers=[],this.bingo_pool=K(90),this.bingos=[],this.tombola_numbers=[],this.tombola_pool=K(i,n),this.tombolas=[],this.created_at=Date.now()}return Object(Y.a)(e,[{key:"reset",value:function(){this.bingo_numbers=[],this.bingo_pool=K(90),this.bingos=[],this.tombola_numbers=[],this.tombola_pool=K(this.max_ticket,this.min_ticket),this.tombolas=[]}},{key:"shuffleTombola",value:function(){this.tombola_pool=H(this.tombola_pool)}},{key:"shuffleBingo",value:function(){this.bingo_pool=H(this.bingo_pool)}},{key:"drawBingoNumber",value:function(){var e=this.bingo_pool.pop();return e&&(this.bingo_numbers.push(e),this.shuffleBingo()),e}},{key:"drawTombolaNumber",value:function(){var e=this.tombola_pool.pop();return e&&(this.tombola_numbers.push(e),this.shuffleTombola()),e}},{key:"getBingo",value:function(e){return this.bingos.find((function(t){return t.number===e}))}},{key:"newBingo",value:function(e){if(this.bingos.length<3)return new U(e,null,this.bingos.length+1)}},{key:"addBingo",value:function(e){var t=this.bingos.findIndex((function(t){return t.number===e.number}));this.bingos[-1!==t?t:this.bingos.length]=e}},{key:"removeBingo",value:function(e){this.bingos=this.bingos.filter((function(t){return t.number!==e.number}))}},{key:"lastBingo",value:function(){return this.bingos.slice(-1)[0]}},{key:"isLastBingo",value:function(e){return(this.lastBingo()||{}).number===e.number}},{key:"bingoAfter",value:function(e){var t=this.lastBingo();return(t&&this.bingo_numbers.indexOf(t.number))>this.bingo_numbers.indexOf(e)}},{key:"getTombola",value:function(e){return this.tombolas.find((function(t){return t.number===e}))}},{key:"newTombola",value:function(e){return new Q(e,null)}},{key:"addTombola",value:function(e){var t=this.tombolas.findIndex((function(t){return t.number===e.number}));this.tombolas[-1!==t?t:this.tombolas.length]=e}},{key:"toJSON",value:function(){return{name:this.name,min_ticket:this.min_ticket,max_ticket:this.max_ticket,bingo_numbers:this.bingo_numbers,bingo_pool:this.bingo_pool,bingos:this.bingos.map((function(e){return e.toJSON()})),tombola_pool:this.tombola_pool,tombola_numbers:this.tombola_numbers,tombolas:this.tombolas.map((function(e){return e.toJSON()})),created_at:this.created_at}}}],[{key:"from",value:function(t){var n="string"===typeof t?JSON.parse(t):t,i=n.bingos,a=void 0===i?[]:i,r=n.tombolas,o=void 0===r?[]:r,c=Object(W.a)(n,["bingos","tombolas"]);return Object.assign(new e,Object(u.a)(Object(u.a)({},c),{},{bingos:a.map((function(e){return U.from(e)})),tombolas:o.map((function(e){return Q.from(e)}))}))}}]),e}(),Z=(n(211),["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkCyan","DarkGoldenrod","DarkGray","DarkGreen","DarkGrey","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","Goldenrod","Gray","Green","GreenYellow","Grey","Honeydew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenrodYellow","LightGray","LightGreen","LightGrey","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquamarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenrod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Rebeccapurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Seashell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]),$={labelCol:{span:4},wrapperCol:{span:18}},ee={wrapperCol:{span:22,offset:0}};function te(){var e=Object(s.f)(),t=y().create,n=Object(a.useState)(),r=Object(b.a)(n,2),o=r[0],c=r[1],l=Object(a.useState)(),j=Object(b.a)(l,2),d=j[0],h=j[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v.a,{children:"Lag Nytt Spill"}),Object(i.jsx)(k.a,{justify:"center",children:Object(i.jsx)(S.a,{flex:"0 1 80vw",children:Object(i.jsxs)(G.a,Object(u.a)(Object(u.a)({},$),{},{name:"game",initialValues:{remember:!0},requiredMark:!1,onFinish:function(n){var i=n.name,a=n.min,r=n.max,o=t(new X(i,a,r).toJSON());e.push("/game/"+o.id)},children:[Object(i.jsx)(G.a.Item,{label:"Navn",name:"name",rules:[{required:!0,message:"Oppgi navn p\xe5 spill"}],children:Object(i.jsx)(D.a,{placeholder:"navn p\xe5 dette spillet"})}),Object(i.jsx)(G.a.Item,{label:"Bonger",children:Object(i.jsx)(w.a,{placement:"topLeft",title:"Brukes til \xe5 trekke tall ved Tombola",children:Object(i.jsxs)(D.a.Group,{compact:!0,children:[Object(i.jsx)(G.a.Item,{name:"min",rules:[{required:!0,message:"angi f\xf8rste bong"},{max:d,type:"number",message:"m\xe5 v\xe6re mindre siste bong"}],children:Object(i.jsx)(I.a,{type:"number",style:{width:"100%"},placeholder:"F\xf8rste",onChange:function(e){return e&&c(e)}})}),Object(i.jsx)(G.a.Item,{name:"max",rules:[{required:!0,message:"angi siste bong"},{min:o,type:"number",message:"m\xe5 v\xe6re st\xf8rre enn f\xf8rste"}],children:Object(i.jsx)(I.a,{type:"number",style:{width:"100%"},placeholder:"Siste",onChange:function(e){return e&&h(e)}})})]})})}),Object(i.jsx)(G.a.Item,Object(u.a)(Object(u.a)({},ee),{},{style:{textAlign:"right"},children:Object(i.jsx)(C.a,{type:"primary",htmlType:"submit",children:"Start spill"})}))]}))})})]})}function ne(e){var t=e.id,n=Object(s.f)(),r=y(),o=r.find,c=r.update,l=Object(a.useState)(!1),j=Object(b.a)(l,2),d=j[0],h=j[1],m=Object(a.useState)(),g=Object(b.a)(m,2),O=g[0],p=g[1],f=Object(a.useState)(),x=Object(b.a)(f,2),B=x[0],_=x[1],L=Object(a.useState)(),T=Object(b.a)(L,2),G=T[0],D=T[1],I=X.from(o(t)),M=function(e){_(),D(e)},P=function(e){_(e),D()};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(v.a,{children:[I.name," @ ",new Date(I.created_at).toLocaleString()]}),Object(i.jsx)(k.a,{justify:"center",gutter:[10,10],children:Object(i.jsx)(S.a,{flex:"0 1 80vw",children:Object(i.jsxs)(F.b,{children:[Object(i.jsx)(w.a,{placement:"bottomLeft",title:"Trekk et bingotall",children:Object(i.jsx)(C.a,{disabled:3===I.bingos.length,size:"large",onClick:function(){I.drawBingoNumber()&&c(I)},type:"default",shape:"circle",icon:Object(i.jsx)(q.a,{})})}),Object(i.jsx)(w.a,{placement:"bottomLeft",title:"Tombola",children:Object(i.jsx)(C.a,{size:"large",onClick:function(){h(!d)},type:"default",shape:"circle",icon:Object(i.jsx)(J.a,{})})}),Object(i.jsx)(w.a,{placement:"bottomLeft",title:"Lagre og lukk",children:Object(i.jsx)(C.a,{danger:!0,size:"large",onClick:function(){n.push("/")},type:"default",shape:"circle",icon:Object(i.jsx)(z.a,{})})})]})})}),Object(i.jsx)(k.a,{justify:"center",gutter:[10,10],children:Object(i.jsxs)(S.a,{flex:"0 1 80vw",children:[!G&&!B&&Object(i.jsx)("div",{style:{padding:"1vw"},children:Object(i.jsx)(ie,Object(u.a)({},{game:I,onEdit:M,onSelect:P}))}),B&&Object(i.jsxs)("div",{style:{border:"1px solid #ddd",padding:"1vw"},children:[Object(i.jsx)(ie,Object(u.a)({},{game:I,onEdit:M,onSelect:P,activeNum:B})),Object(i.jsx)(ae,{game:I,bingo:B,onSave:function(e){I.addBingo(e),c(I),P()},onClose:function(){P()}})]}),G&&Object(i.jsxs)("div",{style:{border:"1px solid #ddd",padding:"1vw"},children:[Object(i.jsx)(ie,Object(u.a)({},{game:I,onEdit:M,onSelect:P,activeNum:G})),Object(i.jsx)(ae,{game:I,bingo:G,onSave:function(e){I.addBingo(e),c(I),M()},onClose:function(){M()},onDelete:function(e){I.removeBingo(e),c(I),M()}})]})]})}),Object(i.jsx)(k.a,{justify:"center",children:Object(i.jsx)(S.a,{flex:"0 1 80vw",children:Object(i.jsx)(re,Object(u.a)({},{game:I,selected:B,onClick:M}))})}),Object(i.jsx)(k.a,{justify:"center",children:Object(i.jsx)(S.a,{flex:"0 1 80vw",children:Object(i.jsx)(se,{game:I,onClick:function(e){h(!0),p(e)}})})}),Object(i.jsx)(N.a,{title:"Tombola!",placement:"top",height:"100vh",closable:!1,onClose:function(){return h(!1)},visible:d,getContainer:!1,style:{position:"absolute"},children:Object(i.jsx)(oe,{game:I,tombola:O,onClose:function(){return h(!1)}})})]})}function ie(e){var t=e.game,n=e.onEdit,a=e.onSelect,r=e.activeNum;return t.bingo_numbers.map((function(e){var o=t.bingoAfter(e),c=t.getBingo(e),l=t.newBingo(e);return c?Object(i.jsx)(w.a,{title:!o&&"Trykk for \xe5 redigere Bingo!",children:Object(i.jsx)(M.a,{style:{backgroundColor:"#eee",color:"black"},count:3!==c.type?c.type+"x":Object(i.jsx)(A.a,{}),offset:[-10,2],children:Object(i.jsx)(C.a,{danger:!0,onClick:function(){return n(c)},type:"default",size:"large",shape:"circle",children:e})})},e):Object(i.jsx)(w.a,{title:o||!l?"":"Trykk for \xe5 angi Bingo!",children:Object(i.jsx)(C.a,{disabled:o||!l,onClick:function(){return a(l)},type:e===r?"primary":"default",size:"large",shape:"circle",children:e})},e)}))}function ae(e){var t=e.game,n=e.bingo,a=e.onSave,r=e.onClose,o=e.onDelete,c=void 0===o?function(){}:o,l=t.getBingo(n.number),s=l&&!t.isLastBingo(n);return Object(i.jsxs)(G.a,Object(u.a)(Object(u.a)({style:{padding:"1vw"},initialValues:n.toJSON()},$),{},{name:"bingo",requiredMark:!1,onFinish:function(e){n.winner=e.winner,a(n)},children:[Object(i.jsx)(G.a.Item,{label:"Vinnertall",children:Object(i.jsx)(C.a,{danger:l,type:"primary",size:"medium",shape:"circle",children:n.number})}),Object(i.jsx)(G.a.Item,{label:"Type",disabled:!0,children:Object(i.jsx)(D.a,{value:n.localeType,disabled:!0})}),Object(i.jsx)(G.a.Item,{label:"Vinner",name:"winner",initialValue:n.winner,rules:[{required:!0,message:"Oppgi navn p\xe5 vinner"}],children:Object(i.jsx)(D.a,{disabled:s,placeholder:"navn p\xe5 vinner"})}),Object(i.jsx)(G.a.Item,Object(u.a)(Object(u.a)({},ee),{},{style:{textAlign:"right"},children:Object(i.jsxs)(F.b,{children:[Object(i.jsx)(C.a,{disabled:s,type:"primary",htmlType:"submit",icon:Object(i.jsx)(z.a,{}),children:"Lagre"}),Object(i.jsx)(C.a,{onClick:r,type:"default",icon:Object(i.jsx)(V.a,{}),children:"Lukk"}),l&&Object(i.jsx)(C.a,{danger:!0,disabled:s,onClick:function(){return c(n)},type:"default",icon:Object(i.jsx)(R.a,{})})]})}))]}))}function re(e){var t=e.game,n=e.onClick;return Object(i.jsx)(B.b,{locale:{emptyText:Object(i.jsx)(i.Fragment,{})},itemLayout:"horizontal",dataSource:t.bingos,renderItem:function(e){return Object(i.jsx)(B.b.Item,{children:Object(i.jsx)(B.b.Item.Meta,{avatar:Object(i.jsx)(M.a,{style:{backgroundColor:"#eee",color:"black"},count:3!==e.type?e.type+"x":Object(i.jsx)(A.a,{}),offset:[-10,2],children:Object(i.jsx)(C.a,{onClick:function(){return n(e)},danger:!0,type:"default",size:"large",shape:"circle",children:e.number})}),title:e.winner,description:"".concat(e.localeType,": ").concat(new Date(e.created_at).toLocaleString())})})}})}function oe(e){var t=e.game,n=e.onClose,r=e.tombola,o={height:"160px",lineHeight:"160px",textAlign:"center",background:"#364d79"},c={height:"140px",display:"flex",alignItems:"center",justifyContent:"center"},l=y().update,s=Object(a.useRef)(null),u=Object(a.useState)(!1),j=Object(b.a)(u,2),d=j[0],h=j[1],m=Object(a.useState)(),g=Object(b.a)(m,2),O=g[0],p=g[1];return Object(a.useEffect)((function(){r&&p(r.number)}),[r]),Object(a.useEffect)((function(){var e=0,n=setInterval((function(){console.log({ticks:e}),d||clearInterval(n),e>50?(h(!1),p(t.drawTombolaNumber())):(d&&s.current.next(),e+=1)}),200);return function(){e=0,clearInterval(n)}}),[d,t]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k.a,{justify:"center",gutter:[10,10],children:Object(i.jsx)(S.a,{flex:"0 1 80vw",children:O?Object(i.jsx)(le,{game:t,number:O,onSave:function(e){t.addTombola(e),l(t),p()},onClose:function(){p()}}):Object(i.jsxs)(i.Fragment,{children:[d&&Object(i.jsx)(C.a,{danger:!0,onClick:function(){h(!1),p(t.drawTombolaNumber())},type:"default",children:"Stopp"}),Object(i.jsx)(C.a,{loading:d,onClick:function(){p(),h(!0)},type:"primary",children:"Kj\xf8r"}),Object(i.jsx)(C.a,{disabled:d,onClick:n,type:"default",children:"Lukk"})]})})}),Object(i.jsx)(k.a,{justify:"center",gutter:[10,10],children:Object(i.jsx)(S.a,{flex:"0 1 80vw",children:O?Object(i.jsx)("div",{children:Object(i.jsx)("div",{style:o,children:Object(i.jsx)("div",{style:c,className:"box",children:Object(i.jsx)(ce,{number:O,className:"tombolaStop"})})})}):Object(i.jsx)(P.a,{ref:s,children:t.tombola_pool.slice(0,33).map((function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{style:o,children:Object(i.jsx)("div",{style:c,className:"box",children:Object(i.jsx)(ce,{number:e,className:d?"tombolaSpin":""})})})},e)}))})})}),Object(i.jsx)(k.a,{justify:"center",gutter:[10,10],children:Object(i.jsx)(S.a,{flex:"0 1 80vw",children:Object(i.jsx)(se,{game:t,reverse:!0,onClick:function(e){var t=e.number;return p(t)}})})})]})}function ce(e){var t,n=e.number,a=e.className,r=e.style,o=Object(u.a)(Object(u.a)({},{display:"flex",alignItems:"center",justifyContent:"center",height:"75px",width:"75px",color:"black",textShadow:"1px 1px 1px #FFF, -1px -1px 1px #FFF, -1px 1px 1px #FFF, 1px -1px 1px #FFF",fontSize:"22px",fontWeight:"bold",borderRadius:"50%",backgroundColor:"red",border:"thin solid #ddd"}),r);return Object(i.jsx)("div",{style:Object(u.a)(Object(u.a)({},o),{},{backgroundColor:(t=n,Z[t%Z.length])}),className:a,children:n})}function le(e){var t=e.game,n=e.number,a=e.onSave,r=e.onClose,o=t.getTombola(n)||t.newTombola(n);return Object(i.jsxs)(G.a,Object(u.a)(Object(u.a)({style:{padding:"1vw"},initialValues:o.toJSON()},$),{},{name:"tombola",requiredMark:!1,onFinish:function(e){o.winner=e.winner,a(o)},children:[Object(i.jsx)(G.a.Item,{label:"Vinnertall",children:Object(i.jsx)(ce,{number:o.number})}),Object(i.jsx)(G.a.Item,{label:"Vinner",name:"winner",initialValue:o.winner,rules:[{required:!0,message:"Oppgi navn p\xe5 vinner"}],children:Object(i.jsx)(D.a,{placeholder:"navn p\xe5 vinner"})}),Object(i.jsx)(G.a.Item,Object(u.a)(Object(u.a)({},ee),{},{style:{textAlign:"right"},children:Object(i.jsxs)(F.b,{children:[Object(i.jsx)(C.a,{type:"primary",htmlType:"submit",icon:Object(i.jsx)(z.a,{}),children:"Lagre"}),Object(i.jsx)(C.a,{disabled:!t.getTombola(n),onClick:r,type:"default",icon:Object(i.jsx)(V.a,{}),children:"Lukk"})]})}))]}))}function se(e){var t=e.game,n=e.reverse,a=e.onClick;return Object(i.jsx)(B.b,{locale:{emptyText:Object(i.jsx)(i.Fragment,{})},itemLayout:"horizontal",dataSource:n?Object(j.a)(t.tombolas).reverse():t.tombolas,pagination:{position:"top",pageSize:4,hideOnSinglePage:!0},renderItem:function(e){return Object(i.jsx)(B.b.Item,{children:Object(i.jsx)(B.b.Item.Meta,{avatar:Object(i.jsx)(ce,{number:e.number,style:{height:"40px",width:"40px",fontSize:"14px",fontWeight:"normal",cursor:"pointer"}}),onClick:function(){a&&a(e)},title:e.winner,description:new Date(e.created_at).toLocaleString()})})}})}var ue=function(){var e=Object(s.g)().id,t=parseInt(e);return t?Object(i.jsx)(ne,{id:t}):Object(i.jsx)(te,{})};n(299);var be=function(){return Object(i.jsx)(x,{children:Object(i.jsx)(l.a,{basename:"/",children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/",children:Object(i.jsx)(T,{})}),Object(i.jsx)(s.a,{path:"/game/:id",children:Object(i.jsx)(ue,{})}),Object(i.jsx)(s.a,{path:"/game",children:Object(i.jsx)(ue,{})})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,321)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(be,{})}),document.getElementById("root")),je(console.log)}},[[300,1,2]]]);
//# sourceMappingURL=main.7d96069f.chunk.js.map