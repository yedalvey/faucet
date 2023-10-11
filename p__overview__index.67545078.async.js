"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3065],{28469:function(e,n,t){t.d(n,{a:function(){return p}});var i=t(38416),a=t.n(i),r=t(42122),c=t.n(r),s=t(27424),I=t.n(s),l=t(67294),u=t(4480),M=t(95591),o=t(60088),d=t(7998),N=t(87797),j=t(74595),g=t(37432),m=t(59465),D=t(36493),y=t(239),x=function(){var e=(0,g.x)().chainId,n=(0,m.ZP)().library,t=j.I.useContainer().platform,i=(0,M.ZP)("".concat(e),(function(){return(0,N.t)(e,n)})).data,r=(0,u.FV)(y.O7),s=I()(r,2)[1],x=(0,u.FV)(y.tr),L=I()(x,2)[1],p=(0,u.FV)(y.bI),w=I()(p,2),A=w[0],h=w[1],S=i&&(null==i?void 0:i.length)>0?"subscribeTickerBatch":null;(0,o.Z)([S,t],(function(e){var n=I()(e,2),t=n[0],r=n[1];if(!t)return function(){};var l=i.map((function(e){return(0,D.do)(null==e?void 0:e.name).toLowerCase()}));return(0,d.CY)(l,r,(function(e){s((function(n){return c()(c()({},n),{},a()({},e.symbol,e))}))}))})),(0,l.useEffect)((function(){L(i)}),[i]),(0,l.useEffect)((function(){i&&i.length&&(A||h(i[0]),i.find((function(e){return e.address===A.address}))||h(i[0]))}),[i,A])},L=t(85893),p=function(){return x(),(0,L.jsx)(L.Fragment,{})}},16269:function(e,n,t){t.r(n),t.d(n,{default:function(){return Pe}});var i=t(17061),a=t.n(i),r=t(17156),c=t.n(r),s=t(27424),I=t.n(s),l=t(94184),u=t.n(l),M=t(67294),o=t(4480),d=t(42122),N=t.n(d),j=t(27484),g=t.n(j),m=t(15643),D=t(61895),y=t(24069),x=t(28722),L=function(){var e=g().utc().startOf("day");return{to:g().utc().endOf("day").valueOf(),from:e.valueOf()}},p=function(){var e=c()(a()().mark((function e(n){var t,i,r,c,s,I,l,u,M;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L(),i=t.from,r='\n  query MyQuery {\n    summaries24h: summaries(where:{id_gte:"hourly:'.concat(i,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n      tradingLPVolume\n    }\n    summariesTotal: summaries(where:{period: "total"}){\n      openInterest\n      trades\n      tradingVolume\n      tradingLPVolume\n      uniqueUsers\n    }\n  }\n '),c=(0,x.x7)(n),e.next=5,(0,x.Dw)(c,r);case 5:return s=e.sent,I=s.summariesTotal,l=s.summaries24h,u=w(l||[]),M=w(I),e.abrupt("return",N()({openInterestTotal:null==M?void 0:M.openInterest,tradesTotal:null==M?void 0:M.trades,tradingVolumeTotal:null==M?void 0:M.tradingVolume,uniqueUsersTotal:null==M?void 0:M.uniqueUsers},u));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(e){var n,t=null==e?void 0:e.reduce((function(e,n){var t,i,a=n.tradingVolume,r=n.tradingLPVolume,c=null===(t=e.tradingVolume)||void 0===t?void 0:t.plus((0,D.Q6)((0,y.dN)((0,y._b)(a||"0"),18))).plus((0,D.Q6)((0,y.dN)((0,y._b)(r||"0"),6)));return e.openInterest=e.openInterest.add((0,y._b)(n.openInterest)),e.trades+=n.trades,e.tradingVolume=c,e.uniqueUsers+=null!==(i=null==n?void 0:n.uniqueUsers)&&void 0!==i?i:0,e}),{openInterest:(0,y._b)(0),trades:0,tradingVolume:(0,D.Q6)(0),uniqueUsers:0});return t?{openInterest:(0,y.dN)(null==t?void 0:t.openInterest,18),trades:null==t?void 0:t.trades,tradingVolume:(null===(n=t.tradingVolume)||void 0===n?void 0:n.toFixed(2,1))||"0",uniqueUsers:null==t?void 0:t.uniqueUsers}:t},A=function(){var e=c()(a()().mark((function e(n,t){var i,r,c,s,I,l,u,M,o,d,j,g,D;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=L(),i.to,r=i.from,c='marketInfos(where:{id_gte:"hourly:'.concat(r,'", period: "hourly"})\n  {\n    openInterest\n    period\n    trades\n    tradingVolume\n    market\n    id\n  }'),'totalOpenInterest: marketInfos(where:{period: "weekly"})\n      {\n      openInterest\n      market\n      }\n    ',s="query MyQuery {\n    ".concat(c,"\n    ").concat('totalOpenInterest: marketInfos(where:{period: "weekly"})\n      {\n      openInterest\n      market\n      }\n    ',"\n  }"),I=(0,x.x7)(t),e.next=7,(0,x.Dw)(I,s);case 7:return l=e.sent,u=l.marketInfos,M=l.totalOpenInterest,o=(0,m.Z)(u,"market"),d=(0,m.Z)(M,"market"),j={name:"ETH",key:"Ethereum",coinName:"ETH",logo:"ETH"},g={ETH:"Ethereum",BTC:"Bitcoin"},D=null==n?void 0:n.map((function(e){var n,t=e.name.split("/")[0]||"";return N()(N()(N()({},j),w(o[e.address.toLowerCase()])),{},{name:t,coinName:t,logo:e.name,marketName:g[t],openInterest:null===(n=w(d[e.address.toLowerCase()]))||void 0===n?void 0:n.openInterest})})),e.abrupt("return",D);case 16:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=t(93086),S=Object.defineProperty,T=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,z=(e,n,t)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const E=e=>M.createElement("svg",((e,n)=>{for(var t in n||(n={}))b.call(n,t)&&z(e,t,n[t]);if(T)for(var t of T(n))f.call(n,t)&&z(e,t,n[t]);return e})({width:21,height:20,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),M.createElement("path",{d:"M9.55 2.632a.557.557 0 0 1 .611-.072.6.6 0 0 1 .325.543v13.793a.607.607 0 0 1-.34.55.55.55 0 0 1-.618-.099c-.007-.008-.759-.706-1.596-1.419-1.439-1.227-1.884-1.443-1.978-1.479h-2.48A.481.481 0 0 1 3 13.955V6.047c0-.274.213-.496.473-.496h2.103c.096-.035.57-.243 2.19-1.493A68.342 68.342 0 0 0 9.55 2.632Zm-5.285 4.19v6.357h1.918l.217.082c.418.159 1.117.647 2.35 1.698.156.133.315.27.47.407V4.531c-.232.183-.468.369-.683.535C7.163 6.124 6.41 6.605 5.988 6.751l-.2.069H4.266v.002ZM15.19 9.996a4.404 4.404 0 0 1-.567 2.192 4.376 4.376 0 0 1-1.58 1.616.885.885 0 0 1-.26.083c-.034.004-.034.004-.07.004a.674.674 0 0 1-.666-.688c0-.241.12-.462.324-.592a3.004 3.004 0 0 0 1.484-2.614c0-1.083-.557-2.062-1.44-2.587a.693.693 0 0 1-.329-.598c0-.38.296-.69.666-.69.114 0 .253.05.367.114 1.272.776 2.07 2.196 2.07 3.76Zm-1.023-6.418c.137 0 .247.043.383.128C16.67 5.008 18 7.382 18 9.998c0 2.62-1.336 4.998-3.464 6.299a.678.678 0 0 1-.38.126.67.67 0 0 1-.615-.427.678.678 0 0 1-.048-.26c0-.26.156-.49.375-.617 1.728-1.055 2.812-2.989 2.812-5.12 0-2.137-1.086-4.07-2.81-5.123a.697.697 0 0 1-.366-.61c0-.38.294-.688.662-.688Z",fill:"#9197A3"}));var C=t(87084),Z=t(28469),v=t(47693),O=t(37432),_=t(64685),G=t(59465),k=t(98330),P=t(22537),Y=t(239),V=t(41519),W=(0,o.cn)({key:"marketInfosAtom",default:[],effects_UNSTABLE:[V.I]}),B=(0,o.cn)({key:"bannerInfoAtom",default:void 0,effects_UNSTABLE:[V.I]}),U="bg___btVzi",Q="overview___Eeiei",J="header____Yrjj",R="titleWrapper___vmTaH",H="title___i6w1f",X="subTitle___GaHN7",F="text___YylAg",q="notification___yISWB",K="notification_a___NPEO3",$=t(38416),ee=t.n($),ne=t(95591),te=t(67244),ie=t(10322),ae=t.p+"static/cell_icon.cddc2390.png",re=t(48268),ce={container:"container___XgrV6",card:"card___KCWUl",tradingVolumeImg:"tradingVolumeImg___RQMY9",neg:"neg___ZCIZ3",f28:"f28___onJVz"},se=t(85893),Ie=(0,te.eh)(),le=function(e){var n,t=e.info,i=e.className,a=(0,k.Z)().t,r=(0,O.x)().chainId,c=(0,G.ZP)().library,s=(0,te.zd)(Ie),I=null==s?void 0:s.data,l=(0,ne.ZP)([r],(function(){return(0,te.v)(c,r)}),{refreshInterval:0,revalidateOnFocus:!1}).data,M=[{title:a("Total Trading Volume"),text1:(0,D.dp)(null==t?void 0:t.tradingVolumeTotal).display({prefix:"$"}),text2:(0,D.dp)(null==I?void 0:I.totalVolume).display({prefix:"+$"}),extra:(0,se.jsx)("div",{className:ce.tradingVolumeImg,children:(0,se.jsx)("img",{width:190,height:92,src:ae})}),className:"df fl1",props:{}},{title:a("Open Interest"),text1:(0,se.jsx)(re.ZP,{value:null==t?void 0:t.openInterestTotal,prefix:"$"}),text2:(0,se.jsx)(re.ZP,{value:null==I?void 0:I.openInterest,prefix:I&&I.openInterest>0?"+$":"$",style:{color:I&&I.openInterest>0?"#E9BF82":"#fafafa"}})},{title:a("Assets Under Management"),text1:(0,se.jsx)(re.ZP,{prefix:"$",value:l}),text2:(n=null==I?void 0:I.lpVolume,n&&0!==Number(n)?(0,se.jsxs)("span",{className:u()(ce.price,ee()({},ce.neg,n<0)),children:[n>0?"+":"-",(0,ie.uf)(Math.abs(n),{currency:!0,compact:!0,hiddenDollarSign:!1})]}):(0,se.jsx)("span",{className:ce.price,children:"+$0.00"}))}];return(0,se.jsx)("section",{className:i,children:(0,se.jsx)("ul",{className:u()(ce.container,"w100"),children:M.map((function(e){return(0,se.jsxs)("li",N()(N()({className:u()(ce.card,e.className,"df br8")},e.props),{},{children:[(0,se.jsxs)("div",{className:"df fdc c100",children:[(0,se.jsx)("span",{className:"c90 f12 fw2",children:e.title}),(0,se.jsx)("span",{className:"fl1 c200 fw3 f28 mb-8",children:e.text1}),(0,se.jsxs)("span",{className:"c300 fw3 f18",children:[e.text2," ",(0,se.jsx)("span",{className:"c90 fw2",children:"(24h)"})]})]}),e.extra]}))}))})})},ue=t(91978),Me=t(3410),oe=t.p+"static/banner1h5.b3180e09.png",de=t.p+"static/banner1ipad.4e18f92a.png",Ne=t.p+"static/banner1web.d0946634.png",je=t.p+"static/banner2h5.7ef852a7.png",ge=t.p+"static/banner2ipad.eaea9ec5.png",me=t.p+"static/banner2web.eb8a6dc7.png",De=t.p+"static/banner-H5.7ccb6d7f.png",ye=t.p+"static/banner-ipad.e9bdc223.png",xe=t.p+"static/banner-web.530806d9.png",Le={container:"container___VxYR6",carouselDots:"carouselDots___FlG10",imgBox:"imgBox___c11In"},pe=function(e){var n=e.className,t=(0,_.W)(),i=t.isMobile,a=t.isIpad,r=((0,k.Z)().t,(0,M.useMemo)((function(){return i&&[{src:De,href:P.Ew.zealy},{src:oe,href:P.Ew.BugBounty},{src:je,href:"/#/referrals"}]||a&&[{src:ye,href:P.Ew.zealy},{src:de,href:P.Ew.BugBounty},{src:ge,href:"/#/referrals"}]||[{src:xe,href:P.Ew.zealy},{src:Ne,href:P.Ew.BugBounty},{src:me,href:"/#/referrals"}]}),[i,a])),c=(0,v.A)();return(0,se.jsx)(ue.Z,{autoplay:!0,autoplaySpeed:5e3,dots:{className:Le.carouselDots},className:u()(Le.container,n,"br8 ovh"),afterChange:function(e){console.log(e)},children:r.map((function(e,n){return e.to?(0,se.jsx)(Me.OL,{to:e.to,className:Le.imgBox,target:"_blank",children:(0,se.jsx)("img",{src:e.src,width:"100%",height:"100%",className:u()(Le.img,"br8 ovh")})},n):(0,se.jsx)("a",{href:e.href,target:"_blank",className:Le.imgBox,onMouseDown:function(){return function(e){c("home_click_banner0".concat(e+1),{event_name:"home_banner0".concat(e+1)})}(n)},children:(0,se.jsx)("img",{src:e.src,width:"100%",height:"100%",className:"br8"})},n)}))})},we=t(10581),Ae=t(92780),he=t(94320),Se=t(36493),Te="coinNameBox___JnEK2",be="coinName___uNh7p",fe="title___X3Idr",ze="table___PFkHZ",Ee=function(e){var n=e.loading,t=e.className,i=e.marketInfo,a=(0,_.W)().isMobile,r=(0,o.sJ)(Y.O7),c=(0,k.Z)().t,s=(0,v.A)(),I=[{title:c("Market"),dataIndex:"coinName",key:"coinName",render:function(e,n){return(0,se.jsxs)("div",{className:Te,children:[(0,se.jsx)(Ae.Z,{symbol:(0,Se.D4)(n.logo)}),(0,se.jsxs)("span",{className:be,children:[n.coinName,"/USD"]})]})}},{title:c("indexPrice"),render:function(e,n){var t,i,a=null===(t=r[null===(i=(0,Se.do)(n.name))||void 0===i?void 0:i.toLowerCase()])||void 0===t?void 0:t.indexPrice;return(0,se.jsx)(re.ZP,{value:a,prefix:"$"})}},{title:c("24h Change"),render:function(e,n){var t,i,a,c=null==r||null===(t=r[null===(a=(0,Se.do)(n.name))||void 0===a?void 0:a.toLowerCase()])||void 0===t||null===(i=t["24ChangeRate"])||void 0===i?void 0:i.toFixed(2);return c?-0==+c?(0,se.jsxs)("span",{className:"color-red-400",children:["-","0.00","%"]}):+c>=0?(0,se.jsxs)("span",{className:"color-green-400",children:["+",c,"%"]}):(0,se.jsxs)("span",{className:"color-red-400",children:[c,"%"]}):"-"}},{title:c("24h Trades"),dataIndex:"trades",key:"trades",render:function(e){return(0,se.jsx)(se.Fragment,{children:null!=e?e:"-"})}},{title:c("24h Volume"),dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,se.jsx)(re.ZP,{value:e,prefix:"$"})}},{title:c("Open Interest"),dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,se.jsx)(re.ZP,{value:e,prefix:"$"})}}];return(0,se.jsxs)("section",{className:t,onMouseDown:function(){s("home_click_trading_list",{event_name:"home_trading_list"})},children:[(0,se.jsxs)("h2",{className:u()(fe,"df fdc c200 f24"),children:[c("Perpetual Trading"),(0,se.jsx)("span",{className:"c120 f14 fw2",children:c("We are continuously launching new perpetual contracts markets.")})]}),(0,se.jsx)(he.Z,{emptyText:c("No data"),className:ze,columns:a?I.slice(0,3):I,dataSource:i,pagination:!1,bordered:!1,loading:n,onRow:function(e){return{onClick:function(){return we.m.push("/trade?symbol=".concat(e.name))}}}})]})},Ce=t(15746),Ze=t.p+"static/home_img4.e0f36cde.png",ve=t(77438),Oe=t(57247);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var _e=t.p+"static/icon_BLP.7e612f1c.png",Ge={earnContainer:"earnContainer___b3aQR",explore:"explore___H7alM",getStart:"getStart___Ovl0P",linksContainer:"linksContainer___d4oii",left:"left___J0lW4",linkBtns:"linkBtns___rJgRA",icons:"icons___DGdPG",icon:"icon___yy8S4",header:"header___r48SW",col:"col___yr0Nd",card:"card___aD8hv",card_top:"card_top___ibmwe",cardTopLeft:"cardTopLeft___nFxHN",border:"border___GYUeF",nftContent:"nftContent___HvLu9",text:"text___q8LJd",earn_wrap:"earn_wrap___I6Y6k",explore_wrap:"explore_wrap___OQs2V",right:"right____uUPg"},ke=function(){var e=(0,k.Z)().t,n=(0,M.useMemo)((function(){return function(e){return[{icon:_e,title:"BLP",link:"/earn",value:"20.00%",label:"BLP Vault APR",confirmBtn:{text:e("Earn Now")},text:e("Purchase BLP to provide liquidity and earn 100% of the platform fee distribution.")},{icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGVsbGlwc2Ugb3BhY2l0eT0iLjciIGN4PSIyOCIgY3k9IjQ2LjM1OSIgcng9IjI4IiByeT0iNy4zOTIiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNNTMgNDEuNWMwIDQuMTQyLTExLjQxNyA3LjUtMjUuNSA3LjVTMiA0NS42NDIgMiA0MS41QzIgMzcuMzU4IDEzLjQxNyAzNCAyNy41IDM0UzUzIDM3LjM1OCA1MyA0MS41WiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTAuNzEgNDQuMDA5YzEuMjQ0LS44NjUgMS43OS0xLjcyIDEuNzktMi41MDkgMC0uNzg5LS41NDYtMS42NDQtMS43OS0yLjUwOS0xLjIyOC0uODU0LTMuMDM4LTEuNjQ0LTUuMzItMi4zMTUtNC41NTctMS4zNC0xMC44ODItMi4xNzYtMTcuODktMi4xNzYtNy4wMDggMC0xMy4zMzMuODM2LTE3Ljg5IDIuMTc2LTIuMjgyLjY3MS00LjA5MiAxLjQ2LTUuMzIgMi4zMTUtMS4yNDQuODY1LTEuNzkgMS43Mi0xLjc5IDIuNTA5IDAgLjc4OS41NDYgMS42NDQgMS43OSAyLjUwOSAxLjIyOC44NTQgMy4wMzggMS42NDQgNS4zMiAyLjMxNSA0LjU1NyAxLjM0IDEwLjg4MiAyLjE3NiAxNy44OSAyLjE3NiA3LjAwOCAwIDEzLjMzMy0uODM2IDE3Ljg5LTIuMTc2IDIuMjgyLS42NzEgNC4wOTItMS40NiA1LjMyLTIuMzE1Wk0yNy41IDQ5QzQxLjU4MyA0OSA1MyA0NS42NDIgNTMgNDEuNWMwLTQuMTQyLTExLjQxNy03LjUtMjUuNS03LjVTMiAzNy4zNTggMiA0MS41QzIgNDUuNjQyIDEzLjQxNyA0OSAyNy41IDQ5WiIgZmlsbD0idXJsKCNjKSIvPjxnIG9wYWNpdHk9Ii44MyIgZmlsdGVyPSJ1cmwoI2QpIj48ZWxsaXBzZSBjeD0iMjcuNSIgY3k9IjQwIiByeD0iMTQuNSIgcnk9IjMiIGZpbGw9IiMwRDBGMTQiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2UpIj48cGF0aCBkPSJNMjQuNjEyIDI4LjY5MmMtLjkyNC02LjkwOCA4LjQ0OC04LjQ0OCA4LjQ0OC0xMi43MTYgMC0yLjY4NC0yLjExMi00LjE4LTUuNTg4LTQuMTgtMi42ODQgMC00Ljg4NCAxLjIzMi03LjA0IDMuNDc2bC0zLjYwOC0zLjNDMTkuNjQgOC43MTYgMjMuNTEyIDYuNTYgMjguMjIgNi41NmM2LjM4IDAgMTEuMDQ0IDIuOTkyIDExLjA0NCA4Ljg0NCAwIDYuNDI0LTkuNjM2IDcuMjE2LTguOTMyIDEzLjI4OGgtNS43MlptMi45MDQgMTEuNzQ4Yy0yLjI4OCAwLTMuOTE2LTEuNjI4LTMuOTE2LTMuOTE2IDAtMi4yODggMS42NzItMy44NzIgMy45MTYtMy44NzIgMi4yIDAgMy44NzIgMS41ODQgMy44NzIgMy44NzJzLTEuNjcyIDMuOTE2LTMuODcyIDMuOTE2WiIgZmlsbD0idXJsKCNmKSIvPjwvZz48cGF0aCBvcGFjaXR5PSIuNDMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYgOS43NWEuMjUuMjUgMCAwIDEgLjI1LjI1djM4YS4yNS4yNSAwIDEgMS0uNSAwVjEwYS4yNS4yNSAwIDAgMSAuMjUtLjI1WiIgZmlsbD0idXJsKCNnKSIvPjxwYXRoIG9wYWNpdHk9Ii4yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTQuNzVhLjI1LjI1IDAgMCAxIC4yNS4yNXYyN2EuMjUuMjUgMCAxIDEtLjUgMFYxNWEuMjUuMjUgMCAwIDEgLjI1LS4yNVoiIGZpbGw9InVybCgjaCkiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM5IDI4Ljc1YS4yNS4yNSAwIDAgMSAuMjUuMjV2MTlhLjI1LjI1IDAgMSAxLS41IDBWMjlhLjI1LjI1IDAgMCAxIC4yNS0uMjVaIiBmaWxsPSJ1cmwoI2kpIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCAyNS43NWEuMjUuMjUgMCAwIDEgLjI1LjI1djE3YS4yNS4yNSAwIDEgMS0uNSAwVjI2YS4yNS4yNSAwIDAgMSAuMjUtLjI1WiIgZmlsbD0idXJsKCNqKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjI4IiB5MT0iMzguNTUiIHgyPSIyOCIgeTI9IjUyLjY5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiMwRjEwMTQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNzNCNDMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjI3LjUiIHkxPSIzMy41NzciIHgyPSIyNy41IiB5Mj0iNDkuNDk1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzE4MUExRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM3M0I0MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMjcuNSIgeTE9IjM0IiB4Mj0iMjcuNSIgeTI9IjUzLjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZiIgeDE9IjE2LjgyNCIgeTE9IjYuNTYiIHgyPSI0OC4yOTIiIHkyPSIyNy44NzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZGMEQzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDU5NTNCIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSI0Ni41IiB5MT0iMTAiIHgyPSI0Ni41IiB5Mj0iNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZFNDg0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iaCIgeDE9IjguNSIgeTE9IjE1IiB4Mj0iOC41IiB5Mj0iNDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZFNDg0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iaSIgeDE9IjM5LjUiIHkxPSIyOSIgeDI9IjM5LjUiIHkyPSI0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkU0ODQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJqIiB4MT0iMTQuNSIgeTE9IjI2IiB4Mj0iMTQuNSIgeTI9IjQzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGRTQ4NCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJkIiB4PSI2IiB5PSIzMCIgd2lkdGg9IjQzIiBoZWlnaHQ9IjIwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzLjUiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xMTc4XzMxOTI3Ii8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZSIgeD0iMTYuODI0IiB5PSI2LjU2IiB3aWR0aD0iMjIuNDQiIGhlaWdodD0iMzMuODgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz48ZmVPZmZzZXQgZHg9Ii4zIiBkeT0iLjMiLz48ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAxIDAiLz48ZmVCbGVuZCBpbjI9InNoYXBlIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3dfMTE3OF8zMTkyNyIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=",title:"BLE",link:"/earn",value:"10.00%",confirmBtn:{disabled:!0,text:e("Coming Soon")},label:e("BLE Vault APR"),text:e("Stake BLE and earn Escrowed BLEX rewards and x% of the platform fee distribution.")}]}(e)}),[e]),t=(0,M.useMemo)((function(){return function(e){return[{title:e("Asset Safety"),icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjkwNSA1LjAzNGExIDEgMCAwIDAgLjgxNi0xLjgyNkMxNi41NzYuOTEyIDEwLjMyNiAxLjg3NSA2LjEgNi4xIDEuODc1IDEwLjMyNi45MTIgMTYuNTc2IDMuMjA4IDIxLjcyYTEgMSAwIDAgMCAxLjgyNy0uODE1Yy0xLjk3LTQuNDEyLTEuMTQxLTkuNzcgMi40OC0xMy4zOWExMi4wMTUgMTIuMDE1IDAgMCAxIDEzLjM5LTIuNDhaTTI4Ljc5MiAxMC4yOGExIDEgMCAwIDAtMS44MjYuODE1IDEyLjAxNSAxMi4wMTUgMCAwIDEtMi40OCAxMy4zOWMtMy42MjIgMy42MjEtOC45NzkgNC40NS0xMy4zOSAyLjQ4YTEgMSAwIDEgMC0uODE2IDEuODI3YzUuMTQ0IDIuMjk2IDExLjM5NCAxLjMzMyAxNS42Mi0yLjg5MyA0LjIyNS00LjIyNSA1LjE4OC0xMC40NzUgMi44OTItMTUuNjJaIiBmaWxsPSIjRTlCRjgyIi8+PHBhdGggZD0iTTI0LjA5NCA5LjI5YTEgMSAwIDEgMC0xLjQxNC0xLjQxNWwtMi43MzMgMi43MzMtMi42Ni0yLjY2YTMuODE0IDMuODE0IDAgMCAwLTIuNjkxLTEuMTE4IDMuNzk4IDMuNzk4IDAgMCAwLTMuODAzIDMuODAzIDMuODE0IDMuODE0IDAgMCAwIDEuMTAyIDIuNjc2bDYuNzgxIDYuNzgxYy4zNC4zNC41MzEuOC41MzIgMS4yOGExLjc5NyAxLjc5NyAwIDAgMS0xLjggMS44Yy0uNDgtLjAwMS0uOTQtLjE5Mi0xLjI4LS41MzJsLTguMS04LjFhMSAxIDAgMSAwLTEuNDE1IDEuNDE0bDMuOTk1IDMuOTk1LTIuNzMzIDIuNzMzYTEgMSAwIDEgMCAxLjQxNCAxLjQxNGwyLjczNC0yLjczMyAyLjcwNiAyLjcwNy4wMTcuMDE2YTMuODE0IDMuODE0IDAgMCAwIDIuNjU5IDEuMDg2IDMuNzk4IDMuNzk4IDAgMCAwIDMuODAzLTMuODA0IDMuODE0IDMuODE0IDAgMCAwLTEuMTE4LTIuNjlsLTYuNzY1LTYuNzY2Yy0uMzQtLjM0LS41MzEtLjgtLjUzMi0xLjI4YTEuNzk4IDEuNzk4IDAgMCAxIDEuOC0xLjhjLjQ3OS4wMDEuOTQuMTkyIDEuMjguNTMybDguMTMxIDguMTMyYTEgMSAwIDAgMCAxLjQxNC0xLjQxNWwtNC4wNTctNC4wNTcgMi43MzMtMi43MzNaIiBmaWxsPSIjRTlCRjgyIi8+PC9zdmc+",text:e("BLEX is an on-chain decentralized exchange for perpetual futures, ensuring secure funds and transparent data.")},{title:e("Smooth Trading"),icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjM3NCA5Ljc3YTEgMSAwIDAgMCAwLTEuNDE1bC00LTRhMSAxIDAgMSAwLTEuNDE1IDEuNDE1bDIuMjc3IDIuMjc2Yy0xLjkyNS0uMDA5LTMuNjkuMDM1LTUuMjcxLjQ0Ni0yLjM1NC42MS00LjI4MiAyLjAwOS02LjA1NiA0Ljg5LS4wOTIuMTQ4LS4xODIuMjk1LS4yNy40NGwtLjIxLjMzOWMtLjg0LTEuMjU4LTEuNjkyLTIuMzg1LTIuNjQtMy4zMDhDOS45NjYgOS4wNzMgNy43ODQgOC4wMyA0LjY5OSA4LjAzYTEgMSAwIDEgMCAwIDJjMi41NCAwIDQuMjI3LjgyMSA1LjY5NSAyLjI1NCAxLjAwMi45NzcgMS44OTggMi4yMyAyLjg2OSAzLjc0Ni0uOTcxIDEuNTE2LTEuODY3IDIuNzctMi44NjkgMy43NDctMS40NjggMS40MzItMy4xNTUgMi4yNTMtNS42OTUgMi4yNTNhMSAxIDAgMSAwIDAgMmMzLjA4NSAwIDUuMjY3LTEuMDQxIDcuMDkyLTIuODIxLjk0Ny0uOTI0IDEuOC0yLjA1IDIuNjQtMy4zMDhsLjIwOC4zMzljLjA5LjE0NS4xOC4yOTEuMjcuNDQgMS43NzUgMi44OCAzLjcwMyA0LjI3OSA2LjA1NyA0Ljg5IDEuNTguNDEgMy4zNDYuNDU0IDUuMjcxLjQ0NWwtMi4yNzcgMi4yNzdhMSAxIDAgMCAwIDEuNDE1IDEuNDE0bDQtNGExIDEgMCAwIDAgMC0xLjQxNGwtNC00YTEgMSAwIDAgMC0xLjQxNSAxLjQxNGwyLjMwNyAyLjMwN2MtMS45MDMuMDEtMy40MjktLjAyMy00Ljc5OC0uMzc5LTEuNzczLS40Ni0zLjMwNS0xLjQ4NC00Ljg1Ni00LjAwM2wtLjMyNi0uNTNjLS4yMjMtLjM2My0uNDQyLS43Mi0uNjYtMS4wN2wuNjYtMS4wNzEuMzI2LS41M2MxLjU1LTIuNTIgMy4wODMtMy41NDMgNC44NTYtNC4wMDQgMS4zNy0uMzU2IDIuODk1LS4zODggNC43OTgtLjM3OGwtMi4zMDcgMi4zMDZhMSAxIDAgMCAwIDEuNDE1IDEuNDE1bDQtNFoiIGZpbGw9IiNFOUJGODIiLz48L3N2Zz4=",text:e("Traders can open positions with zero spread using the index price, while the LP vault provides exceptional depth.")},{title:e("User friendly"),icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuMzUgNC4wMTZhMSAxIDAgMCAwLTEgMXY3LjA4MmExIDEgMCAxIDAgMiAwVjcuNDNsNS4zNzUgNS4zNzVhMSAxIDAgMCAwIDEuNDE0LTEuNDE0TDcuNzY0IDYuMDE2aDQuNjY4YTEgMSAwIDEgMCAwLTJINS4zNVpNNS4zNSAyNy45OThhMSAxIDAgMCAxLTEtMXYtNy4wODJhMSAxIDAgMSAxIDIgMHY0LjY2OGw1LjM3NS01LjM3NWExIDEgMCAwIDEgMS40MTQgMS40MTRsLTUuMzc1IDUuMzc1aDQuNjY4YTEgMSAwIDEgMSAwIDJINS4zNVpNMjguMzMyIDUuMDE2YTEgMSAwIDAgMC0xLTFIMjAuMjVhMSAxIDAgMCAwIDAgMmg0LjY2OGwtNS4zNzUgNS4zNzVhMSAxIDAgMCAwIDEuNDE0IDEuNDE0bDUuMzc1LTUuMzc1djQuNjY4YTEgMSAwIDEgMCAyIDBWNS4wMTZaTTI3LjMzMiAyNy45OThhMSAxIDAgMCAwIDEtMXYtNy4wODJhMSAxIDAgMCAwLTIgMHY0LjY2OGwtNS4zNzUtNS4zNzVhMSAxIDAgMCAwLTEuNDE0IDEuNDE0bDUuMzc1IDUuMzc1SDIwLjI1YTEgMSAwIDAgMCAwIDJoNy4wODJaIiBmaWxsPSIjRTlCRjgyIi8+PC9zdmc+",text:e("Trading is available on both the web and mobile app, with easy wallet integration. Joining in only requires one simple step.")}]}(e)}),[e]),i=((0,_.W)().isMobile,(0,v.A)());return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsxs)("section",{className:Ge.earnContainer,onMouseDown:function(){i("home_click_blp",{event_name:"home_click_blp"})},children:[(0,se.jsxs)("div",{className:u()(Ge.header,"df fdc"),children:[(0,se.jsx)("span",{className:"f24 fw3 c200 lh30",children:e("Staking to Earn")}),(0,se.jsx)("span",{className:"c120 mt-4 f14 lh18",children:e("Stake BLE and BLP to earn rewards.")})]}),(0,se.jsx)("div",{className:Ge.earn_wrap,children:n.map((function(e,n){return(0,se.jsx)("div",{className:Ge.col,children:(0,se.jsxs)("div",{className:u()(Ge.card,Ge.earn,"df fdc br8"),children:[(0,se.jsxs)("div",{className:u()("df jcsb w100 br8",Ge.card_top),children:[(0,se.jsxs)("div",{className:Ge.cardTopLeft,children:[(0,se.jsx)("img",{src:e.icon,width:32,height:32})," ",(0,se.jsx)("span",{className:"fw3 f24 c200",children:e.title})]}),(0,se.jsx)(ve.Z,{href:e.link,disabled:e.confirmBtn.disabled,children:e.confirmBtn.text})]}),(0,se.jsx)("div",{className:u()(Ge.content,"df aic"),children:(0,se.jsx)("span",{className:"c90 lh22 f14",children:e.text})})]})},n)}))})]}),(0,se.jsxs)("section",{className:Ge.exploreContainer,children:[(0,se.jsx)("div",{className:u()(Ge.header),children:(0,se.jsx)("span",{className:"f24 fw3 c200",children:e("About Blex")})}),(0,se.jsx)("div",{className:Ge.explore_wrap,children:t.map((function(e,n){return(0,se.jsx)(Ce.Z,{className:Ge.explore_content,children:(0,se.jsxs)("div",{className:u()(Ge.card,Ge.explore,"df fdc br8"),children:[(0,se.jsx)("img",{src:e.icon,width:24,height:24}),(0,se.jsx)("span",{className:"fw3 f16 c200",children:e.title}),(0,se.jsx)("span",{className:u()(Ge.text,"c90"),children:e.text}),e.extre||null]})})}))})]}),(0,se.jsxs)("section",{className:u()(Ge.linksContainer,"df aic jcsb"),children:[(0,se.jsxs)("div",{className:u()(Ge.left,"df fdc"),children:[(0,se.jsxs)("div",{className:u()(Ge.title),children:[(0,se.jsx)("span",{className:"f24 fw3 c200",children:e("Always at your side")}),(0,se.jsx)("br",{}),(0,se.jsx)("span",{className:"c120 f14 mt-4 lh18",children:e("Join the BLEX community now!")})]}),(0,se.jsxs)("div",{className:u()(Ge.linkBtns,"df"),children:[(0,se.jsx)(ve.Z,{type:"c40",href:P.WG.Twitter,icon:(0,se.jsx)(Oe.Zm,{}),children:e("Twitter")}),(0,se.jsx)(ve.Z,{type:"c40",href:P.WG.Telegram,icon:(0,se.jsx)(Oe.YG,{}),children:e("Telegram")})]}),(0,se.jsx)("div",{className:u()(Ge.icons,"df"),children:[(0,se.jsx)(Oe.D7,{}),(0,se.jsx)(Oe.ET,{}),(0,se.jsx)(Oe.OW,{})].map((function(e,n){return(0,se.jsx)("div",{className:u()(Ge.icon,"df jcc aic"),children:e},n)}))})]}),(0,se.jsx)("div",{className:Ge.right,children:(0,se.jsx)("img",{src:Ze,width:260,height:260})})]})]})},Pe=function(){var e=(0,k.Z)().t,n=(0,o.FV)(B),t=I()(n,2),i=t[0],r=t[1],s=(0,O.x)().chainId,l=(0,o.FV)(W),d=I()(l,2),N=d[0],j=d[1],g=(0,o.sJ)(Y.tr),m=(0,M.useState)(!1),D=I()(m,2),y=D[0],x=D[1],L=(0,_.W)(),w=(L.isMobile,L.isIpad,(0,v.A)()),S=(0,G.ZP)().active,T=function(){var e=c()(a()().mark((function e(){var n,t;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,p(s);case 4:return n=e.sent,e.next=7,A(g,s);case 7:t=e.sent,r(n),j(t.sort((function(e,n){return e.name.localeCompare(n.name)}))),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,12,14,17]])})));return function(){return e.apply(this,arguments)}}();return(0,M.useEffect)((function(){T();var e=setInterval(T,3e4);return function(){return clearInterval(e)}}),[s,null==g?void 0:g.length]),(0,M.useEffect)((function(){w("home_page_show",{event_name:"home_show",connect:!!S})}),[]),(0,se.jsx)(C.Z,{mobileTitle:e("Home"),children:(0,se.jsx)("div",{className:U,children:(0,se.jsxs)("div",{className:Q,children:[(0,se.jsxs)("div",{className:u()(J),children:[(0,se.jsx)("div",{className:u()(R,"f40 cp_h2"),children:(0,se.jsx)("p",{className:u()(H),children:(0,se.jsxs)("span",{className:u()("c300"),children:[e("Decentralized"),(0,se.jsx)("span",{className:u()("c200 pl-8"),children:e("Perpetual Exchange")})]})})}),(0,se.jsx)("span",{className:u()(X,"dib c120"),children:e("Trade BTC, ETH and other top cryptocurrencies with up to 100x leverage directly from your wallet.")})]}),(0,se.jsx)(le,{info:i}),(0,se.jsx)("div",{className:u()(q),children:(0,se.jsxs)("a",{href:P.Ew.BugBounty,target:"_blank",className:u()(K,"df aic c120 f12 fl1"),children:[(0,se.jsx)(E,{}),(0,se.jsx)("span",{className:F,children:e("The BLEX bug bounty program is now live! Up to $100,000 in rewards for a key bug report.")}),(0,se.jsxs)("span",{className:"df aic  jcfe c120",style:{textAlign:"end",paddingLeft:8},children:[e("More")," ",(0,se.jsx)(h.r,{className:"rotate270"})]})]})}),(0,se.jsx)(Ee,{marketInfo:N,markets:g,loading:y}),(0,se.jsx)(pe,{}),(0,se.jsx)(ke,{}),(0,se.jsx)(Z.a,{})]})})})}},93086:function(e,n,t){t.d(n,{r:function(){return l}});var i=t(67294),a=Object.defineProperty,r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,I=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const l=e=>i.createElement("svg",((e,n)=>{for(var t in n||(n={}))c.call(n,t)&&I(e,t,n[t]);if(r)for(var t of r(n))s.call(n,t)&&I(e,t,n[t]);return e})({width:18,height:19,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i.createElement("path",{d:"M13.382 7.91a.562.562 0 1 0-.796-.796l-3.584 3.584-3.575-3.576a.563.563 0 0 0-.796.796l3.978 3.977a.563.563 0 0 0 .847-.06l3.926-3.925Z",fill:"#5F6671"}))}}]);