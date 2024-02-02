(function(){var e={4050:function(e,t,n){"use strict";var a=n(9242),o=n(3396);const s={id:"app"};function i(e,t,n,a,i,r){const l=(0,o.up)("NavbarMenu"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(l),(0,o.Wm)(c)])}const r={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},c={class:"collapse navbar-collapse",id:"navbarNav"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"nav-item"},h={class:"nav-item"},m={class:"nav-item"},f={class:"nav-item"},p=(0,o._)("li",{class:"nav-item"},[(0,o._)("a",{id:"coinpri-link",class:"nav-link",target:"_blank",href:"https://coinpri.com",style:{color:"#b800ff"}},"Made by the Coinpri team")],-1);function v(e,t,n,a,s,i){const v=(0,o.up)("router-link"),b=(0,o.up)("AddToMetaMaskButton");return(0,o.wg)(),(0,o.iD)("nav",r,[(0,o._)("div",l,[(0,o.Wm)(v,{class:"navbar-brand",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("RoseTea Black Holes")])),_:1}),(0,o._)("div",c,[(0,o._)("ul",d,[(0,o._)("li",u,[(0,o.Wm)(v,{class:"nav-link",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",h,[(0,o.Wm)(v,{class:"nav-link",to:"/gallery"},{default:(0,o.w5)((()=>[(0,o.Uk)("Gallery")])),_:1})]),(0,o._)("li",m,[(0,o.Wm)(v,{class:"nav-link",to:"/mint"},{default:(0,o.w5)((()=>[(0,o.Uk)("Mint")])),_:1})]),(0,o._)("li",f,[(0,o.Wm)(v,{class:"nav-link",to:"/my-tokens"},{default:(0,o.w5)((()=>[(0,o.Uk)("My Tokens")])),_:1})]),p,(0,o.Wm)(b)])])])])}function b(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=(...e)=>i.addToMetaMask&&i.addToMetaMask(...e)),class:"btn btn-outline-primary"}," Add To MetaMask ")}var w={name:"AddToMetaMaskButton",methods:{async addToMetaMask(){try{"undefined"!==typeof window.ethereum&&window.ethereum.isMetaMask?await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x118FCC",chainName:"RoseTea RollApp",nativeCurrency:{name:"RoseTea",symbol:"RST",decimals:18},rpcUrls:["https://rpc.rosetea.xyz"],blockExplorerUrls:null}]}):alert("MetaMask is not installed. Please install it to use this feature.")}catch(e){console.error("Error adding RoseTea RollApp to MetaMask",e)}}}},k=n(89);const y=(0,k.Z)(w,[["render",b]]);var g=y,M={name:"NavbarMenu",components:{AddToMetaMaskButton:g}};const T=(0,k.Z)(M,[["render",v]]);var _=T,C={name:"App",components:{NavbarMenu:_}};const F=(0,k.Z)(C,[["render",i]]);var x=F,D=n(2483);const I={class:"container mt-5"},N=(0,o.uE)('<div class="row justify-content-center"><div class="col-md-6 text-center"><h1 class="display-4 fw-bold">RoseTea Black Holes</h1><p class="lead my-4">Explore an immersive 3D interactable NFT collection.</p><img src="logo.png" class="img-fluid mb-4" alt="RoseTea Black Holes"><div class="text-start"><h2 class="h4 fw-bold text-center">Project Highlights</h2><div class="row"><div class="col-md-6 d-flex align-items-stretch"><div class="card mb-3"><div class="card-body text-center"><i class="bi bi-check2-circle me-2"></i> <b>Powered by DymensionHub and Avail</b><p class="mt-2"> RoseTea Black Holes is proud to be powered by DymensionHub and Avail, two of the most innovative platforms in the digital asset space. This collaboration brings a robust and scalable foundation, enabling us to deliver a seamless and interactive NFT experience. </p></div></div></div><div class="col-md-6 d-flex align-items-stretch"><div class="card mb-3"><div class="card-body text-center"><i class="bi bi-check2-circle me-2"></i><b> ThreeJS Animations</b><p class="mt-2"> Dive into the captivating world of 3D with our ThreeJS animations. Each NFT in the RoseTea Black Holes collection features intricate and realistic animations, providing an immersive experience that truly sets our collection apart. </p></div></div></div><div class="col-md-6 d-flex align-items-stretch"><div class="card mb-3"><div class="card-body text-center"><i class="bi bi-check2-circle me-2"></i><b>EVM Rollapp Integration</b><p class="mt-2"> Embracing the latest in blockchain technology, our collection is integrated with EVM rollapp. This ensures a smooth and efficient interaction with the Ethereum blockchain, making your experience hassle-free and enjoyable. </p></div></div></div><div class="col-md-6 d-flex align-items-stretch"><div class="card mb-3"><div class="card-body text-center"><i class="bi bi-check2-circle me-2"></i><b>MetaMask Compatibility</b><p class="mt-2"> With MetaMask compatibility, RoseTea Black Holes ensures easy and secure transactions. Whether you&#39;re a seasoned collector or new to the world of NFTs, our platform offers a straightforward and reliable way to manage your digital assets. </p></div></div></div></div></div></div></div>',1),B=[N];function A(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("div",I,B)}var H={name:"LandingPage"};const W=(0,k.Z)(H,[["render",A]]);var U=W,E=n(7139);const O={class:"container mt-5"},R=(0,o._)("h2",null,"NFT Gallery",-1),P=(0,o._)("p",null,[(0,o._)("a",{href:"#"},"Help us discover more black holes")],-1);function j(e,t,n,a,s,i){const r=(0,o.up)("NFTGallery");return(0,o.wg)(),(0,o.iD)("div",O,[R,(0,o._)("p",null,(0,E.zw)(s.discoveredCount)+" Black Holes discovered",1),(0,o._)("p",null,(0,E.zw)(s.unchartedCount)+" Uncharted Black Holes",1),P,(0,o.Wm)(r,{tokenIds:s.unchartedTokenIds},null,8,["tokenIds"])])}const $={class:"row"},G=["src","alt"],Z={class:"text-center"};function S(e,t,n,a,s,i){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.nfts,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-md-4 mb-3",key:t},[(0,o.Wm)(r,{to:{name:"View",params:{tokenId:e.id}}},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.thumbnail,class:"img-fluid",alt:e.name},null,8,G),(0,o._)("h4",Z,(0,E.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])}n(560);var z={name:"NFTGallery",watch:{tokenIds:{immediate:!0,handler(e){e.length>0&&this.fetchMetadata()}}},props:{tokenIds:{type:Array,required:!0}},data(){return{nfts:[]}},methods:{async fetchMetadata(){const e="https://blackholes.rosetea.xyz/metadata/";try{await Promise.all(this.tokenIds.map((t=>this.fetchNFT(e,t))))}catch(t){console.error("Failed to fetch NFT metadata:",t)}},async fetchNFT(e,t){try{const n=await fetch(`${e}${t}.json`);if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);const a=await n.json();this.nfts.push({id:t,thumbnail:a.image,name:a.name})}catch(n){console.error(`Failed to fetch metadata for token ID ${t}:`,n)}}}};const q=(0,k.Z)(z,[["render",S]]);var V=q,Y={name:"GalleryPage",components:{NFTGallery:V},data(){return{unchartedTokenIds:[],discoveredCount:0,unchartedCount:0}},async mounted(){await this.fetchUnchartedTokenIds()},methods:{async fetchUnchartedTokenIds(){try{const e="https://blackholes.rosetea.xyz/metadata/",t=await fetch(`${e}/uncharted.txt`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const n=await t.text();this.unchartedTokenIds=n.split("\n").filter(Boolean),console.log(this.unchartedTokenIds),this.unchartedCount=this.unchartedTokenIds.length}catch(e){console.error("Failed to fetch token IDs:",e)}}}};const Q=(0,k.Z)(Y,[["render",j]]);var J=Q;const L={class:"container mt-5"},K=(0,o._)("h2",null,"View NFT",-1),X={key:0,class:"iframe-container"},ee=["src"],te={key:1};function ne(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("div",L,[K,s.nftUrl?((0,o.wg)(),(0,o.iD)("div",X,[(0,o._)("iframe",{src:s.nftUrl,frameborder:"0"},null,8,ee)])):((0,o.wg)(),(0,o.iD)("p",te,"NFT not found or token ID missing."))])}var ae={name:"ViewPage",data(){return{nftUrl:null}},async mounted(){await this.fetchNftMetadata()},methods:{async fetchNftMetadata(){const e=this.$route.params.tokenId||this.$route.query.tokenId;if(!e)return void console.error("Token ID is missing");const t=`https://blackholes.rosetea.xyz/metadata/${e}.json`;try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const n=await e.json();this.nftUrl=n.animation_url}catch(n){console.error(`Failed to fetch metadata for token ID ${e}:`,n),this.nftUrl=null}}}};const oe=(0,k.Z)(ae,[["render",ne]]);var se=oe;const ie={class:"container my-5"},re=(0,o._)("div",{class:"text-center mb-5"},[(0,o._)("h1",{class:"display-4 fw-bold"},"Mint Your NFT"),(0,o._)("p",{class:"lead"},"Mint new NFTs from the RoseTea Black Holes collection.")],-1),le=(0,o._)("br",null,null,-1),ce={class:"mint-steps mb-5"},de=(0,o.uE)('<ol class="list-group list-group-numbered"><li class="list-group-item">Add RoseTea Rollapp to MetaMask and connect your MetaMask wallet using the above buttons.</li><li class="list-group-item"><a href="https://discord.gg/dymension" target="_blank">Get some RST tokens from the Dymension discord faucet</a>. <div class="command-instruction mt-2"><p>Go to the <b>#froopyland-faucet</b> channel and enter:</p><code>$request &lt;Your wallet address&gt; rosetea_1150924-1</code></div></li><li class="list-group-item">Mint your token!</li></ol>',1),ue=(0,o._)("div",{class:"alert alert-warning mt-4",role:"alert"},[(0,o._)("strong",null,"Notice:"),(0,o.Uk)(" Each address is only permitted to mint a single NFT. ")],-1),he=(0,o._)("div",{class:"alert alert-danger mt-4",role:"alert"},[(0,o._)("strong",null,"Avail network down"),(0,o._)("br"),(0,o.Uk)("Due to instability on the Goldberg Avail testnet, minting is currently disabled. It will be re-enabled as soon as the Avail network stabilizes. For more information, please visit "),(0,o._)("a",{href:"https://discord.com/invite/y6fHnxZQX8",target:"_blank"},"the official Avail discord"),(0,o.Uk)(". ")],-1),me=(0,o._)("div",{class:"further-info mt-5"},[(0,o._)("h5",{class:"fw-bold"},"To go further:"),(0,o._)("p",null,[(0,o.Uk)("If you want to help us reach farther into the cosmos, "),(0,o._)("a",{href:"https://discord.gg/dymension",target:"_blank"},"get some DYM tokens from the Dymension discord faucet"),(0,o.Uk)(" and "),(0,o._)("a",{href:"https://portal.dymension.xyz/rollapp/rosetea_1150924-1"},"stake them on our DymensionHub RollApp"),(0,o.Uk)(". This will reveal more NFTs and increase the mint cap.")])],-1);function fe(e,t,n,a,s,i){const r=(0,o.up)("AddToMetaMaskButton"),l=(0,o.up)("ConnectMetaMaskButton"),c=(0,o.up)("MintButton");return(0,o.wg)(),(0,o.iD)("div",ie,[re,(0,o.Wm)(r,{class:"btn-lg mb-4"}),le,(0,o.Wm)(l,{onConnected:t[0]||(t[0]=e=>s.isWalletConnected=!0)}),(0,o._)("div",ce,[de,ue,he,(0,o.Wm)(c,{isDisabled:!0,class:"btn-lg mt-3"})]),me])}const pe=["disabled"];function ve(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=(...e)=>i.mint&&i.mint(...e)),class:"btn btn-success",disabled:n.isDisabled}," Mint NFT ",8,pe)}var be=n(4253),we=n(7252),ke={name:"MintButton",props:{isDisabled:{type:Boolean,default:!1}},methods:{async mint(){if("undefined"!==typeof window.ethereum)try{const e=new be.Q(window.ethereum);await e.send("eth_requestAccounts",[]);const t=e.getSigner(),n=new we.CH("0x2cd205a9C5b7872592b8839D4AFB792aE6F09a3F",["function safeMint(address to) public","function hasMinted(address) view returns (bool)"],t),a=await t.getAddress(),o=await n.hasMinted(a);if(o)return void alert("You have already minted an NFT.");const s=await n.safeMint(a);await s.wait(),console.log(`NFT minted successfully. Transaction Hash: ${s.hash}`)}catch(e){console.error("Failed to mint NFT:",e),alert("Failed to mint NFT. See console for details.")}else alert("Please install MetaMask to mint an NFT.")}}};const ye=(0,k.Z)(ke,[["render",ve]]);var ge=ye;const Me=["disabled"];function Te(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=(...e)=>i.connectMetaMask&&i.connectMetaMask(...e)),class:"btn btn-warning",disabled:s.isConnected},(0,E.zw)(s.isConnected?"Wallet Connected":"Connect Wallet"),9,Me)}var _e={name:"ConnectToMetaMaskButton",data(){return{isConnected:!1}},created(){this.checkWalletConnection()},mounted(){this.isConnected&&(console.log("wallet already connected"),this.$emit("connected"))},methods:{async checkWalletConnection(){if("undefined"!==typeof window.ethereum){const e=await window.ethereum.request({method:"eth_accounts"});this.isConnected=e.length>0,this.isConnected>0&&this.$emit("connected")}},async connectMetaMask(){if("undefined"!==typeof window.ethereum)try{await window.ethereum.request({method:"eth_requestAccounts"}),this.isConnected=!0,console.log("Wallet Connected")}catch(e){console.error("Error connecting wallet",e),this.isConnected=!1}else alert("MetaMask is not installed. Please install it to use this feature.")}}};const Ce=(0,k.Z)(_e,[["render",Te]]);var Fe=Ce,xe={name:"MintPage",components:{AddToMetaMaskButton:g,MintButton:ge,ConnectMetaMaskButton:Fe},data(){return{isWalletConnected:!1}}};const De=(0,k.Z)(xe,[["render",fe]]);var Ie=De;const Ne={class:"container mt-5"},Be=(0,o._)("h1",{class:"text-center"},"My Tokens",-1),Ae=(0,o._)("p",{class:"text-center"},"Here you can view your own NFTs from the RoseTea Black Holes collection.",-1);function He(e,t,n,a,s,i){const r=(0,o.up)("ConnectMetaMaskButton"),l=(0,o.up)("NFTGallery");return(0,o.wg)(),(0,o.iD)("div",Ne,[Be,Ae,(0,o.Wm)(r,{onConnected:i.fetchMyTokenIds},null,8,["onConnected"]),s.myTokenIds.length>0?((0,o.wg)(),(0,o.j4)(l,{key:0,tokenIds:s.myTokenIds},null,8,["tokenIds"])):(0,o.kq)("",!0)])}var We={name:"MyTokens",components:{NFTGallery:V,ConnectMetaMaskButton:Fe},data(){return{myTokenIds:[]}},methods:{async fetchMyTokenIds(){if(console.log("running"),"undefined"!==typeof window.ethereum){const t=new be.Q(window.ethereum),n=t.getSigner(),a=new we.CH("0x2cd205a9C5b7872592b8839D4AFB792aE6F09a3F",["function balanceOf(address owner) view returns (uint256)","function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)"],n);try{const e=await n.getAddress(),t=await a.balanceOf(e),o=[];console.log(typeof t);for(let n=0;n<Number(t);n++){const t=await a.tokenOfOwnerByIndex(e,n);console.log(t),o.push(t.toString())}this.myTokenIds=o}catch(e){console.error("Failed to fetch token IDs:",e)}}else console.log("Ethereum object does not exist!")}}};const Ue=(0,k.Z)(We,[["render",He]]);var Ee=Ue;const Oe=[{path:"/",name:"Landing",component:U},{path:"/gallery",name:"Gallery",component:J},{path:"/view/:tokenId?",name:"View",component:se},{path:"/mint",name:"Mint",component:Ie},{path:"/my-tokens",name:"My Tokens",component:Ee}],Re=(0,D.p7)({history:(0,D.PO)("/"),routes:Oe});var Pe=Re;(0,a.ri)(x).use(Pe).mount("#app")},6601:function(){}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,o,s){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],s=e[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,i=a[0],r=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var d=l(n)}for(t&&t(a);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self["webpackChunkrst_bh"]=self["webpackChunkrst_bh"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4050)}));a=n.O(a)})();
//# sourceMappingURL=app.2b0c53c9.js.map