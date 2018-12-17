import{createContext as e,useState as r,useEffect as n,createElement as t,useContext as a}from"react";import{URL as o}from"url";var i="[a-zA-Z_][a-zA-Z_0-9]*",l="(.*)";function u(e){for(var r=new o(e,"http://hello"),n=[],t=new Map,a=new RegExp("^("+i+")=(string|number|boolean)$"),l=new RegExp("^("+i+")$"),u=0,f=r.pathname.split("/");u<f.length;u+=1){var h=f[u];if(""!==h){var p=h.match(a);if(p)n.push({name:p[1],type:p[2],_default:null});else{if(!(p=h.match(l)))throw new Error("Invalid path part "+h+" in route "+e);n.push({name:p[1],type:"path",_default:null})}}}for(var s=0,m=r.searchParams;s<m.length;s+=1){var c=m[s],v=c[0],w=c[1],d=w.match("(string|number|boolean)");if(d)t.set(v,{type:w,_default:null});else if(d=w.match("(\\d+.\\d+)"))t.set(v,{type:"number",_default:parseFloat(w)});else if(d=w.match("(\\d+)"))t.set(v,{type:"number",_default:parseInt(w)});else if(d=w.match("(true|false)"))t.set(v,{type:"boolean",_default:"true"===w});else{if(!(d=w.match("(.*)")))throw new Error("Invalid query parameter name: "+v+" value: "+w+" in route: "+e);t.set(v,{type:"string",_default:w})}}return{path:n,params:t}}function f(e,r){e=e.replace("#","");var n=new o(e,"https://hello"),t=n.pathname.split("/");t=t.filter(function(e){return!e.match(/^\s*$/)});var a={};e:for(var i=0,u=r;i<u.length;i+=1){var f=u[i],h=f[0],p=f[1],s=p.path,m=p.params;if(a={},s.length===t.length){for(var c=0;c<s.length;c++){var v=s[c],w=t[c];if("path"===v._type&&v.name!==w)continue e;if("path"!==v._type){if("boolean"===v._type){if("true"===w||"false"===w){a[v.name]="true"===w;continue}continue e}if("number"===v._type){var d=parseInt(w);if(!isNaN(d)){a[v.name]=d;continue}var g=parseFloat(w);if(!isNaN(g)){a[v.name]=g;continue}continue e}if("string"===v._type){if(w.match(l)){a[v.name]=w;continue}continue e}throw new Error("Unable to identify path part "+w+" "+v)}}for(var y=0,_=m;y<_.length;y+=1){var b=_[y],E=b[0],N=b[1],I=n.searchParams.get(E);if(null===I&&N._default&&(a[E]=N._default),null!==I){if("boolean"===N._type){if("true"!==I&&"false"!==I)throw new Error("Invalid boolean for param: "+E+" boolean: "+I);a[E]="true"===I}if("number"===N._type){var j=parseInt(I),P=parseFloat(I);if(isNaN(j)){if(isNaN(P))throw new Error("Invalid number for param: "+E+" number "+I);a[E]=P}else a[E]=j}}}return{name:h,state:a}}}throw new Error("No valid route found for url: "+e)}function h(e,r,n){r=r||{};var t=n.get(e),a=[];if(t){for(var o=0,i=t.path;o<i.length;o+=1){var l=i[o];if("path"!==l._type){var u=r[l.name];if(!u)throw new Error("Path param "+l.name+" not found while generating url for "+e);a.push(u)}else a.push(l.name)}for(var f=[],h=0,p=t.params.entries();h<p.length;h+=1){var s=p[h],m=s[0],c=null;if(r[m]||(c=s[1]._default),!c)throw new Error("Query param "+m+" not found and no default while generating url for "+e);f.push(m+"="+c)}return f.length>0?"/"+a.join("/")+"?"+f.join("&"):"/"+a.join("/")}throw new Error("No route found for name "+e)}var p=e(null),s=new Map;function m(e,a){var o=r(null),i=o[0],l=o[1];Object.entries(a).forEach(function(e){s.set(e[0],u(e[1]))});var m=null;return i&&(m={back:function(){window.history.back()},forward:function(){window.history.forward()},navigate:function(e,r){var n=h(e,r,s);window.location.hash=n},name:i.name,state:i.state}),n(function(){function e(e){e&&e.preventDefault();var r=f(window.location.hash,s);l(r)}return window.addEventListener("hashchange",e,!1),e(),function(){window.removeEventListener("hashchange",e,!1)}},[]),t(p.Provider,{value:m},e)}function c(){return a(p)}export{u as parseRoute,f as matchRouteAndGenerateState,h as formatUrl,m as useRouter,c as useRouting};
//# sourceMappingURL=use_routing.mjs.map
