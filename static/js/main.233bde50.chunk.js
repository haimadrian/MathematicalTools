(this["webpackJsonpmath-tools-calc"]=this["webpackJsonpmath-tools-calc"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),l=a(14),r=a.n(l),i=(a(20),a(4)),o=a(10),u=a(3),h=a.n(u),b=a(9),d=a(5),m=a(6),p=a(2),j=a(8),g=a(7),v=(a(24),"error"),f=function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"message-box",children:Object(n.jsxs)("div",{className:" "+this.props.type,children:[Object(n.jsxs)("div",{className:"message-box-title",children:[this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1),":"]}),Object(n.jsx)("div",{className:"message-box-content",children:this.props.message})]})})}}]),a}(c.a.Component),x=a(11);function O(e,t){var a=""+e;return a.length>=(t=t||3)?a:new Array(t-a.length+1).join(" ")+a}function S(e,t){for(var a="("+O(e[0],t),n=1;n<e.length;n++)a+=","+O(e[n],t);return a+")"}var y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"a",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"b",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"u",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"v";if(0===e||0===t)return"You must enter both "+a+" and "+n+" in order to calculate gcd("+a+","+n+")";var l=e,r=t,i=e<0,o=t<0,u=!1;if(e=Math.abs(e),(t=Math.abs(t))>e){u=!0;var h=e;e=t,t=h}try{for(var b=[e,1,0],d="Using extended (vectors) Euclid's algorithm in order to find gcd("+a+","+n+") = "+a+s+" + "+n+c+" as per Bezout.\n"+S(b),m=[t,0,1],p=Object(x.a)(m),j=e%t,g=0;0!==j;){g=Math.floor(e/t),d+="\n"+S(m)+"\t\t\u230a"+O(e)+" / "+O(t)+"\u230b = "+O(g,2)+" \t";for(var v=0;v<3;v++)p[v]=b[v]-g*m[v];d+=S(b)+" - "+O(g,2)+"*"+S(m)+" = "+S(p),e=m[0],t=p[0],b=m,m=Object(x.a)(p),j=e%t}g=Math.floor(e/t);var f=m[1],y=m[2];return u&&(f=y,y=m[1]),i&&(f*=-1),o&&(y*=-1),d+="\n"+S(m)+"\t\t\u230a"+O(e)+" / "+O(t)+"\u230b = "+O(g,2)+" \t",d+="\n\ngcd("+l+", "+r+") = "+m[0]+" = "+l+"*"+f+" + "+r+"*"+y+"    \u21d2    "+s+" = "+f+",  "+c+" = "+y,{value:m[0],u:f,v:y,calculationSteps:d}}catch(w){return"Error has occurred while executing Euclid's Algorithm: "+w}},w=(a(25),function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,s,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Number(n.state.a),s=Number(n.state.b),console.log("Input: a=",a,", b=",s),c=y(a,s),console.log(c),"string"===typeof c||c instanceof String?n.showMessageBox(v,c):n.setState({u:c.u,v:c.v,gcd:c.value,calculationSteps:c.calculationSteps});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={a:"",b:"",gcd:"",u:"",v:"",messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(p.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Oh Fuck: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(o.a)({},n,a))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"euclidean-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Extended Euclid's Algorithm: gcd(a, b) = au + bv"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter a and b for calculating gcd(a, b), u, and v in order to have the form gcd(a, b)=au+bv (Bezout)",Object(n.jsx)("br",{}),"Note that the algorithm uses absolute, for working with positive numbers, and it makes sure a is the greater one, hence you must see the latest answer and use u,v accordingly. We swap between u and v, and multiply by -1 if it is necessary. Yet you must make sure it was fine."]}),Object(n.jsxs)("label",{children:["a:",Object(n.jsx)("input",{name:"a",type:"number",value:this.state.a,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit()}})]}),Object(n.jsxs)("label",{children:["b:",Object(n.jsx)("input",{name:"b",type:"number",value:this.state.b,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit()}})]}),Object(n.jsx)("label",{className:"actions",children:Object(n.jsx)("div",{className:"execute-button",onClick:this.handleSubmit,children:"Go"})}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(f,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component)),k=function(e,t){if(0===e||0===t)return"You must enter both a and b in order to calculate gcd(a,b)";try{var a=0,n="gcd("+e+", "+t+") = ",s="";if((e<0||t<0)&&(n+="gcd("+(e=Math.abs(e))+", "+(t=Math.abs(t))+") = "),t>e){console.log("Swapping a and b");var c=e;n+="gcd("+(e=t)+", "+(t=c)+") = "}var l=0;do{l=e%t,a++,console.log(e),s+=e+" = "+Math.floor(e/t)+"*"+t+" + "+l+"\n",n+="gcd("+(e=t)+", "+(t=l)+") = "}while(0!==l);return{value:e,actionsCount:a,calculationSteps:n+=e,explanation:s+"\nIt took "+a+" iterations to calculate gcd."}}catch(r){return"Error has occurred while executing gcd("+e+", "+t+") algorithm: "+r}},N=function(e){if(e<2&&e>-2)return"No factorial for "+e;try{var t=[];for(e=Math.abs(e);e%2===0;)t.push(2),e/=2;for(var a=3;a<=Math.sqrt(e);a+=2)for(;e%a===0;)t.push(a),e/=a;e>2&&t.push(e);for(var n=[],s=t[0],c=1,l=1;l<t.length;l++)t[l]!==s&&(n.push({prime:s,count:c}),s=t[l],c=0),c++;return n.push({prime:s,count:c}),{factors:t,buckets:n}}catch(r){return"Error has occurred while executing primeFactors("+e+") algorithm: "+r}},C="gcd",M="primeFactor",E=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;if(0===e||0===t)return"You must enter both a and b in order to calculate lcm(a,b)";try{if((a=a||C)===C){var n=k(e,t),s=Math.abs(e*t)/n.value;return{value:s,calculationSteps:"|"+e+"*"+t+"| / "+n.value+" = |"+e*t+"| / "+n.value+" = "+s,explanation:n.calculationSteps+"\n"+n.explanation}}var c=N(e),l=N(t);console.log(c),console.log(l);for(var r=new Array(Math.max(c.buckets[c.buckets.length-1].prime,l.buckets[l.buckets.length-1].prime)+1),i=e+" = "+(e<0?"-1 * ":""),o="",u=0;u<r.length;u++)r[u]=0;for(var h=0;h<c.buckets.length;h++)r[c.buckets[h].prime]=c.buckets[h].count,0!==o.length&&(o+=" * "),o+=c.buckets[h].prime+"^"+c.buckets[h].count;i+=o+"\n"+t+" = "+(t<0?"-1 * ":""),o="";for(var b=0;b<l.buckets.length;b++)r[l.buckets[b].prime]=Math.max(r[l.buckets[b].prime],l.buckets[b].count),0!==o.length&&(o+=" * "),o+=l.buckets[b].prime+"^"+l.buckets[b].count;i+=o,o="";for(var d=1,m=2;m<r.length;m++)0!==r[m]&&(d*=Math.pow(m,r[m]),0!==o.length&&(o+=" * "),o+=m+"^"+r[m]);return{value:d,calculationSteps:"lcm("+e+", "+t+") = "+o+" = "+d,explanation:i}}catch(p){return"Error has occurred while executing lcm("+e+", "+t+") algorithm: "+p}},q=(a(26),function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,s,c,l,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target,s=Number(n.state.a),c=Number(n.state.b),console.log("Input: a=",s,", b=",c,", algType=",n.state.algType,", action=",a.id),"gcd"===a.id||"lcm"===a.id?(l="gcd"===a.id?k(s,c):E(s,c,n.state.algType),console.log(l),"string"===typeof l||l instanceof String?n.showMessageBox(v,l):n.setState({value:l.value,calculationSteps:l.calculationSteps,explanation:l.explanation+"\n"})):"string"===typeof(r=N(s))||r instanceof String?n.showMessageBox(v,r):n.setState({calculationSteps:s+" = "+(s<0?"-1 * ":"")+r.factors.join(" * "),explanation:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={a:"",b:"",algType:C,value:"",messageType:"",message:"",calculationSteps:"",explanation:""},n.showMessageBox=n.showMessageBox.bind(Object(p.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Oh Fuck: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(o.a)({},n,a))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"gcdlcm-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"gcd(a, b), lcm(a, b), and prime-factors"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter a and b for calculating gcd(a, b), or lcm(a, b), or primeFactors(a)",Object(n.jsx)("br",{}),"gcd uses Euclid's algorithm, where we show the steps, explanation and iterations count.",Object(n.jsx)("br",{}),"lcm can use gcd or prime-factors techniques, depends on your selection for algorithm type.",Object(n.jsx)("br",{}),"primeFactors will let you see the factorization of a number using its prime factors."]}),Object(n.jsxs)("label",{children:["a:",Object(n.jsx)("input",{name:"a",type:"number",value:this.state.a,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["b:",Object(n.jsx)("input",{name:"b",type:"number",value:this.state.b,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["Algorithm to use for lcm(a, b) calculation:",Object(n.jsx)("select",{name:"algType",value:this.state.algType,onChange:this.handleInputChange,children:[C,M].map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})]}),Object(n.jsxs)("label",{className:"actions",children:[Object(n.jsx)("div",{className:"execute-button",id:"gcd",onClick:this.handleSubmit,children:"gcd(a, b)"}),Object(n.jsx)("div",{className:"execute-button",id:"lcm",onClick:this.handleSubmit,children:"lcm(a, b)"}),Object(n.jsx)("div",{className:"execute-button",id:"prime",onClick:this.handleSubmit,children:"primeFactors(a)"})]}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps+"\n\n"+this.state.explanation,readOnly:!0}),this.state.message?Object(n.jsx)(f,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component)),I=function(e){if(e<1)return"n must be greater or equal to 1.";if(1===e)return{nums:[1],calculationSteps:"gcd(1, 1) = 1"};try{for(var t=[],a="",n=1;n<e;n++){var s=k(e,n);1===s.value&&(a+=s.calculationSteps+"\n",t.push(n))}return{nums:t,calculationSteps:a}}catch(c){return"Error has occurred while executing eulerFunc("+e+") algorithm: "+c}},F=function(e){if(e<1)return"n must be greater or equal to 1.";if(1===e)return{value:1,calculationSteps:""};try{for(var t=N(e),a="\u03c6("+e+") = "+e,n="",s=e,c=0;c<t.buckets.length;c++){var l=t.buckets[c].prime;a+=" * (1 - 1/"+l+")",s*=1-1/l,0!==n.length&&(n+=" * "),n+=l+"^"+t.buckets[c].count}return{value:Math.floor(s),calculationSteps:a+" = "+Math.floor(s)+"\n"+e+" = "+n}}catch(r){return"Error has occurred while executing eulerFormula("+e+") algorithm: "+r}},T=function(e){if(e<1)return"n must be greater or equal to 1.";if(1===e)return{calculationSteps:"1 = \u03c6(1)"};try{for(var t=Math.floor(Math.sqrt(e)),a="\u03c6(1)",n="1",s=[e],c="\u03c6(1) = 1",l=2;l<=t;l++)if(e%l===0){s.push(Math.floor(e/l));var r=F(l);a+=" + \u03c6("+l+")",n+=" + "+r.value,c+="\n"+r.calculationSteps.replace("\n"," = "+r.value+",    ")}for(;s.length>0;){var i=s.pop(),o=F(i);a+=" + \u03c6("+i+")",n+=" + "+o.value,c+="\n"+o.calculationSteps.replace("\n"," = "+o.value+",    ")}return{calculationSteps:e+" = "+a+" = "+n+"\n\n"+c}}catch(u){return"Error has occurred while executing gaussSum("+e+") algorithm: "+u}},A=(a(27),function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,s,c,l,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target,s=Number(n.state.n),console.log("Input: n=",s,", action=",a.id),"eulerFunc"===a.id?(c=I(s),console.log(c),"string"===typeof c||c instanceof String?n.showMessageBox(v,c):n.setState({value:c.nums.length,calculationSteps:"Numbers: "+c.nums+"\n(count="+c.nums.length+")\n\n"+c.calculationSteps})):"eulerFormula"===a.id?"string"===typeof(l=F(s))||l instanceof String?n.showMessageBox(v,l):n.setState({value:l.value,calculationSteps:"\u03c6("+s+") = "+l.value+"\n\n"+l.calculationSteps}):"string"===typeof(r=T(s))||r instanceof String?n.showMessageBox(v,r):n.setState({calculationSteps:r.calculationSteps});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={n:"",value:"",messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(p.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Oh Fuck: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(o.a)({},n,a))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"euler-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Euler Function and Formula"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter n for calculating \u03c6(n)",Object(n.jsx)("br",{}),"Press EulerFunc for getting the numbers below n where gcd(n, i) = 1.",Object(n.jsx)("br",{}),"Press EulerFormula for getting the amount of numbers in EulerFunc, with calculation steps according to Euler formula."]}),Object(n.jsxs)("label",{children:["n:",Object(n.jsx)("input",{name:"n",type:"number",value:this.state.n,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{className:"actions",children:[Object(n.jsx)("div",{className:"execute-button",id:"eulerFunc",onClick:this.handleSubmit,children:"Euler Func"}),Object(n.jsx)("div",{className:"execute-button",id:"eulerFormula",onClick:this.handleSubmit,children:"Euler Formula"}),Object(n.jsx)("div",{className:"execute-button",id:"gaussSum",onClick:this.handleSubmit,children:"Gauss Sum"})]}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(f,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component));function B(e){var t=e;if(0===(e=(e=e.replaceAll("\ud835\udc65","x").replaceAll("\ud835\udc4b","x").replaceAll("\ud835\udc5a","m").replaceAll("\ud835\udc5c","o").replaceAll("\ud835\udc51","d")).toLowerCase().replaceAll(/\s/g,"")).length)return"Nothing to solve. Equation was empty.";var a=e.indexOf("x");if(a<0)return"Illegal equation. \ud835\udc65 could not be detected. Was: "+t;var n=0===a?1:Number(e.substr(0,a)),s=e.indexOf("\u2261");if(s<0&&(s=e.indexOf("="))<0)return"Illegal equation. Equals symbol could not be detected. Was: "+t;var c=e.indexOf("(");if(c<0)return"Illegal equation. ( could not be detected. Was: "+t;var l=c-s-1;if(l<1)return"Illegal equation. b (remainder) was empty. Was: "+t;var r=Number(e.substr(s+1,l)),i=e.indexOf("d");i<0&&(i=e.indexOf("("));var o=e.charAt(i+1);if(o<"0"||o>"9")return"Illegal equation. \ud835\udc5a\ud835\udc5c\ud835\udc51 (divisor) was empty. Was: "+t;var u=e.indexOf(")");return u<0?"Illegal equation. ) could not be detected. Was: "+t:{a:n,b:r,n:Number(e.substr(i+1,u-i-1))}}var D=function(e){var t=B(e);if("string"===typeof t||t instanceof String)return t;try{var a=t.a,n=t.b,s=t.n,c=(1===a?"":a)+"\ud835\udc65\u2261"+n+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+")";c+=",\t\ta\ud835\udc65\u2261b(\ud835\udc5a\ud835\udc5c\ud835\udc51 n):  a="+a+",  b="+n+",  n="+s+"\n";var l=y(a,s,"a","n","q","t"),r=l.value,i=l.u;if(c+=l.calculationSteps+"\n",n%r!==0)return{values:[-1],a:a,b:n,n:s,d:r,q:i,calculationSteps:c+="\ngcd(a,n)\u16c5b \u21d2 "+r+"\u16c5"+n+" \u21d2 No answer."};c+="\ngcd(a,n)|b \u21d2 "+r+"|"+n+" \u21d2 q="+i;var o,u=i*n/r%s;if(c+="\n\ud835\udc650 \u2261 qb/d(\ud835\udc5a\ud835\udc5c\ud835\udc51 n) \u2261 "+i+"*"+n+"/"+r+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+") \u2261 "+i*n/r+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+")",i*n/r!==u&&(c+=" \u2261 "+u+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+")"),u<0){for(;u<0;)u+=s;c+=" \u2261 "+u+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+")"}if(c+="\n",1===r)o=[u];else{o=[];for(var h=0;h<r;h++){var b=u+h*s/r,d=b%s;if(c+="\n\ud835\udc65"+h+" \u2261 (\ud835\udc650 + kn/d)(\ud835\udc5a\ud835\udc5c\ud835\udc51 n) \u2261 ("+u+"+("+h+"*"+s+"/"+r+"))(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+") \u2261 "+b+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+")",b!==d&&(c+=" \u2261 "+d+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+")"),d<0){for(;d<0;)d+=s;c+=" \u2261 "+u+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+s+")"}o.push(d)}}return{values:o,a:a,b:n,n:s,d:r,q:i,calculationSteps:c}}catch(m){return"Error has occurred while executing solveEquation("+e+") algorithm: "+m}},R=function(e){for(var t="",a=[],n=0;n<e.length;n++){var s=e[n],c=B(s);if("string"===typeof c||c instanceof String)return c;if(1!==c.a){t+="Equation number "+(n+1)+" got a\u22601. Adjusting it such that a=1. ("+s+")\n";var l=D(s);t+=s+"  has been solved. Fixed equation is: \ud835\udc65\u2261"+(c={a:1,b:l.values[0],n:l.n}).b+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+c.n+")\n",t+="Explanation:\n\t"+l.calculationSteps.replaceAll("\n","\n\t").replaceAll("\n\t\n\t","\n\n\t")+"\n"}a.push(c)}var r=1,i="",o="",u="";t+="Solving:";for(var h=0;h<a.length;h++){var b=a[h];t+="\n\ud835\udc65 \u2261 "+b.b+" (\ud835\udc5a\ud835\udc5c\ud835\udc51 "+b.n+")",r*=b.n,0!==o.length&&(o+=" * ",u+=" * ",i+=" ,    "),o+=b.n,u+="m"+(h+1),i+="a"+(h+1)+"="+b.b}o="m = "+u+" = "+o+" = "+r+"\n";for(var d="",m=[],p=0;p<a.length;p++){var j=a[p];m.push(r/j.n),0!==d.length&&(d+=" ,    "),d+="M"+(p+1)+"="+r+"/"+j.n+"="+m[m.length-1]}t+="\n\n"+i+"\n"+o+d+"\n\nSolving \ud835\udc65i now. (Mi\ud835\udc65i \u2261 1 (\ud835\udc5a\ud835\udc5c\ud835\udc51 mi))\n";for(var g=[],v=0;v<a.length;v++){var f=a[v],x=m[v]+"\ud835\udc65 \u2261 1 (\ud835\udc5a\ud835\udc5c\ud835\udc51 "+f.n+")";g.push(x),t+=x+"\n"}t+="\n";for(var O=[],S=0;S<g.length;S++){var y=g[S],w=D(y);O.push(w.values[0]),t+=y+" \u21d2 \ud835\udc65"+(S+1)+"="+w.values[0]+"\nExplanation:\n\t"+w.calculationSteps.replaceAll("\n","\n\t").replaceAll("\n\t\n\t","\n\n\t")+"\n"}t+="\n\ud835\udc65 \u2261 (",u="";for(var k="",N=0,C=0;C<O.length;C++){var M=""+(C+1),E=a[C].b,q=m[C],I=O[C];0!==u.length&&(u+=" + ",k+=" + "),u+="a"+M+"*M"+M+"*\ud835\udc65"+M,k+=E+"*"+q+"*"+I,N+=E*q*I}return t+=u+")(\ud835\udc5a\ud835\udc5c\ud835\udc51 m)\n\ud835\udc65 \u2261 ("+k+")(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+r+") \u2261 "+N+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+r+") \u2261 ",{value:N%=r,m:r,calculationSteps:t+=N+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+r+")"}},z=(a(28),"\ud835\udc65 \u2261 b (\ud835\udc5a\ud835\udc5c\ud835\udc51 n)"),K=function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,s,c,l,r,i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target,s=n.state.equations,console.log("Input: equations=",s,", action=",a.id),1===s.length||0===s[1].length||s[1]===z)if(c=D(s[0]),console.log(c),"string"===typeof c||c instanceof String)n.showMessageBox(v,c);else{if(-1===c.values[0])l="No answer.\n";else for(l="Answer:\n",r=0;r<c.values.length;r++)l+="\ud835\udc65"+r+" \u2261 "+c.values[r]+" (\ud835\udc5a\ud835\udc5c\ud835\udc51 "+c.n+")\n";n.setState({value:c.values.toString(),calculationSteps:l+"Check steps below:\n\n"+c.calculationSteps})}else i=R(s),console.log(i),"string"===typeof i||i instanceof String?n.showMessageBox(v,i):(o="Answer: \ud835\udc65 \u2261 "+i.value+" (\ud835\udc5a\ud835\udc5c\ud835\udc51 "+i.m+"). ",n.setState({value:i.value,calculationSteps:o+"Check steps below:\n\n"+i.calculationSteps}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={equations:["a\ud835\udc65 \u2261 b (\ud835\udc5a\ud835\udc5c\ud835\udc51 n)",z,z],value:"",messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(p.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Oh Fuck: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e,t){var a=t.target.value,n=Object(x.a)(this.state.equations);n[e]=a,this.setState({equations:n})}},{key:"addEquation",value:function(){this.setState((function(e){return{equations:[].concat(Object(x.a)(e.equations),[z])}}))}},{key:"removeEquation",value:function(e){if(this.state.equations.length>1){var t=Object(x.a)(this.state.equations);t.splice(e,1),this.setState({equations:t})}}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"modular-equations-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Modular Equations"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter an equation for calculating x. You can add as many equations as you need by using the + button",Object(n.jsx)("br",{}),"For example, enter 3\ud835\udc65=1(\ud835\udc5a\ud835\udc5c\ud835\udc516), or 3\ud835\udc65\u22613(\ud835\udc5a\ud835\udc5c\ud835\udc516)."]}),this.state.equations.map((function(t,a){return Object(n.jsxs)("label",{className:"actions",children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",value:t||z,onChange:e.handleInputChange.bind(e,a)})},a),Object(n.jsx)("div",{className:"edit-button",id:"remove"+a,onClick:e.removeEquation.bind(e,a),children:"-"}),a===e.state.equations.length-1?Object(n.jsx)("div",{className:"edit-button",id:"add",onClick:e.addEquation.bind(e,a),children:"+"}):null]},"label"+a)})),Object(n.jsx)("label",{className:"actions",children:Object(n.jsx)("div",{className:"execute-button",id:"calculate",onClick:this.handleSubmit,children:"Go"})}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(f,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component),G=function(e,t,a){if(e<1)return"n must be greater or equal to 1.";if(e>10)return"n is too big. Maximum supported length is 10";var n=W(e,"",t,a);return{count:n,calculationSteps:"Found "+n+" occurrences"}};function W(e,t,a,n){var s=0;if(1===e)for(var c=0;c<a.length;c++){for(var l=t+a[c],r=!0,i=0;i<n.length;i++){var o=n[i];o.startsWith("!")?l.includes(o.substr(1))&&(r=!1):l.includes(o)||(r=!1)}r&&s++}else for(var u=0;u<a.length;u++)s+=W(e-1,t+a[u],a,n);return s}a(29);var Y=function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,s,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target,s=Number(n.state.n),console.log("Input: n=",s,", action=",a.id),c=G(s,n.state.alphabet,n.state.values),console.log(c),"string"===typeof c||c instanceof String?n.showMessageBox(v,c):n.setState({count:c.count,calculationSteps:c.calculationSteps});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={n:"",values:[""],count:0,alphabet:["0","1","2"],messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(p.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Oh Fuck: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;("string"===typeof n||n instanceof String)&&(n=n.replaceAll(/\s/g,"").split(",")),this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"recursion-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Recursion"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter n for calculating f(n). n tells the length of a string. (depth of tree)",Object(n.jsx)("br",{}),"Fill in the alphabet, as a comma separated string. e.g. 0,1,2 or a,b,c etc.",Object(n.jsx)("br",{}),"Fill in the values you want to check if they are contained in a string or not.",Object(n.jsx)("br",{}),"Note that values is a comma separated string, e.g. 00,!01 where '!' stands for \"not contains\", so you can search for occurrences that contain 00, but not contain 01.",Object(n.jsx)("br",{}),"Another example for values: !00,!11 to look for occurrences that do contain 00 or 11."]}),Object(n.jsxs)("label",{children:["Alphabet:",Object(n.jsx)("input",{name:"alphabet",value:this.state.alphabet.join(","),onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["Values:",Object(n.jsx)("input",{name:"values",value:this.state.values.join(","),onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["n:",Object(n.jsx)("input",{name:"n",type:"number",value:this.state.n,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsx)("label",{className:"actions",children:Object(n.jsx)("div",{className:"execute-button",id:"go",onClick:this.handleSubmit,children:"Go"})}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(f,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component);function L(e,t,a){for(var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=1,c=e+"^"+t+(n?"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+")":"")+" \u2261 ";t>0;)t%2===1?(c+=--t>0?"\n \u2261 "+s+" * ("+e+"^"+t+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+")) * "+e+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 ":"\n \u2261 ("+s+" * "+e+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 ",c+="{ "+e+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+" \u2261 "+e%a+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") } \u2261 ",s=s*e%a):(c+=(t-=2)>0?"\n \u2261 "+s+" * ("+e+"^"+t+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+")) * "+e+"^2(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 ":"\n \u2261 "+s+" * "+e+"^2(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 ",c+="{ "+e+"^2(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 "+e*e%a+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") } \u2261 ",s=s*(e*e%a)%a),t>0&&(c+=s+" * "+e+"^"+t+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 ");return{result:s,calculationSteps:c+="\n \u2261 "+s+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+")"}}var P=function(e,t,a){if(e<1||t<0||a<1)return"You must enter base>=1, exponent>=0 and modulus >=1 in order to calculate b^e(mod m)";try{var n="",s=!1,c=1;if(t>=a-1){var l=k(e,a);if("string"===typeof l||l instanceof String)return l;if(n=l.calculationSteps+"\n",1===l.value){var r;if(n+="base and modulus are co-prime numbers, and modulus is ",function(e){if(e<2)return!1;if(2===e||3===e)return!0;if(e%2===0)return!1;for(var t=Math.floor(Math.sqrt(e)),a=3;a<=t;a+=2)if(e%a===0)return!1;return!0}(a))n+="a prime number, using Fermat's little theorem. b^(m-1) \u2261 1(\ud835\udc5a\ud835\udc5c\ud835\udc51 m)\n",r=a-1;else{n+="not a prime number, using Euler's theorem. b^\u03c6(m) \u2261 1(\ud835\udc5a\ud835\udc5c\ud835\udc51 m)\n";var i=F(a);if("string"===typeof i||i instanceof String)return i;r=i.value,n+=i.calculationSteps+"\n"}var o=function(e,t,a,n){var s,c=Math.floor(t/n),l=t%n,r=e+"^"+t+" \u2261 (("+e+"^"+n+")^("+c;if(0!==l){r+="+"+l+"))(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 1^"+c+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") * "+e+"^"+l+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 1(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") * ";var i=L(e,l,a,!0);s=i.result,r+=i.calculationSteps}else r+="))(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 1^"+c+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+") \u2261 1(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+")",s=1;return{calculationSteps:r,result:s}}(e,t,a,r);n+=o.calculationSteps,c=o.result,s=!0}else n+="base and modulus are not co-prime numbers. GCD differs from 1. Let's factorize the exponent then.\n"}if(!s){var u=L(e,t,a);c=u.result,n+=u.calculationSteps}return{value:c,calculationSteps:"Answer: "+e+"^"+t+" \u2261 "+c+"(\ud835\udc5a\ud835\udc5c\ud835\udc51 "+a+")\nCheck steps below:\n\n"+n}}catch(h){return"Error has occurred while executing ExponentialMod Algorithm: "+h}},J=(a(30),function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(b.a)(h.a.mark((function e(t){var a,s,c,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.target,a=Number(n.state.base),s=Number(n.state.exponent),c=Number(n.state.modulus),console.log("Input: base=",a,", exponent=",s,", modulus=",c),l=P(a,s,c),console.log(l),"string"===typeof l||l instanceof String?n.showMessageBox(v,l):n.setState({calculationSteps:l.calculationSteps});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={base:1,exponent:0,modulus:1,messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(p.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Oh Fuck: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"exponential-mod-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Exponential Mod"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter base (b), exponent (e) and modulus (m) for calculating b^e(\ud835\udc5a\ud835\udc5c\ud835\udc51 m)",Object(n.jsx)("br",{}),"In case base and modulus are not co-prime numbers ( gcd(b, m)\u22601 ) we will solve it directly by factorizing the exponent.",Object(n.jsx)("br",{}),"Otherwise, base and modulus are co-prime, we will check if m is a prime number, in order to use Fermat's little theorem ( b^(m-1)\u22611(\ud835\udc5a\ud835\udc5c\ud835\udc51 m) ) and if m is not a prime number, we will use Euler's theorem. ( b^\u03c6(m)\u22611(\ud835\udc5a\ud835\udc5c\ud835\udc51 m) )"]}),Object(n.jsxs)("p",{align:"left",children:["Fermat: b",Object(n.jsx)("sup",{children:"m-1"})," \u2261 1(\ud835\udc5a\ud835\udc5c\ud835\udc51 m) ,  m is prime, gcd(b,m)=1",Object(n.jsx)("br",{}),"Euler: b",Object(n.jsx)("sup",{children:"\u03c6(m)"})," \u2261 1(\ud835\udc5a\ud835\udc5c\ud835\udc51 m) ,  m is not prime, gcd(b,m)=1"]}),Object(n.jsxs)("label",{children:["Base:",Object(n.jsx)("input",{name:"base",type:"number",value:this.state.base,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["Exponent:",Object(n.jsx)("input",{name:"exponent",type:"number",value:this.state.exponent,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["Modulus:",Object(n.jsx)("input",{name:"modulus",type:"number",value:this.state.modulus,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsx)("label",{className:"actions",children:Object(n.jsx)("div",{className:"execute-button",id:"go",onClick:this.handleSubmit,children:"Go"})}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(f,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component));a(31);var U=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"App-header",children:[Object(n.jsx)("img",{src:"./deadpool.png",className:"App-logo",alt:"logo"}),Object(n.jsx)("label",{className:"header-title",children:"Math Tools Calculator"})]}),Object(n.jsxs)(i.d,{children:[Object(n.jsxs)(i.b,{children:[Object(n.jsx)(i.a,{children:Object(n.jsx)("p",{children:"Euclid's Algorithm (Bezout)"})}),Object(n.jsx)(i.a,{children:Object(n.jsx)("p",{children:"GCD, LCM and Prime Factors"})}),Object(n.jsx)(i.a,{children:Object(n.jsx)("p",{children:"Euler Formula and Gauss Sum"})}),Object(n.jsx)(i.a,{children:Object(n.jsx)("p",{children:"Modular Equations"})}),Object(n.jsx)(i.a,{children:Object(n.jsx)("p",{children:"Recursion"})}),Object(n.jsx)(i.a,{children:Object(n.jsx)("p",{children:"Exponential Mod"})})]}),Object(n.jsx)(i.c,{children:Object(n.jsxs)("div",{className:"panel-content",children:[Object(n.jsx)(w,{}),Object(n.jsxs)("label",{className:"copyright",children:[Object(n.jsx)("br",{}),"\xa9 All Rights ... wtf lol \xa9 RickShvetz \xa9 2020-2021 \xa9"]})]})}),Object(n.jsx)(i.c,{children:Object(n.jsxs)("div",{className:"panel-content",children:[Object(n.jsx)(q,{}),Object(n.jsxs)("label",{className:"copyright",children:[Object(n.jsx)("br",{}),"\xa9 All Rights ... wtf lol \xa9 RickShvetz \xa9 2020-2021 \xa9"]})]})}),Object(n.jsx)(i.c,{children:Object(n.jsxs)("div",{className:"panel-content",children:[Object(n.jsx)(A,{}),Object(n.jsxs)("label",{className:"copyright",children:[Object(n.jsx)("br",{}),"\xa9 All Rights ... wtf lol \xa9 RickShvetz \xa9 2020-2021 \xa9"]})]})}),Object(n.jsx)(i.c,{children:Object(n.jsxs)("div",{className:"panel-content",children:[Object(n.jsx)(K,{}),Object(n.jsxs)("label",{className:"copyright",children:[Object(n.jsx)("br",{}),"\xa9 All Rights ... wtf lol \xa9 RickShvetz \xa9 2020-2021 \xa9"]})]})}),Object(n.jsx)(i.c,{children:Object(n.jsxs)("div",{className:"panel-content",children:[Object(n.jsx)(Y,{}),Object(n.jsxs)("label",{className:"copyright",children:[Object(n.jsx)("br",{}),"\xa9 All Rights ... wtf lol \xa9 RickShvetz \xa9 2020-2021 \xa9"]})]})}),Object(n.jsx)(i.c,{children:Object(n.jsxs)("div",{className:"panel-content",children:[Object(n.jsx)(J,{}),Object(n.jsxs)("label",{className:"copyright",children:[Object(n.jsx)("br",{}),"\xa9 All Rights ... wtf lol \xa9 RickShvetz \xa9 2020-2021 \xa9"]})]})})]})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),V()}},[[32,1,2]]]);
//# sourceMappingURL=main.233bde50.chunk.js.map