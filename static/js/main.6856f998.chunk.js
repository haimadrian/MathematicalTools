(this["webpackJsonpmath-tools-calc"]=this["webpackJsonpmath-tools-calc"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(25),l=a.n(r),i=(a(33),a(34),a(15)),o=a(3),u=a(26),h=Object(u.a)(),d=a(16),b=a(7),m=a.n(b),g=a(12),p=a(8),j=a(9),v=a(4),x=a(11),f=a(10),O=(a(36),"error"),S=function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"message-box",children:Object(n.jsxs)("div",{className:" "+this.props.type,children:[Object(n.jsxs)("div",{className:"message-box-title",children:[this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1),":"]}),Object(n.jsx)("div",{className:"message-box-content",children:this.props.message})]})})}}]),a}(c.a.Component),y=a(14);function w(e,t){var a=""+e;return a.length>=(t=t||3)?a:new Array(t-a.length+1).join(" ")+a}function k(e,t){for(var a="("+w(e[0],t),n=1;n<e.length;n++)a+=","+w(e[n],t);return a+")"}var N=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"a",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"b",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"u",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"v";if(0===e||0===t)return"You must enter both "+a+" and "+n+" in order to calculate gcd("+a+","+n+")";var r=e,l=t,i=e<0,o=t<0,u=!1;if(e=Math.abs(e),(t=Math.abs(t))>e){u=!0;var h=e;e=t,t=h}try{for(var d=[e,1,0],b="Using extended (vectors) Euclid's algorithm in order to find gcd("+a+","+n+") = "+a+s+" + "+n+c+" as per Bezout.\n"+k(d),m=[t,0,1],g=Object(y.a)(m),p=e%t,j=0;0!==p;){j=Math.floor(e/t),b+="\n"+k(m)+"\t\t\u230a"+w(e)+" / "+w(t)+"\u230b = "+w(j,2)+" \t";for(var v=0;v<3;v++)g[v]=d[v]-j*m[v];b+=k(d)+" - "+w(j,2)+"*"+k(m)+" = "+k(g),e=m[0],t=g[0],d=m,m=Object(y.a)(g),p=e%t}j=Math.floor(e/t);var x=m[1],f=m[2];return u&&(x=f,f=m[1]),i&&(x*=-1),o&&(f*=-1),b+="\n"+k(m)+"\t\t\u230a"+w(e)+" / "+w(t)+"\u230b = "+w(j,2)+" \t",b+="\n\ngcd("+r+", "+l+") = "+m[0]+" = "+r+"*"+x+" + "+l+"*"+f+"    \u21d2    "+s+" = "+x+",  "+c+" = "+f,{value:m[0],u:x,v:f,calculationSteps:b}}catch(O){return"Error has occurred while executing Euclid's Algorithm: "+O}},C=(a(37),function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(g.a)(m.a.mark((function e(t){var a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Number(n.state.a),s=Number(n.state.b),console.log("Input: a=",a,", b=",s),c=N(a,s),console.log(c),"string"===typeof c||c instanceof String?n.showMessageBox(O,c):n.setState({u:c.u,v:c.v,gcd:c.value,calculationSteps:c.calculationSteps});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={a:"",b:"",gcd:"",u:"",v:"",messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(j.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Error: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"euclidean-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Extended Euclid's Algorithm: gcd(a, b) = au + bv"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter a and b for calculating gcd(a, b), u, and v in order to have the form gcd(a, b)=au+bv (Bezout)",Object(n.jsx)("br",{}),"Note that the algorithm uses absolute, for working with positive numbers, and it makes sure a is the greater one, hence you must see the latest answer and use u,v accordingly. We swap between u and v, and multiply by -1 if it is necessary. Yet you must make sure it was fine."]}),Object(n.jsxs)("label",{children:["a:",Object(n.jsx)("input",{name:"a",type:"number",value:this.state.a,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit()}})]}),Object(n.jsxs)("label",{children:["b:",Object(n.jsx)("input",{name:"b",type:"number",value:this.state.b,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit()}})]}),Object(n.jsx)("div",{className:"execute-button",onClick:this.handleSubmit,children:"Go"}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(S,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component)),q=function(e,t){if(0===e||0===t)return"You must enter both a and b in order to calculate gcd(a,b)";try{var a=0,n="gcd("+e+", "+t+") = ",s="";if((e<0||t<0)&&(n+="gcd("+(e=Math.abs(e))+", "+(t=Math.abs(t))+") = "),t>e){console.log("Swapping a and b");var c=e;n+="gcd("+(e=t)+", "+(t=c)+") = "}var r=0;do{r=e%t,a++,console.log(e),s+=e+" = "+Math.floor(e/t)+"*"+t+" + "+r+"\n",n+="gcd("+(e=t)+", "+(t=r)+") = "}while(0!==r);return{value:e,actionsCount:a,calculationSteps:n+=e,explanation:s+"\nIt took "+a+" iterations to calculate gcd."}}catch(l){return"Error has occurred while executing gcd("+e+", "+t+") algorithm: "+l}},E=function(e){if(e<2&&e>-2)return"No factorial for "+e;try{var t=[];for(e=Math.abs(e);e%2===0;)t.push(2),e/=2;for(var a=3;a<=Math.sqrt(e);a+=2)for(;e%a===0;)t.push(a),e/=a;e>2&&t.push(e);for(var n=[],s=t[0],c=1,r=1;r<t.length;r++)t[r]!==s&&(n.push({prime:s,count:c}),s=t[r],c=0),c++;return n.push({prime:s,count:c}),{factors:t,buckets:n}}catch(l){return"Error has occurred while executing primeFactors("+e+") algorithm: "+l}},M="gcd",I="primeFactor",F=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M;if(0===e||0===t)return"You must enter both a and b in order to calculate lcm(a,b)";try{if((a=a||M)===M){var n=q(e,t),s=Math.abs(e*t)/n.value;return{value:s,calculationSteps:"|"+e+"*"+t+"| / "+n.value+" = |"+e*t+"| / "+n.value+" = "+s,explanation:n.calculationSteps+"\n"+n.explanation}}var c=E(e),r=E(t);console.log(c),console.log(r);for(var l=new Array(Math.max(c.buckets[c.buckets.length-1].prime,r.buckets[r.buckets.length-1].prime)+1),i=e+" = "+(e<0?"-1 * ":""),o="",u=0;u<l.length;u++)l[u]=0;for(var h=0;h<c.buckets.length;h++)l[c.buckets[h].prime]=c.buckets[h].count,0!==o.length&&(o+=" * "),o+=c.buckets[h].prime+"^"+c.buckets[h].count;i+=o+"\n"+t+" = "+(t<0?"-1 * ":""),o="";for(var d=0;d<r.buckets.length;d++)l[r.buckets[d].prime]=Math.max(l[r.buckets[d].prime],r.buckets[d].count),0!==o.length&&(o+=" * "),o+=r.buckets[d].prime+"^"+r.buckets[d].count;i+=o,o="";for(var b=1,m=2;m<l.length;m++)0!==l[m]&&(b*=Math.pow(m,l[m]),0!==o.length&&(o+=" * "),o+=m+"^"+l[m]);return{value:b,calculationSteps:"lcm("+e+", "+t+") = "+o+" = "+b,explanation:i}}catch(g){return"Error has occurred while executing lcm("+e+", "+t+") algorithm: "+g}},T=(a(38),function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(g.a)(m.a.mark((function e(t){var a,s,c,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target,s=Number(n.state.a),c=Number(n.state.b),console.log("Input: a=",s,", b=",c,", algType=",n.state.algType,", action=",a.id),"gcd"===a.id||"lcm"===a.id?(r="gcd"===a.id?q(s,c):F(s,c,n.state.algType),console.log(r),"string"===typeof r||r instanceof String?n.showMessageBox(O,r):n.setState({value:r.value,calculationSteps:r.calculationSteps,explanation:r.explanation+"\n"})):"string"===typeof(l=E(s))||l instanceof String?n.showMessageBox(O,l):n.setState({calculationSteps:s+" = "+(s<0?"-1 * ":"")+l.factors.join(" * "),explanation:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={a:"",b:"",algType:M,value:"",messageType:"",message:"",calculationSteps:"",explanation:""},n.showMessageBox=n.showMessageBox.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(j.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Error: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"gcdlcm-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"gcd(a, b), lcm(a, b), and prime-factors"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter a and b for calculating gcd(a, b), or lcm(a, b), or primeFactors(a)",Object(n.jsx)("br",{}),"gcd uses Euclid's algorithm, where we show the steps, explanation and iterations count.",Object(n.jsx)("br",{}),"lcm can use gcd or prime-factors techniques, depends on your selection for algorithm type.",Object(n.jsx)("br",{}),"primeFactors will let you see the factorization of a number using its prime factors."]}),Object(n.jsxs)("label",{children:["a:",Object(n.jsx)("input",{name:"a",type:"number",value:this.state.a,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["b:",Object(n.jsx)("input",{name:"b",type:"number",value:this.state.b,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{children:["Algorithm to use for lcm(a, b) calculation:",Object(n.jsx)("select",{name:"algType",value:this.state.algType,onChange:this.handleInputChange,children:[M,I].map((function(e){return Object(n.jsx)("option",{value:e,children:e})}))})]}),Object(n.jsxs)("label",{className:"actions",children:[Object(n.jsx)("div",{className:"execute-button",id:"gcd",onClick:this.handleSubmit,children:"gcd(a, b)"}),Object(n.jsx)("div",{className:"execute-button",id:"lcm",onClick:this.handleSubmit,children:"lcm(a, b)"}),Object(n.jsx)("div",{className:"execute-button",id:"prime",onClick:this.handleSubmit,children:"primeFactors(a)"})]}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps+"\n\n"+this.state.explanation,readOnly:!0}),this.state.message?Object(n.jsx)(S,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component)),A=function(e){if(e<1)return"n must be greater or equal to 1.";if(1===e)return{nums:[1],calculationSteps:"gcd(1, 1) = 1"};try{for(var t=[],a="",n=1;n<e;n++){var s=q(e,n);1===s.value&&(a+=s.calculationSteps+"\n",t.push(n))}return{nums:t,calculationSteps:a}}catch(c){return"Error has occurred while executing eulerFunc("+e+") algorithm: "+c}},B=function(e){if(e<1)return"n must be greater or equal to 1.";if(1===e)return{value:1,calculationSteps:""};try{for(var t=E(e),a="\u03c6("+e+") = "+e,n="",s=e,c=0;c<t.buckets.length;c++){var r=t.buckets[c].prime;a+=" * (1 - 1/"+r+")",s*=1-1/r,0!==n.length&&(n+=" * "),n+=r+"^"+t.buckets[c].count}return{value:Math.floor(s),calculationSteps:a+"\n"+e+" = "+n}}catch(l){return"Error has occurred while executing eulerFormula("+e+") algorithm: "+l}},D=function(e){if(e<1)return"n must be greater or equal to 1.";if(1===e)return{calculationSteps:"1 = \u03c6(1)"};try{for(var t=Math.floor(Math.sqrt(e)),a="\u03c6(1)",n="1",s=[e],c="\u03c6(1) = 1",r=2;r<=t;r++)if(e%r===0){s.push(Math.floor(e/r));var l=B(r);a+=" + \u03c6("+r+")",n+=" + "+l.value,c+="\n"+l.calculationSteps.replace("\n"," = "+l.value+",    ")}for(;s.length>0;){var i=s.pop(),o=B(i);a+=" + \u03c6("+i+")",n+=" + "+o.value,c+="\n"+o.calculationSteps.replace("\n"," = "+o.value+",    ")}return{calculationSteps:e+" = "+a+" = "+n+"\n\n"+c}}catch(u){return"Error has occurred while executing gaussSum("+e+") algorithm: "+u}},W=(a(39),function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(g.a)(m.a.mark((function e(t){var a,s,c,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target,s=Number(n.state.n),console.log("Input: n=",s,", action=",a.id),"eulerFunc"===a.id?(c=A(s),console.log(c),"string"===typeof c||c instanceof String?n.showMessageBox(O,c):n.setState({value:c.nums.length,calculationSteps:"Numbers: "+c.nums+"\n(count="+c.nums.length+")\n\n"+c.calculationSteps})):"eulerFormula"===a.id?"string"===typeof(r=B(s))||r instanceof String?n.showMessageBox(O,r):n.setState({value:r.value,calculationSteps:"\u03c6("+s+") = "+r.value+"\n\n"+r.calculationSteps}):"string"===typeof(l=D(s))||l instanceof String?n.showMessageBox(O,l):n.setState({calculationSteps:l.calculationSteps});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={n:"",value:"",messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(j.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Error: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(d.a)({},n,a))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"euler-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Euler Function and Formula"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter n for calculating \u03c6(n)",Object(n.jsx)("br",{}),"Press EulerFunc for getting the numbers below n where gcd(n, i) = 1.",Object(n.jsx)("br",{}),"Press EulerFormula for getting the amount of numbers in EulerFunc, with calculation steps according to Euler formula."]}),Object(n.jsxs)("label",{children:["n:",Object(n.jsx)("input",{name:"n",type:"number",value:this.state.n,onChange:this.handleInputChange,required:!0,onKeyDown:function(t){"Enter"===t.key&&e.handleSubmit(t)}})]}),Object(n.jsxs)("label",{className:"actions",children:[Object(n.jsx)("div",{className:"execute-button",id:"eulerFunc",onClick:this.handleSubmit,children:"Euler Func"}),Object(n.jsx)("div",{className:"execute-button",id:"eulerFormula",onClick:this.handleSubmit,children:"Euler Formula"}),Object(n.jsx)("div",{className:"execute-button",id:"gaussSum",onClick:this.handleSubmit,children:"Gauss Sum"})]}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(S,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component));function z(e){var t=e;if(0===(e=e.toLowerCase().replaceAll(" ","")).length)return"Nothing to solve. Equation was empty.";var a=e.indexOf("x");if(a<0)return"Illegal equation. X could not be detected. Was: "+t;var n=0===a?1:Number(e.substr(0,a)),s=e.indexOf("\u2261");if(s<0&&(s=e.indexOf("="))<0)return"Illegal equation. Equals symbol could not be detected. Was: "+t;var c=e.indexOf("(");if(c<0)return"Illegal equation. ( could not be detected. Was: "+t;var r=c-s-1;if(r<1)return"Illegal equation. b (remainder) was empty. Was: "+t;var l=Number(e.substr(s+1,r)),i=e.indexOf("d");i<0&&(i=e.indexOf("("));var o=e.charAt(i+1);if(o<"0"||o>"9")return"Illegal equation. mod (divisor) was empty. Was: "+t;var u=e.indexOf(")");return u<0?"Illegal equation. ) could not be detected. Was: "+t:{a:n,b:l,n:Number(e.substr(i+1,u-i-1))}}var G=function(e){var t=z(e);if("string"===typeof t||t instanceof String)return t;try{var a=t.a,n=t.b,s=t.n,c=(1===a?"":a)+"x\u2261"+n+"(mod "+s+")";c+=",\t\tax\u2261b(mod n):  a="+a+",  b="+n+",  n="+s+"\n";var r=N(a,s,"a","n","q","t"),l=r.value,i=r.u;if(c+=r.calculationSteps+"\n",n%l!==0)return{values:[-1],a:a,b:n,n:s,d:l,q:i,calculationSteps:c+="\ngcd(a,n)\u16c5b \u21d2 "+l+"\u16c5"+n+" \u21d2 No answer."};c+="\ngcd(a,n)|b \u21d2 "+l+"|"+n+" \u21d2 q="+i;var o,u=i*n/l%s;if(c+="\nx0 \u2261 qb/d(mod n) \u2261 "+i+"*"+n+"/"+l+"(mod "+s+") \u2261 "+i*n/l+"(mod "+s+")",i*n/l!==u&&(c+=" \u2261 "+u+"(mod "+s+")"),u<0){for(;u<0;)u+=s;c+=" \u2261 "+u+"(mod "+s+")"}if(c+="\n",1===l)o=[u];else{o=[];for(var h=0;h<l;h++){var d=u+h*s/l,b=d%s;if(c+="\nx"+h+" \u2261 (x0 + kn/d)(mod n) \u2261 ("+u+"+("+h+"*"+s+"/"+l+"))(mod "+s+") \u2261 "+d+"(mod "+s+")",d!==b&&(c+=" \u2261 "+b+"(mod "+s+")"),b<0){for(;b<0;)b+=s;c+=" \u2261 "+u+"(mod "+s+")"}o.push(b)}}return{values:o,a:a,b:n,n:s,d:l,q:i,calculationSteps:c}}catch(m){return"Error has occurred while executing solveEquation("+e+") algorithm: "+m}},K=function(e){for(var t="",a=[],n=0;n<e.length;n++){var s=e[n],c=z(s);if("string"===typeof c||c instanceof String)return c;if(1!==c.a){t+="Equation number "+(n+1)+" got a\u22601. Adjusting it such that a=1. ("+s+")\n";var r=G(s);t+=s+"  has been solved. Fixed equation is: x\u2261"+(c={a:1,b:r.values[0],n:r.n}).b+"(mod "+c.n+")\n",t+="Explanation:\n\t"+r.calculationSteps.replaceAll("\n","\n\t").replaceAll("\n\t\n\t","\n\n\t")+"\n"}a.push(c)}var l=1,i="",o="",u="";t+="Solving:";for(var h=0;h<a.length;h++){var d=a[h];t+="\nx \u2261 "+d.b+" (mod "+d.n+")",l*=d.n,0!==o.length&&(o+=" * ",u+=" * ",i+=" ,    "),o+=d.n,u+="m"+(h+1),i+="a"+(h+1)+"="+d.b}o="m = "+u+" = "+o+" = "+l+"\n";for(var b="",m=[],g=0;g<a.length;g++){var p=a[g];m.push(l/p.n),0!==b.length&&(b+=" ,    "),b+="M"+(g+1)+"="+l+"/"+p.n+"="+m[m.length-1]}t+="\n\n"+i+"\n"+o+b+"\n\nSolving Xi now. (Mixi \u2261 1 (mod mi))\n";for(var j=[],v=0;v<a.length;v++){var x=a[v],f=m[v]+"x \u2261 1 (mod "+x.n+")";j.push(f),t+=f+"\n"}t+="\n";for(var O=[],S=0;S<j.length;S++){var y=j[S],w=G(y);O.push(w.values[0]),t+=y+" \u21d2 x"+(S+1)+"="+w.values[0]+"\nExplanation:\n\t"+w.calculationSteps.replaceAll("\n","\n\t").replaceAll("\n\t\n\t","\n\n\t")+"\n"}t+="\nx \u2261 (",u="";for(var k="",N=0,C=0;C<O.length;C++){var q=""+(C+1),E=a[C].b,M=m[C],I=O[C];0!==u.length&&(u+=" + ",k+=" + "),u+="a"+q+"*M"+q+"*x"+q,k+=E+"*"+M+"*"+I,N+=E*M*I}return t+=u+")(mod m)\nx \u2261 ("+k+")(mod "+l+") \u2261 "+N+"(mod "+l+") \u2261 ",{value:N%=l,m:l,calculationSteps:t+=N+"(mod "+l+")"}},P=(a(40),function(e){Object(x.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(g.a)(m.a.mark((function e(t){var a,s,c,r,l,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target,s=n.state.equations,console.log("Input: equations=",s,", action=",a.id),1===s.length)if(c=G(s[0]),console.log(c),"string"===typeof c||c instanceof String)n.showMessageBox(O,c);else{if(-1===c.values[0])r="No answer.";else for(r="Answer:\n",l=0;l<c.values.length;l++)r+="x"+l+" \u2261 "+c.values[l]+" (mod "+c.n+")\n";n.setState({value:c.values.toString(),calculationSteps:r+"Check steps below:\n\n"+c.calculationSteps})}else i=K(s),console.log(i),"string"===typeof i||i instanceof String?n.showMessageBox(O,i):(o="Answer: x \u2261 "+i.value+" (mod "+i.m+"). ",n.setState({value:i.value,calculationSteps:o+"Check steps below:\n\n"+i.calculationSteps}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={equations:["ax \u2261 b (mod n)","x \u2261 b (mod n)","x \u2261 b (mod n)"],value:"",messageType:"",message:"",calculationSteps:""},n.showMessageBox=n.showMessageBox.bind(Object(v.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(j.a)(a,[{key:"showMessageBox",value:function(e,t){var a=this;this.setState({messageType:e,message:t,calculationSteps:"Error: "+t}),setTimeout((function(){a.setState({messageType:"",message:""})}),1e4)}},{key:"handleInputChange",value:function(e,t){var a=t.target.value,n=Object(y.a)(this.state.equations);n[e]=a,this.setState({equations:n})}},{key:"addEquation",value:function(){this.setState((function(e){return{equations:[].concat(Object(y.a)(e.equations),["x \u2261 b (mod n)"])}}))}},{key:"removeEquation",value:function(e){var t=Object(y.a)(this.state.equations);t.splice(e,1),this.setState({equations:t})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[" ",Object(n.jsxs)("div",{className:"modular-equations-algorithm-panel",children:[Object(n.jsx)("div",{className:"title",children:"Modular Equations"}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("label",{className:"content",children:["Enter an equation for calculating x. You can add as many equations as you need by using the + button",Object(n.jsx)("br",{}),"For example, enter 3x=1(mod6), or 3x\u22613(mod6)."]}),this.state.equations.map((function(t,a){return Object(n.jsxs)("label",{className:"actions",children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",value:t||"x \u2261 b (mod n)",onChange:e.handleInputChange.bind(e,a)})},a),Object(n.jsx)("div",{className:"edit-button",id:"remove",onClick:e.removeEquation.bind(e,a),children:"-"}),a===e.state.equations.length-1?Object(n.jsx)("div",{className:"edit-button",id:"add",onClick:e.addEquation.bind(e,a),children:"+"}):null]})})),Object(n.jsx)("label",{className:"actions",children:Object(n.jsx)("div",{className:"execute-button",id:"calculate",onClick:this.handleSubmit,children:"Go"})}),Object(n.jsx)("label",{children:"Output:"}),Object(n.jsx)("textarea",{className:"textarea",value:this.state.calculationSteps,readOnly:!0}),this.state.message?Object(n.jsx)(S,{type:this.state.messageType,message:this.state.message}):null]})]})]})}}]),a}(c.a.Component));var Y=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("img",{src:"./deadpool.png",className:"App-logo",alt:"logo"})}),Object(n.jsxs)(i.a,{history:h,children:[Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/euclideanalgorithm",component:C}),Object(n.jsx)(o.a,{exact:!0,path:"/gcdlcm",component:T}),Object(n.jsx)(o.a,{exact:!0,path:"/euler",component:W}),Object(n.jsx)(o.a,{exact:!0,path:"/modularequations",component:P})]}),Object(n.jsxs)("body",{className:"App-body",children:[Object(n.jsx)(i.b,{to:"/",className:"App-link",children:"Home"}),Object(n.jsx)(i.b,{to:"/euclideanalgorithm",className:"App-link",children:"Extended Euclid's Algorithm (Bezout)"}),Object(n.jsx)(i.b,{to:"/gcdlcm",className:"App-link",children:"GCD, LCM and Prime Factors"}),Object(n.jsx)(i.b,{to:"/euler",className:"App-link",children:"Euler (Function and Formula) and Gauss Sum"}),Object(n.jsx)(i.b,{to:"/modularequations",className:"App-link",children:"Modular Equations"}),Object(n.jsx)("label",{className:"copyright",children:"\xa9 All Rights ... wtf lol \xa9 RickShvetz \xa9 2020-2021 \xa9"})]})]})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root")),L()}},[[46,1,2]]]);
//# sourceMappingURL=main.6856f998.chunk.js.map