import{d as i,_ as c,o as a,c as d,a as t,n as $,r as v,b as S,e as k,t as w,p as C,f as A,R as L,g as n,h as N,i as P,j as r,w as u,k as T}from"./index.198db445.js";const _={rectangle:"rectangle",circle:"circle"},f={[_.rectangle]:"rounded",[_.circle]:"rounded-full"},R=i({name:"SkeletonLoader",components:{},props:{shape:{type:String,required:!0,validator(e){return Object.keys(f).includes(e)}},bgClass:{type:String,default:"bg-loader"},shimmerColor:{type:String,default:"#ffffff"}},computed:{loaderShape(){return f[this.shape]},shimmerStyle(){const e=this.isHexColor(this.shimmerColor)?this.hexToRgb(this.shimmerColor):"#ffffff";return{backgroundImage:`linear-gradient(90deg, rgba(${e}, 0) 0%, rgba(${e}, 0.2) 20%, rgba(${e}, 0.5) 60%, rgba(${e}, 0))`}}},methods:{isHexColor(e){const s=e.replace("#","");return typeof e=="string"&&e.startsWith("#")&&s.length===6&&!isNaN(Number("0x"+s))},hexToRgb(e){var s;return`${(s=e.match(/\w\w/g))==null?void 0:s.map(o=>+`0x${o}`)}`}}});function I(e,s,o,l,p,m){return a(),d("div",{class:S([e.bgClass,e.loaderShape,"relative animate-pulse overflow-hidden"])},[t("div",{class:"shimmer absolute top-0 right-0 bottom-0 left-0",style:$(e.shimmerStyle)},null,4),v(e.$slots,"default",{},void 0,!0)],2)}const D=c(R,[["render",I],["__scopeId","data-v-af60835f"]]),M=i({name:"AboutResume"}),E={class:"mb-6 grid grid-cols-3"},F=k('<div class="mb-8"><div class="text-tertiary">Dec 2019 - Present</div><div class="text-tertiary">New York, NY</div></div><div class="col-span-2"><h3 class="text-md text-main mb-1">Implementation Manager</h3><p class="text-secondary mb-8"> Architect solutions for perspective and existing merchants. Manage integrations via technical consulting, working with Adyen and merchant engineers to provide a high quality end product. </p></div><div class="mb-8"><div class="text-tertiary">Feb 2019 - Dec 2019</div><div class="tex text-tertiary">San Francisco, CA</div></div><div class="col-span-2"><h3 class="text-md text-main mb-1">Technical Support Engineer</h3><p class="text-secondary mb-8"> Provided support and implementation advice to new and prospective merchants with a focus on utilizing our checkout integrations, conforming to PSD2 regulations, and mobile integrations.<br>Wrote Python and Java Adyen example checkout integrations to enhanced developer experience. </p></div><div class="mb-8"><div class="text-tertiary">Nov 2018 - Jan 2019</div><div class="text-tertiary">New York, NY</div></div><div class="col-span-2"><h3 class="text-md text-main mb-1">Technical Team Intern</h3><p class="text-secondary mb-8"> Utilized NMap to test all devices on Marathon\u2019s network for access with default credentials.<br>Set up several CentOS servers as remote logging and file sharing repositories. </p></div>',6),V=[F];function z(e,s,o,l,p,m){return a(),d("div",E,V)}const H=c(M,[["render",z]]),B=i({name:"AboutContent",props:{headerText:{type:String,required:!0}}});const O=e=>(C("data-v-762e983a"),e=e(),A(),e),Y={class:""},q={class:"about-header text-main mb-2 flex flex-row font-mono text-2xl after:bg-underline"},j={class:"align-center flex"},J=O(()=>t("div",{class:"mr-6 mb-10 h-auto w-0 border border-underline"},null,-1)),W={class:"text"};function G(e,s,o,l,p,m){return a(),d("div",Y,[t("div",q,w(e.headerText),1),t("div",j,[J,t("div",W,[v(e.$slots,"default",{},void 0,!0)])])])}const U=c(B,[["render",G],["__scopeId","data-v-762e983a"]]),K=i({name:"AboutMe",components:{AboutResume:H,AboutContent:U,RouterLink:L,SkeletonLoader:D},props:{},methods:{imageLoaded(){console.log("Image loaded"),this.profilePhotoLoaded=!0}},data(){return{profilePhoto:"https://tylerdouglas-assets.s3.amazonaws.com/TylerDouglas_photo.avif",profilePhotoLoaded:!1}}}),Q={class:""},X={class:"mb-8 flex flex-row"},Z={class:"w-40"},ee=["src"],te=t("h1",{class:"text-main self-center pt-2 text-4xl"}," Tyler Douglas ",-1),se=t("p",{class:"text-secondary"}," Tinkerer, Full-stack Developer & Enthusiast ",-1),oe=t("div",{class:"mb-6 grid grid-cols-3"},[t("div",{class:"mb-8"},[t("p",{class:"text-secondary"},"Hacker101 CTF")]),t("div",{class:"col-span-2"},[t("a",{href:"https://ctf.hacker101.com/ctf"},[t("img",{src:"https://www.hacker101.com/assets/images/favicon.png",alt:"Hacker101 CTF",width:"50",class:"rounded-full",style:{filter:"invert(0)"}})])])],-1);function ae(e,s,o,l,p,m){const g=n("SkeletonLoader"),b=n("router-link"),x=n("AboutResume"),h=n("AboutContent");return a(),d("div",Q,[t("div",X,[t("div",Z,[t("img",{src:e.profilePhoto,alt:"Profile Photo",class:"",style:{filter:"invert(0)","clip-path":"circle(38%)"},onLoad:s[0]||(s[0]=(...y)=>e.imageLoaded&&e.imageLoaded(...y))},null,40,ee),e.profilePhotoLoaded?P("",!0):(a(),N(g,{key:0,shape:"circle",class:"mx-7 h-[106px]"}))]),t("div",null,[te,se,r(b,{to:"/",class:"text-tertiary font-extralight"},{default:u(()=>[T(" tylerdouglas.co ")]),_:1})])]),r(h,{class:"mt-4","header-text":"Resume"},{default:u(()=>[r(x)]),_:1}),r(h,{class:"mt-4","header-text":"CTFs"},{default:u(()=>[oe]),_:1})])}const re=c(K,[["render",ae]]);export{re as default};
