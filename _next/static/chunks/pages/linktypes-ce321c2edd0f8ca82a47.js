_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[105],{"+H8D":function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o);function s(n){var t=n.node,e=void 0===t?{x:0,y:0,r:15}:t;return a.a.createElement("circle",{cx:e.x,cy:e.y,r:e.r||15,fill:"#21D4FD"})}s.propTypes={node:i.a.shape({x:i.a.number.isRequired,y:i.a.number.isRequired,r:i.a.number})}},"1rRp":function(n,t,e){"use strict";var r=Math.PI,i=2*r,o=i-1e-6;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(n,t){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(n,t){this._+="L"+(this._x1=+n)+","+(this._y1=+t)},quadraticCurveTo:function(n,t,e,r){this._+="Q"+ +n+","+ +t+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(n,t,e,r,i,o){this._+="C"+ +n+","+ +t+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(n,t,e,i,o){n=+n,t=+t,e=+e,i=+i,o=+o;var a=this._x1,s=this._y1,u=e-n,c=i-t,f=a-n,h=s-t,l=f*f+h*h;if(o<0)throw new Error("negative radius: "+o);if(null===this._x1)this._+="M"+(this._x1=n)+","+(this._y1=t);else if(l>1e-6)if(Math.abs(h*u-c*f)>1e-6&&o){var p=e-a,d=i-s,y=u*u+c*c,m=p*p+d*d,v=Math.sqrt(y),g=Math.sqrt(l),b=o*Math.tan((r-Math.acos((y+l-m)/(2*v*g)))/2),x=b/g,_=b/v;Math.abs(x-1)>1e-6&&(this._+="L"+(n+x*f)+","+(t+x*h)),this._+="A"+o+","+o+",0,0,"+ +(h*p>f*d)+","+(this._x1=n+_*u)+","+(this._y1=t+_*c)}else this._+="L"+(this._x1=n)+","+(this._y1=t);else;},arc:function(n,t,e,a,s,u){n=+n,t=+t,u=!!u;var c=(e=+e)*Math.cos(a),f=e*Math.sin(a),h=n+c,l=t+f,p=1^u,d=u?a-s:s-a;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+h+","+l:(Math.abs(this._x1-h)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+h+","+l),e&&(d<0&&(d=d%i+i),d>o?this._+="A"+e+","+e+",0,1,"+p+","+(n-c)+","+(t-f)+"A"+e+","+e+",0,1,"+p+","+(this._x1=h)+","+(this._y1=l):d>1e-6&&(this._+="A"+e+","+e+",0,"+ +(d>=r)+","+p+","+(this._x1=n+e*Math.cos(s))+","+(this._y1=t+e*Math.sin(s))))},rect:function(n,t,e,r){this._+="M"+(this._x0=this._x1=+n)+","+(this._y0=this._y1=+t)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}},t.a=s},"3UBo":function(n,t,e){"use strict";e.r(t);var r=e("ERkP"),i=e.n(r),o=e("6wy5"),a=e("RZis"),s=e("gJ5E"),u=i.a.createElement;t.default=function(){return u(o.a,{events:!0,title:"Link Types",codeSandboxDirectoryName:"visx-linktypes",component:a.a,margin:{top:40,left:40,right:40,bottom:40},packageJson:s},"import React, { useState } from 'react';\nimport { Group } from '@visx/group';\nimport { hierarchy, Tree } from '@visx/hierarchy';\nimport { LinearGradient } from '@visx/gradient';\nimport { pointRadial } from 'd3-shape';\nimport useForceUpdate from './useForceUpdate';\nimport LinkControls from './LinkControls';\nimport getLinkComponent from './getLinkComponent';\n\ninterface TreeNode {\n  name: string;\n  isExpanded?: boolean;\n  children?: TreeNode[];\n}\n\nconst data: TreeNode = {\n  name: 'T',\n  children: [\n    {\n      name: 'A',\n      children: [\n        { name: 'A1' },\n        { name: 'A2' },\n        { name: 'A3' },\n        {\n          name: 'C',\n          children: [\n            {\n              name: 'C1',\n            },\n            {\n              name: 'D',\n              children: [\n                {\n                  name: 'D1',\n                },\n                {\n                  name: 'D2',\n                },\n                {\n                  name: 'D3',\n                },\n              ],\n            },\n          ],\n        },\n      ],\n    },\n    { name: 'Z' },\n    {\n      name: 'B',\n      children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],\n    },\n  ],\n};\n\nconst defaultMargin = { top: 30, left: 30, right: 30, bottom: 70 };\n\nexport type LinkTypesProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function Example({\n  width: totalWidth,\n  height: totalHeight,\n  margin = defaultMargin,\n}: LinkTypesProps) {\n  const [layout, setLayout] = useState<string>('cartesian');\n  const [orientation, setOrientation] = useState<string>('horizontal');\n  const [linkType, setLinkType] = useState<string>('diagonal');\n  const [stepPercent, setStepPercent] = useState<number>(0.5);\n  const forceUpdate = useForceUpdate();\n\n  const innerWidth = totalWidth - margin.left - margin.right;\n  const innerHeight = totalHeight - margin.top - margin.bottom;\n\n  let origin: { x: number; y: number };\n  let sizeWidth: number;\n  let sizeHeight: number;\n\n  if (layout === 'polar') {\n    origin = {\n      x: innerWidth / 2,\n      y: innerHeight / 2,\n    };\n    sizeWidth = 2 * Math.PI;\n    sizeHeight = Math.min(innerWidth, innerHeight) / 2;\n  } else {\n    origin = { x: 0, y: 0 };\n    if (orientation === 'vertical') {\n      sizeWidth = innerWidth;\n      sizeHeight = innerHeight;\n    } else {\n      sizeWidth = innerHeight;\n      sizeHeight = innerWidth;\n    }\n  }\n\n  const LinkComponent = getLinkComponent({ layout, linkType, orientation });\n\n  return totalWidth < 10 ? null : (\n    <div>\n      <LinkControls\n        layout={layout}\n        orientation={orientation}\n        linkType={linkType}\n        stepPercent={stepPercent}\n        setLayout={setLayout}\n        setOrientation={setOrientation}\n        setLinkType={setLinkType}\n        setStepPercent={setStepPercent}\n      />\n      <svg width={totalWidth} height={totalHeight}>\n        <LinearGradient id=\"links-gradient\" from=\"#fd9b93\" to=\"#fe6e9e\" />\n        <rect width={totalWidth} height={totalHeight} rx={14} fill=\"#272b4d\" />\n        <Group top={margin.top} left={margin.left}>\n          <Tree\n            root={hierarchy(data, d => (d.isExpanded ? null : d.children))}\n            size={[sizeWidth, sizeHeight]}\n            separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}\n          >\n            {tree => (\n              <Group top={origin.y} left={origin.x}>\n                {tree.links().map((link, i) => (\n                  <LinkComponent\n                    key={i}\n                    data={link}\n                    percent={stepPercent}\n                    stroke=\"rgb(254,110,158,0.6)\"\n                    strokeWidth=\"1\"\n                    fill=\"none\"\n                  />\n                ))}\n\n                {tree.descendants().map((node, key) => {\n                  const width = 40;\n                  const height = 20;\n\n                  let top: number;\n                  let left: number;\n                  if (layout === 'polar') {\n                    const [radialX, radialY] = pointRadial(node.x, node.y);\n                    top = radialY;\n                    left = radialX;\n                  } else if (orientation === 'vertical') {\n                    top = node.y;\n                    left = node.x;\n                  } else {\n                    top = node.x;\n                    left = node.y;\n                  }\n\n                  return (\n                    <Group top={top} left={left} key={key}>\n                      {node.depth === 0 && (\n                        <circle\n                          r={12}\n                          fill=\"url('#links-gradient')\"\n                          onClick={() => {\n                            node.data.isExpanded = !node.data.isExpanded;\n                            console.log(node);\n                            forceUpdate();\n                          }}\n                        />\n                      )}\n                      {node.depth !== 0 && (\n                        <rect\n                          height={height}\n                          width={width}\n                          y={-height / 2}\n                          x={-width / 2}\n                          fill=\"#272b4d\"\n                          stroke={node.data.children ? '#03c0dc' : '#26deb0'}\n                          strokeWidth={1}\n                          strokeDasharray={node.data.children ? '0' : '2,2'}\n                          strokeOpacity={node.data.children ? 1 : 0.6}\n                          rx={node.data.children ? 0 : 10}\n                          onClick={() => {\n                            node.data.isExpanded = !node.data.isExpanded;\n                            console.log(node);\n                            forceUpdate();\n                          }}\n                        />\n                      )}\n                      <text\n                        dy=\".33em\"\n                        fontSize={9}\n                        fontFamily=\"Arial\"\n                        textAnchor=\"middle\"\n                        style={{ pointerEvents: 'none' }}\n                        fill={node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0'}\n                      >\n                        {node.data.name}\n                      </text>\n                    </Group>\n                  );\n                })}\n              </Group>\n            )}\n          </Tree>\n        </Group>\n      </svg>\n    </div>\n  );\n}\n")}},"Cf/J":function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o);function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function u(n){var t=n.children,e=n.id,r=n.from,i=n.to,o=n.x1,u=n.y1,c=n.x2,f=n.y2,h=n.fromOffset,l=void 0===h?"0%":h,p=n.fromOpacity,d=void 0===p?1:p,y=n.toOffset,m=void 0===y?"100%":y,v=n.toOpacity,g=void 0===v?1:v,b=n.rotate,x=n.transform,_=n.vertical,O=void 0===_||_,k=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),T=o,w=c,E=u,L=f;return!O||T||w||E||L||(T="0",w="0",E="0",L="1"),a.a.createElement("defs",null,a.a.createElement("linearGradient",s({id:e,x1:T,y1:E,x2:w,y2:L,gradientTransform:b?"rotate("+b+")":x},k),!!t&&t,!t&&a.a.createElement("stop",{offset:l,stopColor:r,stopOpacity:d}),!t&&a.a.createElement("stop",{offset:m,stopColor:i,stopOpacity:g})))}u.propTypes={id:i.a.string.isRequired,from:i.a.string,to:i.a.string,x1:i.a.oneOfType([i.a.string,i.a.number]),x2:i.a.oneOfType([i.a.string,i.a.number]),y1:i.a.oneOfType([i.a.string,i.a.number]),y2:i.a.oneOfType([i.a.string,i.a.number]),fromOffset:i.a.oneOfType([i.a.string,i.a.number]),fromOpacity:i.a.oneOfType([i.a.string,i.a.number]),toOffset:i.a.oneOfType([i.a.string,i.a.number]),toOpacity:i.a.oneOfType([i.a.string,i.a.number]),rotate:i.a.oneOfType([i.a.string,i.a.number]),transform:i.a.string,children:i.a.node,vertical:i.a.bool}},"Df+F":function(n,t,e){"use strict";t.a=function(n){return function(){return n}}},Dhk8:function(n,t,e){var r=e("Syyo"),i=e("KCLV"),o=e("kHoZ"),a=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?i(n):o(n)}},ENE1:function(n,t,e){var r=e("IBsm");n.exports=function(){return r.Date.now()}},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("lEbO");function i(n,t){if(n){if("string"===typeof n)return Object(r.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(n,t):void 0}}},IBsm:function(n,t,e){var r=e("e93E"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();n.exports=o},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("aWzz"),i=e.n(r),o=e("ERkP"),a=e.n(o),s=e("O94r"),u=e.n(s);function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.top,e=void 0===t?0:t,r=n.left,i=void 0===r?0:r,o=n.transform,s=n.className,f=n.children,h=n.innerRef,l=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,["top","left","transform","className","children","innerRef"]);return a.a.createElement("g",c({ref:h,className:u()("visx-group",s),transform:o||"translate("+i+", "+e+")"},l),f)}f.propTypes={top:i.a.number,left:i.a.number,transform:i.a.string,className:i.a.string,children:i.a.node,innerRef:i.a.oneOfType([i.a.string,i.a.func,i.a.object])}},KCLV:function(n,t,e){var r=e("Syyo"),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;n.exports=function(n){var t=o.call(n,s),e=n[s];try{n[s]=void 0;var r=!0}catch(u){}var i=a.call(n);return r&&(t?n[s]=e:delete n[s]),i}},RNvQ:function(n,t,e){var r=e("tQYX"),i=e("ENE1"),o=e("nvU9"),a=Math.max,s=Math.min;n.exports=function(n,t,e){var u,c,f,h,l,p,d=0,y=!1,m=!1,v=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(t){var e=u,r=c;return u=c=void 0,d=t,h=n.apply(r,e)}function b(n){return d=n,l=setTimeout(_,t),y?g(n):h}function x(n){var e=n-p;return void 0===p||e>=t||e<0||m&&n-d>=f}function _(){var n=i();if(x(n))return O(n);l=setTimeout(_,function(n){var e=t-(n-p);return m?s(e,f-(n-d)):e}(n))}function O(n){return l=void 0,v&&u?g(n):(u=c=void 0,h)}function k(){var n=i(),e=x(n);if(u=arguments,c=this,p=n,e){if(void 0===l)return b(p);if(m)return clearTimeout(l),l=setTimeout(_,t),g(p)}return void 0===l&&(l=setTimeout(_,t)),h}return t=o(t)||0,r(e)&&(y=!!e.leading,f=(m="maxWait"in e)?a(o(e.maxWait)||0,t):f,v="trailing"in e?!!e.trailing:v),k.cancel=function(){void 0!==l&&clearTimeout(l),d=0,u=p=c=l=void 0},k.flush=function(){return void 0===l?h:O(i())},k}},Syyo:function(n,t,e){var r=e("IBsm").Symbol;n.exports=r},ZzoX:function(n,t,e){"use strict";function r(n){return n[0]}function i(n){return n[1]}e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}))},a88S:function(n,t,e){var r=e("Dhk8"),i=e("tLQN");n.exports=function(n){return"symbol"==typeof n||i(n)&&"[object Symbol]"==r(n)}},e93E:function(n,t,e){(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.exports=e}).call(this,e("fRV1"))},fRV1:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}n.exports=e},kHoZ:function(n,t){var e=Object.prototype.toString;n.exports=function(n){return e.call(n)}},lEbO:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,"a",(function(){return r}))},nvU9:function(n,t,e){var r=e("tQYX"),i=e("a88S"),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(i(n))return NaN;if(r(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=r(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=s.test(n);return e||u.test(n)?c(n.slice(2),e?2:8):a.test(n)?NaN:+n}},tLQN:function(n,t){n.exports=function(n){return null!=n&&"object"==typeof n}},tQYX:function(n,t){n.exports=function(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}},tshL:function(n,t,e){"use strict";function r(n){var t=0,e=n.children,r=e&&e.length;if(r)for(;--r>=0;)t+=e[r].value;else t=1;n.value=t}e.d(t,"c",(function(){return i})),e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return u}));function i(n,t){var e,r,i,a,c,f=new u(n),h=+n.value&&(f.value=n.value),l=[f];for(null==t&&(t=o);e=l.pop();)if(h&&(e.value=+e.data.value),(i=t(e.data))&&(c=i.length))for(e.children=new Array(c),a=c-1;a>=0;--a)l.push(r=e.children[a]=new u(i[a])),r.parent=e,r.depth=e.depth+1;return f.eachBefore(s)}function o(n){return n.children}function a(n){n.data=n.data.data}function s(n){var t=0;do{n.height=t}while((n=n.parent)&&n.height<++t)}function u(n){this.data=n,this.depth=this.height=0,this.parent=null}u.prototype=i.prototype={constructor:u,count:function(){return this.eachAfter(r)},each:function(n){var t,e,r,i,o=this,a=[o];do{for(t=a.reverse(),a=[];o=t.pop();)if(n(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(n){for(var t,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),t=i.children)for(e=0,r=t.length;e<r;++e)o.push(t[e]);for(;i=a.pop();)n(i);return this},eachBefore:function(n){for(var t,e,r=this,i=[r];r=i.pop();)if(n(r),t=r.children)for(e=t.length-1;e>=0;--e)i.push(t[e]);return this},sum:function(n){return this.eachAfter((function(t){for(var e=+n(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)e+=r[i].value;t.value=e}))},sort:function(n){return this.eachBefore((function(t){t.children&&t.children.sort(n)}))},path:function(n){for(var t=this,e=function(n,t){if(n===t)return n;var e=n.ancestors(),r=t.ancestors(),i=null;n=e.pop(),t=r.pop();for(;n===t;)i=n,n=e.pop(),t=r.pop();return i}(t,n),r=[t];t!==e;)t=t.parent,r.push(t);for(var i=r.length;n!==e;)r.splice(i,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,t=[n];n=n.parent;)t.push(n);return t},descendants:function(){var n=[];return this.each((function(t){n.push(t)})),n},leaves:function(){var n=[];return this.eachBefore((function(t){t.children||n.push(t)})),n},links:function(){var n=this,t=[];return n.each((function(e){e!==n&&t.push({source:e.parent,target:e})})),t},copy:function(){return i(this).eachBefore(a)}}},w4to:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=Array.prototype.slice},woTe:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/linktypes",function(){return e("3UBo")}])}},[["woTe",0,2,1,3,6,18,34]]]);