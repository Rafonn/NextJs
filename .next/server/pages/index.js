"use strict";(()=>{var e={};e.id=332,e.ids=[220,332,636],e.modules={7501:(e,t,r)=>{r.d(t,{w:()=>i});var s=r(2770);let a=r.n(s)().footer.withConfig({displayName:"styles__Container",componentId:"sc-1ugfw33-0"})(["",""],({theme:e})=>(0,s.css)(["text-align:center;margin:",";color:",";font-size:",";"],e.spacings.medium,e.colors.gray,e.font.sizes.small));var n=r(8732);let i=()=>(0,n.jsx)(a,{children:"Feito por Rafael Carneiro"})},5323:(e,t,r)=>{r.d(t,{Y:()=>c});var s=r(1106),a=r.n(s),n=r(2770);let i=r.n(n)().header.withConfig({displayName:"styles__Container",componentId:"sc-1hjs5ld-0"})([""," a{color:",";}"],({theme:e})=>(0,n.css)(["background:",";color:",";font:",";padding:",";text-align:center;"],e.colors.primary,e.colors.white,e.font.sizes.large,e.spacings.medium),({theme:e})=>e.colors.white);var o=r(8349),l=r(8732);let c=()=>(0,l.jsx)(i,{children:(0,l.jsx)(a(),{href:"/",children:o.yy})})},348:(e,t,r)=>{r.d(t,{J:()=>i}),r(2015);var s=r(2770);let a=r.n(s)().main.withConfig({displayName:"styles__Container",componentId:"sc-1vofy2p-0"})(["",""],({theme:e})=>(0,s.css)(["max-width:96rem;font-size:",";margin:0 auto;padding:",";"],e.font.sizes.medium,e.spacings.medium));var n=r(8732);let i=({children:e})=>(0,n.jsx)(a,{children:e})},8349:(e,t,r)=>{r.d(t,{W6:()=>n,i5:()=>s,yy:()=>a});let s="https://polar-depths-60553-3a60956939d7.herokuapp.com/api/posts",a="Rafael Carneiro",n=process.env.SITE_URL||"https://gregarious-mochi-c84896.netlify.app/"},5119:(e,t,r)=>{r.d(t,{A:()=>v});var s=r(7912),a=r.n(s),n=r(5323),i=r(2770),o=r.n(i);let l=o().div.withConfig({displayName:"styles__Container",componentId:"sc-zb50sn-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:3rem;"]),c=o().div.withConfig({displayName:"styles__Category",componentId:"sc-zb50sn-1"})(["text-align:center;font-size:",";font-weight:bold;padding:"," 0;"],({theme:e})=>e.font.sizes.large,({theme:e})=>e.spacings.medium);var d=r(348);let p=o().div.withConfig({displayName:"styles__Container",componentId:"sc-ucmygj-0"})(["transition:opacity 300ms ease-in-out;&:hover{opacity:.6;}"]),m=o().h2.withConfig({displayName:"styles__PostCardHeading",componentId:"sc-ucmygj-1"})(["",""],({theme:e})=>(0,i.css)(["font-size:",";a{color:","}"],e.font.sizes.medium,e.colors.darkDray)),u=o().div.withConfig({displayName:"styles__PostCardCover",componentId:"sc-ucmygj-2"})(["margin-bottom:",";img{width:100%;display:block;}"],({theme:e})=>e.spacings.small);var g=r(1106),f=r.n(g),y=r(8732);let h=({slug:e,title:t,cover:r})=>(0,y.jsxs)(p,{children:[(0,y.jsx)(u,{children:(0,y.jsx)(f(),{href:"/post/[slug]",as:`/post/${e}`,children:(0,y.jsx)("img",{src:r,alt:t})})}),(0,y.jsx)(m,{children:(0,y.jsx)(f(),{href:"/post/[slug]",as:`/post/${e}`,children:t})})]});var x=r(7501),b=r(8349);function v({posts:e,category:t}){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(a(),{children:[(0,y.jsx)("title",{children:b.yy}),(0,y.jsx)("meta",{name:"descripton",content:"Este \xe9 um blog de teste."})]}),(0,y.jsx)(n.Y,{}),t&&(0,y.jsxs)(c,{children:["Categoria: ",t]}),(0,y.jsx)(d.J,{children:(0,y.jsx)(l,{children:e.map(e=>(0,y.jsx)(h,{cover:e.cover.formats.small.url,slug:e.slug,title:e.title},e.slug))})}),(0,y.jsx)(x.w,{})]})}},175:(e,t,r)=>{r.d(t,{z:()=>n});var s=r(8349),a=r(3011);let n=async(e="")=>{let t=`${s.i5}?populate=%2A${e}`;return await (0,a.x)(t)}},4346:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r(2770);let a=(0,s.createGlobalStyle)(["*{margin:0;padding:0;outline:none;box-sizing:border-box;}html{font-size:62.5%;}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-size:",";}a{color:",";text-decoration:none;transition:opacity 300ms ease-in-out;&:hover{opacity:.6;}}"],({theme:e})=>e.font.sizes.medium,({theme:e})=>e.colors.secondary),n={colors:{primary:"#010101",secondary:"#005b96",white:"#fafafa",lightGray:"#dddddd",gray:"#999999",darkDray:"#333333"},spacings:{small:"1rem",medium:"2rem",large:"3rem"},font:{sizes:{small:"1.2rem",medium:"1.8rem",large:"2rem",superLarge:"5rem"}}};var i=r(8732);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function l({Component:e,pageProps:t}){return(0,i.jsxs)(s.ThemeProvider,{theme:n,children:[(0,i.jsx)(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var s,a;s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t)),(0,i.jsx)(a,{})]})}},9495:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var s=r(883),a=r.n(s),n=r(8732);class i extends a(){static async getInitialProps(e){let t=e.renderPage;return e.renderPage=()=>t({enhanceApp:e=>e,enhanceComponent:e=>e}),await a().getInitialProps(e)}render(){return(0,n.jsxs)(s.Html,{lang:"pt-br",children:[(0,n.jsx)(s.Head,{}),(0,n.jsxs)("body",{children:[(0,n.jsx)(s.Main,{}),(0,n.jsx)(s.NextScript,{})]})]})}}let o=i},3011:(e,t,r)=>{r.d(t,{x:()=>s});let s=async e=>{let t=await fetch(e);return(await t.json()).data}},6050:(e,t,r)=>{r.r(t),r.d(t,{config:()=>x,default:()=>g,getServerSideProps:()=>h,getStaticPaths:()=>y,getStaticProps:()=>f,reportWebVitals:()=>b,routeModule:()=>_,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>v});var s={};r.r(s),r.d(s,{default:()=>m,getStaticProps:()=>u});var a=r(3865),n=r(9455),i=r(671),o=r(9495),l=r(4346),c=r(175),d=r(5119),p=r(8732);function m({posts:e}){return(0,p.jsx)(d.A,{posts:e})}let u=async()=>({props:{posts:await (0,c.z)()},revalidate:5e3}),g=(0,i.M)(s,"default"),f=(0,i.M)(s,"getStaticProps"),y=(0,i.M)(s,"getStaticPaths"),h=(0,i.M)(s,"getServerSideProps"),x=(0,i.M)(s,"config"),b=(0,i.M)(s,"reportWebVitals"),v=(0,i.M)(s,"unstable_getStaticProps"),j=(0,i.M)(s,"unstable_getStaticPaths"),P=(0,i.M)(s,"unstable_getStaticParams"),S=(0,i.M)(s,"unstable_getServerProps"),w=(0,i.M)(s,"unstable_getServerSideProps"),_=new a.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:s})},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{e.exports=require("next/head")},2015:e=>{e.exports=require("react")},8732:e=>{e.exports=require("react/jsx-runtime")},2770:e=>{e.exports=require("styled-components")},3873:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[883,990],()=>r(6050));module.exports=s})();