(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=(n(66),n(8)),o=n(2),s=n.n(o),i=n(12),d=n(32),l=n.n(d),u=l()("production");function A(){return(A=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.connect)(Object.assign({deps:{keyStore:new i.keyStores.BrowserLocalStorageKeyStore}},u));case 2:return t=e.sent,window.walletConnection=new i.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.account=window.walletConnection.account(),console.log("window.accountId",window.accountId),e.next=9,new i.Contract(window.walletConnection.account(),u.contractName,{viewMethods:["nft_tokens"],changeMethods:["nft_mint","buy_food","check_token","get_attributes","feed_lion"]});case 9:window.contract=e.sent;case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){window.walletConnection.signOut(),window.location.replace(window.location.origin+"/")}function b(){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.walletConnection.requestSignIn(u.contractName);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(64),h=n(26),g=n(3),j=(n(130),n(131),n(0));function p(e){var t=e.img,n=e.name,c=Object(g.f)();return Object(j.jsxs)("div",{className:"animal-card",onClick:function(){c("/game/lion")},children:[Object(j.jsx)("img",{src:t,alt:"animal image"}),Object(j.jsx)("div",{className:"card-hover",children:n})]})}n(21),n(133);var m=n(4),Q=n.p+"static/media/LoadingZone (1).aa7e9080.svg";n(134);function E(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}function w(){var e=Object(c.useState)(0),t=Object(m.a)(e,2),n=t[0],r=t[1];return E((function(){switch(n){case 0:r(25);break;case 25:r(50);break;case 50:r(75);break;case 75:r(100);break;default:r(0)}}),500),Object(j.jsx)("div",{className:"loader-hover",children:Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("img",{style:{width:n+"%"},className:"main-loader-bar",src:Q,alt:""})})})}var B=n.p+"static/media/support-ukraine.1c01012d.png";function H(e){var t=e.children,n=e.isLoading,r=Object(g.f)(),o=Object(g.e)().pathname;return Object(c.useEffect)((function(){var e=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.check_token();case 2:(t=e.sent)||"/mint"===o||r("/mint"),t&&"/mint"===o&&r("/select-animal");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.walletConnection.isSignedIn()?e():r("/")}),[]),Object(j.jsxs)("div",{className:"page-wrapper",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{className:"header-logo",src:B,alt:""}),Object(j.jsx)("button",{className:"link",style:{float:"right",height:"100%"},onClick:f,children:"Sign out"})]}),t,n&&Object(j.jsx)(w,{})]})}function x(){return Object(j.jsx)(H,{children:Object(j.jsxs)("div",{className:"select-animal-page",children:[Object(j.jsx)("h2",{children:"Your animals:"}),Object(j.jsx)(p,{img:"https://ipfs.io/ipfs/bafkreihdfouh6pulmzmx4nlb653q5vmkwgbqegzf37vavf6lyubdtavyom",name:"Lion"})]})})}n(135);function C(){return Object(j.jsx)("div",{className:"mint",children:Object(j.jsx)("img",{src:"https://ipfs.io/ipfs/bafkreihdfouh6pulmzmx4nlb653q5vmkwgbqegzf37vavf6lyubdtavyom",alt:"NFT image"})})}n(136);var S=l()("production").networkId;function I(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),n=t[0],o=t[1],d=r.a.useState(!0),l=Object(m.a)(d,2),u=(l[0],l[1],r.a.useState(!1)),A=Object(m.a)(u,2),f=A[0],b=A[1],O=r.a.useState(!1),v=Object(m.a)(O,2),h=v[0];v[1];Object(c.useEffect)((function(){var e=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,window.contract.check_token();case 3:t=e.sent,o(!1),""!==window.accountId&&b(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("window.accountId",window.accountId),e.next=3,window.contract.nft_mint({receiver_id:window.accountId},3e14,i.utils.format.parseNearAmount("1"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(H,{isLoading:n,children:[Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(C,{}),Object(j.jsx)("div",{className:"mint-button",children:Object(j.jsx)("button",{disabled:f,onClick:g,children:"Mint"})})]}),h&&Object(j.jsx)(N,{})]})}function N(){var e="https://explorer.".concat(S,".near.org/accounts");return Object(j.jsxs)("aside",{children:[Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(e,"/").concat(window.accountId),children:window.accountId})," ","called method: 'set_greeting' in contract:"," ",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(e,"/").concat(window.contract.contractId),children:window.contract.contractId}),Object(j.jsxs)("footer",{children:[Object(j.jsx)("div",{children:"\u2714 Succeeded"}),Object(j.jsx)("div",{children:"Just now"})]})]})}n(137);function k(){var e=Object(c.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(g.f)();Object(c.useEffect)((function(){window.walletConnection.isSignedIn()&&d()}),[]);var i=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return e.next=4,d();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,window.contract.check_token();case 3:t=e.sent,r(!1),o(t?"/select-animal":"/mint");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("main",{children:[Object(j.jsx)("h1",{children:"Welcome to NEAR!"}),Object(j.jsx)("p",{children:"To make use of the NEAR blockchain, you need to sign in. The button below will sign you in using NEAR Wallet."}),Object(j.jsx)("p",{children:'By default, when your app runs in "development" mode, it connects to a test network ("testnet") wallet. This works just like the main network ("mainnet") wallet, but the NEAR Tokens on testnet aren\'t convertible to other currencies \u2013 they\'re just for testing!'}),Object(j.jsx)("p",{children:"Go ahead and click the button below to try it out:"}),Object(j.jsx)("p",{style:{textAlign:"center",marginTop:"2.5em"},children:Object(j.jsx)("button",{onClick:i,children:"Sign in"})}),n&&Object(j.jsx)(w,{})]})}n(138),n(63);var y="data:image/png;base64,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";function U(e){var t=e.eating,n=Object(c.useState)(y),r=Object(m.a)(n,2),a=r[0],o=r[1];return Object(c.useEffect)((function(){o(t?"data:image/png;base64,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":y)}),[t]),Object(j.jsx)("div",{className:"animal-card",children:Object(j.jsx)("img",{src:a,alt:"animal image"})})}n(139);var X=n.p+"static/media/Food.42cb1384.svg",K=n.p+"static/media/First.12b11c06.svg",D=n.p+"static/media/Second.286d27a8.svg",Y=n.p+"static/media/Third.09fe534d.svg",z=n.p+"static/media/Fourth.4889d72f.svg",W=n.p+"static/media/Fifth.9748a025.svg";function T(e){var t=e.eatingTimes,n=Object(c.useState)(X),r=Object(m.a)(n,2),a=r[0],o=r[1];return console.log("eatingTimes",t),Object(c.useEffect)((function(){switch(t){case 1:o(X);break;case 2:o(K);break;case 4:o(D);break;case 6:o(Y);break;case 8:o(z);break;case 10:o(W)}}),[t]),Object(j.jsx)("div",{className:"animal-food",children:Object(j.jsx)("img",{src:a,className:"animal-food-img",alt:"animal food image"})})}n(140);var Z=n.p+"static/media/LoadingBorders (1).09b46704.svg";function J(e){var t=e.exp;console.log("exp",t);var n=t/.5,r=Object(c.useState)(0),a=Object(m.a)(r,2),o=a[0],s=a[1];return E((function(){o<n&&s(o+2)}),o<n?500:null),console.log("percentages",o),Object(j.jsxs)("div",{className:"experience",children:[Object(j.jsx)("img",{src:Z,className:"loading-borders",alt:"loading borders"}),Object(j.jsx)("img",{src:Q,style:{width:"calc((".concat(o>100?100:o,"%) - 45px)")},alt:"loading zone",className:"loading-bar"}),Object(j.jsxs)("div",{className:"experience-numbers",children:[t,"/50"]})]})}function L(){var e=Object(c.useState)(!0),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),d=Object(m.a)(o,2),l=d[0],u=d[1],A=Object(c.useState)(0),f=Object(m.a)(A,2),b=f[0],O=f[1],v=Object(c.useState)(0),h=Object(m.a)(v,2),g=h[0],p=h[1],Q=Object(c.useState)(0),w=Object(m.a)(Q,2),B=w[0],x=w[1],C=Object(c.useState)(0),S=Object(m.a)(C,2),I=S[0],N=S[1],k=Object(c.useState)(0),y=Object(m.a)(k,2),X=y[0],K=y[1];Object(c.useEffect)((function(){var e=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.account.getAccountBalance();case 2:window.balance=e.sent,x(i.utils.format.formatNearAmount(window.balance.available));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.get_attributes();case 2:t=e.sent,D(t),r(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(c.useEffect)((function(){}),[b]),E((function(){u(!l),O(b+1)}),b&&b<=10?600:null);var D=function(e){N(e.food),K(e.experience)},Y=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,window.contract.feed_lion();case 3:t=e.sent,console.log("card_attr",t),O(1),D(t),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.buy_food({token_id:window.accountId+"-lion-animal"},3e14,i.utils.format.parseNearAmount(g||"1"));case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=X>50?2:1;return Object(j.jsxs)(H,{isLoading:n,children:[Object(j.jsxs)("div",{className:"game-page",children:[Object(j.jsxs)("div",{className:"character-panel",children:[Object(j.jsx)(U,{eating:l}),Object(j.jsxs)("div",{className:"animal-info",children:[Object(j.jsx)("h2",{children:"LVL: ".concat(W)}),Object(j.jsx)("h2",{children:"Name: Lion"}),Object(j.jsx)("h2",{children:"Type: Chordates"}),Object(j.jsx)("h2",{children:"Class: Mammals"}),Object(j.jsx)("h2",{children:"Order: Predatory"}),Object(j.jsx)("h2",{children:"City: Kharkiv"}),Object(j.jsx)("a",{href:"https://zoo.kharkov.ua/zhivotnye-en/lev",children:"Read More"})]})]}),Object(j.jsxs)("div",{className:"items-panel",children:[Object(j.jsx)(J,{exp:X}),Object(j.jsxs)("div",{className:"food-row",children:[Object(j.jsxs)("div",{className:"food-count",children:[I," X"]}),Object(j.jsx)(T,{eatingTimes:b})]}),Object(j.jsxs)("div",{className:"character-buttons",children:[Object(j.jsxs)("div",{className:"donation-row",children:[Object(j.jsx)("label",{htmlFor:"donation",children:"Donation:"}),Object(j.jsx)("input",{autoComplete:"off",onChange:function(e){p(e.target.value)},defaultValue:g,id:"donation",max:B,min:"0",step:"1",type:"number"}),Object(j.jsx)("span",{title:"NEAR Tokens",children:"\u24c3"})]}),Object(j.jsx)("button",{onClick:z,children:"Buy food"}),Object(j.jsx)("button",{disabled:0===I,onClick:Y,children:"Feed Lion"})]})]})]}),Object(j.jsxs)("div",{className:"instruction",children:[Object(j.jsx)("p",{children:"1. Buy food (you can select count of food in donation) all money goes to Ukraine, Kharkiv's zoo"}),Object(j.jsx)("p",{children:"2. Feed your lion, get experience of NFT"}),Object(j.jsx)("p",{children:"3. When you will up 50 experience you will be able to claim Top Supporter NFT"}),Object(j.jsx)("p",{children:"4. Buy more food just to support Ukrainian zoos"})]})]})}window.nearInitPromise=function(){return A.apply(this,arguments)}().then((function(){Object(v.render)(Object(j.jsx)(h.a,{children:Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{path:"/",element:Object(j.jsx)(k,{})}),Object(j.jsx)(g.a,{path:"/select-animal",element:Object(j.jsx)(x,{})}),Object(j.jsx)(g.a,{path:"/mint",element:Object(j.jsx)(I,{})}),Object(j.jsx)(g.a,{path:"/game/lion",element:Object(j.jsx)(L,{})})]})}),document.querySelector("#root"))})).catch(console.error)},32:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/near-spring-third",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"nftzoo.testnet";e.exports=function(e){switch(e){case"production":case"mainnet":case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/near-spring-third",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},63:function(e,t,n){},66:function(e,t,n){},72:function(e,t){},82:function(e,t){}},[[141,1,2]]]);
//# sourceMappingURL=main.768ffbaf.chunk.js.map