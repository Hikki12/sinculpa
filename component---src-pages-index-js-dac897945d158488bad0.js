"use strict";(self.webpackChunksinculpa=self.webpackChunksinculpa||[]).push([[678],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,s=!1,c=0;c<e.length;c++){var l=e[c];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,c)+"-"+e.slice(c),t=!1,s=a,a=!0,c++):a&&s&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,s=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return v},P:function(){return y},S:function(){return A},_:function(){return r},a:function(){return n},b:function(){return o},g:function(){return p},h:function(){return i}});var s=a(7294),c=(a(4811),a(5697)),l=a.n(c);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},n.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,s,c={},l=Object.keys(e);for(s=0;s<l.length;s++)t.indexOf(a=l[s])>=0||(c[a]=e[a]);return c}var i=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function o(e,t,a,s,c){return void 0===c&&(c={}),n({},a,{loading:s,shouldLoad:e,"data-main-image":"",style:n({},c,{opacity:t?1:0})})}function p(e,t,a,s,c,l,r,i){var o={};l&&(o.backgroundColor=l,"fixed"===a?(o.width=s,o.height=c,o.backgroundColor=l,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),r&&(o.objectFit=r),i&&(o.objectPosition=i);var p=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return p}var d,u=["children"],f=function(e){var t=e.layout,a=e.width,c=e.height;return"fullWidth"===t?s.createElement("div",{"aria-hidden":!0,style:{paddingTop:c/a*100+"%"}}):"constrained"===t?s.createElement("div",{style:{maxWidth:a,display:"block"}},s.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+c+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,a=r(e,u);return s.createElement(s.Fragment,null,s.createElement(f,n({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],x=function(e){var t=e.src,a=e.srcSet,c=e.loading,l=e.alt,i=void 0===l?"":l,o=e.shouldLoad,p=r(e,b);return s.createElement("img",n({},p,{decoding:"async",loading:c,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},h=function(e){var t=e.fallback,a=e.sources,c=void 0===a?[]:a,l=e.shouldLoad,i=void 0===l||l,o=r(e,g),p=o.sizes||(null==t?void 0:t.sizes),d=s.createElement(x,n({},o,t,{sizes:p,shouldLoad:i}));return c.length?s.createElement("picture",null,c.map((function(e){var t=e.media,a=e.srcSet,c=e.type;return s.createElement("source",{key:t+"-"+c+"-"+a,type:c,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:p})})),d):d};x.propTypes={src:c.string.isRequired,alt:c.string.isRequired,sizes:c.string,srcSet:c.string,shouldLoad:c.bool},h.displayName="Picture",h.propTypes={alt:c.string.isRequired,shouldLoad:c.bool,fallback:c.exact({src:c.string.isRequired,srcSet:c.string,sizes:c.string}),sources:c.arrayOf(c.oneOfType([c.exact({media:c.string.isRequired,type:c.string,sizes:c.string,srcSet:c.string.isRequired}),c.exact({media:c.string,type:c.string.isRequired,sizes:c.string,srcSet:c.string.isRequired})]))};var w=["fallback"],y=function(e){var t=e.fallback,a=r(e,w);return t?s.createElement(h,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):s.createElement("div",n({},a))};y.displayName="Placeholder",y.propTypes={fallback:c.string,sources:null==(d=h.propTypes)?void 0:d.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var v=function(e){return s.createElement(s.Fragment,null,s.createElement(h,n({},e)),s.createElement("noscript",null,s.createElement(h,n({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=h.propTypes;var E,j,S=function(e,t,a){for(var s=arguments.length,c=new Array(s>3?s-3:0),n=3;n<s;n++)c[n-3]=arguments[n];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(c)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:l().object.isRequired,alt:S},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],z=["style","className"],L=new Set,_=function(e){var t=e.as,c=void 0===t?"div":t,l=e.image,o=e.style,p=e.backgroundColor,d=e.className,u=e.class,f=e.onStartLoad,m=e.onLoad,b=e.onError,g=r(e,C),x=l.width,h=l.height,w=l.layout,y=function(e,t,a){var s={},c="gatsby-image-wrapper";return"fixed"===a?(s.width=e,s.height=t):"constrained"===a&&(c="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:c,"data-gatsby-image-wrapper":"",style:s}}(x,h,w),v=y.style,S=y.className,k=r(y,z),_=(0,s.useRef)(),O=(0,s.useMemo)((function(){return JSON.stringify(l.images)}),[l.images]);u&&(d=u);var N=function(e,t,a){var s="";return"fullWidth"===e&&(s='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(s='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),s}(w,x,h);return(0,s.useEffect)((function(){E||(E=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,s=_.current.querySelector("[data-gatsby-image-ssr]");return s&&i()?(s.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){s.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){s.removeAttribute("data-gatsby-image-ssr")}),0)})),void L.add(O)):j&&L.has(O)?void 0:(E.then((function(a){var s=a.renderImageToString,c=a.swapPlaceholderImage;_.current&&(_.current.innerHTML=s(n({isLoading:!0,isLoaded:L.has(O),image:l},g)),L.has(O)||(e=requestAnimationFrame((function(){_.current&&(t=c(_.current,O,L,o,f,m,b))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[l]),(0,s.useLayoutEffect)((function(){L.has(O)&&j&&(_.current.innerHTML=j(n({isLoading:L.has(O),isLoaded:L.has(O),image:l},g)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[l]),(0,s.createElement)(c,n({},k,{style:n({},v,o,{backgroundColor:p}),className:S+(d?" "+d:""),ref:_,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},O=(0,s.memo)((function(e){return e.image?(0,s.createElement)(_,e):null}));O.propTypes=k,O.displayName="GatsbyImage";var N,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],q=function(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(s)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},I=new Set(["fixed","fullWidth","constrained"]),P={src:l().string.isRequired,alt:S,width:q,height:q,sizes:l().string,layout:function(e){if(void 0!==e.layout&&!I.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(N=O,function(e){var t=e.src,a=e.__imageData,c=e.__error,l=r(e,T);return c&&console.warn(c),a?s.createElement(N,n({image:a},l)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=P},2618:function(e,t){t.Z=void 0;var a=function(e,t){void 0===t&&(t="start");var a=document.querySelector(e);return!!a&&(a.scrollIntoView({behavior:"smooth",block:t}),!0)};t.Z=a},9188:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=a(7294),c=function(e){return s.createElement("header",{class:"shadow"},s.createElement("nav",{class:"relative bg-white/40 min-h-fit"}))},l=function(e){return s.createElement("footer",{class:"bg-white h-16 flex justify-center items-center"},"Todos los derechos reservados")},n=function(e){return s.createElement(s.Fragment,null,s.createElement(c,null),s.createElement("main",null,e.children),s.createElement(l,null))},r=a(7059),i=a(2618),o=[1,2,3,4,5];function p(){return s.createElement(n,null,s.createElement("section",{class:"my-2 flex flex-col items-center justify-center pt-3"},s.createElement(r.S,{class:"w-2/3",src:"../images/logo.png",__imageData:a(2217)}),s.createElement("p",{class:"text-white font-bold text-3xl mt-5"},"BIENVENIDO"),s.createElement("p",{class:"text-white"},"Busca el equilibrio"),s.createElement("div",{class:"grid grid-cols-2 mt-4 text-white"},s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase",onClick:function(){return(0,i.Z)("#brunchs-section")}},"Brunch")),s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase",onClick:function(){return(0,i.Z)("#arepas-section")}},"Arepas")),s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase"},"Platos Fuertes")),s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase",onClick:function(){return(0,i.Z)("#salad-section")}},"Ensaladas")),s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase"},"Mexicana")),s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase",onClick:function(){return(0,i.Z)("#bebidas-section")}},"Bebidas")),s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase",onClick:function(){return(0,i.Z)("#coffee-section")}},"Cafetería y postres")),s.createElement("div",{class:"m-4"},s.createElement("p",{class:"text-xl text-center uppercase",onClick:function(){return(0,i.Z)("#wine-section")}},"Vinos")))),s.createElement("section",{id:"brunchs-section"},s.createElement("div",{class:"relative h-96"},s.createElement("div",{class:"absolute text-white bg-rose-800/75 z-10 w-3/4 top-10 right-0 px-5 py-4"},s.createElement("p",{class:"text-3xl font-bold uppercase"},"Brunchs"),s.createElement("p",{class:"text-xl font-semibold underline"},"Pancakes Americano"),s.createElement("p",{class:"text-lg"},"4 Pancakes, huevo, tocino, miel, mantequilla, queso mozzarella, jugo de naranja.")),s.createElement(r.S,{src:"https://images.pexels.com/photos/2105104/pexels-photo-2105104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"absolute top-0 object-cover w-full h-full",__imageData:a(1402)})),s.createElement("div",{class:"bg-red-600/50 flex w-full overflow-x-auto min-h-fit py-5"},o.map((function(e,t){return s.createElement("div",{class:"snap-center text-white flex flex-col items-center justify-center px-6 my-3",key:t},s.createElement(r.S,{src:"https://images.pexels.com/photos/407041/pancakes-maple-syrup-sweet-407041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"h-64 w-64 rounded-full object-cover border-4 border-white",__imageData:a(255)}),s.createElement("div",{class:"bg-gray-500/50 flex flex-col justify-center items-center text-center h-50 px-4 py-5 mt-4 rounded-md"},s.createElement("p",{class:"text-2xl font-semibold uppercase"},"Frutos rojos"),s.createElement("div",{class:"flex justify-center mt-1 mb-3 w-full"},s.createElement("div",{class:"h-1 bg-white w-12"})),s.createElement("p",{class:"text-lg"},"4 Pancakes, crema pastelera, sinope de fresa, fresas, cereza, arandanos y jugo de naranja.")))})))),s.createElement("section",{id:"arepas-section"},s.createElement("div",{class:"relative h-96"},s.createElement("div",{class:"absolute z-50 text-white h-32 bg-orange-400/50 px-5 mt-5 py-3"},s.createElement("p",{class:"text-3xl font-bold uppercase"},"Arepas"),s.createElement("p",{class:"text-xl font-semibold underline"},"Reina Pepiada"),s.createElement("p",{class:"text-lg"},"Pollo, Aguacate, cebolla y perejil.")),s.createElement(r.S,{src:"../images/bg-arepa.jpeg",class:"absolute top-0 w-full object-cover h-full",__imageData:a(734)}))),s.createElement("section",{id:"salad-section"},s.createElement("div",{class:"relative h-96  mb-4 md:h-96 md:w-1/2"},s.createElement("div",{class:"absolute bg-lime-900/75 z-10 h-32 px-4 mt-5 w-3/4 py-2"},s.createElement("p",{class:"text-white text-3xl font-bold"},"Ensaladas"),s.createElement("p",{class:"text-white text-base font-semibold"},"Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.")),s.createElement(r.S,{src:"https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"absolute h-full w-full object-cover top-0",__imageData:a(4253)})),s.createElement("div",{class:"relative h-72  mb-4 border-4 md:h-96 md:w-1/2"},s.createElement("div",{class:"absolute w-full bg-amber-800/75 z-50 px-4 py-2"},s.createElement("p",{class:"text-white text-2xl font-bold underline underline-offset-2 mb-2"},"Ensalada de Pollo"),s.createElement("p",{class:"text-white text-base font-semibold"},"Lechuga, tomate cherry, queso ricota, brotes, pollo, aguacate, maíz amarillo.")),s.createElement(r.S,{src:"https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"absolute h-full w-full object-cover top-0",__imageData:a(4253)})),s.createElement("div",{class:"text-white flex flex-col justify-center items-center md:w-96"},s.createElement(r.S,{src:"https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"h-64 w-64 rounded-full object-cover border-4 border-gray-500",__imageData:a(3193)}),s.createElement("div",{class:"text-center mt-5 py-5 px-3 bg-amber-400/50 rounded-lg"},s.createElement("p",{class:"text-2xl font-bold mb-3"},"Frutos Hojas Chocolate"),s.createElement("p",{class:"text-lg"},"4 Pancackes, crema pastelera, sirope de fresa, fresas, cereza, arandanos y jugos de naranja.")))),s.createElement("section",{id:"bebidas-section",class:"bg-orange-700/25 flex flex-col md:flex-row justify-center gap-5"},s.createElement("div",{class:"relative h-80 md:w-1/3 md:mt-5"},s.createElement("p",{class:"absolute text-3xl text-white font-bold z-50 bg-orange-600/50 w-full py-3 px-4 uppercase"},"Bebidas"),s.createElement(r.S,{src:"https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"absolute h-full w-full object-cover",__imageData:a(4974)})),s.createElement("div",{class:"text-white py-3 px-4 md:w-1/3"},s.createElement("div",{class:"flex justify-between gray-gradient gap-3 px-5 py-2  rounded-full mt-3"},s.createElement("p",{class:"text-xl font-medium"},"Jugos Naturales"),s.createElement("p",{class:"text-xl"},"$2.00")),s.createElement("div",{class:"flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3"},s.createElement("p",{class:"text-xl font-medium"},"Batidos"),s.createElement("p",{class:"text-xl"},"$2.50")),s.createElement("div",{class:"flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3"},s.createElement("p",{class:"text-xl font-medium"},"Limonadas"),s.createElement("p",{class:"text-xl"},"$2.00")),s.createElement("p",{class:"text-lg px-4 my-4"},"Fresa, Mora, Coco, limonada, imperial, limonada clásica."),s.createElement("div",{class:"flex justify-between gray-gradient gap-3 px-5 py-2 rounded-full mt-3"},s.createElement("p",{class:"text-xl font-medium"},"Smoothies"),s.createElement("p",{class:"text-xl"},"$3.00")),s.createElement("p",{class:"text-lg px-4 my-4"},"Sin culpa: Manzana verde, apio, perejil, pepino, naranja."),s.createElement("p",{class:"text-lg px-4 my-4"},"Chocolate almendra: Cacao, hielo, almendras, miel."),s.createElement("p",{class:"text-lg px-4 my-4"},"Futos del bosque: Fresa, arandanos, mora, avena, leche descremada."))),s.createElement("section",{id:"coffee-section"},s.createElement("div",{class:"relative h-180"},s.createElement("div",{class:"absolute flex justify-center items-center px-3 py-5 w-full h-full z-10"},s.createElement("div",{class:"border-4 bg-black/60 px-6 py-6 w-full text-white"},s.createElement("p",{class:"text-2xl text-center font-bold uppercase mb-5"},"Cafetería y Postres"),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Café"),s.createElement("p",{class:"text-xl"},"$1.00")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Café con leche"),s.createElement("p",{class:"text-xl"},"$1.75")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Cappuccino"),s.createElement("p",{class:"text-xl"},"$2.00")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Mocaccino"),s.createElement("p",{class:"text-xl"},"$2.00")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Chocolate"),s.createElement("p",{class:"text-xl"},"$2.00")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Infusiones"),s.createElement("p",{class:"text-xl"},"$1.00")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Prensados"),s.createElement("p",{class:"text-xl"},"$2.00")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Cake frutos secos"),s.createElement("p",{class:"text-xl"},"$2.50")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Brownie de Avena"),s.createElement("p",{class:"text-xl"},"$1.75")),s.createElement("div",{class:"flex justify-between mb-2"},s.createElement("p",{class:"text-xl"},"Cheesecake de fresa"),s.createElement("p",{class:"text-xl"},"$2.50")),s.createElement("div",{class:"flex justify-between"},s.createElement("p",{class:"text-xl"},"Malteada con Culpa"),s.createElement("p",{class:"text-xl"},"$3.00")))),s.createElement(r.S,{src:"https://images.pexels.com/photos/333523/pexels-photo-333523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"absolute w-full object-cover h-full",__imageData:a(1781)}))),s.createElement("section",{id:"wine-section"},s.createElement("div",{class:"relative h-128"},s.createElement("div",{class:"absolute flex justify-center w-full top-10 text-white z-10"},s.createElement("div",{class:"bg-red-800/75 text-2xl text-center uppercase p-5 border w-3/4 font-bold"},"Vinos")),s.createElement(r.S,{src:"https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",class:"absolute top-0 w-full h-full object-cover",__imageData:a(8897)}))),s.createElement("section",{class:""},s.createElement(r.S,{src:"../images/sinculpa.jpeg",__imageData:a(6140)})))}},255:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#180808","images":{"fallback":{"src":"/sinculpa/static/447dc26eb4337daa7bc2a8aec391dd62/d0f54/pancakes-maple-syrup-sweet-407041.jpg","srcSet":"/sinculpa/static/447dc26eb4337daa7bc2a8aec391dd62/6f087/pancakes-maple-syrup-sweet-407041.jpg 596w,\\n/sinculpa/static/447dc26eb4337daa7bc2a8aec391dd62/84d0c/pancakes-maple-syrup-sweet-407041.jpg 1192w,\\n/sinculpa/static/447dc26eb4337daa7bc2a8aec391dd62/d0f54/pancakes-maple-syrup-sweet-407041.jpg 2384w","sizes":"(min-width: 2384px) 2384px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/447dc26eb4337daa7bc2a8aec391dd62/4995d/pancakes-maple-syrup-sweet-407041.webp 596w,\\n/sinculpa/static/447dc26eb4337daa7bc2a8aec391dd62/df976/pancakes-maple-syrup-sweet-407041.webp 1192w,\\n/sinculpa/static/447dc26eb4337daa7bc2a8aec391dd62/8465f/pancakes-maple-syrup-sweet-407041.webp 2384w","type":"image/webp","sizes":"(min-width: 2384px) 2384px, 100vw"}]},"width":2384,"height":1500}')},3193:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#585858","images":{"fallback":{"src":"/sinculpa/static/00b75e3477ac568c688356b9bf400444/cd62d/pexels-photo-704569.jpg","srcSet":"/sinculpa/static/00b75e3477ac568c688356b9bf400444/77b4a/pexels-photo-704569.jpg 281w,\\n/sinculpa/static/00b75e3477ac568c688356b9bf400444/d38c2/pexels-photo-704569.jpg 563w,\\n/sinculpa/static/00b75e3477ac568c688356b9bf400444/cd62d/pexels-photo-704569.jpg 1125w","sizes":"(min-width: 1125px) 1125px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/00b75e3477ac568c688356b9bf400444/30c37/pexels-photo-704569.webp 281w,\\n/sinculpa/static/00b75e3477ac568c688356b9bf400444/1e226/pexels-photo-704569.webp 563w,\\n/sinculpa/static/00b75e3477ac568c688356b9bf400444/7cd1b/pexels-photo-704569.webp 1125w","type":"image/webp","sizes":"(min-width: 1125px) 1125px, 100vw"}]},"width":1125,"height":1500}')},4974:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#180828","images":{"fallback":{"src":"/sinculpa/static/daf1183865496016592422e30294ebf9/406bc/pexels-photo-1283219.jpg","srcSet":"/sinculpa/static/daf1183865496016592422e30294ebf9/c8191/pexels-photo-1283219.jpg 563w,\\n/sinculpa/static/daf1183865496016592422e30294ebf9/ec080/pexels-photo-1283219.jpg 1125w,\\n/sinculpa/static/daf1183865496016592422e30294ebf9/406bc/pexels-photo-1283219.jpg 2250w","sizes":"(min-width: 2250px) 2250px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/daf1183865496016592422e30294ebf9/c0079/pexels-photo-1283219.webp 563w,\\n/sinculpa/static/daf1183865496016592422e30294ebf9/4e308/pexels-photo-1283219.webp 1125w,\\n/sinculpa/static/daf1183865496016592422e30294ebf9/9532e/pexels-photo-1283219.webp 2250w","type":"image/webp","sizes":"(min-width: 2250px) 2250px, 100vw"}]},"width":2250,"height":1500}')},734:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8c8a8","images":{"fallback":{"src":"/sinculpa/static/3d5109fdc6bdf12cc88fdd39dfd6c460/10770/bg-arepa.jpg","srcSet":"/sinculpa/static/3d5109fdc6bdf12cc88fdd39dfd6c460/cfdef/bg-arepa.jpg 288w,\\n/sinculpa/static/3d5109fdc6bdf12cc88fdd39dfd6c460/0d436/bg-arepa.jpg 576w,\\n/sinculpa/static/3d5109fdc6bdf12cc88fdd39dfd6c460/10770/bg-arepa.jpg 1151w","sizes":"(min-width: 1151px) 1151px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/3d5109fdc6bdf12cc88fdd39dfd6c460/71d13/bg-arepa.webp 288w,\\n/sinculpa/static/3d5109fdc6bdf12cc88fdd39dfd6c460/44a2d/bg-arepa.webp 576w,\\n/sinculpa/static/3d5109fdc6bdf12cc88fdd39dfd6c460/1c758/bg-arepa.webp 1151w","type":"image/webp","sizes":"(min-width: 1151px) 1151px, 100vw"}]},"width":1151,"height":2048}')},8897:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/sinculpa/static/be60a46e46692f6acf01b10dcc14498f/e3cba/pexels-photo-391213.jpg","srcSet":"/sinculpa/static/be60a46e46692f6acf01b10dcc14498f/80cfb/pexels-photo-391213.jpg 330w,\\n/sinculpa/static/be60a46e46692f6acf01b10dcc14498f/09fc3/pexels-photo-391213.jpg 660w,\\n/sinculpa/static/be60a46e46692f6acf01b10dcc14498f/e3cba/pexels-photo-391213.jpg 1320w","sizes":"(min-width: 1320px) 1320px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/be60a46e46692f6acf01b10dcc14498f/2e996/pexels-photo-391213.webp 330w,\\n/sinculpa/static/be60a46e46692f6acf01b10dcc14498f/1caf2/pexels-photo-391213.webp 660w,\\n/sinculpa/static/be60a46e46692f6acf01b10dcc14498f/acb1d/pexels-photo-391213.webp 1320w","type":"image/webp","sizes":"(min-width: 1320px) 1320px, 100vw"}]},"width":1320,"height":1500}')},2217:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/sinculpa/static/003e84b2815f98ae812471d761bef37f/f4ad2/logo.png","srcSet":"/sinculpa/static/003e84b2815f98ae812471d761bef37f/d1549/logo.png 355w,\\n/sinculpa/static/003e84b2815f98ae812471d761bef37f/84b26/logo.png 710w,\\n/sinculpa/static/003e84b2815f98ae812471d761bef37f/f4ad2/logo.png 1420w","sizes":"(min-width: 1420px) 1420px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/003e84b2815f98ae812471d761bef37f/75abf/logo.webp 355w,\\n/sinculpa/static/003e84b2815f98ae812471d761bef37f/534c9/logo.webp 710w,\\n/sinculpa/static/003e84b2815f98ae812471d761bef37f/05a47/logo.webp 1420w","type":"image/webp","sizes":"(min-width: 1420px) 1420px, 100vw"}]},"width":1420,"height":971}')},1402:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/sinculpa/static/09aed02264dc1860a7d3b7976024e344/0cb03/pexels-photo-2105104.jpg","srcSet":"/sinculpa/static/09aed02264dc1860a7d3b7976024e344/2579c/pexels-photo-2105104.jpg 250w,\\n/sinculpa/static/09aed02264dc1860a7d3b7976024e344/2ff65/pexels-photo-2105104.jpg 500w,\\n/sinculpa/static/09aed02264dc1860a7d3b7976024e344/0cb03/pexels-photo-2105104.jpg 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/09aed02264dc1860a7d3b7976024e344/1c893/pexels-photo-2105104.webp 250w,\\n/sinculpa/static/09aed02264dc1860a7d3b7976024e344/316df/pexels-photo-2105104.webp 500w,\\n/sinculpa/static/09aed02264dc1860a7d3b7976024e344/b3e07/pexels-photo-2105104.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1500}')},6140:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/sinculpa/static/fd38233f259b37ef1c2e8afeb5842fda/30f07/sinculpa.jpg","srcSet":"/sinculpa/static/fd38233f259b37ef1c2e8afeb5842fda/41624/sinculpa.jpg 160w,\\n/sinculpa/static/fd38233f259b37ef1c2e8afeb5842fda/1b894/sinculpa.jpg 320w,\\n/sinculpa/static/fd38233f259b37ef1c2e8afeb5842fda/30f07/sinculpa.jpg 640w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/fd38233f259b37ef1c2e8afeb5842fda/60b4d/sinculpa.webp 160w,\\n/sinculpa/static/fd38233f259b37ef1c2e8afeb5842fda/5e011/sinculpa.webp 320w,\\n/sinculpa/static/fd38233f259b37ef1c2e8afeb5842fda/90d07/sinculpa.webp 640w","type":"image/webp","sizes":"(min-width: 640px) 640px, 100vw"}]},"width":640,"height":640}')},1781:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/sinculpa/static/868c57d85776b2507505fda2a3020460/139a0/pexels-photo-333523.jpg","srcSet":"/sinculpa/static/868c57d85776b2507505fda2a3020460/c4b40/pexels-photo-333523.jpg 249w,\\n/sinculpa/static/868c57d85776b2507505fda2a3020460/be2a7/pexels-photo-333523.jpg 497w,\\n/sinculpa/static/868c57d85776b2507505fda2a3020460/139a0/pexels-photo-333523.jpg 994w","sizes":"(min-width: 994px) 994px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/868c57d85776b2507505fda2a3020460/22e6f/pexels-photo-333523.webp 249w,\\n/sinculpa/static/868c57d85776b2507505fda2a3020460/71a63/pexels-photo-333523.webp 497w,\\n/sinculpa/static/868c57d85776b2507505fda2a3020460/3db03/pexels-photo-333523.webp 994w","type":"image/webp","sizes":"(min-width: 994px) 994px, 100vw"}]},"width":994,"height":1500}')},4253:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/sinculpa/static/88db522c1f352fdf44fe11a98c36823d/643b0/pexels-photo-3026808.jpg","srcSet":"/sinculpa/static/88db522c1f352fdf44fe11a98c36823d/51a07/pexels-photo-3026808.jpg 500w,\\n/sinculpa/static/88db522c1f352fdf44fe11a98c36823d/de105/pexels-photo-3026808.jpg 1000w,\\n/sinculpa/static/88db522c1f352fdf44fe11a98c36823d/643b0/pexels-photo-3026808.jpg 2000w","sizes":"(min-width: 2000px) 2000px, 100vw"},"sources":[{"srcSet":"/sinculpa/static/88db522c1f352fdf44fe11a98c36823d/12849/pexels-photo-3026808.webp 500w,\\n/sinculpa/static/88db522c1f352fdf44fe11a98c36823d/85e35/pexels-photo-3026808.webp 1000w,\\n/sinculpa/static/88db522c1f352fdf44fe11a98c36823d/5803e/pexels-photo-3026808.webp 2000w","type":"image/webp","sizes":"(min-width: 2000px) 2000px, 100vw"}]},"width":2000,"height":1500}')}}]);
//# sourceMappingURL=component---src-pages-index-js-dac897945d158488bad0.js.map