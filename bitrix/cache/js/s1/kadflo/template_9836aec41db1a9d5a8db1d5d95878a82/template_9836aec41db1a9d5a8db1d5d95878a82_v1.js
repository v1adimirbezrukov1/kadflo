
; /* Start:"a:4:{s:4:"full";s:76:"/local/templates/kadflo/assets/libraries/jquery-3.7.1.min.js?174428259687535";s:6:"source";s:60:"/local/templates/kadflo/assets/libraries/jquery-3.7.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:85:"/local/templates/kadflo/assets/libraries/swiper/swiper-bundle.min.js?1744282596167001";s:6:"source";s:68:"/local/templates/kadflo/assets/libraries/swiper/swiper-bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Swiper 8.4.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 12, 2022
 */

!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t() }(this, (function () { "use strict"; function e(e) { return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object } function t(s, a) { void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => { void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]) })) } const s = { body: {}, addEventListener() { }, removeEventListener() { }, activeElement: { blur() { }, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() { } }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() { }, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } }; function a() { const e = "undefined" != typeof document ? document : {}; return t(e, s), e } const i = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() { }, pushState() { }, go() { }, back() { } }, CustomEvent: function () { return this }, addEventListener() { }, removeEventListener() { }, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() { }, Date() { }, screen: {}, setTimeout() { }, clearTimeout() { }, matchMedia: () => ({}), requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0), cancelAnimationFrame(e) { "undefined" != typeof setTimeout && clearTimeout(e) } }; function r() { const e = "undefined" != typeof window ? window : {}; return t(e, i), e } class n extends Array { constructor(e) { "number" == typeof e ? super(e) : (super(...e || []), function (e) { const t = e.__proto__; Object.defineProperty(e, "__proto__", { get: () => t, set(e) { t.__proto__ = e } }) }(this)) } } function l(e) { void 0 === e && (e = []); const t = []; return e.forEach((e => { Array.isArray(e) ? t.push(...l(e)) : t.push(e) })), t } function o(e, t) { return Array.prototype.filter.call(e, t) } function d(e, t) { const s = r(), i = a(); let l = []; if (!t && e instanceof n) return e; if (!e) return new n(l); if ("string" == typeof e) { const s = e.trim(); if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) { let e = "div"; 0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select"); const t = i.createElement(e); t.innerHTML = s; for (let e = 0; e < t.childNodes.length; e += 1)l.push(t.childNodes[e]) } else l = function (e, t) { if ("string" != typeof e) return [e]; const s = [], a = t.querySelectorAll(e); for (let e = 0; e < a.length; e += 1)s.push(a[e]); return s }(e.trim(), t || i) } else if (e.nodeType || e === s || e === i) l.push(e); else if (Array.isArray(e)) { if (e instanceof n) return e; l = e } return new n(function (e) { const t = []; for (let s = 0; s < e.length; s += 1)-1 === t.indexOf(e[s]) && t.push(e[s]); return t }(l)) } d.fn = n.prototype; const c = { addClass: function () { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)t[s] = arguments[s]; const a = l(t.map((e => e.split(" ")))); return this.forEach((e => { e.classList.add(...a) })), this }, removeClass: function () { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)t[s] = arguments[s]; const a = l(t.map((e => e.split(" ")))); return this.forEach((e => { e.classList.remove(...a) })), this }, hasClass: function () { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)t[s] = arguments[s]; const a = l(t.map((e => e.split(" ")))); return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0 }, toggleClass: function () { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)t[s] = arguments[s]; const a = l(t.map((e => e.split(" ")))); this.forEach((e => { a.forEach((t => { e.classList.toggle(t) })) })) }, attr: function (e, t) { if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0; for (let s = 0; s < this.length; s += 1)if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]); return this }, removeAttr: function (e) { for (let t = 0; t < this.length; t += 1)this[t].removeAttribute(e); return this }, transform: function (e) { for (let t = 0; t < this.length; t += 1)this[t].style.transform = e; return this }, transition: function (e) { for (let t = 0; t < this.length; t += 1)this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e; return this }, on: function () { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)t[s] = arguments[s]; let [a, i, r, n] = t; function l(e) { const t = e.target; if (!t) return; const s = e.target.dom7EventData || []; if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s); else { const e = d(t).parents(); for (let t = 0; t < e.length; t += 1)d(e[t]).is(i) && r.apply(e[t], s) } } function o(e) { const t = e && e.target && e.target.dom7EventData || []; t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t) } "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1); const c = a.split(" "); let p; for (let e = 0; e < this.length; e += 1) { const t = this[e]; if (i) for (p = 0; p < c.length; p += 1) { const e = c[p]; t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }), t.addEventListener(e, l, n) } else for (p = 0; p < c.length; p += 1) { const e = c[p]; t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({ listener: r, proxyListener: o }), t.addEventListener(e, o, n) } } return this }, off: function () { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)t[s] = arguments[s]; let [a, i, r, n] = t; "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1); const l = a.split(" "); for (let e = 0; e < l.length; e += 1) { const t = l[e]; for (let e = 0; e < this.length; e += 1) { const s = this[e]; let a; if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) { const i = a[e]; r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) } } } return this }, trigger: function () { const e = r(); for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)s[a] = arguments[a]; const i = s[0].split(" "), n = s[1]; for (let t = 0; t < i.length; t += 1) { const a = i[t]; for (let t = 0; t < this.length; t += 1) { const i = this[t]; if (e.CustomEvent) { const t = new e.CustomEvent(a, { detail: n, bubbles: !0, cancelable: !0 }); i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData } } } return this }, transitionEnd: function (e) { const t = this; return e && t.on("transitionend", (function s(a) { a.target === this && (e.call(this, a), t.off("transitionend", s)) })), this }, outerWidth: function (e) { if (this.length > 0) { if (e) { const e = this.styles(); return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null }, outerHeight: function (e) { if (this.length > 0) { if (e) { const e = this.styles(); return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null }, styles: function () { const e = r(); return this[0] ? e.getComputedStyle(this[0], null) : {} }, offset: function () { if (this.length > 0) { const e = r(), t = a(), s = this[0], i = s.getBoundingClientRect(), n = t.body, l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0, d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft; return { top: i.top + d - l, left: i.left + c - o } } return null }, css: function (e, t) { const s = r(); let a; if (1 === arguments.length) { if ("string" != typeof e) { for (a = 0; a < this.length; a += 1)for (const t in e) this[a].style[t] = e[t]; return this } if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e) } if (2 === arguments.length && "string" == typeof e) { for (a = 0; a < this.length; a += 1)this[a].style[e] = t; return this } return this }, each: function (e) { return e ? (this.forEach(((t, s) => { e.apply(t, [t, s]) })), this) : this }, html: function (e) { if (void 0 === e) return this[0] ? this[0].innerHTML : null; for (let t = 0; t < this.length; t += 1)this[t].innerHTML = e; return this }, text: function (e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (let t = 0; t < this.length; t += 1)this[t].textContent = e; return this }, is: function (e) { const t = r(), s = a(), i = this[0]; let l, o; if (!i || void 0 === e) return !1; if ("string" == typeof e) { if (i.matches) return i.matches(e); if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e); if (i.msMatchesSelector) return i.msMatchesSelector(e); for (l = d(e), o = 0; o < l.length; o += 1)if (l[o] === i) return !0; return !1 } if (e === s) return i === s; if (e === t) return i === t; if (e.nodeType || e instanceof n) { for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)if (l[o] === i) return !0; return !1 } return !1 }, index: function () { let e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1); return e } }, eq: function (e) { if (void 0 === e) return this; const t = this.length; if (e > t - 1) return d([]); if (e < 0) { const s = t + e; return d(s < 0 ? [] : [this[s]]) } return d([this[e]]) }, append: function () { let e; const t = a(); for (let s = 0; s < arguments.length; s += 1) { e = s < 0 || arguments.length <= s ? void 0 : arguments[s]; for (let s = 0; s < this.length; s += 1)if ("string" == typeof e) { const a = t.createElement("div"); for (a.innerHTML = e; a.firstChild;)this[s].appendChild(a.firstChild) } else if (e instanceof n) for (let t = 0; t < e.length; t += 1)this[s].appendChild(e[t]); else this[s].appendChild(e) } return this }, prepend: function (e) { const t = a(); let s, i; for (s = 0; s < this.length; s += 1)if ("string" == typeof e) { const a = t.createElement("div"); for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]) } else if (e instanceof n) for (i = 0; i < e.length; i += 1)this[s].insertBefore(e[i], this[s].childNodes[0]); else this[s].insertBefore(e, this[s].childNodes[0]); return this }, next: function (e) { return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]) }, nextAll: function (e) { const t = []; let s = this[0]; if (!s) return d([]); for (; s.nextElementSibling;) { const a = s.nextElementSibling; e ? d(a).is(e) && t.push(a) : t.push(a), s = a } return d(t) }, prev: function (e) { if (this.length > 0) { const t = this[0]; return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]) } return d([]) }, prevAll: function (e) { const t = []; let s = this[0]; if (!s) return d([]); for (; s.previousElementSibling;) { const a = s.previousElementSibling; e ? d(a).is(e) && t.push(a) : t.push(a), s = a } return d(t) }, parent: function (e) { const t = []; for (let s = 0; s < this.length; s += 1)null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode)); return d(t) }, parents: function (e) { const t = []; for (let s = 0; s < this.length; s += 1) { let a = this[s].parentNode; for (; a;)e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode } return d(t) }, closest: function (e) { let t = this; return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) }, find: function (e) { const t = []; for (let s = 0; s < this.length; s += 1) { const a = this[s].querySelectorAll(e); for (let e = 0; e < a.length; e += 1)t.push(a[e]) } return d(t) }, children: function (e) { const t = []; for (let s = 0; s < this.length; s += 1) { const a = this[s].children; for (let s = 0; s < a.length; s += 1)e && !d(a[s]).is(e) || t.push(a[s]) } return d(t) }, filter: function (e) { return d(o(this, e)) }, remove: function () { for (let e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this } }; function p(e, t) { return void 0 === t && (t = 0), setTimeout(e, t) } function u() { return Date.now() } function h(e, t) { void 0 === t && (t = "x"); const s = r(); let a, i, n; const l = function (e) { const t = r(); let s; return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s }(e); return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0 } function m(e) { return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) } function f(e) { return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType) } function g() { const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"]; for (let s = 1; s < arguments.length; s += 1) { const a = s < 0 || arguments.length <= s ? void 0 : arguments[s]; if (null != a && !f(a)) { const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0)); for (let t = 0, i = s.length; t < i; t += 1) { const i = s[t], r = Object.getOwnPropertyDescriptor(a, i); void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i]) } } } return e } function v(e, t, s) { e.style.setProperty(t, s) } function w(e) { let { swiper: t, targetPosition: s, side: a } = e; const i = r(), n = -t.translate; let l, o = null; const d = t.params.speed; t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID); const c = s > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => { l = (new Date).getTime(), null === o && (o = l); const e = Math.max(Math.min((l - o) / d, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2; let c = n + r * (s - n); if (p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => { t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({ [a]: c }) })), void i.cancelAnimationFrame(t.cssModeFrameID); t.cssModeFrameID = i.requestAnimationFrame(u) }; u() } let b, x, y; function E() { return b || (b = function () { const e = r(), t = a(); return { smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch), passiveListener: function () { let t = !1; try { const s = Object.defineProperty({}, "passive", { get() { t = !0 } }); e.addEventListener("testPassiveListener", null, s) } catch (e) { } return t }(), gestures: "ongesturestart" in e } }()), b } function C(e) { return void 0 === e && (e = {}), x || (x = function (e) { let { userAgent: t } = void 0 === e ? {} : e; const s = E(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent, l = { ios: !1, android: !1 }, o = a.screen.width, d = a.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/); let p = n.match(/(iPad).*OS\s([\d_]+)/); const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "Win32" === i; let f = "MacIntel" === i; return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l }(e)), x } function T() { return y || (y = function () { const e = r(); return { isSafari: function () { const t = e.navigator.userAgent.toLowerCase(); return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0 }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) } }()), y } Object.keys(c).forEach((e => { Object.defineProperty(d.fn, e, { value: c[e], writable: !0 }) })); var $ = { on(e, t, s) { const a = this; if (!a.eventsListeners || a.destroyed) return a; if ("function" != typeof t) return a; const i = s ? "unshift" : "push"; return e.split(" ").forEach((e => { a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t) })), a }, once(e, t, s) { const a = this; if (!a.eventsListeners || a.destroyed) return a; if ("function" != typeof t) return a; function i() { a.off(e, i), i.__emitterProxy && delete i.__emitterProxy; for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)r[n] = arguments[n]; t.apply(a, r) } return i.__emitterProxy = t, a.on(e, i, s) }, onAny(e, t) { const s = this; if (!s.eventsListeners || s.destroyed) return s; if ("function" != typeof e) return s; const a = t ? "unshift" : "push"; return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s }, offAny(e) { const t = this; if (!t.eventsListeners || t.destroyed) return t; if (!t.eventsAnyListeners) return t; const s = t.eventsAnyListeners.indexOf(e); return s >= 0 && t.eventsAnyListeners.splice(s, 1), t }, off(e, t) { const s = this; return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => { void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => { (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1) })) })), s) : s }, emit() { const e = this; if (!e.eventsListeners || e.destroyed) return e; if (!e.eventsListeners) return e; let t, s, a; for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)r[n] = arguments[n]; "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a); return (Array.isArray(t) ? t : t.split(" ")).forEach((t => { e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => { e.apply(a, [t, ...s]) })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => { e.apply(a, s) })) })), e } }; var S = { updateSize: function () { const e = this; let t, s; const a = e.$el; t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s })) }, updateSlides: function () { const e = this; function t(t) { return e.isHorizontal() ? t : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t] } function s(e, s) { return parseFloat(e.getPropertyValue(t(s)) || 0) } const a = e.params, { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e, o = e.virtual && a.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, c = i.children(`.${e.params.slideClass}`), p = o ? e.virtual.slides.length : c.length; let u = []; const h = [], m = []; let f = a.slidesOffsetBefore; "function" == typeof f && (f = a.slidesOffsetBefore.call(e)); let g = a.slidesOffsetAfter; "function" == typeof g && (g = a.slidesOffsetAfter.call(e)); const w = e.snapGrid.length, b = e.slidesGrid.length; let x = a.spaceBetween, y = -f, E = 0, C = 0; if (void 0 === r) return; "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c.css({ marginRight: "", marginBottom: "", marginTop: "" }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", "")); const T = a.grid && a.grid.rows > 1 && e.grid; let $; T && e.grid.initSlides(p); const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0; for (let i = 0; i < p; i += 1) { $ = 0; const n = c.eq(i); if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) { if ("auto" === a.slidesPerView) { S && (c[i].style[t("width")] = ""); const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform; if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0); else { const e = s(r, "width"), t = s(r, "padding-left"), a = s(r, "padding-right"), i = s(r, "margin-left"), l = s(r, "margin-right"), o = r.getPropertyValue("box-sizing"); if (o && "border-box" === o) $ = e + i + l; else { const { clientWidth: s, offsetWidth: r } = n[0]; $ = e + t + a + i + l + (r - s) } } l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($)) } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`); c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1 } } if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({ width: `${e.virtualSize + a.spaceBetween}px` }), a.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + a.spaceBetween}px` }), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) { const t = []; for (let s = 0; s < u.length; s += 1) { let i = u[s]; a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i) } u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r) } if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) { const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight"); c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({ [s]: `${x}px` }) } if (a.centeredSlides && a.centeredSlidesBounds) { let e = 0; m.forEach((t => { e += t + (a.spaceBetween ? a.spaceBetween : 0) })), e -= a.spaceBetween; const t = e - r; u = u.map((e => e < 0 ? -f : e > t ? t + g : e)) } if (a.centerInsufficientSlides) { let e = 0; if (m.forEach((t => { e += t + (a.spaceBetween ? a.spaceBetween : 0) })), e -= a.spaceBetween, e < r) { const t = (r - e) / 2; u.forEach(((e, s) => { u[s] = e - t })), h.forEach(((e, s) => { h[s] = e + t })) } } if (Object.assign(e, { slides: c, snapGrid: u, slidesGrid: h, slidesSizesGrid: m }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) { v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px"); const t = -e.snapGrid[0], s = -e.slidesGrid[0]; e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s)) } if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) { const t = `${a.containerModifierClass}backface-hidden`, s = e.$el.hasClass(t); p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t) } }, updateAutoHeight: function (e) { const t = this, s = [], a = t.virtual && t.params.virtual.enabled; let i, r = 0; "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed); const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0]; if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || d([])).each((e => { s.push(e) })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) { const e = t.activeIndex + i; if (e > t.slides.length && !a) break; s.push(n(e)) } else s.push(n(t.activeIndex)); for (i = 0; i < s.length; i += 1)if (void 0 !== s[i]) { const e = s[i].offsetHeight; r = e > r ? e : r } (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`) }, updateSlidesOffset: function () { const e = this, t = e.slides; for (let s = 0; s < t.length; s += 1)t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop }, updateSlidesProgress: function (e) { void 0 === e && (e = this && this.translate || 0); const t = this, s = t.params, { slides: a, rtlTranslate: i, snapGrid: r } = t; if (0 === a.length) return; void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset(); let n = -e; i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = []; for (let e = 0; e < a.length; e += 1) { const l = a[e]; let o = l.swiperSlideOffset; s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset); const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), p = -(n - o), u = p + t.slidesSizesGrid[e]; (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c } t.visibleSlides = d(t.visibleSlides) }, updateProgress: function (e) { const t = this; if (void 0 === e) { const s = t.rtlTranslate ? -1 : 1; e = t && t.translate && t.translate * s || 0 } const s = t.params, a = t.maxTranslate() - t.minTranslate(); let { progress: i, isBeginning: r, isEnd: n } = t; const l = r, o = n; 0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, { progress: i, isBeginning: r, isEnd: n }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i) }, updateSlidesClasses: function () { const e = this, { slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r } = e, n = e.virtual && s.virtual.enabled; let l; t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass)); let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass); s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass)); let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass); s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses() }, updateActiveIndex: function (e) { const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o } = t; let d, c = e; if (void 0 === c) { for (let e = 0; e < a.length; e += 1)void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e); r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0) } if (i.indexOf(s) >= 0) d = i.indexOf(s); else { const e = Math.min(r.slidesPerGroupSkip, c); d = e + Math.floor((c - e) / r.slidesPerGroup) } if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange"))); const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10); Object.assign(t, { snapIndex: d, realIndex: p, previousIndex: n, activeIndex: c }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange") }, updateClickedSlide: function (e) { const t = this, s = t.params, a = d(e).closest(`.${s.slideClass}`)[0]; let i, r = !1; if (a) for (let e = 0; e < t.slides.length; e += 1)if (t.slides[e] === a) { r = !0, i = e; break } if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0); t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide() } }; var M = { getTranslate: function (e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this; if (t.virtualTranslate) return s ? -a : a; if (t.cssMode) return a; let r = h(i[0], e); return s && (r = -r), r || 0 }, setTranslate: function (e, t) { const s = this, { rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l } = s; let o, d = 0, c = 0; s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c; const p = s.maxTranslate() - s.minTranslate(); o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t) }, minTranslate: function () { return -this.snapGrid[0] }, maxTranslate: function () { return -this.snapGrid[this.snapGrid.length - 1] }, translateTo: function (e, t, s, a, i) { void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0); const r = this, { params: n, wrapperEl: l } = r; if (r.animating && n.preventInteractionOnTransition) return !1; const o = r.minTranslate(), d = r.maxTranslate(); let c; if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) { const e = r.isHorizontal(); if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else { if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0; l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" }) } return !0 } return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd")) }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0 } }; function P(e) { let { swiper: t, runCallbacks: s, direction: a, step: i } = e; const { activeIndex: r, previousIndex: n } = t; let l = a; if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) { if ("reset" === l) return void t.emit(`slideResetTransition${i}`); t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`) } } var k = { slideTo: function (e, t, s, a, i) { if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`); if ("string" == typeof e) { const t = parseInt(e, 10); if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`); e = t } const r = this; let n = e; n < 0 && (n = 0); const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m } = r; if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1; const f = Math.min(r.params.slidesPerGroupSkip, n); let g = f + Math.floor((n - f) / r.params.slidesPerGroup); g >= o.length && (g = o.length - 1); const v = -o[g]; if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) { const t = -Math.floor(100 * v), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]); void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e) } if (r.initialized && n !== p) { if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1; if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1 } let b; if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1; if (l.cssMode) { const e = r.isHorizontal(), s = u ? v : -v; if (0 === t) { const t = r.virtual && r.params.virtual.enabled; t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => { r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1 })) } else { if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0; h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" }) } return !0 } return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b)) }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0 }, slideToLoop: function (e, t, s, a) { if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) { const t = parseInt(e, 10); if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`); e = t } const i = this; let r = e; return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a) }, slideNext: function (e, t, s) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); const a = this, { animating: i, enabled: r, params: n } = a; if (!r) return a; let l = n.slidesPerGroup; "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1)); const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l; if (n.loop) { if (i && n.loopPreventsSlide) return !1; a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft } return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s) }, slidePrev: function (e, t, s) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0); const a = this, { params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d } = a; if (!d) return a; if (i.loop) { if (r && i.loopPreventsSlide) return !1; a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft } function c(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) } const p = c(o ? a.translate : -a.translate), u = n.map((e => c(e))); let h = n[u.indexOf(p) - 1]; if (void 0 === h && i.cssMode) { let e; n.forEach(((t, s) => { p >= t && (e = s) })), void 0 !== e && (h = n[e > 0 ? e - 1 : e]) } let m = 0; if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) { const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1; return a.slideTo(i, e, t, s) } return a.slideTo(m, e, t, s) }, slideReset: function (e, t, s) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s) }, slideToClosest: function (e, t, s, a) { void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5); const i = this; let r = i.activeIndex; const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate; if (o >= i.snapGrid[l]) { const e = i.snapGrid[l]; o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup) } else { const e = i.snapGrid[l - 1]; o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup) } return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s) }, slideToClickedSlide: function () { const e = this, { params: t, $wrapperEl: s } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView; let i, r = e.clickedIndex; if (t.loop) { if (e.animating) return; i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => { e.slideTo(r) }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => { e.slideTo(r) }))) : e.slideTo(r) } else e.slideTo(r) } }; var z = { loopCreate: function () { const e = this, t = a(), { params: s, $wrapperEl: i } = e, r = i.children().length > 0 ? d(i.children()[0].parentNode) : i; r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove(); let n = r.children(`.${s.slideClass}`); if (s.loopFillGroupWithBlank) { const e = s.slidesPerGroup - n.length % s.slidesPerGroup; if (e !== s.slidesPerGroup) { for (let a = 0; a < e; a += 1) { const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`); r.append(e) } n = r.children(`.${s.slideClass}`) } } "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length); const l = [], o = []; n.each(((e, t) => { d(e).attr("data-swiper-slide-index", t) })); for (let t = 0; t < e.loopedSlides; t += 1) { const e = t - Math.floor(t / n.length) * n.length; o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]) } for (let e = 0; e < o.length; e += 1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass)); for (let e = l.length - 1; e >= 0; e -= 1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass)) }, loopFix: function () { const e = this; e.emit("beforeLoopFix"); const { activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l } = e; let o; e.allowSlidePrev = !0, e.allowSlideNext = !0; const d = -n[t] - e.getTranslate(); if (t < a) { o = s.length - 3 * a + t, o += a; e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d) } else if (t >= s.length - a) { o = -s.length + t + a, o += a; e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d) } e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix") }, loopDestroy: function () { const { $wrapperEl: e, params: t, slides: s } = this; e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index") } }; function L(e) { const t = this, s = a(), i = r(), n = t.touchEventsData, { params: l, touches: o, enabled: c } = t; if (!c) return; if (t.animating && l.preventInteractionOnTransition) return; !t.animating && l.cssMode && l.loop && t.loopFix(); let p = e; p.originalEvent && (p = p.originalEvent); let h = d(p.target); if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return; if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return; if (!n.isTouchEvent && "button" in p && p.button > 0) return; if (n.isTouched && n.isMoved) return; const m = !!l.noSwipingClass && "" !== l.noSwipingClass, f = e.composedPath ? e.composedPath() : e.path; m && p.target && p.target.shadowRoot && f && (h = d(f[0])); const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, v = !(!p.target || !p.target.shadowRoot); if (l.noSwiping && (v ? function (e, t) { return void 0 === t && (t = this), function t(s) { if (!s || s === a() || s === r()) return null; s.assignedSlot && (s = s.assignedSlot); const i = s.closest(e); return i || s.getRootNode ? i || t(s.getRootNode().host) : null }(t) }(g, h[0]) : h.closest(g)[0])) return void (t.allowClick = !0); if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return; o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY; const w = o.currentX, b = o.currentY, x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection, y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold; if (x && (w <= y || w >= i.innerWidth - y)) { if ("prevent" !== x) return; e.preventDefault() } if (Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) { let e = !0; h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur(); const a = e && t.allowTouchMove && l.touchStartPreventDefault; !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault() } t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p) } function O(e) { const t = a(), s = this, i = s.touchEventsData, { params: r, touches: n, rtlTranslate: l, enabled: o } = s; if (!o) return; let c = e; if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c)); if (i.isTouchEvent && "touchmove" !== c.type) return; const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]), h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY; if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m); if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }), i.touchStartTime = u())); if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) { if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1) } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return; if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1); if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return; n.currentX = h, n.currentY = m; const f = n.currentX - n.startX, g = n.currentY - n.startY; if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return; if (void 0 === i.isScrolling) { let e; s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle) } if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1); if (!i.startMoving) return; s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0; let v = s.isHorizontal() ? f : g; n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate; let w = !0, b = r.resistanceRatio; if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) { if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY) } r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate)) } function I(e) { const t = this, s = t.touchEventsData, { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t; if (!l) return; let o = e; if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1); a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1); const d = u(), c = d - s.touchStartTime; if (t.allowClick) { const e = o.path || o.composedPath && o.composedPath(); t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o) } if (s.lastClickTime = u(), p((() => { t.destroyed || (t.allowClick = !0) })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1); let h; if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return; if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: h }); let m = 0, f = t.slidesSizesGrid[0]; for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) { const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup; void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2]) } let g = null, v = null; a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0)); const w = (h - n[m]) / f, b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup; if (c > a.longSwipesMs) { if (!a.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m)) } else { if (!a.shortSwipes) return void t.slideTo(t.activeIndex); t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m)) } } function A() { const e = this, { params: t, el: s } = e; if (s && 0 === s.offsetWidth) return; t.breakpoints && e.setBreakpoint(); const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e; e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow() } function D(e) { const t = this; t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))) } function G() { const e = this, { wrapperEl: t, rtlTranslate: s, enabled: a } = e; if (!a) return; let i; e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(); const r = e.maxTranslate() - e.minTranslate(); i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1) } let N = !1; function B() { } const H = (e, t) => { const s = a(), { params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d } = e, c = !!i.nested, p = "on" === t ? "addEventListener" : "removeEventListener", u = t; if (d.touch) { const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 }; n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? { passive: !1, capture: c } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t) } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1); (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0) }; var X = { attachEvents: function () { const e = this, t = a(), { params: s, support: i } = e; e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on") }, detachEvents: function () { H(this, "off") } }; const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1; var R = { addClasses: function () { const e = this, { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e, l = function (e, t) { const s = []; return e.forEach((e => { "object" == typeof e ? Object.keys(e).forEach((a => { e[a] && s.push(t + a) })) : "string" == typeof e && s.push(t + e) })), s }(["initialized", s.direction, { "pointer-events": !n.touch }, { "free-mode": e.params.freeMode && s.freeMode.enabled }, { autoheight: s.autoHeight }, { rtl: a }, { grid: s.grid && s.grid.rows > 1 }, { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill }, { android: r.android }, { ios: r.ios }, { "css-mode": s.cssMode }, { centered: s.cssMode && s.centeredSlides }, { "watch-progress": s.watchSlidesProgress }], s.containerModifierClass); t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses() }, removeClasses: function () { const { $el: e, classNames: t } = this; e.removeClass(t.join(" ")), this.emitContainerClasses() } }; var W = { init: !0, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, resizeObserver: !0, nested: !1, createElements: !1, enabled: !0, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: !1, userAgent: null, url: null, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: !1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopedSlidesLimit: !0, loopFillGroupWithBlank: !1, loopPreventsSlide: !0, rewind: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0, _emitClasses: !1 }; function q(e, t) { return function (s) { void 0 === s && (s = {}); const a = Object.keys(s)[0], i = s[a]; "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = { auto: !0 }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = { enabled: !0 }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = { enabled: !1 }), g(t, s)) : g(t, s)) : g(t, s) } } const j = { eventsEmitter: $, update: S, translate: M, transition: { setTransition: function (e, t) { const s = this; s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t) }, transitionStart: function (e, t) { void 0 === e && (e = !0); const s = this, { params: a } = s; a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({ swiper: s, runCallbacks: e, direction: t, step: "Start" })) }, transitionEnd: function (e, t) { void 0 === e && (e = !0); const s = this, { params: a } = s; s.animating = !1, a.cssMode || (s.setTransition(0), P({ swiper: s, runCallbacks: e, direction: t, step: "End" })) } }, slide: k, loop: z, grabCursor: { setGrabCursor: function (e) { const t = this; if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return; const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl; s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab" }, unsetGrabCursor: function () { const e = this; e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "") } }, events: X, breakpoints: { setBreakpoint: function () { const e = this, { activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r } = e, n = i.breakpoints; if (!n || n && 0 === Object.keys(n).length) return; const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el); if (!l || e.currentBreakpoint === l) return; const o = (l in n ? n[l] : void 0) || e.originalParams, d = Y(e, i), c = Y(e, o), p = i.enabled; d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => { const s = i[t] && i[t].enabled, a = o[t] && o[t].enabled; s && !a && e[t].disable(), !s && a && e[t].enable() })); const u = o.direction && o.direction !== i.direction, h = i.loop && (o.slidesPerView !== i.slidesPerView || u); u && s && e.changeDirection(), g(e.params, o); const m = e.params.enabled; Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o) }, getBreakpoint: function (e, t, s) { if (void 0 === t && (t = "window"), !e || "container" === t && !s) return; let a = !1; const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map((e => { if ("string" == typeof e && 0 === e.indexOf("@")) { const t = parseFloat(e.substr(1)); return { value: n * t, point: e } } return { value: e, point: e } })); l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10))); for (let e = 0; e < l.length; e += 1) { const { point: r, value: n } = l[e]; "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r) } return a || "max" } }, checkOverflow: { checkOverflow: function () { const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: a } = s; if (a) { const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a; e.isLocked = e.size > s } else e.isLocked = 1 === e.snapGrid.length; !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock") } }, classes: R, images: { loadImage: function (e, t, s, a, i, n) { const l = r(); let o; function c() { n && n() } d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c() }, preloadImages: function () { const e = this; function t() { null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) } e.imagesToLoad = e.$el.find("img"); for (let s = 0; s < e.imagesToLoad.length; s += 1) { const a = e.imagesToLoad[s]; e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t) } } } }, _ = {}; class V { constructor() { let e, t; for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)a[i] = arguments[i]; if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) { const e = []; return d(t.el).each((s => { const a = g({}, t, { el: s }); e.push(new V(a)) })), e } const r = this; r.__swiper__ = !0, r.support = E(), r.device = C({ userAgent: t.userAgent }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules); const n = {}; r.modules.forEach((e => { e({ swiper: r, extendParams: q(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r) }) })); const l = g({}, W, n); return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => { r.on(e, r.params.on[e]) })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, { enabled: r.params.enabled, el: e, classNames: [], slides: d(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === r.params.direction, isVertical: () => "vertical" === r.params.direction, activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: function () { const e = ["touchstart", "touchmove", "touchend", "touchcancel"], t = ["pointerdown", "pointermove", "pointerup"]; return r.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }, r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop }(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: r.params.focusableElements, lastClickTime: u(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: r.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r.emit("_swiper"), r.params.init && r.init(), r } enable() { const e = this; e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable")) } disable() { const e = this; e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable")) } setProgress(e, t) { const s = this; e = Math.min(Math.max(e, 0), 1); const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a; s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses() } emitContainerClasses() { const e = this; if (!e.params._emitClasses || !e.el) return; const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass))); e.emit("_containerClasses", t.join(" ")) } getSlideClasses(e) { const t = this; return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ") } emitSlidesClasses() { const e = this; if (!e.params._emitClasses || !e.el) return; const t = []; e.slides.each((s => { const a = e.getSlideClasses(s); t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a) })), e.emit("_slideClasses", t) } slidesPerViewDynamic(e, t) { void 0 === e && (e = "current"), void 0 === t && (t = !1); const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this; let o = 1; if (s.centeredSlides) { let e, t = a[l].swiperSlideSize; for (let s = l + 1; s < a.length; s += 1)a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0)); for (let s = l - 1; s >= 0; s -= 1)a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0)) } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) { (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1) } else for (let e = l - 1; e >= 0; e -= 1) { i[l] - i[e] < n && (o += 1) } return o } update() { const e = this; if (!e || e.destroyed) return; const { snapGrid: t, params: s } = e; function a() { const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate()); e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses() } let i; s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update") } changeDirection(e, t) { void 0 === t && (t = !0); const s = this, a = s.params.direction; return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => { "vertical" === e ? t.style.width = "" : t.style.height = "" })), s.emit("changeDirection"), t && s.update()), s } changeLanguageDirection(e) { const t = this; t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update()) } mount(e) { const t = this; if (t.mounted) return !0; const s = d(e || t.params.el); if (!(e = s[0])) return !1; e.swiper = t; const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`; let r = (() => { if (e && e.shadowRoot && e.shadowRoot.querySelector) { const t = d(e.shadowRoot.querySelector(i())); return t.children = e => s.children(e), t } return s.children ? s.children(i()) : d(s).children(i()) })(); if (0 === r.length && t.params.createElements) { const e = a().createElement("div"); r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => { r.append(e) })) } return Object.assign(t, { $el: s, el: e, $wrapperEl: r, wrapperEl: r[0], mounted: !0, rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"), rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")), wrongRTL: "-webkit-box" === r.css("display") }), !0 } init(e) { const t = this; if (t.initialized) return t; return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t } destroy(e, t) { void 0 === e && (e = !0), void 0 === t && (t = !0); const s = this, { params: a, $el: i, $wrapperEl: r, slides: n } = s; return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => { s.off(e) })), !1 !== e && (s.$el[0].swiper = null, function (e) { const t = e; Object.keys(t).forEach((e => { try { t[e] = null } catch (e) { } try { delete t[e] } catch (e) { } })) }(s)), s.destroyed = !0), null } static extendDefaults(e) { g(_, e) } static get extendedDefaults() { return _ } static get defaults() { return W } static installModule(e) { V.prototype.__modules__ || (V.prototype.__modules__ = []); const t = V.prototype.__modules__; "function" == typeof e && t.indexOf(e) < 0 && t.push(e) } static use(e) { return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V) } } function F(e, t, s, i) { const r = a(); return e.params.createElements && Object.keys(i).forEach((a => { if (!s[a] && !0 === s.auto) { let n = e.$el.children(`.${i[a]}`)[0]; n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n } })), s } function U(e) { return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}` } function K(e) { const t = this, { $wrapperEl: s, params: a } = t; if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1)e[t] && s.append(e[t]); else s.append(e); a.loop && t.loopCreate(), a.observer || t.update() } function Z(e) { const t = this, { params: s, $wrapperEl: a, activeIndex: i } = t; s.loop && t.loopDestroy(); let r = i + 1; if ("object" == typeof e && "length" in e) { for (let t = 0; t < e.length; t += 1)e[t] && a.prepend(e[t]); r = i + e.length } else a.prepend(e); s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1) } function Q(e, t) { const s = this, { $wrapperEl: a, params: i, activeIndex: r } = s; let n = r; i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`)); const l = s.slides.length; if (e <= 0) return void s.prependSlide(t); if (e >= l) return void s.appendSlide(t); let o = n > e ? n + 1 : n; const d = []; for (let t = l - 1; t >= e; t -= 1) { const e = s.slides.eq(t); e.remove(), d.unshift(e) } if ("object" == typeof t && "length" in t) { for (let e = 0; e < t.length; e += 1)t[e] && a.append(t[e]); o = n > e ? n + t.length : n } else a.append(t); for (let e = 0; e < d.length; e += 1)a.append(d[e]); i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1) } function J(e) { const t = this, { params: s, $wrapperEl: a, activeIndex: i } = t; let r = i; s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`)); let n, l = r; if ("object" == typeof e && "length" in e) { for (let s = 0; s < e.length; s += 1)n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1); l = Math.max(l, 0) } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0); s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1) } function ee() { const e = this, t = []; for (let s = 0; s < e.slides.length; s += 1)t.push(s); e.removeSlide(t) } function te(e) { const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e; let c; a("beforeInit", (() => { if (s.params.effect !== t) return; s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`); const e = n ? n() : {}; Object.assign(s.params, e), Object.assign(s.originalParams, e) })), a("setTranslate", (() => { s.params.effect === t && i() })), a("setTransition", ((e, a) => { s.params.effect === t && r(a) })), a("transitionEnd", (() => { if (s.params.effect === t && o) { if (!d || !d().slideShadows) return; s.slides.each((e => { s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove() })), o() } })), a("virtualUpdate", (() => { s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => { c && s.slides && s.slides.length && (i(), c = !1) }))) })) } function se(e, t) { return e.transformEl ? t.find(e.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t } function ae(e) { let { swiper: t, duration: s, transformEl: a, allSlides: i } = e; const { slides: r, activeIndex: n, $wrapperEl: l } = t; if (t.params.virtualTranslate && 0 !== s) { let e, s = !1; e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => { if (s) return; if (!t || t.destroyed) return; s = !0, t.animating = !1; const e = ["webkitTransitionEnd", "transitionend"]; for (let t = 0; t < e.length; t += 1)l.trigger(e[t]) })) } } function ie(e, t, s) { const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t; let r = i.children(`.${a}`); return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r } Object.keys(j).forEach((e => { Object.keys(j[e]).forEach((t => { V.prototype[t] = j[e][t] })) })), V.use([function (e) { let { swiper: t, on: s, emit: a } = e; const i = r(); let n = null, l = null; const o = () => { t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize")) }, d = () => { t && !t.destroyed && t.initialized && a("orientationchange") }; s("init", (() => { t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => { l = i.requestAnimationFrame((() => { const { width: s, height: a } = t; let i = s, r = a; e.forEach((e => { let { contentBoxSize: s, contentRect: a, target: n } = e; n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize) })), i === s && r === a || o() })) })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d)) })), s("destroy", (() => { l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d) })) }, function (e) { let { swiper: t, extendParams: s, on: a, emit: i } = e; const n = [], l = r(), o = function (e, t) { void 0 === t && (t = {}); const s = new (l.MutationObserver || l.WebkitMutationObserver)((e => { if (1 === e.length) return void i("observerUpdate", e[0]); const t = function () { i("observerUpdate", e[0]) }; l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0) })); s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), n.push(s) }; s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), a("init", (() => { if (t.params.observer) { if (t.params.observeParents) { const e = t.$el.parents(); for (let t = 0; t < e.length; t += 1)o(e[t]) } o(t.$el[0], { childList: t.params.observeSlideChildren }), o(t.$wrapperEl[0], { attributes: !1 }) } })), a("destroy", (() => { n.forEach((e => { e.disconnect() })), n.splice(0, n.length) })) }]); const re = [function (e) { let t, { swiper: s, extendParams: a, on: i, emit: r } = e; function n(e, t) { const a = s.params.virtual; if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t]; const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`); return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i } function l(e) { const { slidesPerView: t, slidesPerGroup: a, centeredSlides: i } = s.params, { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual, { from: d, to: c, slides: p, slidesGrid: u, offset: h } = s.virtual; s.params.cssMode || s.updateActiveIndex(); const m = s.activeIndex || 0; let f, g, v; f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l); const w = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, p.length - 1), x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0); function y() { s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate") } if (Object.assign(s.virtual, { from: w, to: b, offset: x, slidesGrid: s.slidesGrid }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate"); if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, { offset: x, from: w, to: b, slides: function () { const e = []; for (let t = w; t <= b; t += 1)e.push(p[t]); return e }() }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate")); const E = [], C = []; if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove(); else for (let e = d; e <= c; e += 1)(e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove(); for (let t = 0; t < p.length; t += 1)t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t))); C.forEach((e => { s.$wrapperEl.append(n(p[e], e)) })), E.sort(((e, t) => t - e)).forEach((e => { s.$wrapperEl.prepend(n(p[e], e)) })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y() } a({ virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } }), s.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }, i("beforeInit", (() => { s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l()) })), i("setTranslate", (() => { s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => { l() }), 100)) : l()) })), i("init update resize", (() => { s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`) })), Object.assign(s.virtual, { appendSlide: function (e) { if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1)e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e); l(!0) }, prependSlide: function (e) { const t = s.activeIndex; let a = t + 1, i = 1; if (Array.isArray(e)) { for (let t = 0; t < e.length; t += 1)e[t] && s.virtual.slides.unshift(e[t]); a = t + e.length, i = e.length } else s.virtual.slides.unshift(e); if (s.params.virtual.cache) { const e = s.virtual.cache, t = {}; Object.keys(e).forEach((s => { const a = e[s], r = a.attr("data-swiper-slide-index"); r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a })), s.virtual.cache = t } l(!0), s.slideTo(a, 0) }, removeSlide: function (e) { if (null == e) return; let t = s.activeIndex; if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1)s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0); else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0); l(!0), s.slideTo(t, 0) }, removeAllSlides: function () { s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0) }, update: l }) }, function (e) { let { swiper: t, extendParams: s, on: i, emit: n } = e; const l = a(), o = r(); function c(e) { if (!t.enabled) return; const { rtlTranslate: s } = t; let a = e; a.originalEvent && (a = a.originalEvent); const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i, p = 37 === i, u = 39 === i, h = 38 === i, m = 40 === i; if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1; if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1; if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) { if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) { let e = !1; if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return; const a = t.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = o.innerWidth, l = o.innerHeight, d = t.$el.offset(); s && (d.left -= t.$el[0].scrollLeft); const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]]; for (let t = 0; t < c.length; t += 1) { const s = c[t]; if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) { if (0 === s[0] && 0 === s[1]) continue; e = !0 } } if (!e) return } t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i) } } function p() { t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0) } function u() { t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1) } t.keyboard = { enabled: !1 }, s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }), i("init", (() => { t.params.keyboard.enabled && p() })), i("destroy", (() => { t.keyboard.enabled && u() })), Object.assign(t.keyboard, { enable: p, disable: u }) }, function (e) { let { swiper: t, extendParams: s, on: a, emit: i } = e; const n = r(); let l; s({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), t.mousewheel = { enabled: !1 }; let o, c = u(); const h = []; function m() { t.enabled && (t.mouseEntered = !0) } function f() { t.enabled && (t.mouseEntered = !1) } function g(e) { return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1))) } function v(e) { let s = e, a = !0; if (!t.enabled) return; const r = t.params.mousewheel; t.params.cssMode && s.preventDefault(); let n = t.$el; if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0; s.originalEvent && (s = s.originalEvent); let c = 0; const m = t.rtlTranslate ? -1 : 1, f = function (e) { let t = 0, s = 0, a = 0, i = 0; return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), { spinX: t, spinY: s, pixelX: a, pixelY: i } }(s); if (r.forceToAxis) if (t.isHorizontal()) { if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0; c = -f.pixelX * m } else { if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0; c = -f.pixelY } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY; if (0 === c) return !0; r.invert && (c = -c); let v = t.getTranslate() + c * r.sensitivity; if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) { const e = { time: u(), delta: Math.abs(c), direction: Math.sign(c) }, a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction; if (!a) { o = void 0, t.params.loop && t.loopFix(); let n = t.getTranslate() + c * r.sensitivity; const d = t.isBeginning, u = t.isEnd; if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) { clearTimeout(l), l = void 0, h.length >= 15 && h.shift(); const s = h.length ? h[h.length - 1] : void 0, a = h[0]; if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0); else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) { const s = c > 0 ? .8 : .2; o = e, h.splice(0), l = p((() => { t.slideToClosest(t.params.speed, !0, void 0, s) }), 0) } l || (l = p((() => { o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5) }), 500)) } if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0 } } else { const s = { time: u(), delta: Math.abs(c), direction: Math.sign(c), raw: e }; h.length >= 2 && h.shift(); const a = h.length ? h[h.length - 1] : void 0; if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function (e) { const s = t.params.mousewheel; if (e.direction < 0) { if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0 } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0; return !1 }(s)) return !0 } return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1 } function w(e) { let s = t.$el; "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v) } function b() { return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0) } function x() { return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0) } a("init", (() => { !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b() })), a("destroy", (() => { t.params.cssMode && b(), t.mousewheel.enabled && x() })), Object.assign(t.mousewheel, { enable: b, disable: x }) }, function (e) { let { swiper: t, extendParams: s, on: a, emit: i } = e; function r(e) { let s; return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s } function n(e, s) { const a = t.params.navigation; e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass)) } function l() { if (t.params.loop) return; const { $nextEl: e, $prevEl: s } = t.navigation; n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind) } function o(e) { e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev")) } function c(e) { e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext")) } function p() { const e = t.params.navigation; if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !e.nextEl && !e.prevEl) return; const s = r(e.nextEl), a = r(e.prevEl); s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: a, prevEl: a && a[0] }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass)) } function u() { const { $nextEl: e, $prevEl: s } = t.navigation; e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass)) } s({ navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }, a("init", (() => { !1 === t.params.navigation.enabled ? h() : (p(), l()) })), a("toEdge fromEdge lock unlock", (() => { l() })), a("destroy", (() => { u() })), a("enable disable", (() => { const { $nextEl: e, $prevEl: s } = t.navigation; e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass) })), a("click", ((e, s) => { const { $nextEl: a, $prevEl: r } = t.navigation, n = s.target; if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) { if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return; let e; a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass) } })); const h = () => { t.$el.addClass(t.params.navigation.navigationDisabledClass), u() }; Object.assign(t.navigation, { enable: () => { t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l() }, disable: h, update: l, init: p, destroy: u }) }, function (e) { let { swiper: t, extendParams: s, on: a, emit: i } = e; const r = "swiper-pagination"; let n; s({ pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: e => e, formatFractionTotal: e => e, bulletClass: `${r}-bullet`, bulletActiveClass: `${r}-bullet-active`, modifierClass: `${r}-`, currentClass: `${r}-current`, totalClass: `${r}-total`, hiddenClass: `${r}-hidden`, progressbarFillClass: `${r}-progressbar-fill`, progressbarOppositeClass: `${r}-progressbar-opposite`, clickableClass: `${r}-clickable`, lockClass: `${r}-lock`, horizontalClass: `${r}-horizontal`, verticalClass: `${r}-vertical`, paginationDisabledClass: `${r}-disabled` } }), t.pagination = { el: null, $el: null, bullets: [] }; let l = 0; function o() { return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length } function c(e, s) { const { bulletActiveClass: a } = t.params.pagination; e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`) } function p() { const e = t.rtl, s = t.params.pagination; if (o()) return; const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, r = t.pagination.$el; let p; const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length; if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) { const a = t.pagination.bullets; let i, o, u; if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => { const t = d(e), a = t.index(); a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next")) })); else { const e = a.eq(p), r = e.index(); if (e.addClass(s.bulletActiveClass), s.dynamicBullets) { const e = a.eq(i), n = a.eq(o); for (let e = i; e <= o; e += 1)a.eq(e).addClass(`${s.bulletActiveClass}-main`); if (t.params.loop) if (r >= a.length) { for (let e = s.dynamicMainBullets; e >= 0; e -= 1)a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`); a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`) } else c(e, "prev"), c(n, "next"); else c(e, "prev"), c(n, "next") } } if (s.dynamicBullets) { const i = Math.min(a.length, s.dynamicMainBullets + 4), r = (n * i - n) / 2 - u * n, l = e ? "right" : "left"; a.css(t.isHorizontal() ? l : "top", `${r}px`) } } if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) { let e; e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical"; const a = (p + 1) / u; let i = 1, n = 1; "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed) } "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass) } function u() { const e = t.params.pagination; if (o()) return; const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, a = t.pagination.$el; let r = ""; if ("bullets" === e.type) { let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length; t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s); for (let s = 0; s < i; s += 1)e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`; a.html(r), t.pagination.bullets = a.find(U(e.bulletClass)) } "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0]) } function h() { t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" }); const e = t.params.pagination; if (!e.el) return; let s = d(e.el); 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function (e) { e.preventDefault(); let s = d(this).index() * t.params.slidesPerGroup; t.params.loop && (s += t.loopedSlides), t.slideTo(s) })), Object.assign(t.pagination, { $el: s, el: s[0] }), t.enabled || s.addClass(e.lockClass)) } function m() { const e = t.params.pagination; if (o()) return; const s = t.pagination.$el; s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass)) } a("init", (() => { !1 === t.params.pagination.enabled ? f() : (h(), u(), p()) })), a("activeIndexChange", (() => { (t.params.loop || void 0 === t.snapIndex) && p() })), a("snapIndexChange", (() => { t.params.loop || p() })), a("slidesLengthChange", (() => { t.params.loop && (u(), p()) })), a("snapGridLengthChange", (() => { t.params.loop || (u(), p()) })), a("destroy", (() => { m() })), a("enable disable", (() => { const { $el: e } = t.pagination; e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass) })), a("lock unlock", (() => { p() })), a("click", ((e, s) => { const a = s.target, { $el: r } = t.pagination; if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) { if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return; const e = r.hasClass(t.params.pagination.hiddenClass); i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass) } })); const f = () => { t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m() }; Object.assign(t.pagination, { enable: () => { t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p() }, disable: f, render: u, update: p, init: h, destroy: m }) }, function (e) { let { swiper: t, extendParams: s, on: i, emit: r } = e; const n = a(); let l, o, c, u, h = !1, m = null, f = null; function g() { if (!t.params.scrollbar.el || !t.scrollbar.el) return; const { scrollbar: e, rtlTranslate: s, progress: a } = t, { $dragEl: i, $el: r } = e, n = t.params.scrollbar; let l = o, d = (c - o) * a; s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => { r[0].style.opacity = 0, r.transition(400) }), 1e3)) } function v() { if (!t.params.scrollbar.el || !t.scrollbar.el) return; const { scrollbar: e } = t, { $dragEl: s, $el: a } = e; s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass) } function w(e) { return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY } function b(e) { const { scrollbar: s, rtlTranslate: a } = t, { $el: i } = s; let r; r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r); const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r; t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses() } function x(e) { const s = t.params.scrollbar, { scrollbar: a, $wrapperEl: i } = t, { $el: n, $dragEl: o } = a; h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e) } function y(e) { const { scrollbar: s, $wrapperEl: a } = t, { $el: i, $dragEl: n } = s; h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e)) } function E(e) { const s = t.params.scrollbar, { scrollbar: a, $wrapperEl: i } = t, { $el: n } = a; h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => { n.css("opacity", 0), n.transition(400) }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest()) } function C(e) { const { scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l } = t, o = s.$el; if (!o) return; const d = o[0], c = !(!l.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 }, p = !(!l.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 }; if (!d) return; const u = "on" === e ? "addEventListener" : "removeEventListener"; l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p)) } function T() { const { scrollbar: e, $el: s } = t; t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, { el: "swiper-scrollbar" }); const a = t.params.scrollbar; if (!a.el) return; let i = d(a.el); t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass); let r = i.find(`.${t.params.scrollbar.dragClass}`); 0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass) } function $() { const e = t.params.scrollbar, s = t.scrollbar.$el; s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off") } s({ scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }, i("init", (() => { !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g()) })), i("update resize observerUpdate lock unlock", (() => { v() })), i("setTranslate", (() => { g() })), i("setTransition", ((e, s) => { !function (e) { t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e) }(s) })), i("enable disable", (() => { const { $el: e } = t.scrollbar; e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass) })), i("destroy", (() => { $() })); const S = () => { t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $() }; Object.assign(t.scrollbar, { enable: () => { t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g() }, disable: S, updateSize: v, setTranslate: g, init: T, destroy: $ }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ parallax: { enabled: !1 } }); const i = (e, s) => { const { rtl: a } = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0"; let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"); const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity"); if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) { const e = p - (p - 1) * (1 - Math.abs(s)); i[0].style.opacity = e } if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`); else { const e = c - (c - 1) * (1 - Math.abs(s)); i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`) } }, r = () => { const { $el: e, slides: s, progress: a, snapGrid: r } = t; e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => { i(e, a) })), s.each(((e, s) => { let n = e.progress; t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => { i(e, n) })) })) }; a("beforeInit", (() => { t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0) })), a("init", (() => { t.params.parallax.enabled && r() })), a("setTranslate", (() => { t.params.parallax.enabled && r() })), a("setTransition", ((e, s) => { t.params.parallax.enabled && function (e) { void 0 === e && (e = t.params.speed); const { $el: s } = t; s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => { const s = d(t); let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e; 0 === e && (a = 0), s.transition(a) })) }(s) })) }, function (e) { let { swiper: t, extendParams: s, on: a, emit: i } = e; const n = r(); s({ zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), t.zoom = { enabled: !1 }; let l, o, c, p = 1, u = !1; const m = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, f = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, g = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }; let v = 1; function w(e) { if (e.targetTouches.length < 2) return 1; const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX, i = e.targetTouches[1].pageY; return Math.sqrt((a - t) ** 2 + (i - s) ** 2) } function b(e) { const s = t.support, a = t.params.zoom; if (o = !1, c = !1, !s.gestures) { if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return; o = !0, m.scaleStart = w(e) } m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0 } function x(e) { const s = t.support, a = t.params.zoom, i = t.zoom; if (!s.gestures) { if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return; c = !0, m.scaleMove = w(e) } m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e) } function y(e) { const s = t.device, a = t.support, i = t.params.zoom, r = t.zoom; if (!a.gestures) { if (!o || !c) return; if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return; o = !1, c = !1 } m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0)) } function E(e) { const s = t.zoom; if (!m.$imageEl || 0 === m.$imageEl.length) return; if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return; f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0)); const a = f.width * s.scale, i = f.height * s.scale; if (!(a < m.slideWidth && i < m.slideHeight)) { if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) { if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1); if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1) } e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`) } } function C() { const e = t.zoom; m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0) } function T(e) { const s = t.zoom, a = t.params.zoom; if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return; let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S; t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`) } function $() { const e = t.zoom, s = t.params.zoom; m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0) } function S(e) { const s = t.zoom; s.scale && 1 !== s.scale ? $() : T(e) } function M() { const e = t.support; return { passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 }, activeListenerWithCapture: !e.passiveListener || { passive: !1, capture: !0 } } } function P() { return `.${t.params.slideClass}` } function k(e) { const { passiveListener: s } = M(), a = P(); t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s) } function z() { l || (l = !0, k("on")) } function L() { l && (l = !1, k("off")) } function O() { const e = t.zoom; if (e.enabled) return; e.enabled = !0; const s = t.support, { passiveListener: a, activeListenerWithCapture: i } = M(), r = P(); s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i) } function I() { const e = t.zoom; if (!e.enabled) return; const s = t.support; e.enabled = !1; const { passiveListener: a, activeListenerWithCapture: i } = M(), r = P(); s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i) } Object.defineProperty(t.zoom, "scale", { get: () => v, set(e) { if (v !== e) { const t = m.$imageEl ? m.$imageEl[0] : void 0, s = m.$slideEl ? m.$slideEl[0] : void 0; i("zoomChange", e, t, s) } v = e } }), a("init", (() => { t.params.zoom.enabled && O() })), a("destroy", (() => { I() })), a("touchStart", ((e, s) => { t.zoom.enabled && function (e) { const s = t.device; m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)) }(s) })), a("touchEnd", ((e, s) => { t.zoom.enabled && function () { const e = t.zoom; if (!m.$imageEl || 0 === m.$imageEl.length) return; if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1); f.isTouched = !1, f.isMoved = !1; let s = 300, a = 300; const i = g.x * s, r = f.currentX + i, n = g.y * a, l = f.currentY + n; 0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y)); const o = Math.max(s, a); f.currentX = r, f.currentY = l; const d = f.width * e.scale, c = f.height * e.scale; f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`) }() })), a("doubleTap", ((e, s) => { !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s) })), a("transitionEnd", (() => { t.zoom.enabled && t.params.zoom.enabled && C() })), a("slideChange", (() => { t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C() })), Object.assign(t.zoom, { enable: O, disable: I, in: T, out: $, toggle: S }) }, function (e) { let { swiper: t, extendParams: s, on: a, emit: i } = e; s({ lazy: { checkInView: !1, enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }), t.lazy = {}; let n = !1, l = !1; function o(e, s) { void 0 === s && (s = !0); const a = t.params.lazy; if (void 0 === e) return; if (0 === t.slides.length) return; const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e), n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`); !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => { const n = d(e); n.addClass(a.loadingClass); const l = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"), u = n.attr("data-sizes"), h = n.parent("picture"); t.loadImage(n[0], c || l, p, u, !1, (() => { if (null != t && t && (!t || t.params) && !t.destroyed) { if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => { const t = d(e); t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset")) })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) { const e = r.attr("data-swiper-slide-index"); if (r.hasClass(t.params.slideDuplicateClass)) { o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) } else { o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1) } } i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight() } })), i("lazyImageLoad", r[0], n[0]) })) } function c() { const { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t, r = t.virtual && s.virtual.enabled, n = s.lazy; let c = s.slidesPerView; function p(t) { if (r) { if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0 } else if (a[t]) return !0; return !1 } function u(e) { return r ? d(e).attr("data-swiper-slide-index") : d(e).index() } if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => { o(r ? d(e).attr("data-swiper-slide-index") : d(e).index()) })); else if (c > 1) for (let e = i; e < i + c; e += 1)p(e) && o(e); else o(i); if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) { const e = n.loadPrevNextAmount, t = Math.ceil(c), s = Math.min(i + t + Math.max(e, t), a.length), r = Math.max(i - Math.max(t, e), 0); for (let e = i + t; e < s; e += 1)p(e) && o(e); for (let e = r; e < i; e += 1)p(e) && o(e) } else { const t = e.children(`.${s.slideNextClass}`); t.length > 0 && o(u(t)); const a = e.children(`.${s.slidePrevClass}`); a.length > 0 && o(u(a)) } } function p() { const e = r(); if (!t || t.destroyed) return; const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e), a = s[0] === e, i = a ? e.innerWidth : s[0].offsetWidth, l = a ? e.innerHeight : s[0].offsetHeight, o = t.$el.offset(), { rtlTranslate: u } = t; let h = !1; u && (o.left -= t.$el[0].scrollLeft); const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]]; for (let e = 0; e < m.length; e += 1) { const t = m[e]; if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) { if (0 === t[0] && 0 === t[1]) continue; h = !0 } } const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 }; h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f)) } a("beforeInit", (() => { t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1) })), a("init", (() => { t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c()) })), a("scroll", (() => { t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c() })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => { t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c()) })), a("transitionStart", (() => { t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c()) })), a("transitionEnd", (() => { t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c()) })), a("slideChange", (() => { const { lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r } = t.params; e.enabled && (s || a && (i || 0 === r)) && c() })), a("destroy", (() => { t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass) })), Object.assign(t.lazy, { load: c, loadInSlide: o }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; function i(e, t) { const s = function () { let e, t, s; return (a, i) => { for (t = -1, e = a.length; e - t > 1;)s = e + t >> 1, a[s] <= i ? t = s : e = s; return e } }(); let a, i; return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) { return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0 }, this } function r() { t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline) } s({ controller: { control: void 0, inverse: !1, by: "slide" } }), t.controller = { control: void 0 }, a("beforeInit", (() => { t.controller.control = t.params.controller.control })), a("update", (() => { r() })), a("resize", (() => { r() })), a("observerUpdate", (() => { r() })), a("setTranslate", ((e, s, a) => { t.controller.control && t.controller.setTranslate(s, a) })), a("setTransition", ((e, s, a) => { t.controller.control && t.controller.setTransition(s, a) })), Object.assign(t.controller, { setTranslate: function (e, s) { const a = t.controller.control; let r, n; const l = t.constructor; function o(e) { const s = t.rtlTranslate ? -t.translate : t.translate; "slide" === t.params.controller.by && (!function (e) { t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)) }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses() } if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1)a[e] !== s && a[e] instanceof l && o(a[e]); else a instanceof l && s !== a && o(a) }, setTransition: function (e, s) { const a = t.constructor, i = t.controller.control; let r; function n(s) { s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => { s.updateAutoHeight() })), s.$wrapperEl.transitionEnd((() => { i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd()) }))) } if (Array.isArray(i)) for (r = 0; r < i.length; r += 1)i[r] !== s && i[r] instanceof a && n(i[r]); else i instanceof a && s !== i && n(i) } }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null } }), t.a11y = { clicked: !1 }; let i = null; function r(e) { const t = i; 0 !== t.length && (t.html(""), t.html(e)) } function n(e) { e.attr("tabIndex", "0") } function l(e) { e.attr("tabIndex", "-1") } function o(e, t) { e.attr("role", t) } function c(e, t) { e.attr("aria-roledescription", t) } function p(e, t) { e.attr("aria-label", t) } function u(e) { e.attr("aria-disabled", !0) } function h(e) { e.attr("aria-disabled", !1) } function m(e) { if (13 !== e.keyCode && 32 !== e.keyCode) return; const s = t.params.a11y, a = d(e.target); t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click() } function f() { return t.pagination && t.pagination.bullets && t.pagination.bullets.length } function g() { return f() && t.params.pagination.clickable } const v = (e, t, s) => { n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) { e.attr("aria-controls", t) }(e, t) }, w = () => { t.a11y.clicked = !0 }, b = () => { requestAnimationFrame((() => { requestAnimationFrame((() => { t.a11y.clicked = !1 })) })) }, x = e => { if (t.a11y.clicked) return; const s = e.target.closest(`.${t.params.slideClass}`); if (!s || !t.slides.includes(s)) return; const a = t.slides.indexOf(s) === t.activeIndex, i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s); a || i || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0)) }, y = () => { const e = t.params.a11y; e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole); const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length; e.slideLabelMessage && t.slides.each(((a, i) => { const r = d(a), n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i; p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s)) })) }, E = () => { const e = t.params.a11y; t.$el.append(i); const s = t.$el; e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage); const a = t.$wrapperEl, r = e.id || a.attr("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`; var n; const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite"; var o; let d, u; o = r, a.attr("id", o), function (e, t) { e.attr("aria-live", t) }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0) }; a("beforeInit", (() => { i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`) })), a("afterInit", (() => { t.params.a11y.enabled && E() })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => { t.params.a11y.enabled && y() })), a("fromEdge toEdge afterInit lock unlock", (() => { t.params.a11y.enabled && function () { if (t.params.loop || t.params.rewind || !t.navigation) return; const { $nextEl: e, $prevEl: s } = t.navigation; s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e))) }() })), a("paginationUpdate", (() => { t.params.a11y.enabled && function () { const e = t.params.a11y; f() && t.pagination.bullets.each((s => { const a = d(s); t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current") })) }() })), a("destroy", (() => { t.params.a11y.enabled && function () { let e, s; i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0) }() })) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ history: { enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1 } }); let i = !1, n = {}; const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = e => { const t = r(); let s; s = e ? new URL(e) : t.location; const a = s.pathname.slice(1).split("/").filter((e => "" !== e)), i = a.length; return { key: a[i - 2], value: a[i - 1] } }, d = (e, s) => { const a = r(); if (!i || !t.params.history.enabled) return; let n; n = t.params.url ? new URL(t.params.url) : a.location; const o = t.slides.eq(s); let d = l(o.attr("data-history")); if (t.params.history.root.length > 0) { let s = t.params.history.root; "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}` } else n.pathname.includes(e) || (d = `${e}/${d}`); t.params.history.keepQuery && (d += n.search); const c = a.history.state; c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({ value: d }, null, d) : a.history.pushState({ value: d }, null, d)) }, c = (e, s, a) => { if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) { const r = t.slides.eq(i); if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) { const s = r.index(); t.slideTo(s, e, a) } } else t.slideTo(0, e, a) }, p = () => { n = o(t.params.url), c(t.params.speed, n.value, !1) }; a("init", (() => { t.params.history.enabled && (() => { const e = r(); if (t.params.history) { if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0); i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) } })() })), a("destroy", (() => { t.params.history.enabled && (() => { const e = r(); t.params.history.replaceState || e.removeEventListener("popstate", p) })() })), a("transitionEnd _freeModeNoMomentumRelease", (() => { i && d(t.params.history.key, t.activeIndex) })), a("slideChange", (() => { i && t.params.cssMode && d(t.params.history.key, t.activeIndex) })) }, function (e) { let { swiper: t, extendParams: s, emit: i, on: n } = e, l = !1; const o = a(), c = r(); s({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }); const p = () => { i("hashChange"); const e = o.location.hash.replace("#", ""); if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) { const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index(); if (void 0 === s) return; t.slideTo(s) } }, u = () => { if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet"); else { const e = t.slides.eq(t.activeIndex), s = e.attr("data-hash") || e.attr("data-history"); o.location.hash = s || "", i("hashSet") } }; n("init", (() => { t.params.hashNavigation.enabled && (() => { if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return; l = !0; const e = o.location.hash.replace("#", ""); if (e) { const s = 0; for (let a = 0, i = t.slides.length; a < i; a += 1) { const i = t.slides.eq(a); if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) { const e = i.index(); t.slideTo(e, s, t.params.runCallbacksOnInit, !0) } } } t.params.hashNavigation.watchState && d(c).on("hashchange", p) })() })), n("destroy", (() => { t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p) })), n("transitionEnd _freeModeNoMomentumRelease", (() => { l && u() })), n("slideChange", (() => { l && t.params.cssMode && u() })) }, function (e) { let t, { swiper: s, extendParams: i, on: r, emit: n } = e; function l() { if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1); const e = s.slides.eq(s.activeIndex); let a = s.params.autoplay.delay; e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => { let e; s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l() }), a) } function o() { return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0)) } function d() { return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0)) } function c(e) { s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => { s.$wrapperEl[0].addEventListener(e, h) })) : (s.autoplay.paused = !1, l()))) } function u() { const e = a(); "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1) } function h(e) { s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => { s.$wrapperEl[0].removeEventListener(e, h) })), s.autoplay.paused = !1, s.autoplay.running ? l() : d()) } function m() { s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => { s.$wrapperEl[0].removeEventListener(e, h) })) } function f() { s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l()) } s.autoplay = { running: !1, paused: !1 }, i({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }), r("init", (() => { if (s.params.autoplay.enabled) { o(); a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f)) } })), r("beforeTransitionStart", ((e, t, a) => { s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d()) })), r("sliderFirstMove", (() => { s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c()) })), r("touchEnd", (() => { s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l() })), r("destroy", (() => { s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d(); a().removeEventListener("visibilitychange", u) })), Object.assign(s.autoplay, { pause: c, run: l, start: o, stop: d }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } }); let i = !1, r = !1; function n() { const e = t.thumbs.swiper; if (!e || e.destroyed) return; const s = e.clickedIndex, a = e.clickedSlide; if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return; if (null == s) return; let i; if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) { let e = t.activeIndex; t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex); const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(), a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(); i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s } t.slideTo(i) } function l() { const { thumbs: e } = t.params; if (i) return !1; i = !0; const s = t.constructor; if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }); else if (m(e.swiper)) { const a = Object.assign({}, e.swiper); Object.assign(a, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), t.thumbs.swiper = new s(a), r = !0 } return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0 } function o(e) { const s = t.thumbs.swiper; if (!s || s.destroyed) return; const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView; let i = 1; const r = t.params.thumbs.slideThumbActiveClass; if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r); else for (let e = 0; e < i; e += 1)s.slides.eq(t.realIndex + e).addClass(r); const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop; if (t.realIndex !== s.realIndex || l) { let i, r, o = s.activeIndex; if (s.params.loop) { s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex); const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(), a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(); i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev" } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev"; l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0)) } } t.thumbs = { swiper: null }, a("beforeInit", (() => { const { thumbs: e } = t.params; e && e.swiper && (l(), o(!0)) })), a("slideChange update resize observerUpdate", (() => { o() })), a("setTransition", ((e, s) => { const a = t.thumbs.swiper; a && !a.destroyed && a.setTransition(s) })), a("beforeDestroy", (() => { const e = t.thumbs.swiper; e && !e.destroyed && r && e.destroy() })), Object.assign(t.thumbs, { init: l, update: o }) }, function (e) { let { swiper: t, extendParams: s, emit: a, once: i } = e; s({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: .02 } }), Object.assign(t, { freeMode: { onTouchStart: function () { const e = t.getTranslate(); t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate }) }, onTouchMove: function () { const { touchEventsData: e, touches: s } = t; 0 === e.velocities.length && e.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }), e.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: u() }) }, onTouchEnd: function (e) { let { currentPos: s } = e; const { params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d } = t, c = u() - d.touchStartTime; if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else { if (r.freeMode.momentum) { if (d.velocities.length > 1) { const e = d.velocities.pop(), s = d.velocities.pop(), a = e.position - s.position, i = e.time - s.time; t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0) } else t.velocity = 0; t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0; let e = 1e3 * r.freeMode.momentumRatio; const s = t.velocity * e; let c = t.translate + s; l && (c = -c); let p, h = !1; const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio; let f; if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0); else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0); else if (r.freeMode.sticky) { let e; for (let t = 0; t < o.length; t += 1)if (o[t] > -c) { e = t; break } c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c } if (f && i("transitionEnd", (() => { t.loopFix() })), 0 !== t.velocity) { if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) { const s = Math.abs((l ? -c : c) - t.translate), a = t.slidesSizesGrid[t.activeIndex]; e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed } } else if (r.freeMode.sticky) return void t.slideToClosest(); r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => { t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => { t.setTranslate(p), n.transitionEnd((() => { t && !t.destroyed && t.transitionEnd() })) }), 0)) }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => { t && !t.destroyed && t.transitionEnd() })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses() } else { if (r.freeMode.sticky) return void t.slideToClosest(); r.freeMode && a("_freeModeNoMomentumRelease") } (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()) } } } }) }, function (e) { let t, s, a, { swiper: i, extendParams: r } = e; r({ grid: { rows: 1, fill: "column" } }), i.grid = { initSlides: e => { const { slidesPerView: r } = i.params, { rows: n, fill: l } = i.params.grid; s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n)) }, updateSlide: (e, r, n, l) => { const { slidesPerGroup: o, spaceBetween: d } = i.params, { rows: c, fill: p } = i.params.grid; let u, h, m; if ("row" === p && o > 1) { const s = Math.floor(e / (o * c)), a = e - c * o * s, i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o); m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({ "-webkit-order": u, order: u }) } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s); r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "") }, updateWrapperSize: (e, s, a) => { const { spaceBetween: r, centeredSlides: n, roundLengths: l } = i.params, { rows: o } = i.params.grid; if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({ [a("width")]: `${i.virtualSize + r}px` }), n) { s.splice(0, s.length); const e = []; for (let t = 0; t < s.length; t += 1) { let a = s[t]; l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a) } s.push(...e) } } } }, function (e) { let { swiper: t } = e; Object.assign(t, { appendSlide: K.bind(t), prependSlide: Z.bind(t), addSlide: Q.bind(t), removeSlide: J.bind(t), removeAllSlides: ee.bind(t) }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ fadeEffect: { crossFade: !1, transformEl: null } }), te({ effect: "fade", swiper: t, on: a, setTranslate: () => { const { slides: e } = t, s = t.params.fadeEffect; for (let a = 0; a < e.length; a += 1) { const e = t.slides.eq(a); let i = -e[0].swiperSlideOffset; t.params.virtualTranslate || (i -= t.translate); let r = 0; t.isHorizontal() || (r = i, i = 0); const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0); se(s, e).css({ opacity: n }).transform(`translate3d(${i}px, ${r}px, 0px)`) } }, setTransition: e => { const { transformEl: s } = t.params.fadeEffect; (s ? t.slides.find(s) : t.slides).transition(e), ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 }) }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }) }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }); const i = (e, t, s) => { let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom"); 0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0)) }; te({ effect: "cube", swiper: t, on: a, setTranslate: () => { const { $el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c } = t, p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled; let m, f = 0; p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({ height: `${r}px` })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m)))); for (let e = 0; e < a.length; e += 1) { const t = a.eq(e); let s = e; h && (s = parseInt(t.attr("data-swiper-slide-index"), 10)); let r = 90 * s, n = Math.floor(r / 360); l && (r = -r, n = Math.floor(-r / 360)); const d = Math.max(Math.min(t[0].progress, 1), -1); let c = 0, m = 0, g = 0; s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0); const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`; d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u) } if (s.css({ "-webkit-transform-origin": `50% 50% -${o / 2}px`, "transform-origin": `50% 50% -${o / 2}px` }), p.shadow) if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`); else { const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset; m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`) } const g = c.isSafari || c.isWebView ? -o / 2 : 0; s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`) }, setTransition: e => { const { $el: s, slides: a } = t; a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e) }, recreateShadows: () => { const e = t.isHorizontal(); t.slides.each((t => { const s = Math.max(Math.min(t.progress, 1), -1); i(d(t), s, e) })) }, getEffectParams: () => t.params.cubeEffect, perspective: () => !0, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }) }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } }); const i = (e, s, a) => { let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom"); 0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0)) }; te({ effect: "flip", swiper: t, on: a, setTranslate: () => { const { slides: e, rtlTranslate: s } = t, a = t.params.flipEffect; for (let r = 0; r < e.length; r += 1) { const n = e.eq(r); let l = n[0].progress; t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1)); const o = n[0].swiperSlideOffset; let d = -180 * l, c = 0, p = t.params.cssMode ? -o - t.translate : -o, u = 0; t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a); const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`; se(a, n).transform(h) } }, setTransition: e => { const { transformEl: s } = t.params.flipEffect; (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({ swiper: t, duration: e, transformEl: s }) }, recreateShadows: () => { const e = t.params.flipEffect; t.slides.each((s => { const a = d(s); let r = a[0].progress; t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e) })) }, getEffectParams: () => t.params.flipEffect, perspective: () => !0, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }) }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0, transformEl: null } }), te({ effect: "coverflow", swiper: t, on: a, setTranslate: () => { const { width: e, height: s, slides: a, slidesSizesGrid: i } = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth; for (let e = 0, t = a.length; e < t; e += 1) { const t = a.eq(e), s = i[e], l = (o - t[0].swiperSlideOffset - s / 2) / s, p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier; let u = n ? d * p : 0, h = n ? 0 : d * p, m = -c * Math.abs(p), f = r.stretch; "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s); let g = n ? 0 : f * p, v = n ? f * p : 0, w = 1 - (1 - r.scale) * Math.abs(p); Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0); const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`; if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) { let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom"); 0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0) } } }, setTransition: e => { const { transformEl: s } = t.params.coverflowEffect; (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e) }, perspective: () => !0, overwriteParams: () => ({ watchSlidesProgress: !0 }) }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ creativeEffect: { transformEl: null, limitProgress: 1, shadowPerProgress: !1, progressMultiplier: 1, perspective: !0, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } }); const i = e => "string" == typeof e ? e : `${e}px`; te({ effect: "creative", swiper: t, on: a, setTranslate: () => { const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t, r = t.params.creativeEffect, { progressMultiplier: n } = r, l = t.params.centeredSlides; if (l) { const e = a[0] / 2 - t.params.slidesOffsetBefore || 0; s.transform(`translateX(calc(50% - ${e}px))`) } for (let s = 0; s < e.length; s += 1) { const a = e.eq(s), o = a[0].progress, d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress); let c = d; l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress)); const p = a[0].swiperSlideOffset, u = [t.params.cssMode ? -p - t.translate : -p, 0, 0], h = [0, 0, 0]; let m = !1; t.isHorizontal() || (u[1] = u[0], u[0] = 0); let f = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 }; d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => { u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))` })), h.forEach(((e, t) => { h[t] = f.rotate[t] * Math.abs(d * n) })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length; const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`, w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`, b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n, x = `translate3d(${g}) ${v} ${w}`; if (m && f.shadow || !m) { let e = a.children(".swiper-slide-shadow"); if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) { const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d; e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1) } } const y = se(r, a); y.transform(x).css({ opacity: b }), f.origin && y.css("transform-origin", f.origin) } }, setTransition: e => { const { transformEl: s } = t.params.creativeEffect; (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 }) }, perspective: () => t.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }) }) }, function (e) { let { swiper: t, extendParams: s, on: a } = e; s({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }), te({ effect: "cards", swiper: t, on: a, setTranslate: () => { const { slides: e, activeIndex: s } = t, a = t.params.cardsEffect, { startTranslate: i, isTouched: r } = t.touchEventsData, n = t.translate; for (let l = 0; l < e.length; l += 1) { const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4); let p = o[0].swiperSlideOffset; t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset); let u = t.params.cssMode ? -p - t.translate : -p, h = 0; const m = -100 * Math.abs(c); let f = 1, g = -a.perSlideRotate * c, v = a.perSlideOffset - .75 * Math.abs(c); const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i, x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i; if (b || x) { const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5; g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%" } if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) { const e = h; h = u, u = e } const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c), E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `; if (a.slideShadows) { let e = o.find(".swiper-slide-shadow"); 0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1)) } o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length; se(a, o).transform(E) } }, setTransition: e => { const { transformEl: s } = t.params.cardsEffect; (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({ swiper: t, duration: e, transformEl: s }) }, perspective: () => !0, overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }) }) }]; return V.use(re), V }));
 //# sourceMappingURL=swiper-bundle.min.js.map
/* End */
;
; /* Start:"a:4:{s:4:"full";s:89:"/local/templates/kadflo/assets/libraries/fancybox/jquery.fancybox.min.js?1744282596105639";s:6:"source";s:72:"/local/templates/kadflo/assets/libraries/fancybox/jquery.fancybox.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
// @fancyapps/ui/Fancybox v4.0.31
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=c(t);if(e){var o=c(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return u(this,i)}}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=v(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:i):o.value}},p.apply(this,arguments)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,o,a=[],s=!0,r=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(t){r=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(r)throw o}}return a}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return b(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function x(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=y(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}var w=function(t){return"object"===n(t)&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t)},k=function t(){for(var e=!1,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];"boolean"==typeof o[0]&&(e=o.shift());var s=o[0];if(!s||"object"!==n(s))throw new Error("extendee must be an object");for(var r=o.slice(1),l=r.length,c=0;c<l;c++){var h=r[c];for(var d in h)if(h.hasOwnProperty(d)){var u=h[d];if(e&&(Array.isArray(u)||w(u))){var f=Array.isArray(u)?[]:{};s[d]=t(!0,s.hasOwnProperty(d)?s[d]:f,u)}else s[d]=u}}return s},S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e},C=function t(e){return!!(e&&"object"===n(e)&&e instanceof Element&&e!==document.body)&&(!e.__Panzoom&&(function(t){var e=getComputedStyle(t)["overflow-y"],i=getComputedStyle(t)["overflow-x"],n=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return n||o}(e)?e:t(e.parentNode)))},$="undefined"!=typeof window&&window.ResizeObserver||function(){function t(e){o(this,t),this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=e}return s(t,[{key:"observe",value:function(t){if(!this.observables.some((function(e){return e.el===t}))){var e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}}},{key:"unobserve",value:function(t){this.observables=this.observables.filter((function(e){return e.el!==t}))}},{key:"disconnect",value:function(){this.observables=[]}},{key:"check",value:function(){var t=this.observables.filter((function(t){var e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((function(t){return t.el}));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}}]),t}(),E=s((function t(e){o(this,t),this.id=self.Touch&&e instanceof Touch?e.identifier:-1,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY})),P=function(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0},T=function(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t},L=function(t){return"changedTouches"in t},_=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.start,s=void 0===a?function(){return!0}:a,r=n.move,l=void 0===r?function(){}:r,c=n.end,h=void 0===c?function(){}:c;o(this,t),this._element=e,this.startPointers=[],this.currentPointers=[],this._pointerStart=function(t){if(!(t.buttons>0&&0!==t.button)){var e=new E(t);i.currentPointers.some((function(t){return t.id===e.id}))||i._triggerPointerStart(e,t)&&(window.addEventListener("mousemove",i._move),window.addEventListener("mouseup",i._pointerEnd))}},this._touchStart=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerStart(new E(o),t)}},this._move=function(t){var e,n=i.currentPointers.slice(),o=L(t)?Array.from(t.changedTouches).map((function(t){return new E(t)})):[new E(t)],a=[],s=x(o);try{var r=function(){var t=e.value,n=i.currentPointers.findIndex((function(e){return e.id===t.id}));if(n<0)return"continue";a.push(t),i.currentPointers[n]=t};for(s.s();!(e=s.n()).done;)r()}catch(t){s.e(t)}finally{s.f()}i._moveCallback(n,i.currentPointers.slice(),t)},this._triggerPointerEnd=function(t,e){var n=i.currentPointers.findIndex((function(e){return e.id===t.id}));return!(n<0)&&(i.currentPointers.splice(n,1),i.startPointers.splice(n,1),i._endCallback(t,e),!0)},this._pointerEnd=function(t){t.buttons>0&&0!==t.button||i._triggerPointerEnd(new E(t),t)&&(window.removeEventListener("mousemove",i._move,{passive:!1}),window.removeEventListener("mouseup",i._pointerEnd,{passive:!1}))},this._touchEnd=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerEnd(new E(o),t)}},this._startCallback=s,this._moveCallback=l,this._endCallback=h,this._element.addEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.addEventListener("touchstart",this._touchStart,{passive:!1}),this._element.addEventListener("touchmove",this._move,{passive:!1}),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd)}return s(t,[{key:"stop",value:function(){this._element.removeEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.removeEventListener("touchstart",this._touchStart,{passive:!1}),this._element.removeEventListener("touchmove",this._move,{passive:!1}),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}},{key:"_triggerPointerStart",value:function(t,e){return!!this._startCallback(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}]),t}(),A=function(t,e){return t.split(".").reduce((function(t,e){return t&&t[e]}),e)},O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.options=k(!0,{},e),this.plugins=[],this.events={};for(var i=0,n=["on","once"];i<n.length;i++)for(var a=n[i],s=0,r=Object.entries(this.options[a]||{});s<r.length;s++){var l=r[s];this[a].apply(this,m(l))}}return s(t,[{key:"option",value:function(t,e){t=String(t);var i=A(t,this.options);if("function"==typeof i){for(var n,o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];i=(n=i).call.apply(n,[this,this].concat(a))}return void 0===i?e:i}},{key:"localize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t=(t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,(function(t,n,o){var a="";o?a=e.option("".concat(n[0]+n.toLowerCase().substring(1),".l10n.").concat(o)):n&&(a=e.option("l10n.".concat(n))),a||(a=t);for(var s=0;s<i.length;s++)a=a.split(i[s][0]).join(i[s][1]);return a}))).replace(/\{\{(.*)\}\}/,(function(t,e){return e}))}},{key:"on",value:function(t,e){var i=this;if(w(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.on.apply(this,m(a))}return this}return String(t).split(" ").forEach((function(t){var n=i.events[t]=i.events[t]||[];-1==n.indexOf(e)&&n.push(e)})),this}},{key:"once",value:function(t,e){var i=this;if(w(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.once.apply(this,m(a))}return this}return String(t).split(" ").forEach((function(t){var n=function n(){i.off(t,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];e.call.apply(e,[i,i].concat(a))};n._=e,i.on(t,n)})),this}},{key:"off",value:function(t,e){var i=this;if(!w(t))return t.split(" ").forEach((function(t){var n=i.events[t];if(!n||!n.length)return i;for(var o=-1,a=0,s=n.length;a<s;a++){var r=n[a];if(r&&(r===e||r._===e)){o=a;break}}-1!=o&&n.splice(o,1)})),this;for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.off.apply(this,m(a))}}},{key:"trigger",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o,a=x(m(this.events[t]||[]).slice());try{for(a.s();!(o=a.n()).done;){var s=o.value;if(s&&!1===s.call.apply(s,[this,this].concat(i)))return!1}}catch(t){a.e(t)}finally{a.f()}var r,l=x(m(this.events["*"]||[]).slice());try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c&&!1===c.call.apply(c,[this,t,this].concat(i)))return!1}}catch(t){l.e(t)}finally{l.f()}return!0}},{key:"attachPlugins",value:function(t){for(var e={},i=0,n=Object.entries(t||{});i<n.length;i++){var o=g(n[i],2),a=o[0],s=o[1];!1===this.options[a]||this.plugins[a]||(this.options[a]=k({},s.defaults||{},this.options[a]),e[a]=new s(this))}for(var r=0,l=Object.entries(e);r<l.length;r++){var c=g(l[r],2);c[0],c[1].attach(this)}return this.plugins=Object.assign({},this.plugins,e),this}},{key:"detachPlugins",value:function(){for(var t in this.plugins){var e=void 0;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}]),t}(),z={touch:!0,zoom:!0,pinchToZoom:!0,panOnlyZoomed:!1,lockAxis:!1,friction:.64,decelFriction:.88,zoomFriction:.74,bounceForce:.2,baseScale:1,minScale:1,maxScale:2,step:.5,textSelection:!1,click:"toggleZoom",wheel:"zoom",wheelFactor:42,wheelLimit:5,draggableClass:"is-draggable",draggingClass:"is-dragging",ratio:1},M=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,n),(i=e.call(this,k(!0,{},z,a))).state="init",i.$container=t;for(var s=0,r=["onLoad","onWheel","onClick"];s<r.length;s++){var l=r[s];i[l]=i[l].bind(d(i))}return i.initLayout(),i.resetValues(),i.attachPlugins(n.Plugins),i.trigger("init"),i.updateMetrics(),i.attachEvents(),i.trigger("ready"),!1===i.option("centerOnStart")?i.state="ready":i.panTo({friction:0}),t.__Panzoom=d(i),i}return s(n,[{key:"initLayout",value:function(){var t=this.$container;if(!(t instanceof HTMLElement))throw new Error("Panzoom: Container not found");var e=this.option("content")||t.querySelector(".panzoom__content");if(!e)throw new Error("Panzoom: Content not found");this.$content=e;var i,n=this.option("viewport")||t.querySelector(".panzoom__viewport");n||!1===this.option("wrapInner")||((n=document.createElement("div")).classList.add("panzoom__viewport"),(i=n).append.apply(i,m(t.childNodes)),t.appendChild(n));this.$viewport=n||e.parentNode}},{key:"resetValues",value:function(){this.updateRate=this.option("updateRate",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?250:24),this.container={width:0,height:0},this.viewport={width:0,height:0},this.content={origWidth:0,origHeight:0,width:0,height:0,x:this.option("x",0),y:this.option("y",0),scale:this.option("baseScale")},this.transform={x:0,y:0,scale:1},this.resetDragPosition()}},{key:"onLoad",value:function(t){this.updateMetrics(),this.panTo({scale:this.option("baseScale"),friction:0}),this.trigger("load",t)}},{key:"onClick",value:function(t){if(!(t.defaultPrevented||document.activeElement&&document.activeElement.closest("[contenteditable]")))if(!this.option("textSelection")||!window.getSelection().toString().length||t.target&&t.target.hasAttribute("data-fancybox-close")){var e=this.$content.getClientRects()[0];if("ready"!==this.state&&(this.dragPosition.midPoint||Math.abs(e.top-this.dragStart.rect.top)>1||Math.abs(e.left-this.dragStart.rect.left)>1))return t.preventDefault(),void t.stopPropagation();!1!==this.trigger("click",t)&&this.option("zoom")&&"toggleZoom"===this.option("click")&&(t.preventDefault(),t.stopPropagation(),this.zoomWithClick(t))}else t.stopPropagation()}},{key:"onWheel",value:function(t){!1!==this.trigger("wheel",t)&&this.option("zoom")&&this.option("wheel")&&this.zoomWithWheel(t)}},{key:"zoomWithWheel",value:function(t){void 0===this.changedDelta&&(this.changedDelta=0);var e=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)),i=this.content.scale,n=i*(100+e*this.option("wheelFactor"))/100;if(e<0&&Math.abs(i-this.option("minScale"))<.01||e>0&&Math.abs(i-this.option("maxScale"))<.01?(this.changedDelta+=Math.abs(e),n=i):(this.changedDelta=0,n=Math.max(Math.min(n,this.option("maxScale")),this.option("minScale"))),!(this.changedDelta>this.option("wheelLimit"))&&(t.preventDefault(),n!==i)){var o=this.$content.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top;this.zoomTo(n,{x:a,y:s})}}},{key:"zoomWithClick",value:function(t){var e=this.$content.getClientRects()[0],i=t.clientX-e.left,n=t.clientY-e.top;this.toggleZoom({x:i,y:n})}},{key:"attachEvents",value:function(){var t=this;this.$content.addEventListener("load",this.onLoad),this.$container.addEventListener("wheel",this.onWheel,{passive:!1}),this.$container.addEventListener("click",this.onClick,{passive:!1}),this.initObserver();var e=new _(this.$container,{start:function(i,n){if(!t.option("touch"))return!1;if(t.velocity.scale<0)return!1;var o=n.composedPath()[0];if(!e.currentPointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(o.nodeName))return!1;if(t.option("textSelection")&&function(t,e,i){for(var n=t.childNodes,o=document.createRange(),a=0;a<n.length;a++){var s=n[a];if(s.nodeType===Node.TEXT_NODE){o.selectNodeContents(s);var r=o.getBoundingClientRect();if(e>=r.left&&i>=r.top&&e<=r.right&&i<=r.bottom)return s}}return!1}(o,i.clientX,i.clientY))return!1}return!C(o)&&(!1!==t.trigger("touchStart",n)&&("mousedown"===n.type&&n.preventDefault(),t.state="pointerdown",t.resetDragPosition(),t.dragPosition.midPoint=null,t.dragPosition.time=Date.now(),!0))},move:function(i,n,o){if("pointerdown"===t.state)if(!1!==t.trigger("touchMove",o)){if(!(n.length<2&&!0===t.option("panOnlyZoomed")&&t.content.width<=t.viewport.width&&t.content.height<=t.viewport.height&&t.transform.scale<=t.option("baseScale"))&&(!(n.length>1)||t.option("zoom")&&!1!==t.option("pinchToZoom"))){var a=T(i[0],i[1]),s=T(n[0],n[1]),r=s.clientX-a.clientX,l=s.clientY-a.clientY,c=P(i[0],i[1]),h=P(n[0],n[1]),d=c&&h?h/c:1;t.dragOffset.x+=r,t.dragOffset.y+=l,t.dragOffset.scale*=d,t.dragOffset.time=Date.now()-t.dragPosition.time;var u=1===t.dragStart.scale&&t.option("lockAxis");if(u&&!t.lockAxis){if(Math.abs(t.dragOffset.x)<6&&Math.abs(t.dragOffset.y)<6)return void o.preventDefault();var f=Math.abs(180*Math.atan2(t.dragOffset.y,t.dragOffset.x)/Math.PI);t.lockAxis=f>45&&f<135?"y":"x"}if("xy"===u||"y"!==t.lockAxis){if(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation(),t.lockAxis&&(t.dragOffset["x"===t.lockAxis?"y":"x"]=0),t.$container.classList.add(t.option("draggingClass")),t.transform.scale===t.option("baseScale")&&"y"===t.lockAxis||(t.dragPosition.x=t.dragStart.x+t.dragOffset.x),t.transform.scale===t.option("baseScale")&&"x"===t.lockAxis||(t.dragPosition.y=t.dragStart.y+t.dragOffset.y),t.dragPosition.scale=t.dragStart.scale*t.dragOffset.scale,n.length>1){var v=T(e.startPointers[0],e.startPointers[1]),p=v.clientX-t.dragStart.rect.x,g=v.clientY-t.dragStart.rect.y,m=t.getZoomDelta(t.content.scale*t.dragOffset.scale,p,g),y=m.deltaX,b=m.deltaY;t.dragPosition.x-=y,t.dragPosition.y-=b,t.dragPosition.midPoint=s}else t.setDragResistance();t.transform={x:t.dragPosition.x,y:t.dragPosition.y,scale:t.dragPosition.scale},t.startAnimation()}}}else o.preventDefault()},end:function(n,o){if("pointerdown"===t.state)if(t._dragOffset=i({},t.dragOffset),e.currentPointers.length)t.resetDragPosition();else if(t.state="decel",t.friction=t.option("decelFriction"),t.recalculateTransform(),t.$container.classList.remove(t.option("draggingClass")),!1!==t.trigger("touchEnd",o)&&"decel"===t.state){var a=t.option("minScale");if(t.transform.scale<a)t.zoomTo(a,{friction:.64});else{var s=t.option("maxScale");if(t.transform.scale-s>.01){var r=t.dragPosition.midPoint||n,l=t.$content.getClientRects()[0];t.zoomTo(s,{friction:.64,x:r.clientX-l.left,y:r.clientY-l.top})}else;}}}});this.pointerTracker=e}},{key:"initObserver",value:function(){var t=this;this.resizeObserver||(this.resizeObserver=new $((function(){t.updateTimer||(t.updateTimer=setTimeout((function(){var e=t.$container.getBoundingClientRect();e.width&&e.height?((Math.abs(e.width-t.container.width)>1||Math.abs(e.height-t.container.height)>1)&&(t.isAnimating()&&t.endAnimation(!0),t.updateMetrics(),t.panTo({x:t.content.x,y:t.content.y,scale:t.option("baseScale"),friction:0})),t.updateTimer=null):t.updateTimer=null}),t.updateRate))})),this.resizeObserver.observe(this.$container))}},{key:"resetDragPosition",value:function(){this.lockAxis=null,this.friction=this.option("friction"),this.velocity={x:0,y:0,scale:0};var t=this.content,e=t.x,n=t.y,o=t.scale;this.dragStart={rect:this.$content.getBoundingClientRect(),x:e,y:n,scale:o},this.dragPosition=i(i({},this.dragPosition),{},{x:e,y:n,scale:o}),this.dragOffset={x:0,y:0,scale:1,time:0}}},{key:"updateMetrics",value:function(t){!0!==t&&this.trigger("beforeUpdate");var e,n=this.$container,o=this.$content,a=this.$viewport,s=o instanceof HTMLImageElement,r=this.option("zoom"),l=this.option("resizeParent",r),c=this.option("width"),h=this.option("height"),d=c||(e=o,Math.max(parseFloat(e.naturalWidth||0),parseFloat(e.width&&e.width.baseVal&&e.width.baseVal.value||0),parseFloat(e.offsetWidth||0),parseFloat(e.scrollWidth||0))),u=h||function(t){return Math.max(parseFloat(t.naturalHeight||0),parseFloat(t.height&&t.height.baseVal&&t.height.baseVal.value||0),parseFloat(t.offsetHeight||0),parseFloat(t.scrollHeight||0))}(o);Object.assign(o.style,{width:c?"".concat(c,"px"):"",height:h?"".concat(h,"px"):"",maxWidth:"",maxHeight:""}),l&&Object.assign(a.style,{width:"",height:""});var f=this.option("ratio");c=d=S(d*f),h=u=S(u*f);var v=o.getBoundingClientRect(),p=a.getBoundingClientRect(),g=a==n?p:n.getBoundingClientRect(),m=Math.max(a.offsetWidth,S(p.width)),y=Math.max(a.offsetHeight,S(p.height)),b=window.getComputedStyle(a);if(m-=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight),y-=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom),this.viewport.width=m,this.viewport.height=y,r){if(Math.abs(d-v.width)>.1||Math.abs(u-v.height)>.1){var x=function(t,e,i,n){var o=Math.min(i/t||0,n/e);return{width:t*o||0,height:e*o||0}}(d,u,Math.min(d,v.width),Math.min(u,v.height));c=S(x.width),h=S(x.height)}Object.assign(o.style,{width:"".concat(c,"px"),height:"".concat(h,"px"),transform:""})}if(l&&(Object.assign(a.style,{width:"".concat(c,"px"),height:"".concat(h,"px")}),this.viewport=i(i({},this.viewport),{},{width:c,height:h})),s&&r&&"function"!=typeof this.options.maxScale){var w=this.option("maxScale");this.options.maxScale=function(){return this.content.origWidth>0&&this.content.fitWidth>0?this.content.origWidth/this.content.fitWidth:w}}this.content=i(i({},this.content),{},{origWidth:d,origHeight:u,fitWidth:c,fitHeight:h,width:c,height:h,scale:1,isZoomable:r}),this.container={width:g.width,height:g.height},!0!==t&&this.trigger("afterUpdate")}},{key:"zoomIn",value:function(t){this.zoomTo(this.content.scale+(t||this.option("step")))}},{key:"zoomOut",value:function(t){this.zoomTo(this.content.scale-(t||this.option("step")))}},{key:"toggleZoom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.option("maxScale"),i=this.option("baseScale"),n=this.content.scale>i+.5*(e-i)?i:e;this.zoomTo(n,t)}},{key:"zoomTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.option("baseScale"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?null:i,o=e.y,a=void 0===o?null:o;t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));var s=S(this.content.scale/(this.content.width/this.content.fitWidth),1e7);null===n&&(n=this.content.width*s*.5),null===a&&(a=this.content.height*s*.5);var r=this.getZoomDelta(t,n,a),l=r.deltaX,c=r.deltaY;n=this.content.x-l,a=this.content.y-c,this.panTo({x:n,y:a,scale:t,friction:this.option("zoomFriction")})}},{key:"getZoomDelta",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.content.fitWidth*this.content.scale,o=this.content.fitHeight*this.content.scale,a=e>0&&n?e/n:0,s=i>0&&o?i/o:0,r=this.content.fitWidth*t,l=this.content.fitHeight*t,c=(r-n)*a,h=(l-o)*s;return{deltaX:c,deltaY:h}}},{key:"panTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?this.content.x:e,o=t.y,a=void 0===o?this.content.y:o,s=t.scale,r=t.friction,l=void 0===r?this.option("friction"):r,c=t.ignoreBounds,h=void 0!==c&&c;if(s=s||this.content.scale||1,!h){var d=this.getBounds(s),u=d.boundX,f=d.boundY;u&&(n=Math.max(Math.min(n,u.to),u.from)),f&&(a=Math.max(Math.min(a,f.to),f.from))}this.friction=l,this.transform=i(i({},this.transform),{},{x:n,y:a,scale:s}),l?(this.state="panning",this.velocity={x:(1/this.friction-1)*(n-this.content.x),y:(1/this.friction-1)*(a-this.content.y),scale:(1/this.friction-1)*(s-this.content.scale)},this.startAnimation()):this.endAnimation()}},{key:"startAnimation",value:function(){var t=this;this.rAF?cancelAnimationFrame(this.rAF):this.trigger("startAnimation"),this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"animate",value:function(){var t=this;if(this.setEdgeForce(),this.setDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.content.x+=this.velocity.x,this.content.y+=this.velocity.y,this.content.scale+=this.velocity.scale,this.isAnimating())this.setTransform();else if("pointerdown"!==this.state)return void this.endAnimation();this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"getBounds",value:function(t){var e=this.boundX,i=this.boundY;if(void 0!==e&&void 0!==i)return{boundX:e,boundY:i};e={from:0,to:0},i={from:0,to:0},t=t||this.transform.scale;var n=this.content.fitWidth*t,o=this.content.fitHeight*t,a=this.viewport.width,s=this.viewport.height;if(n<a){var r=S(.5*(a-n));e.from=r,e.to=r}else e.from=S(a-n);if(o<s){var l=.5*(s-o);i.from=l,i.to=l}else i.from=S(s-o);return{boundX:e,boundY:i}}},{key:"setEdgeForce",value:function(){if("decel"===this.state){var t,e,i,n,o=this.option("bounceForce"),a=this.getBounds(Math.max(this.transform.scale,this.content.scale)),s=a.boundX,r=a.boundY;if(s&&(t=this.content.x<s.from,e=this.content.x>s.to),r&&(i=this.content.y<r.from,n=this.content.y>r.to),t||e){var l=((t?s.from:s.to)-this.content.x)*o,c=this.content.x+(this.velocity.x+l)/this.friction;c>=s.from&&c<=s.to&&(l+=this.velocity.x),this.velocity.x=l,this.recalculateTransform()}if(i||n){var h=((i?r.from:r.to)-this.content.y)*o,d=this.content.y+(h+this.velocity.y)/this.friction;d>=r.from&&d<=r.to&&(h+=this.velocity.y),this.velocity.y=h,this.recalculateTransform()}}}},{key:"setDragResistance",value:function(){if("pointerdown"===this.state){var t,e,i,n,o=this.getBounds(this.dragPosition.scale),a=o.boundX,s=o.boundY;if(a&&(t=this.dragPosition.x<a.from,e=this.dragPosition.x>a.to),s&&(i=this.dragPosition.y<s.from,n=this.dragPosition.y>s.to),(t||e)&&(!t||!e)){var r=t?a.from:a.to,l=r-this.dragPosition.x;this.dragPosition.x=r-.3*l}if((i||n)&&(!i||!n)){var c=i?s.from:s.to,h=c-this.dragPosition.y;this.dragPosition.y=c-.3*h}}}},{key:"setDragForce",value:function(){"pointerdown"===this.state&&(this.velocity.x=this.dragPosition.x-this.content.x,this.velocity.y=this.dragPosition.y-this.content.y,this.velocity.scale=this.dragPosition.scale-this.content.scale)}},{key:"recalculateTransform",value:function(){this.transform.x=this.content.x+this.velocity.x/(1/this.friction-1),this.transform.y=this.content.y+this.velocity.y/(1/this.friction-1),this.transform.scale=this.content.scale+this.velocity.scale/(1/this.friction-1)}},{key:"isAnimating",value:function(){return!(!this.friction||!(Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05))}},{key:"setTransform",value:function(t){var e,n,o,a,s;(t?(e=S(this.transform.x),n=S(this.transform.y),o=this.transform.scale,this.content=i(i({},this.content),{},{x:e,y:n,scale:o})):(e=S(this.content.x),n=S(this.content.y),o=this.content.scale/(this.content.width/this.content.fitWidth),this.content=i(i({},this.content),{},{x:e,y:n})),this.trigger("beforeTransform"),e=S(this.content.x),n=S(this.content.y),t&&this.option("zoom"))?(a=S(this.content.fitWidth*o),s=S(this.content.fitHeight*o),this.content.width=a,this.content.height=s,this.transform=i(i({},this.transform),{},{width:a,height:s,scale:o}),Object.assign(this.$content.style,{width:"".concat(a,"px"),height:"".concat(s,"px"),maxWidth:"none",maxHeight:"none",transform:"translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(1)")})):this.$content.style.transform="translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(").concat(o,")");this.trigger("afterTransform")}},{key:"endAnimation",value:function(t){cancelAnimationFrame(this.rAF),this.rAF=null,this.velocity={x:0,y:0,scale:0},this.setTransform(!0),this.state="ready",this.handleCursor(),!0!==t&&this.trigger("endAnimation")}},{key:"handleCursor",value:function(){var t=this.option("draggableClass");t&&this.option("touch")&&(1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale")?this.$container.classList.remove(t):this.$container.classList.add(t))}},{key:"detachEvents",value:function(){this.$content.removeEventListener("load",this.onLoad),this.$container.removeEventListener("wheel",this.onWheel,{passive:!1}),this.$container.removeEventListener("click",this.onClick,{passive:!1}),this.pointerTracker&&(this.pointerTracker.stop(),this.pointerTracker=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"destroy",value:function(){"destroy"!==this.state&&(this.state="destroy",clearTimeout(this.updateTimer),this.updateTimer=null,cancelAnimationFrame(this.rAF),this.rAF=null,this.detachEvents(),this.detachPlugins(),this.resetDragPosition())}}]),n}(O);M.version="4.0.31",M.Plugins={};var I=function(t,e){var i=0;return function(){var n=(new Date).getTime();if(!(n-i<e))return i=n,t.apply(void 0,arguments)}},R=function(){function t(e){o(this,t),this.$container=null,this.$prev=null,this.$next=null,this.carousel=e,this.onRefresh=this.onRefresh.bind(this)}return s(t,[{key:"option",value:function(t){return this.carousel.option("Navigation.".concat(t))}},{key:"createButton",value:function(t){var e,i=this,n=document.createElement("button");n.setAttribute("title",this.carousel.localize("{{".concat(t.toUpperCase(),"}}")));var o=this.option("classNames.button")+" "+this.option("classNames.".concat(t));return(e=n.classList).add.apply(e,m(o.split(" "))),n.setAttribute("tabindex","0"),n.innerHTML=this.carousel.localize(this.option("".concat(t,"Tpl"))),n.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),i.carousel["slide".concat("next"===t?"Next":"Prev")]()})),n}},{key:"build",value:function(){var t;this.$container||(this.$container=document.createElement("div"),(t=this.$container.classList).add.apply(t,m(this.option("classNames.main").split(" "))),this.carousel.$container.appendChild(this.$container));this.$next||(this.$next=this.createButton("next"),this.$container.appendChild(this.$next)),this.$prev||(this.$prev=this.createButton("prev"),this.$container.appendChild(this.$prev))}},{key:"onRefresh",value:function(){var t=this.carousel.pages.length;t<=1||t>1&&this.carousel.elemDimWidth<this.carousel.wrapDimWidth&&!Number.isInteger(this.carousel.option("slidesPerPage"))?this.cleanup():(this.build(),this.$prev.removeAttribute("disabled"),this.$next.removeAttribute("disabled"),this.carousel.option("infiniteX",this.carousel.option("infinite"))||(this.carousel.page<=0&&this.$prev.setAttribute("disabled",""),this.carousel.page>=t-1&&this.$next.setAttribute("disabled","")))}},{key:"cleanup",value:function(){this.$prev&&this.$prev.remove(),this.$prev=null,this.$next&&this.$next.remove(),this.$next=null,this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.carousel.on("refresh change",this.onRefresh)}},{key:"detach",value:function(){this.carousel.off("refresh change",this.onRefresh),this.cleanup()}}]),t}();R.defaults={prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',classNames:{main:"carousel__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}};var F=function(){function t(e){o(this,t),this.carousel=e,this.$list=null,this.events={change:this.onChange.bind(this),refresh:this.onRefresh.bind(this)}}return s(t,[{key:"buildList",value:function(){var t=this;if(!(this.carousel.pages.length<this.carousel.option("Dots.minSlideCount"))){var e=document.createElement("ol");return e.classList.add("carousel__dots"),e.addEventListener("click",(function(e){if("page"in e.target.dataset){e.preventDefault(),e.stopPropagation();var i=parseInt(e.target.dataset.page,10),n=t.carousel;i!==n.page&&(n.pages.length<3&&n.option("infinite")?n[0==i?"slidePrev":"slideNext"]():n.slideTo(i))}})),this.$list=e,this.carousel.$container.appendChild(e),this.carousel.$container.classList.add("has-dots"),e}}},{key:"removeList",value:function(){this.$list&&(this.$list.parentNode.removeChild(this.$list),this.$list=null),this.carousel.$container.classList.remove("has-dots")}},{key:"rebuildDots",value:function(){var t=this,e=this.$list,i=!!e,n=this.carousel.pages.length;if(n<2)i&&this.removeList();else{i||(e=this.buildList());var o=this.$list.children.length;if(o>n)for(var a=n;a<o;a++)this.$list.removeChild(this.$list.lastChild);else{for(var s=function(e){var i=document.createElement("li");i.classList.add("carousel__dot"),i.dataset.page=e,i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.setAttribute("title",t.carousel.localize("{{GOTO}}",[["%d",e+1]])),i.addEventListener("keydown",(function(t){var e,n=t.code;"Enter"===n||"NumpadEnter"===n?e=i:"ArrowRight"===n?e=i.nextSibling:"ArrowLeft"===n&&(e=i.previousSibling),e&&e.click()})),t.$list.appendChild(i)},r=o;r<n;r++)s(r);this.setActiveDot()}}}},{key:"setActiveDot",value:function(){if(this.$list){this.$list.childNodes.forEach((function(t){t.classList.remove("is-selected")}));var t=this.$list.childNodes[this.carousel.page];t&&t.classList.add("is-selected")}}},{key:"onChange",value:function(){this.setActiveDot()}},{key:"onRefresh",value:function(){this.rebuildDots()}},{key:"attach",value:function(){this.carousel.on(this.events)}},{key:"detach",value:function(){this.removeList(),this.carousel.off(this.events),this.carousel=null}}]),t}(),N=function(){function t(e){o(this,t),this.carousel=e,this.selectedIndex=null,this.friction=0,this.onNavReady=this.onNavReady.bind(this),this.onNavClick=this.onNavClick.bind(this),this.onNavCreateSlide=this.onNavCreateSlide.bind(this),this.onTargetChange=this.onTargetChange.bind(this)}return s(t,[{key:"addAsTargetFor",value:function(t){this.target=this.carousel,this.nav=t,this.attachEvents()}},{key:"addAsNavFor",value:function(t){this.target=t,this.nav=this.carousel,this.attachEvents()}},{key:"attachEvents",value:function(){this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.on("createSlide",this.onNavCreateSlide),this.nav.on("Panzoom.click",this.onNavClick),this.target.on("change",this.onTargetChange),this.target.on("Panzoom.afterUpdate",this.onTargetChange)}},{key:"onNavReady",value:function(){this.onTargetChange(!0)}},{key:"onNavClick",value:function(t,e,i){var n=i.target.closest(".carousel__slide");if(n){i.stopPropagation();var o=parseInt(n.dataset.index,10),a=this.target.findPageForSlide(o);this.target.page!==a&&this.target.slideTo(a,{friction:this.friction}),this.markSelectedSlide(o)}}},{key:"onNavCreateSlide",value:function(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}},{key:"onTargetChange",value:function(){var t=this.target.pages[this.target.page].indexes[0],e=this.nav.findPageForSlide(t);this.nav.slideTo(e),this.markSelectedSlide(t)}},{key:"markSelectedSlide",value:function(t){this.selectedIndex=t,m(this.nav.slides).filter((function(t){return t.$el&&t.$el.classList.remove("is-nav-selected")}));var e=this.nav.slides[t];e&&e.$el&&e.$el.classList.add("is-nav-selected")}},{key:"attach",value:function(t){var e=t.options.Sync;(e.target||e.nav)&&(e.target?this.addAsNavFor(e.target):e.nav&&this.addAsTargetFor(e.nav),this.friction=e.friction)}},{key:"detach",value:function(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("createSlide",this.onNavCreateSlide)),this.target&&(this.target.off("Panzoom.afterUpdate",this.onTargetChange),this.target.off("change",this.onTargetChange))}}]),t}();N.defaults={friction:.92};var D={Navigation:R,Dots:F,Sync:N},B={slides:[],preload:0,slidesPerPage:"auto",initialPage:null,initialSlide:null,friction:.92,center:!0,infinite:!0,fill:!0,dragFree:!1,prefix:"",classNames:{viewport:"carousel__viewport",track:"carousel__track",slide:"carousel__slide",slideSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}},H=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,n),a=k(!0,{},B,a),(i=e.call(this,a)).state="init",i.$container=t,!(i.$container instanceof HTMLElement))throw new Error("No root element provided");return i.slideNext=I(i.slideNext.bind(d(i)),250),i.slidePrev=I(i.slidePrev.bind(d(i)),250),i.init(),t.__Carousel=d(i),i}return s(n,[{key:"init",value:function(){this.pages=[],this.page=this.pageIndex=null,this.prevPage=this.prevPageIndex=null,this.attachPlugins(n.Plugins),this.trigger("init"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.$track&&this.pages.length&&(this.$track.style.transform="translate3d(".concat(-1*this.pages[this.page].left,"px, 0px, 0) scale(1)")),this.manageSlideVisiblity(),this.initPanzoom(),this.state="ready",this.trigger("ready")}},{key:"initLayout",value:function(){var t,e,i,n,o=this.option("prefix"),a=this.option("classNames");(this.$viewport=this.option("viewport")||this.$container.querySelector(".".concat(o).concat(a.viewport)),this.$viewport)||(this.$viewport=document.createElement("div"),(t=this.$viewport.classList).add.apply(t,m((o+a.viewport).split(" "))),(e=this.$viewport).append.apply(e,m(this.$container.childNodes)),this.$container.appendChild(this.$viewport));(this.$track=this.option("track")||this.$container.querySelector(".".concat(o).concat(a.track)),this.$track)||(this.$track=document.createElement("div"),(i=this.$track.classList).add.apply(i,m((o+a.track).split(" "))),(n=this.$track).append.apply(n,m(this.$viewport.childNodes)),this.$viewport.appendChild(this.$track))}},{key:"initSlides",value:function(){var t=this;this.slides=[],this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function(e){var i={$el:e,isDom:!0};t.slides.push(i),t.trigger("createSlide",i,t.slides.length)})),Array.isArray(this.options.slides)&&(this.slides=k(!0,m(this.slides),this.options.slides))}},{key:"updateMetrics",value:function(){var t,e=this,n=0,o=[];this.slides.forEach((function(i,a){var s=i.$el,r=i.isDom||!t?e.getSlideMetrics(s):t;i.index=a,i.width=r,i.left=n,t=r,n+=r,o.push(a)}));var a=Math.max(this.$track.offsetWidth,S(this.$track.getBoundingClientRect().width)),s=getComputedStyle(this.$track);a-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),this.contentWidth=n,this.viewportWidth=a;var r=[],l=this.option("slidesPerPage");if(Number.isInteger(l)&&n>a)for(var c=0;c<this.slides.length;c+=l)r.push({indexes:o.slice(c,c+l),slides:this.slides.slice(c,c+l)});else for(var h=0,d=0,u=0;u<this.slides.length;u+=1){var f=this.slides[u];(!r.length||d+f.width>a)&&(r.push({indexes:[],slides:[]}),h=r.length-1,d=0),d+=f.width,r[h].indexes.push(u),r[h].slides.push(f)}var v=this.option("center"),p=this.option("fill");r.forEach((function(t,i){t.index=i,t.width=t.slides.reduce((function(t,e){return t+e.width}),0),t.left=t.slides[0].left,v&&(t.left+=.5*(a-t.width)*-1),p&&!e.option("infiniteX",e.option("infinite"))&&n>a&&(t.left=Math.max(t.left,0),t.left=Math.min(t.left,n-a))}));var g,y=[];r.forEach((function(t){var e=i({},t);g&&e.left===g.left?(g.width+=e.width,g.slides=[].concat(m(g.slides),m(e.slides)),g.indexes=[].concat(m(g.indexes),m(e.indexes))):(e.index=y.length,g=e,y.push(e))})),this.pages=y;var b=this.page;if(null===b){var x=this.option("initialSlide");b=null!==x?this.findPageForSlide(x):parseInt(this.option("initialPage",0),10)||0,y[b]||(b=y.length&&b>y.length?y[y.length-1].index:0),this.page=b,this.pageIndex=b}this.updatePanzoom(),this.trigger("refresh")}},{key:"getSlideMetrics",value:function(t){if(!t){var e,i,n=this.slides[0];if((t=document.createElement("div")).dataset.isTestEl=1,t.style.visibility="hidden",(e=t.classList).add.apply(e,m((this.option("prefix")+this.option("classNames.slide")).split(" "))),n.customClass)(i=t.classList).add.apply(i,m(n.customClass.split(" ")));this.$track.prepend(t)}var o=Math.max(t.offsetWidth,S(t.getBoundingClientRect().width)),a=t.currentStyle||window.getComputedStyle(t);return o=o+(parseFloat(a.marginLeft)||0)+(parseFloat(a.marginRight)||0),t.dataset.isTestEl&&t.remove(),o}},{key:"findPageForSlide",value:function(t){t=parseInt(t,10)||0;var e=this.pages.find((function(e){return e.indexes.indexOf(t)>-1}));return e?e.index:null}},{key:"slideNext",value:function(){this.slideTo(this.pageIndex+1)}},{key:"slidePrev",value:function(){this.slideTo(this.pageIndex-1)}},{key:"slideTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?-1*this.setPage(t,!0):i,o=e.y,a=void 0===o?0:o,s=e.friction,r=void 0===s?this.option("friction"):s;this.Panzoom.content.x===n&&!this.Panzoom.velocity.x&&r||(this.Panzoom.panTo({x:n,y:a,friction:r,ignoreBounds:!0}),"ready"===this.state&&"ready"===this.Panzoom.state&&this.trigger("settle"))}},{key:"initPanzoom",value:function(){var t=this;this.Panzoom&&this.Panzoom.destroy();var e=k(!0,{},{content:this.$track,wrapInner:!1,resizeParent:!1,zoom:!1,click:!1,lockAxis:"x",x:this.pages.length?-1*this.pages[this.page].left:0,centerOnStart:!1,textSelection:function(){return t.option("textSelection",!1)},panOnlyZoomed:function(){return this.content.width<=this.viewport.width}},this.option("Panzoom"));this.Panzoom=new M(this.$container,e),this.Panzoom.on({"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Panzoom.".concat(e)].concat(n))},afterUpdate:function(){t.updatePage()},beforeTransform:this.onBeforeTransform.bind(this),touchEnd:this.onTouchEnd.bind(this),endAnimation:function(){t.trigger("settle")}}),this.updateMetrics(),this.manageSlideVisiblity()}},{key:"updatePanzoom",value:function(){this.Panzoom&&(this.Panzoom.content=i(i({},this.Panzoom.content),{},{fitWidth:this.contentWidth,origWidth:this.contentWidth,width:this.contentWidth}),this.pages.length>1&&this.option("infiniteX",this.option("infinite"))?this.Panzoom.boundX=null:this.pages.length&&(this.Panzoom.boundX={from:-1*this.pages[this.pages.length-1].left,to:-1*this.pages[0].left}),this.option("infiniteY",this.option("infinite"))?this.Panzoom.boundY=null:this.Panzoom.boundY={from:0,to:0},this.Panzoom.handleCursor())}},{key:"manageSlideVisiblity",value:function(){var t=this,e=this.contentWidth,i=this.viewportWidth,n=this.Panzoom?-1*this.Panzoom.content.x:this.pages.length?this.pages[this.page].left:0,o=this.option("preload"),a=this.option("infiniteX",this.option("infinite")),s=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-left")),r=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-right"));this.slides.forEach((function(l){var c,h,d=0;c=n-s,h=n+i+r,c-=o*(i+s+r),h+=o*(i+s+r);var u=l.left+l.width>c&&l.left<h;c=n+e-s,h=n+e+i+r,c-=o*(i+s+r);var f=a&&l.left+l.width>c&&l.left<h;c=n-e-s,h=n-e+i+r,c-=o*(i+s+r);var v=a&&l.left+l.width>c&&l.left<h;f||u||v?(t.createSlideEl(l),u&&(d=0),f&&(d=-1),v&&(d=1),l.left+l.width>n&&l.left<=n+i+r&&(d=0)):t.removeSlideEl(l),l.hasDiff=d}));var l=0,c=0;this.slides.forEach((function(t,i){var n=0;t.$el?(i!==l||t.hasDiff?n=c+t.hasDiff*e:c=0,t.$el.style.left=Math.abs(n)>.1?"".concat(c+t.hasDiff*e,"px"):"",l++):c+=t.width})),this.markSelectedSlides()}},{key:"createSlideEl",value:function(t){var e;if(t){if(!t.$el){var i,n=document.createElement("div");if(n.dataset.index=t.index,(e=n.classList).add.apply(e,m((this.option("prefix")+this.option("classNames.slide")).split(" "))),t.customClass)(i=n.classList).add.apply(i,m(t.customClass.split(" ")));t.html&&(n.innerHTML=t.html);var o=[];this.slides.forEach((function(t,e){t.$el&&o.push(e)}));var a=t.index,s=null;if(o.length){var r=o.reduce((function(t,e){return Math.abs(e-a)<Math.abs(t-a)?e:t}));s=this.slides[r]}return this.$track.insertBefore(n,s&&s.$el?s.index<t.index?s.$el.nextSibling:s.$el:null),t.$el=n,this.trigger("createSlide",t,a),t}var l,c=t.$el.dataset.index;c&&parseInt(c,10)===t.index||(t.$el.dataset.index=t.index,t.$el.querySelectorAll("[data-lazy-srcset]").forEach((function(t){t.srcset=t.dataset.lazySrcset})),t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t){var e=t.dataset.lazySrc;t instanceof HTMLImageElement?t.src=e:t.style.backgroundImage="url('".concat(e,"')")})),(l=t.$el.dataset.lazySrc)&&(t.$el.style.backgroundImage="url('".concat(l,"')")),t.state="ready")}}},{key:"removeSlideEl",value:function(t){t.$el&&!t.isDom&&(this.trigger("removeSlide",t),t.$el.remove(),t.$el=null)}},{key:"markSelectedSlides",value:function(){var t=this,e=this.option("classNames.slideSelected"),i="aria-hidden";this.slides.forEach((function(n,o){var a=n.$el;if(a){var s=t.pages[t.page];s&&s.indexes&&s.indexes.indexOf(o)>-1?(e&&!a.classList.contains(e)&&(a.classList.add(e),t.trigger("selectSlide",n)),a.removeAttribute(i)):(e&&a.classList.contains(e)&&(a.classList.remove(e),t.trigger("unselectSlide",n)),a.setAttribute(i,!0))}}))}},{key:"updatePage",value:function(){this.updateMetrics(),this.slideTo(this.page,{friction:0})}},{key:"onBeforeTransform",value:function(){this.option("infiniteX",this.option("infinite"))&&this.manageInfiniteTrack(),this.manageSlideVisiblity()}},{key:"manageInfiniteTrack",value:function(){var t=this.contentWidth,e=this.viewportWidth;if(!(!this.option("infiniteX",this.option("infinite"))||this.pages.length<2||t<e)){var i=this.Panzoom,n=!1;return i.content.x<-1*(t-e)&&(i.content.x+=t,this.pageIndex=this.pageIndex-this.pages.length,n=!0),i.content.x>e&&(i.content.x-=t,this.pageIndex=this.pageIndex+this.pages.length,n=!0),n&&"pointerdown"===i.state&&i.resetDragPosition(),n}}},{key:"onTouchEnd",value:function(t,e){var i=this.option("dragFree");if(!i&&this.pages.length>1&&t.dragOffset.time<350&&Math.abs(t.dragOffset.y)<1&&Math.abs(t.dragOffset.x)>5)this[t.dragOffset.x<0?"slideNext":"slidePrev"]();else if(i){var n=g(this.getPageFromPosition(-1*t.transform.x),2)[1];this.setPage(n)}else this.slideToClosest()}},{key:"slideToClosest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getPageFromPosition(-1*this.Panzoom.content.x),i=g(e,2),n=i[1];this.slideTo(n,t)}},{key:"getPageFromPosition",value:function(t){var e=this.pages.length;this.option("center")&&(t+=.5*this.viewportWidth);var i=Math.floor(t/this.contentWidth);t-=i*this.contentWidth;var n=this.slides.find((function(e){return e.left<=t&&e.left+e.width>t}));if(n){var o=this.findPageForSlide(n.index);return[o,o+i*e]}return[0,0]}},{key:"setPage",value:function(t,e){var i=0,n=parseInt(t,10)||0,o=this.page,a=this.pageIndex,s=this.pages.length,r=this.contentWidth,l=this.viewportWidth;if(t=(n%s+s)%s,this.option("infiniteX",this.option("infinite"))&&r>l){var c=Math.floor(n/s)||0,h=r;if(i=this.pages[t].left+c*h,!0===e&&s>2){var d=-1*this.Panzoom.content.x,u=i-h,f=i+h,v=Math.abs(d-i),p=Math.abs(d-u),g=Math.abs(d-f);g<v&&g<=p?(i=f,n+=s):p<v&&p<g&&(i=u,n-=s)}}else t=n=Math.max(0,Math.min(n,s-1)),i=this.pages.length?this.pages[t].left:0;return this.page=t,this.pageIndex=n,null!==o&&t!==o&&(this.prevPage=o,this.prevPageIndex=a,this.trigger("change",t,o)),i}},{key:"destroy",value:function(){var t=this;this.state="destroy",this.slides.forEach((function(e){t.removeSlideEl(e)})),this.slides=[],this.Panzoom.destroy(),this.detachPlugins()}}]),n}(O);H.version="4.0.31",H.Plugins=D;var W=!("undefined"==typeof window||!window.document||!window.document.createElement),j=null,X=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],q=function(t){if(t&&W){null===j&&document.createElement("div").focus({get preventScroll(){return j=!0,!1}});try{if(t.setActive)t.setActive();else if(j)t.focus({preventScroll:!0});else{var e=window.pageXOffset||document.body.scrollTop,i=window.pageYOffset||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},U=function(){function t(e){o(this,t),this.fancybox=e,this.viewport=null,this.pendingUpdate=null;for(var i=0,n=["onReady","onResize","onTouchstart","onTouchmove"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}}return s(t,[{key:"onReady",value:function(){var t=window.visualViewport;t&&(this.viewport=t,this.startY=0,t.addEventListener("resize",this.onResize),this.updateViewport()),window.addEventListener("touchstart",this.onTouchstart,{passive:!1}),window.addEventListener("touchmove",this.onTouchmove,{passive:!1}),window.addEventListener("wheel",this.onWheel,{passive:!1})}},{key:"onResize",value:function(){this.updateViewport()}},{key:"updateViewport",value:function(){var t=this.fancybox,e=this.viewport,i=e.scale||1,n=t.$container;if(n){var o="",a="",s="";i-1>.1&&(o="".concat(e.width*i,"px"),a="".concat(e.height*i,"px"),s="translate3d(".concat(e.offsetLeft,"px, ").concat(e.offsetTop,"px, 0) scale(").concat(1/i,")")),n.style.width=o,n.style.height=a,n.style.transform=s}}},{key:"onTouchstart",value:function(t){this.startY=t.touches?t.touches[0].screenY:t.screenY}},{key:"onTouchmove",value:function(t){var e=this.startY,i=window.innerWidth/window.document.documentElement.clientWidth;if(t.cancelable&&!(t.touches.length>1||1!==i)){var n=C(t.composedPath()[0]);if(n){var o=window.getComputedStyle(n),a=parseInt(o.getPropertyValue("height"),10),s=t.touches?t.touches[0].screenY:t.screenY,r=e<=s&&0===n.scrollTop,l=e>=s&&n.scrollHeight-n.scrollTop===a;(r||l)&&t.preventDefault()}else t.preventDefault()}}},{key:"onWheel",value:function(t){C(t.composedPath()[0])||t.preventDefault()}},{key:"cleanup",value:function(){this.pendingUpdate&&(cancelAnimationFrame(this.pendingUpdate),this.pendingUpdate=null);var t=this.viewport;t&&(t.removeEventListener("resize",this.onResize),this.viewport=null),window.removeEventListener("touchstart",this.onTouchstart,!1),window.removeEventListener("touchmove",this.onTouchmove,!1),window.removeEventListener("wheel",this.onWheel,{passive:!1})}},{key:"attach",value:function(){this.fancybox.on("initLayout",this.onReady)}},{key:"detach",value:function(){this.fancybox.off("initLayout",this.onReady),this.cleanup()}}]),t}(),Y=function(){function t(e){o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var i=0,n=["onPrepare","onClosing","onKeydown"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={prepare:this.onPrepare,closing:this.onClosing,keydown:this.onKeydown}}return s(t,[{key:"onPrepare",value:function(){this.getSlides().length<this.fancybox.option("Thumbs.minSlideCount")?this.state="disabled":!0===this.fancybox.option("Thumbs.autoStart")&&this.fancybox.Carousel.Panzoom.content.height>=this.fancybox.option("Thumbs.minScreenHeight")&&this.build()}},{key:"onClosing",value:function(){this.Carousel&&this.Carousel.Panzoom.detachEvents()}},{key:"onKeydown",value:function(t,e){e===t.option("Thumbs.key")&&this.toggle()}},{key:"build",value:function(){var t=this;if(!this.$container){var e=document.createElement("div");e.classList.add("fancybox__thumbs"),this.fancybox.$carousel.parentNode.insertBefore(e,this.fancybox.$carousel.nextSibling),this.Carousel=new H(e,k(!0,{Dots:!1,Navigation:!1,Sync:{friction:0},infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,preload:1},this.fancybox.option("Thumbs.Carousel"),{Sync:{target:this.fancybox.Carousel},slides:this.getSlides()})),this.Carousel.Panzoom.on("wheel",(function(e,i){i.preventDefault(),t.fancybox[i.deltaY<0?"prev":"next"]()})),this.$container=e,this.state="visible"}}},{key:"getSlides",value:function(){var t,e=[],i=x(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=n.thumb;o&&e.push({html:this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi,o),customClass:"has-thumb has-".concat(n.type||"image")})}}catch(t){i.e(t)}finally{i.f()}return e}},{key:"toggle",value:function(){"visible"===this.state?this.hide():"hidden"===this.state?this.show():this.build()}},{key:"show",value:function(){"hidden"===this.state&&(this.$container.style.display="",this.Carousel.Panzoom.attachEvents(),this.state="visible")}},{key:"hide",value:function(){"visible"===this.state&&(this.Carousel.Panzoom.detachEvents(),this.$container.style.display="none",this.state="hidden")}},{key:"cleanup",value:function(){this.Carousel&&(this.Carousel.destroy(),this.Carousel=null),this.$container&&(this.$container.remove(),this.$container=null),this.state="init"}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();Y.defaults={minSlideCount:2,minScreenHeight:500,autoStart:!0,key:"t",Carousel:{},tpl:'<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'};var V=function(t,e){for(var i=new URL(t),n=new URLSearchParams(i.search),o=new URLSearchParams,a=0,s=[].concat(m(n),m(Object.entries(e)));a<s.length;a++){var r=g(s[a],2),l=r[0],c=r[1];"t"===l?o.set("start",parseInt(c)):o.set(l,c)}o=o.toString();var h=t.match(/#t=((.*)?\d+s)/);return h&&(o+="#t=".concat(h[1])),o},Z={video:{autoplay:!0,ratio:16/9},youtube:{autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},vimeo:{hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},html5video:{tpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',format:""}},G=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onInit","onReady","onCreateSlide","onRemoveSlide","onSelectSlide","onUnselectSlide","onRefresh","onMessage"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={init:this.onInit,ready:this.onReady,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide,"Carousel.selectSlide":this.onSelectSlide,"Carousel.unselectSlide":this.onUnselectSlide,"Carousel.refresh":this.onRefresh}}return s(t,[{key:"onInit",value:function(){var t,e=x(this.fancybox.items);try{for(e.s();!(t=e.n()).done;){var i=t.value;this.processType(i)}}catch(t){e.e(t)}finally{e.f()}}},{key:"processType",value:function(t){if(t.html)return t.src=t.html,t.type="html",void delete t.html;var e=t.src||"",i=t.type||this.fancybox.options.type,n=null;if(!e||"string"==typeof e){if(n=e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){var o=V(e,this.fancybox.option("Html.youtube")),a=encodeURIComponent(n[1]);t.videoId=a,t.src="https://www.youtube-nocookie.com/embed/".concat(a,"?").concat(o),t.thumb=t.thumb||"https://i.ytimg.com/vi/".concat(a,"/mqdefault.jpg"),t.vendor="youtube",i="video"}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)){var s=V(e,this.fancybox.option("Html.vimeo")),r=encodeURIComponent(n[1]);t.videoId=r,t.src="https://player.vimeo.com/video/".concat(r,"?").concat(s),t.vendor="vimeo",i="video"}else(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src="//maps.google.".concat(n[1],"/?ll=").concat((n[2]?n[2]+"&z="+Math.floor(n[3])+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&"),"&output=").concat(n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"),i="map"):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src="//maps.google.".concat(n[1],"/maps?q=").concat(n[2].replace("query=","q=").replace("api=1",""),"&output=embed"),i="map");i||("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i="html5video",t.format=t.format||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i="image":e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),t.type=i||this.fancybox.option("defaultType","image"),"html5video"!==i&&"video"!==i||(t.video=k({},this.fancybox.option("Html.video"),t.video),t._width&&t._height?t.ratio=parseFloat(t._width)/parseFloat(t._height):t.ratio=t.ratio||t.video.ratio||Z.video.ratio)}}},{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&(t.setContent(e),e.index===t.fancybox.getSlide().index&&t.playVideo(e))}))}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"loadInlineContent",value:function(t){var e;if(t.src instanceof HTMLElement)e=t.src;else if("string"==typeof t.src){var i=t.src.split("#",2),n=2===i.length&&""===i[0]?i[1]:i[0];e=document.getElementById(n)}if(e){if("clone"===t.type||e.$placeHolder){var o=(e=e.cloneNode(!0)).getAttribute("id");o=o?"".concat(o,"--clone"):"clone-".concat(this.fancybox.id,"-").concat(t.index),e.setAttribute("id",o)}else{var a=document.createElement("div");a.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(a,e),e.$placeHolder=a}this.fancybox.setContent(t,e)}else this.fancybox.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"loadAjaxContent",value:function(t){var e=this.fancybox,i=new XMLHttpRequest;e.showLoading(t),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&"ready"===e.state&&(e.hideLoading(t),200===i.status?e.setContent(t,i.responseText):e.setError(t,404===i.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};var n=t.ajax||null;i.open(n?"POST":"GET",t.src),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(n),t.xhr=i}},{key:"loadIframeContent",value:function(t){var e=this,i=this.fancybox,n=document.createElement("iframe");if(n.className="fancybox__iframe",n.setAttribute("id","fancybox__iframe_".concat(i.id,"_").concat(t.index)),n.setAttribute("allow","autoplay; fullscreen"),n.setAttribute("scrolling","auto"),t.$iframe=n,"iframe"!==t.type||!1===t.preload)return n.setAttribute("src",t.src),this.fancybox.setContent(t,n),void this.resizeIframe(t);i.showLoading(t);var o=document.createElement("div");o.style.visibility="hidden",this.fancybox.setContent(t,o),o.appendChild(n),n.onerror=function(){i.setError(t,"{{IFRAME_ERROR}}")},n.onload=function(){i.hideLoading(t);var o=!1;n.isReady||(n.isReady=!0,o=!0),n.src.length&&(n.parentNode.style.visibility="",e.resizeIframe(t),o&&i.revealContent(t))},n.setAttribute("src",t.src)}},{key:"setAspectRatio",value:function(t){var e=t.$content,i=t.ratio;if(e){var n=t._width,o=t._height;if(i||n&&o){Object.assign(e.style,{width:n&&o?"100%":"",height:n&&o?"100%":"",maxWidth:"",maxHeight:""});var a=e.offsetWidth,s=e.offsetHeight;if(o=o||s,(n=n||a)>a||o>s){var r=Math.min(a/n,s/o);n*=r,o*=r}Math.abs(n/o-i)>.01&&(i<n/o?n=o*i:o=n/i),Object.assign(e.style,{width:"".concat(n,"px"),height:"".concat(o,"px")})}}}},{key:"resizeIframe",value:function(t){var e=t.$iframe;if(e){var i=t._width||0,n=t._height||0;i&&n&&(t.autoSize=!1);var o=e.parentNode,a=o&&o.style;if(!1!==t.preload&&!1!==t.autoSize&&a)try{var s=window.getComputedStyle(o),r=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),l=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom),c=e.contentWindow.document,h=c.getElementsByTagName("html")[0],d=c.body;a.width="",d.style.overflow="hidden",i=i||h.scrollWidth+r,a.width="".concat(i,"px"),d.style.overflow="",a.flex="0 0 auto",a.height="".concat(d.scrollHeight,"px"),n=h.scrollHeight+l}catch(t){}if(i||n){var u={flex:"0 1 auto"};i&&(u.width="".concat(i,"px")),n&&(u.height="".concat(n,"px")),Object.assign(a,u)}}}},{key:"onRefresh",value:function(t,e){var i=this;e.slides.forEach((function(t){t.$el&&(t.$iframe&&i.resizeIframe(t),t.ratio&&i.setAspectRatio(t))}))}},{key:"setContent",value:function(t){if(t&&!t.isDom){switch(t.type){case"html":this.fancybox.setContent(t,t.src);break;case"html5video":this.fancybox.setContent(t,this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.format||t.html5video&&t.html5video.format||"").replace("{{poster}}",t.poster||t.thumb||""));break;case"inline":case"clone":this.loadInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case"video":case"map":t.preload=!1;case"iframe":this.loadIframeContent(t)}t.ratio&&this.setAspectRatio(t)}}},{key:"onSelectSlide",value:function(t,e,i){"ready"===t.state&&this.playVideo(i)}},{key:"playVideo",value:function(t){if("html5video"===t.type&&t.video.autoplay)try{var e=t.$el.querySelector("video");if(e){var i=e.play();void 0!==i&&i.then((function(){})).catch((function(t){e.muted=!0,e.play()}))}}catch(t){}if("video"===t.type&&t.$iframe&&t.$iframe.contentWindow){!function e(){if("done"===t.state&&t.$iframe&&t.$iframe.contentWindow){var i;if(t.$iframe.isReady)return t.video&&t.video.autoplay&&(i="youtube"==t.vendor?{event:"command",func:"playVideo"}:{method:"play",value:"true"}),void(i&&t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"));"youtube"===t.vendor&&(i={event:"listening",id:t.$iframe.getAttribute("id")},t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"))}t.poller=setTimeout(e,250)}()}}},{key:"onUnselectSlide",value:function(t,e,i){if("html5video"!==i.type){var n=!1;"vimeo"==i.vendor?n={method:"pause",value:"true"}:"youtube"===i.vendor&&(n={event:"command",func:"pauseVideo"}),n&&i.$iframe&&i.$iframe.contentWindow&&i.$iframe.contentWindow.postMessage(JSON.stringify(n),"*"),clearTimeout(i.poller)}else try{i.$el.querySelector("video").pause()}catch(t){}}},{key:"onRemoveSlide",value:function(t,e,i){i.xhr&&(i.xhr.abort(),i.xhr=null),i.$iframe&&(i.$iframe.onload=i.$iframe.onerror=null,i.$iframe.src="//about:blank",i.$iframe=null);var n=i.$content;"inline"===i.type&&n&&(n.classList.remove("fancybox__content"),"none"!==n.style.display&&(n.style.display="none")),i.$closeButton&&(i.$closeButton.remove(),i.$closeButton=null);var o=n&&n.$placeHolder;o&&(o.parentNode.insertBefore(n,o),o.remove(),n.$placeHolder=null)}},{key:"onMessage",value:function(t){try{var e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event){var i,n=x(document.getElementsByClassName("fancybox__iframe"));try{for(n.s();!(i=n.n()).done;){var o=i.value;o.contentWindow===t.source&&(o.isReady=1)}}catch(t){n.e(t)}finally{n.f()}}}else"https://www.youtube-nocookie.com"===t.origin&&"onReady"===e.event&&(document.getElementById(e.id).isReady=1)}catch(t){}}},{key:"attach",value:function(){this.fancybox.on(this.events),window.addEventListener("message",this.onMessage,!1)}},{key:"detach",value:function(){this.fancybox.off(this.events),window.removeEventListener("message",this.onMessage,!1)}}]),t}();G.defaults=Z;var K=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onReady","onClosing","onDone","onPageChange","onCreateSlide","onRemoveSlide","onImageStatusChange"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={ready:this.onReady,closing:this.onClosing,done:this.onDone,"Carousel.change":this.onPageChange,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide}}return s(t,[{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&t.setContent(e)}))}},{key:"onDone",value:function(t,e){this.handleCursor(e)}},{key:"onClosing",value:function(t){clearTimeout(this.clickTimer),this.clickTimer=null,t.Carousel.slides.forEach((function(t){t.$image&&(t.state="destroy"),t.Panzoom&&t.Panzoom.detachEvents()})),"closing"===this.fancybox.state&&this.canZoom(t.getSlide())&&this.zoomOut()}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"onRemoveSlide",value:function(t,e,i){i.$image&&(i.$el.classList.remove(t.option("Image.canZoomInClass")),i.$image.remove(),i.$image=null),i.Panzoom&&(i.Panzoom.destroy(),i.Panzoom=null),i.$el&&i.$el.dataset&&delete i.$el.dataset.imageFit}},{key:"setContent",value:function(t){var e=this;if(!(t.isDom||t.html||t.type&&"image"!==t.type||t.$image)){t.type="image",t.state="loading";var i=document.createElement("div");i.style.visibility="hidden";var n=document.createElement("img");n.addEventListener("load",(function(i){i.stopImmediatePropagation(),e.onImageStatusChange(t)})),n.addEventListener("error",(function(){e.onImageStatusChange(t)})),n.src=t.src,n.alt="",n.draggable=!1,n.classList.add("fancybox__image"),t.srcset&&n.setAttribute("srcset",t.srcset),t.sizes&&n.setAttribute("sizes",t.sizes),t.$image=n;var o=this.fancybox.option("Image.wrap");if(o){var a=document.createElement("div");a.classList.add("string"==typeof o?o:"fancybox__image-wrap"),a.appendChild(n),i.appendChild(a),t.$wrap=a}else i.appendChild(n);t.$el.dataset.imageFit=this.fancybox.option("Image.fit"),this.fancybox.setContent(t,i),n.complete||n.error?this.onImageStatusChange(t):this.fancybox.showLoading(t)}}},{key:"onImageStatusChange",value:function(t){var e=this,i=t.$image;i&&"loading"===t.state&&(i.complete&&i.naturalWidth&&i.naturalHeight?(this.fancybox.hideLoading(t),"contain"===this.fancybox.option("Image.fit")&&this.initSlidePanzoom(t),t.$el.addEventListener("wheel",(function(i){return e.onWheel(t,i)}),{passive:!1}),t.$content.addEventListener("click",(function(i){return e.onClick(t,i)}),{passive:!1}),this.revealContent(t)):this.fancybox.setError(t,"{{IMAGE_ERROR}}"))}},{key:"initSlidePanzoom",value:function(t){var e=this;t.Panzoom||(t.Panzoom=new M(t.$el,k(!0,this.fancybox.option("Image.Panzoom",{}),{viewport:t.$wrap,content:t.$image,width:t._width,height:t._height,wrapInner:!1,textSelection:!0,touch:this.fancybox.option("Image.touch"),panOnlyZoomed:!0,click:!1,wheel:!1})),t.Panzoom.on("startAnimation",(function(){e.fancybox.trigger("Image.startAnimation",t)})),t.Panzoom.on("endAnimation",(function(){"zoomIn"===t.state&&e.fancybox.done(t),e.handleCursor(t),e.fancybox.trigger("Image.endAnimation",t)})),t.Panzoom.on("afterUpdate",(function(){e.handleCursor(t),e.fancybox.trigger("Image.afterUpdate",t)})))}},{key:"revealContent",value:function(t){null===this.fancybox.Carousel.prevPage&&t.index===this.fancybox.options.startIndex&&this.canZoom(t)?this.zoomIn():this.fancybox.revealContent(t)}},{key:"getZoomInfo",value:function(t){var e=t.$thumb.getBoundingClientRect(),i=e.width,n=e.height,o=t.$content.getBoundingClientRect(),a=o.width,s=o.height,r=o.top-e.top,l=o.left-e.left,c=this.fancybox.option("Image.zoomOpacity");return"auto"===c&&(c=Math.abs(i/n-a/s)>.1),{top:r,left:l,scale:a&&i?i/a:1,opacity:c}}},{key:"canZoom",value:function(t){var e=this.fancybox,i=e.$container;if(window.visualViewport&&1!==window.visualViewport.scale)return!1;if(t.Panzoom&&!t.Panzoom.content.width)return!1;if(!e.option("Image.zoom")||"contain"!==e.option("Image.fit"))return!1;var n=t.$thumb;if(!n||"loading"===t.state)return!1;i.classList.add("fancybox__no-click");var o,a=n.getBoundingClientRect();if(this.fancybox.option("Image.ignoreCoveredThumbnail")){var s=document.elementFromPoint(a.left+1,a.top+1)===n,r=document.elementFromPoint(a.right-1,a.bottom-1)===n;o=s&&r}else o=document.elementFromPoint(a.left+.5*a.width,a.top+.5*a.height)===n;return i.classList.remove("fancybox__no-click"),o}},{key:"zoomIn",value:function(){var t=this.fancybox,e=t.getSlide(),i=e.Panzoom,n=this.getZoomInfo(e),o=n.top,a=n.left,s=n.scale,r=n.opacity;t.trigger("reveal",e),i.panTo({x:-1*a,y:-1*o,scale:s,friction:0,ignoreBounds:!0}),e.$content.style.visibility="",e.state="zoomIn",!0===r&&i.on("afterTransform",(function(t){"zoomIn"!==e.state&&"zoomOut"!==e.state||(t.$content.style.opacity=Math.min(1,1-(1-t.content.scale)/(1-s)))})),i.panTo({x:0,y:0,scale:1,friction:this.fancybox.option("Image.zoomFriction")})}},{key:"zoomOut",value:function(){var t=this,e=this.fancybox,i=e.getSlide(),n=i.Panzoom;if(n){i.state="zoomOut",e.state="customClosing",i.$caption&&(i.$caption.style.visibility="hidden");var o=this.fancybox.option("Image.zoomFriction"),a=function(e){var a=t.getZoomInfo(i),s=a.top,r=a.left,l=a.scale,c=a.opacity;e||c||(o*=.82),n.panTo({x:-1*r,y:-1*s,scale:l,friction:o,ignoreBounds:!0}),o*=.98};window.addEventListener("scroll",a),n.once("endAnimation",(function(){window.removeEventListener("scroll",a),e.destroy()})),a()}}},{key:"handleCursor",value:function(t){if("image"===t.type&&t.$el){var e=t.Panzoom,i=this.fancybox.option("Image.click",!1,t),n=this.fancybox.option("Image.touch"),o=t.$el.classList,a=this.fancybox.option("Image.canZoomInClass"),s=this.fancybox.option("Image.canZoomOutClass");if(o.remove(s),o.remove(a),e&&"toggleZoom"===i)e&&1===e.content.scale&&e.option("maxScale")-e.content.scale>.01?o.add(a):e.content.scale>1&&!n&&o.add(s);else"close"===i&&o.add(s)}}},{key:"onWheel",value:function(t,e){if("ready"===this.fancybox.state&&!1!==this.fancybox.trigger("Image.wheel",e))switch(this.fancybox.option("Image.wheel")){case"zoom":"done"===t.state&&t.Panzoom&&t.Panzoom.zoomWithWheel(e);break;case"close":this.fancybox.close();break;case"slide":this.fancybox[e.deltaY<0?"prev":"next"]()}}},{key:"onClick",value:function(t,e){var i=this;if("ready"===this.fancybox.state){var n=t.Panzoom;if(!n||!n.dragPosition.midPoint&&0===n.dragOffset.x&&0===n.dragOffset.y&&1===n.dragOffset.scale){if(this.fancybox.Carousel.Panzoom.lockAxis)return!1;var o=function(n){switch(n){case"toggleZoom":e.stopPropagation(),t.Panzoom&&t.Panzoom.zoomWithClick(e);break;case"close":i.fancybox.close();break;case"next":e.stopPropagation(),i.fancybox.next()}},a=this.fancybox.option("Image.click"),s=this.fancybox.option("Image.doubleClick");s?this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null,o(s)):this.clickTimer=setTimeout((function(){i.clickTimer=null,o(a)}),300):o(a)}}}},{key:"onPageChange",value:function(t,e){var i=t.getSlide();e.slides.forEach((function(t){t.Panzoom&&"done"===t.state&&t.index!==i.index&&t.Panzoom.panTo({x:0,y:0,scale:1,friction:.8})}))}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events)}}]),t}();K.defaults={canZoomInClass:"can-zoom_in",canZoomOutClass:"can-zoom_out",zoom:!0,zoomOpacity:"auto",zoomFriction:.82,ignoreCoveredThumbnail:!1,touch:!0,click:"toggleZoom",doubleClick:null,wheel:"zoom",fit:"contain",wrap:!1,Panzoom:{ratio:1}};var J=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onChange","onClosing"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={initCarousel:this.onChange,"Carousel.change":this.onChange,closing:this.onClosing},this.hasCreatedHistory=!1,this.origHash="",this.timer=null}return s(t,[{key:"onChange",value:function(t){var e=this,i=t.Carousel;this.timer&&clearTimeout(this.timer);var n=null===i.prevPage,o=t.getSlide(),a=new URL(document.URL).hash,s=!1;if(o.slug)s="#"+o.slug;else{var r=o.$trigger&&o.$trigger.dataset,l=t.option("slug")||r&&r.fancybox;l&&l.length&&"true"!==l&&(s="#"+l+(i.slides.length>1?"-"+(o.index+1):""))}n&&(this.origHash=a!==s?a:""),s&&a!==s&&(this.timer=setTimeout((function(){try{window.history[n?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+s),n&&(e.hasCreatedHistory=!0)}catch(t){}}),300))}},{key:"onClosing",value:function(){if(this.timer&&clearTimeout(this.timer),!0!==this.hasSilentClose)try{return void window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash||""))}catch(t){}}},{key:"attach",value:function(t){t.on(this.events)}},{key:"detach",value:function(t){t.off(this.events)}}],[{key:"startFromUrl",value:function(){var e=t.Fancybox;if(e&&!e.getInstance()&&!1!==e.defaults.Hash){var i=t.getParsedURL(),n=i.hash,o=i.slug,a=i.index;if(o){var s=document.querySelector('[data-slug="'.concat(n,'"]'));if(s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),!e.getInstance()){var r=document.querySelectorAll('[data-fancybox="'.concat(o,'"]'));r.length&&(null===a&&1===r.length?s=r[0]:a&&(s=r[a-1]),s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}}}}},{key:"onHashChange",value:function(){var e=t.getParsedURL(),i=e.slug,n=e.index,o=t.Fancybox,a=o&&o.getInstance();if(a&&a.plugins.Hash){if(i){var s=a.Carousel;if(i===a.option("slug"))return s.slideTo(n-1);var r,l=x(s.slides);try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c.slug&&c.slug===i)return s.slideTo(c.index)}}catch(t){l.e(t)}finally{l.f()}var h=a.getSlide(),d=h.$trigger&&h.$trigger.dataset;if(d&&d.fancybox===i)return s.slideTo(n-1)}a.plugins.Hash.hasSilentClose=!0,a.close()}t.startFromUrl()}},{key:"create",value:function(e){function i(){window.addEventListener("hashchange",t.onHashChange,!1),t.startFromUrl()}t.Fancybox=e,W&&window.requestAnimationFrame((function(){/complete|interactive|loaded/.test(document.readyState)?i():document.addEventListener("DOMContentLoaded",i)}))}},{key:"destroy",value:function(){window.removeEventListener("hashchange",t.onHashChange,!1)}},{key:"getParsedURL",value:function(){var t=window.location.hash.substr(1),e=t.split("-"),i=e.length>1&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||null;return{hash:t,slug:e.join("-"),index:i}}}]),t}(),Q={pageXOffset:0,pageYOffset:0,element:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement},activate:function(t){Q.pageXOffset=window.pageXOffset,Q.pageYOffset=window.pageYOffset,t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},deactivate:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},tt=function(){function t(e){o(this,t),this.fancybox=e,this.active=!1,this.handleVisibilityChange=this.handleVisibilityChange.bind(this)}return s(t,[{key:"isActive",value:function(){return this.active}},{key:"setTimer",value:function(){var t=this;if(this.active&&!this.timer){var e=this.fancybox.option("slideshow.delay",3e3);this.timer=setTimeout((function(){t.timer=null,t.fancybox.option("infinite")||t.fancybox.getSlide().index!==t.fancybox.Carousel.slides.length-1?t.fancybox.next():t.fancybox.jumpTo(0,{friction:0})}),e);var i=this.$progress;i||((i=document.createElement("div")).classList.add("fancybox__progress"),this.fancybox.$carousel.parentNode.insertBefore(i,this.fancybox.$carousel),this.$progress=i,i.offsetHeight),i.style.transitionDuration="".concat(e,"ms"),i.style.transform="scaleX(1)"}}},{key:"clearTimer",value:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&(this.$progress.style.transitionDuration="",this.$progress.style.transform="",this.$progress.offsetHeight)}},{key:"activate",value:function(){this.active||(this.active=!0,this.fancybox.$container.classList.add("has-slideshow"),"done"===this.fancybox.getSlide().state&&this.setTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange,!1))}},{key:"handleVisibilityChange",value:function(){this.deactivate()}},{key:"deactivate",value:function(){this.active=!1,this.clearTimer(),this.fancybox.$container.classList.remove("has-slideshow"),document.removeEventListener("visibilitychange",this.handleVisibilityChange,!1)}},{key:"toggle",value:function(){this.active?this.deactivate():this.fancybox.Carousel.slides.length>1&&this.activate()}}]),t}(),et={display:["counter","zoom","slideshow","fullscreen","thumbs","close"],autoEnable:!0,items:{counter:{position:"left",type:"div",class:"fancybox__counter",html:'<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',attr:{tabindex:-1}},prev:{type:"button",class:"fancybox__button--prev",label:"PREV",html:'<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',attr:{"data-fancybox-prev":""}},next:{type:"button",class:"fancybox__button--next",label:"NEXT",html:'<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',attr:{"data-fancybox-next":""}},fullscreen:{type:"button",class:"fancybox__button--fullscreen",label:"TOGGLE_FULLSCREEN",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',click:function(t){t.preventDefault(),Q.element()?Q.deactivate():Q.activate(this.fancybox.$container)}},slideshow:{type:"button",class:"fancybox__button--slideshow",label:"TOGGLE_SLIDESHOW",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',click:function(t){t.preventDefault(),this.Slideshow.toggle()}},zoom:{type:"button",class:"fancybox__button--zoom",label:"TOGGLE_ZOOM",html:'<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',click:function(t){t.preventDefault();var e=this.fancybox.getSlide().Panzoom;e&&e.toggleZoom()}},download:{type:"link",label:"DOWNLOAD",class:"fancybox__button--download",html:'<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',click:function(t){t.stopPropagation()}},thumbs:{type:"button",label:"TOGGLE_THUMBS",class:"fancybox__button--thumbs",html:'<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',click:function(t){t.stopPropagation();var e=this.fancybox.plugins.Thumbs;e&&e.toggle()}},close:{type:"button",label:"CLOSE",class:"fancybox__button--close",html:'<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',attr:{"data-fancybox-close":"",tabindex:0}}}},it=function(){function t(e){var i=this;o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var n=0,a=["onInit","onPrepare","onDone","onKeydown","onClosing","onChange","onSettle","onRefresh"];n<a.length;n++){var s=a[n];this[s]=this[s].bind(this)}this.events={init:this.onInit,prepare:this.onPrepare,done:this.onDone,keydown:this.onKeydown,closing:this.onClosing,"Carousel.change":this.onChange,"Carousel.settle":this.onSettle,"Carousel.Panzoom.touchStart":function(){return i.onRefresh()},"Image.startAnimation":function(t,e){return i.onRefresh(e)},"Image.afterUpdate":function(t,e){return i.onRefresh(e)}}}return s(t,[{key:"onInit",value:function(){if(this.fancybox.option("Toolbar.autoEnable")){var t,e=!1,i=x(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){if("image"===t.value.type){e=!0;break}}}catch(t){i.e(t)}finally{i.f()}if(!e)return void(this.state="disabled")}var n,o=x(this.fancybox.option("Toolbar.display"));try{for(o.s();!(n=o.n()).done;){var a=n.value;if("close"===(w(a)?a.id:a)){this.fancybox.options.closeButton=!1;break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"onPrepare",value:function(){var t=this.fancybox;if("init"===this.state&&(this.build(),this.update(),this.Slideshow=new tt(t),!t.Carousel.prevPage&&(t.option("slideshow.autoStart")&&this.Slideshow.activate(),t.option("fullscreen.autoStart")&&!Q.element())))try{Q.activate(t.$container)}catch(t){}}},{key:"onFsChange",value:function(){window.scrollTo(Q.pageXOffset,Q.pageYOffset)}},{key:"onSettle",value:function(){var t=this.fancybox,e=this.Slideshow;e&&e.isActive()&&(t.getSlide().index!==t.Carousel.slides.length-1||t.option("infinite")?"done"===t.getSlide().state&&e.setTimer():e.deactivate())}},{key:"onChange",value:function(){this.update(),this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer()}},{key:"onDone",value:function(t,e){var i=this.Slideshow;e.index===t.getSlide().index&&(this.update(),i&&i.isActive()&&(t.option("infinite")||e.index!==t.Carousel.slides.length-1?i.setTimer():i.deactivate()))}},{key:"onRefresh",value:function(t){t&&t.index!==this.fancybox.getSlide().index||(this.update(),!this.Slideshow||!this.Slideshow.isActive()||t&&"done"!==t.state||this.Slideshow.deactivate())}},{key:"onKeydown",value:function(t,e,i){" "===e&&this.Slideshow&&(this.Slideshow.toggle(),i.preventDefault())}},{key:"onClosing",value:function(){this.Slideshow&&this.Slideshow.deactivate(),document.removeEventListener("fullscreenchange",this.onFsChange)}},{key:"createElement",value:function(t){var e,i;("div"===t.type?e=document.createElement("div"):(e=document.createElement("link"===t.type?"a":"button")).classList.add("carousel__button"),e.innerHTML=t.html,e.setAttribute("tabindex",t.tabindex||0),t.class)&&(i=e.classList).add.apply(i,m(t.class.split(" ")));for(var n in t.attr)e.setAttribute(n,t.attr[n]);t.label&&e.setAttribute("title",this.fancybox.localize("{{".concat(t.label,"}}"))),t.click&&e.addEventListener("click",t.click.bind(this)),"prev"===t.id&&e.setAttribute("data-fancybox-prev",""),"next"===t.id&&e.setAttribute("data-fancybox-next","");var o=e.querySelector("svg");return o&&(o.setAttribute("role","img"),o.setAttribute("tabindex","-1"),o.setAttribute("xmlns","http://www.w3.org/2000/svg")),e}},{key:"build",value:function(){var t=this;this.cleanup();var e,i=this.fancybox.option("Toolbar.items"),n=[{position:"left",items:[]},{position:"center",items:[]},{position:"right",items:[]}],o=this.fancybox.plugins.Thumbs,a=x(this.fancybox.option("Toolbar.display"));try{var s=function(){var a=e.value,s=void 0,r=void 0;if(w(a)?(s=a.id,r=k({},i[s],a)):r=i[s=a],["counter","next","prev","slideshow"].includes(s)&&t.fancybox.items.length<2)return"continue";if("fullscreen"===s){if(!document.fullscreenEnabled||window.fullScreen)return"continue";document.addEventListener("fullscreenchange",t.onFsChange)}if("thumbs"===s&&(!o||"disabled"===o.state))return"continue";if(!r)return"continue";var l=r.position||"right",c=n.find((function(t){return t.position===l}));c&&c.items.push(r)};for(a.s();!(e=a.n()).done;)s()}catch(t){a.e(t)}finally{a.f()}var r=document.createElement("div");r.classList.add("fancybox__toolbar");for(var l=0,c=n;l<c.length;l++){var h=c[l];if(h.items.length){var d=document.createElement("div");d.classList.add("fancybox__toolbar__items"),d.classList.add("fancybox__toolbar__items--".concat(h.position));var u,f=x(h.items);try{for(f.s();!(u=f.n()).done;){var v=u.value;d.appendChild(this.createElement(v))}}catch(t){f.e(t)}finally{f.f()}r.appendChild(d)}}this.fancybox.$carousel.parentNode.insertBefore(r,this.fancybox.$carousel),this.$container=r}},{key:"update",value:function(){var t,e=this.fancybox.getSlide(),i=e.index,n=this.fancybox.items.length,o=e.downloadSrc||("image"!==e.type||e.error?null:e.src),a=x(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));try{for(a.s();!(t=a.n()).done;){var s=t.value;o?(s.removeAttribute("disabled"),s.removeAttribute("tabindex"),s.setAttribute("href",o),s.setAttribute("download",o),s.setAttribute("target","_blank")):(s.setAttribute("disabled",""),s.setAttribute("tabindex",-1),s.removeAttribute("href"),s.removeAttribute("download"))}}catch(t){a.e(t)}finally{a.f()}var r,l=e.Panzoom,c=l&&l.option("maxScale")>l.option("baseScale"),h=x(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));try{for(h.s();!(r=h.n()).done;){var d=r.value;c?d.removeAttribute("disabled"):d.setAttribute("disabled","")}}catch(t){h.e(t)}finally{h.f()}var u,f=x(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));try{for(f.s();!(u=f.n()).done;){u.value.innerHTML=e.index+1}}catch(t){f.e(t)}finally{f.f()}var v,p=x(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));try{for(p.s();!(v=p.n()).done;){v.value.innerHTML=n}}catch(t){p.e(t)}finally{p.f()}if(!this.fancybox.option("infinite")){var g,m=x(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));try{for(m.s();!(g=m.n()).done;){var y=g.value;0===i?y.setAttribute("disabled",""):y.removeAttribute("disabled")}}catch(t){m.e(t)}finally{m.f()}var b,w=x(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));try{for(w.s();!(b=w.n()).done;){var k=b.value;i===n-1?k.setAttribute("disabled",""):k.removeAttribute("disabled")}}catch(t){w.e(t)}finally{w.f()}}}},{key:"cleanup",value:function(){this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer(),this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();it.defaults=et;var nt={ScrollLock:U,Thumbs:Y,Html:G,Toolbar:it,Image:K,Hash:J},ot={startIndex:0,preload:1,infinite:!0,showClass:"fancybox-zoomInUp",hideClass:"fancybox-fadeOut",animated:!0,hideScrollbar:!0,parentEl:null,mainClass:null,autoFocus:!0,trapFocus:!0,placeFocusBack:!0,click:"close",closeButton:"inside",dragToClose:!0,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"next",ArrowDown:"prev",ArrowRight:"next",ArrowLeft:"prev"},template:{closeButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',spinner:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',main:null},l10n:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}},at=new Map,st=0,rt=function(t){l(i,t);var e=f(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,i),t=t.map((function(t){return t.width&&(t._width=t.width),t.height&&(t._height=t.height),t})),(n=e.call(this,k(!0,{},ot,a))).bindHandlers(),n.state="init",n.setItems(t),n.attachPlugins(i.Plugins),n.trigger("init"),!0===n.option("hideScrollbar")&&n.hideScrollbar(),n.initLayout(),n.initCarousel(),n.attachEvents(),at.set(n.id,d(n)),n.trigger("prepare"),n.state="ready",n.trigger("ready"),n.$container.setAttribute("aria-hidden","false"),n.option("trapFocus")&&n.focus(),n}return s(i,[{key:"option",value:function(t){for(var e,n=this.getSlide(),o=n?n[t]:void 0,a=arguments.length,s=new Array(a>1?a-1:0),r=1;r<a;r++)s[r-1]=arguments[r];if(void 0!==o){var l;if("function"==typeof o)o=(l=o).call.apply(l,[this,this].concat(s));return o}return(e=p(c(i.prototype),"option",this)).call.apply(e,[this,t].concat(s))}},{key:"bindHandlers",value:function(){for(var t=0,e=["onMousedown","onKeydown","onClick","onFocus","onCreateSlide","onSettle","onTouchMove","onTouchEnd","onTransform"];t<e.length;t++){var i=e[t];this[i]=this[i].bind(this)}}},{key:"attachEvents",value:function(){document.addEventListener("mousedown",this.onMousedown),document.addEventListener("keydown",this.onKeydown,!0),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),this.$container.addEventListener("click",this.onClick)}},{key:"detachEvents",value:function(){document.removeEventListener("mousedown",this.onMousedown),document.removeEventListener("keydown",this.onKeydown,!0),document.removeEventListener("focus",this.onFocus,!0),this.$container.removeEventListener("click",this.onClick)}},{key:"initLayout",value:function(){var t=this;this.$root=this.option("parentEl")||document.body;var e=this.option("template.main");e&&(this.$root.insertAdjacentHTML("beforeend",this.localize(e)),this.$container=this.$root.querySelector(".fancybox__container")),this.$container||(this.$container=document.createElement("div"),this.$root.appendChild(this.$container)),this.$container.onscroll=function(){return t.$container.scrollLeft=0,!1},Object.entries({class:"fancybox__container",role:"dialog",tabIndex:"-1","aria-modal":"true","aria-hidden":"true","aria-label":this.localize("{{MODAL}}")}).forEach((function(e){var i;return(i=t.$container).setAttribute.apply(i,m(e))})),this.option("animated")&&this.$container.classList.add("is-animated"),this.$backdrop=this.$container.querySelector(".fancybox__backdrop"),this.$backdrop||(this.$backdrop=document.createElement("div"),this.$backdrop.classList.add("fancybox__backdrop"),this.$container.appendChild(this.$backdrop)),this.$carousel=this.$container.querySelector(".fancybox__carousel"),this.$carousel||(this.$carousel=document.createElement("div"),this.$carousel.classList.add("fancybox__carousel"),this.$container.appendChild(this.$carousel)),this.$container.Fancybox=this,this.id=this.$container.getAttribute("id"),this.id||(this.id=this.options.id||++st,this.$container.setAttribute("id","fancybox-"+this.id));var i,n=this.option("mainClass");n&&(i=this.$container.classList).add.apply(i,m(n.split(" ")));return document.documentElement.classList.add("with-fancybox"),this.trigger("initLayout"),this}},{key:"setItems",value:function(t){var e,i=[],n=x(t);try{for(n.s();!(e=n.n()).done;){var o=e.value,a=o.$trigger;if(a){var s=a.dataset||{};o.src=s.src||a.getAttribute("href")||o.src,o.type=s.type||o.type,!o.src&&a instanceof HTMLImageElement&&(o.src=a.currentSrc||o.$trigger.src)}var r=o.$thumb;if(!r){var l=o.$trigger&&o.$trigger.origTarget;l&&(r=l instanceof HTMLImageElement?l:l.querySelector("img:not([aria-hidden])")),!r&&o.$trigger&&(r=o.$trigger instanceof HTMLImageElement?o.$trigger:o.$trigger.querySelector("img:not([aria-hidden])"))}o.$thumb=r||null;var c=o.thumb;!c&&r&&!(c=r.currentSrc||r.src)&&r.dataset&&(c=r.dataset.lazySrc||r.dataset.src),c||"image"!==o.type||(c=o.src),o.thumb=c||null,o.caption=o.caption||"",i.push(o)}}catch(t){n.e(t)}finally{n.f()}this.items=i}},{key:"initCarousel",value:function(){var t=this;return this.Carousel=new H(this.$carousel,k(!0,{},{prefix:"",classNames:{viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"},textSelection:!0,preload:this.option("preload"),friction:.88,slides:this.items,initialPage:this.options.startIndex,slidesPerPage:1,infiniteX:this.option("infinite"),infiniteY:!0,l10n:this.option("l10n"),Dots:!1,Navigation:{classNames:{main:"fancybox__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}},Panzoom:{textSelection:!0,panOnlyZoomed:function(){return t.Carousel&&t.Carousel.pages&&t.Carousel.pages.length<2&&!t.option("dragToClose")},lockAxis:function(){if(t.Carousel){var e="x";return t.option("dragToClose")&&(e+="y"),e}}},on:{"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Carousel.".concat(e)].concat(n))},init:function(e){return t.Carousel=e},createSlide:this.onCreateSlide,settle:this.onSettle}},this.option("Carousel"))),this.option("dragToClose")&&this.Carousel.Panzoom.on({touchMove:this.onTouchMove,afterTransform:this.onTransform,touchEnd:this.onTouchEnd}),this.trigger("initCarousel"),this}},{key:"onCreateSlide",value:function(t,e){var i=e.caption||"";if("function"==typeof this.options.caption&&(i=this.options.caption.call(this,this,this.Carousel,e)),"string"==typeof i&&i.length){var n=document.createElement("div"),o="fancybox__caption_".concat(this.id,"_").concat(e.index);n.className="fancybox__caption",n.innerHTML=i,n.setAttribute("id",o),e.$caption=e.$el.appendChild(n),e.$el.classList.add("has-caption"),e.$el.setAttribute("aria-labelledby",o)}}},{key:"onSettle",value:function(){this.option("autoFocus")&&this.focus()}},{key:"onFocus",value:function(t){this.isTopmost()&&this.focus(t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented){var e=t.composedPath()[0];if(e.matches("[data-fancybox-close]"))return t.preventDefault(),void i.close(!1,t);if(e.matches("[data-fancybox-next]"))return t.preventDefault(),void i.next();if(e.matches("[data-fancybox-prev]"))return t.preventDefault(),void i.prev();var n=document.activeElement;if(n){if(n.closest("[contenteditable]"))return;e.matches(X)||n.blur()}if(!e.closest(".fancybox__content"))if(!getSelection().toString().length)if(!1!==this.trigger("click",t))switch(this.option("click")){case"close":this.close();break;case"next":this.next()}}}},{key:"onTouchMove",value:function(){var t=this.getSlide().Panzoom;return!t||1===t.content.scale}},{key:"onTouchEnd",value:function(t){var e=t.dragOffset.y;Math.abs(e)>=150||Math.abs(e)>=35&&t.dragOffset.time<350?(this.option("hideClass")&&(this.getSlide().hideClass="fancybox-throwOut".concat(t.content.y<0?"Up":"Down")),this.close()):"y"===t.lockAxis&&t.panTo({y:0})}},{key:"onTransform",value:function(t){if(this.$backdrop){var e=Math.abs(t.content.y),i=e<1?"":Math.max(.33,Math.min(1,1-e/t.content.fitHeight*1.5));this.$container.style.setProperty("--fancybox-ts",i?"0s":""),this.$container.style.setProperty("--fancybox-opacity",i)}}},{key:"onMousedown",value:function(){"ready"===this.state&&document.body.classList.add("is-using-mouse")}},{key:"onKeydown",value:function(t){if(this.isTopmost()){document.body.classList.remove("is-using-mouse");var e=t.key,i=this.option("keyboard");if(i&&!t.ctrlKey&&!t.altKey&&!t.shiftKey){var n=t.composedPath()[0],o=document.activeElement&&document.activeElement.classList,a=o&&o.contains("carousel__button");if("Escape"!==e&&!a)if(t.target.isContentEditable||-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.nodeName))return;if(!1!==this.trigger("keydown",e,t)){var s=i[e];"function"==typeof this[s]&&this[s]()}}}}},{key:"getSlide",value:function(){var t=this.Carousel;if(!t)return null;var e=null===t.page?t.option("initialPage"):t.page,i=t.pages||[];return i.length&&i[e]?i[e].slides[0]:null}},{key:"focus",value:function(t){if(!(i.ignoreFocusChange||["init","closing","customClosing","destroy"].indexOf(this.state)>-1)){var e=this.$container,n=this.getSlide(),o="done"===n.state?n.$el:null;if(!o||!o.contains(document.activeElement)){t&&t.preventDefault(),i.ignoreFocusChange=!0;for(var a,s=[],r=0,l=Array.from(e.querySelectorAll(X));r<l.length;r++){var c=l[r],h=c.offsetParent,d=o&&o.contains(c),u=!this.Carousel.$viewport.contains(c);h&&(d||u)?(s.push(c),void 0!==c.dataset.origTabindex&&(c.tabIndex=c.dataset.origTabindex,c.removeAttribute("data-orig-tabindex")),(c.hasAttribute("autoFocus")||!a&&d&&!c.classList.contains("carousel__button"))&&(a=c)):(c.dataset.origTabindex=void 0===c.dataset.origTabindex?c.getAttribute("tabindex"):c.dataset.origTabindex,c.tabIndex=-1)}t?s.indexOf(t.target)>-1?this.lastFocus=t.target:this.lastFocus===e?q(s[s.length-1]):q(e):this.option("autoFocus")&&a?q(a):s.indexOf(document.activeElement)<0&&q(e),this.lastFocus=document.activeElement,i.ignoreFocusChange=!1}}}},{key:"hideScrollbar",value:function(){if(W){var t=window.innerWidth-document.documentElement.getBoundingClientRect().width,e="fancybox-style-noscroll",i=document.getElementById(e);i||t>0&&((i=document.createElement("style")).id=e,i.type="text/css",i.innerHTML=".compensate-for-scrollbar {padding-right: ".concat(t,"px;}"),document.getElementsByTagName("head")[0].appendChild(i),document.body.classList.add("compensate-for-scrollbar"))}}},{key:"revealScrollbar",value:function(){document.body.classList.remove("compensate-for-scrollbar");var t=document.getElementById("fancybox-style-noscroll");t&&t.remove()}},{key:"clearContent",value:function(t){this.Carousel.trigger("removeSlide",t),t.$content&&(t.$content.remove(),t.$content=null),t.$closeButton&&(t.$closeButton.remove(),t.$closeButton=null),t._className&&t.$el.classList.remove(t._className)}},{key:"setContent",value:function(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.$el;if(e instanceof HTMLElement)["img","iframe","video","audio"].indexOf(e.nodeName.toLowerCase())>-1?(i=document.createElement("div")).appendChild(e):i=e;else{var a=document.createRange().createContextualFragment(e);(i=document.createElement("div")).appendChild(a)}if(t.filter&&!t.error&&(i=i.querySelector(t.filter)),i instanceof Element)return t._className="has-".concat(n.suffix||t.type||"unknown"),o.classList.add(t._className),i.classList.add("fancybox__content"),"none"!==i.style.display&&"none"!==getComputedStyle(i).getPropertyValue("display")||(i.style.display=t.display||this.option("defaultDisplay")||"flex"),t.id&&i.setAttribute("id",t.id),t.$content=i,o.prepend(i),this.manageCloseButton(t),"loading"!==t.state&&this.revealContent(t),i;this.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"manageCloseButton",value:function(t){var e=this,i=void 0===t.closeButton?this.option("closeButton"):t.closeButton;if(i&&("top"!==i||!this.$closeButton)){var n=document.createElement("button");n.classList.add("carousel__button","is-close"),n.setAttribute("title",this.options.l10n.CLOSE),n.innerHTML=this.option("template.closeButton"),n.addEventListener("click",(function(t){return e.close(t)})),"inside"===i?(t.$closeButton&&t.$closeButton.remove(),t.$closeButton=t.$content.appendChild(n)):this.$closeButton=this.$container.insertBefore(n,this.$container.firstChild)}}},{key:"revealContent",value:function(t){var e=this;this.trigger("reveal",t),t.$content.style.visibility="";var i=!1;t.error||"loading"===t.state||null!==this.Carousel.prevPage||t.index!==this.options.startIndex||(i=void 0===t.showClass?this.option("showClass"):t.showClass),i?(t.state="animating",this.animateCSS(t.$content,i,(function(){e.done(t)}))):this.done(t)}},{key:"animateCSS",value:function(t,e,i){if(t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!0,cancelable:!0})),t&&e){t.addEventListener("animationend",(function n(o){o.currentTarget===this&&(t.removeEventListener("animationend",n),i&&i(),t.classList.remove(e))})),t.classList.add(e)}else"function"==typeof i&&i()}},{key:"done",value:function(t){t.state="done",this.trigger("done",t);var e=this.getSlide();e&&t.index===e.index&&this.option("autoFocus")&&this.focus()}},{key:"setError",value:function(t,e){t.error=e,this.hideLoading(t),this.clearContent(t);var i=document.createElement("div");i.classList.add("fancybox-error"),i.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,i,{suffix:"error"})}},{key:"showLoading",value:function(t){var e=this;t.state="loading",t.$el.classList.add("is-loading");var i=t.$el.querySelector(".fancybox__spinner");i||((i=document.createElement("div")).classList.add("fancybox__spinner"),i.innerHTML=this.option("template.spinner"),i.addEventListener("click",(function(){e.Carousel.Panzoom.velocity||e.close()})),t.$el.prepend(i))}},{key:"hideLoading",value:function(t){var e=t.$el&&t.$el.querySelector(".fancybox__spinner");e&&(e.remove(),t.$el.classList.remove("is-loading")),"loading"===t.state&&(this.trigger("load",t),t.state="ready")}},{key:"next",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slideNext()}},{key:"prev",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slidePrev()}},{key:"jumpTo",value:function(){var t;this.Carousel&&(t=this.Carousel).slideTo.apply(t,arguments)}},{key:"isClosing",value:function(){return["closing","customClosing","destroy"].includes(this.state)}},{key:"isTopmost",value:function(){return i.getInstance().id==this.id}},{key:"close",value:function(t){var e=this;if(t&&t.preventDefault(),!this.isClosing()&&!1!==this.trigger("shouldClose",t)&&(this.state="closing",this.Carousel.Panzoom.destroy(),this.detachEvents(),this.trigger("closing",t),"destroy"!==this.state)){this.$container.setAttribute("aria-hidden","true"),this.$container.classList.add("is-closing");var i=this.getSlide();if(this.Carousel.slides.forEach((function(t){t.$content&&t.index!==i.index&&e.Carousel.trigger("removeSlide",t)})),"closing"===this.state){var n=void 0===i.hideClass?this.option("hideClass"):i.hideClass;this.animateCSS(i.$content,n,(function(){e.destroy()}),!0)}}}},{key:"destroy",value:function(){if("destroy"!==this.state){this.state="destroy",this.trigger("destroy");var t=this.option("placeFocusBack")?this.option("triggerTarget",this.getSlide().$trigger):null;this.Carousel.destroy(),this.detachPlugins(),this.Carousel=null,this.options={},this.events={},this.$container.remove(),this.$container=this.$backdrop=this.$carousel=null,t&&q(t),at.delete(this.id);var e=i.getInstance();e?e.focus():(document.documentElement.classList.remove("with-fancybox"),document.body.classList.remove("is-using-mouse"),this.revealScrollbar())}}}],[{key:"show",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new i(t,e)}},{key:"fromEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.defaultPrevented&&!(t.button&&0!==t.button||t.ctrlKey||t.metaKey||t.shiftKey)){var n,o,a,s=t.composedPath()[0],r=s;if((r.matches("[data-fancybox-trigger]")||(r=r.closest("[data-fancybox-trigger]")))&&(e.triggerTarget=r,n=r&&r.dataset&&r.dataset.fancyboxTrigger),n){var l=document.querySelectorAll('[data-fancybox="'.concat(n,'"]')),c=parseInt(r.dataset.fancyboxIndex,10)||0;r=l.length?l[c]:r}Array.from(i.openers.keys()).reverse().some((function(e){a=r||s;var i=!1;try{a instanceof Element&&("string"==typeof e||e instanceof String)&&(i=a.matches(e)||(a=a.closest(e)))}catch(t){}return!!i&&(t.preventDefault(),o=e,!0)}));var h=!1;if(o){e.event=t,e.target=a,a.origTarget=s,h=i.fromOpener(o,e);var d=i.getInstance();d&&"ready"===d.state&&t.detail&&document.body.classList.add("is-using-mouse")}return h}}},{key:"fromOpener",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(t){for(var e=["false","0","no","null","undefined"],i=["true","1","yes"],n=Object.assign({},t.dataset),o={},a=0,s=Object.entries(n);a<s.length;a++){var r=g(s[a],2),l=r[0],c=r[1];if("fancybox"!==l)if("width"===l||"height"===l)o["_".concat(l)]=c;else if("string"==typeof c||c instanceof String)if(e.indexOf(c)>-1)o[l]=!1;else if(i.indexOf(o[l])>-1)o[l]=!0;else try{o[l]=JSON.parse(c)}catch(t){o[l]=c}else o[l]=c}return t instanceof Element&&(o.$trigger=t),o},o=[],a=e.startIndex||0,s=e.target||null,r=void 0!==(e=k({},e,i.openers.get(t))).groupAll&&e.groupAll,l=void 0===e.groupAttr?"data-fancybox":e.groupAttr,c=l&&s?s.getAttribute("".concat(l)):"";if(!s||c||r){var h=e.root||(s?s.getRootNode():document.body);o=[].slice.call(h.querySelectorAll(t))}if(s&&!r&&(o=c?o.filter((function(t){return t.getAttribute("".concat(l))===c})):[s]),!o.length)return!1;var d=i.getInstance();return!(d&&o.indexOf(d.options.$trigger)>-1)&&(a=s?o.indexOf(s):a,new i(o=o.map(n),k({},e,{startIndex:a,$trigger:s})))}},{key:"bind",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(){document.body.addEventListener("click",i.fromEvent,!1)}W&&(i.openers.size||(/complete|interactive|loaded/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n)),i.openers.set(t,e))}},{key:"unbind",value:function(t){i.openers.delete(t),i.openers.size||i.destroy()}},{key:"destroy",value:function(){for(var t;t=i.getInstance();)t.destroy();i.openers=new Map,document.body.removeEventListener("click",i.fromEvent,!1)}},{key:"getInstance",value:function(t){return t?at.get(t):Array.from(at.values()).reverse().find((function(t){return!t.isClosing()&&t}))||null}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1?arguments[1]:void 0;if(t){var n,o=x(at.values());try{for(o.s();!(n=o.n()).done;){var a=n.value;a.close(e)}}catch(t){o.e(t)}finally{o.f()}}else{var s=i.getInstance();s&&s.close(e)}}},{key:"next",value:function(){var t=i.getInstance();t&&t.next()}},{key:"prev",value:function(){var t=i.getInstance();t&&t.prev()}}]),i}(O);rt.version="4.0.31",rt.defaults=ot,rt.openers=new Map,rt.Plugins=nt,rt.bind("[data-fancybox]");for(var lt=0,ct=Object.entries(rt.Plugins||{});lt<ct.length;lt++){var ht=g(ct[lt],2);ht[0];var dt=ht[1];"function"==typeof dt.create&&dt.create(rt)}t.Carousel=H,t.Fancybox=rt,t.Panzoom=M}));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/local/templates/kadflo/assets/libraries/select2/select2.min.js?174428259673171";s:6:"source";s:63:"/local/templates/kadflo/assets/libraries/select2/select2.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(t){var e,n,s,p,r,o,h,f,g,m,y,v,i,a,_,s=(t&&t.fn&&t.fn.select2&&t.fn.select2.amd&&(u=t.fn.select2.amd),u&&u.requirejs||(u?n=u:u={},g={},m={},y={},v={},i=Object.prototype.hasOwnProperty,a=[].slice,_=/\.js$/,h=function(e,t){var n,s,i=c(e),r=i[0],t=t[1];return e=i[1],r&&(n=x(r=l(r,t))),r?e=n&&n.normalize?n.normalize(e,(s=t,function(e){return l(e,s)})):l(e,t):(r=(i=c(e=l(e,t)))[0],e=i[1],r&&(n=x(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},f={require:function(e){return w(e)},exports:function(e){var t=g[e];return void 0!==t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:(t=e,function(){return y&&y.config&&y.config[t]||{}})};var t}},r=function(e,t,n,s){var i,r,o,a,l,c=[],u=typeof n,d=A(s=s||e);if("undefined"==u||"function"==u){for(t=!t.length&&n.length?["require","exports","module"]:t,a=0;a<t.length;a+=1)if("require"===(r=(o=h(t[a],d)).f))c[a]=f.require(e);else if("exports"===r)c[a]=f.exports(e),l=!0;else if("module"===r)i=c[a]=f.module(e);else if(b(g,r)||b(m,r)||b(v,r))c[a]=x(r);else{if(!o.p)throw new Error(e+" missing "+r);o.p.load(o.n,w(s,!0),function(t){return function(e){g[t]=e}}(r),{}),c[a]=g[r]}u=n?n.apply(g[e],c):void 0,e&&(i&&i.exports!==p&&i.exports!==g[e]?g[e]=i.exports:u===p&&l||(g[e]=u))}else e&&(g[e]=n)},e=n=o=function(e,t,n,s,i){if("string"==typeof e)return f[e]?f[e](t):x(h(e,A(t)).f);if(!e.splice){if((y=e).deps&&o(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=p}return t=t||function(){},"function"==typeof n&&(n=s,s=i),s?r(p,e,t,n):setTimeout(function(){r(p,e,t,n)},4),o},o.config=function(e){return o(e)},e._defined=g,(s=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(g,e)||b(m,e)||(m[e]=[e,t,n])}).amd={jQuery:!0},u.requirejs=e,u.require=n,u.define=s),u.define("almond",function(){}),u.define("jquery",[],function(){var e=t||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),u.define("select2/utils",["jquery"],function(r){var s={};function c(e){var t,n=e.prototype,s=[];for(t in n)"function"==typeof n[t]&&"constructor"!==t&&s.push(t);return s}s.Extend=function(e,t){var n,s={}.hasOwnProperty;function i(){this.constructor=e}for(n in t)s.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},s.Decorate=function(s,i){var e=c(i),t=c(s);function r(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=s.prototype.constructor;0<t&&(e.call(arguments,s.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=s.displayName,r.prototype=new function(){this.constructor=r};for(var n=0;n<t.length;n++){var o=t[n];r.prototype[o]=s.prototype[o]}for(var a=0;a<e.length;a++){var l=e[a];r.prototype[l]=function(e){var t=function(){};e in r.prototype&&(t=r.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}(l)}return r};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,s=e.length;n<s;n++)e[n].apply(this,t)},s.Observable=e,s.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},s.bind=function(e,t){return function(){e.apply(t,arguments)}},s._convertData=function(e){for(var t in e){var n=t.split("-"),s=e;if(1!==n.length){for(var i=0;i<n.length;i++){var r=n[i];(r=r.substring(0,1).toLowerCase()+r.substring(1))in s||(s[r]={}),i==n.length-1&&(s[r]=e[t]),s=s[r]}delete e[t]}}return e},s.hasScroll=function(e,t){var n=r(t),s=t.style.overflowX,i=t.style.overflowY;return(s!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===s||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},s.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},s.__cache={};var n=0;return s.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null!=t||(t=e.id?"select2-data-"+e.id:"select2-data-"+(++n).toString()+"-"+s.generateChars(4),e.setAttribute("data-select2-id",t)),t},s.StoreData=function(e,t,n){e=s.GetUniqueElementId(e);s.__cache[e]||(s.__cache[e]={}),s.__cache[e][t]=n},s.GetData=function(e,t){var n=s.GetUniqueElementId(e);return t?s.__cache[n]&&null!=s.__cache[n][t]?s.__cache[n][t]:r(e).data(t):s.__cache[n]},s.RemoveData=function(e){var t=s.GetUniqueElementId(e);null!=s.__cache[t]&&delete s.__cache[t],e.removeAttribute("data-select2-id")},s.copyNonInternalCssClasses=function(e,t){var n=(n=e.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0===e.indexOf("select2-")}),t=(t=t.getAttribute("class").trim().split(/\s+/)).filter(function(e){return 0!==e.indexOf("select2-")}),t=n.concat(t);e.setAttribute("class",t.join(" "))},s}),u.define("select2/results",["jquery","./utils"],function(d,p){function s(e,t,n){this.$element=e,this.data=n,this.options=t,s.__super__.constructor.call(this)}return p.Extend(s,p.Observable),s.prototype.render=function(){var e=d('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},s.prototype.clear=function(){this.$results.empty()},s.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),s=this.options.get("translations").get(e.message);n.append(t(s(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},s.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},s.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var s=e.results[n],s=this.option(s);t.push(s)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},s.prototype.position=function(e,t){t.find(".select2-results").append(e)},s.prototype.sort=function(e){return this.options.get("sorter")(e)},s.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option--selectable"),t=e.filter(".select2-results__option--selected");(0<t.length?t:e).first().trigger("mouseenter"),this.ensureHighlightVisible()},s.prototype.setClasses=function(){var t=this;this.data.current(function(e){var s=e.map(function(e){return e.id.toString()});t.$results.find(".select2-results__option--selectable").each(function(){var e=d(this),t=p.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<s.indexOf(n)?(this.classList.add("select2-results__option--selected"),e.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),e.attr("aria-selected","false"))})})},s.prototype.showLoading=function(e){this.hideLoading();e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},e=this.option(e);e.className+=" loading-results",this.$results.prepend(e)},s.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},s.prototype.option=function(e){var t=document.createElement("li");t.classList.add("select2-results__option"),t.classList.add("select2-results__option--selectable");var n,s={role:"option"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(n in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(s["aria-disabled"]="true",t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--disabled")),null==e.id&&t.classList.remove("select2-results__option--selectable"),null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(s.role="group",s["aria-label"]=e.text,t.classList.remove("select2-results__option--selectable"),t.classList.add("select2-results__option--group")),s){var r=s[n];t.setAttribute(n,r)}if(e.children){var o=d(t),a=document.createElement("strong");a.className="select2-results__group",this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],u=this.option(u);l.push(u)}i=d("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});i.append(l),o.append(a),o.append(i)}else this.template(e,t);return p.StoreData(t,"data",e),t},s.prototype.bind=function(t,e){var i=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){i.clear(),i.append(e.data),t.isOpen()&&(i.setClasses(),i.highlightFirstItem())}),t.on("results:append",function(e){i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("query",function(e){i.hideMessages(),i.showLoading(e)}),t.on("select",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(i.setClasses(),i.options.get("scrollAfterSelect")&&i.highlightFirstItem())}),t.on("open",function(){i.$results.attr("aria-expanded","true"),i.$results.attr("aria-hidden","false"),i.setClasses(),i.ensureHighlightVisible()}),t.on("close",function(){i.$results.attr("aria-expanded","false"),i.$results.attr("aria-hidden","true"),i.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=i.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e,t=i.getHighlightedResults();0!==t.length&&(e=p.GetData(t[0],"data"),t.hasClass("select2-results__option--selected")?i.trigger("close",{}):i.trigger("select",{data:e}))}),t.on("results:previous",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t);s<=0||(e=s-1,0===t.length&&(e=0),(s=n.eq(e)).trigger("mouseenter"),t=i.$results.offset().top,n=s.offset().top,s=i.$results.scrollTop()+(n-t),0===e?i.$results.scrollTop(0):n-t<0&&i.$results.scrollTop(s))}),t.on("results:next",function(){var e,t=i.getHighlightedResults(),n=i.$results.find(".select2-results__option--selectable"),s=n.index(t)+1;s>=n.length||((e=n.eq(s)).trigger("mouseenter"),t=i.$results.offset().top+i.$results.outerHeight(!1),n=e.offset().top+e.outerHeight(!1),e=i.$results.scrollTop()+n-t,0===s?i.$results.scrollTop(0):t<n&&i.$results.scrollTop(e))}),t.on("results:focus",function(e){e.element[0].classList.add("select2-results__option--highlighted"),e.element[0].setAttribute("aria-selected","true")}),t.on("results:message",function(e){i.displayMessage(e)}),d.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=i.$results.scrollTop(),n=i.$results.get(0).scrollHeight-t+e.deltaY,t=0<e.deltaY&&t-e.deltaY<=0,n=e.deltaY<0&&n<=i.$results.height();t?(i.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):n&&(i.$results.scrollTop(i.$results.get(0).scrollHeight-i.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(e){var t=d(this),n=p.GetData(this,"data");t.hasClass("select2-results__option--selected")?i.options.get("multiple")?i.trigger("unselect",{originalEvent:e,data:n}):i.trigger("close",{}):i.trigger("select",{originalEvent:e,data:n})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(e){var t=p.GetData(this,"data");i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),i.trigger("results:focus",{data:t,element:d(this)})})},s.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},s.prototype.destroy=function(){this.$results.remove()},s.prototype.ensureHighlightVisible=function(){var e,t,n,s,i=this.getHighlightedResults();0!==i.length&&(e=this.$results.find(".select2-results__option--selectable").index(i),s=this.$results.offset().top,t=i.offset().top,n=this.$results.scrollTop()+(t-s),s=t-s,n-=2*i.outerHeight(!1),e<=2?this.$results.scrollTop(0):(s>this.$results.outerHeight()||s<0)&&this.$results.scrollTop(n))},s.prototype.template=function(e,t){var n=this.options.get("templateResult"),s=this.options.get("escapeMarkup"),e=n(e,t);null==e?t.style.display="none":"string"==typeof e?t.innerHTML=s(e):d(t).append(e)},s}),u.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),u.define("select2/selection/base",["jquery","../utils","../keys"],function(n,s,i){function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this)}return s.Extend(r,s.Observable),r.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=s.GetData(this.$element[0],"old-tabindex")?this._tabindex=s.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},r.prototype.bind=function(e,t){var n=this,s=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",s),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},r.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},r.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&s.GetData(this,"element").select2("close")})})},r.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},r.prototype.position=function(e,t){t.find(".selection").append(e)},r.prototype.destroy=function(){this._detachCloseHandler(this.container)},r.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},r.prototype.isEnabled=function(){return!this.isDisabled()},r.prototype.isDisabled=function(){return this.options.get("disabled")},r}),u.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,s){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e[0].classList.add("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var s=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",s),this.$selection.attr("aria-controls",s),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){var t,n;0!==e.length?(n=e[0],t=this.$selection.find(".select2-selection__rendered"),e=this.display(n,t),t.empty().append(e),(n=n.title||n.text)?t.attr("title",n):t.removeAttr("title")):this.clear()},i}),u.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,c){function r(e,t){r.__super__.constructor.apply(this,arguments)}return c.Extend(r,e),r.prototype.render=function(){var e=r.__super__.render.call(this);return e[0].classList.add("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},r.prototype.bind=function(e,t){var n=this;r.__super__.bind.apply(this,arguments);var s=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s),this.$selection.on("click",function(e){n.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){var t;n.isDisabled()||(t=i(this).parent(),t=c.GetData(t[0],"data"),n.trigger("unselect",{originalEvent:e,data:t}))}),this.$selection.on("keydown",".select2-selection__choice__remove",function(e){n.isDisabled()||e.stopPropagation()})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},r.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",s=0;s<e.length;s++){var i=e[s],r=this.selectionContainer(),o=this.display(i,r),a=n+c.generateChars(4)+"-";i.id?a+=i.id:a+=c.generateChars(4),r.find(".select2-selection__choice__display").append(o).attr("id",a);var l=i.title||i.text;l&&r.attr("title",l);o=this.options.get("translations").get("removeItem"),l=r.find(".select2-selection__choice__remove");l.attr("title",o()),l.attr("aria-label",o()),l.attr("aria-describedby",a),c.StoreData(r[0],"data",i),t.push(r)}this.$selection.find(".select2-selection__rendered").append(t)}},r}),u.define("select2/selection/placeholder",[],function(){function e(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();n.html(this.display(t)),n[0].classList.add("select2-selection__placeholder"),n[0].classList.remove("select2-selection__choice");t=t.title||t.text||n.text();return this.$selection.find(".select2-selection__rendered").attr("title",t),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();t=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(t)},e}),u.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,s,a){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){s._handleClear(e)}),t.on("keypress",function(e){s._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var s=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var r={data:s};if(this.trigger("clear",r),r.prevented)this.$element.val(i);else{for(var o=0;o<s.length;o++)if(r={data:s[o]},this.trigger("unselect",r),r.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=s.DELETE&&t.which!=s.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){var n,s;e.call(this,t),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),0<this.$selection.find(".select2-selection__placeholder").length||0===t.length||(n=this.$selection.find(".select2-selection__rendered").attr("id"),s=this.options.get("translations").get("removeAllItems"),(e=i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title",s()),e.attr("aria-label",s()),e.attr("aria-describedby",n),a.StoreData(e[0],"data",t),this.$selection.prepend(e),this.$selection[0].classList.add("select2-selection--clearable"))},e}),u.define("select2/selection/search",["jquery","../utils","../keys"],function(s,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=this.options.get("translations").get("search"),n=s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=n,this.$search=n.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",t());e=e.call(this);return this._transferTabIndex(),e.append(this.$searchContainer),e},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results",r=t.id+"-container";e.call(this,t,n),s.$search.attr("aria-describedby",r),t.on("open",function(){s.$search.attr("aria-controls",i),s.$search.trigger("focus")}),t.on("close",function(){s.$search.val(""),s.resizeSearch(),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.trigger("focus")}),t.on("enable",function(){s.$search.prop("disabled",!1),s._transferTabIndex()}),t.on("disable",function(){s.$search.prop("disabled",!0)}),t.on("focus",function(e){s.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){s.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){s._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){var t;e.stopPropagation(),s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented(),e.which!==l.BACKSPACE||""!==s.$search.val()||0<(t=s.$selection.find(".select2-selection__choice").last()).length&&(t=a.GetData(t[0],"data"),s.searchRemoveChoice(t),e.preventDefault())}),this.$selection.on("click",".select2-search--inline",function(e){s.$search.val()&&e.stopPropagation()});var t=document.documentMode,o=t&&t<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){o?s.$selection.off("input.search input.searchcheck"):s.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){var t;o&&"input"===e.type?s.$selection.off("input.search input.searchcheck"):(t=e.which)!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&s.handleSearch(e)})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){var e;this.resizeSearch(),this._keyUpPrevented||(e=this.$search.val(),this.trigger("query",{term:e})),this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="100%";""===this.$search.attr("placeholder")&&(e=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",e)},e}),u.define("select2/selection/selectionCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("selectionCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/selection/eventRelay",["jquery"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var s=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],r=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){var n;-1!==i.indexOf(e)&&(t=t||{},n=o.Event("select2:"+e,{params:t}),s.$element.trigger(n),-1!==r.indexOf(e)&&(t.prevented=n.isDefaultPrevented()))})},e}),u.define("select2/translation",["jquery","require"],function(t,n){function s(e){this.dict=e||{}}return s.prototype.all=function(){return this.dict},s.prototype.get=function(e){return this.dict[e]},s.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},s._cache={},s.loadPath=function(e){var t;return e in s._cache||(t=n(e),s._cache[e]=t),new s(s._cache[e])},s}),u.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),u.define("select2/data/base",["../utils"],function(n){function s(e,t){s.__super__.constructor.call(this)}return n.Extend(s,n.Observable),s.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},s.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},s.prototype.bind=function(e,t){},s.prototype.destroy=function(){},s.prototype.generateResultId=function(e,t){e=e.id+"-result-";return e+=n.generateChars(4),null!=t.id?e+="-"+t.id.toString():e+="-"+n.generateChars(4),e},s}),u.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var t=this;e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(e){return t.item(l(e))}))},n.prototype.select=function(i){var e,r=this;if(i.selected=!0,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!0,void this.$element.trigger("input").trigger("change");this.$element.prop("multiple")?this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var s=i[n].id;-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")}):(e=i.id,this.$element.val(e),this.$element.trigger("input").trigger("change"))},n.prototype.unselect=function(i){var r=this;if(this.$element.prop("multiple")){if(i.selected=!1,null!=i.element&&"option"===i.element.tagName.toLowerCase())return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var s=e[n].id;s!==i.id&&-1===t.indexOf(s)&&t.push(s)}r.$element.val(t),r.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(t,e){var n=[],s=this;this.$element.children().each(function(){var e;"option"!==this.tagName.toLowerCase()&&"optgroup"!==this.tagName.toLowerCase()||(e=l(this),e=s.item(e),null!==(e=s.matches(t,e))&&n.push(e))}),e({results:n})},n.prototype.addOptions=function(e){this.$element.append(e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);e=this._normalizeItem(e);return e.element=t,a.StoreData(t,"data",e),l(t)},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;var n=e[0];if("option"===n.tagName.toLowerCase())t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if("optgroup"===n.tagName.toLowerCase()){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var s=e.children("option"),i=[],r=0;r<s.length;r++){var o=l(s[r]),o=this.item(o);i.push(o)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),u.define("select2/data/array",["./select","../utils","jquery"],function(e,t,c){function s(e,t){this._dataToConvert=t.get("data")||[],s.__super__.constructor.call(this,e,t)}return t.Extend(s,e),s.prototype.bind=function(e,t){s.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},s.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),s.__super__.select.call(this,n)},s.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),s=n.map(function(){return t.item(c(this)).id}).get(),i=[];for(var r=0;r<e.length;r++){var o,a,l=this._normalizeItem(e[r]);0<=s.indexOf(l.id)?(o=n.filter(function(e){return function(){return c(this).val()==e.id}}(l)),a=this.item(o),a=c.extend(!0,{},l,a),a=this.option(a),o.replaceWith(a)):(a=this.option(l),l.children&&(l=this.convertToOptions(l.children),a.append(l)),i.push(a))}return i},s}),u.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,r){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return r.extend({},e,{q:e.term})},transport:function(e,t,n){e=r.ajax(e);return e.then(t),e.fail(n),e}};return r.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(t,n){var s=this;null!=this._request&&("function"==typeof this._request.abort&&this._request.abort(),this._request=null);var i=r.extend({type:"GET"},this.ajaxOptions);function e(){var e=i.transport(i,function(e){e=s.processResults(e,t);s.options.get("debug")&&window.console&&console.error&&(e&&e.results&&Array.isArray(e.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),n(e)},function(){"status"in e&&(0===e.status||"0"===e.status)||s.trigger("results:message",{message:"errorLoading"})});s._request=e}"function"==typeof i.url&&(i.url=i.url.call(this.$element,t)),"function"==typeof i.data&&(i.data=i.data.call(this.$element,t)),this.ajaxOptions.delay&&null!=t.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),u.define("select2/data/tags",["jquery"],function(t){function e(e,t,n){var s=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);i=n.get("insertTag");if(void 0!==i&&(this.insertTag=i),e.call(this,t,n),Array.isArray(s))for(var r=0;r<s.length;r++){var o=s[r],o=this._normalizeItem(o),o=this.option(o);this.$element.append(o)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var s=t.results,i=0;i<s.length;i++){var r=s[i],o=null!=r.children&&!e({results:r.children},!0);if((r.text||"").toUpperCase()===(c.term||"").toUpperCase()||o)return!n&&(t.data=s,void u(t))}if(n)return!0;var a,l=d.createTag(c);null!=l&&((a=d.option(l)).attr("data-select2-tag","true"),d.addOptions([a]),d.insertTag(s,l)),t.results=s,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){if(null==t.term)return null;t=t.term.trim();return""===t?null:{id:t,text:t}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||t(this).remove()})},e}),u.define("select2/data/tokenizer",["jquery"],function(c){function e(e,t,n){var s=n.get("tokenizer");void 0!==s&&(this.tokenizer=s),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var s=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t,n=s._normalizeItem(e);s.$element.find("option").filter(function(){return c(this).val()===n.id}).length||((t=s.option(n)).attr("data-select2-tag",!0),s._removeOldTags(),s.addOptions([t])),t=n,s.trigger("select",{data:t})});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,s){for(var i=n.get("tokenSeparators")||[],r=t.term,o=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};o<r.length;){var l=r[o];-1!==i.indexOf(l)?(l=r.substr(0,o),null!=(l=a(c.extend({},t,{term:l})))?(s(l),r=r.substr(o+1)||"",o=0):o++):o++}return{term:r}},e}),u.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),u.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(){s._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var s=this;this._checkIfMaximumSelected(function(){e.call(s,t,n)})},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current(function(e){e=null!=e?e.length:0;0<n.maximumSelectionLength&&e>=n.maximumSelectionLength?n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}}):t&&t()})},e}),u.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),u.define("select2/dropdown/search",["jquery"],function(r){function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("translations").get("search"),e=r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=e,this.$search=e.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",n()),t.prepend(e),t},e.prototype.bind=function(e,t,n){var s=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){s.trigger("keypress",e),s._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){r(this).off("keyup")}),this.$search.on("keyup input",function(e){s.handleSearch(e)}),t.on("open",function(){s.$search.attr("tabindex",0),s.$search.attr("aria-controls",i),s.$search.trigger("focus"),window.setTimeout(function(){s.$search.trigger("focus")},0)}),t.on("close",function(){s.$search.attr("tabindex",-1),s.$search.removeAttr("aria-controls"),s.$search.removeAttr("aria-activedescendant"),s.$search.val(""),s.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||s.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(s.showSearch(e)?s.$searchContainer[0].classList.remove("select2-search--hide"):s.$searchContainer[0].classList.add("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?s.$search.attr("aria-activedescendant",e.data._resultId):s.$search.removeAttr("aria-activedescendant")})},e.prototype.handleSearch=function(e){var t;this._keyUpPrevented||(t=this.$search.val(),this.trigger("query",{term:t})),this._keyUpPrevented=!1},e.prototype.showSearch=function(e,t){return!0},e}),u.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,s){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,s)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),s=t.length-1;0<=s;s--){var i=t[s];this.placeholder.id===i.id&&n.splice(s,1)}return n},e}),u.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,s){this.lastParams={},e.call(this,t,n,s),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("query",function(e){s.lastParams=e,s.loading=!0}),t.on("query:append",function(e){s.lastParams=e,s.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&e&&(e=this.$results.offset().top+this.$results.outerHeight(!1),this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=e+50&&this.loadMore())},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),u.define("select2/dropdown/attachBody",["jquery","../utils"],function(u,o){function e(e,t,n){this.$dropdownParent=u(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("open",function(){s._showDropdown(),s._attachPositioningHandler(t),s._bindContainerResultHandlers(t)}),t.on("close",function(){s._hideDropdown(),s._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t[0].classList.remove("select2"),t[0].classList.add("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=u("<span></span>"),e=e.call(this);return t.append(e),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){var n;this._containerResultsHandlersBound||(n=this,t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0)},e.prototype._attachPositioningHandler=function(e,t){var n=this,s="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id,t=this.$container.parents().filter(o.hasScroll);t.each(function(){o.StoreData(this,"select2-scroll-position",{x:u(this).scrollLeft(),y:u(this).scrollTop()})}),t.on(s,function(e){var t=o.GetData(this,"select2-scroll-position");u(this).scrollTop(t.y)}),u(window).on(s+" "+i+" "+r,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,s="resize.select2."+t.id,t="orientationchange.select2."+t.id;this.$container.parents().filter(o.hasScroll).off(n),u(window).off(n+" "+s+" "+t)},e.prototype._positionDropdown=function(){var e=u(window),t=this.$dropdown[0].classList.contains("select2-dropdown--above"),n=this.$dropdown[0].classList.contains("select2-dropdown--below"),s=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var r={height:this.$container.outerHeight(!1)};r.top=i.top,r.bottom=i.top+r.height;var o=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-o,e=l>i.bottom+o,a={left:i.left,top:r.bottom},l=this.$dropdownParent;"static"===l.css("position")&&(l=l.offsetParent());i={top:0,left:0};(u.contains(document.body,l[0])||l[0].isConnected)&&(i=l.offset()),a.top-=i.top,a.left-=i.left,t||n||(s="below"),e||!c||t?!c&&e&&t&&(s="below"):s="above",("above"==s||t&&"below"!==s)&&(a.top=r.top-i.top-o),null!=s&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+s),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+s)),this.$dropdownContainer.css(a)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),u.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,s){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,s)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,s=0;s<t.length;s++){var i=t[s];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),u.define("select2/dropdown/selectOnClose",["../utils"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("close",function(e){s._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}n=this.getHighlightedResults();n.length<1||(null!=(n=s.GetData(n[0],"data")).element&&n.element.selected||null==n.element&&n.selected||this.trigger("select",{data:n}))},e}),u.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var s=this;e.call(this,t,n),t.on("select",function(e){s._selectTriggered(e)}),t.on("unselect",function(e){s._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),u.define("select2/dropdown/dropdownCss",["../utils"],function(n){function e(){}return e.prototype.render=function(e){var t=e.call(this),e=this.options.get("dropdownCssClass")||"";return-1!==e.indexOf(":all:")&&(e=e.replace(":all:",""),n.copyNonInternalCssClasses(t[0],this.$element[0])),t.addClass(e),t},e}),u.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(s){function e(){}return e.prototype.highlightFirstItem=function(e){var t=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(0<t.length){var n=t.first(),t=s.GetData(n[0],"data").element;if(t&&t.getAttribute&&"true"===t.getAttribute("data-select2-tag"))return void n.trigger("mouseenter")}e.call(this)},e}),u.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,e="Please delete "+t+" character";return 1!=t&&(e+="s"),e},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),u.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(l,r,o,a,c,u,d,p,h,f,g,t,m,y,v,_,b,$,w,x,A,D,S,E,O,C,L,T,q,I,e){function n(){this.reset()}return n.prototype.apply=function(e){var t;null==(e=l.extend(!0,{},this.defaults,e)).dataAdapter&&(null!=e.ajax?e.dataAdapter=v:null!=e.data?e.dataAdapter=y:e.dataAdapter=m,0<e.minimumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,$)),0<e.maximumInputLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,w)),0<e.maximumSelectionLength&&(e.dataAdapter=f.Decorate(e.dataAdapter,x)),e.tags&&(e.dataAdapter=f.Decorate(e.dataAdapter,_)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=f.Decorate(e.dataAdapter,b))),null==e.resultsAdapter&&(e.resultsAdapter=r,null!=e.ajax&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,E)),null!=e.placeholder&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,S)),e.selectOnClose&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,L)),e.tags&&(e.resultsAdapter=f.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter&&(e.multiple?e.dropdownAdapter=A:(t=f.Decorate(A,D),e.dropdownAdapter=t),0!==e.minimumResultsForSearch&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,C)),e.closeOnSelect&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,T)),null!=e.dropdownCssClass&&(e.dropdownAdapter=f.Decorate(e.dropdownAdapter,q)),e.dropdownAdapter=f.Decorate(e.dropdownAdapter,O)),null==e.selectionAdapter&&(e.multiple?e.selectionAdapter=a:e.selectionAdapter=o,null!=e.placeholder&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,c)),e.allowClear&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,u)),e.multiple&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,d)),null!=e.selectionCssClass&&(e.selectionAdapter=f.Decorate(e.selectionAdapter,p)),e.selectionAdapter=f.Decorate(e.selectionAdapter,h)),e.language=this._resolveLanguage(e.language),e.language.push("en");for(var n=[],s=0;s<e.language.length;s++){var i=e.language[s];-1===n.indexOf(i)&&n.push(i)}return e.language=n,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:f.escapeMarkup,language:{},matcher:function e(t,n){if(null==t.term||""===t.term.trim())return n;if(n.children&&0<n.children.length){for(var s=l.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&s.children.splice(i,1);return 0<s.children.length?s:e(t,s)}var r=a(n.text).toUpperCase(),o=a(t.term).toUpperCase();return-1<r.indexOf(o)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,s=this.defaults.language,i=t.prop("lang"),t=t.closest("[lang]").prop("lang"),t=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(s),this._resolveLanguage(t));return e.language=t,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(l.isEmptyObject(e))return[];if(l.isPlainObject(e))return[e];for(var t,n=Array.isArray(e)?e:[e],s=[],i=0;i<n.length;i++)s.push(n[i]),"string"==typeof n[i]&&0<n[i].indexOf("-")&&(t=n[i].split("-")[0],s.push(t));return s},n.prototype._processTranslations=function(e,t){for(var n=new g,s=0;s<e.length;s++){var i=new g,r=e[s];if("string"==typeof r)try{i=g.loadPath(r)}catch(e){try{r=this.defaults.amdLanguageBase+r,i=g.loadPath(r)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+r+'" could not be automatically loaded. A fallback will be used instead.')}}else i=l.isPlainObject(r)?new g(r):r;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[l.camelCase(e)]=t;n=f._convertData(n);l.extend(!0,this.defaults,n)},new n}),u.define("select2/options",["jquery","./defaults","./utils"],function(c,n,u){function e(e,t){this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=n.applyFromElement(this.options,t)),this.options=n.apply(this.options)}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.autocomplete&&e.prop("autocomplete")&&(this.options.autocomplete=e.prop("autocomplete")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),u.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),u.StoreData(e[0],"data",u.GetData(e[0],"select2Tags")),u.StoreData(e[0],"tags",!0)),u.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",u.GetData(e[0],"ajaxUrl")),u.StoreData(e[0],"ajax-Url",u.GetData(e[0],"ajaxUrl")));var n={};function s(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var r=e[0].attributes[i].name,o="data-";r.substr(0,o.length)==o&&(r=r.substring(o.length),o=u.GetData(e[0],r),n[r.replace(/-([a-z])/g,s)]=o)}c.fn.jquery&&"1."==c.fn.jquery.substr(0,2)&&e[0].dataset&&(n=c.extend(!0,{},e[0].dataset,n));var a,l=c.extend(!0,{},u.GetData(e[0]),n);for(a in l=u._convertData(l))-1<t.indexOf(a)||(c.isPlainObject(this.options[a])?c.extend(this.options[a],l[a]):this.options[a]=l[a]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),u.define("select2/core",["jquery","./options","./utils","./keys"],function(t,i,r,s){var o=function(e,t){null!=r.GetData(e[0],"select2")&&r.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new i(t,e),o.__super__.constructor.call(this);var n=e.attr("tabindex")||0;r.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");t=this.options.get("dataAdapter");this.dataAdapter=new t(e,this.options);n=this.render();this._placeContainer(n);t=this.options.get("selectionAdapter");this.selection=new t(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,n);t=this.options.get("dropdownAdapter");this.dropdown=new t(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,n);n=this.options.get("resultsAdapter");this.results=new n(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var s=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){s.trigger("selection:update",{data:e})}),e[0].classList.add("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),r.StoreData(e[0],"select2",this),e.data("select2",this)};return r.Extend(o,r.Observable),o.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+r.generateChars(2):r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},o.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},o.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var s=this._resolveWidth(e,"style");return null!=s?s:this._resolveWidth(e,"element")}if("element"==t){s=e.outerWidth(!1);return s<=0?"auto":s+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;e=e.attr("style");if("string"!=typeof e)return null;for(var i=e.split(";"),r=0,o=i.length;r<o;r+=1){var a=i[r].replace(/\s/g,"").match(n);if(null!==a&&1<=a.length)return a[1]}return null},o.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},o.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=r.bind(this._syncAttributes,this),this._syncS=r.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(e){t._syncA(),t._syncS(e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},o.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerSelectionEvents=function(){var n=this,s=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===s.indexOf(e)&&n.trigger(e,t)})},o.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},o.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container[0].classList.add("select2-container--open")}),this.on("close",function(){n.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){n.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){n.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){n.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===s.ESC||t===s.UP&&e.altKey?(n.close(e),e.preventDefault()):t===s.ENTER||t===s.TAB?(n.trigger("results:select",{}),e.preventDefault()):t===s.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===s.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===s.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===s.ENTER||t===s.SPACE||t===s.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},o.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},o.prototype._isChangeMutation=function(e){var t=this;if(e.addedNodes&&0<e.addedNodes.length){for(var n=0;n<e.addedNodes.length;n++)if(e.addedNodes[n].selected)return!0}else{if(e.removedNodes&&0<e.removedNodes.length)return!0;if(Array.isArray(e))return e.some(function(e){return t._isChangeMutation(e)})}return!1},o.prototype._syncSubtree=function(e){var e=this._isChangeMutation(e),t=this;e&&this.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})},o.prototype.trigger=function(e,t){var n=o.__super__.trigger,s={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in s){var i=s[e],s={prevented:!1,name:e,args:t};if(n.call(this,i,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},o.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},o.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},o.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},o.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},o.prototype.focus=function(e){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},o.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);e=!e[0];this.$element.prop("disabled",e)},o.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},o.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();e=e[0];Array.isArray(e)&&(e=e.map(function(e){return e.toString()})),this.$element.val(e).trigger("input").trigger("change")},o.prototype.destroy=function(){r.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",r.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),r.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},o.prototype.render=function(){var e=t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),r.StoreData(e[0],"element",this.$element),e},o}),u.define("jquery-mousewheel",["jquery"],function(e){return e}),u.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,r,t,o){var a;return null==i.fn.select2&&(a=["open","close","destroy"],i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new r(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,s=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=o.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,s)}),-1<a.indexOf(t)?this:n}),null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),r}),{define:u.define,require:u.require});function b(e,t){return i.call(e,t)}function l(e,t){var n,s,i,r,o,a,l,c,u,d,p=t&&t.split("/"),h=y.map,f=h&&h["*"]||{};if(e){for(t=(e=e.split("/")).length-1,y.nodeIdCompat&&_.test(e[t])&&(e[t]=e[t].replace(_,"")),"."===e[0].charAt(0)&&p&&(e=p.slice(0,p.length-1).concat(e)),c=0;c<e.length;c++)"."===(d=e[c])?(e.splice(c,1),--c):".."===d&&(0===c||1===c&&".."===e[2]||".."===e[c-1]||0<c&&(e.splice(c-1,2),c-=2));e=e.join("/")}if((p||f)&&h){for(c=(n=e.split("/")).length;0<c;--c){if(s=n.slice(0,c).join("/"),p)for(u=p.length;0<u;--u)if(i=h[p.slice(0,u).join("/")],i=i&&i[s]){r=i,o=c;break}if(r)break;!a&&f&&f[s]&&(a=f[s],l=c)}!r&&a&&(r=a,o=l),r&&(n.splice(0,o,r),e=n.join("/"))}return e}function w(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),o.apply(p,e.concat([t,n]))}}function x(e){var t;if(b(m,e)&&(t=m[e],delete m[e],v[e]=!0,r.apply(p,t)),!b(g,e)&&!b(v,e))throw new Error("No "+e);return g[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function A(e){return e?c(e):[]}var u=s.require("jquery.select2");return t.fn.select2.amd=s,u});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:77:"/local/templates/kadflo/assets/libraries/inputTel/inputTel.js?174428259645630";s:6:"source";s:61:"/local/templates/kadflo/assets/libraries/inputTel/inputTel.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * International Telephone Input v17.0.19
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

!(function(a) {
	'object' == typeof module && module.exports
		? (module.exports = a())
		: (window.intlTelInput = a())
})(function(a) {
	'use strict'
	return (function() {
		function b(a, b) {
			if (!(a instanceof b))
				throw new TypeError('Cannot call a class as a function')
		}
		function c(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c]
				;(d.enumerable = d.enumerable || !1), (d.configurable = !0), 'value' in
					d && (d.writable = !0), Object.defineProperty(a, d.key, d)
			}
		}
		function d(a, b, d) {
			return b && c(a.prototype, b), d && c(a, d), a
		}
		for (
			var e = [
					['Afghanistan (‫افغانستان‬‎)', 'af', '93'],
					['Albania (Shqipëri)', 'al', '355'],
					['Algeria (‫الجزائر‬‎)', 'dz', '213'],
					['American Samoa', 'as', '1', 5, ['684']],
					['Andorra', 'ad', '376'],
					['Angola', 'ao', '244'],
					['Anguilla', 'ai', '1', 6, ['264']],
					['Antigua and Barbuda', 'ag', '1', 7, ['268']],
					['Argentina', 'ar', '54'],
					['Armenia (Հայաստան)', 'am', '374'],
					['Aruba', 'aw', '297'],
					['Ascension Island', 'ac', '247'],
					['Australia', 'au', '61', 0],
					['Austria (Österreich)', 'at', '43'],
					['Azerbaijan (Azərbaycan)', 'az', '994'],
					['Bahamas', 'bs', '1', 8, ['242']],
					['Bahrain (‫البحرين‬‎)', 'bh', '973'],
					['Bangladesh (বাংলাদেশ)', 'bd', '880'],
					['Barbados', 'bb', '1', 9, ['246']],
					['Belarus (Беларусь)', 'by', '375'],
					['Belgium (België)', 'be', '32'],
					['Belize', 'bz', '501'],
					['Benin (Bénin)', 'bj', '229'],
					['Bermuda', 'bm', '1', 10, ['441']],
					['Bhutan (འབྲུག)', 'bt', '975'],
					['Bolivia', 'bo', '591'],
					['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'],
					['Botswana', 'bw', '267'],
					['Brazil (Brasil)', 'br', '55'],
					['British Indian Ocean Territory', 'io', '246'],
					['British Virgin Islands', 'vg', '1', 11, ['284']],
					['Brunei', 'bn', '673'],
					['Bulgaria (България)', 'bg', '359'],
					['Burkina Faso', 'bf', '226'],
					['Burundi (Uburundi)', 'bi', '257'],
					['Cambodia (កម្ពុជា)', 'kh', '855'],
					['Cameroon (Cameroun)', 'cm', '237'],
					[
						'Canada',
						'ca',
						'1',
						1,
						[
							'204',
							'226',
							'236',
							'249',
							'250',
							'289',
							'306',
							'343',
							'365',
							'387',
							'403',
							'416',
							'418',
							'431',
							'437',
							'438',
							'450',
							'506',
							'514',
							'519',
							'548',
							'579',
							'581',
							'587',
							'604',
							'613',
							'639',
							'647',
							'672',
							'705',
							'709',
							'742',
							'778',
							'780',
							'782',
							'807',
							'819',
							'825',
							'867',
							'873',
							'902',
							'905'
						]
					],
					['Cape Verde (Kabu Verdi)', 'cv', '238'],
					['Caribbean Netherlands', 'bq', '599', 1, ['3', '4', '7']],
					['Cayman Islands', 'ky', '1', 12, ['345']],
					['Central African Republic (République centrafricaine)', 'cf', '236'],
					['Chad (Tchad)', 'td', '235'],
					['Chile', 'cl', '56'],
					['China (中国)', 'cn', '86'],
					['Christmas Island', 'cx', '61', 2, ['89164']],
					['Cocos (Keeling) Islands', 'cc', '61', 1, ['89162']],
					['Colombia', 'co', '57'],
					['Comoros (‫جزر القمر‬‎)', 'km', '269'],
					['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'],
					['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'],
					['Cook Islands', 'ck', '682'],
					['Costa Rica', 'cr', '506'],
					['Côte d’Ivoire', 'ci', '225'],
					['Croatia (Hrvatska)', 'hr', '385'],
					['Cuba', 'cu', '53'],
					['Curaçao', 'cw', '599', 0],
					['Cyprus (Κύπρος)', 'cy', '357'],
					['Czech Republic (Česká republika)', 'cz', '420'],
					['Denmark (Danmark)', 'dk', '45'],
					['Djibouti', 'dj', '253'],
					['Dominica', 'dm', '1', 13, ['767']],
					[
						'Dominican Republic (República Dominicana)',
						'do',
						'1',
						2,
						['809', '829', '849']
					],
					['Ecuador', 'ec', '593'],
					['Egypt (‫مصر‬‎)', 'eg', '20'],
					['El Salvador', 'sv', '503'],
					['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'],
					['Eritrea', 'er', '291'],
					['Estonia (Eesti)', 'ee', '372'],
					['Eswatini', 'sz', '268'],
					['Ethiopia', 'et', '251'],
					['Falkland Islands (Islas Malvinas)', 'fk', '500'],
					['Faroe Islands (Føroyar)', 'fo', '298'],
					['Fiji', 'fj', '679'],
					['Finland (Suomi)', 'fi', '358', 0],
					['France', 'fr', '33'],
					['French Guiana (Guyane française)', 'gf', '594'],
					['French Polynesia (Polynésie française)', 'pf', '689'],
					['Gabon', 'ga', '241'],
					['Gambia', 'gm', '220'],
					['Georgia (საქართველო)', 'ge', '995'],
					['Germany (Deutschland)', 'de', '49'],
					['Ghana (Gaana)', 'gh', '233'],
					['Gibraltar', 'gi', '350'],
					['Greece (Ελλάδα)', 'gr', '30'],
					['Greenland (Kalaallit Nunaat)', 'gl', '299'],
					['Grenada', 'gd', '1', 14, ['473']],
					['Guadeloupe', 'gp', '590', 0],
					['Guam', 'gu', '1', 15, ['671']],
					['Guatemala', 'gt', '502'],
					['Guernsey', 'gg', '44', 1, ['1481', '7781', '7839', '7911']],
					['Guinea (Guinée)', 'gn', '224'],
					['Guinea-Bissau (Guiné Bissau)', 'gw', '245'],
					['Guyana', 'gy', '592'],
					['Haiti', 'ht', '509'],
					['Honduras', 'hn', '504'],
					['Hong Kong (香港)', 'hk', '852'],
					['Hungary (Magyarország)', 'hu', '36'],
					['Iceland (Ísland)', 'is', '354'],
					['India (भारत)', 'in', '91'],
					['Indonesia', 'id', '62'],
					['Iran (‫ایران‬‎)', 'ir', '98'],
					['Iraq (‫العراق‬‎)', 'iq', '964'],
					['Ireland', 'ie', '353'],
					[
						'Isle of Man',
						'im',
						'44',
						2,
						['1624', '74576', '7524', '7924', '7624']
					],
					['Israel (‫ישראל‬‎)', 'il', '972'],
					['Italy (Italia)', 'it', '39', 0],
					['Jamaica', 'jm', '1', 4, ['876', '658']],
					['Japan (日本)', 'jp', '81'],
					[
						'Jersey',
						'je',
						'44',
						3,
						['1534', '7509', '7700', '7797', '7829', '7937']
					],
					['Jordan (‫الأردن‬‎)', 'jo', '962'],
					['Kazakhstan (Казахстан)', 'kz', '7', 1, ['33', '7']],
					['Kenya', 'ke', '254'],
					['Kiribati', 'ki', '686'],
					['Kosovo', 'xk', '383'],
					['Kuwait (‫الكويت‬‎)', 'kw', '965'],
					['Kyrgyzstan (Кыргызстан)', 'kg', '996'],
					['Laos (ລາວ)', 'la', '856'],
					['Latvia (Latvija)', 'lv', '371'],
					['Lebanon (‫لبنان‬‎)', 'lb', '961'],
					['Lesotho', 'ls', '266'],
					['Liberia', 'lr', '231'],
					['Libya (‫ليبيا‬‎)', 'ly', '218'],
					['Liechtenstein', 'li', '423'],
					['Lithuania (Lietuva)', 'lt', '370'],
					['Luxembourg', 'lu', '352'],
					['Macau (澳門)', 'mo', '853'],
					['North Macedonia (Македонија)', 'mk', '389'],
					['Madagascar (Madagasikara)', 'mg', '261'],
					['Malawi', 'mw', '265'],
					['Malaysia', 'my', '60'],
					['Maldives', 'mv', '960'],
					['Mali', 'ml', '223'],
					['Malta', 'mt', '356'],
					['Marshall Islands', 'mh', '692'],
					['Martinique', 'mq', '596'],
					['Mauritania (‫موريتانيا‬‎)', 'mr', '222'],
					['Mauritius (Moris)', 'mu', '230'],
					['Mayotte', 'yt', '262', 1, ['269', '639']],
					['Mexico (México)', 'mx', '52'],
					['Micronesia', 'fm', '691'],
					['Moldova (Republica Moldova)', 'md', '373'],
					['Monaco', 'mc', '377'],
					['Mongolia (Монгол)', 'mn', '976'],
					['Montenegro (Crna Gora)', 'me', '382'],
					['Montserrat', 'ms', '1', 16, ['664']],
					['Morocco (‫المغرب‬‎)', 'ma', '212', 0],
					['Mozambique (Moçambique)', 'mz', '258'],
					['Myanmar (Burma) (မြန်မာ)', 'mm', '95'],
					['Namibia (Namibië)', 'na', '264'],
					['Nauru', 'nr', '674'],
					['Nepal (नेपाल)', 'np', '977'],
					['Netherlands (Nederland)', 'nl', '31'],
					['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'],
					['New Zealand', 'nz', '64'],
					['Nicaragua', 'ni', '505'],
					['Niger (Nijar)', 'ne', '227'],
					['Nigeria', 'ng', '234'],
					['Niue', 'nu', '683'],
					['Norfolk Island', 'nf', '672'],
					['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'],
					['Northern Mariana Islands', 'mp', '1', 17, ['670']],
					['Norway (Norge)', 'no', '47', 0],
					['Oman (‫عُمان‬‎)', 'om', '968'],
					['Pakistan (‫پاکستان‬‎)', 'pk', '92'],
					['Palau', 'pw', '680'],
					['Palestine (‫فلسطين‬‎)', 'ps', '970'],
					['Panama (Panamá)', 'pa', '507'],
					['Papua New Guinea', 'pg', '675'],
					['Paraguay', 'py', '595'],
					['Peru (Perú)', 'pe', '51'],
					['Philippines', 'ph', '63'],
					['Poland (Polska)', 'pl', '48'],
					['Portugal', 'pt', '351'],
					['Puerto Rico', 'pr', '1', 3, ['787', '939']],
					['Qatar (‫قطر‬‎)', 'qa', '974'],
					['Réunion (La Réunion)', 're', '262', 0],
					['Romania (România)', 'ro', '40'],
					['Russia (Россия)', 'ru', '7', 0],
					['Rwanda', 'rw', '250'],
					['Saint Barthélemy', 'bl', '590', 1],
					['Saint Helena', 'sh', '290'],
					['Saint Kitts and Nevis', 'kn', '1', 18, ['869']],
					['Saint Lucia', 'lc', '1', 19, ['758']],
					['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2],
					['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'],
					['Saint Vincent and the Grenadines', 'vc', '1', 20, ['784']],
					['Samoa', 'ws', '685'],
					['San Marino', 'sm', '378'],
					['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'],
					['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'],
					['Senegal (Sénégal)', 'sn', '221'],
					['Serbia (Србија)', 'rs', '381'],
					['Seychelles', 'sc', '248'],
					['Sierra Leone', 'sl', '232'],
					['Singapore', 'sg', '65'],
					['Sint Maarten', 'sx', '1', 21, ['721']],
					['Slovakia (Slovensko)', 'sk', '421'],
					['Slovenia (Slovenija)', 'si', '386'],
					['Solomon Islands', 'sb', '677'],
					['Somalia (Soomaaliya)', 'so', '252'],
					['South Africa', 'za', '27'],
					['South Korea (대한민국)', 'kr', '82'],
					['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'],
					['Spain (España)', 'es', '34'],
					['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'],
					['Sudan (‫السودان‬‎)', 'sd', '249'],
					['Suriname', 'sr', '597'],
					['Svalbard and Jan Mayen', 'sj', '47', 1, ['79']],
					['Sweden (Sverige)', 'se', '46'],
					['Switzerland (Schweiz)', 'ch', '41'],
					['Syria (‫سوريا‬‎)', 'sy', '963'],
					['Taiwan (台灣)', 'tw', '886'],
					['Tajikistan', 'tj', '992'],
					['Tanzania', 'tz', '255'],
					['Thailand (ไทย)', 'th', '66'],
					['Timor-Leste', 'tl', '670'],
					['Togo', 'tg', '228'],
					['Tokelau', 'tk', '690'],
					['Tonga', 'to', '676'],
					['Trinidad and Tobago', 'tt', '1', 22, ['868']],
					['Tunisia (‫تونس‬‎)', 'tn', '216'],
					['Turkey (Türkiye)', 'tr', '90'],
					['Turkmenistan', 'tm', '993'],
					['Turks and Caicos Islands', 'tc', '1', 23, ['649']],
					['Tuvalu', 'tv', '688'],
					['U.S. Virgin Islands', 'vi', '1', 24, ['340']],
					['Uganda', 'ug', '256'],
					['Ukraine (Україна)', 'ua', '380'],
					['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'],
					['United Kingdom', 'gb', '44', 0],
					['United States', 'us', '1', 0],
					['Uruguay', 'uy', '598'],
					['Uzbekistan (Oʻzbekiston)', 'uz', '998'],
					['Vanuatu', 'vu', '678'],
					['Vatican City (Città del Vaticano)', 'va', '39', 1, ['06698']],
					['Venezuela', 've', '58'],
					['Vietnam (Việt Nam)', 'vn', '84'],
					['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'],
					[
						'Western Sahara (‫الصحراء الغربية‬‎)',
						'eh',
						'212',
						1,
						['5288', '5289']
					],
					['Yemen (‫اليمن‬‎)', 'ye', '967'],
					['Zambia', 'zm', '260'],
					['Zimbabwe', 'zw', '263'],
					['Åland Islands', 'ax', '358', 1, ['18']]
				],
				f = 0;
			f < e.length;
			f++
		) {
			var g = e[f]
			e[f] = {
				name: g[0],
				iso2: g[1],
				dialCode: g[2],
				priority: g[3] || 0,
				areaCodes: g[4] || null
			}
		}
		var h = {
			getInstance: function(a) {
				var b = a.getAttribute('data-intl-tel-input-id')
				return window.intlTelInputGlobals.instances[b]
			},
			instances: {},
			documentReady: function() {
				return 'complete' === document.readyState
			}
		}
		'object' == typeof window && (window.intlTelInputGlobals = h)
		var i = 0,
			j = {
				allowDropdown: !0,
				autoHideDialCode: !0,
				autoPlaceholder: 'polite',
				customContainer: '',
				customPlaceholder: null,
				dropdownContainer: null,
				excludeCountries: [],
				formatOnDisplay: !0,
				geoIpLookup: null,
				hiddenInput: '',
				initialCountry: '',
				localizedCountries: null,
				nationalMode: !0,
				onlyCountries: [],
				placeholderNumberType: 'MOBILE',
				preferredCountries: ['us', 'gb'],
				separateDialCode: !1,
				utilsScript: ''
			},
			k = [
				'800',
				'822',
				'833',
				'844',
				'855',
				'866',
				'877',
				'880',
				'881',
				'882',
				'883',
				'884',
				'885',
				'886',
				'887',
				'888',
				'889'
			],
			l = function(a, b) {
				for (var c = Object.keys(a), d = 0; d < c.length; d++) b(c[d], a[c[d]])
			},
			m = function(a) {
				l(window.intlTelInputGlobals.instances, function(b) {
					window.intlTelInputGlobals.instances[b][a]()
				})
			},
			n = (function() {
				function c(a, d) {
					var e = this
					b(
						this,
						c
					), (this.id = i++), (this.a = a), (this.b = null), (this.c = null)
					var f = d || {}
					;(this.d = {}), l(j, function(a, b) {
						e.d[a] = f.hasOwnProperty(a) ? f[a] : b
					}), (this.e = Boolean(a.getAttribute('placeholder')))
				}
				return d(c, [
					{
						key: '_init',
						value: function() {
							var a = this
							if (
								(
									this.d.nationalMode && (this.d.autoHideDialCode = !1),
									this.d.separateDialCode &&
										(this.d.autoHideDialCode = this.d.nationalMode = !1),
									(this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
										navigator.userAgent
									)),
									this.g &&
										(
											document.body.classList.add('iti-mobile'),
											this.d.dropdownContainer ||
												(this.d.dropdownContainer = document.body)
										),
									'undefined' != typeof Promise
								)
							) {
								var b = new Promise(function(b, c) {
										;(a.h = b), (a.i = c)
									}),
									c = new Promise(function(b, c) {
										;(a.i0 = b), (a.i1 = c)
									})
								this.promise = Promise.all([b, c])
							} else
								(this.h = this.i = function() {}), (this.i0 = this.i1 = function() {})
							;(this.s = {}), this._b(), this._f(), this._h(), this._i(), this._i3()
						}
					},
					{
						key: '_b',
						value: function() {
							this._d(), this._d2(), this._e(), this.d.localizedCountries &&
								this._d0(), (this.d.onlyCountries.length ||
								this.d.localizedCountries) &&
								this.p.sort(this._d1)
						}
					},
					{
						key: '_c',
						value: function(b, c, d) {
							c.length > this.countryCodeMaxLen &&
								(this.countryCodeMaxLen = c.length), this.q.hasOwnProperty(c) ||
								(this.q[c] = [])
							for (var e = 0; e < this.q[c].length; e++)
								if (this.q[c][e] === b) return
							var f = d !== a ? d : this.q[c].length
							this.q[c][f] = b
						}
					},
					{
						key: '_d',
						value: function() {
							if (this.d.onlyCountries.length) {
								var a = this.d.onlyCountries.map(function(a) {
									return a.toLowerCase()
								})
								this.p = e.filter(function(b) {
									return a.indexOf(b.iso2) > -1
								})
							} else if (this.d.excludeCountries.length) {
								var b = this.d.excludeCountries.map(function(a) {
									return a.toLowerCase()
								})
								this.p = e.filter(function(a) {
									return -1 === b.indexOf(a.iso2)
								})
							} else this.p = e
						}
					},
					{
						key: '_d0',
						value: function() {
							for (var a = 0; a < this.p.length; a++) {
								var b = this.p[a].iso2.toLowerCase()
								this.d.localizedCountries.hasOwnProperty(b) &&
									(this.p[a].name = this.d.localizedCountries[b])
							}
						}
					},
					{
						key: '_d1',
						value: function(a, b) {
							return a.name.localeCompare(b.name)
						}
					},
					{
						key: '_d2',
						value: function() {
							;(this.countryCodeMaxLen = 0), (this.dialCodes = {}), (this.q = {})
							for (var a = 0; a < this.p.length; a++) {
								var b = this.p[a]
								this.dialCodes[b.dialCode] ||
									(this.dialCodes[b.dialCode] = !0), this._c(
									b.iso2,
									b.dialCode,
									b.priority
								)
							}
							for (var c = 0; c < this.p.length; c++) {
								var d = this.p[c]
								if (d.areaCodes)
									for (
										var e = this.q[d.dialCode][0], f = 0;
										f < d.areaCodes.length;
										f++
									) {
										for (var g = d.areaCodes[f], h = 1; h < g.length; h++) {
											var i = d.dialCode + g.substr(0, h)
											this._c(e, i), this._c(d.iso2, i)
										}
										this._c(d.iso2, d.dialCode + g)
									}
							}
						}
					},
					{
						key: '_e',
						value: function() {
							this.preferredCountries = []
							for (var a = 0; a < this.d.preferredCountries.length; a++) {
								var b = this.d.preferredCountries[a].toLowerCase(),
									c = this._y(b, !1, !0)
								c && this.preferredCountries.push(c)
							}
						}
					},
					{
						key: '_e2',
						value: function(a, b, c) {
							var d = document.createElement(a)
							return b &&
								l(b, function(a, b) {
									return d.setAttribute(a, b)
								}), c && c.appendChild(d), d
						}
					},
					{
						key: '_f',
						value: function() {
							this.a.hasAttribute('autocomplete') ||
								(this.a.form && this.a.form.hasAttribute('autocomplete')) ||
								this.a.setAttribute('autocomplete', 'off')
							var a = 'iti'
							this.d.allowDropdown && (a += ' iti--allow-dropdown'), this.d
								.separateDialCode && (a += ' iti--separate-dial-code'), this.d
								.customContainer && ((a += ' '), (a += this.d.customContainer))
							var b = this._e2('div', { class: a })
							if (
								(
									this.a.parentNode.insertBefore(b, this.a),
									(this.k = this._e2(
										'div',
										{ class: 'iti__flag-container' },
										b
									)),
									b.appendChild(this.a),
									(this.selectedFlag = this._e2(
										'div',
										{
											class: 'iti__selected-flag',
											role: 'combobox',
											'aria-controls': 'iti-'.concat(
												this.id,
												'__country-listbox'
											),
											'aria-owns': 'iti-'.concat(this.id, '__country-listbox'),
											'aria-expanded': 'false'
										},
										this.k
									)),
									(this.l = this._e2(
										'div',
										{ class: 'iti__flag' },
										this.selectedFlag
									)),
									this.d.separateDialCode &&
										(this.t = this._e2(
											'div',
											{ class: 'iti__selected-dial-code' },
											this.selectedFlag
										)),
									this.d.allowDropdown &&
										(
											this.selectedFlag.setAttribute('tabindex', '0'),
											(this.u = this._e2(
												'div',
												{ class: 'iti__arrow' },
												this.selectedFlag
											)),
											(this.m = this._e2('ul', {
												class: 'iti__country-list iti__hide',
												id: 'iti-'.concat(this.id, '__country-listbox'),
												role: 'listbox',
												'aria-label': 'List of countries'
											})),
											this.preferredCountries.length &&
												(
													this._g(
														this.preferredCountries,
														'iti__preferred',
														!0
													),
													this._e2(
														'li',
														{
															class: 'iti__divider',
															role: 'separator',
															'aria-disabled': 'true'
														},
														this.m
													)
												),
											this._g(this.p, 'iti__standard'),
											this.d.dropdownContainer
												? (
														(this.dropdown = this._e2('div', {
															class: 'iti iti--container'
														})),
														this.dropdown.appendChild(this.m)
													)
												: this.k.appendChild(this.m)
										),
									this.d.hiddenInput
								)
							) {
								var c = this.d.hiddenInput,
									d = this.a.getAttribute('name')
								if (d) {
									var e = d.lastIndexOf('[')
									;-1 !== e &&
										(c = ''.concat(d.substr(0, e), '[').concat(c, ']'))
								}
								;(this.hiddenInput = this._e2('input', {
									type: 'hidden',
									name: c
								})), b.appendChild(this.hiddenInput)
							}
						}
					},
					{
						key: '_g',
						value: function(a, b, c) {
							for (var d = '', e = 0; e < a.length; e++) {
								var f = a[e],
									g = c ? '-preferred' : ''
								;(d += "<li class='iti__country "
									.concat(b, "' tabIndex='-1' id='iti-")
									.concat(this.id, '__item-')
									.concat(f.iso2)
									.concat(g, "' role='option' data-dial-code='")
									.concat(f.dialCode, "' data-country-code='")
									.concat(
										f.iso2,
										"' aria-selected='false'>"
									)), (d += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(
									f.iso2,
									"'></div></div>"
								)), (d += "<span class='iti__country-name'>".concat(
									f.name,
									'</span>'
								)), (d += "<span class='iti__dial-code'>+".concat(
									f.dialCode,
									'</span>'
								)), (d += '</li>')
							}
							this.m.insertAdjacentHTML('beforeend', d)
						}
					},
					{
						key: '_h',
						value: function() {
							var a = this.a.getAttribute('value'),
								b = this.a.value,
								c = a && '+' === a.charAt(0) && (!b || '+' !== b.charAt(0)),
								d = c ? a : b,
								e = this._5(d),
								f = this._w(d),
								g = this.d,
								h = g.initialCountry,
								i = g.nationalMode,
								j = g.autoHideDialCode,
								k = g.separateDialCode
							e && !f
								? this._v(d)
								: 'auto' !== h &&
									(
										h
											? this._z(h.toLowerCase())
											: e && f
												? this._z('us')
												: (
														(this.j = this.preferredCountries.length
															? this.preferredCountries[0].iso2
															: this.p[0].iso2),
														d || this._z(this.j)
													),
										d ||
											i ||
											j ||
											k ||
											(this.a.value = '+'.concat(this.s.dialCode))
									), d && this._u(d)
						}
					},
					{
						key: '_i',
						value: function() {
							this._j(), this.d.autoHideDialCode && this._l(), this.d
								.allowDropdown && this._i2(), this.hiddenInput && this._i0()
						}
					},
					{
						key: '_i0',
						value: function() {
							var a = this
							;(this._a14 = function() {
								a.hiddenInput.value = a.getNumber()
							}), this.a.form &&
								this.a.form.addEventListener('submit', this._a14)
						}
					},
					{
						key: '_i1',
						value: function() {
							for (var a = this.a; a && 'LABEL' !== a.tagName; )
								a = a.parentNode
							return a
						}
					},
					{
						key: '_i2',
						value: function() {
							var a = this
							this._a9 = function(b) {
								a.m.classList.contains('iti__hide')
									? a.a.focus()
									: b.preventDefault()
							}
							var b = this._i1()
							b &&
								b.addEventListener('click', this._a9), (this._a10 = function() {
								!a.m.classList.contains('iti__hide') ||
									a.a.disabled ||
									a.a.readOnly ||
									a._n()
							}), this.selectedFlag.addEventListener(
								'click',
								this._a10
							), (this._a11 = function(b) {
								a.m.classList.contains('iti__hide') &&
									-1 !==
										[
											'ArrowUp',
											'Up',
											'ArrowDown',
											'Down',
											' ',
											'Enter'
										].indexOf(b.key) &&
									(b.preventDefault(), b.stopPropagation(), a._n()), 'Tab' ===
									b.key && a._2()
							}), this.k.addEventListener('keydown', this._a11)
						}
					},
					{
						key: '_i3',
						value: function() {
							var a = this
							this.d.utilsScript && !window.intlTelInputUtils
								? window.intlTelInputGlobals.documentReady()
									? window.intlTelInputGlobals.loadUtils(this.d.utilsScript)
									: window.addEventListener('load', function() {
											window.intlTelInputGlobals.loadUtils(a.d.utilsScript)
										})
								: this.i0(), 'auto' === this.d.initialCountry
								? this._i4()
								: this.h()
						}
					},
					{
						key: '_i4',
						value: function() {
							window.intlTelInputGlobals.autoCountry
								? this.handleAutoCountry()
								: window.intlTelInputGlobals.startedLoadingAutoCountry ||
									(
										(window.intlTelInputGlobals.startedLoadingAutoCountry = !0),
										'function' == typeof this.d.geoIpLookup &&
											this.d.geoIpLookup(
												function(a) {
													;(window.intlTelInputGlobals.autoCountry = a.toLowerCase()), setTimeout(
														function() {
															return m('handleAutoCountry')
														}
													)
												},
												function() {
													return m('rejectAutoCountryPromise')
												}
											)
									)
						}
					},
					{
						key: '_j',
						value: function() {
							var a = this
							;(this._a12 = function() {
								a._v(a.a.value) && a._m2CountryChange()
							}), this.a.addEventListener(
								'keyup',
								this._a12
							), (this._a13 = function() {
								setTimeout(a._a12)
							}), this.a.addEventListener(
								'cut',
								this._a13
							), this.a.addEventListener('paste', this._a13)
						}
					},
					{
						key: '_j2',
						value: function(a) {
							var b = this.a.getAttribute('maxlength')
							return b && a.length > b ? a.substr(0, b) : a
						}
					},
					{
						key: '_l',
						value: function() {
							var a = this
							;(this._a8 = function() {
								a._l2()
							}), this.a.form &&
								this.a.form.addEventListener(
									'submit',
									this._a8
								), this.a.addEventListener('blur', this._a8)
						}
					},
					{
						key: '_l2',
						value: function() {
							if ('+' === this.a.value.charAt(0)) {
								var a = this._m(this.a.value)
								;(a && this.s.dialCode !== a) || (this.a.value = '')
							}
						}
					},
					{
						key: '_m',
						value: function(a) {
							return a.replace(/\D/g, '')
						}
					},
					{
						key: '_m2',
						value: function(a) {
							var b = document.createEvent('Event')
							b.initEvent(a, !0, !0), this.a.dispatchEvent(b)
						}
					},
					{
						key: '_n',
						value: function() {
							this.m.classList.remove(
								'iti__hide'
							), this.selectedFlag.setAttribute(
								'aria-expanded',
								'true'
							), this._o(), this.b &&
								(
									this._x(this.b, !1),
									this._3(this.b, !0)
								), this._p(), this.u.classList.add('iti__arrow--up'), this._m2(
								'open:countrydropdown'
							)
						}
					},
					{
						key: '_n2',
						value: function(a, b, c) {
							c && !a.classList.contains(b)
								? a.classList.add(b)
								: !c && a.classList.contains(b) && a.classList.remove(b)
						}
					},
					{
						key: '_o',
						value: function() {
							var a = this
							if (
								(
									this.d.dropdownContainer &&
										this.d.dropdownContainer.appendChild(this.dropdown),
									!this.g
								)
							) {
								var b = this.a.getBoundingClientRect(),
									c = window.pageYOffset || document.documentElement.scrollTop,
									d = b.top + c,
									e = this.m.offsetHeight,
									f = d + this.a.offsetHeight + e < c + window.innerHeight,
									g = d - e > c
								if (
									(
										this._n2(this.m, 'iti__country-list--dropup', !f && g),
										this.d.dropdownContainer
									)
								) {
									var h = !f && g ? 0 : this.a.offsetHeight
									;(this.dropdown.style.top = ''.concat(
										d + h,
										'px'
									)), (this.dropdown.style.left = ''.concat(
										b.left + document.body.scrollLeft,
										'px'
									)), (this._a4 = function() {
										return a._2()
									}), window.addEventListener('scroll', this._a4)
								}
							}
						}
					},
					{
						key: '_o2',
						value: function(a) {
							for (
								var b = a;
								b && b !== this.m && !b.classList.contains('iti__country');

							)
								b = b.parentNode
							return b === this.m ? null : b
						}
					},
					{
						key: '_p',
						value: function() {
							var a = this
							;(this._a0 = function(b) {
								var c = a._o2(b.target)
								c && a._x(c, !1)
							}), this.m.addEventListener(
								'mouseover',
								this._a0
							), (this._a1 = function(b) {
								var c = a._o2(b.target)
								c && a._1(c)
							}), this.m.addEventListener('click', this._a1)
							var b = !0
							;(this._a2 = function() {
								b || a._2(), (b = !1)
							}), document.documentElement.addEventListener('click', this._a2)
							var c = '',
								d = null
							;(this._a3 = function(b) {
								b.preventDefault(), 'ArrowUp' === b.key ||
								'Up' === b.key ||
								'ArrowDown' === b.key ||
								'Down' === b.key
									? a._q(b.key)
									: 'Enter' === b.key
										? a._r()
										: 'Escape' === b.key
											? a._2()
											: /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key) &&
												(
													d && clearTimeout(d),
													(c += b.key.toLowerCase()),
													a._s(c),
													(d = setTimeout(function() {
														c = ''
													}, 1e3))
												)
							}), document.addEventListener('keydown', this._a3)
						}
					},
					{
						key: '_q',
						value: function(a) {
							var b =
								'ArrowUp' === a || 'Up' === a
									? this.c.previousElementSibling
									: this.c.nextElementSibling
							b &&
								(
									b.classList.contains('iti__divider') &&
										(b =
											'ArrowUp' === a || 'Up' === a
												? b.previousElementSibling
												: b.nextElementSibling),
									this._x(b, !0)
								)
						}
					},
					{
						key: '_r',
						value: function() {
							this.c && this._1(this.c)
						}
					},
					{
						key: '_s',
						value: function(a) {
							for (var b = 0; b < this.p.length; b++)
								if (this._t(this.p[b].name, a)) {
									var c = this.m.querySelector(
										'#iti-'.concat(this.id, '__item-').concat(this.p[b].iso2)
									)
									this._x(c, !1), this._3(c, !0)
									break
								}
						}
					},
					{
						key: '_t',
						value: function(a, b) {
							return a.substr(0, b.length).toLowerCase() === b
						}
					},
					{
						key: '_u',
						value: function(a) {
							var b = a
							if (
								this.d.formatOnDisplay &&
								window.intlTelInputUtils &&
								this.s
							) {
								var c =
										!this.d.separateDialCode &&
										(this.d.nationalMode || '+' !== b.charAt(0)),
									d = intlTelInputUtils.numberFormat,
									e = d.NATIONAL,
									f = d.INTERNATIONAL,
									g = c ? e : f
								b = intlTelInputUtils.formatNumber(b, this.s.iso2, g)
							}
							;(b = this._7(b)), (this.a.value = b)
						}
					},
					{
						key: '_v',
						value: function(a) {
							var b = a,
								c = this.s.dialCode,
								d = '1' === c
							b &&
								this.d.nationalMode &&
								d &&
								'+' !== b.charAt(0) &&
								(
									'1' !== b.charAt(0) && (b = '1'.concat(b)),
									(b = '+'.concat(b))
								), this.d.separateDialCode &&
								c &&
								'+' !== b.charAt(0) &&
								(b = '+'.concat(c).concat(b))
							var e = this._5(b, !0),
								f = this._m(b),
								g = null
							if (e) {
								var h = this.q[this._m(e)],
									i = -1 !== h.indexOf(this.s.iso2) && f.length <= e.length - 1
								if (!('1' === c && this._w(f)) && !i)
									for (var j = 0; j < h.length; j++)
										if (h[j]) {
											g = h[j]
											break
										}
							} else
								'+' === b.charAt(0) && f.length
									? (g = '')
									: (b && '+' !== b) || (g = this.j)
							return null !== g && this._z(g)
						}
					},
					{
						key: '_w',
						value: function(a) {
							var b = this._m(a)
							if ('1' === b.charAt(0)) {
								var c = b.substr(1, 3)
								return -1 !== k.indexOf(c)
							}
							return !1
						}
					},
					{
						key: '_x',
						value: function(a, b) {
							var c = this.c
							c &&
								c.classList.remove(
									'iti__highlight'
								), (this.c = a), this.c.classList.add('iti__highlight'), b &&
								this.c.focus()
						}
					},
					{
						key: '_y',
						value: function(a, b, c) {
							for (var d = b ? e : this.p, f = 0; f < d.length; f++)
								if (d[f].iso2 === a) return d[f]
							if (c) return null
							throw new Error("No country data for '".concat(a, "'"))
						}
					},
					{
						key: '_z',
						value: function(a) {
							var b = this.s.iso2 ? this.s : {}
							;(this.s = a ? this._y(a, !1, !1) : {}), this.s.iso2 &&
								(this.j = this.s.iso2), this.l.setAttribute(
								'class',
								'iti__flag iti__'.concat(a)
							)
							var c = a
								? ''.concat(this.s.name, ': +').concat(this.s.dialCode)
								: 'Unknown'
							if (
								(
									this.selectedFlag.setAttribute('title', c),
									this.d.separateDialCode
								)
							) {
								var d = this.s.dialCode ? '+'.concat(this.s.dialCode) : ''
								this.t.innerHTML = d
								var e = this.selectedFlag.offsetWidth || this._z2()
								this.a.style.paddingLeft = ''.concat(e + 6, 'px')
							}
							if ((this._0(), this.d.allowDropdown)) {
								var f = this.b
								if (
									(
										f &&
											(
												f.classList.remove('iti__active'),
												f.setAttribute('aria-selected', 'false')
											),
										a
									)
								) {
									var g =
										this.m.querySelector(
											'#iti-'.concat(this.id, '__item-').concat(a, '-preferred')
										) ||
										this.m.querySelector(
											'#iti-'.concat(this.id, '__item-').concat(a)
										)
									g.setAttribute('aria-selected', 'true'), g.classList.add(
										'iti__active'
									), (this.b = g), this.selectedFlag.setAttribute(
										'aria-activedescendant',
										g.getAttribute('id')
									)
								}
							}
							return b.iso2 !== a
						}
					},
					{
						key: '_z2',
						value: function() {
							var a = this.a.parentNode.cloneNode()
							;(a.style.visibility = 'hidden'), document.body.appendChild(a)
							var b = this.k.cloneNode()
							a.appendChild(b)
							var c = this.selectedFlag.cloneNode(!0)
							b.appendChild(c)
							var d = c.offsetWidth
							return a.parentNode.removeChild(a), d
						}
					},
					{
						key: '_0',
						value: function() {
							var a =
								'aggressive' === this.d.autoPlaceholder ||
								(!this.e && 'polite' === this.d.autoPlaceholder)
							if (window.intlTelInputUtils && a) {
								var b =
										intlTelInputUtils.numberType[this.d.placeholderNumberType],
									c = this.s.iso2
										? intlTelInputUtils.getExampleNumber(
												this.s.iso2,
												this.d.nationalMode,
												b
											)
										: ''
								;(c = this._7(c)), 'function' ==
									typeof this.d.customPlaceholder &&
									(c = this.d.customPlaceholder(
										c,
										this.s
									)), this.a.setAttribute('placeholder', c)
							}
						}
					},
					{
						key: '_1',
						value: function(a) {
							var b = this._z(a.getAttribute('data-country-code'))
							this._2(), this._4(
								a.getAttribute('data-dial-code'),
								!0
							), this.a.focus()
							var c = this.a.value.length
							this.a.setSelectionRange(c, c), b && this._m2CountryChange()
						}
					},
					{
						key: '_2',
						value: function() {
							this.m.classList.add('iti__hide'), this.selectedFlag.setAttribute(
								'aria-expanded',
								'false'
							), this.u.classList.remove(
								'iti__arrow--up'
							), document.removeEventListener(
								'keydown',
								this._a3
							), document.documentElement.removeEventListener(
								'click',
								this._a2
							), this.m.removeEventListener(
								'mouseover',
								this._a0
							), this.m.removeEventListener('click', this._a1), this.d
								.dropdownContainer &&
								(
									this.g || window.removeEventListener('scroll', this._a4),
									this.dropdown.parentNode &&
										this.dropdown.parentNode.removeChild(this.dropdown)
								), this._m2('close:countrydropdown')
						}
					},
					{
						key: '_3',
						value: function(a, b) {
							var c = this.m,
								d = window.pageYOffset || document.documentElement.scrollTop,
								e = c.offsetHeight,
								f = c.getBoundingClientRect().top + d,
								g = f + e,
								h = a.offsetHeight,
								i = a.getBoundingClientRect().top + d,
								j = i + h,
								k = i - f + c.scrollTop,
								l = e / 2 - h / 2
							if (i < f) b && (k -= l), (c.scrollTop = k)
							else if (j > g) {
								b && (k += l)
								var m = e - h
								c.scrollTop = k - m
							}
						}
					},
					{
						key: '_4',
						value: function(a, b) {
							var c,
								d = this.a.value,
								e = '+'.concat(a)
							if ('+' === d.charAt(0)) {
								var f = this._5(d)
								c = f ? d.replace(f, e) : e
							} else {
								if (this.d.nationalMode || this.d.separateDialCode) return
								if (d) c = e + d
								else {
									if (!b && this.d.autoHideDialCode) return
									c = e
								}
							}
							this.a.value = c
						}
					},
					{
						key: '_5',
						value: function(a, b) {
							var c = ''
							if ('+' === a.charAt(0))
								for (var d = '', e = 0; e < a.length; e++) {
									var f = a.charAt(e)
									if (!isNaN(parseInt(f, 10))) {
										if (((d += f), b)) this.q[d] && (c = a.substr(0, e + 1))
										else if (this.dialCodes[d]) {
											c = a.substr(0, e + 1)
											break
										}
										if (d.length === this.countryCodeMaxLen) break
									}
								}
							return c
						}
					},
					{
						key: '_6',
						value: function() {
							var a = this.a.value.trim(),
								b = this.s.dialCode,
								c = this._m(a)
							return (
								(this.d.separateDialCode && '+' !== a.charAt(0) && b && c
									? '+'.concat(b)
									: '') + a
							)
						}
					},
					{
						key: '_7',
						value: function(a) {
							var b = a
							if (this.d.separateDialCode) {
								var c = this._5(b)
								if (c) {
									c = '+'.concat(this.s.dialCode)
									var d =
										' ' === b[c.length] || '-' === b[c.length]
											? c.length + 1
											: c.length
									b = b.substr(d)
								}
							}
							return this._j2(b)
						}
					},
					{
						key: '_m2CountryChange',
						value: function() {
							this._m2('countrychange')
						}
					},
					{
						key: 'handleAutoCountry',
						value: function() {
							'auto' === this.d.initialCountry &&
								(
									(this.j = window.intlTelInputGlobals.autoCountry),
									this.a.value || this.setCountry(this.j),
									this.h()
								)
						}
					},
					{
						key: 'handleUtils',
						value: function() {
							window.intlTelInputUtils &&
								(this.a.value && this._u(this.a.value), this._0()), this.i0()
						}
					},
					{
						key: 'destroy',
						value: function() {
							var a = this.a.form
							if (this.d.allowDropdown) {
								this._2(), this.selectedFlag.removeEventListener(
									'click',
									this._a10
								), this.k.removeEventListener('keydown', this._a11)
								var b = this._i1()
								b && b.removeEventListener('click', this._a9)
							}
							this.hiddenInput &&
								a &&
								a.removeEventListener('submit', this._a14), this.d
								.autoHideDialCode &&
								(
									a && a.removeEventListener('submit', this._a8),
									this.a.removeEventListener('blur', this._a8)
								), this.a.removeEventListener(
								'keyup',
								this._a12
							), this.a.removeEventListener(
								'cut',
								this._a13
							), this.a.removeEventListener(
								'paste',
								this._a13
							), this.a.removeAttribute('data-intl-tel-input-id')
							var c = this.a.parentNode
							c.parentNode.insertBefore(this.a, c), c.parentNode.removeChild(
								c
							), delete window.intlTelInputGlobals.instances[this.id]
						}
					},
					{
						key: 'getExtension',
						value: function() {
							return window.intlTelInputUtils
								? intlTelInputUtils.getExtension(this._6(), this.s.iso2)
								: ''
						}
					},
					{
						key: 'getNumber',
						value: function(a) {
							if (window.intlTelInputUtils) {
								var b = this.s.iso2
								return intlTelInputUtils.formatNumber(this._6(), b, a)
							}
							return ''
						}
					},
					{
						key: 'getNumberType',
						value: function() {
							return window.intlTelInputUtils
								? intlTelInputUtils.getNumberType(this._6(), this.s.iso2)
								: -99
						}
					},
					{
						key: 'getSelectedCountryData',
						value: function() {
							return this.s
						}
					},
					{
						key: 'getValidationError',
						value: function() {
							if (window.intlTelInputUtils) {
								var a = this.s.iso2
								return intlTelInputUtils.getValidationError(this._6(), a)
							}
							return -99
						}
					},
					{
						key: 'isValidNumber',
						value: function() {
							var a = this._6().trim(),
								b = this.d.nationalMode ? this.s.iso2 : ''
							return window.intlTelInputUtils
								? intlTelInputUtils.isValidNumber(a, b)
								: null
						}
					},
					{
						key: 'setCountry',
						value: function(a) {
							var b = a.toLowerCase()
							this.l.classList.contains('iti__'.concat(b)) ||
								(
									this._z(b),
									this._4(this.s.dialCode, !1),
									this._m2CountryChange()
								)
						}
					},
					{
						key: 'setNumber',
						value: function(a) {
							var b = this._v(a)
							this._u(a), b && this._m2CountryChange()
						}
					},
					{
						key: 'setPlaceholderNumberType',
						value: function(a) {
							;(this.d.placeholderNumberType = a), this._0()
						}
					}
				]), c
			})()
		h.getCountryData = function() {
			return e
		}
		var o = function(a, b, c) {
			var d = document.createElement('script')
			;(d.onload = function() {
				m('handleUtils'), b && b()
			}), (d.onerror = function() {
				m('rejectUtilsScriptPromise'), c && c()
			}), (d.className =
				'iti-load-utils'), (d.async = !0), (d.src = a), document.body.appendChild(
				d
			)
		}
		return (h.loadUtils = function(a) {
			if (
				!window.intlTelInputUtils &&
				!window.intlTelInputGlobals.startedLoadingUtilsScript
			) {
				if (
					(
						(window.intlTelInputGlobals.startedLoadingUtilsScript = !0),
						'undefined' != typeof Promise
					)
				)
					return new Promise(function(b, c) {
						return o(a, b, c)
					})
				o(a)
			}
			return null
		}), (h.defaults = j), (h.version = '17.0.19'), function(a, b) {
			var c = new n(a, b)
			return c._init(), a.setAttribute('data-intl-tel-input-id', c.id), (window.intlTelInputGlobals.instances[c.id] = c), c
		}
	})()
})

/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/kadflo/assets/libraries/imask.js?1744282596127825";s:6:"source";s:49:"/local/templates/kadflo/assets/libraries/imask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(this, (function (exports) { 'use strict';

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }

  /** Checks if value is object */
  function isObject(obj) {
    var _obj$constructor;
    return typeof obj === 'object' && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === 'Object';
  }
  function pick(obj, keys) {
    if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
    return Object.entries(obj).reduce((acc, _ref) => {
      let [k, v] = _ref;
      if (keys(v, k)) acc[k] = v;
      return acc;
    }, {});
  }

  /** Direction */
  const DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
  };

  /** Direction */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;
      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;
      default:
        return direction;
    }
  }

  /** Escapes regular expression control chars */
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  }

  // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
  function objectIncludes(b, a) {
    if (a === b) return true;
    const arrA = Array.isArray(a),
      arrB = Array.isArray(b);
    let i;
    if (arrA && arrB) {
      if (a.length != b.length) return false;
      for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
      return true;
    }
    if (arrA != arrB) return false;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      const dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      const regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      const keys = Object.keys(a);
      // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
    }
    return false;
  }

  /** Selection range */

  /** Provides details of changing input */
  class ActionDetails {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */

    constructor(opts) {
      Object.assign(this, opts);

      // double check if left part was changed (autofilling, other non-standard input triggers)
      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
      if (this.insertedCount) {
        // double check right part
        while (this.value.slice(this.cursorPos) !== this.oldValue.slice(this.oldSelection.end)) {
          if (this.value.length - this.cursorPos < this.oldValue.length - this.oldSelection.end) ++this.oldSelection.end;else ++this.cursorPos;
        }
      }
    }

    /** Start changing position */
    get startChangePos() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }

    /** Inserted symbols count */
    get insertedCount() {
      return this.cursorPos - this.startChangePos;
    }

    /** Inserted symbols */
    get inserted() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }

    /** Removed symbols count */
    get removedCount() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos ||
      // for Delete
      this.oldValue.length - this.value.length, 0);
    }

    /** Removed symbols */
    get removed() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }

    /** Unchanged head symbols */
    get head() {
      return this.value.substring(0, this.startChangePos);
    }

    /** Unchanged tail symbols */
    get tail() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }

    /** Remove direction */
    get removeDirection() {
      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;

      // align right if delete at right
      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
      // if not range removed (event with backspace)
      this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }

  /** Applies mask on element */
  function IMask(el, opts) {
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
  }

  // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
  // export function maskedClass(mask: string): typeof MaskedPattern;
  // export function maskedClass(mask: DateConstructor): typeof MaskedDate;
  // export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
  // export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
  // export function maskedClass(mask: MaskedDate): typeof MaskedDate;
  // export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
  // export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
  // export function maskedClass(mask: MaskedRange): typeof MaskedRange;
  // export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
  // export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
  // export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
  // export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
  // export function maskedClass(mask: Masked): typeof Masked;
  // export function maskedClass(mask: typeof Masked): typeof Masked;
  // export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
  // export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
  // export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
  // export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
  // export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
  // export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
  // export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
  // export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
  // export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
  // export function maskedClass(mask: RegExp): typeof MaskedRegExp;
  // export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;

  /** Get Masked class by mask type */
  function maskedClass(mask) /* TODO */{
    if (mask == null) throw new Error('mask property should be defined');
    if (mask instanceof RegExp) return IMask.MaskedRegExp;
    if (isString(mask)) return IMask.MaskedPattern;
    if (mask === Date) return IMask.MaskedDate;
    if (mask === Number) return IMask.MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
    if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
    if (IMask.Masked && mask instanceof IMask.Masked) return mask.constructor;
    if (mask instanceof Function) return IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    return IMask.Masked;
  }
  function normalizeOpts(opts) {
    if (!opts) throw new Error('Options in not defined');
    if (IMask.Masked) {
      if (opts.prototype instanceof IMask.Masked) return {
        mask: opts
      };

      /*
        handle cases like:
        1) opts = Masked
        2) opts = { mask: Masked, ...instanceOpts }
      */
      const {
        mask = undefined,
        ...instanceOpts
      } = opts instanceof IMask.Masked ? {
        mask: opts
      } : isObject(opts) && opts.mask instanceof IMask.Masked ? opts : {};
      if (mask) {
        const _mask = mask.mask;
        return {
          ...pick(mask, (_, k) => !k.startsWith('_')),
          mask: mask.constructor,
          _mask,
          ...instanceOpts
        };
      }
    }
    if (!isObject(opts)) return {
      mask: opts
    };
    return {
      ...opts
    };
  }

  // TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754

  // From masked
  // export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
  // // From masked class
  // export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
  // // From mask opts
  // export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
  // export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;

  /** Creates new {@link Masked} depending on mask type */
  function createMask(opts) {
    if (IMask.Masked && opts instanceof IMask.Masked) return opts;
    const nOpts = normalizeOpts(opts);
    const MaskedClass = maskedClass(nOpts.mask);
    if (!MaskedClass) throw new Error("Masked class is not found for provided mask " + nOpts.mask + ", appropriate module needs to be imported manually before creating mask.");
    if (nOpts.mask === MaskedClass) delete nOpts.mask;
    if (nOpts._mask) {
      nOpts.mask = nOpts._mask;
      delete nOpts._mask;
    }
    return new MaskedClass(nOpts);
  }
  IMask.createMask = createMask;

  /**  Generic element API to use with mask */
  class MaskElement {
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get selectionStart() {
      let start;
      try {
        start = this._unsafeSelectionStart;
      } catch {}
      return start != null ? start : this.value.length;
    }

    /** Safely returns selection end */
    get selectionEnd() {
      let end;
      try {
        end = this._unsafeSelectionEnd;
      } catch {}
      return end != null ? end : this.value.length;
    }

    /** Safely sets element selection */
    select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
      try {
        this._unsafeSelect(start, end);
      } catch {}
    }

    /** */
    get isActive() {
      return false;
    }
    /** */

    /** */

    /** */
  }
  IMask.MaskElement = MaskElement;

  const KEY_Z = 90;
  const KEY_Y = 89;

  /** Bridge between HTMLElement and {@link Masked} */
  class HTMLMaskElement extends MaskElement {
    /** HTMLElement to use mask on */

    constructor(input) {
      super();
      this.input = input;
      this._onKeydown = this._onKeydown.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onBeforeinput = this._onBeforeinput.bind(this);
      this._onCompositionEnd = this._onCompositionEnd.bind(this);
    }
    get rootElement() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
    }

    /** Is element in focus */
    get isActive() {
      return this.input === this.rootElement.activeElement;
    }

    /** Binds HTMLElement events to mask internal events */
    bindEvents(handlers) {
      this.input.addEventListener('keydown', this._onKeydown);
      this.input.addEventListener('input', this._onInput);
      this.input.addEventListener('beforeinput', this._onBeforeinput);
      this.input.addEventListener('compositionend', this._onCompositionEnd);
      this.input.addEventListener('drop', handlers.drop);
      this.input.addEventListener('click', handlers.click);
      this.input.addEventListener('focus', handlers.focus);
      this.input.addEventListener('blur', handlers.commit);
      this._handlers = handlers;
    }
    _onKeydown(e) {
      if (this._handlers.redo && (e.keyCode === KEY_Z && e.shiftKey && (e.metaKey || e.ctrlKey) || e.keyCode === KEY_Y && e.ctrlKey)) {
        e.preventDefault();
        return this._handlers.redo(e);
      }
      if (this._handlers.undo && e.keyCode === KEY_Z && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        return this._handlers.undo(e);
      }
      if (!e.isComposing) this._handlers.selectionChange(e);
    }
    _onBeforeinput(e) {
      if (e.inputType === 'historyUndo' && this._handlers.undo) {
        e.preventDefault();
        return this._handlers.undo(e);
      }
      if (e.inputType === 'historyRedo' && this._handlers.redo) {
        e.preventDefault();
        return this._handlers.redo(e);
      }
    }
    _onCompositionEnd(e) {
      this._handlers.input(e);
    }
    _onInput(e) {
      if (!e.isComposing) this._handlers.input(e);
    }

    /** Unbinds HTMLElement events to mask internal events */
    unbindEvents() {
      this.input.removeEventListener('keydown', this._onKeydown);
      this.input.removeEventListener('input', this._onInput);
      this.input.removeEventListener('beforeinput', this._onBeforeinput);
      this.input.removeEventListener('compositionend', this._onCompositionEnd);
      this.input.removeEventListener('drop', this._handlers.drop);
      this.input.removeEventListener('click', this._handlers.click);
      this.input.removeEventListener('focus', this._handlers.focus);
      this.input.removeEventListener('blur', this._handlers.commit);
      this._handlers = {};
    }
  }
  IMask.HTMLMaskElement = HTMLMaskElement;

  /** Bridge between InputElement and {@link Masked} */
  class HTMLInputMaskElement extends HTMLMaskElement {
    /** InputElement to use mask on */

    constructor(input) {
      super(input);
      this.input = input;
    }

    /** Returns InputElement selection start */
    get _unsafeSelectionStart() {
      return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
    }

    /** Returns InputElement selection end */
    get _unsafeSelectionEnd() {
      return this.input.selectionEnd;
    }

    /** Sets InputElement selection */
    _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    get value() {
      return this.input.value;
    }
    set value(value) {
      this.input.value = value;
    }
  }
  IMask.HTMLMaskElement = HTMLMaskElement;

  class HTMLContenteditableMaskElement extends HTMLMaskElement {
    /** Returns HTMLElement selection start */
    get _unsafeSelectionStart() {
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      const anchorOffset = selection && selection.anchorOffset;
      const focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }

    /** Returns HTMLElement selection end */
    get _unsafeSelectionEnd() {
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      const anchorOffset = selection && selection.anchorOffset;
      const focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }

    /** Sets HTMLElement selection */
    _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      const range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    /** HTMLElement value */
    get value() {
      return this.input.textContent || '';
    }
    set value(value) {
      this.input.textContent = value;
    }
  }
  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

  class InputHistory {
    constructor() {
      this.states = [];
      this.currentIndex = 0;
    }
    get currentState() {
      return this.states[this.currentIndex];
    }
    get isEmpty() {
      return this.states.length === 0;
    }
    push(state) {
      // if current index points before the last element then remove the future
      if (this.currentIndex < this.states.length - 1) this.states.length = this.currentIndex + 1;
      this.states.push(state);
      if (this.states.length > InputHistory.MAX_LENGTH) this.states.shift();
      this.currentIndex = this.states.length - 1;
    }
    go(steps) {
      this.currentIndex = Math.min(Math.max(this.currentIndex + steps, 0), this.states.length - 1);
      return this.currentState;
    }
    undo() {
      return this.go(-1);
    }
    redo() {
      return this.go(+1);
    }
    clear() {
      this.states.length = 0;
      this.currentIndex = 0;
    }
  }
  InputHistory.MAX_LENGTH = 100;

  /** Listens to element events and controls changes between element and {@link Masked} */
  class InputMask {
    /**
      View element
    */

    /** Internal {@link Masked} model */

    constructor(el, opts) {
      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLInputMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._rawInputValue = '';
      this.history = new InputHistory();
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this._onUndo = this._onUndo.bind(this);
      this._onRedo = this._onRedo.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
      this._bindEvents();

      // refresh
      this.updateValue();
      this._onChange();
    }
    maskEquals(mask) {
      var _this$masked;
      return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
    }

    /** Masked */
    get mask() {
      return this.masked.mask;
    }
    set mask(mask) {
      if (this.maskEquals(mask)) return;
      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        // TODO "any" no idea
        this.masked.updateOptions({
          mask
        });
        return;
      }
      const masked = mask instanceof IMask.Masked ? mask : createMask({
        mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }

    /** Raw value */
    get value() {
      return this._value;
    }
    set value(str) {
      if (this.value === str) return;
      this.masked.value = str;
      this.updateControl('auto');
    }

    /** Unmasked value */
    get unmaskedValue() {
      return this._unmaskedValue;
    }
    set unmaskedValue(str) {
      if (this.unmaskedValue === str) return;
      this.masked.unmaskedValue = str;
      this.updateControl('auto');
    }

    /** Raw input value */
    get rawInputValue() {
      return this._rawInputValue;
    }
    set rawInputValue(str) {
      if (this.rawInputValue === str) return;
      this.masked.rawInputValue = str;
      this.updateControl();
      this.alignCursor();
    }

    /** Typed unmasked value */
    get typedValue() {
      return this.masked.typedValue;
    }
    set typedValue(val) {
      if (this.masked.typedValueEquals(val)) return;
      this.masked.typedValue = val;
      this.updateControl('auto');
    }

    /** Display value */
    get displayValue() {
      return this.masked.displayValue;
    }

    /** Starts listening to element events */
    _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange,
        undo: this._onUndo,
        redo: this._onRedo
      });
    }

    /** Stops listening to element events */
    _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }

    /** Fires custom event */
    _fireEvent(ev, e) {
      const listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(l => l(e));
    }

    /** Current selection start */
    get selectionStart() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }

    /** Current cursor position */
    get cursorPos() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    }
    set cursorPos(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);
      this._saveSelection();
    }

    /** Stores current selection */
    _saveSelection( /* ev */
    ) {
      if (this.displayValue !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }
      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }

    /** Syncronizes model value from view */
    updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
      this._unmaskedValue = this.masked.unmaskedValue;
      this._rawInputValue = this.masked.rawInputValue;
    }

    /** Syncronizes view from model value, fires change events */
    updateControl(cursorPos) {
      const newUnmaskedValue = this.masked.unmaskedValue;
      const newValue = this.masked.value;
      const newRawInputValue = this.masked.rawInputValue;
      const newDisplayValue = this.displayValue;
      const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue || this._rawInputValue !== newRawInputValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      this._rawInputValue = newRawInputValue;
      if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
      if (cursorPos === 'auto') this.alignCursor();else if (cursorPos != null) this.cursorPos = cursorPos;
      if (isChanged) this._fireChangeEvents();
      if (!this._historyChanging && (isChanged || this.history.isEmpty)) this.history.push({
        unmaskedValue: newUnmaskedValue,
        selection: {
          start: this.selectionStart,
          end: this.cursorPos
        }
      });
    }

    /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
    updateOptions(opts) {
      const {
        mask,
        ...restOpts
      } = opts; // TODO types, yes, mask is optional

      const updateMask = !this.maskEquals(mask);
      const updateOpts = this.masked.optionsIsChanged(restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts); // TODO

      if (updateMask || updateOpts) this.updateControl();
    }

    /** Updates cursor */
    updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos;

      // also queue change cursor for mobile browsers
      this._delayUpdateCursor(cursorPos);
    }

    /** Delays cursor update to support mobile browsers */
    _delayUpdateCursor(cursorPos) {
      this._abortUpdateCursor();
      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(() => {
        if (!this.el) return; // if was destroyed
        this.cursorPos = this._changingCursorPos;
        this._abortUpdateCursor();
      }, 10);
    }

    /** Fires custom events */
    _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);
      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }

    /** Aborts delayed cursor update */
    _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }

    /** Aligns cursor to nearest available position */
    alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
    }

    /** Aligns cursor only if selection is empty */
    alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
      this.alignCursor();
    }

    /** Adds listener on custom event */
    on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];
      this._listeners[ev].push(handler);
      return this;
    }

    /** Removes custom event listener */
    off(ev, handler) {
      if (!this._listeners[ev]) return this;
      if (!handler) {
        delete this._listeners[ev];
        return this;
      }
      const hIndex = this._listeners[ev].indexOf(handler);
      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }

    /** Handles view input event */
    _onInput(e) {
      this._inputEvent = e;
      this._abortUpdateCursor();
      const details = new ActionDetails({
        // new state
        value: this.el.value,
        cursorPos: this.cursorPos,
        // old state
        oldValue: this.displayValue,
        oldSelection: this._selection
      });
      const oldRawValue = this.masked.rawInputValue;
      const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
        input: true,
        raw: true
      }).offset;

      // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
      const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
      this.updateControl(cursorPos);
      delete this._inputEvent;
    }

    /** Handles view change event and commits model value */
    _onChange() {
      if (this.displayValue !== this.el.value) this.updateValue();
      this.masked.doCommit();
      this.updateControl();
      this._saveSelection();
    }

    /** Handles view drop event, prevents by default */
    _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    /** Restore last selection on focus */
    _onFocus(ev) {
      this.alignCursorFriendly();
    }

    /** Restore last selection on focus */
    _onClick(ev) {
      this.alignCursorFriendly();
    }
    _onUndo() {
      this._applyHistoryState(this.history.undo());
    }
    _onRedo() {
      this._applyHistoryState(this.history.redo());
    }
    _applyHistoryState(state) {
      if (!state) return;
      this._historyChanging = true;
      this.unmaskedValue = state.unmaskedValue;
      this.el.select(state.selection.start, state.selection.end);
      this._saveSelection();
      this._historyChanging = false;
    }

    /** Unbind view events and removes element reference */
    destroy() {
      this._unbindEvents();
      this._listeners.length = 0;
      delete this.el;
    }
  }
  IMask.InputMask = InputMask;

  /** Provides details of changing model value */
  class ChangeDetails {
    /** Inserted symbols */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */

    /** Can skip chars */

    static normalize(prep) {
      return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
    }
    constructor(details) {
      Object.assign(this, {
        inserted: '',
        rawInserted: '',
        tailShift: 0,
        skip: false
      }, details);
    }

    /** Aggregate changes */
    aggregate(details) {
      this.inserted += details.inserted;
      this.rawInserted += details.rawInserted;
      this.tailShift += details.tailShift;
      this.skip = this.skip || details.skip;
      return this;
    }

    /** Total offset considering all changes */
    get offset() {
      return this.tailShift + this.inserted.length;
    }
    get consumed() {
      return Boolean(this.rawInserted) || this.skip;
    }
    equals(details) {
      return this.inserted === details.inserted && this.tailShift === details.tailShift && this.rawInserted === details.rawInserted && this.skip === details.skip;
    }
  }
  IMask.ChangeDetails = ChangeDetails;

  /** Provides details of continuous extracted tail */
  class ContinuousTailDetails {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */

    constructor(value, from, stop) {
      if (value === void 0) {
        value = '';
      }
      if (from === void 0) {
        from = 0;
      }
      this.value = value;
      this.from = from;
      this.stop = stop;
    }
    toString() {
      return this.value;
    }
    extend(tail) {
      this.value += String(tail);
    }
    appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
    get state() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    }
    set state(state) {
      Object.assign(this, state);
    }
    unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      const shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
    shift() {
      if (!this.value.length) return '';
      const shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }

  /** Append flags */

  /** Extract flags */

  // see https://github.com/microsoft/TypeScript/issues/6223

  /** Provides common masking stuff */
  class Masked {
    /** */

    /** */

    /** Transforms value before mask processing */

    /** Transforms each char before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing at the end of editing */

    /** Format typed value to string */

    /** Parse string to get typed value */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      this._value = '';
      this._update({
        ...Masked.DEFAULTS,
        ...opts
      });
      this._initialized = true;
    }

    /** Sets and applies new options */
    updateOptions(opts) {
      if (!this.optionsIsChanged(opts)) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }

    /** Sets new options */
    _update(opts) {
      Object.assign(this, opts);
    }

    /** Mask state */
    get state() {
      return {
        _value: this.value,
        _rawInputValue: this.rawInputValue
      };
    }
    set state(state) {
      this._value = state._value;
    }

    /** Resets value */
    reset() {
      this._value = '';
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this.resolve(value, {
        input: true
      });
    }

    /** Resolve new value */
    resolve(value, flags) {
      if (flags === void 0) {
        flags = {
          input: true
        };
      }
      this.reset();
      this.append(value, flags, '');
      this.doCommit();
    }
    get unmaskedValue() {
      return this.value;
    }
    set unmaskedValue(value) {
      this.resolve(value, {});
    }
    get typedValue() {
      return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
    }
    set typedValue(value) {
      if (this.format) {
        this.value = this.format(value, this);
      } else {
        this.unmaskedValue = String(value);
      }
    }

    /** Value that includes raw user input */
    get rawInputValue() {
      return this.extractInput(0, this.displayValue.length, {
        raw: true
      });
    }
    set rawInputValue(value) {
      this.resolve(value, {
        raw: true
      });
    }
    get displayValue() {
      return this.value;
    }
    get isComplete() {
      return true;
    }
    get isFilled() {
      return this.isComplete;
    }

    /** Finds nearest input position in direction */
    nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      return Math.min(this.displayValue.length, toPos - fromPos);
    }

    /** Extracts value in range considering flags */
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      return this.displayValue.slice(fromPos, toPos);
    }

    /** Extracts tail in range */
    extractTail(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }

    /** Appends tail */
    appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }

    /** Appends char */
    _appendCharRaw(ch, flags) {
      if (!ch) return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }

    /** Appends char */
    _appendChar(ch, flags, checkTail) {
      if (flags === void 0) {
        flags = {};
      }
      const consistentState = this.state;
      let details;
      [ch, details] = this.doPrepareChar(ch, flags);
      if (ch) {
        details = details.aggregate(this._appendCharRaw(ch, flags));

        // TODO handle `skip`?

        // try `autofix` lookahead
        if (!details.rawInserted && this.autofix === 'pad') {
          const noFixState = this.state;
          this.state = consistentState;
          let fixDetails = this.pad(flags);
          const chDetails = this._appendCharRaw(ch, flags);
          fixDetails = fixDetails.aggregate(chDetails);

          // if fix was applied or
          // if details are equal use skip restoring state optimization
          if (chDetails.rawInserted || fixDetails.equals(details)) {
            details = fixDetails;
          } else {
            this.state = noFixState;
          }
        }
      }
      if (details.inserted) {
        let consistentTail;
        let appended = this.doValidate(flags) !== false;
        if (appended && checkTail != null) {
          // validation ok, check tail
          const beforeTailState = this.state;
          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            for (let i = 0; i < details.rawInserted.length; ++i) {
              checkTail.unshift(this.displayValue.length - details.tailShift);
            }
          }
          let tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted.length === checkTail.toString().length;

          // not ok, try shift
          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            for (let i = 0; i < details.rawInserted.length; ++i) {
              checkTail.shift();
            }
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted.length === checkTail.toString().length;
          }

          // if ok, rollback state after tail
          if (appended && tailDetails.inserted) this.state = beforeTailState;
        }

        // revert all if something went wrong
        if (!appended) {
          details = new ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }
      return details;
    }

    /** Appends optional placeholder at the end */
    _appendPlaceholder() {
      return new ChangeDetails();
    }

    /** Appends optional eager placeholder at the end */
    _appendEager() {
      return new ChangeDetails();
    }

    /** Appends symbols considering flags */
    append(str, flags, tail) {
      if (!isString(str)) throw new Error('value should be string');
      const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags != null && flags.tail) flags._beforeTailState = this.state;
      let details;
      [str, details] = this.doPrepare(str, flags);
      for (let ci = 0; ci < str.length; ++ci) {
        const d = this._appendChar(str[ci], flags, checkTail);
        if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
        details.aggregate(d);
      }
      if ((this.eager === true || this.eager === 'append') && flags != null && flags.input && str) {
        details.aggregate(this._appendEager());
      }

      // append tail but aggregate only tailShift
      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift;
        // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }
      return details;
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
      return new ChangeDetails();
    }

    /** Calls function and reapplies current value */
    withValueRefresh(fn) {
      if (this._refreshing || !this._initialized) return fn();
      this._refreshing = true;
      const rawInput = this.rawInputValue;
      const value = this.value;
      const ret = fn();
      this.rawInputValue = rawInput;
      // append lost trailing chars at the end
      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.displayValue.length), {}, '');
        this.doCommit();
      }
      delete this._refreshing;
      return ret;
    }
    runIsolated(fn) {
      if (this._isolated || !this._initialized) return fn(this);
      this._isolated = true;
      const state = this.state;
      const ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    doSkipInvalid(ch, flags, checkTail) {
      return Boolean(this.skipInvalid);
    }

    /** Prepares string before mask processing */
    doPrepare(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      return ChangeDetails.normalize(this.prepare ? this.prepare(str, this, flags) : str);
    }

    /** Prepares each char before mask processing */
    doPrepareChar(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      return ChangeDetails.normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
    }

    /** Validates if value is acceptable */
    doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }

    /** Does additional processing at the end of editing */
    doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    splice(start, deleteCount, inserted, removeDirection, flags) {
      if (inserted === void 0) {
        inserted = '';
      }
      if (removeDirection === void 0) {
        removeDirection = DIRECTION.NONE;
      }
      if (flags === void 0) {
        flags = {
          input: true
        };
      }
      const tailPos = start + deleteCount;
      const tail = this.extractTail(tailPos);
      const eagerRemove = this.eager === true || this.eager === 'remove';
      let oldRawValue;
      if (eagerRemove) {
        removeDirection = forceDirection(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }
      let startChangePos = start;
      const details = new ChangeDetails();

      // if it is just deletion without insertion
      if (removeDirection !== DIRECTION.NONE) {
        startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);

        // adjust tailShift if start was aligned
        details.tailShift = startChangePos - start;
      }
      details.aggregate(this.remove(startChangePos));
      if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === DIRECTION.FORCE_LEFT) {
          let valLength;
          while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
            details.aggregate(new ChangeDetails({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }
      return details.aggregate(this.append(inserted, flags, tail));
    }
    maskEquals(mask) {
      return this.mask === mask;
    }
    optionsIsChanged(opts) {
      return !objectIncludes(this, opts);
    }
    typedValueEquals(value) {
      const tval = this.typedValue;
      return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
    }
    pad(flags) {
      return new ChangeDetails();
    }
  }
  Masked.DEFAULTS = {
    skipInvalid: true
  };
  Masked.EMPTY_VALUES = [undefined, null, ''];
  IMask.Masked = Masked;

  class ChunksTailDetails {
    /** */

    constructor(chunks, from) {
      if (chunks === void 0) {
        chunks = [];
      }
      if (from === void 0) {
        from = 0;
      }
      this.chunks = chunks;
      this.from = from;
    }
    toString() {
      return this.chunks.map(String).join('');
    }
    extend(tailChunk) {
      if (!String(tailChunk)) return;
      tailChunk = isString(tailChunk) ? new ContinuousTailDetails(String(tailChunk)) : tailChunk;
      const lastChunk = this.chunks[this.chunks.length - 1];
      const extendLast = lastChunk && (
      // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
      // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;
      if (tailChunk instanceof ContinuousTailDetails) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          let firstTailChunk;
          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        }

        // if tail chunk still has value
        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
    appendTo(masked) {
      if (!(masked instanceof IMask.MaskedPattern)) {
        const tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }
      const details = new ChangeDetails();
      for (let ci = 0; ci < this.chunks.length; ++ci) {
        const chunk = this.chunks[ci];
        const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
        const stop = chunk.stop;
        let chunkBlock;
        if (stop != null && (
        // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails ||
          // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }
          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }
        if (chunkBlock) {
          const tailDetails = chunkBlock.appendTail(chunk);
          details.aggregate(tailDetails);

          // get not inserted chars
          const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
    get state() {
      return {
        chunks: this.chunks.map(c => c.state),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    }
    set state(state) {
      const {
        chunks,
        ...props
      } = state;
      Object.assign(this, props);
      this.chunks = chunks.map(cstate => {
        const chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails();
        chunk.state = cstate;
        return chunk;
      });
    }
    unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      let ci = 0;
      while (ci < this.chunks.length) {
        const chunk = this.chunks[ci];
        const shiftChar = chunk.unshift(chunkShiftPos);
        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }
        if (shiftChar) return shiftChar;
      }
      return '';
    }
    shift() {
      if (!this.chunks.length) return '';
      let ci = this.chunks.length - 1;
      while (0 <= ci) {
        const chunk = this.chunks[ci];
        const shiftChar = chunk.shift();
        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          --ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }
        if (shiftChar) return shiftChar;
      }
      return '';
    }
  }

  class PatternCursor {
    constructor(masked, pos) {
      this.masked = masked;
      this._log = [];
      const {
        offset,
        index
      } = masked._mapPosToBlock(pos) || (pos < 0 ?
      // first
      {
        index: 0,
        offset: 0
      } :
      // last
      {
        index: this.masked._blocks.length,
        offset: 0
      });
      this.offset = offset;
      this.index = index;
      this.ok = false;
    }
    get block() {
      return this.masked._blocks[this.index];
    }
    get pos() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    }
    set state(s) {
      Object.assign(this, s);
    }
    pushState() {
      this._log.push(this.state);
    }
    popState() {
      const s = this._log.pop();
      if (s) this.state = s;
      return s;
    }
    bindBlock() {
      if (this.block) return;
      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }
      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
      }
    }
    _pushLeft(fn) {
      this.pushState();
      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0) {
        var _this$block;
        if (fn()) return this.ok = true;
      }
      return this.ok = false;
    }
    _pushRight(fn) {
      this.pushState();
      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn()) return this.ok = true;
      }
      return this.ok = false;
    }
    pushLeftBeforeFilled() {
      return this._pushLeft(() => {
        if (this.block.isFixed || !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_LEFT);
        if (this.offset !== 0) return true;
      });
    }
    pushLeftBeforeInput() {
      // cases:
      // filled input: 00|
      // optional empty input: 00[]|
      // nested block: XX<[]>|
      return this._pushLeft(() => {
        if (this.block.isFixed) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
        return true;
      });
    }
    pushLeftBeforeRequired() {
      return this._pushLeft(() => {
        if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
        return true;
      });
    }
    pushRightBeforeFilled() {
      return this._pushRight(() => {
        if (this.block.isFixed || !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_RIGHT);
        if (this.offset !== this.block.value.length) return true;
      });
    }
    pushRightBeforeInput() {
      return this._pushRight(() => {
        if (this.block.isFixed) return;

        // const o = this.offset;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
        // HACK cases like (STILL DOES NOT WORK FOR NESTED)
        // aa|X
        // aa<X|[]>X_    - this will not work
        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
        return true;
      });
    }
    pushRightBeforeRequired() {
      return this._pushRight(() => {
        if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

        // TODO check |[*]XX_
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
        return true;
      });
    }
  }

  class PatternFixedDefinition {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      Object.assign(this, opts);
      this._value = '';
      this.isFixed = true;
    }
    get value() {
      return this._value;
    }
    get unmaskedValue() {
      return this.isUnmasking ? this.value : '';
    }
    get rawInputValue() {
      return this._isRawInput ? this.value : '';
    }
    get displayValue() {
      return this.value;
    }
    reset() {
      this._isRawInput = false;
      this._value = '';
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this._value.length;
      }
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new ChangeDetails();
    }
    nearestInputPos(cursorPos, direction) {
      if (direction === void 0) {
        direction = DIRECTION.NONE;
      }
      const minPos = 0;
      const maxPos = this._value.length;
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;
        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this._value.length;
      }
      return this._isRawInput ? toPos - fromPos : 0;
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this._value.length;
      }
      if (flags === void 0) {
        flags = {};
      }
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
    get isComplete() {
      return true;
    }
    get isFilled() {
      return Boolean(this._value);
    }
    _appendChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      if (this.isFilled) return new ChangeDetails();
      const appendEager = this.eager === true || this.eager === 'append';
      const appended = this.char === ch;
      const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
      const details = new ChangeDetails({
        inserted: this.char,
        rawInserted: isResolved ? this.char : ''
      });
      this._value = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
    _appendEager() {
      return this._appendChar(this.char, {
        tail: true
      });
    }
    _appendPlaceholder() {
      const details = new ChangeDetails();
      if (this.isFilled) return details;
      this._value = details.inserted = this.char;
      return details;
    }
    extractTail() {
      return new ContinuousTailDetails('');
    }
    appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
    append(str, flags, tail) {
      const details = this._appendChar(str[0], flags);
      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }
      return details;
    }
    doCommit() {}
    get state() {
      return {
        _value: this._value,
        _rawInputValue: this.rawInputValue
      };
    }
    set state(state) {
      this._value = state._value;
      this._isRawInput = Boolean(state._rawInputValue);
    }
    pad(flags) {
      return this._appendPlaceholder();
    }
  }

  class PatternInputDefinition {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      const {
        parent,
        isOptional,
        placeholderChar,
        displayChar,
        lazy,
        eager,
        ...maskOpts
      } = opts;
      this.masked = createMask(maskOpts);
      Object.assign(this, {
        parent,
        isOptional,
        placeholderChar,
        displayChar,
        lazy,
        eager
      });
    }
    reset() {
      this.isFilled = false;
      this.masked.reset();
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.value.length;
      }
      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }
      return new ChangeDetails();
    }
    get value() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
    get unmaskedValue() {
      return this.masked.unmaskedValue;
    }
    get rawInputValue() {
      return this.masked.rawInputValue;
    }
    get displayValue() {
      return this.masked.value && this.displayChar || this.value;
    }
    get isComplete() {
      return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      if (this.isFilled) return new ChangeDetails();
      const state = this.masked.state;
      // simulate input
      let details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
      if (details.inserted && this.doValidate(flags) === false) {
        details = new ChangeDetails();
        this.masked.state = state;
      }
      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }
      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
    append(str, flags, tail) {
      // TODO probably should be done via _appendChar
      return this.masked.append(str, this.currentMaskFlags(flags), tail);
    }
    _appendPlaceholder() {
      if (this.isFilled || this.isOptional) return new ChangeDetails();
      this.isFilled = true;
      return new ChangeDetails({
        inserted: this.placeholderChar
      });
    }
    _appendEager() {
      return new ChangeDetails();
    }
    extractTail(fromPos, toPos) {
      return this.masked.extractTail(fromPos, toPos);
    }
    appendTail(tail) {
      return this.masked.appendTail(tail);
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.value.length;
      }
      return this.masked.extractInput(fromPos, toPos, flags);
    }
    nearestInputPos(cursorPos, direction) {
      if (direction === void 0) {
        direction = DIRECTION.NONE;
      }
      const minPos = 0;
      const maxPos = this.value.length;
      const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;
        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.value.length;
      }
      return this.value.slice(fromPos, toPos).length;
    }
    doValidate(flags) {
      return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
    }
    doCommit() {
      this.masked.doCommit();
    }
    get state() {
      return {
        _value: this.value,
        _rawInputValue: this.rawInputValue,
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    }
    set state(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
    currentMaskFlags(flags) {
      var _flags$_beforeTailSta;
      return {
        ...flags,
        _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
      };
    }
    pad(flags) {
      return new ChangeDetails();
    }
  }
  PatternInputDefinition.DEFAULT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };

  /** Masking by RegExp */
  class MaskedRegExp extends Masked {
    /** */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const mask = opts.mask;
      if (mask) opts.validate = value => value.search(mask) >= 0;
      super._update(opts);
    }
  }
  IMask.MaskedRegExp = MaskedRegExp;

  /** Pattern mask */
  class MaskedPattern extends Masked {
    /** */

    /** */

    /** Single char for empty input */

    /** Single char for filled input */

    /** Show placeholder only when needed */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    constructor(opts) {
      super({
        ...MaskedPattern.DEFAULTS,
        ...opts,
        definitions: Object.assign({}, PatternInputDefinition.DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
      });
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      super._update(opts);
      this._rebuildMask();
    }
    _rebuildMask() {
      const defs = this.definitions;
      this._blocks = [];
      this.exposeBlock = undefined;
      this._stops = [];
      this._maskedBlocks = {};
      const pattern = this.mask;
      if (!pattern || !defs) return;
      let unmaskingBlock = false;
      let optionalBlock = false;
      for (let i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          const p = pattern.slice(i);
          const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
          // order by key length
          bNames.sort((a, b) => b.length - a.length);
          // use block name with max length
          const bName = bNames[0];
          if (bName) {
            const {
              expose,
              repeat,
              ...bOpts
            } = normalizeOpts(this.blocks[bName]); // TODO type Opts<Arg & Extra>
            const blockOpts = {
              lazy: this.lazy,
              eager: this.eager,
              placeholderChar: this.placeholderChar,
              displayChar: this.displayChar,
              overwrite: this.overwrite,
              autofix: this.autofix,
              ...bOpts,
              repeat,
              parent: this
            };
            const maskedBlock = repeat != null ? new IMask.RepeatBlock(blockOpts /* TODO */) : createMask(blockOpts);
            if (maskedBlock) {
              this._blocks.push(maskedBlock);
              if (expose) this.exposeBlock = maskedBlock;

              // store block index
              if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
              this._maskedBlocks[bName].push(this._blocks.length - 1);
            }
            i += bName.length - 1;
            continue;
          }
        }
        let char = pattern[i];
        let isInput = (char in defs);
        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }
        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }
        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          isInput = false;
        }
        const def = isInput ? new PatternInputDefinition({
          isOptional: optionalBlock,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          displayChar: this.displayChar,
          ...normalizeOpts(defs[char]),
          parent: this
        }) : new PatternFixedDefinition({
          char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });
        this._blocks.push(def);
      }
    }
    get state() {
      return {
        ...super.state,
        _blocks: this._blocks.map(b => b.state)
      };
    }
    set state(state) {
      if (!state) {
        this.reset();
        return;
      }
      const {
        _blocks,
        ...maskedState
      } = state;
      this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
      super.state = maskedState;
    }
    reset() {
      super.reset();
      this._blocks.forEach(b => b.reset());
    }
    get isComplete() {
      return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
    }
    get isFilled() {
      return this._blocks.every(b => b.isFilled);
    }
    get isFixed() {
      return this._blocks.every(b => b.isFixed);
    }
    get isOptional() {
      return this._blocks.every(b => b.isOptional);
    }
    doCommit() {
      this._blocks.forEach(b => b.doCommit());
      super.doCommit();
    }
    get unmaskedValue() {
      return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
    }
    set unmaskedValue(unmaskedValue) {
      if (this.exposeBlock) {
        const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
        this.exposeBlock.unmaskedValue = unmaskedValue;
        this.appendTail(tail);
        this.doCommit();
      } else super.unmaskedValue = unmaskedValue;
    }
    get value() {
      return this.exposeBlock ? this.exposeBlock.value :
      // TODO return _value when not in change?
      this._blocks.reduce((str, b) => str += b.value, '');
    }
    set value(value) {
      if (this.exposeBlock) {
        const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
        this.exposeBlock.value = value;
        this.appendTail(tail);
        this.doCommit();
      } else super.value = value;
    }
    get typedValue() {
      return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
    }
    set typedValue(value) {
      if (this.exposeBlock) {
        const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
        this.exposeBlock.typedValue = value;
        this.appendTail(tail);
        this.doCommit();
      } else super.typedValue = value;
    }
    get displayValue() {
      return this._blocks.reduce((str, b) => str += b.displayValue, '');
    }
    appendTail(tail) {
      return super.appendTail(tail).aggregate(this._appendPlaceholder());
    }
    _appendEager() {
      var _this$_mapPosToBlock;
      const details = new ChangeDetails();
      let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details;

      // TODO test if it works for nested pattern masks
      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
      for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        const d = this._blocks[bi]._appendEager();
        if (!d.inserted) break;
        details.aggregate(d);
      }
      return details;
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const blockIter = this._mapPosToBlock(this.displayValue.length);
      const details = new ChangeDetails();
      if (!blockIter) return details;
      for (let bi = blockIter.index, block; block = this._blocks[bi]; ++bi) {
        var _flags$_beforeTailSta;
        const blockDetails = block._appendChar(ch, {
          ...flags,
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
        });
        details.aggregate(blockDetails);
        if (blockDetails.consumed) break; // go next char
      }
      return details;
    }
    extractTail(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const chunkTail = new ChunksTailDetails();
      if (fromPos === toPos) return chunkTail;
      this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
        const blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = this._findStopBefore(bi);
        blockChunk.from = this._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });
      return chunkTail;
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      if (flags === void 0) {
        flags = {};
      }
      if (fromPos === toPos) return '';
      let input = '';
      this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
        input += b.extractInput(fromPos, toPos, flags);
      });
      return input;
    }
    _findStopBefore(blockIndex) {
      let stopBefore;
      for (let si = 0; si < this._stops.length; ++si) {
        const stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }
      return stopBefore;
    }

    /** Appends placeholder depending on laziness */
    _appendPlaceholder(toBlockIndex) {
      const details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null) return details;
      const startBlockIter = this._mapPosToBlock(this.displayValue.length);
      if (!startBlockIter) return details;
      const startBlockIndex = startBlockIter.index;
      const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
        if (!b.lazy || toBlockIndex != null) {
          var _blocks2;
          details.aggregate(b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length));
        }
      });
      return details;
    }

    /** Finds block in pos */
    _mapPosToBlock(pos) {
      let accVal = '';
      for (let bi = 0; bi < this._blocks.length; ++bi) {
        const block = this._blocks[bi];
        const blockStartPos = accVal.length;
        accVal += block.displayValue;
        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
    }
    _forEachBlocksInRange(fromPos, toPos, fn) {
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const fromBlockIter = this._mapPosToBlock(fromPos);
      if (fromBlockIter) {
        const toBlockIter = this._mapPosToBlock(toPos);
        // process first block
        const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        const fromBlockStartPos = fromBlockIter.offset;
        const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
          }

          // process last block
          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const removeDetails = super.remove(fromPos, toPos);
      this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });
      return removeDetails;
    }
    nearestInputPos(cursorPos, direction) {
      if (direction === void 0) {
        direction = DIRECTION.NONE;
      }
      if (!this._blocks.length) return 0;
      const cursor = new PatternCursor(this, cursorPos);
      if (direction === DIRECTION.NONE) {
        // -------------------------------------------------
        // NONE should only go out from fixed to the right!
        // -------------------------------------------------
        if (cursor.pushRightBeforeInput()) return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput()) return cursor.pos;
        return this.displayValue.length;
      }

      // FORCE is only about a|* otherwise is 0
      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        // try to break fast when *|a
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
          cursor.popState();
        }

        // forward flow
        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled();

        // backward flow
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
        }
        if (cursor.ok) return cursor.pos;
        if (direction === DIRECTION.FORCE_LEFT) return 0;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return 0;
      }
      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        // forward flow
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled()) return cursor.pos;
        if (direction === DIRECTION.FORCE_RIGHT) return this.displayValue.length;

        // backward flow
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
      }
      return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      let total = 0;
      this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
        total += b.totalInputPositions(bFromPos, bToPos);
      });
      return total;
    }

    /** Get block by name */
    maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }

    /** Get all blocks by name */
    maskedBlocks(name) {
      const indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(gi => this._blocks[gi]);
    }
    pad(flags) {
      const details = new ChangeDetails();
      this._forEachBlocksInRange(0, this.displayValue.length, b => details.aggregate(b.pad(flags)));
      return details;
    }
  }
  MaskedPattern.DEFAULTS = {
    ...Masked.DEFAULTS,
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;
  IMask.MaskedPattern = MaskedPattern;

  /** Pattern which accepts ranges */
  class MaskedRange extends MaskedPattern {
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    get _matchFrom() {
      return this.maxLength - String(this.from).length;
    }
    constructor(opts) {
      super(opts); // mask will be created in _update
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const {
        to = this.to || 0,
        from = this.from || 0,
        maxLength = this.maxLength || 0,
        autofix = this.autofix,
        ...patternOpts
      } = opts;
      this.to = to;
      this.from = from;
      this.maxLength = Math.max(String(to).length, maxLength);
      this.autofix = autofix;
      const fromStr = String(this.from).padStart(this.maxLength, '0');
      const toStr = String(this.to).padStart(this.maxLength, '0');
      let sameCharsCount = 0;
      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
      patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
      super._update(patternOpts);
    }
    get isComplete() {
      return super.isComplete && Boolean(this.value);
    }
    boundaries(str) {
      let minstr = '';
      let maxstr = '';
      const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }
      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    doPrepareChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      let details;
      [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
      if (!ch) details.skip = !this.isComplete;
      return [ch, details];
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      if (!this.autofix || this.value.length + 1 > this.maxLength) return super._appendCharRaw(ch, flags);
      const fromStr = String(this.from).padStart(this.maxLength, '0');
      const toStr = String(this.to).padStart(this.maxLength, '0');
      const [minstr, maxstr] = this.boundaries(this.value + ch);
      if (Number(maxstr) < this.from) return super._appendCharRaw(fromStr[this.value.length], flags);
      if (Number(minstr) > this.to) {
        if (!flags.tail && this.autofix === 'pad' && this.value.length + 1 < this.maxLength) {
          return super._appendCharRaw(fromStr[this.value.length], flags).aggregate(this._appendCharRaw(ch, flags));
        }
        return super._appendCharRaw(toStr[this.value.length], flags);
      }
      return super._appendCharRaw(ch, flags);
    }
    doValidate(flags) {
      const str = this.value;
      const firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
      const [minstr, maxstr] = this.boundaries(str);
      return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
    }
    pad(flags) {
      const details = new ChangeDetails();
      if (this.value.length === this.maxLength) return details;
      const value = this.value;
      const padLength = this.maxLength - this.value.length;
      if (padLength) {
        this.reset();
        for (let i = 0; i < padLength; ++i) {
          details.aggregate(super._appendCharRaw('0', flags));
        }

        // append tail
        value.split('').forEach(ch => this._appendCharRaw(ch));
      }
      return details;
    }
  }
  IMask.MaskedRange = MaskedRange;

  const DefaultPattern = 'd{.}`m{.}`Y';

  // Make format and parse required when pattern is provided

  /** Date mask */
  class MaskedDate extends MaskedPattern {
    static extractPatternOptions(opts) {
      const {
        mask,
        pattern,
        ...patternOpts
      } = opts;
      return {
        ...patternOpts,
        mask: isString(mask) ? mask : pattern
      };
    }

    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** Format typed value to string */

    /** Parse string to get typed value */

    constructor(opts) {
      super(MaskedDate.extractPatternOptions({
        ...MaskedDate.DEFAULTS,
        ...opts
      }));
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const {
        mask,
        pattern,
        blocks,
        ...patternOpts
      } = {
        ...MaskedDate.DEFAULTS,
        ...opts
      };
      const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
      // adjust year block
      if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
      if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
      if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
        patternBlocks.m.from = opts.min.getMonth() + 1;
        patternBlocks.m.to = opts.max.getMonth() + 1;
        if (patternBlocks.m.from === patternBlocks.m.to) {
          patternBlocks.d.from = opts.min.getDate();
          patternBlocks.d.to = opts.max.getDate();
        }
      }
      Object.assign(patternBlocks, this.blocks, blocks);
      super._update({
        ...patternOpts,
        mask: isString(mask) ? mask : pattern,
        blocks: patternBlocks
      });
    }
    doValidate(flags) {
      const date = this.date;
      return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }

    /** Checks if date is exists */
    isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }

    /** Parsed Date */
    get date() {
      return this.typedValue;
    }
    set date(date) {
      this.typedValue = date;
    }
    get typedValue() {
      return this.isComplete ? super.typedValue : null;
    }
    set typedValue(value) {
      super.typedValue = value;
    }
    maskEquals(mask) {
      return mask === Date || super.maskEquals(mask);
    }
    optionsIsChanged(opts) {
      return super.optionsIsChanged(MaskedDate.extractPatternOptions(opts));
    }
  }
  MaskedDate.GET_DEFAULT_BLOCKS = () => ({
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  });
  MaskedDate.DEFAULTS = {
    ...MaskedPattern.DEFAULTS,
    mask: Date,
    pattern: DefaultPattern,
    format: (date, masked) => {
      if (!date) return '';
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: (str, masked) => {
      const [day, month, year] = str.split('.').map(Number);
      return new Date(year, month - 1, day);
    }
  };
  IMask.MaskedDate = MaskedDate;

  /** Dynamic mask for choosing appropriate mask in run-time */
  class MaskedDynamic extends Masked {
    constructor(opts) {
      super({
        ...MaskedDynamic.DEFAULTS,
        ...opts
      });
      this.currentMask = undefined;
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      super._update(opts);
      if ('mask' in opts) {
        this.exposeMask = undefined;
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
          const {
            expose,
            ...maskOpts
          } = normalizeOpts(m);
          const masked = createMask({
            overwrite: this._overwrite,
            eager: this._eager,
            skipInvalid: this._skipInvalid,
            ...maskOpts
          });
          if (expose) this.exposeMask = masked;
          return masked;
        }) : [];

        // this.currentMask = this.doDispatch(''); // probably not needed but lets see
      }
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const details = this._applyDispatch(ch, flags);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
      }
      return details;
    }
    _applyDispatch(appended, flags, tail) {
      if (appended === void 0) {
        appended = '';
      }
      if (flags === void 0) {
        flags = {};
      }
      if (tail === void 0) {
        tail = '';
      }
      const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      const inputValue = this.rawInputValue;
      const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
      const tailValue = inputValue.slice(insertValue.length);
      const prevMask = this.currentMask;
      const details = new ChangeDetails();
      const prevMaskState = prevMask == null ? void 0 : prevMask.state;

      // clone flags to prevent overwriting `_beforeTailState`
      this.currentMask = this.doDispatch(appended, {
        ...flags
      }, tail);

      // restore state after dispatch
      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();
          if (insertValue) {
            this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = this.currentMask.value.length - prevValueBeforeTail.length;
          }
          if (tailValue) {
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else if (prevMaskState) {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }
      return details;
    }
    _appendPlaceholder() {
      const details = this._applyDispatch();
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }
      return details;
    }
    _appendEager() {
      const details = this._applyDispatch();
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }
      return details;
    }
    appendTail(tail) {
      const details = new ChangeDetails();
      if (tail) details.aggregate(this._applyDispatch('', {}, tail));
      return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
    }
    currentMaskFlags(flags) {
      var _flags$_beforeTailSta, _flags$_beforeTailSta2;
      return {
        ...flags,
        _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
      };
    }
    doDispatch(appended, flags, tail) {
      if (flags === void 0) {
        flags = {};
      }
      if (tail === void 0) {
        tail = '';
      }
      return this.dispatch(appended, this, flags, tail);
    }
    doValidate(flags) {
      return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
    doPrepare(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      let [s, details] = super.doPrepare(str, flags);
      if (this.currentMask) {
        let currentDetails;
        [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
        details = details.aggregate(currentDetails);
      }
      return [s, details];
    }
    doPrepareChar(str, flags) {
      if (flags === void 0) {
        flags = {};
      }
      let [s, details] = super.doPrepareChar(str, flags);
      if (this.currentMask) {
        let currentDetails;
        [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
        details = details.aggregate(currentDetails);
      }
      return [s, details];
    }
    reset() {
      var _this$currentMask;
      (_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
      this.compiledMasks.forEach(m => m.reset());
    }
    get value() {
      return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
    }
    set value(value) {
      if (this.exposeMask) {
        this.exposeMask.value = value;
        this.currentMask = this.exposeMask;
        this._applyDispatch();
      } else super.value = value;
    }
    get unmaskedValue() {
      return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
    }
    set unmaskedValue(unmaskedValue) {
      if (this.exposeMask) {
        this.exposeMask.unmaskedValue = unmaskedValue;
        this.currentMask = this.exposeMask;
        this._applyDispatch();
      } else super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
      return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
    }
    set typedValue(typedValue) {
      if (this.exposeMask) {
        this.exposeMask.typedValue = typedValue;
        this.currentMask = this.exposeMask;
        this._applyDispatch();
        return;
      }
      let unmaskedValue = String(typedValue);

      // double check it
      if (this.currentMask) {
        this.currentMask.typedValue = typedValue;
        unmaskedValue = this.currentMask.unmaskedValue;
      }
      this.unmaskedValue = unmaskedValue;
    }
    get displayValue() {
      return this.currentMask ? this.currentMask.displayValue : '';
    }
    get isComplete() {
      var _this$currentMask2;
      return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
    }
    get isFilled() {
      var _this$currentMask3;
      return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
    }
    remove(fromPos, toPos) {
      const details = new ChangeDetails();
      if (this.currentMask) {
        details.aggregate(this.currentMask.remove(fromPos, toPos))
        // update with dispatch
        .aggregate(this._applyDispatch());
      }
      return details;
    }
    get state() {
      var _this$currentMask4;
      return {
        ...super.state,
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(m => m.state),
        currentMaskRef: this.currentMask,
        currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
      };
    }
    set state(state) {
      const {
        compiledMasks,
        currentMaskRef,
        currentMask,
        ...maskedState
      } = state;
      if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }
      super.state = maskedState;
    }
    extractInput(fromPos, toPos, flags) {
      return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
    }
    extractTail(fromPos, toPos) {
      return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
    }
    doCommit() {
      if (this.currentMask) this.currentMask.doCommit();
      super.doCommit();
    }
    nearestInputPos(cursorPos, direction) {
      return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
    }
    get overwrite() {
      return this.currentMask ? this.currentMask.overwrite : this._overwrite;
    }
    set overwrite(overwrite) {
      this._overwrite = overwrite;
    }
    get eager() {
      return this.currentMask ? this.currentMask.eager : this._eager;
    }
    set eager(eager) {
      this._eager = eager;
    }
    get skipInvalid() {
      return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
    }
    set skipInvalid(skipInvalid) {
      this._skipInvalid = skipInvalid;
    }
    get autofix() {
      return this.currentMask ? this.currentMask.autofix : this._autofix;
    }
    set autofix(autofix) {
      this._autofix = autofix;
    }
    maskEquals(mask) {
      return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
        if (!mask[mi]) return;
        const {
          mask: oldMask,
          ...restOpts
        } = mask[mi];
        return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
      }) : super.maskEquals(mask);
    }
    typedValueEquals(value) {
      var _this$currentMask5;
      return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
    }
  }
  /** Currently chosen mask */
  /** Currently chosen mask */
  /** Compliled {@link Masked} options */
  /** Chooses {@link Masked} depending on input value */
  MaskedDynamic.DEFAULTS = {
    ...Masked.DEFAULTS,
    dispatch: (appended, masked, flags, tail) => {
      if (!masked.compiledMasks.length) return;
      const inputValue = masked.rawInputValue;

      // simulate input
      const inputs = masked.compiledMasks.map((m, index) => {
        const isCurrent = masked.currentMask === m;
        const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT);
        if (m.rawInputValue !== inputValue) {
          m.reset();
          m.append(inputValue, {
            raw: true
          });
        } else if (!isCurrent) {
          m.remove(startInputPos);
        }
        m.append(appended, masked.currentMaskFlags(flags));
        m.appendTail(tail);
        return {
          index,
          weight: m.rawInputValue.length,
          totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, DIRECTION.FORCE_LEFT)))
        };
      });

      // pop masks with longer values first
      inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;

  /** Pattern which validates enum values */
  class MaskedEnum extends MaskedPattern {
    constructor(opts) {
      super({
        ...MaskedEnum.DEFAULTS,
        ...opts
      }); // mask will be created in _update
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      const {
        enum: enum_,
        ...eopts
      } = opts;
      if (enum_) {
        const lengths = enum_.map(e => e.length);
        const requiredLength = Math.min(...lengths);
        const optionalLength = Math.max(...lengths) - requiredLength;
        eopts.mask = '*'.repeat(requiredLength);
        if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
        this.enum = enum_;
      }
      super._update(eopts);
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const matchFrom = Math.min(this.nearestInputPos(0, DIRECTION.FORCE_RIGHT), this.value.length);
      const matches = this.enum.filter(e => this.matchValue(e, this.unmaskedValue + ch, matchFrom));
      if (matches.length) {
        if (matches.length === 1) {
          this._forEachBlocksInRange(0, this.value.length, (b, bi) => {
            const mch = matches[0][bi];
            if (bi >= this.value.length || mch === b.value) return;
            b.reset();
            b._appendChar(mch, flags);
          });
        }
        const d = super._appendCharRaw(matches[0][this.value.length], flags);
        if (matches.length === 1) {
          matches[0].slice(this.unmaskedValue.length).split('').forEach(mch => d.aggregate(super._appendCharRaw(mch)));
        }
        return d;
      }
      return new ChangeDetails({
        skip: !this.isComplete
      });
    }
    extractTail(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      // just drop tail
      return new ContinuousTailDetails('', fromPos);
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      if (fromPos === toPos) return new ChangeDetails();
      const matchFrom = Math.min(super.nearestInputPos(0, DIRECTION.FORCE_RIGHT), this.value.length);
      let pos;
      for (pos = fromPos; pos >= 0; --pos) {
        const matches = this.enum.filter(e => this.matchValue(e, this.value.slice(matchFrom, pos), matchFrom));
        if (matches.length > 1) break;
      }
      const details = super.remove(pos, toPos);
      details.tailShift += pos - fromPos;
      return details;
    }
    get isComplete() {
      return this.enum.indexOf(this.value) >= 0;
    }
  }
  /** Match enum value */
  MaskedEnum.DEFAULTS = {
    ...MaskedPattern.DEFAULTS,
    matchValue: (estr, istr, matchFrom) => estr.indexOf(istr, matchFrom) === matchFrom
  };
  IMask.MaskedEnum = MaskedEnum;

  /** Masking by custom Function */
  class MaskedFunction extends Masked {
    /** */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      super._update({
        ...opts,
        validate: opts.mask
      });
    }
  }
  IMask.MaskedFunction = MaskedFunction;

  var _MaskedNumber;
  /** Number mask */
  class MaskedNumber extends Masked {
    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */

    /** Enable characters overwriting */

    /** */

    /** */

    /** */

    /** Format typed value to string */

    /** Parse string to get typed value */

    constructor(opts) {
      super({
        ...MaskedNumber.DEFAULTS,
        ...opts
      });
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      super._update(opts);
      this._updateRegExps();
    }
    _updateRegExps() {
      const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      const mid = '\\d*';
      const end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : '') + '$';
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join('') + "]", 'g');
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
    }
    _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      const parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    doPrepareChar(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
      /*
        radix should be mapped when
        1) input is done from keyboard = flags.input && flags.raw
        2) unmasked value is set = !flags.input && !flags.raw
        and should not be mapped when
        1) value is set = flags.input && !flags.raw
        2) raw value is set = !flags.input && flags.raw
      */
      flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
      if (ch && !prepCh) details.skip = true;
      if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
      return [prepCh, details];
    }
    _separatorsCount(to, extendOnSeparators) {
      if (extendOnSeparators === void 0) {
        extendOnSeparators = false;
      }
      let count = 0;
      for (let pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }
      return count;
    }
    _separatorsCountFromSlice(slice) {
      if (slice === void 0) {
        slice = this._value;
      }
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    extractInput(fromPos, toPos, flags) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
      return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
      this._value = this._removeThousandsSeparators(this.value);
      const oldValue = this._value;
      this._value += ch;
      const num = this.number;
      let accepted = !isNaN(num);
      let skip = false;
      if (accepted) {
        let fixedNum;
        if (this.min != null && this.min < 0 && this.number < this.min) fixedNum = this.min;
        if (this.max != null && this.max > 0 && this.number > this.max) fixedNum = this.max;
        if (fixedNum != null) {
          if (this.autofix) {
            this._value = this.format(fixedNum, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
            skip || (skip = oldValue === this._value && !flags.tail); // if not changed on tail it's still ok to proceed
          } else {
            accepted = false;
          }
        }
        accepted && (accepted = Boolean(this._value.match(this._numberRegExp)));
      }
      let appendDetails;
      if (!accepted) {
        this._value = oldValue;
        appendDetails = new ChangeDetails();
      } else {
        appendDetails = new ChangeDetails({
          inserted: this._value.slice(oldValue.length),
          rawInserted: skip ? '' : ch,
          skip
        });
      }
      this._value = this._insertThousandsSeparators(this._value);
      const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      return appendDetails;
    }
    _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        const searchFrom = pos - this.thousandsSeparator.length + 1;
        const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }
      return -1;
    }
    _adjustRangeWithSeparators(from, to) {
      const separatorAroundFromPos = this._findSeparatorAround(from);
      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
      const separatorAroundToPos = this._findSeparatorAround(to);
      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
      const valueBeforePos = this.value.slice(0, fromPos);
      const valueAfterPos = this.value.slice(toPos);
      const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
      const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;
      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          {
            const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
            if (separatorAtLeftPos >= 0) {
              const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }
            break;
          }
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          {
            const separatorAtRightPos = this._findSeparatorAround(cursorPos);
            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }
      return cursorPos;
    }
    doCommit() {
      if (this.value) {
        const number = this.number;
        let validnum = number;

        // check bounds
        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
        let formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }
      super.doCommit();
    }
    _normalizeZeros(value) {
      const parts = this._removeThousandsSeparators(value).split(this.radix);

      // remove leading zeros
      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
      // add leading zero
      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
        if (!parts[1].length) parts.length = 1; // remove fractional
      }
      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    _padFractionalZeros(value) {
      if (!value) return value;
      const parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    doSkipInvalid(ch, flags, checkTail) {
      if (flags === void 0) {
        flags = {};
      }
      const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
      return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
    }
    get unmaskedValue() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
    }
    set unmaskedValue(unmaskedValue) {
      super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
      return this.parse(this.unmaskedValue, this);
    }
    set typedValue(n) {
      this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
    }

    /** Parsed Number */
    get number() {
      return this.typedValue;
    }
    set number(number) {
      this.typedValue = number;
    }
    get allowNegative() {
      return this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
    get allowPositive() {
      return this.min != null && this.min > 0 || this.max != null && this.max > 0;
    }
    typedValueEquals(value) {
      // handle  0 -> '' case (typed = 0 even if value = '')
      // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
      return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
    }
  }
  _MaskedNumber = MaskedNumber;
  MaskedNumber.UNMASKED_RADIX = '.';
  MaskedNumber.EMPTY_VALUES = [...Masked.EMPTY_VALUES, 0];
  MaskedNumber.DEFAULTS = {
    ...Masked.DEFAULTS,
    mask: Number,
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: [_MaskedNumber.UNMASKED_RADIX],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: n => n.toLocaleString('en-US', {
      useGrouping: false,
      maximumFractionDigits: 20
    })
  };
  IMask.MaskedNumber = MaskedNumber;

  /** Mask pipe source and destination types */
  const PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
  };
  /** Creates new pipe function depending on mask type, source and destination options */
  function createPipe(arg, from, to) {
    if (from === void 0) {
      from = PIPE_TYPE.MASKED;
    }
    if (to === void 0) {
      to = PIPE_TYPE.MASKED;
    }
    const masked = createMask(arg);
    return value => masked.runIsolated(m => {
      m[from] = value;
      return m[to];
    });
  }

  /** Pipes value through mask depending on mask type, source and destination options */
  function pipe(value, mask, from, to) {
    return createPipe(mask, from, to)(value);
  }
  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;

  /** Pattern mask */
  class RepeatBlock extends MaskedPattern {
    get repeatFrom() {
      var _ref;
      return (_ref = Array.isArray(this.repeat) ? this.repeat[0] : this.repeat === Infinity ? 0 : this.repeat) != null ? _ref : 0;
    }
    get repeatTo() {
      var _ref2;
      return (_ref2 = Array.isArray(this.repeat) ? this.repeat[1] : this.repeat) != null ? _ref2 : Infinity;
    }
    constructor(opts) {
      super(opts);
    }
    updateOptions(opts) {
      super.updateOptions(opts);
    }
    _update(opts) {
      var _ref3, _ref4, _this$_blocks;
      const {
        repeat,
        ...blockOpts
      } = normalizeOpts(opts); // TODO type
      this._blockOpts = Object.assign({}, this._blockOpts, blockOpts);
      const block = createMask(this._blockOpts);
      this.repeat = (_ref3 = (_ref4 = repeat != null ? repeat : block.repeat) != null ? _ref4 : this.repeat) != null ? _ref3 : Infinity; // TODO type

      super._update({
        mask: 'm'.repeat(Math.max(this.repeatTo === Infinity && ((_this$_blocks = this._blocks) == null ? void 0 : _this$_blocks.length) || 0, this.repeatFrom)),
        blocks: {
          m: block
        },
        eager: block.eager,
        overwrite: block.overwrite,
        skipInvalid: block.skipInvalid,
        lazy: block.lazy,
        placeholderChar: block.placeholderChar,
        displayChar: block.displayChar
      });
    }
    _allocateBlock(bi) {
      if (bi < this._blocks.length) return this._blocks[bi];
      if (this.repeatTo === Infinity || this._blocks.length < this.repeatTo) {
        this._blocks.push(createMask(this._blockOpts));
        this.mask += 'm';
        return this._blocks[this._blocks.length - 1];
      }
    }
    _appendCharRaw(ch, flags) {
      if (flags === void 0) {
        flags = {};
      }
      const details = new ChangeDetails();
      for (let bi = (_this$_mapPosToBlock$ = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index) != null ? _this$_mapPosToBlock$ : Math.max(this._blocks.length - 1, 0), block, allocated;
      // try to get a block or
      // try to allocate a new block if not allocated already
      block = (_this$_blocks$bi = this._blocks[bi]) != null ? _this$_blocks$bi : allocated = !allocated && this._allocateBlock(bi); ++bi) {
        var _this$_mapPosToBlock$, _this$_mapPosToBlock, _this$_blocks$bi, _flags$_beforeTailSta;
        const blockDetails = block._appendChar(ch, {
          ...flags,
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
        });
        if (blockDetails.skip && allocated) {
          // remove the last allocated block and break
          this._blocks.pop();
          this.mask = this.mask.slice(1);
          break;
        }
        details.aggregate(blockDetails);
        if (blockDetails.consumed) break; // go next char
      }
      return details;
    }
    _trimEmptyTail(fromPos, toPos) {
      var _this$_mapPosToBlock2, _this$_mapPosToBlock3;
      if (fromPos === void 0) {
        fromPos = 0;
      }
      const firstBlockIndex = Math.max(((_this$_mapPosToBlock2 = this._mapPosToBlock(fromPos)) == null ? void 0 : _this$_mapPosToBlock2.index) || 0, this.repeatFrom, 0);
      let lastBlockIndex;
      if (toPos != null) lastBlockIndex = (_this$_mapPosToBlock3 = this._mapPosToBlock(toPos)) == null ? void 0 : _this$_mapPosToBlock3.index;
      if (lastBlockIndex == null) lastBlockIndex = this._blocks.length - 1;
      let removeCount = 0;
      for (let blockIndex = lastBlockIndex; firstBlockIndex <= blockIndex; --blockIndex, ++removeCount) {
        if (this._blocks[blockIndex].unmaskedValue) break;
      }
      if (removeCount) {
        this._blocks.splice(lastBlockIndex - removeCount + 1, removeCount);
        this.mask = this.mask.slice(removeCount);
      }
    }
    reset() {
      super.reset();
      this._trimEmptyTail();
    }
    remove(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos === void 0) {
        toPos = this.displayValue.length;
      }
      const removeDetails = super.remove(fromPos, toPos);
      this._trimEmptyTail(fromPos, toPos);
      return removeDetails;
    }
    totalInputPositions(fromPos, toPos) {
      if (fromPos === void 0) {
        fromPos = 0;
      }
      if (toPos == null && this.repeatTo === Infinity) return Infinity;
      return super.totalInputPositions(fromPos, toPos);
    }
    get state() {
      return super.state;
    }
    set state(state) {
      this._blocks.length = state._blocks.length;
      this.mask = this.mask.slice(0, this._blocks.length);
      super.state = state;
    }
  }
  IMask.RepeatBlock = RepeatBlock;

  try {
    globalThis.IMask = IMask;
  } catch {}

  exports.ChangeDetails = ChangeDetails;
  exports.ChunksTailDetails = ChunksTailDetails;
  exports.DIRECTION = DIRECTION;
  exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  exports.HTMLInputMaskElement = HTMLInputMaskElement;
  exports.HTMLMaskElement = HTMLMaskElement;
  exports.InputMask = InputMask;
  exports.MaskElement = MaskElement;
  exports.Masked = Masked;
  exports.MaskedDate = MaskedDate;
  exports.MaskedDynamic = MaskedDynamic;
  exports.MaskedEnum = MaskedEnum;
  exports.MaskedFunction = MaskedFunction;
  exports.MaskedNumber = MaskedNumber;
  exports.MaskedPattern = MaskedPattern;
  exports.MaskedRange = MaskedRange;
  exports.MaskedRegExp = MaskedRegExp;
  exports.PIPE_TYPE = PIPE_TYPE;
  exports.PatternFixedDefinition = PatternFixedDefinition;
  exports.PatternInputDefinition = PatternInputDefinition;
  exports.RepeatBlock = RepeatBlock;
  exports.createMask = createMask;
  exports.createPipe = createPipe;
  exports.default = IMask;
  exports.forceDirection = forceDirection;
  exports.normalizeOpts = normalizeOpts;
  exports.pipe = pipe;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=imask.js.map
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/kadflo/assets/js/all-scripts.js?17442825962158";s:6:"source";s:48:"/local/templates/kadflo/assets/js/all-scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
$(document).ready(function() {
	$('.select2').select2()

	$(document).on('select2:open', () => {
		$('body').addClass('select-close')
	})

	$(document).on('select2:close', () => {
		$('body').removeClass('select-close')
	})

	$('.custom-select__head').on('click', function() {
		$(this).toggleClass('active')
		$(this).next().toggleClass('active')
	})

	$('.select-custom__head').on('click', function() {
		$(this).toggleClass('active')
		$(this).next().toggleClass('active')
	})

	$('.select-custom__dropdown--item').on('click', function() {
		var text = $(this).find('span').text()
		var img = $(this).find('img').attr('src')

		var parent = $(this).closest('.select-custom')

		var textName = parent.find('.select-custom__name span')
		var imgName = parent.find('.select-custom__name img')



		textName.html(text)
		imgName.attr('src', img)

		$('.select-custom__dropdown').removeClass('active')
		$('.select-custom__head').removeClass('active')
	})



	$('.baza__btn').on('click', function() {
		$('.baza__btn').removeClass('active')
		$(this).addClass('active')
	})
})

$(document).ready(function() {
	$('.header__burger').on('click', function() {
		$(this).toggleClass('active')

		$('.header__mobile').toggleClass('active')

		$('.header').toggleClass('active')

		$('body').toggleClass('hidden')
	})

	$('.header__close').on('click', function() {
		$('.header__mobile').removeClass('active')

		$('.header').removeClass('active')

		$('body').removeClass('hidden')
	})

	$('.header__search').on('click', function() {
		$(this).toggleClass('active')
		$('.header-search').toggleClass('active')

		return false
	})

	let $searchInput = $(".header-search input[type='text']")
	let $dropdown = $('.header__search--dropdown')
	let $loopIcon = $('.header-search')

	$(document).on('click', function(e) {
		if (
			!$(e.target).closest(".header__search--dropdown, input[type='text']")
				.length
		) {
			$dropdown.fadeOut(200)

			if ($searchInput.val().trim().length === 0) {
				$loopIcon.removeClass('active')
			}
		}
	})
})

});
/* End */
;; /* /local/templates/kadflo/assets/libraries/jquery-3.7.1.min.js?174428259687535*/
; /* /local/templates/kadflo/assets/libraries/swiper/swiper-bundle.min.js?1744282596167001*/
; /* /local/templates/kadflo/assets/libraries/fancybox/jquery.fancybox.min.js?1744282596105639*/
; /* /local/templates/kadflo/assets/libraries/select2/select2.min.js?174428259673171*/
; /* /local/templates/kadflo/assets/libraries/inputTel/inputTel.js?174428259645630*/
; /* /local/templates/kadflo/assets/libraries/imask.js?1744282596127825*/
; /* /local/templates/kadflo/assets/js/all-scripts.js?17442825962158*/
