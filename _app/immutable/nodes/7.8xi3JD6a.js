import{s as B,n as F,c as ge,u as me,g as $e,d as de,o as ke,f as we,h as se}from"../chunks/scheduler.CfnAWEg9.js";import{S as P,i as q,C as J,D as Q,j as w,f as g,k as h,a as V,y as p,g as v,h as k,l as y,s as M,c as T,p as O,b as R,d as $,t as d,e as le,r as C,u as E,v as I,w as S,x as U,m as x,n as j,z as Y,o as X}from"../chunks/index.Dh00sRbi.js";import{G as be,S as Ce}from"../chunks/Socials.BL8mZnBx.js";import{B as ee}from"../chunks/Button.S7rI-nW7.js";import{e as G,u as Ee,o as Ie,C as pe,B as Se,a as Ve,T as De}from"../chunks/ContentSection.BD-woBCz.js";import{I as _e}from"../chunks/Image.DxvCuCoK.js";function Me(a){let e,s;return{c(){e=J("svg"),s=J("path"),this.h()},l(t){e=Q(t,"svg",{width:!0,height:!0,"stroke-width":!0,viewBox:!0,fill:!0,xmlns:!0});var l=w(e);s=Q(l,"path",{d:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),w(s).forEach(g),l.forEach(g),this.h()},h(){h(s,"d","M10 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM16 5v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2zM22 15v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM6 16v-3M12 6V3M18 16v-3"),h(s,"stroke","currentColor"),h(s,"stroke-width","1.5"),h(s,"stroke-linecap","round"),h(s,"stroke-linejoin","round"),h(e,"width","100%"),h(e,"height","100%"),h(e,"stroke-width","1.5"),h(e,"viewBox","0 0 24 24"),h(e,"fill","none"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(t,l){V(t,e,l),p(e,s)},p:F,i:F,o:F,d(t){t&&g(e)}}}let Te=class extends P{constructor(e){super(),q(this,e,null,Me,B,{})}};function ze(a){let e,s,t;return{c(){e=v("div"),s=J("svg"),t=J("path"),this.h()},l(l){e=k(l,"DIV",{class:!0,style:!0});var r=w(e);s=Q(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var n=w(s);t=Q(n,"path",{d:!0,fill:!0}),w(t).forEach(g),n.forEach(g),r.forEach(g),this.h()},h(){h(t,"d","M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"),h(t,"fill",a[0]),h(s,"width",a[1]),h(s,"height",a[1]),h(s,"viewBox","0 0 160 160"),h(s,"fill","none"),h(s,"xmlns","http://www.w3.org/2000/svg"),h(s,"class","svelte-sixv8c"),h(e,"class","wrapper svelte-sixv8c"),y(e,"top",a[2].top),y(e,"left",a[2].left)},m(l,r){V(l,e,r),p(e,s),p(s,t)},p(l,[r]){r&1&&h(t,"fill",l[0]),r&2&&h(s,"width",l[1]),r&2&&h(s,"height",l[1]),r&4&&y(e,"top",l[2].top),r&4&&y(e,"left",l[2].left)},i:F,o:F,d(l){l&&g(e)}}}function Be(a,e,s){let{color:t}=e,{size:l}=e,{style:r}=e;return a.$$set=n=>{"color"in n&&s(0,t=n.color),"size"in n&&s(1,l=n.size),"style"in n&&s(2,r=n.style)},[t,l,r]}class Pe extends P{constructor(e){super(),q(this,e,Be,ze,B,{color:0,size:1,style:2})}}function re(a,e,s){const t=a.slice();return t[7]=e[s],t}function ne(a,e){let s,t,l;return t=new Pe({props:{color:e[7].color,size:e[7].size,style:e[7].style}}),{key:a,first:null,c(){s=le(),C(t.$$.fragment),this.h()},l(r){s=le(),E(t.$$.fragment,r),this.h()},h(){this.first=s},m(r,n){V(r,s,n),I(t,r,n),l=!0},p(r,n){e=r;const o={};n&1&&(o.color=e[7].color),n&1&&(o.size=e[7].size),n&1&&(o.style=e[7].style),t.$set(o)},i(r){l||($(t.$$.fragment,r),l=!0)},o(r){d(t.$$.fragment,r),l=!1},d(r){r&&g(s),S(t,r)}}}function qe(a){let e,s=[],t=new Map,l,r,n,o=G(a[0]);const i=f=>f[7].id;for(let f=0;f<o.length;f+=1){let m=re(a,o,f),_=i(m);t.set(_,s[f]=ne(_,m))}const c=a[3].default,u=ge(c,a,a[2],null);return{c(){e=v("div");for(let f=0;f<s.length;f+=1)s[f].c();l=M(),r=v("span"),u&&u.c(),this.h()},l(f){e=k(f,"DIV",{class:!0});var m=w(e);for(let b=0;b<s.length;b+=1)s[b].l(m);l=T(m),r=k(m,"SPAN",{class:!0});var _=w(r);u&&u.l(_),_.forEach(g),m.forEach(g),this.h()},h(){h(r,"class","slot-wrapper svelte-exdx8u"),h(e,"class","sparkle-wrapper svelte-exdx8u")},m(f,m){V(f,e,m);for(let _=0;_<s.length;_+=1)s[_]&&s[_].m(e,null);p(e,l),p(e,r),u&&u.m(r,null),n=!0},p(f,[m]){m&1&&(o=G(f[0]),O(),s=Ee(s,m,i,1,f,o,t,e,Ie,ne,l,re),R()),u&&u.p&&(!n||m&4)&&me(u,c,f,f[2],n?de(c,f[2],m,null):$e(f[2]),null)},i(f){if(!n){for(let m=0;m<o.length;m+=1)$(s[m]);$(u,f),n=!0}},o(f){for(let m=0;m<s.length;m+=1)d(s[m]);d(u,f),n=!1},d(f){f&&g(e);for(let m=0;m<s.length;m+=1)s[m].d();u&&u.d(f)}}}function He(a,e,s){let{$$slots:t={},$$scope:l}=e;const r=(u,f)=>Math.floor(Math.random()*(f-u))+u;let{color:n="default"}=e;const o=()=>({id:String(r(1e4,99999)),createdAt:Date.now(),color:n==="primary"?"var(--color--primary)":n==="secondary"?"var(--color--secondary)":"var(--color--yellow",size:r(10,20),style:{top:r(-10,80)+"%",left:r(0,100)+"%"}});let i=[],c;return ke(()=>{c=setInterval(()=>{const u=Date.now(),f=o(),m=i.filter(_=>u-_.createdAt<1500);m.push(f),s(0,i=m)},400)}),we(()=>{clearInterval(c)}),a.$$set=u=>{"color"in u&&s(1,n=u.color),"$$scope"in u&&s(2,l=u.$$scope)},[i,n,l,t]}class ve extends P{constructor(e){super(),q(this,e,He,qe,B,{color:1})}}function Ae(a){let e;return{c(){e=x("Source Code")},l(s){e=j(s,"Source Code")},m(s,t){V(s,e,t)},d(s){s&&g(e)}}}function Ne(a){let e,s;return e=new be({props:{slot:"icon"}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p:F,i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Fe(a){let e,s;return e=new ee({props:{href:"https://github.com/matfantinel/sveltekit-static-blog-template",$$slots:{icon:[Ne],default:[Ae]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function xe(a){let e;return{c(){e=x("Components")},l(s){e=j(s,"Components")},m(s,t){V(s,e,t)},d(s){s&&g(e)}}}function je(a){let e,s;return e=new Te({props:{slot:"icon"}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p:F,i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Ge(a){let e,s,t="This is a SvelteKit Static Blog Template!",l,r,n='<span class="left svelte-romlur">It supports Markdown,</span> <span class="right svelte-romlur">and is really fast.</span>',o,i,c,u,f,m;return c=new ve({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),f=new ee({props:{color:"primary",href:"https://histoire-sveltekit-static-blog-template.vercel.app/",$$slots:{icon:[je],default:[xe]},$$scope:{ctx:a}}}),{c(){e=v("section"),s=v("h1"),s.textContent=t,l=M(),r=v("p"),r.innerHTML=n,o=M(),i=v("div"),C(c.$$.fragment),u=M(),C(f.$$.fragment),this.h()},l(_){e=k(_,"SECTION",{id:!0,class:!0});var b=w(e);s=k(b,"H1",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-6k7elu"&&(s.textContent=t),l=T(b),r=k(b,"P",{class:!0,"data-svelte-h":!0}),U(r)!=="svelte-1yf2tdr"&&(r.innerHTML=n),o=T(b),i=k(b,"DIV",{class:!0});var z=w(i);E(c.$$.fragment,z),u=T(z),E(f.$$.fragment,z),z.forEach(g),b.forEach(g),this.h()},h(){h(s,"class","hello svelte-romlur"),h(r,"class","intro svelte-romlur"),h(i,"class","ctas svelte-romlur"),h(e,"id","hero"),h(e,"class","svelte-romlur")},m(_,b){V(_,e,b),p(e,s),p(e,l),p(e,r),p(e,o),p(e,i),I(c,i,null),p(i,u),I(f,i,null),m=!0},p(_,[b]){const z={};b&1&&(z.$$scope={dirty:b,ctx:_}),c.$set(z);const H={};b&1&&(H.$$scope={dirty:b,ctx:_}),f.$set(H)},i(_){m||($(c.$$.fragment,_),$(f.$$.fragment,_),m=!0)},o(_){d(c.$$.fragment,_),d(f.$$.fragment,_),m=!1},d(_){_&&g(e),S(c),S(f)}}}class Le extends P{constructor(e){super(),q(this,e,null,Ge,B,{})}}function Oe(a){let e,s,t;const l=a[2].default,r=ge(l,a,a[3],null);return{c(){e=v("strong"),r&&r.c(),this.h()},l(n){e=k(n,"STRONG",{class:!0});var o=w(e);r&&r.l(o),o.forEach(g),this.h()},h(){h(e,"class",s=se(a[0])+" svelte-8f8x6d")},m(n,o){V(n,e,o),r&&r.m(e,null),t=!0},p(n,o){r&&r.p&&(!t||o&8)&&me(r,l,n,n[3],t?de(l,n[3],o,null):$e(n[3]),null),(!t||o&1&&s!==(s=se(n[0])+" svelte-8f8x6d"))&&h(e,"class",s)},i(n){t||($(r,n),t=!0)},o(n){d(r,n),t=!1},d(n){n&&g(e),r&&r.d(n)}}}function Re(a){let e,s;return e=new ve({props:{color:a[1],$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,[l]){const r={};l&2&&(r.color=t[1]),l&9&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Ke(a,e,s){let{$$slots:t={},$$scope:l}=e,{color:r="default"}=e,{sparkleColor:n="default"}=e;return a.$$set=o=>{"color"in o&&s(0,r=o.color),"sparkleColor"in o&&s(1,n=o.sparkleColor),"$$scope"in o&&s(3,l=o.$$scope)},[r,n,t,l]}class Ze extends P{constructor(e){super(),q(this,e,Ke,Re,B,{color:0,sparkleColor:1})}}function ye(a){let e;return{c(){e=x("sparkles!")},l(s){e=j(s,"sparkles!")},m(s,t){V(s,e,t)},d(s){s&&g(e)}}}function Je(a){let e,s,t,l,r,n,o,i=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatibus commodi
			autem provident quam labore, libero beatae praesentium voluptate?`,c,u,f,m="Socials:",_,b,z,H,L,K;return r=new Ze({props:{color:"secondary",$$slots:{default:[ye]},$$scope:{ctx:a}}}),b=new Ce({}),L=new _e({props:{src:"/images/sample-image.png",alt:"Sample for the static template"}}),{c(){e=v("section"),s=v("div"),t=v("h2"),l=x(`This is a catchy headline that
			`),C(r.$$.fragment),n=M(),o=v("p"),o.textContent=i,c=M(),u=v("div"),f=v("span"),f.textContent=m,_=M(),C(b.$$.fragment),z=M(),H=v("div"),C(L.$$.fragment),this.h()},l(D){e=k(D,"SECTION",{id:!0,class:!0});var A=w(e);s=k(A,"DIV",{class:!0});var N=w(s);t=k(N,"H2",{class:!0});var W=w(t);l=j(W,`This is a catchy headline that
			`),E(r.$$.fragment,W),W.forEach(g),n=T(N),o=k(N,"P",{class:!0,"data-svelte-h":!0}),U(o)!=="svelte-e332xl"&&(o.textContent=i),c=T(N),u=k(N,"DIV",{class:!0});var Z=w(u);f=k(Z,"SPAN",{class:!0,"data-svelte-h":!0}),U(f)!=="svelte-1o63sv8"&&(f.textContent=m),_=T(Z),E(b.$$.fragment,Z),Z.forEach(g),N.forEach(g),z=T(A),H=k(A,"DIV",{class:!0});var te=w(H);E(L.$$.fragment,te),te.forEach(g),A.forEach(g),this.h()},h(){h(t,"class","svelte-1qp99xm"),h(o,"class","svelte-1qp99xm"),h(f,"class","svelte-1qp99xm"),h(u,"class","socials svelte-1qp99xm"),h(s,"class","info svelte-1qp99xm"),h(H,"class","image svelte-1qp99xm"),h(e,"id","about"),h(e,"class","svelte-1qp99xm")},m(D,A){V(D,e,A),p(e,s),p(s,t),p(t,l),I(r,t,null),p(s,n),p(s,o),p(s,c),p(s,u),p(u,f),p(u,_),I(b,u,null),p(e,z),p(e,H),I(L,H,null),K=!0},p(D,[A]){const N={};A&1&&(N.$$scope={dirty:A,ctx:D}),r.$set(N)},i(D){K||($(r.$$.fragment,D),$(b.$$.fragment,D),$(L.$$.fragment,D),K=!0)},o(D){d(r.$$.fragment,D),d(b.$$.fragment,D),d(L.$$.fragment,D),K=!1},d(D){D&&g(e),S(r),S(b),S(L)}}}class Qe extends P{constructor(e){super(),q(this,e,null,Je,B,{})}}function ae(a,e,s){const t=a.slice();return t[1]=e[s],t}function oe(a){let e,s;return e=new Se({props:{slug:a[1].slug,title:a[1].title,excerpt:a[1].excerpt,tags:a[1].tags,readingTime:a[1].readingTime,showImage:!1}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.slug=t[1].slug),l&1&&(r.title=t[1].title),l&1&&(r.excerpt=t[1].excerpt),l&1&&(r.tags=t[1].tags),l&1&&(r.readingTime=t[1].readingTime),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function Ue(a){let e,s,t=G(a[0]),l=[];for(let n=0;n<t.length;n+=1)l[n]=oe(ae(a,t,n));const r=n=>d(l[n],1,1,()=>{l[n]=null});return{c(){e=v("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=k(n,"DIV",{class:!0});var o=w(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(g),this.h()},h(){h(e,"class","grid svelte-1hdv5ie")},m(n,o){V(n,e,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);s=!0},p(n,o){if(o&1){t=G(n[0]);let i;for(i=0;i<t.length;i+=1){const c=ae(n,t,i);l[i]?(l[i].p(c,o),$(l[i],1)):(l[i]=oe(c),l[i].c(),$(l[i],1),l[i].m(e,null))}for(O(),i=t.length;i<l.length;i+=1)r(i);R()}},i(n){if(!s){for(let o=0;o<t.length;o+=1)$(l[o]);s=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)d(l[o]);s=!1},d(n){n&&g(e),Y(l,n)}}}function We(a){let e;return{c(){e=x("View More")},l(s){e=j(s,"View More")},m(s,t){V(s,e,t)},d(s){s&&g(e)}}}function Xe(a){let e,s,t;return s=new ee({props:{href:"/blog",$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){e=v("div"),C(s.$$.fragment),this.h()},l(l){e=k(l,"DIV",{slot:!0});var r=w(e);E(s.$$.fragment,r),r.forEach(g),this.h()},h(){h(e,"slot","button")},m(l,r){V(l,e,r),I(s,e,null),t=!0},p(l,r){const n={};r&16&&(n.$$scope={dirty:r,ctx:l}),s.$set(n)},i(l){t||($(s.$$.fragment,l),t=!0)},o(l){d(s.$$.fragment,l),t=!1},d(l){l&&g(e),S(s)}}}function Ye(a){let e,s;return e=new pe({props:{id:"recent-posts",title:"Blog posts",description:"This section shows the 4 most recent blog posts. Check them out for tips on how to get started!",align:"left",$$slots:{button:[Xe],default:[Ue]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,[l]){const r={};l&17&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function et(a,e,s){let{posts:t}=e;return a.$$set=l=>{"posts"in l&&s(0,t=l.posts)},[t]}class tt extends P{constructor(e){super(),q(this,e,et,Ye,B,{posts:0})}}function ie(a,e,s){const t=a.slice();return t[4]=e[s],t}function st(a){let e,s,t;return s=new _e({props:{src:a[2],alt:"Picture describing the "+a[0]+" feature"}}),{c(){e=v("div"),C(s.$$.fragment),this.h()},l(l){e=k(l,"DIV",{class:!0,slot:!0});var r=w(e);E(s.$$.fragment,r),r.forEach(g),this.h()},h(){h(e,"class","image"),h(e,"slot","image")},m(l,r){V(l,e,r),I(s,e,null),t=!0},p(l,r){const n={};r&4&&(n.src=l[2]),r&1&&(n.alt="Picture describing the "+l[0]+" feature"),s.$set(n)},i(l){t||($(s.$$.fragment,l),t=!0)},o(l){d(s.$$.fragment,l),t=!1},d(l){l&&g(e),S(s)}}}function lt(a){let e,s,t,l,r,n,o;return{c(){e=v("div"),s=v("div"),t=v("span"),l=x(a[0]),r=M(),n=v("p"),o=x(a[1]),this.h()},l(i){e=k(i,"DIV",{class:!0,slot:!0});var c=w(e);s=k(c,"DIV",{class:!0});var u=w(s);t=k(u,"SPAN",{});var f=w(t);l=j(f,a[0]),f.forEach(g),u.forEach(g),r=T(c),n=k(c,"P",{});var m=w(n);o=j(m,a[1]),m.forEach(g),c.forEach(g),this.h()},h(){h(s,"class","title svelte-x9191d"),h(e,"class","content svelte-x9191d"),h(e,"slot","content")},m(i,c){V(i,e,c),p(e,s),p(s,t),p(t,l),p(e,r),p(e,n),p(n,o)},p(i,c){c&1&&X(l,i[0]),c&2&&X(o,i[1])},d(i){i&&g(e)}}}function ce(a){let e,s,t=G(a[3]),l=[];for(let n=0;n<t.length;n+=1)l[n]=fe(ie(a,t,n));const r=n=>d(l[n],1,1,()=>{l[n]=null});return{c(){e=v("div");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=k(n,"DIV",{class:!0});var o=w(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(g),this.h()},h(){h(e,"class","tags svelte-x9191d")},m(n,o){V(n,e,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);s=!0},p(n,o){if(o&8){t=G(n[3]);let i;for(i=0;i<t.length;i+=1){const c=ie(n,t,i);l[i]?(l[i].p(c,o),$(l[i],1)):(l[i]=fe(c),l[i].c(),$(l[i],1),l[i].m(e,null))}for(O(),i=t.length;i<l.length;i+=1)r(i);R()}},i(n){if(!s){for(let o=0;o<t.length;o+=1)$(l[o]);s=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)d(l[o]);s=!1},d(n){n&&g(e),Y(l,n)}}}function rt(a){let e=a[4].label+"",s;return{c(){s=x(e)},l(t){s=j(t,e)},m(t,l){V(t,s,l)},p(t,l){l&8&&e!==(e=t[4].label+"")&&X(s,e)},d(t){t&&g(s)}}}function fe(a){let e,s;return e=new De({props:{color:a[4].color,$$slots:{default:[rt]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const r={};l&8&&(r.color=t[4].color),l&136&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function nt(a){let e,s,t=a[3]&&a[3].length>0&&ce(a);return{c(){e=v("div"),t&&t.c(),this.h()},l(l){e=k(l,"DIV",{class:!0,slot:!0});var r=w(e);t&&t.l(r),r.forEach(g),this.h()},h(){h(e,"class","footer svelte-x9191d"),h(e,"slot","footer")},m(l,r){V(l,e,r),t&&t.m(e,null),s=!0},p(l,r){l[3]&&l[3].length>0?t?(t.p(l,r),r&8&&$(t,1)):(t=ce(l),t.c(),$(t,1),t.m(e,null)):t&&(O(),d(t,1,1,()=>{t=null}),R())},i(l){s||($(t),s=!0)},o(l){d(t),s=!1},d(l){l&&g(e),t&&t.d()}}}function at(a){let e,s;return e=new Ve({props:{additionalClass:"feature-card",$$slots:{footer:[nt],content:[lt],image:[st]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,[l]){const r={};l&143&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function ot(a,e,s){let{name:t}=e,{description:l}=e,{image:r}=e,{tags:n}=e;return a.$$set=o=>{"name"in o&&s(0,t=o.name),"description"in o&&s(1,l=o.description),"image"in o&&s(2,r=o.image),"tags"in o&&s(3,n=o.tags)},[t,l,r,n]}class it extends P{constructor(e){super(),q(this,e,ot,at,B,{name:0,description:1,image:2,tags:3})}}function ue(a,e,s){const t=a.slice();return t[1]=e[s],t}function he(a){let e,s;return e=new it({props:{name:a[1].name,description:a[1].description,image:a[1].image,tags:a[1].tags}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,l){const r={};l&1&&(r.name=t[1].name),l&1&&(r.description=t[1].description),l&1&&(r.image=t[1].image),l&1&&(r.tags=t[1].tags),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function ct(a){let e,s,t,l=G(a[0]),r=[];for(let o=0;o<l.length;o+=1)r[o]=he(ue(a,l,o));const n=o=>d(r[o],1,1,()=>{r[o]=null});return{c(){e=v("div"),s=v("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var i=w(e);s=k(i,"DIV",{class:!0});var c=w(s);for(let u=0;u<r.length;u+=1)r[u].l(c);c.forEach(g),i.forEach(g),this.h()},h(){h(s,"class","three-group-grid svelte-9ei89p"),h(e,"class","features-container svelte-9ei89p")},m(o,i){V(o,e,i),p(e,s);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(s,null);t=!0},p(o,i){if(i&1){l=G(o[0]);let c;for(c=0;c<l.length;c+=1){const u=ue(o,l,c);r[c]?(r[c].p(u,i),$(r[c],1)):(r[c]=he(u),r[c].c(),$(r[c],1),r[c].m(s,null))}for(O(),c=l.length;c<r.length;c+=1)n(c);R()}},i(o){if(!t){for(let i=0;i<l.length;i+=1)$(r[i]);t=!0}},o(o){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)d(r[i]);t=!1},d(o){o&&g(e),Y(r,o)}}}function ft(a){let e,s;return e=new pe({props:{id:"features",title:"Features",description:"Here are some of the features of this template",$$slots:{default:[ct]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p(t,[l]){const r={};l&17&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function ut(a,e,s){let{features:t}=e;return a.$$set=l=>{"features"in l&&s(0,t=l.features)},[t]}class ht extends P{constructor(e){super(),q(this,e,ut,ft,B,{features:0})}}function gt(a){let e,s;return e=new tt({props:{posts:a[1]}}),{c(){C(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,l){I(e,t,l),s=!0},p:F,i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){S(e,t)}}}function mt(a){let e,s,t,l,r,n,o,i;s=new Le({}),l=new Qe({});let c=a[1]&&a[1].length>0&&gt(a);return o=new ht({props:{features:a[0]}}),{c(){e=v("div"),C(s.$$.fragment),t=M(),C(l.$$.fragment),r=M(),c&&c.c(),n=M(),C(o.$$.fragment),this.h()},l(u){e=k(u,"DIV",{class:!0});var f=w(e);E(s.$$.fragment,f),t=T(f),E(l.$$.fragment,f),r=T(f),c&&c.l(f),n=T(f),E(o.$$.fragment,f),f.forEach(g),this.h()},h(){h(e,"class","container")},m(u,f){V(u,e,f),I(s,e,null),p(e,t),I(l,e,null),p(e,r),c&&c.m(e,null),p(e,n),I(o,e,null),i=!0},p(u,[f]){u[1]&&u[1].length>0&&c.p(u,f)},i(u){i||($(s.$$.fragment,u),$(l.$$.fragment,u),$(c),$(o.$$.fragment,u),i=!0)},o(u){d(s.$$.fragment,u),d(l.$$.fragment,u),d(c),d(o.$$.fragment,u),i=!1},d(u){u&&g(e),S(s),S(l),c&&c.d(),S(o)}}}function $t(a,e,s){let{data:t}=e,{features:l,posts:r}=t;return a.$$set=n=>{"data"in n&&s(2,t=n.data)},[l,r,t]}class Ct extends P{constructor(e){super(),q(this,e,$t,mt,B,{data:2})}}export{Ct as component};
