var Gp=Object.defineProperty;var $i=(i,e)=>()=>(i&&(e=i(i=0)),e);var Wp=(i,e)=>{for(var t in e)Gp(i,t,{get:e[t],enumerable:!0})};function ni(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function Ah(i,e){return(i%e+e)%e}function Nm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Om(i,e,t){return i!==e?(t-i)/(e-i):0}function Nr(i,e,t){return(1-t)*i+t*e}function Fm(i,e,t,n){return Nr(i,e,1-Math.exp(-t*n))}function Bm(i,e=1){return e-Math.abs(Ah(i,e*2)-e)}function km(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vm(i,e){return i+Math.random()*(e-i)}function Gm(i){return i*(.5-Math.random())}function Wm(i){i!==void 0&&(ju=i);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xm(i){return i*Gs}function qm(i){return i*Zs}function Oc(i){return(i&i-1)===0&&i!==0}function Ym(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function hd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $m(){let i=ma("canvas");return i.style.display="block",i}function Or(i){i in Ju||(Ju[i]=!0,console.warn(i))}function Ws(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ec(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ic(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function fc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function c0(i,e,t,n,s,r,o,a){let l;if(e.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:i}}function Wo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Rs),i.getVertexPosition(l,Cs),i.getVertexPosition(c,Ps);let h=c0(i,e,t,n,Rs,Cs,Ps,Vo);if(h){s&&(ko.fromBufferAttribute(s,a),zo.fromBufferAttribute(s,l),Ho.fromBufferAttribute(s,c),h.uv=Pi.getInterpolation(Vo,Rs,Cs,Ps,ko,zo,Ho,new le)),r&&(ko.fromBufferAttribute(r,a),zo.fromBufferAttribute(r,l),Ho.fromBufferAttribute(r,c),h.uv1=Pi.getInterpolation(Vo,Rs,Cs,Ps,ko,zo,Ho,new le),h.uv2=h.uv1),o&&(uf.fromBufferAttribute(o,a),ff.fromBufferAttribute(o,l),df.fromBufferAttribute(o,c),h.normal=Pi.getInterpolation(Vo,Rs,Cs,Ps,uf,ff,df,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};Pi.getNormal(Rs,Cs,Ps,u.normal),h.face=u}return h}function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function h0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fd(i){return i.getRenderTarget()===null?i.outputColorSpace:pt.workingColorSpace}function dd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function m0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,x=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&x.length===0&&i.bufferSubData(u,0,f),x.length!==0){for(let _=0,g=x.length;_<g;_++){let p=x[_];t?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}function $x(i,e,t,n,s,r,o){let a=new Xe(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(g,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Za)?(h===void 0&&(h=new De(new Rn(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:$s(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new De(new Vt(2,2),new It({name:"BackgroundMaterial",uniforms:$s(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(qo,fd(i)),n.buffers.color.setClear(qo.r,qo.g,qo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:x}}function jx(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null),c=l,h=!1;function u(D,O,k,B,J){let j=!1;if(o){let K=_(B,k,O);c!==K&&(c=K,d(c.object)),j=p(D,B,k,J),j&&y(D,B,k,J)}else{let K=O.wireframe===!0;(c.geometry!==B.id||c.program!==k.id||c.wireframe!==K)&&(c.geometry=B.id,c.program=k.id,c.wireframe=K,j=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,P(D,O,k,B),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function x(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,O,k){let B=k.wireframe===!0,J=a[D.id];J===void 0&&(J={},a[D.id]=J);let j=J[O.id];j===void 0&&(j={},J[O.id]=j);let K=j[B];return K===void 0&&(K=g(f()),j[B]=K),K}function g(D){let O=[],k=[],B=[];for(let J=0;J<s;J++)O[J]=0,k[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:B,object:D,attributes:{},index:null}}function p(D,O,k,B){let J=c.attributes,j=O.attributes,K=0,G=k.getAttributes();for(let Q in G)if(G[Q].location>=0){let ne=J[Q],ve=j[Q];if(ve===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;K++}return c.attributesNum!==K||c.index!==B}function y(D,O,k,B){let J={},j=O.attributes,K=0,G=k.getAttributes();for(let Q in G)if(G[Q].location>=0){let ne=j[Q];ne===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),J[Q]=ve,K++}c.attributes=J,c.attributesNum=K,c.index=B}function v(){let D=c.newAttributes;for(let O=0,k=D.length;O<k;O++)D[O]=0}function M(D){b(D,0)}function b(D,O){let k=c.newAttributes,B=c.enabledAttributes,J=c.attributeDivisors;k[D]=1,B[D]===0&&(i.enableVertexAttribArray(D),B[D]=1),J[D]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),J[D]=O)}function S(){let D=c.newAttributes,O=c.enabledAttributes;for(let k=0,B=O.length;k<B;k++)O[k]!==D[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function E(D,O,k,B,J,j,K){K===!0?i.vertexAttribIPointer(D,O,k,J,j):i.vertexAttribPointer(D,O,k,B,J,j)}function P(D,O,k,B){if(n.isWebGL2===!1&&(D.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let J=B.attributes,j=k.getAttributes(),K=O.defaultAttributeValues;for(let G in j){let Q=j[G];if(Q.location>=0){let X=J[G];if(X===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let ne=X.normalized,ve=X.itemSize,we=t.get(X);if(we===void 0)continue;let xe=we.buffer,ae=we.type,Pe=we.bytesPerElement,Y=n.isWebGL2===!0&&(ae===i.INT||ae===i.UNSIGNED_INT||X.gpuType===ed);if(X.isInterleavedBufferAttribute){let ge=X.data,U=ge.stride,re=X.offset;if(ge.isInstancedInterleavedBuffer){for(let Z=0;Z<Q.locationSize;Z++)b(Q.location+Z,ge.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Z=0;Z<Q.locationSize;Z++)M(Q.location+Z);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Z=0;Z<Q.locationSize;Z++)E(Q.location+Z,ve/Q.locationSize,ae,ne,U*Pe,(re+ve/Q.locationSize*Z)*Pe,Y)}else{if(X.isInstancedBufferAttribute){for(let ge=0;ge<Q.locationSize;ge++)b(Q.location+ge,X.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ge=0;ge<Q.locationSize;ge++)M(Q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ge=0;ge<Q.locationSize;ge++)E(Q.location+ge,ve/Q.locationSize,ae,ne,ve*Pe,ve/Q.locationSize*ge*Pe,Y)}}else if(K!==void 0){let ne=K[G];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Q.location,ne);break;case 3:i.vertexAttrib3fv(Q.location,ne);break;case 4:i.vertexAttrib4fv(Q.location,ne);break;default:i.vertexAttrib1fv(Q.location,ne)}}}}S()}function w(){z();for(let D in a){let O=a[D];for(let k in O){let B=O[k];for(let J in B)x(B[J].object),delete B[J];delete O[k]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;let O=a[D.id];for(let k in O){let B=O[k];for(let J in B)x(B[J].object),delete B[J];delete O[k]}delete a[D.id]}function N(D){for(let O in a){let k=a[O];if(k[D.id]===void 0)continue;let B=k[D.id];for(let J in B)x(B[J].object),delete B[J];delete k[D.id]}}function z(){V(),h=!0,c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:V,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:M,disableUnusedAttributes:S}}function Jx(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let _=0;_<f;_++)x+=u[_];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Kx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,M=o||e.has("OES_texture_float"),b=v&&M,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:S}}function Qx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new En,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,v=y*4,M=p.clippingState||null;l.value=M,M=h(x,f,v,d);for(let b=0;b!==v;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,x!==!0||g===null){let p=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function e_(i){let e=new WeakMap;function t(o,a){return a===Ic?o.mapping=qs:a===Lc&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ic||a===Lc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function t_(i){let e=[],t=[],n=[],s=i,r=i-ks+1+pf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ks?l=pf[o-i+ks-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,_=3,g=2,p=1,y=new Float32Array(_*x*d),v=new Float32Array(g*x*d),M=new Float32Array(p*x*d);for(let S=0;S<d;S++){let E=S%3*2/3-1,P=S>2?0:-1,w=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(w,_*x*S),v.set(f,g*x*S);let A=[S,S,S,S,S,S];M.set(A,p*x*S)}let b=new At;b.setAttribute("position",new Nt(y,_)),b.setAttribute("uv",new Nt(v,g)),b.setAttribute("faceIndex",new Nt(M,p)),e.push(b),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xf(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function n_(i,e,t){let n=new Float32Array(ts),s=new I(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function _f(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function vf(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function i_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ic||l===Lc,h=l===qs||l===Ys;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new js(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new js(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r_(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let _=f.morphAttributes[x];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let _=d[x];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,x=u.attributes.position,_=0;if(d!==null){let y=d.array;_=d.version;for(let v=0,M=y.length;v<M;v+=3){let b=y[v+0],S=y[v+1],E=y[v+2];f.push(b,S,S,E,E,b)}}else if(x!==void 0){let y=x.array;_=x.version;for(let v=0,M=y.length/3-1;v<M;v+=3){let b=v+0,S=v+1,E=v+2;f.push(b,S,S,E,E,b)}}else return;let g=new(hd(f)?Ma:ya)(f,1);g.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function o_(i,e,t,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,x){i.drawElements(r,x,a,d*l),t.update(x,r,1)}function u(d,x,_){if(_===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,x,a,d*l,_),t.update(x,r,_)}function f(d,x,_){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(d[p]/l,x[p]);else{g.multiDrawElementsWEBGL(r,x,0,a,d,0,_);let p=0;for(let y=0;y<_;y++)p+=x[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function a_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function l_(i,e){return i[0]-e[0]}function c_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function h_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==x){let D=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],P=0;y===!0&&(P=1),v===!0&&(P=2),M===!0&&(P=3);let w=h.attributes.position.count*P,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let N=new Float32Array(w*A*4*x),z=new _a(N,w,A,x);z.type=Ci,z.needsUpdate=!0;let V=P*4;for(let O=0;O<x;O++){let k=b[O],B=S[O],J=E[O],j=w*A*4*O;for(let K=0;K<k.count;K++){let G=K*V;y===!0&&(o.fromBufferAttribute(k,K),N[j+G+0]=o.x,N[j+G+1]=o.y,N[j+G+2]=o.z,N[j+G+3]=0),v===!0&&(o.fromBufferAttribute(B,K),N[j+G+4]=o.x,N[j+G+5]=o.y,N[j+G+6]=o.z,N[j+G+7]=0),M===!0&&(o.fromBufferAttribute(J,K),N[j+G+8]=o.x,N[j+G+9]=o.y,N[j+G+10]=o.z,N[j+G+11]=J.itemSize===4?o.w:1)}}_={count:x,texture:z,size:new le(w,A)},r.set(h,_),h.addEventListener("dispose",D)}let g=0;for(let y=0;y<f.length;y++)g+=f[y];let p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,x=n[h.id];if(x===void 0||x.length!==d){x=[];for(let v=0;v<d;v++)x[v]=[v,0];n[h.id]=x}for(let v=0;v<d;v++){let M=x[v];M[0]=v,M[1]=f[v]}x.sort(c_);for(let v=0;v<8;v++)v<d&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(l_);let _=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=a[v],b=M[0],S=M[1];b!==Number.MAX_SAFE_INTEGER&&S?(_&&h.getAttribute("morphTarget"+v)!==_[b]&&h.setAttribute("morphTarget"+v,_[b]),g&&h.getAttribute("morphNormal"+v)!==g[b]&&h.setAttribute("morphNormal"+v,g[b]),s[v]=S,p+=S):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function u_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ja(i,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Ef.set(n),i.uniformMatrix2fv(this.addr,!1,Ef),Wt(t,n)}}function x_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),Wt(t,n)}}function __(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;bf.set(n),i.uniformMatrix4fv(this.addr,!1,bf),Wt(t,n)}}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function S_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?md:pd;t.setTexture2D(e||r,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xd,s)}function C_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_d,s)}function P_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gd,s)}function I_(i){switch(i){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return x_;case 35676:return __;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return S_;case 36294:return E_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}function L_(i,e){i.uniform1fv(this.addr,e)}function D_(i,e){let t=sr(e,this.size,2);i.uniform2fv(this.addr,t)}function U_(i,e){let t=sr(e,this.size,3);i.uniform3fv(this.addr,t)}function N_(i,e){let t=sr(e,this.size,4);i.uniform4fv(this.addr,t)}function O_(i,e){let t=sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function F_(i,e){let t=sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B_(i,e){let t=sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k_(i,e){i.uniform1iv(this.addr,e)}function z_(i,e){i.uniform2iv(this.addr,e)}function H_(i,e){i.uniform3iv(this.addr,e)}function V_(i,e){i.uniform4iv(this.addr,e)}function G_(i,e){i.uniform1uiv(this.addr,e)}function W_(i,e){i.uniform2uiv(this.addr,e)}function X_(i,e){i.uniform3uiv(this.addr,e)}function q_(i,e){i.uniform4uiv(this.addr,e)}function Y_(i,e,t){let n=this.cache,s=e.length,r=Ja(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pd,r[o])}function Z_(i,e,t){let n=this.cache,s=e.length,r=Ja(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xd,r[o])}function $_(i,e,t){let n=this.cache,s=e.length,r=Ja(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_d,r[o])}function j_(i,e,t){let n=this.cache,s=e.length,r=Ja(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gd,r[o])}function J_(i){switch(i){case 5126:return L_;case 35664:return D_;case 35665:return U_;case 35666:return N_;case 35674:return O_;case 35675:return F_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return z_;case 35668:case 35672:return H_;case 35669:case 35673:return V_;case 5125:return G_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return j_}}function wf(i,e){i.seq.push(e),i.map[e.id]=e}function K_(i,e,t){let n=i.name,s=n.length;for(yc.lastIndex=0;;){let r=yc.exec(n),o=yc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wf(t,c===void 0?new Hc(a,i,e):new Vc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Gc(a),wf(t,u)),t=u}}}function Tf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function tv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function nv(i){let e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i),n;switch(e===t?n="":e===fa&&t===ua?n="LinearDisplayP3ToLinearSRGB":e===ua&&t===fa&&(n="LinearSRGBToLinearDisplayP3"),i){case gi:case ja:return[n,"LinearTransferOETF"];case Ct:case Th:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Af(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tv(i.getShaderSource(e),o)}else return s}function iv(i,e){let t=nv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sv(i,e){let t;switch(e){case Mh:t="Linear";break;case bh:t="Reinhard";break;case Sh:t="OptimizedCineon";break;case oo:t="ACESFilmic";break;case Eh:t="AgX";break;case mm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rv(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function av(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zs(i){return i!==""}function Rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Wc(i){return i.replace(cv,uv)}function uv(i,e){let t=rt[e];if(t===void 0){let n=hv.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}function Pf(i){return i.replace(fv,dv)}function dv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function If(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function mv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function xv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yh:e="ENVMAP_BLENDING_MULTIPLY";break;case dm:e="ENVMAP_BLENDING_MIX";break;case pm:e="ENVMAP_BLENDING_ADD";break}return e}function _v(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pv(t),c=mv(t),h=gv(t),u=xv(t),f=_v(t),d=t.isWebGL2?"":rv(t),x=ov(t),_=av(r),g=s.createProgram(),p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zs).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zs).join(`
`),y.length>0&&(y+=`
`)):(p=[If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),y=[d,If(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=Wc(o),o=Rf(o,t),o=Cf(o,t),a=Wc(a),a=Rf(a,t),a=Cf(a,t),o=Pf(o),a=Pf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=v+p+o,b=v+y+a,S=Tf(s,s.VERTEX_SHADER,M),E=Tf(s,s.FRAGMENT_SHADER,b);s.attachShader(g,S),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(z){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(S).trim(),O=s.getShaderInfoLog(E).trim(),k=!0,B=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,E);else{let J=Af(s,S,"vertex"),j=Af(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+J+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(D===""||O==="")&&(B=!1);B&&(z.diagnostics={runnable:k,programLog:V,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:y}})}s.deleteShader(S),s.deleteShader(E),w=new Xs(s,g),A=lv(s,g)}let w;this.getUniforms=function(){return w===void 0&&P(this),w};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,Q_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}function Mv(i,e,t,n,s,r,o){let a=new Vr,l=new Xc,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===0?"uv":`uv${w}`}function g(w,A,N,z,V){let D=z.fog,O=V.geometry,k=w.isMeshStandardMaterial?z.environment:null,B=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),J=B&&B.mapping===Za?B.image.height:null,j=x[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,G=K!==void 0?K.length:0,Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let X,ne,ve,we;if(j){let un=Qn[j];X=un.vertexShader,ne=un.fragmentShader}else X=w.vertexShader,ne=w.fragmentShader,l.update(w),ve=l.getVertexShaderID(w),we=l.getFragmentShaderID(w);let xe=i.getRenderTarget(),ae=V.isInstancedMesh===!0,Pe=V.isBatchedMesh===!0,Y=!!w.map,ge=!!w.matcap,U=!!B,re=!!w.aoMap,Z=!!w.lightMap,se=!!w.bumpMap,W=!!w.normalMap,Ae=!!w.displacementMap,de=!!w.emissiveMap,C=!!w.metalnessMap,R=!!w.roughnessMap,q=w.anisotropy>0,oe=w.clearcoat>0,he=w.iridescence>0,ce=w.sheen>0,Ue=w.transmission>0,be=q&&!!w.anisotropyMap,Le=oe&&!!w.clearcoatMap,ke=oe&&!!w.clearcoatNormalMap,Ge=oe&&!!w.clearcoatRoughnessMap,ue=he&&!!w.iridescenceMap,$e=he&&!!w.iridescenceThicknessMap,F=ce&&!!w.sheenColorMap,fe=ce&&!!w.sheenRoughnessMap,Te=!!w.specularMap,ye=!!w.specularColorMap,Oe=!!w.specularIntensityMap,je=Ue&&!!w.transmissionMap,et=Ue&&!!w.thicknessMap,Ye=!!w.gradientMap,Me=!!w.alphaMap,H=w.alphaTest>0,Se=!!w.alphaHash,Ee=!!w.extensions,Ve=!!O.attributes.uv1,ze=!!O.attributes.uv2,ft=!!O.attributes.uv3,dt=Ii;return w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(dt=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:X,fragmentShader:ne,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Pe,instancing:ae,instancingColor:ae&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:gi,map:Y,matcap:ge,envMap:U,envMapMode:U&&B.mapping,envMapCubeUVHeight:J,aoMap:re,lightMap:Z,bumpMap:se,normalMap:W,displacementMap:f&&Ae,emissiveMap:de,normalMapObjectSpace:W&&w.normalMapType===Am,normalMapTangentSpace:W&&w.normalMapType===$a,metalnessMap:C,roughnessMap:R,anisotropy:q,anisotropyMap:be,clearcoat:oe,clearcoatMap:Le,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ge,iridescence:he,iridescenceMap:ue,iridescenceThicknessMap:$e,sheen:ce,sheenColorMap:F,sheenRoughnessMap:fe,specularMap:Te,specularColorMap:ye,specularIntensityMap:Oe,transmission:Ue,transmissionMap:je,thicknessMap:et,gradientMap:Ye,opaque:w.transparent===!1&&w.blending===Vs,alphaMap:Me,alphaTest:H,alphaHash:Se,combine:w.combine,mapUv:Y&&_(w.map.channel),aoMapUv:re&&_(w.aoMap.channel),lightMapUv:Z&&_(w.lightMap.channel),bumpMapUv:se&&_(w.bumpMap.channel),normalMapUv:W&&_(w.normalMap.channel),displacementMapUv:Ae&&_(w.displacementMap.channel),emissiveMapUv:de&&_(w.emissiveMap.channel),metalnessMapUv:C&&_(w.metalnessMap.channel),roughnessMapUv:R&&_(w.roughnessMap.channel),anisotropyMapUv:be&&_(w.anisotropyMap.channel),clearcoatMapUv:Le&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:F&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(w.sheenRoughnessMap.channel),specularMapUv:Te&&_(w.specularMap.channel),specularColorMapUv:ye&&_(w.specularColorMap.channel),specularIntensityMapUv:Oe&&_(w.specularIntensityMap.channel),transmissionMapUv:je&&_(w.transmissionMap.channel),thicknessMapUv:et&&_(w.thicknessMap.channel),alphaMapUv:Me&&_(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(W||q),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:ze,vertexUv3s:ft,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(Y||Me),fog:!!D,useFog:w.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Y&&w.map.isVideoTexture===!0&&pt.getTransfer(w.map.colorSpace)===xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ut,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ee&&w.extensions.derivatives===!0,extensionFragDepth:Ee&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){let A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(let N in w.defines)A.push(N),A.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(y(A,w),v(A,w),A.push(i.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function y(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function v(w,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),w.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function M(w){let A=x[w.type],N;if(A){let z=Qn[A];N=Cn.clone(z.uniforms)}else N=w.uniforms;return N}function b(w,A){let N;for(let z=0,V=c.length;z<V;z++){let D=c[z];if(D.cacheKey===A){N=D,++N.usedTimes;break}}return N===void 0&&(N=new vv(i,A,w,r),c.push(N)),N}function S(w){if(--w.usedTimes===0){let A=c.indexOf(w);c[A]=c[c.length-1],c.pop(),w.destroy()}}function E(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:P}}function bv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Df(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,x,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,f,d,x,_,g){let p=o(u,f,d,x,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,x,_,g){let p=o(u,f,d,x,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||Sv),n.length>1&&n.sort(f||Lf),s.length>1&&s.sort(f||Lf)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ev(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Df,i.set(n,[o])):s>=r.length?(o=new Df,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Rv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cv(i,e){let t=new wv,n=Tv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new nt,a=new nt;function l(h,u){let f=0,d=0,x=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let _=0,g=0,p=0,y=0,v=0,M=0,b=0,S=0,E=0,P=0,w=0;h.sort(Rv);let A=u===!0?Math.PI:1;for(let z=0,V=h.length;z<V;z++){let D=h[z],O=D.color,k=D.intensity,B=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*k*A,d+=O.g*k*A,x+=O.b*k*A;else if(D.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(D.sh.coefficients[j],k);w++}else if(D.isDirectionalLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){let K=D.shadow,G=n.get(D);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,s.directionalShadow[_]=G,s.directionalShadowMap[_]=J,s.directionalShadowMatrix[_]=D.shadow.matrix,M++}s.directional[_]=j,_++}else if(D.isSpotLight){let j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(O).multiplyScalar(k*A),j.distance=B,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,s.spot[p]=j;let K=D.shadow;if(D.map&&(s.spotLightMap[E]=D.map,E++,K.updateMatrices(D),D.castShadow&&P++),s.spotLightMatrix[p]=K.matrix,D.castShadow){let G=n.get(D);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,s.spotShadow[p]=G,s.spotShadowMap[p]=J,S++}p++}else if(D.isRectAreaLight){let j=t.get(D);j.color.copy(O).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=j,y++}else if(D.isPointLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),j.distance=D.distance,j.decay=D.decay,D.castShadow){let K=D.shadow,G=n.get(D);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,s.pointShadow[g]=G,s.pointShadowMap[g]=J,s.pointShadowMatrix[g]=D.shadow.matrix,b++}s.point[g]=j,g++}else if(D.isHemisphereLight){let j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(k*A),j.groundColor.copy(D.groundColor).multiplyScalar(k*A),s.hemi[v]=j,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=x;let N=s.hash;(N.directionalLength!==_||N.pointLength!==g||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==v||N.numDirectionalShadows!==M||N.numPointShadows!==b||N.numSpotShadows!==S||N.numSpotMaps!==E||N.numLightProbes!==w)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=g,s.hemi.length=v,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=S+E-P,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=w,N.directionalLength=_,N.pointLength=g,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=v,N.numDirectionalShadows=M,N.numPointShadows=b,N.numSpotShadows=S,N.numSpotMaps=E,N.numLightProbes=w,s.version=Av++)}function c(h,u){let f=0,d=0,x=0,_=0,g=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let M=h[y];if(M.isDirectionalLight){let b=s.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(M.isSpotLight){let b=s.spot[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),x++}else if(M.isRectAreaLight){let b=s.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let b=s.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=s.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function Uf(i,e){let t=new Cv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Pv(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Uf(i,e),t.set(r,[l])):o>=a.length?(l=new Uf(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}function Dv(i,e,t){let n=new Gr,s=new le,r=new le,o=new _t,a=new Yc({depthPacking:Tm}),l=new Zc,c={},h=t.maxTextureSize,u={[Li]:an,[an]:Li,[Ut]:Ut},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Iv,fragmentShader:Lv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new At;x.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new De(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let p=this.type;this.render=function(S,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let w=i.getRenderTarget(),A=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(zt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=p!==di&&this.type===di,D=p===di&&this.type!==di;for(let O=0,k=S.length;O<k;O++){let B=S[O],J=B.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||V===!0||D===!0){let G=this.type!==di?{minFilter:Dt,magFilter:Dt}:{};J.map!==null&&J.map.dispose(),J.map=new jt(s.x,s.y,G),J.map.texture.name=B.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let K=J.getViewportCount();for(let G=0;G<K;G++){let Q=J.getViewport(G);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),z.viewport(o),J.updateMatrices(B,G),n=J.getFrustum(),M(E,P,J.camera,B,this.type)}J.isPointLightShadow!==!0&&this.type===di&&y(J,P),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,A,N)};function y(S,E){let P=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jt(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,P,d,_,null)}function v(S,E,P,w){let A=null,N=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)A=N;else if(A=P.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=A.uuid,V=E.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let O=D[V];O===void 0&&(O=A.clone(),D[V]=O,E.addEventListener("dispose",b)),A=O}if(A.visible=E.visible,A.wireframe=E.wireframe,w===di?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=i.properties.get(A);z.light=P}return A}function M(S,E,P,w,A){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===di)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let V=e.update(S),D=S.material;if(Array.isArray(D)){let O=V.groups;for(let k=0,B=O.length;k<B;k++){let J=O[k],j=D[J.materialIndex];if(j&&j.visible){let K=v(S,j,w,A);S.onBeforeShadow(i,S,E,P,V,K,J),i.renderBufferDirect(P,null,V,K,S,J),S.onAfterShadow(i,S,E,P,V,K,J)}}}else if(D.visible){let O=v(S,D,w,A);S.onBeforeShadow(i,S,E,P,V,O,null),i.renderBufferDirect(P,null,V,O,S,null),S.onAfterShadow(i,S,E,P,V,O,null)}}let z=S.children;for(let V=0,D=z.length;V<D;V++)M(z[V],E,P,w,A)}function b(S){S.target.removeEventListener("dispose",b);for(let P in c){let w=c[P],A=S.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function Uv(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Se=new _t,Ee=null,Ve=new _t(0,0,0,0);return{setMask:function(ze){Ee!==ze&&!H&&(i.colorMask(ze,ze,ze,ze),Ee=ze)},setLocked:function(ze){H=ze},setClear:function(ze,ft,dt,Yt,un){un===!0&&(ze*=Yt,ft*=Yt,dt*=Yt),Se.set(ze,ft,dt,Yt),Ve.equals(Se)===!1&&(i.clearColor(ze,ft,dt,Yt),Ve.copy(Se))},reset:function(){H=!1,Ee=null,Ve.set(-1,0,0,0)}}}function r(){let H=!1,Se=null,Ee=null,Ve=null;return{setTest:function(ze){ze?Pe(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(ze){Se!==ze&&!H&&(i.depthMask(ze),Se=ze)},setFunc:function(ze){if(Ee!==ze){switch(ze){case om:i.depthFunc(i.NEVER);break;case am:i.depthFunc(i.ALWAYS);break;case lm:i.depthFunc(i.LESS);break;case aa:i.depthFunc(i.LEQUAL);break;case cm:i.depthFunc(i.EQUAL);break;case hm:i.depthFunc(i.GEQUAL);break;case um:i.depthFunc(i.GREATER);break;case fm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ze}},setLocked:function(ze){H=ze},setClear:function(ze){Ve!==ze&&(i.clearDepth(ze),Ve=ze)},reset:function(){H=!1,Se=null,Ee=null,Ve=null}}}function o(){let H=!1,Se=null,Ee=null,Ve=null,ze=null,ft=null,dt=null,Yt=null,un=null;return{setTest:function(vt){H||(vt?Pe(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(vt){Se!==vt&&!H&&(i.stencilMask(vt),Se=vt)},setFunc:function(vt,fn,Kn){(Ee!==vt||Ve!==fn||ze!==Kn)&&(i.stencilFunc(vt,fn,Kn),Ee=vt,Ve=fn,ze=Kn)},setOp:function(vt,fn,Kn){(ft!==vt||dt!==fn||Yt!==Kn)&&(i.stencilOp(vt,fn,Kn),ft=vt,dt=fn,Yt=Kn)},setLocked:function(vt){H=vt},setClear:function(vt){un!==vt&&(i.clearStencil(vt),un=vt)},reset:function(){H=!1,Se=null,Ee=null,Ve=null,ze=null,ft=null,dt=null,Yt=null,un=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},x=new WeakMap,_=[],g=null,p=!1,y=null,v=null,M=null,b=null,S=null,E=null,P=null,w=new Xe(0,0,0),A=0,N=!1,z=null,V=null,D=null,O=null,k=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=j>=2);let G=null,Q={},X=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ve=new _t().fromArray(X),we=new _t().fromArray(ne);function xe(H,Se,Ee,Ve){let ze=new Uint8Array(4),ft=i.createTexture();i.bindTexture(H,ft),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<Ee;dt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Se,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Se+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return ft}let ae={};ae[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),l.setFunc(aa),de(!1),C(pu),Pe(i.CULL_FACE),W(zt);function Pe(H){f[H]!==!0&&(i.enable(H),f[H]=!0)}function Y(H){f[H]!==!1&&(i.disable(H),f[H]=!1)}function ge(H,Se){return d[H]!==Se?(i.bindFramebuffer(H,Se),d[H]=Se,n&&(H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Se),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Se)),!0):!1}function U(H,Se){let Ee=_,Ve=!1;if(H)if(Ee=x.get(Se),Ee===void 0&&(Ee=[],x.set(Se,Ee)),H.isWebGLMultipleRenderTargets){let ze=H.texture;if(Ee.length!==ze.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,dt=ze.length;ft<dt;ft++)Ee[ft]=i.COLOR_ATTACHMENT0+ft;Ee.length=ze.length,Ve=!0}}else Ee[0]!==i.COLOR_ATTACHMENT0&&(Ee[0]=i.COLOR_ATTACHMENT0,Ve=!0);else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Ve=!0);Ve&&(t.isWebGL2?i.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function re(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let Z={[On]:i.FUNC_ADD,[Zp]:i.FUNC_SUBTRACT,[$p]:i.FUNC_REVERSE_SUBTRACT};if(n)Z[xu]=i.MIN,Z[_u]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Z[xu]=H.MIN_EXT,Z[_u]=H.MAX_EXT)}let se={[ir]:i.ZERO,[jp]:i.ONE,[Jp]:i.SRC_COLOR,[Cc]:i.SRC_ALPHA,[tm]:i.SRC_ALPHA_SATURATE,[Ya]:i.DST_COLOR,[qa]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[em]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[nm]:i.CONSTANT_COLOR,[im]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[rm]:i.ONE_MINUS_CONSTANT_ALPHA};function W(H,Se,Ee,Ve,ze,ft,dt,Yt,un,vt){if(H===zt){p===!0&&(Y(i.BLEND),p=!1);return}if(p===!1&&(Pe(i.BLEND),p=!0),H!==vh){if(H!==y||vt!==N){if((v!==On||S!==On)&&(i.blendEquation(i.FUNC_ADD),v=On,S=On),vt)switch(H){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,b=null,E=null,P=null,w.set(0,0,0),A=0,y=H,N=vt}return}ze=ze||Se,ft=ft||Ee,dt=dt||Ve,(Se!==v||ze!==S)&&(i.blendEquationSeparate(Z[Se],Z[ze]),v=Se,S=ze),(Ee!==M||Ve!==b||ft!==E||dt!==P)&&(i.blendFuncSeparate(se[Ee],se[Ve],se[ft],se[dt]),M=Ee,b=Ve,E=ft,P=dt),(Yt.equals(w)===!1||un!==A)&&(i.blendColor(Yt.r,Yt.g,Yt.b,un),w.copy(Yt),A=un),y=H,N=!1}function Ae(H,Se){H.side===Ut?Y(i.CULL_FACE):Pe(i.CULL_FACE);let Ee=H.side===an;Se&&(Ee=!Ee),de(Ee),H.blending===Vs&&H.transparent===!1?W(zt):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Ve=H.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(H){z!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),z=H)}function C(H){H!==Xp?(Pe(i.CULL_FACE),H!==V&&(H===pu?i.cullFace(i.BACK):H===qp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),V=H}function R(H){H!==D&&(J&&i.lineWidth(H),D=H)}function q(H,Se,Ee){H?(Pe(i.POLYGON_OFFSET_FILL),(O!==Se||k!==Ee)&&(i.polygonOffset(Se,Ee),O=Se,k=Ee)):Y(i.POLYGON_OFFSET_FILL)}function oe(H){H?Pe(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function he(H){H===void 0&&(H=i.TEXTURE0+B-1),G!==H&&(i.activeTexture(H),G=H)}function ce(H,Se,Ee){Ee===void 0&&(G===null?Ee=i.TEXTURE0+B-1:Ee=G);let Ve=Q[Ee];Ve===void 0&&(Ve={type:void 0,texture:void 0},Q[Ee]=Ve),(Ve.type!==H||Ve.texture!==Se)&&(G!==Ee&&(i.activeTexture(Ee),G=Ee),i.bindTexture(H,Se||ae[H]),Ve.type=H,Ve.texture=Se)}function Ue(){let H=Q[G];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function be(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(H){ve.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ve.copy(H))}function je(H){we.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),we.copy(H))}function et(H,Se){let Ee=u.get(Se);Ee===void 0&&(Ee=new WeakMap,u.set(Se,Ee));let Ve=Ee.get(H);Ve===void 0&&(Ve=i.getUniformBlockIndex(Se,H.name),Ee.set(H,Ve))}function Ye(H,Se){let Ve=u.get(Se).get(H);h.get(Se)!==Ve&&(i.uniformBlockBinding(Se,Ve,H.__bindingPointIndex),h.set(Se,Ve))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},G=null,Q={},d={},x=new WeakMap,_=[],g=null,p=!1,y=null,v=null,M=null,b=null,S=null,E=null,P=null,w=new Xe(0,0,0),A=0,N=!1,z=null,V=null,D=null,O=null,k=null,ve.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Y,bindFramebuffer:ge,drawBuffers:U,useProgram:re,setBlending:W,setMaterial:Ae,setFlipSided:de,setCullFace:C,setLineWidth:R,setPolygonOffset:q,setScissorTest:oe,activeTexture:he,bindTexture:ce,unbindTexture:Ue,compressedTexImage2D:be,compressedTexImage3D:Le,texImage2D:Te,texImage3D:ye,updateUBOMapping:et,uniformBlockBinding:Ye,texStorage2D:F,texStorage3D:fe,texSubImage2D:ke,texSubImage3D:Ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:$e,scissor:Oe,viewport:je,reset:Me}}function Nv(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,R){return d?new OffscreenCanvas(C,R):ma("canvas")}function _(C,R,q,oe){let he=1;if((C.width>oe||C.height>oe)&&(he=oe/Math.max(C.width,C.height)),he<1||R===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ce=R?pa:Math.floor,Ue=ce(he*C.width),be=ce(he*C.height);u===void 0&&(u=x(Ue,be));let Le=q?x(Ue,be):u;return Le.width=Ue,Le.height=be,Le.getContext("2d").drawImage(C,0,0,Ue,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ue+"x"+be+")."),Le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Oc(C.width)&&Oc(C.height)}function p(C){return a?!1:C.wrapS!==wn||C.wrapT!==wn||C.minFilter!==Dt&&C.minFilter!==Nn}function y(C,R){return C.generateMipmaps&&R&&C.minFilter!==Dt&&C.minFilter!==Nn}function v(C){i.generateMipmap(C)}function M(C,R,q,oe,he=!1){if(a===!1)return R;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=R;if(R===i.RED&&(q===i.FLOAT&&(ce=i.R32F),q===i.HALF_FLOAT&&(ce=i.R16F),q===i.UNSIGNED_BYTE&&(ce=i.R8)),R===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ce=i.R8UI),q===i.UNSIGNED_SHORT&&(ce=i.R16UI),q===i.UNSIGNED_INT&&(ce=i.R32UI),q===i.BYTE&&(ce=i.R8I),q===i.SHORT&&(ce=i.R16I),q===i.INT&&(ce=i.R32I)),R===i.RG&&(q===i.FLOAT&&(ce=i.RG32F),q===i.HALF_FLOAT&&(ce=i.RG16F),q===i.UNSIGNED_BYTE&&(ce=i.RG8)),R===i.RGBA){let Ue=he?ha:pt.getTransfer(oe);q===i.FLOAT&&(ce=i.RGBA32F),q===i.HALF_FLOAT&&(ce=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ce=Ue===xt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(C,R,q){return y(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==Nn?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function S(C){return C===Dt||C===vu||C===ql?i.NEAREST:i.LINEAR}function E(C){let R=C.target;R.removeEventListener("dispose",E),w(R),R.isVideoTexture&&h.delete(R)}function P(C){let R=C.target;R.removeEventListener("dispose",P),N(R)}function w(C){let R=n.get(C);if(R.__webglInit===void 0)return;let q=C.source,oe=f.get(q);if(oe){let he=oe[R.__cacheKey];he.usedTimes--,he.usedTimes===0&&A(C),Object.keys(oe).length===0&&f.delete(q)}n.remove(C)}function A(C){let R=n.get(C);i.deleteTexture(R.__webglTexture);let q=C.source,oe=f.get(q);delete oe[R.__cacheKey],o.memory.textures--}function N(C){let R=C.texture,q=n.get(C),oe=n.get(R);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(q.__webglFramebuffer[he]))for(let ce=0;ce<q.__webglFramebuffer[he].length;ce++)i.deleteFramebuffer(q.__webglFramebuffer[he][ce]);else i.deleteFramebuffer(q.__webglFramebuffer[he]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[he])}else{if(Array.isArray(q.__webglFramebuffer))for(let he=0;he<q.__webglFramebuffer.length;he++)i.deleteFramebuffer(q.__webglFramebuffer[he]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let he=0;he<q.__webglColorRenderbuffer.length;he++)q.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[he]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let he=0,ce=R.length;he<ce;he++){let Ue=n.get(R[he]);Ue.__webglTexture&&(i.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(R[he])}n.remove(R),n.remove(C)}let z=0;function V(){z=0}function D(){let C=z;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function O(C){let R=[];return R.push(C.wrapS),R.push(C.wrapT),R.push(C.wrapR||0),R.push(C.magFilter),R.push(C.minFilter),R.push(C.anisotropy),R.push(C.internalFormat),R.push(C.format),R.push(C.type),R.push(C.generateMipmaps),R.push(C.premultiplyAlpha),R.push(C.flipY),R.push(C.unpackAlignment),R.push(C.colorSpace),R.join()}function k(C,R){let q=n.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(q,C,R);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+R)}function B(C,R){let q=n.get(C);if(C.version>0&&q.__version!==C.version){ve(q,C,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+R)}function J(C,R){let q=n.get(C);if(C.version>0&&q.__version!==C.version){ve(q,C,R);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+R)}function j(C,R){let q=n.get(C);if(C.version>0&&q.__version!==C.version){we(q,C,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+R)}let K={[Fn]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Dc]:i.MIRRORED_REPEAT},G={[Dt]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[ql]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[gm]:i.LINEAR_MIPMAP_NEAREST,[Hr]:i.LINEAR_MIPMAP_LINEAR},Q={[Rm]:i.NEVER,[Um]:i.ALWAYS,[Cm]:i.LESS,[ld]:i.LEQUAL,[Pm]:i.EQUAL,[Dm]:i.GEQUAL,[Im]:i.GREATER,[Lm]:i.NOTEQUAL};function X(C,R,q){if(q?(i.texParameteri(C,i.TEXTURE_WRAP_S,K[R.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,K[R.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,K[R.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,G[R.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,G[R.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(R.wrapS!==wn||R.wrapT!==wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,S(R.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,S(R.minFilter)),R.minFilter!==Dt&&R.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Q[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===Dt||R.minFilter!==ql&&R.minFilter!==Hr||R.type===Ci&&e.has("OES_texture_float_linear")===!1||a===!1&&R.type===vn&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function ne(C,R){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",E));let oe=R.source,he=f.get(oe);he===void 0&&(he={},f.set(oe,he));let ce=O(R);if(ce!==C.__cacheKey){he[ce]===void 0&&(he[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[ce].usedTimes++;let Ue=he[C.__cacheKey];Ue!==void 0&&(he[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(R)),C.__cacheKey=ce,C.__webglTexture=he[ce].texture}return q}function ve(C,R,q){let oe=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=i.TEXTURE_3D);let he=ne(C,R),ce=R.source;t.bindTexture(oe,C.__webglTexture,i.TEXTURE0+q);let Ue=n.get(ce);if(ce.version!==Ue.__version||he===!0){t.activeTexture(i.TEXTURE0+q);let be=pt.getPrimaries(pt.workingColorSpace),Le=R.colorSpace===_n?null:pt.getPrimaries(R.colorSpace),ke=R.colorSpace===_n||be===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ge=p(R)&&g(R.image)===!1,ue=_(R.image,Ge,!1,s.maxTextureSize);ue=de(R,ue);let $e=g(ue)||a,F=r.convert(R.format,R.colorSpace),fe=r.convert(R.type),Te=M(R.internalFormat,F,fe,R.colorSpace,R.isVideoTexture);X(oe,R,$e);let ye,Oe=R.mipmaps,je=a&&R.isVideoTexture!==!0&&Te!==od,et=Ue.__version===void 0||he===!0,Ye=b(R,ue,$e);if(R.isDepthTexture)Te=i.DEPTH_COMPONENT,a?R.type===Ci?Te=i.DEPTH_COMPONENT32F:R.type===Ri?Te=i.DEPTH_COMPONENT24:R.type===mi?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:R.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===ns&&Te===i.DEPTH_COMPONENT&&R.type!==wh&&R.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Ri,fe=r.convert(R.type)),R.format===Di&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,R.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=mi,fe=r.convert(R.type))),et&&(je?t.texStorage2D(i.TEXTURE_2D,1,Te,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Te,ue.width,ue.height,0,F,fe,null));else if(R.isDataTexture)if(Oe.length>0&&$e){je&&et&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,Oe[0].width,Oe[0].height);for(let Me=0,H=Oe.length;Me<H;Me++)ye=Oe[Me],je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ye.width,ye.height,F,fe,ye.data):t.texImage2D(i.TEXTURE_2D,Me,Te,ye.width,ye.height,0,F,fe,ye.data);R.generateMipmaps=!1}else je?(et&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,F,fe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Te,ue.width,ue.height,0,F,fe,ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){je&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,Te,Oe[0].width,Oe[0].height,ue.depth);for(let Me=0,H=Oe.length;Me<H;Me++)ye=Oe[Me],R.format!==Tn?F!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ye.width,ye.height,ue.depth,F,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Te,ye.width,ye.height,ue.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ye.width,ye.height,ue.depth,F,fe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Te,ye.width,ye.height,ue.depth,0,F,fe,ye.data)}else{je&&et&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,Oe[0].width,Oe[0].height);for(let Me=0,H=Oe.length;Me<H;Me++)ye=Oe[Me],R.format!==Tn?F!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,ye.width,ye.height,F,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ye.width,ye.height,F,fe,ye.data):t.texImage2D(i.TEXTURE_2D,Me,Te,ye.width,ye.height,0,F,fe,ye.data)}else if(R.isDataArrayTexture)je?(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,Te,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,F,fe,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ue.width,ue.height,ue.depth,0,F,fe,ue.data);else if(R.isData3DTexture)je?(et&&t.texStorage3D(i.TEXTURE_3D,Ye,Te,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,F,fe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ue.width,ue.height,ue.depth,0,F,fe,ue.data);else if(R.isFramebufferTexture){if(et)if(je)t.texStorage2D(i.TEXTURE_2D,Ye,Te,ue.width,ue.height);else{let Me=ue.width,H=ue.height;for(let Se=0;Se<Ye;Se++)t.texImage2D(i.TEXTURE_2D,Se,Te,Me,H,0,F,fe,null),Me>>=1,H>>=1}}else if(Oe.length>0&&$e){je&&et&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,Oe[0].width,Oe[0].height);for(let Me=0,H=Oe.length;Me<H;Me++)ye=Oe[Me],je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,F,fe,ye):t.texImage2D(i.TEXTURE_2D,Me,Te,F,fe,ye);R.generateMipmaps=!1}else je?(et&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,F,fe,ue)):t.texImage2D(i.TEXTURE_2D,0,Te,F,fe,ue);y(R,$e)&&v(oe),Ue.__version=ce.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function we(C,R,q){if(R.image.length!==6)return;let oe=ne(C,R),he=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let ce=n.get(he);if(he.version!==ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let Ue=pt.getPrimaries(pt.workingColorSpace),be=R.colorSpace===_n?null:pt.getPrimaries(R.colorSpace),Le=R.colorSpace===_n||Ue===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ke=R.isCompressedTexture||R.image[0].isCompressedTexture,Ge=R.image[0]&&R.image[0].isDataTexture,ue=[];for(let Me=0;Me<6;Me++)!ke&&!Ge?ue[Me]=_(R.image[Me],!1,!0,s.maxCubemapSize):ue[Me]=Ge?R.image[Me].image:R.image[Me],ue[Me]=de(R,ue[Me]);let $e=ue[0],F=g($e)||a,fe=r.convert(R.format,R.colorSpace),Te=r.convert(R.type),ye=M(R.internalFormat,fe,Te,R.colorSpace),Oe=a&&R.isVideoTexture!==!0,je=ce.__version===void 0||oe===!0,et=b(R,$e,F);X(i.TEXTURE_CUBE_MAP,R,F);let Ye;if(ke){Oe&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,et,ye,$e.width,$e.height);for(let Me=0;Me<6;Me++){Ye=ue[Me].mipmaps;for(let H=0;H<Ye.length;H++){let Se=Ye[H];R.format!==Tn?fe!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,0,0,Se.width,Se.height,fe,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,0,0,Se.width,Se.height,fe,Te,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,ye,Se.width,Se.height,0,fe,Te,Se.data)}}}else{Ye=R.mipmaps,Oe&&je&&(Ye.length>0&&et++,t.texStorage2D(i.TEXTURE_CUBE_MAP,et,ye,ue[0].width,ue[0].height));for(let Me=0;Me<6;Me++)if(Ge){Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ue[Me].width,ue[Me].height,fe,Te,ue[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ye,ue[Me].width,ue[Me].height,0,fe,Te,ue[Me].data);for(let H=0;H<Ye.length;H++){let Ee=Ye[H].image[Me].image;Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,0,0,Ee.width,Ee.height,fe,Te,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,ye,Ee.width,Ee.height,0,fe,Te,Ee.data)}}else{Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,fe,Te,ue[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ye,fe,Te,ue[Me]);for(let H=0;H<Ye.length;H++){let Se=Ye[H];Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,0,0,fe,Te,Se.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,ye,fe,Te,Se.image[Me])}}}y(R,F)&&v(i.TEXTURE_CUBE_MAP),ce.__version=he.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function xe(C,R,q,oe,he,ce){let Ue=r.convert(q.format,q.colorSpace),be=r.convert(q.type),Le=M(q.internalFormat,Ue,be,q.colorSpace);if(!n.get(R).__hasExternalTextures){let Ge=Math.max(1,R.width>>ce),ue=Math.max(1,R.height>>ce);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ce,Le,Ge,ue,R.depth,0,Ue,be,null):t.texImage2D(he,ce,Le,Ge,ue,0,Ue,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),W(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,he,n.get(q).__webglTexture,0,se(R)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,he,n.get(q).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,R,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),R.depthBuffer&&!R.stencilBuffer){let oe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||W(R)){let he=R.depthTexture;he&&he.isDepthTexture&&(he.type===Ci?oe=i.DEPTH_COMPONENT32F:he.type===Ri&&(oe=i.DEPTH_COMPONENT24));let ce=se(R);W(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,oe,R.width,R.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,oe,R.width,R.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,R.width,R.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(R.depthBuffer&&R.stencilBuffer){let oe=se(R);q&&W(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,R.width,R.height):W(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let oe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let he=0;he<oe.length;he++){let ce=oe[he],Ue=r.convert(ce.format,ce.colorSpace),be=r.convert(ce.type),Le=M(ce.internalFormat,Ue,be,ce.colorSpace),ke=se(R);q&&W(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Le,R.width,R.height):W(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Le,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Le,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(C,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);let oe=n.get(R.depthTexture).__webglTexture,he=se(R);if(R.depthTexture.format===ns)W(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(R.depthTexture.format===Di)W(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Y(C){let R=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Pe(R.__webglFramebuffer,C)}else if(q){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]=i.createRenderbuffer(),ae(R.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),ae(R.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(C,R,q){let oe=n.get(C);R!==void 0&&xe(oe.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Y(C)}function U(C){let R=C.texture,q=n.get(C),oe=n.get(R);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=R.version,o.memory.textures++);let he=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,Ue=g(C)||a;if(he){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(a&&R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Le=0;Le<R.mipmaps.length;Le++)q.__webglFramebuffer[be][Le]=i.createFramebuffer()}else q.__webglFramebuffer[be]=i.createFramebuffer()}else{if(a&&R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)q.__webglFramebuffer[be]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let be=C.texture;for(let Le=0,ke=be.length;Le<ke;Le++){let Ge=n.get(be[Le]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&W(C)===!1){let be=ce?R:[R];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Le=0;Le<be.length;Le++){let ke=be[Le];q.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Le]);let Ge=r.convert(ke.format,ke.colorSpace),ue=r.convert(ke.type),$e=M(ke.internalFormat,Ge,ue,ke.colorSpace,C.isXRRenderTarget===!0),F=se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,$e,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,q.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),X(i.TEXTURE_CUBE_MAP,R,Ue);for(let be=0;be<6;be++)if(a&&R.mipmaps&&R.mipmaps.length>0)for(let Le=0;Le<R.mipmaps.length;Le++)xe(q.__webglFramebuffer[be][Le],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le);else xe(q.__webglFramebuffer[be],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(R,Ue)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let be=C.texture;for(let Le=0,ke=be.length;Le<ke;Le++){let Ge=be[Le],ue=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),X(i.TEXTURE_2D,Ge,Ue),xe(q.__webglFramebuffer,C,Ge,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),y(Ge,Ue)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?be=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,oe.__webglTexture),X(be,R,Ue),a&&R.mipmaps&&R.mipmaps.length>0)for(let Le=0;Le<R.mipmaps.length;Le++)xe(q.__webglFramebuffer[Le],C,R,i.COLOR_ATTACHMENT0,be,Le);else xe(q.__webglFramebuffer,C,R,i.COLOR_ATTACHMENT0,be,0);y(R,Ue)&&v(be),t.unbindTexture()}C.depthBuffer&&Y(C)}function re(C){let R=g(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let oe=0,he=q.length;oe<he;oe++){let ce=q[oe];if(y(ce,R)){let Ue=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(ce).__webglTexture;t.bindTexture(Ue,be),v(Ue),t.unbindTexture()}}}function Z(C){if(a&&C.samples>0&&W(C)===!1){let R=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,oe=C.height,he=i.COLOR_BUFFER_BIT,ce=[],Ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(C),Le=C.isWebGLMultipleRenderTargets===!0;if(Le)for(let ke=0;ke<R.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){ce.push(i.COLOR_ATTACHMENT0+ke),C.depthBuffer&&ce.push(Ue);let Ge=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Ge===!1&&(C.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ke]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),Le){let ue=n.get(R[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,q,oe,0,0,q,oe,he,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let ke=0;ke<R.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,be.__webglColorRenderbuffer[ke]);let Ge=n.get(R[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function se(C){return Math.min(s.maxSamples,C.samples)}function W(C){let R=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ae(C){let R=o.render.frame;h.get(C)!==R&&(h.set(C,R),C.update())}function de(C,R){let q=C.colorSpace,oe=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Nc||q!==gi&&q!==_n&&(pt.getTransfer(q)===xt?a===!1?e.has("EXT_sRGB")===!0&&oe===Tn?(C.format=Nc,C.minFilter=Nn,C.generateMipmaps=!1):R=ga.sRGBToLinear(R):(oe!==Tn||he!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}this.allocateTextureUnit=D,this.resetTextureUnits=V,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=ge,this.setupRenderTarget=U,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=W}function Ov(i,e,t){let n=t.isWebGL2;function s(r,o=_n){let a,l=pt.getTransfer(o);if(r===ti)return i.UNSIGNED_BYTE;if(r===td)return i.UNSIGNED_SHORT_4_4_4_4;if(r===nd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===xm)return i.BYTE;if(r===_m)return i.SHORT;if(r===wh)return i.UNSIGNED_SHORT;if(r===ed)return i.INT;if(r===Ri)return i.UNSIGNED_INT;if(r===Ci)return i.FLOAT;if(r===vn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===vm)return i.ALPHA;if(r===Tn)return i.RGBA;if(r===ym)return i.LUMINANCE;if(r===Mm)return i.LUMINANCE_ALPHA;if(r===ns)return i.DEPTH_COMPONENT;if(r===Di)return i.DEPTH_STENCIL;if(r===Nc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bm)return i.RED;if(r===id)return i.RED_INTEGER;if(r===Sm)return i.RG;if(r===sd)return i.RG_INTEGER;if(r===rd)return i.RGBA_INTEGER;if(r===Yl||r===Zl||r===$l||r===jl)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Yl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Yl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$l)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yu||r===Mu||r===bu||r===Su)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Su)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===od)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Eu||r===wu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Eu)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===wu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tu||r===Au||r===Ru||r===Cu||r===Pu||r===Iu||r===Lu||r===Du||r===Uu||r===Nu||r===Ou||r===Fu||r===Bu||r===ku)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Tu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Au)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ru)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Iu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Du)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ou)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ku)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jl||r===zu||r===Hu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Jl)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Em||r===Vu||r===Gu||r===Wu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Jl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Bv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,fd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kv(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=s[y.id];M===void 0&&(x(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",g));let b=v.program;n.updateUBOMapping(y,b);let S=e.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function h(y){let v=u();y.__bindingPointIndex=v;let M=i.createBuffer(),b=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],M=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,E=M.length;S<E;S++){let P=Array.isArray(M[S])?M[S]:[M[S]];for(let w=0,A=P.length;w<A;w++){let N=P[w];if(d(N,S,w,b)===!0){let z=N.__offset,V=Array.isArray(N.value)?N.value:[N.value],D=0;for(let O=0;O<V.length;O++){let k=V[O],B=_(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+D,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,D),D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,M,b){let S=y.value,E=v+"_"+M;if(b[E]===void 0)return typeof S=="number"||typeof S=="boolean"?b[E]=S:b[E]=S.clone(),!0;{let P=b[E];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return b[E]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function x(y){let v=y.uniforms,M=0,b=16;for(let E=0,P=v.length;E<P;E++){let w=Array.isArray(v[E])?v[E]:[v[E]];for(let A=0,N=w.length;A<N;A++){let z=w[A],V=Array.isArray(z.value)?z.value:[z.value];for(let D=0,O=V.length;D<O;D++){let k=V[D],B=_(k),J=M%b;J!==0&&b-J<B.boundary&&(M+=b-J),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=B.storage}}}let S=M%b;return S>0&&(M+=b-S),y.__size=M,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function jo(i,e,t,n,s,r){Fs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Pr.x=r*Fs.x-s*Fs.y,Pr.y=s*Fs.x+r*Fs.y):Pr.copy(Fs),i.copy(e),i.x+=Pr.x,i.y+=Pr.y,i.applyMatrix4(vd)}function Ch(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Wf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Hv(i,e){let t=1-i;return t*t*e}function Vv(i,e){return 2*(1-i)*i*e}function Gv(i,e){return i*i*e}function Br(i,e,t,n){return Hv(i,e)+Vv(i,t)+Gv(i,n)}function Wv(i,e){let t=1-i;return t*t*t*e}function Xv(i,e){let t=1-i;return 3*t*t*i*e}function qv(i,e){return 3*(1-i)*i*i*e}function Yv(i,e){return i*i*i*e}function kr(i,e,t,n,s){return Wv(i,e)+Xv(i,t)+qv(i,n)+Yv(i,s)}function yd(i,e,t,n,s){let r,o;if(s===hy(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Xf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Xf(r,i[r],i[r+1],o);return o&&Ka(o,o.next)&&(no(o),o=o.next),o}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ka(t,t.next)||wt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&sy(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?jv(i,n,s,r):$v(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),no(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Jv(rs(i),e,t),eo(i,e,t,n,s,r,2)):o===2&&Kv(i,e,t,n,s,r):eo(rs(i),e,t,n,s,r,1);break}}}function $v(i){let e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&Hs(s,a,r,l,o,c,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function jv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,x=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=ih(d,x,e,t,n),y=ih(_,g,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=p&&M&&M.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Hs(a,h,l,u,c,f,v.x,v.y)&&wt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&Hs(a,h,l,u,c,f,M.x,M.y)&&wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=x&&v.y<=g&&v!==s&&v!==o&&Hs(a,h,l,u,c,f,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&Hs(a,h,l,u,c,f,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Jv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ka(s,r)&&Md(s,n,n.next,r)&&to(s,r)&&to(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),no(n),no(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function Kv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ay(o,a)){let l=bd(o,a);o=rs(o,o.next),l=rs(l,l.next),eo(o,e,t,n,s,r,0),eo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qv(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=yd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(oy(c));for(s.sort(ey),r=0;r<s.length;r++)t=ty(s[r],t);return t}function ey(i,e){return i.x-e.x}function ty(i,e){let t=ny(i,e);if(!t)return e;let n=bd(t,i);return rs(n,n.next),rs(t,t.next)}function ny(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Hs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),to(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&iy(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function iy(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function sy(i,e,t,n){let s=i;do s.z===0&&(s.z=ih(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ry(s)}function ry(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function ih(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function oy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ay(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ly(i,e)&&(to(i,e)&&to(e,i)&&cy(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Ka(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ka(i,e){return i.x===e.x&&i.y===e.y}function Md(i,e,t,n){let s=sa(wt(i,e,t)),r=sa(wt(i,e,n)),o=sa(wt(t,n,i)),a=sa(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&ia(i,t,e)||r===0&&ia(i,n,e)||o===0&&ia(t,i,n)||a===0&&ia(t,e,n))}function ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sa(i){return i>0?1:i<0?-1:0}function ly(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Md(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function to(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function cy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bd(i,e){let t=new sh(i.i,i.x,i.y),n=new sh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xf(i,e,t,n){let s=new sh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function qf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function fy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function ra(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jf(){return(typeof performance>"u"?Date:performance).now()}function Kf(i,e){return i.distance-e.distance}function _h(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)_h(s[r],e,t,!0)}}var hs,us,Xp,pu,qp,Xa,Yp,di,Li,an,Ut,zt,Vs,oa,mu,gu,vh,On,Zp,$p,xu,_u,ir,jp,Jp,Kp,Cc,Pc,qa,Qp,Ya,em,tm,nm,im,sm,rm,om,am,lm,aa,cm,hm,um,fm,yh,dm,pm,Ii,Mh,bh,Sh,oo,mm,Eh,Qf,qs,Ys,Ic,Lc,Za,Fn,wn,Dc,Dt,vu,ql,Nn,gm,Hr,ti,xm,_m,wh,ed,Ri,Ci,vn,td,nd,mi,vm,Tn,ym,Mm,ns,Di,bm,id,Sm,sd,rd,Yl,Zl,$l,jl,yu,Mu,bu,Su,od,Eu,wu,Tu,Au,Ru,Cu,Pu,Iu,Lu,Du,Uu,Nu,Ou,Fu,Bu,ku,Jl,zu,Hu,Em,Vu,Gu,Wu,la,ca,Kl,Xu,qu,Yu,ad,is,wm,Tm,$a,Am,_n,Ct,gi,Th,ja,ha,xt,ua,fa,_s,Zu,Rm,Cm,Pm,ld,Im,Lm,Dm,Um,Uc,$u,Nc,pi,da,ii,sn,ju,Gs,Zs,cd,le,ht,Ql,Ju,Ku,Qu,To,jm,pt,vs,ga,Jm,xa,Km,An,_t,Fc,jt,_a,Bc,en,I,nc,ef,Bn,li,Wn,Ao,ys,Ms,bs,Si,Ei,ji,wr,Ro,Co,Ji,Qm,Tr,sc,Ui,ci,rc,Po,wi,oc,Io,ac,ss,nt,Ss,Xn,e0,t0,Ti,Lo,bn,tf,nf,va,Vr,n0,sf,Es,hi,Do,Ar,i0,s0,rf,of,af,r0,o0,Ht,qn,ui,lc,fi,ws,Ts,lf,cc,hc,uc,Uo,Pi,ud,Ai,No,Xe,rn,a0,kn,Pt,Lt,Oo,Nt,ya,Ma,at,l0,Un,dc,As,Sn,Rr,$t,At,cf,Ki,Fo,hf,Rs,Cs,Ps,pc,Bo,ko,zo,Ho,uf,ff,df,Vo,Go,De,Rn,Cn,u0,f0,It,ba,kt,Is,Ls,kc,Sa,zc,mc,d0,p0,En,Qi,Xo,Gr,Vt,g0,x0,_0,v0,y0,M0,b0,S0,E0,w0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,O0,F0,B0,k0,z0,H0,V0,G0,W0,X0,q0,Y0,Z0,$0,j0,J0,K0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,xg,_g,vg,yg,Mg,bg,Sg,Eg,wg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Og,Fg,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,Zg,$g,jg,Jg,Kg,Qg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,_x,vx,yx,Mx,bx,Sx,Ex,wx,Tx,Ax,Rx,Cx,Px,Ix,Lx,Dx,Ux,Nx,Ox,Fx,Bx,kx,zx,Hx,Vx,Gx,Wx,Xx,qx,Yx,Zx,rt,Re,Qn,qo,Ni,ks,pf,ts,gc,mf,xc,_c,vc,es,Ds,gf,js,Js,pd,md,gd,xd,_d,yf,Mf,bf,Sf,Ef,Hc,Vc,Gc,yc,Xs,Q_,ev,cv,hv,fv,yv,Xc,qc,Av,Yc,Zc,Iv,Lv,$c,on,Fv,Fr,jc,Wr,Jc,Ks,Ea,dn,Xr,qr,Us,Cr,Ns,Os,Fs,Pr,vd,Zo,Ir,$o,Nf,Mc,Of,wa,Qs,Yr,Bs,Ff,Jo,Bf,zv,Lr,Dr,xi,Zr,kf,zf,Hf,bc,Ko,Kc,Vf,Gf,Ta,$r,zn,jr,Qc,Qo,Sc,Ec,wc,Jr,Aa,eh,Ra,th,Ca,Pa,Ia,La,nh,Da,Kr,Hn,Oi,ea,ta,Tc,na,Ua,Qr,Zv,zr,Na,uy,er,si,Oa,Fa,io,Ba,os,ka,za,tr,rh,oh,ah,Yn,as,lh,ch,hh,so,ls,uh,fh,py,dh,nr,Ha,Ac,Zf,$f,ro,ph,Vn,jf,Ur,Rc,mh,Fi,gh,Va,Ga,Ph,my,Ih,gy,xy,_y,vy,yy,My,by,xh,St,C1,Wa,cs,mn=$i(()=>{hs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xp=0,pu=1,qp=2,Xa=1,Yp=2,di=3,Li=0,an=1,Ut=2,zt=0,Vs=1,oa=2,mu=3,gu=4,vh=5,On=100,Zp=101,$p=102,xu=103,_u=104,ir=200,jp=201,Jp=202,Kp=203,Cc=204,Pc=205,qa=206,Qp=207,Ya=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,om=0,am=1,lm=2,aa=3,cm=4,hm=5,um=6,fm=7,yh=0,dm=1,pm=2,Ii=0,Mh=1,bh=2,Sh=3,oo=4,mm=5,Eh=6,Qf=300,qs=301,Ys=302,Ic=303,Lc=304,Za=306,Fn=1e3,wn=1001,Dc=1002,Dt=1003,vu=1004,ql=1005,Nn=1006,gm=1007,Hr=1008,ti=1009,xm=1010,_m=1011,wh=1012,ed=1013,Ri=1014,Ci=1015,vn=1016,td=1017,nd=1018,mi=1020,vm=1021,Tn=1023,ym=1024,Mm=1025,ns=1026,Di=1027,bm=1028,id=1029,Sm=1030,sd=1031,rd=1033,Yl=33776,Zl=33777,$l=33778,jl=33779,yu=35840,Mu=35841,bu=35842,Su=35843,od=36196,Eu=37492,wu=37496,Tu=37808,Au=37809,Ru=37810,Cu=37811,Pu=37812,Iu=37813,Lu=37814,Du=37815,Uu=37816,Nu=37817,Ou=37818,Fu=37819,Bu=37820,ku=37821,Jl=36492,zu=36494,Hu=36495,Em=36283,Vu=36284,Gu=36285,Wu=36286,la=2300,ca=2301,Kl=2302,Xu=2400,qu=2401,Yu=2402,ad=3e3,is=3001,wm=3200,Tm=3201,$a=0,Am=1,_n="",Ct="srgb",gi="srgb-linear",Th="display-p3",ja="display-p3-linear",ha="linear",xt="srgb",ua="rec709",fa="p3",_s=7680,Zu=519,Rm=512,Cm=513,Pm=514,ld=515,Im=516,Lm=517,Dm=518,Um=519,Uc=35044,$u="300 es",Nc=1035,pi=2e3,da=2001,ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=1234567,Gs=Math.PI/180,Zs=180/Math.PI;cd={DEG2RAD:Gs,RAD2DEG:Zs,generateUUID:ni,clamp:Bt,euclideanModulo:Ah,mapLinear:Nm,inverseLerp:Om,lerp:Nr,damp:Fm,pingpong:Bm,smoothstep:km,smootherstep:zm,randInt:Hm,randFloat:Vm,randFloatSpread:Gm,seededRandom:Wm,degToRad:Xm,radToDeg:qm,isPowerOfTwo:Oc,ceilPowerOfTwo:Ym,floorPowerOfTwo:pa,setQuaternionFromProperEuler:Zm,normalize:mt,denormalize:ei},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],_=s[0],g=s[3],p=s[6],y=s[1],v=s[4],M=s[7],b=s[2],S=s[5],E=s[8];return r[0]=o*_+a*y+l*b,r[3]=o*g+a*v+l*S,r[6]=o*p+a*M+l*E,r[1]=c*_+h*y+u*b,r[4]=c*g+h*v+u*S,r[7]=c*p+h*M+u*E,r[2]=f*_+d*y+x*b,r[5]=f*g+d*v+x*S,r[8]=f*p+d*M+x*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ql=new ht;Ju={};Ku=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qu=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[gi]:{transfer:ha,primaries:ua,toReference:i=>i,fromReference:i=>i},[Ct]:{transfer:xt,primaries:ua,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ja]:{transfer:ha,primaries:fa,toReference:i=>i.applyMatrix3(Qu),fromReference:i=>i.applyMatrix3(Ku)},[Th]:{transfer:xt,primaries:fa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qu),fromReference:i=>i.applyMatrix3(Ku).convertLinearToSRGB()}},jm=new Set([gi,ja]),pt={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=To[e].toReference,s=To[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return To[i].primaries},getTransfer:function(i){return i===_n?ha:To[i].transfer}};ga=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=ma("canvas")),vs.width=e.width,vs.height=e.height;let n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ma("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ws(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ws(t[n]/255)*255):t[n]=Ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jm=0,xa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tc(s[o].image)):r.push(tc(s[o]))}else r=tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Km=0,An=class i extends ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wn,s=wn,r=Nn,o=Hr,a=Tn,l=ti,c=i.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ni(),this.name="",this.source=new xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===is?Ct:_n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?is:ad}set encoding(e){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===is?Ct:_n}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Qf;An.DEFAULT_ANISOTROPY=1;_t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(d+1)/2,b=(p+1)/2,S=(h+f)/4,E=(u+_)/4,P=(x+g)/4;return v>M&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=E/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=P/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=E/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-x)*(g-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===is?Ct:_n),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new An(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bc=class extends An{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==x){let g=1-a,p=l*f+c*d+h*x+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let b=Math.sqrt(v),S=Math.atan2(b,p*y);g=Math.sin(g*S)/b,a=Math.sin(a*S)/b}let M=a*y;if(l=l*g+f*M,c=c*g+d*M,h=h*g+x*M,u=u*g+_*M,g===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*d-c*f,e[t+1]=l*x+h*f+c*u-a*d,e[t+2]=c*x+h*d+a*f-l*u,e[t+3]=h*x-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nc=new I,ef=new en,Bn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Ro.subVectors(this.max,wr),ys.subVectors(e.a,wr),Ms.subVectors(e.b,wr),bs.subVectors(e.c,wr),Si.subVectors(Ms,ys),Ei.subVectors(bs,Ms),ji.subVectors(ys,bs);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-ji.z,ji.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,ji.z,0,-ji.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-ji.y,ji.x,0];return!ic(t,ys,Ms,bs,Ro)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,ys,Ms,bs,Ro))?!1:(Co.crossVectors(Si,Ei),t=[Co.x,Co.y,Co.z],ic(t,ys,Ms,bs,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,Ao=new Bn,ys=new I,Ms=new I,bs=new I,Si=new I,Ei=new I,ji=new I,wr=new I,Ro=new I,Co=new I,Ji=new I;Qm=new Bn,Tr=new I,sc=new I,Ui=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(sc)),this.expandByPoint(Tr.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new I,rc=new I,Po=new I,wi=new I,oc=new I,Io=new I,ac=new I,ss=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rc.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(rc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=wi.dot(this.direction),l=-wi.dot(Po),c=wi.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rc).addScaledVector(Po,f),d}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){oc.subVectors(t,e),Io.subVectors(n,e),ac.crossVectors(oc,Io);let o=this.direction.dot(ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);let l=a*this.direction.dot(Io.crossVectors(wi,Io));if(l<0)return null;let c=a*this.direction.dot(oc.cross(wi));if(c<0||l+c>o)return null;let h=-a*wi.dot(ac);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,x,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,x,_,g)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,x,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,x=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+x*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=x+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,x=c*h,_=c*u;t[0]=f+_*a,t[4]=x*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,x=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,x=a*h,_=a*u;t[0]=l*h,t[4]=x*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,x=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+x,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,x=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ti.crossVectors(n,bn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ti.crossVectors(n,bn)),Ti.normalize(),Lo.crossVectors(bn,Ti),s[0]=Ti.x,s[4]=Lo.x,s[8]=bn.x,s[1]=Ti.y,s[5]=Lo.y,s[9]=bn.y,s[2]=Ti.z,s[6]=Lo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],_=n[6],g=n[10],p=n[14],y=n[3],v=n[7],M=n[11],b=n[15],S=s[0],E=s[4],P=s[8],w=s[12],A=s[1],N=s[5],z=s[9],V=s[13],D=s[2],O=s[6],k=s[10],B=s[14],J=s[3],j=s[7],K=s[11],G=s[15];return r[0]=o*S+a*A+l*D+c*J,r[4]=o*E+a*N+l*O+c*j,r[8]=o*P+a*z+l*k+c*K,r[12]=o*w+a*V+l*B+c*G,r[1]=h*S+u*A+f*D+d*J,r[5]=h*E+u*N+f*O+d*j,r[9]=h*P+u*z+f*k+d*K,r[13]=h*w+u*V+f*B+d*G,r[2]=x*S+_*A+g*D+p*J,r[6]=x*E+_*N+g*O+p*j,r[10]=x*P+_*z+g*k+p*K,r[14]=x*w+_*V+g*B+p*G,r[3]=y*S+v*A+M*D+b*J,r[7]=y*E+v*N+M*O+b*j,r[11]=y*P+v*z+M*k+b*K,r[15]=y*w+v*V+M*B+b*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],_=e[7],g=e[11],p=e[15];return x*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],_=e[13],g=e[14],p=e[15],y=u*g*c-_*f*c+_*l*d-a*g*d-u*l*p+a*f*p,v=x*f*c-h*g*c-x*l*d+o*g*d+h*l*p-o*f*p,M=h*_*c-x*u*c+x*a*d-o*_*d-h*a*p+o*u*p,b=x*u*l-h*_*l-x*a*f+o*_*f+h*a*g-o*u*g,S=t*y+n*v+s*M+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return e[0]=y*E,e[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*E,e[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*p+n*l*p)*E,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*E,e[4]=v*E,e[5]=(h*g*r-x*f*r+x*s*d-t*g*d-h*s*p+t*f*p)*E,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*p-t*l*p)*E,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*E,e[8]=M*E,e[9]=(x*u*r-h*_*r-x*n*d+t*_*d+h*n*p-t*u*p)*E,e[10]=(o*_*r-x*a*r+x*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*E,e[12]=b*E,e[13]=(h*_*s-x*u*s+x*n*f-t*_*f-h*n*g+t*u*g)*E,e[14]=(x*a*s-o*_*s-x*n*l+t*_*l+o*n*g-t*a*g)*E,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,x=r*u,_=o*h,g=o*u,p=a*u,y=l*c,v=l*h,M=l*u,b=n.x,S=n.y,E=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+M)*b,s[2]=(x-v)*b,s[3]=0,s[4]=(d-M)*S,s[5]=(1-(f+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(x+v)*E,s[9]=(g-y)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ss.set(s[0],s[1],s[2]).length(),o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let c=1/r,h=1/o,u=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,x;if(a===pi)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===da)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,d=(n+s)*h,x,_;if(a===pi)x=(o+r)*u,_=-2*u;else if(a===da)x=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ss=new I,Xn=new nt,e0=new I(0,0,0),t0=new I(1,1,1),Ti=new I,Lo=new I,bn=new I,tf=new nt,nf=new en,va=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};va.DEFAULT_ORDER="XYZ";Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n0=0,sf=new I,Es=new en,hi=new nt,Do=new I,Ar=new I,i0=new I,s0=new en,rf=new I(1,0,0),of=new I(0,1,0),af=new I(0,0,1),r0={type:"added"},o0={type:"removed"},Ht=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new va,n=new en,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new ht}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(of,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(of,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ar,Do,this.up):hi.lookAt(Do,Ar,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(hi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(r0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new I(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;qn=new I,ui=new I,lc=new I,fi=new I,ws=new I,Ts=new I,lf=new I,cc=new I,hc=new I,uc=new I,Uo=!1,Pi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qn.subVectors(s,t),ui.subVectors(n,t),lc.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(ui),l=qn.dot(lc),c=ui.dot(ui),h=ui.dot(lc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,n,s,r,o,a,l){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,t,n,s){return qn.subVectors(n,t),ui.subVectors(e,t),qn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),qn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ws.subVectors(s,n),Ts.subVectors(r,n),cc.subVectors(e,n);let l=ws.dot(cc),c=Ts.dot(cc);if(l<=0&&c<=0)return t.copy(n);hc.subVectors(e,s);let h=ws.dot(hc),u=Ts.dot(hc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ws,o);uc.subVectors(e,r);let d=ws.dot(uc),x=Ts.dot(uc);if(x>=0&&d<=x)return t.copy(r);let _=d*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Ts,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return lf.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector(lf,a);let p=1/(g+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},No={h:0,s:0,l:0};Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Ah(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fc(o,r,e+1/3),this.g=fc(o,r,e),this.b=fc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=ec(e.r),this.g=ec(e.g),this.b=ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return pt.fromWorkingColorSpace(rn.copy(this),e),Math.round(Bt(rn.r*255,0,255))*65536+Math.round(Bt(rn.g*255,0,255))*256+Math.round(Bt(rn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Ct){pt.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(No);let n=Nr(Ai.h,No.h,t),s=Nr(Ai.s,No.s,t),r=Nr(Ai.l,No.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Xe;Xe.NAMES=ud;a0=0,kn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Vs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Pc,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pt=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lt=new I,Oo=new le,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}},ya=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ma=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},at=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},l0=0,Un=new nt,dc=new Ht,As=new I,Sn=new Bn,Rr=new Bn,$t=new I,At=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?Ma:ya)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Sn.min,Rr.min),Sn.expandByPoint($t),$t.addVectors(Sn.max,Rr.max),Sn.expandByPoint($t)):(Sn.expandByPoint(Rr.min),Sn.expandByPoint(Rr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$t.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),$t.add(As)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new I,h[A]=new I;let u=new I,f=new I,d=new I,x=new le,_=new le,g=new le,p=new I,y=new I;function v(A,N,z){u.fromArray(s,A*3),f.fromArray(s,N*3),d.fromArray(s,z*3),x.fromArray(o,A*2),_.fromArray(o,N*2),g.fromArray(o,z*2),f.sub(u),d.sub(u),_.sub(x),g.sub(x);let V=1/(_.x*g.y-g.x*_.y);isFinite(V)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-_.y).multiplyScalar(V),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-g.x).multiplyScalar(V),c[A].add(p),c[N].add(p),c[z].add(p),h[A].add(y),h[N].add(y),h[z].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,N=M.length;A<N;++A){let z=M[A],V=z.start,D=z.count;for(let O=V,k=V+D;O<k;O+=3)v(n[O+0],n[O+1],n[O+2])}let b=new I,S=new I,E=new I,P=new I;function w(A){E.fromArray(r,A*3),P.copy(E);let N=c[A];b.copy(N),b.sub(E.multiplyScalar(E.dot(N))).normalize(),S.crossVectors(P,N);let V=S.dot(h[A])<0?-1:1;l[A*4]=b.x,l[A*4+1]=b.y,l[A*4+2]=b.z,l[A*4+3]=V}for(let A=0,N=M.length;A<N;++A){let z=M[A],V=z.start,D=z.count;for(let O=V,k=V+D;O<k;O+=3)w(n[O+0]),w(n[O+1]),w(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Nt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cf=new nt,Ki=new ss,Fo=new Ui,hf=new I,Rs=new I,Cs=new I,Ps=new I,pc=new I,Bo=new I,ko=new le,zo=new le,Ho=new le,uf=new I,ff=new I,df=new I,Vo=new I,Go=new I,De=class extends Ht{constructor(e=new At,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(pc.fromBufferAttribute(u,e),o?Bo.addScaledVector(pc,h):Bo.addScaledVector(pc.sub(t),h))}t.add(Bo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(Fo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Fo,hf)===null||Ki.origin.distanceToSquared(hf)>(e.far-e.near)**2))&&(cf.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(cf),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let g=f[x],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,b=v;M<b;M+=3){let S=a.getX(M),E=a.getX(M+1),P=a.getX(M+2);s=Wo(this,p,e,n,c,h,u,S,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=x,p=_;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);s=Wo(this,o,e,n,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=f.length;x<_;x++){let g=f[x],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,b=v;M<b;M+=3){let S=M,E=M+1,P=M+2;s=Wo(this,p,e,n,c,h,u,S,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=x,p=_;g<p;g+=3){let y=g,v=g+1,M=g+2;s=Wo(this,o,e,n,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};Rn=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function x(_,g,p,y,v,M,b,S,E,P,w){let A=M/E,N=b/P,z=M/2,V=b/2,D=S/2,O=E+1,k=P+1,B=0,J=0,j=new I;for(let K=0;K<k;K++){let G=K*N-V;for(let Q=0;Q<O;Q++){let X=Q*A-z;j[_]=X*y,j[g]=G*v,j[p]=D,c.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[p]=S>0?1:-1,h.push(j.x,j.y,j.z),u.push(Q/E),u.push(1-K/P),B+=1}}for(let K=0;K<P;K++)for(let G=0;G<E;G++){let Q=f+G+O*K,X=f+G+O*(K+1),ne=f+(G+1)+O*(K+1),ve=f+(G+1)+O*K;l.push(Q,X,ve),l.push(X,ne,ve),J+=6}a.addGroup(d,J,w),d+=J,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Cn={clone:$s,merge:pn},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,It=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ba=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends ba{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ls=1,kc=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Is,Ls,e,t);s.layers=this.layers,this.add(s);let r=new kt(Is,Ls,e,t);r.layers=this.layers,this.add(r);let o=new kt(Is,Ls,e,t);o.layers=this.layers,this.add(o);let a=new kt(Is,Ls,e,t);a.layers=this.layers,this.add(a);let l=new kt(Is,Ls,e,t);l.layers=this.layers,this.add(l);let c=new kt(Is,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Sa=class extends An{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zc=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===is?Ct:_n),this.texture=new Sa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rn(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:zt});r.uniforms.tEquirect.value=t;let o=new De(s,r),a=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Nn),new kc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},mc=new I,d0=new I,p0=new ht,En=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mc.subVectors(n,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||p0.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new Ui,Xo=new I,Gr=class{constructor(e=new En,t=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],_=s[10],g=s[11],p=s[12],y=s[13],v=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,g-d,M-p).normalize(),n[1].setComponents(l+r,f+c,g+d,M+p).normalize(),n[2].setComponents(l+o,f+h,g+x,M+y).normalize(),n[3].setComponents(l-o,f-h,g-x,M-y).normalize(),n[4].setComponents(l-a,f-u,g-_,M-v).normalize(),t===pi)n[5].setComponents(l+a,f+u,g+_,M+v).normalize();else if(t===da)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xo.x=s.normal.x>0?e.max.x:e.min.x,Xo.y=s.normal.y>0?e.max.y:e.min.y,Xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Vt=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],x=[],_=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let v=0;v<c;v++){let M=v*u-r;x.push(M,-y,0),_.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,M=y+c*(p+1),b=y+1+c*(p+1),S=y+1+c*p;d.push(v,M,S),d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,C0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ox=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ox=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:g0,alphahash_pars_fragment:x0,alphamap_fragment:_0,alphamap_pars_fragment:v0,alphatest_fragment:y0,alphatest_pars_fragment:M0,aomap_fragment:b0,aomap_pars_fragment:S0,batching_pars_vertex:E0,batching_vertex:w0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:U0,color_fragment:N0,color_pars_fragment:O0,color_pars_vertex:F0,color_vertex:B0,common:k0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:H0,displacementmap_pars_vertex:V0,displacementmap_vertex:G0,emissivemap_fragment:W0,emissivemap_pars_fragment:X0,colorspace_fragment:q0,colorspace_pars_fragment:Y0,envmap_fragment:Z0,envmap_common_pars_fragment:$0,envmap_pars_fragment:j0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:cg,envmap_vertex:K0,fog_vertex:Q0,fog_pars_vertex:eg,fog_fragment:tg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:og,lights_lambert_pars_fragment:ag,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:fg,lights_phong_pars_fragment:dg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:xg,lights_fragment_end:_g,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:bg,map_fragment:Sg,map_pars_fragment:Eg,map_particle_fragment:wg,map_particle_pars_fragment:Tg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphcolor_vertex:Cg,morphnormal_vertex:Pg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Lg,normal_fragment_begin:Dg,normal_fragment_maps:Ug,normal_pars_fragment:Ng,normal_pars_vertex:Og,normal_vertex:Fg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Vg,opaque_fragment:Gg,packing:Wg,premultiplied_alpha_fragment:Xg,project_vertex:qg,dithering_fragment:Yg,dithering_pars_fragment:Zg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:Qg,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:sx,specularmap_fragment:rx,specularmap_pars_fragment:ox,tonemapping_fragment:ax,tonemapping_pars_fragment:lx,transmission_fragment:cx,transmission_pars_fragment:hx,uv_pars_fragment:ux,uv_pars_vertex:fx,uv_vertex:dx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:xx,backgroundCube_frag:_x,cube_vert:vx,cube_frag:yx,depth_vert:Mx,depth_frag:bx,distanceRGBA_vert:Sx,distanceRGBA_frag:Ex,equirect_vert:wx,equirect_frag:Tx,linedashed_vert:Ax,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Px,meshlambert_vert:Ix,meshlambert_frag:Lx,meshmatcap_vert:Dx,meshmatcap_frag:Ux,meshnormal_vert:Nx,meshnormal_frag:Ox,meshphong_vert:Fx,meshphong_frag:Bx,meshphysical_vert:kx,meshphysical_frag:zx,meshtoon_vert:Hx,meshtoon_frag:Vx,points_vert:Gx,points_frag:Wx,shadow_vert:Xx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:Zx},Re={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Qn={basic:{uniforms:pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:pn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:pn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:pn([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:pn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:pn([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:pn([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:pn([Re.common,Re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:pn([Re.lights,Re.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Qn.physical={uniforms:pn([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};qo={r:0,b:0,g:0};Ni=class extends ba{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,pf=[.125,.215,.35,.446,.526,.582],ts=20,gc=new Ni,mf=new Xe,xc=null,_c=0,vc=0,es=(1+Math.sqrt(5))/2,Ds=1/es,gf=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,es,Ds),new I(0,es,-Ds),new I(Ds,0,es),new I(-Ds,0,es),new I(es,Ds,0),new I(-es,Ds,0)],js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){xc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xc,_c,vc),e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:vn,format:Tn,colorSpace:gi,depthBuffer:!1},s=xf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(r)),this._blurMaterial=n_(r,e,t)}return s}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,s){let a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(mf),h.toneMapping=Ii,h.autoClear=!1;let d=new Pt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new De(new Rn,d),_=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(mf),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Yo(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,gc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gf[(s-1)%gf.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new De(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ts-1),_=r/x,g=isFinite(r)?1+Math.floor(h*_):ts;g>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);let p=[],y=0;for(let E=0;E<ts;++E){let P=E/_,w=Math.exp(-P*P/2);p.push(w),E===0?y+=w:E<g&&(y+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-n;let M=this._sizeLods[s],b=3*M*(s>v-ks?s-v+ks:0),S=4*(this._cubeSize-M);Yo(t,b,S,3*M,2*M),l.setRenderTarget(t),l.render(u,gc)}};Js=class extends An{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ns,h!==ns&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ri),n===void 0&&h===Di&&(n=mi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pd=new An,md=new Js(1,1);md.compareFunction=ld;gd=new _a,xd=new Bc,_d=new Sa,yf=[],Mf=[],bf=new Float32Array(16),Sf=new Float32Array(9),Ef=new Float32Array(4);Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}},Gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yc=/(\w+)(\])?(\[|\.)?/g;Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Q_=37297,ev=0;cv=/^[ \t]*#include +<([\w\d./]+)>/gm;hv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;yv=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qc(e),t.set(e,n)),n}},qc=class{constructor(e){this.id=yv++,this.code=e,this.usedTimes=0}};Av=0;Yc=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zc=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;$c=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},on=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fv={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jc=class extends ii{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,_=t.getContextAttributes(),g=null,p=null,y=[],v=[],M=new le,b=null,S=new kt;S.layers.enable(1),S.viewport=new _t;let E=new kt;E.layers.enable(2),E.viewport=new _t;let P=[S,E],w=new $c;w.layers.enable(1),w.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=y[X];return ne===void 0&&(ne=new Fr,y[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=y[X];return ne===void 0&&(ne=new Fr,y[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=y[X];return ne===void 0&&(ne=new Fr,y[X]=ne),ne.getHandSpace()};function z(X){let ne=v.indexOf(X.inputSource);if(ne===-1)return;let ve=y[ne];ve!==void 0&&(ve.update(X.inputSource,X.frame,c||o),ve.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){let ne=v[X];ne!==null&&(v[X]=null,y[X].disconnect(ne))}A=null,N=null,e.setRenderTarget(g),d=null,f=null,u=null,s=null,p=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new jt(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,ve=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?Di:ns,ve=_.stencil?mi:Ri);let xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new jt(f.textureWidth,f.textureHeight,{format:Tn,type:ti,depthTexture:new Js(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let ae=e.properties.get(p);ae.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(X){for(let ne=0;ne<X.removed.length;ne++){let ve=X.removed[ne],we=v.indexOf(ve);we>=0&&(v[we]=null,y[we].disconnect(ve))}for(let ne=0;ne<X.added.length;ne++){let ve=X.added[ne],we=v.indexOf(ve);if(we===-1){for(let ae=0;ae<y.length;ae++)if(ae>=v.length){v.push(ve),we=ae;break}else if(v[ae]===null){v[ae]=ve,we=ae;break}if(we===-1)break}let xe=y[we];xe&&xe.connect(ve)}}let O=new I,k=new I;function B(X,ne,ve){O.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(ve.matrixWorld);let we=O.distanceTo(k),xe=ne.projectionMatrix.elements,ae=ve.projectionMatrix.elements,Pe=xe[14]/(xe[10]-1),Y=xe[14]/(xe[10]+1),ge=(xe[9]+1)/xe[5],U=(xe[9]-1)/xe[5],re=(xe[8]-1)/xe[0],Z=(ae[8]+1)/ae[0],se=Pe*re,W=Pe*Z,Ae=we/(-re+Z),de=Ae*-re;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(de),X.translateZ(Ae),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let C=Pe+Ae,R=Y+Ae,q=se-de,oe=W+(we-de),he=ge*Y/R*C,ce=U*Y/R*C;X.projectionMatrix.makePerspective(q,oe,he,ce,C,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;w.near=E.near=S.near=X.near,w.far=E.far=S.far=X.far,(A!==w.near||N!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,N=w.far);let ne=X.parent,ve=w.cameras;J(w,ne);for(let we=0;we<ve.length;we++)J(ve[we],ne);ve.length===2?B(w,S,E):w.projectionMatrix.copy(S.projectionMatrix),j(X,w,ne)};function j(X,ne,ve){ve===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ve.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let K=null;function G(X,ne){if(h=ne.getViewerPose(c||o),x=ne,h!==null){let ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let we=!1;ve.length!==w.cameras.length&&(w.cameras.length=0,we=!0);for(let xe=0;xe<ve.length;xe++){let ae=ve[xe],Pe=null;if(d!==null)Pe=d.getViewport(ae);else{let ge=u.getViewSubImage(f,ae);Pe=ge.viewport,xe===0&&(e.setRenderTargetTextures(p,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(p))}let Y=P[xe];Y===void 0&&(Y=new kt,Y.layers.enable(xe),Y.viewport=new _t,P[xe]=Y),Y.matrix.fromArray(ae.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(ae.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),xe===0&&(w.matrix.copy(Y.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),we===!0&&w.cameras.push(Y)}}for(let ve=0;ve<y.length;ve++){let we=v[ve],xe=y[ve];we!==null&&xe!==void 0&&xe.update(we,ne,c||o)}K&&K(X,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}let Q=new dd;Q.setAnimationLoop(G),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}};Wr=class{constructor(e={}){let{canvas:t=$m(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),x=new Int32Array(4),_=null,g=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;let v=this,M=!1,b=0,S=0,E=null,P=-1,w=null,A=new _t,N=new _t,z=null,V=new Xe(0),D=0,O=t.width,k=t.height,B=1,J=null,j=null,K=new _t(0,0,O,k),G=new _t(0,0,O,k),Q=!1,X=new Gr,ne=!1,ve=!1,we=null,xe=new nt,ae=new le,Pe=new I,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return E===null?B:1}let U=n;function re(L,$){for(let te=0;te<L.length;te++){let ie=L[te],ee=t.getContext(ie,$);if(ee!==null)return ee}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Se,!1),U===null){let $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),U=re($,L),U===null)throw re($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Z,se,W,Ae,de,C,R,q,oe,he,ce,Ue,be,Le,ke,Ge,ue,$e,F,fe,Te,ye,Oe,je;function et(){Z=new s_(U),se=new Kx(U,Z,e),Z.init(se),ye=new Ov(U,Z,se),W=new Uv(U,Z,se),Ae=new a_(U),de=new bv,C=new Nv(U,Z,W,de,se,ye,Ae),R=new e_(v),q=new i_(v),oe=new m0(U,se),Oe=new jx(U,Z,oe,se),he=new r_(U,oe,Ae,Oe),ce=new u_(U,he,oe,Ae),F=new h_(U,se,C),Ge=new Qx(de),Ue=new Mv(v,R,q,Z,se,Oe,Ge),be=new Bv(v,de),Le=new Ev,ke=new Pv(Z,se),$e=new $x(v,R,q,W,ce,f,l),ue=new Dv(v,ce,se),je=new kv(U,Ae,se,W),fe=new Jx(U,Z,Ae,se),Te=new o_(U,Z,Ae,se),Ae.programs=Ue.programs,v.capabilities=se,v.extensions=Z,v.properties=de,v.renderLists=Le,v.shadowMap=ue,v.state=W,v.info=Ae}et();let Ye=new jc(v,U);this.xr=Ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let L=Z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(O,k,!1))},this.getSize=function(L){return L.set(O,k)},this.setSize=function(L,$,te=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=L,k=$,t.width=Math.floor(L*B),t.height=Math.floor($*B),te===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(O*B,k*B).floor()},this.setDrawingBufferSize=function(L,$,te){O=L,k=$,B=te,t.width=Math.floor(L*te),t.height=Math.floor($*te),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(K)},this.setViewport=function(L,$,te,ie){L.isVector4?K.set(L.x,L.y,L.z,L.w):K.set(L,$,te,ie),W.viewport(A.copy(K).multiplyScalar(B).floor())},this.getScissor=function(L){return L.copy(G)},this.setScissor=function(L,$,te,ie){L.isVector4?G.set(L.x,L.y,L.z,L.w):G.set(L,$,te,ie),W.scissor(N.copy(G).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(L){W.setScissorTest(Q=L)},this.setOpaqueSort=function(L){J=L},this.setTransparentSort=function(L){j=L},this.getClearColor=function(L){return L.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(L=!0,$=!0,te=!0){let ie=0;if(L){let ee=!1;if(E!==null){let Ne=E.texture.format;ee=Ne===rd||Ne===sd||Ne===id}if(ee){let Ne=E.texture.type,He=Ne===ti||Ne===Ri||Ne===wh||Ne===mi||Ne===td||Ne===nd,We=$e.getClearColor(),Ze=$e.getClearAlpha(),ot=We.r,Ke=We.g,tt=We.b;He?(d[0]=ot,d[1]=Ke,d[2]=tt,d[3]=Ze,U.clearBufferuiv(U.COLOR,0,d)):(x[0]=ot,x[1]=Ke,x[2]=tt,x[3]=Ze,U.clearBufferiv(U.COLOR,0,x))}else ie|=U.COLOR_BUFFER_BIT}$&&(ie|=U.DEPTH_BUFFER_BIT),te&&(ie|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Le.dispose(),ke.dispose(),de.dispose(),R.dispose(),q.dispose(),ce.dispose(),Oe.dispose(),je.dispose(),Ue.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",un),Ye.removeEventListener("sessionend",vt),we&&(we.dispose(),we=null),fn.stop()};function Me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=Ae.autoReset,$=ue.enabled,te=ue.autoUpdate,ie=ue.needsUpdate,ee=ue.type;et(),Ae.autoReset=L,ue.enabled=$,ue.autoUpdate=te,ue.needsUpdate=ie,ue.type=ee}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ee(L){let $=L.target;$.removeEventListener("dispose",Ee),Ve($)}function Ve(L){ze(L),de.remove(L)}function ze(L){let $=de.get(L).programs;$!==void 0&&($.forEach(function(te){Ue.releaseProgram(te)}),L.isShaderMaterial&&Ue.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,te,ie,ee,Ne){$===null&&($=Y);let He=ee.isMesh&&ee.matrixWorld.determinant()<0,We=kp(L,$,te,ie,ee);W.setMaterial(ie,He);let Ze=te.index,ot=1;if(ie.wireframe===!0){if(Ze=he.getWireframeAttribute(te),Ze===void 0)return;ot=2}let Ke=te.drawRange,tt=te.attributes.position,Rt=Ke.start*ot,Mn=(Ke.start+Ke.count)*ot;Ne!==null&&(Rt=Math.max(Rt,Ne.start*ot),Mn=Math.min(Mn,(Ne.start+Ne.count)*ot)),Ze!==null?(Rt=Math.max(Rt,0),Mn=Math.min(Mn,Ze.count)):tt!=null&&(Rt=Math.max(Rt,0),Mn=Math.min(Mn,tt.count));let Zt=Mn-Rt;if(Zt<0||Zt===1/0)return;Oe.setup(ee,ie,We,te,Ze);let ai,Et=fe;if(Ze!==null&&(ai=oe.get(Ze),Et=Te,Et.setIndex(ai)),ee.isMesh)ie.wireframe===!0?(W.setLineWidth(ie.wireframeLinewidth*ge()),Et.setMode(U.LINES)):Et.setMode(U.TRIANGLES);else if(ee.isLine){let ct=ie.linewidth;ct===void 0&&(ct=1),W.setLineWidth(ct*ge()),ee.isLineSegments?Et.setMode(U.LINES):ee.isLineLoop?Et.setMode(U.LINE_LOOP):Et.setMode(U.LINE_STRIP)}else ee.isPoints?Et.setMode(U.POINTS):ee.isSprite&&Et.setMode(U.TRIANGLES);if(ee.isBatchedMesh)Et.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Et.renderInstances(Rt,Zt,ee.count);else if(te.isInstancedBufferGeometry){let ct=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Vl=Math.min(te.instanceCount,ct);Et.renderInstances(Rt,Zt,Vl)}else Et.render(Rt,Zt)};function ft(L,$,te){L.transparent===!0&&L.side===Ut&&L.forceSinglePass===!1?(L.side=an,L.needsUpdate=!0,wo(L,$,te),L.side=Li,L.needsUpdate=!0,wo(L,$,te),L.side=Ut):wo(L,$,te)}this.compile=function(L,$,te=null){te===null&&(te=L),g=ke.get(te),g.init(),y.push(g),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),L!==te&&L.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),g.setupLights(v._useLegacyLights);let ie=new Set;return L.traverse(function(ee){let Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){let We=Ne[He];ft(We,te,ee),ie.add(We)}else ft(Ne,te,ee),ie.add(Ne)}),y.pop(),g=null,ie},this.compileAsync=function(L,$,te=null){let ie=this.compile(L,$,te);return new Promise(ee=>{function Ne(){if(ie.forEach(function(He){de.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ee(L);return}setTimeout(Ne,10)}Z.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let dt=null;function Yt(L){dt&&dt(L)}function un(){fn.stop()}function vt(){fn.start()}let fn=new dd;fn.setAnimationLoop(Yt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(L){dt=L,Ye.setAnimationLoop(L),L===null?fn.stop():fn.start()},Ye.addEventListener("sessionstart",un),Ye.addEventListener("sessionend",vt),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera($),$=Ye.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,$,E),g=ke.get(L,y.length),g.init(),y.push(g),xe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X.setFromProjectionMatrix(xe),ve=this.localClippingEnabled,ne=Ge.init(this.clippingPlanes,ve),_=Le.get(L,p.length),_.init(),p.push(_),Kn(L,$,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(J,j),this.info.render.frame++,ne===!0&&Ge.beginShadows();let te=g.state.shadowsArray;if(ue.render(te,L,$),ne===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(_,L),g.setupLights(v._useLegacyLights),$.isArrayCamera){let ie=$.cameras;for(let ee=0,Ne=ie.length;ee<Ne;ee++){let He=ie[ee];lu(_,L,He,He.viewport)}}else lu(_,L,$);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),L.isScene===!0&&L.onAfterRender(v,L,$),Oe.resetDefaultState(),P=-1,w=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Kn(L,$,te,ie){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||X.intersectsSprite(L)){ie&&Pe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xe);let He=ce.update(L),We=L.material;We.visible&&_.push(L,He,We,te,Pe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||X.intersectsObject(L))){let He=ce.update(L),We=L.material;if(ie&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Pe.copy(L.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Pe.copy(He.boundingSphere.center)),Pe.applyMatrix4(L.matrixWorld).applyMatrix4(xe)),Array.isArray(We)){let Ze=He.groups;for(let ot=0,Ke=Ze.length;ot<Ke;ot++){let tt=Ze[ot],Rt=We[tt.materialIndex];Rt&&Rt.visible&&_.push(L,He,Rt,te,Pe.z,tt)}}else We.visible&&_.push(L,He,We,te,Pe.z,null)}}let Ne=L.children;for(let He=0,We=Ne.length;He<We;He++)Kn(Ne[He],$,te,ie)}function lu(L,$,te,ie){let ee=L.opaque,Ne=L.transmissive,He=L.transparent;g.setupLightsView(te),ne===!0&&Ge.setGlobalState(v.clippingPlanes,te),Ne.length>0&&Bp(ee,Ne,$,te),ie&&W.viewport(A.copy(ie)),ee.length>0&&Eo(ee,$,te),Ne.length>0&&Eo(Ne,$,te),He.length>0&&Eo(He,$,te),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Bp(L,$,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let Ne=se.isWebGL2;we===null&&(we=new jt(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?vn:ti,minFilter:Hr,samples:Ne?4:0})),v.getDrawingBufferSize(ae),Ne?we.setSize(ae.x,ae.y):we.setSize(pa(ae.x),pa(ae.y));let He=v.getRenderTarget();v.setRenderTarget(we),v.getClearColor(V),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();let We=v.toneMapping;v.toneMapping=Ii,Eo(L,te,ie),C.updateMultisampleRenderTarget(we),C.updateRenderTargetMipmap(we);let Ze=!1;for(let ot=0,Ke=$.length;ot<Ke;ot++){let tt=$[ot],Rt=tt.object,Mn=tt.geometry,Zt=tt.material,ai=tt.group;if(Zt.side===Ut&&Rt.layers.test(ie.layers)){let Et=Zt.side;Zt.side=an,Zt.needsUpdate=!0,cu(Rt,te,ie,Mn,Zt,ai),Zt.side=Et,Zt.needsUpdate=!0,Ze=!0}}Ze===!0&&(C.updateMultisampleRenderTarget(we),C.updateRenderTargetMipmap(we)),v.setRenderTarget(He),v.setClearColor(V,D),v.toneMapping=We}function Eo(L,$,te){let ie=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Ne=L.length;ee<Ne;ee++){let He=L[ee],We=He.object,Ze=He.geometry,ot=ie===null?He.material:ie,Ke=He.group;We.layers.test(te.layers)&&cu(We,$,te,Ze,ot,Ke)}}function cu(L,$,te,ie,ee,Ne){L.onBeforeRender(v,$,te,ie,ee,Ne),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(v,$,te,ie,L,Ne),ee.transparent===!0&&ee.side===Ut&&ee.forceSinglePass===!1?(ee.side=an,ee.needsUpdate=!0,v.renderBufferDirect(te,$,ie,ee,L,Ne),ee.side=Li,ee.needsUpdate=!0,v.renderBufferDirect(te,$,ie,ee,L,Ne),ee.side=Ut):v.renderBufferDirect(te,$,ie,ee,L,Ne),L.onAfterRender(v,$,te,ie,ee,Ne)}function wo(L,$,te){$.isScene!==!0&&($=Y);let ie=de.get(L),ee=g.state.lights,Ne=g.state.shadowsArray,He=ee.state.version,We=Ue.getParameters(L,ee.state,Ne,$,te),Ze=Ue.getProgramCacheKey(We),ot=ie.programs;ie.environment=L.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(L.isMeshStandardMaterial?q:R).get(L.envMap||ie.environment),ot===void 0&&(L.addEventListener("dispose",Ee),ot=new Map,ie.programs=ot);let Ke=ot.get(Ze);if(Ke!==void 0){if(ie.currentProgram===Ke&&ie.lightsStateVersion===He)return uu(L,We),Ke}else We.uniforms=Ue.getUniforms(L),L.onBuild(te,We,v),L.onBeforeCompile(We,v),Ke=Ue.acquireProgram(We,Ze),ot.set(Ze,Ke),ie.uniforms=We.uniforms;let tt=ie.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(tt.clippingPlanes=Ge.uniform),uu(L,We),ie.needsLights=Hp(L),ie.lightsStateVersion=He,ie.needsLights&&(tt.ambientLightColor.value=ee.state.ambient,tt.lightProbe.value=ee.state.probe,tt.directionalLights.value=ee.state.directional,tt.directionalLightShadows.value=ee.state.directionalShadow,tt.spotLights.value=ee.state.spot,tt.spotLightShadows.value=ee.state.spotShadow,tt.rectAreaLights.value=ee.state.rectArea,tt.ltc_1.value=ee.state.rectAreaLTC1,tt.ltc_2.value=ee.state.rectAreaLTC2,tt.pointLights.value=ee.state.point,tt.pointLightShadows.value=ee.state.pointShadow,tt.hemisphereLights.value=ee.state.hemi,tt.directionalShadowMap.value=ee.state.directionalShadowMap,tt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,tt.spotShadowMap.value=ee.state.spotShadowMap,tt.spotLightMatrix.value=ee.state.spotLightMatrix,tt.spotLightMap.value=ee.state.spotLightMap,tt.pointShadowMap.value=ee.state.pointShadowMap,tt.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=Ke,ie.uniformsList=null,Ke}function hu(L){if(L.uniformsList===null){let $=L.currentProgram.getUniforms();L.uniformsList=Xs.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function uu(L,$){let te=de.get(L);te.outputColorSpace=$.outputColorSpace,te.batching=$.batching,te.instancing=$.instancing,te.instancingColor=$.instancingColor,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}function kp(L,$,te,ie,ee){$.isScene!==!0&&($=Y),C.resetTextureUnits();let Ne=$.fog,He=ie.isMeshStandardMaterial?$.environment:null,We=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:gi,Ze=(ie.isMeshStandardMaterial?q:R).get(ie.envMap||He),ot=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ke=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),tt=!!te.morphAttributes.position,Rt=!!te.morphAttributes.normal,Mn=!!te.morphAttributes.color,Zt=Ii;ie.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Zt=v.toneMapping);let ai=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Et=ai!==void 0?ai.length:0,ct=de.get(ie),Vl=g.state.lights;if(ne===!0&&(ve===!0||L!==w)){let Dn=L===w&&ie.id===P;Ge.setState(ie,L,Dn)}let Tt=!1;ie.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Vl.state.version||ct.outputColorSpace!==We||ee.isBatchedMesh&&ct.batching===!1||!ee.isBatchedMesh&&ct.batching===!0||ee.isInstancedMesh&&ct.instancing===!1||!ee.isInstancedMesh&&ct.instancing===!0||ee.isSkinnedMesh&&ct.skinning===!1||!ee.isSkinnedMesh&&ct.skinning===!0||ee.isInstancedMesh&&ct.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ct.instancingColor===!1&&ee.instanceColor!==null||ct.envMap!==Ze||ie.fog===!0&&ct.fog!==Ne||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Ge.numPlanes||ct.numIntersection!==Ge.numIntersection)||ct.vertexAlphas!==ot||ct.vertexTangents!==Ke||ct.morphTargets!==tt||ct.morphNormals!==Rt||ct.morphColors!==Mn||ct.toneMapping!==Zt||se.isWebGL2===!0&&ct.morphTargetsCount!==Et)&&(Tt=!0):(Tt=!0,ct.__version=ie.version);let Yi=ct.currentProgram;Tt===!0&&(Yi=wo(ie,$,ee));let fu=!1,Er=!1,Gl=!1,nn=Yi.getUniforms(),Zi=ct.uniforms;if(W.useProgram(Yi.program)&&(fu=!0,Er=!0,Gl=!0),ie.id!==P&&(P=ie.id,Er=!0),fu||w!==L){nn.setValue(U,"projectionMatrix",L.projectionMatrix),nn.setValue(U,"viewMatrix",L.matrixWorldInverse);let Dn=nn.map.cameraPosition;Dn!==void 0&&Dn.setValue(U,Pe.setFromMatrixPosition(L.matrixWorld)),se.logarithmicDepthBuffer&&nn.setValue(U,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&nn.setValue(U,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,Er=!0,Gl=!0)}if(ee.isSkinnedMesh){nn.setOptional(U,ee,"bindMatrix"),nn.setOptional(U,ee,"bindMatrixInverse");let Dn=ee.skeleton;Dn&&(se.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),nn.setValue(U,"boneTexture",Dn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(nn.setOptional(U,ee,"batchingTexture"),nn.setValue(U,"batchingTexture",ee._matricesTexture,C));let Wl=te.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0&&se.isWebGL2===!0)&&F.update(ee,te,Yi),(Er||ct.receiveShadow!==ee.receiveShadow)&&(ct.receiveShadow=ee.receiveShadow,nn.setValue(U,"receiveShadow",ee.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Zi.envMap.value=Ze,Zi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Er&&(nn.setValue(U,"toneMappingExposure",v.toneMappingExposure),ct.needsLights&&zp(Zi,Gl),Ne&&ie.fog===!0&&be.refreshFogUniforms(Zi,Ne),be.refreshMaterialUniforms(Zi,ie,B,k,we),Xs.upload(U,hu(ct),Zi,C)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Xs.upload(U,hu(ct),Zi,C),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&nn.setValue(U,"center",ee.center),nn.setValue(U,"modelViewMatrix",ee.modelViewMatrix),nn.setValue(U,"normalMatrix",ee.normalMatrix),nn.setValue(U,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let Dn=ie.uniformsGroups;for(let Xl=0,Vp=Dn.length;Xl<Vp;Xl++)if(se.isWebGL2){let du=Dn[Xl];je.update(du,Yi),je.bind(du,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function zp(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Hp(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(L,$,te){de.get(L.texture).__webglTexture=$,de.get(L.depthTexture).__webglTexture=te;let ie=de.get(L);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){let te=de.get(L);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,te=0){E=L,b=$,S=te;let ie=!0,ee=null,Ne=!1,He=!1;if(L){let Ze=de.get(L);Ze.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(U.FRAMEBUFFER,null),ie=!1):Ze.__webglFramebuffer===void 0?C.setupRenderTarget(L):Ze.__hasExternalTextures&&C.rebindTextures(L,de.get(L.texture).__webglTexture,de.get(L.depthTexture).__webglTexture);let ot=L.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(He=!0);let Ke=de.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[$])?ee=Ke[$][te]:ee=Ke[$],Ne=!0):se.isWebGL2&&L.samples>0&&C.useMultisampledRTT(L)===!1?ee=de.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[te]:ee=Ke,A.copy(L.viewport),N.copy(L.scissor),z=L.scissorTest}else A.copy(K).multiplyScalar(B).floor(),N.copy(G).multiplyScalar(B).floor(),z=Q;if(W.bindFramebuffer(U.FRAMEBUFFER,ee)&&se.drawBuffers&&ie&&W.drawBuffers(L,ee),W.viewport(A),W.scissor(N),W.setScissorTest(z),Ne){let Ze=de.get(L.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ze.__webglTexture,te)}else if(He){let Ze=de.get(L.texture),ot=$||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ze.__webglTexture,te||0,ot)}P=-1},this.readRenderTargetPixels=function(L,$,te,ie,ee,Ne,He){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){W.bindFramebuffer(U.FRAMEBUFFER,We);try{let Ze=L.texture,ot=Ze.format,Ke=Ze.type;if(ot!==Tn&&ye.convert(ot)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let tt=Ke===vn&&(Z.has("EXT_color_buffer_half_float")||se.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ke!==ti&&ye.convert(Ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Ci&&(se.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ie&&te>=0&&te<=L.height-ee&&U.readPixels($,te,ie,ee,ye.convert(ot),ye.convert(Ke),Ne)}finally{let Ze=E!==null?de.get(E).__webglFramebuffer:null;W.bindFramebuffer(U.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(L,$,te=0){let ie=Math.pow(2,-te),ee=Math.floor($.image.width*ie),Ne=Math.floor($.image.height*ie);C.setTexture2D($,0),U.copyTexSubImage2D(U.TEXTURE_2D,te,0,0,L.x,L.y,ee,Ne),W.unbindTexture()},this.copyTextureToTexture=function(L,$,te,ie=0){let ee=$.image.width,Ne=$.image.height,He=ye.convert(te.format),We=ye.convert(te.type);C.setTexture2D(te,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,te.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,te.unpackAlignment),$.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,L.x,L.y,ee,Ne,He,We,$.image.data):$.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,He,$.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,ie,L.x,L.y,He,We,$.image),ie===0&&te.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(L,$,te,ie,ee=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=L.max.x-L.min.x+1,He=L.max.y-L.min.y+1,We=L.max.z-L.min.z+1,Ze=ye.convert(ie.format),ot=ye.convert(ie.type),Ke;if(ie.isData3DTexture)C.setTexture3D(ie,0),Ke=U.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)C.setTexture2DArray(ie,0),Ke=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ie.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ie.unpackAlignment);let tt=U.getParameter(U.UNPACK_ROW_LENGTH),Rt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Mn=U.getParameter(U.UNPACK_SKIP_PIXELS),Zt=U.getParameter(U.UNPACK_SKIP_ROWS),ai=U.getParameter(U.UNPACK_SKIP_IMAGES),Et=te.isCompressedTexture?te.mipmaps[ee]:te.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,L.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,L.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,L.min.z),te.isDataTexture||te.isData3DTexture?U.texSubImage3D(Ke,ee,$.x,$.y,$.z,Ne,He,We,Ze,ot,Et.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ke,ee,$.x,$.y,$.z,Ne,He,We,Ze,Et.data)):U.texSubImage3D(Ke,ee,$.x,$.y,$.z,Ne,He,We,Ze,ot,Et),U.pixelStorei(U.UNPACK_ROW_LENGTH,tt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ai),ee===0&&ie.generateMipmaps&&U.generateMipmap(Ke),W.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?C.setTextureCube(L,0):L.isData3DTexture?C.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?C.setTexture2DArray(L,0):C.setTexture2D(L,0),W.unbindTexture()},this.resetState=function(){b=0,S=0,E=null,W.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Th?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===ja?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?is:ad}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===is?Ct:gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Jc=class extends Wr{};Jc.prototype.isWebGL1Renderer=!0;Ks=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new I,Xr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qr=class extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cr=new I,Ns=new I,Os=new I,Fs=new le,Pr=new le,vd=new nt,Zo=new I,Ir=new I,$o=new I,Nf=new le,Mc=new le,Of=new le,wa=class extends Ht{constructor(e=new qr){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ea(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Xr(n,3,0,!1)),Us.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=Us,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),vd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Os.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;jo(Zo.set(-.5,-.5,0),Os,o,Ns,s,r),jo(Ir.set(.5,-.5,0),Os,o,Ns,s,r),jo($o.set(.5,.5,0),Os,o,Ns,s,r),Nf.set(0,0),Mc.set(1,0),Of.set(1,1);let a=e.ray.intersectTriangle(Zo,Ir,$o,!1,Cr);if(a===null&&(jo(Ir.set(-.5,.5,0),Os,o,Ns,s,r),Mc.set(0,1),a=e.ray.intersectTriangle(Zo,$o,Ir,!1,Cr),a===null))return;let l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:Pi.getInterpolation(Cr,Zo,Ir,$o,Nf,Mc,Of,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Qs=class extends An{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dt,h=Dt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Yr=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bs=new nt,Ff=new nt,Jo=[],Bf=new Bn,zv=new nt,Lr=new De,Dr=new Ui,xi=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Bf.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Bf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Dr.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bs),Ff.multiplyMatrices(n,Bs),Lr.matrixWorld=Ff,Lr.raycast(e,Jo);for(let o=0,a=Jo.length;o<a;o++){let l=Jo[o];l.instanceId=r,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Zr=class extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kf=new I,zf=new I,Hf=new nt,bc=new ss,Ko=new Ui,Kc=class extends Ht{constructor(e=new At,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)kf.fromBufferAttribute(t,s-1),zf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=kf.distanceTo(zf);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;Hf.copy(s).invert(),bc.copy(e.ray).applyMatrix4(Hf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,f=new I,d=this.isLineSegments?2:1,x=n.index,g=n.attributes.position;if(x!==null){let p=Math.max(0,o.start),y=Math.min(x.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=d){let b=x.getX(v),S=x.getX(v+1);if(c.fromBufferAttribute(g,b),h.fromBufferAttribute(g,S),bc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=d){if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,v+1),bc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Vf=new I,Gf=new I,Ta=class extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vf.fromBufferAttribute(t,s),Gf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vf.distanceTo(Gf);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$r=class extends An{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],o=[],a=new I,l=new nt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Bt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Bt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},jr=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new le,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qc=class extends jr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Qo=new I,Sc=new Ch,Ec=new Ch,wc=new Ch,Jr=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Qo.subVectors(s[0],s[1]).add(s[0]),c=Qo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),x<1e-4&&(x=_),g<1e-4&&(g=_),Sc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,_,g),Ec.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,_,g),wc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,_,g)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ec.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sc.calc(l),Ec.calc(l),wc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Aa=class extends zn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eh=class extends zn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends zn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},th=class extends zn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends zn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends zn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(e,s.x,r.x,o.x),Br(e,s.y,r.y,o.y),Br(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Wf(a,l.x,c.x,h.x,u.x),Wf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},La=Object.freeze({__proto__:null,ArcCurve:Qc,CatmullRomCurve3:Jr,CubicBezierCurve:Aa,CubicBezierCurve3:eh,EllipseCurve:jr,LineCurve:Ra,LineCurve3:th,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Pa,SplineCurve:Ia}),nh=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new La[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new La[s.type]().fromJSON(s))}return this}},Da=class extends nh{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ca(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Aa(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new jr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Kr=class i extends At{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new I,f=new le,d=new I,x=new I,_=new I,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(x)}for(let y=0;y<=t;y++){let v=n+y*h*s,M=Math.sin(v),b=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*b,o.push(u.x,u.y,u.z),f.x=y/t,f.y=S/(e.length-1),a.push(f.x,f.y);let E=l[3*S+0]*M,P=l[3*S+1],w=l[3*S+0]*b;c.push(E,P,w)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let M=v+y*e.length,b=M,S=M+e.length,E=M+e.length+1,P=M+1;r.push(b,S,P),r.push(E,P,S)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Hn=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oi=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,_=[],g=n/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function y(){let M=new I,b=new I,S=0,E=(t-e)/n;for(let P=0;P<=r;P++){let w=[],A=P/r,N=A*(t-e)+e;for(let z=0;z<=s;z++){let V=z/s,D=V*l+a,O=Math.sin(D),k=Math.cos(D);b.x=N*O,b.y=-A*n+g,b.z=N*k,u.push(b.x,b.y,b.z),M.set(O,E,k).normalize(),f.push(M.x,M.y,M.z),d.push(V,1-A),w.push(x++)}_.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let A=_[w][P],N=_[w+1][P],z=_[w+1][P+1],V=_[w][P+1];h.push(A,N,V),h.push(N,z,V),S+=6}c.addGroup(p,S,0),p+=S}function v(M){let b=x,S=new le,E=new I,P=0,w=M===!0?e:t,A=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),x++;let N=x;for(let z=0;z<=s;z++){let D=z/s*l+a,O=Math.cos(D),k=Math.sin(D);E.x=w*k,E.y=g*A,E.z=w*O,u.push(E.x,E.y,E.z),f.push(0,A,0),S.x=O*.5+.5,S.y=k*.5*A+.5,d.push(S.x,S.y),x++}for(let z=0;z<s;z++){let V=b+z,D=N+z;M===!0?h.push(D,D+1,V):h.push(D+1,D,V),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ea=new I,ta=new I,Tc=new I,na=new Pi,Ua=class extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Gs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:_,b:g,c:p}=na;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),na.getNormal(Tc),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let v=(y+1)%3,M=u[y],b=u[v],S=na[h[y]],E=na[h[v]],P=`${M}_${b}`,w=`${b}_${M}`;w in f&&f[w]?(Tc.dot(f[w].normal)<=r&&(d.push(S.x,S.y,S.z),d.push(E.x,E.y,E.z)),f[w]=null):P in f||(f[P]={index0:c[y],index1:c[v],normal:Tc.clone()})}}for(let x in f)if(f[x]){let{index0:_,index1:g}=f[x];ea.fromBufferAttribute(a,_),ta.fromBufferAttribute(a,g),d.push(ea.x,ea.y,ea.z),d.push(ta.x,ta.y,ta.z)}this.setAttribute("position",new at(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Qr=class extends Da{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Da().fromJSON(s))}return this}},Zv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Qv(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return eo(r,o,t,a,l,d,0),o}};zr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];qf(e),Yf(n,e);let o=e.length;t.forEach(qf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Yf(n,t[l]);let a=Zv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Na=class i extends At{constructor(e=new Qr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:uy,v,M=!1,b,S,E,P;p&&(v=p.getSpacedPoints(h),M=!0,f=!1,b=p.computeFrenetFrames(h,!1),S=new I,E=new I,P=new I),f||(g=0,d=0,x=0,_=0);let w=a.extractPoints(c),A=w.shape,N=w.holes;if(!zr.isClockWise(A)){A=A.reverse();for(let U=0,re=N.length;U<re;U++){let Z=N[U];zr.isClockWise(Z)&&(N[U]=Z.reverse())}}let V=zr.triangulateShape(A,N),D=A;for(let U=0,re=N.length;U<re;U++){let Z=N[U];A=A.concat(Z)}function O(U,re,Z){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(re,Z)}let k=A.length,B=V.length;function J(U,re,Z){let se,W,Ae,de=U.x-re.x,C=U.y-re.y,R=Z.x-U.x,q=Z.y-U.y,oe=de*de+C*C,he=de*q-C*R;if(Math.abs(he)>Number.EPSILON){let ce=Math.sqrt(oe),Ue=Math.sqrt(R*R+q*q),be=re.x-C/ce,Le=re.y+de/ce,ke=Z.x-q/Ue,Ge=Z.y+R/Ue,ue=((ke-be)*q-(Ge-Le)*R)/(de*q-C*R);se=be+de*ue-U.x,W=Le+C*ue-U.y;let $e=se*se+W*W;if($e<=2)return new le(se,W);Ae=Math.sqrt($e/2)}else{let ce=!1;de>Number.EPSILON?R>Number.EPSILON&&(ce=!0):de<-Number.EPSILON?R<-Number.EPSILON&&(ce=!0):Math.sign(C)===Math.sign(q)&&(ce=!0),ce?(se=-C,W=de,Ae=Math.sqrt(oe)):(se=de,W=C,Ae=Math.sqrt(oe/2))}return new le(se/Ae,W/Ae)}let j=[];for(let U=0,re=D.length,Z=re-1,se=U+1;U<re;U++,Z++,se++)Z===re&&(Z=0),se===re&&(se=0),j[U]=J(D[U],D[Z],D[se]);let K=[],G,Q=j.concat();for(let U=0,re=N.length;U<re;U++){let Z=N[U];G=[];for(let se=0,W=Z.length,Ae=W-1,de=se+1;se<W;se++,Ae++,de++)Ae===W&&(Ae=0),de===W&&(de=0),G[se]=J(Z[se],Z[Ae],Z[de]);K.push(G),Q=Q.concat(G)}for(let U=0;U<g;U++){let re=U/g,Z=d*Math.cos(re*Math.PI/2),se=x*Math.sin(re*Math.PI/2)+_;for(let W=0,Ae=D.length;W<Ae;W++){let de=O(D[W],j[W],se);xe(de.x,de.y,-Z)}for(let W=0,Ae=N.length;W<Ae;W++){let de=N[W];G=K[W];for(let C=0,R=de.length;C<R;C++){let q=O(de[C],G[C],se);xe(q.x,q.y,-Z)}}}let X=x+_;for(let U=0;U<k;U++){let re=f?O(A[U],Q[U],X):A[U];M?(E.copy(b.normals[0]).multiplyScalar(re.x),S.copy(b.binormals[0]).multiplyScalar(re.y),P.copy(v[0]).add(E).add(S),xe(P.x,P.y,P.z)):xe(re.x,re.y,0)}for(let U=1;U<=h;U++)for(let re=0;re<k;re++){let Z=f?O(A[re],Q[re],X):A[re];M?(E.copy(b.normals[U]).multiplyScalar(Z.x),S.copy(b.binormals[U]).multiplyScalar(Z.y),P.copy(v[U]).add(E).add(S),xe(P.x,P.y,P.z)):xe(Z.x,Z.y,u/h*U)}for(let U=g-1;U>=0;U--){let re=U/g,Z=d*Math.cos(re*Math.PI/2),se=x*Math.sin(re*Math.PI/2)+_;for(let W=0,Ae=D.length;W<Ae;W++){let de=O(D[W],j[W],se);xe(de.x,de.y,u+Z)}for(let W=0,Ae=N.length;W<Ae;W++){let de=N[W];G=K[W];for(let C=0,R=de.length;C<R;C++){let q=O(de[C],G[C],se);M?xe(q.x,q.y+v[h-1].y,v[h-1].x+Z):xe(q.x,q.y,u+Z)}}}ne(),ve();function ne(){let U=s.length/3;if(f){let re=0,Z=k*re;for(let se=0;se<B;se++){let W=V[se];ae(W[2]+Z,W[1]+Z,W[0]+Z)}re=h+g*2,Z=k*re;for(let se=0;se<B;se++){let W=V[se];ae(W[0]+Z,W[1]+Z,W[2]+Z)}}else{for(let re=0;re<B;re++){let Z=V[re];ae(Z[2],Z[1],Z[0])}for(let re=0;re<B;re++){let Z=V[re];ae(Z[0]+k*h,Z[1]+k*h,Z[2]+k*h)}}n.addGroup(U,s.length/3-U,0)}function ve(){let U=s.length/3,re=0;we(D,re),re+=D.length;for(let Z=0,se=N.length;Z<se;Z++){let W=N[Z];we(W,re),re+=W.length}n.addGroup(U,s.length/3-U,1)}function we(U,re){let Z=U.length;for(;--Z>=0;){let se=Z,W=Z-1;W<0&&(W=U.length-1);for(let Ae=0,de=h+g*2;Ae<de;Ae++){let C=k*Ae,R=k*(Ae+1),q=re+se+C,oe=re+W+C,he=re+W+R,ce=re+se+R;Pe(q,oe,he,ce)}}}function xe(U,re,Z){l.push(U),l.push(re),l.push(Z)}function ae(U,re,Z){Y(U),Y(re),Y(Z);let se=s.length/3,W=y.generateTopUV(n,s,se-3,se-2,se-1);ge(W[0]),ge(W[1]),ge(W[2])}function Pe(U,re,Z,se){Y(U),Y(re),Y(se),Y(re),Y(Z),Y(se);let W=s.length/3,Ae=y.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);ge(Ae[0]),ge(Ae[1]),ge(Ae[3]),ge(Ae[1]),ge(Ae[2]),ge(Ae[3])}function Y(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function ge(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new La[s.type]().fromJSON(s)),new i(n,e.options)}},uy={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-u),new le(f,1-x),new le(_,1-p)]:[new le(a,1-l),new le(h,1-u),new le(d,1-x),new le(g,1-p)]}};er=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new I,x=new le;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/t+1)/2,x.y=(d.y/t+1)/2,h.push(x.x,x.y)}u+=f}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let y=p+g,v=y,M=y+n+1,b=y+n+2,S=y+1;a.push(v,M,S),a.push(M,b,S)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},si=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],x=[],_=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+v*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(S+M,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=h[p][y+1],M=h[p][y],b=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&d.push(v,M,S),(p!==n-1||l<Math.PI)&&d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Oa=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let _=x/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let _=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,p=(s+1)*(d-1)+x,y=(s+1)*d+x;o.push(_,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Fa=class i extends At{constructor(e=new Pa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new le,h=new I,u=[],f=[],d=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function _(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),y(),p()}function g(v){h=e.getPointAt(v/t,h);let M=o.normals[v],b=o.binormals[v];for(let S=0;S<=s;S++){let E=S/s*Math.PI*2,P=Math.sin(E),w=-Math.cos(E);l.x=w*M.x+P*b.x,l.y=w*M.y+P*b.y,l.z=w*M.z+P*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let b=(s+1)*(v-1)+(M-1),S=(s+1)*v+(M-1),E=(s+1)*v+M,P=(s+1)*(v-1)+M;x.push(b,S,P),x.push(S,E,P)}}function y(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)c.x=v/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new La[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},io=class extends kn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Ba=class extends It{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},os=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ka=class extends kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},za=class extends kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};tr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rh=class extends tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:r=e,a=2*t-n;break;case Yu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qu:o=e,l=2*n-t;break;case Yu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),_=x*x,g=_*x,p=-f*g+2*f*_-f*x,y=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*x+1,v=(-1-d)*g+(1.5+d)*_+.5*x,M=d*g-d*_;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[c+b]+v*o[l+b]+M*o[u+b];return r}},oh=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ah=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ca:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&dy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let _=t[u+x];if(_!==t[f+x]||_!==t[d+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=ca;as=class extends Yn{};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=la;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;lh=class extends Yn{};lh.prototype.ValueTypeName="color";ch=class extends Yn{};ch.prototype.ValueTypeName="number";hh=class extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},so=class extends Yn{InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};so.prototype.ValueTypeName="quaternion";so.prototype.DefaultInterpolation=ca;so.prototype.InterpolantFactoryMethodSmooth=void 0;ls=class extends Yn{};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=la;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;uh=class extends Yn{};uh.prototype.ValueTypeName="vector";fh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},py=new fh,dh=class{constructor(e){this.manager=e!==void 0?e:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};dh.DEFAULT_MATERIAL_NAME="__DEFAULT";nr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ha=class extends nr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ac=new nt,Zf=new I,$f=new I,ro=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),Ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ph=class extends ro{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Vn=class extends nr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jf=new nt,Ur=new I,Rc=new I,mh=class extends ro{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ur),Rc.copy(n.position),Rc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rc),n.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf)}},Fi=class extends nr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gh=class extends ro{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Va=class extends nr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new gh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ga=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Jf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Ph="\\[\\]\\.:\\/",my=new RegExp("["+Ph+"]","g"),Ih="[^"+Ph+"]",gy="[^"+Ph.replace("\\.","")+"]",xy=/((?:WC+[\/:])*)/.source.replace("WC",Ih),_y=/(WCOD+)?/.source.replace("WCOD",gy),vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ih),yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ih),My=new RegExp("^"+xy+_y+vy+yy+"$"),by=["material","materials","bones","map"],xh=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(my,"")}static parseTrackName(e){let t=My.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);by.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=xh;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];C1=new Float32Array(1),Wa=class{constructor(e,t,n=0,s=1/0){this.ray=new ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return _h(e,this,n,t),n.sort(Kf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)_h(e[s],this,n,t);return n.sort(Kf),n}};cs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var or,Dh=$i(()=>{or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Pn,wy,Uh,Ty,ki,ar=$i(()=>{mn();Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wy=new Ni(-1,1,1,-1,0,1),Uh=class extends At{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},Ty=new Uh,ki=class{constructor(e){this._mesh=new De(Ty,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});function Pd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Ay(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Qs(s,e,e);return r.wrapS=Fn,r.wrapT=Fn,r.needsUpdate=!0,r}function Ay(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var co,ho,ll,Id=$i(()=>{mn();co={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new nt},cameraProjectionMatrixInverse:{value:new nt},cameraWorldMatrix:{value:new nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ho={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ll={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`}});function Nh(i,e,t){let n=Ry(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Ry(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new I(Math.cos(r),Math.sin(r),o))}return n}var uo,Ld=$i(()=>{mn();uo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Nh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraProjectionMatrixInverse:{value:new nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`}});var cl,Dd=$i(()=>{cl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,x=e-f,_=t-d,g,p;x>_?(g=1,p=0):(g=0,p=1);let y=x-g+h,v=_-p+h,M=x-1+2*h,b=_-1+2*h,S=l&255,E=c&255,P=this.perm[S+this.perm[E]]%12,w=this.perm[S+g+this.perm[E+p]]%12,A=this.perm[S+1+this.perm[E+1]]%12,N=.5-x*x-_*_;N<0?n=0:(N*=N,n=N*N*this.dot(this.grad3[P],x,_));let z=.5-y*y-v*v;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[w],y,v));let V=.5-M*M-b*b;return V<0?r=0:(V*=V,r=V*V*this.dot(this.grad3[A],M,b)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,x=(h+u+f)*d,_=h-x,g=u-x,p=f-x,y=e-_,v=t-g,M=n-p,b,S,E,P,w,A;y>=v?v>=M?(b=1,S=0,E=0,P=1,w=1,A=0):y>=M?(b=1,S=0,E=0,P=1,w=0,A=1):(b=0,S=0,E=1,P=1,w=0,A=1):v<M?(b=0,S=0,E=1,P=0,w=1,A=1):y<M?(b=0,S=1,E=0,P=0,w=1,A=1):(b=0,S=1,E=0,P=1,w=1,A=0);let N=y-b+d,z=v-S+d,V=M-E+d,D=y-P+2*d,O=v-w+2*d,k=M-A+2*d,B=y-1+3*d,J=v-1+3*d,j=M-1+3*d,K=h&255,G=u&255,Q=f&255,X=this.perm[K+this.perm[G+this.perm[Q]]]%12,ne=this.perm[K+b+this.perm[G+S+this.perm[Q+E]]]%12,ve=this.perm[K+P+this.perm[G+w+this.perm[Q+A]]]%12,we=this.perm[K+1+this.perm[G+1+this.perm[Q+1]]]%12,xe=.6-y*y-v*v-M*M;xe<0?s=0:(xe*=xe,s=xe*xe*this.dot3(this.grad3[X],y,v,M));let ae=.6-N*N-z*z-V*V;ae<0?r=0:(ae*=ae,r=ae*ae*this.dot3(this.grad3[ne],N,z,V));let Pe=.6-D*D-O*O-k*k;Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this.dot3(this.grad3[ve],D,O,k));let Y=.6-B*B-J*J-j*j;return Y<0?a=0:(Y*=Y,a=Y*Y*this.dot3(this.grad3[we],B,J,j)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,x,_=(e+t+n+s)*l,g=Math.floor(e+_),p=Math.floor(t+_),y=Math.floor(n+_),v=Math.floor(s+_),M=(g+p+y+v)*c,b=g-M,S=p-M,E=y-M,P=v-M,w=e-b,A=t-S,N=n-E,z=s-P,V=w>A?32:0,D=w>N?16:0,O=A>N?8:0,k=w>z?4:0,B=A>z?2:0,J=N>z?1:0,j=V+D+O+k+B+J,K=o[j][0]>=3?1:0,G=o[j][1]>=3?1:0,Q=o[j][2]>=3?1:0,X=o[j][3]>=3?1:0,ne=o[j][0]>=2?1:0,ve=o[j][1]>=2?1:0,we=o[j][2]>=2?1:0,xe=o[j][3]>=2?1:0,ae=o[j][0]>=1?1:0,Pe=o[j][1]>=1?1:0,Y=o[j][2]>=1?1:0,ge=o[j][3]>=1?1:0,U=w-K+c,re=A-G+c,Z=N-Q+c,se=z-X+c,W=w-ne+2*c,Ae=A-ve+2*c,de=N-we+2*c,C=z-xe+2*c,R=w-ae+3*c,q=A-Pe+3*c,oe=N-Y+3*c,he=z-ge+3*c,ce=w-1+4*c,Ue=A-1+4*c,be=N-1+4*c,Le=z-1+4*c,ke=g&255,Ge=p&255,ue=y&255,$e=v&255,F=a[ke+a[Ge+a[ue+a[$e]]]]%32,fe=a[ke+K+a[Ge+G+a[ue+Q+a[$e+X]]]]%32,Te=a[ke+ne+a[Ge+ve+a[ue+we+a[$e+xe]]]]%32,ye=a[ke+ae+a[Ge+Pe+a[ue+Y+a[$e+ge]]]]%32,Oe=a[ke+1+a[Ge+1+a[ue+1+a[$e+1]]]]%32,je=.6-w*w-A*A-N*N-z*z;je<0?h=0:(je*=je,h=je*je*this.dot4(r[F],w,A,N,z));let et=.6-U*U-re*re-Z*Z-se*se;et<0?u=0:(et*=et,u=et*et*this.dot4(r[fe],U,re,Z,se));let Ye=.6-W*W-Ae*Ae-de*de-C*C;Ye<0?f=0:(Ye*=Ye,f=Ye*Ye*this.dot4(r[Te],W,Ae,de,C));let Me=.6-R*R-q*q-oe*oe-he*he;Me<0?d=0:(Me*=Me,d=Me*Me*this.dot4(r[ye],R,q,oe,he));let H=.6-ce*ce-Ue*Ue-be*be-Le*Le;return H<0?x=0:(H*=H,x=H*H*this.dot4(r[Oe],ce,Ue,be,Le)),27*(h+u+f+d+x)}}});var Ud={};Wp(Ud,{GTAOPass:()=>hl});var hl,Nd=$i(()=>{mn();ar();Id();Ld();Dh();Dd();hl=class i extends Pn{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Pd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new jt(this.width,this.height,{type:vn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new It({defines:Object.assign({},co.defines),uniforms:Cn.clone(co.uniforms),vertexShader:co.vertexShader,fragmentShader:co.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ka,this.normalMaterial.blending=zt,this.pdMaterial=new It({defines:Object.assign({},uo.defines),uniforms:Cn.clone(uo.uniforms),vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new It({defines:Object.assign({},ho.defines),uniforms:Cn.clone(ho.uniforms),vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new It({uniforms:Cn.clone(or.uniforms),vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ya,blendDst:ir,blendEquation:On,blendSrcAlpha:qa,blendDstAlpha:ir,blendEquationAlpha:On}),this.blendMaterial=new It({uniforms:Cn.clone(ll.uniforms),vertexShader:ll.vertexShader,fragmentShader:ll.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:vh,blendSrc:Ya,blendDst:ir,blendEquation:On,blendSrcAlpha:qa,blendDstAlpha:ir,blendEquationAlpha:On}),this.fsQuad=new ki(null),this.originalClearColor=new Xe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Js,this.depthTexture.format=Di,this.depthTexture.type=mi,this.normalRenderTarget=new jt(this.width,this.height,{minFilter:Dt,magFilter:Dt,type:vn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new cl,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Qs(s,e,e,Tn,ti);return r.wrapS=Fn,r.wrapT=Fn,r.needsUpdate=!0,r}};hl.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5}});mn();mn();var Sd={type:"change"},Lh={type:"start"},Ed={type:"end"},Qa=new ss,wd=new En,Ey=Math.cos(70*cd.DEG2RAD),el=class extends ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",ce),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Sd),n.update(),r=s.NONE},this.update=(function(){let F=new I,fe=new en().setFromUnitVectors(e.up,new I(0,1,0)),Te=fe.clone().invert(),ye=new I,Oe=new en,je=new I,et=2*Math.PI;return function(Me=null){let H=n.object.position;F.copy(H).sub(n.target),F.applyQuaternion(fe),a.setFromVector3(F),n.autoRotate&&r===s.NONE&&N(w(Me)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Se=n.minAzimuthAngle,Ee=n.maxAzimuthAngle;isFinite(Se)&&isFinite(Ee)&&(Se<-Math.PI?Se+=et:Se>Math.PI&&(Se-=et),Ee<-Math.PI?Ee+=et:Ee>Math.PI&&(Ee-=et),Se<=Ee?a.theta=Math.max(Se,Math.min(Ee,a.theta)):a.theta=a.theta>(Se+Ee)/2?Math.max(Se,a.theta):Math.min(Ee,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),F.setFromSpherical(a),F.applyQuaternion(Te),H.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ve=!1;if(n.zoomToCursor&&S){let ze=null;if(n.object.isPerspectiveCamera){let ft=F.length();ze=j(ft*c);let dt=ft-ze;n.object.position.addScaledVector(M,dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ft=new I(b.x,b.y,0);ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ve=!0;let dt=new I(b.x,b.y,0);dt.unproject(n.object),n.object.position.sub(dt).add(ft),n.object.updateMatrixWorld(),ze=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ze).add(n.object.position):(Qa.origin.copy(n.object.position),Qa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Qa.direction))<Ey?e.lookAt(n.target):(wd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Qa.intersectPlane(wd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ve=!0);return c=1,S=!1,Ve||ye.distanceToSquared(n.object.position)>o||8*(1-Oe.dot(n.object.quaternion))>o||je.distanceToSquared(n.target)>0?(n.dispatchEvent(Sd),ye.copy(n.object.position),Oe.copy(n.object.quaternion),je.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",de),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",R),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ce),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new cs,l=new cs,c=1,h=new I,u=new le,f=new le,d=new le,x=new le,_=new le,g=new le,p=new le,y=new le,v=new le,M=new I,b=new le,S=!1,E=[],P={};function w(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function A(F){let fe=Math.abs(F)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*fe)}function N(F){l.theta-=F}function z(F){l.phi-=F}let V=(function(){let F=new I;return function(Te,ye){F.setFromMatrixColumn(ye,0),F.multiplyScalar(-Te),h.add(F)}})(),D=(function(){let F=new I;return function(Te,ye){n.screenSpacePanning===!0?F.setFromMatrixColumn(ye,1):(F.setFromMatrixColumn(ye,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(Te),h.add(F)}})(),O=(function(){let F=new I;return function(Te,ye){let Oe=n.domElement;if(n.object.isPerspectiveCamera){let je=n.object.position;F.copy(je).sub(n.target);let et=F.length();et*=Math.tan(n.object.fov/2*Math.PI/180),V(2*Te*et/Oe.clientHeight,n.object.matrix),D(2*ye*et/Oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(Te*(n.object.right-n.object.left)/n.object.zoom/Oe.clientWidth,n.object.matrix),D(ye*(n.object.top-n.object.bottom)/n.object.zoom/Oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function k(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(F,fe){if(!n.zoomToCursor)return;S=!0;let Te=n.domElement.getBoundingClientRect(),ye=F-Te.left,Oe=fe-Te.top,je=Te.width,et=Te.height;b.x=ye/je*2-1,b.y=-(Oe/et)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function K(F){u.set(F.clientX,F.clientY)}function G(F){J(F.clientX,F.clientX),p.set(F.clientX,F.clientY)}function Q(F){x.set(F.clientX,F.clientY)}function X(F){f.set(F.clientX,F.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;N(2*Math.PI*d.x/fe.clientHeight),z(2*Math.PI*d.y/fe.clientHeight),u.copy(f),n.update()}function ne(F){y.set(F.clientX,F.clientY),v.subVectors(y,p),v.y>0?k(A(v.y)):v.y<0&&B(A(v.y)),p.copy(y),n.update()}function ve(F){_.set(F.clientX,F.clientY),g.subVectors(_,x).multiplyScalar(n.panSpeed),O(g.x,g.y),x.copy(_),n.update()}function we(F){J(F.clientX,F.clientY),F.deltaY<0?B(A(F.deltaY)):F.deltaY>0&&k(A(F.deltaY)),n.update()}function xe(F){let fe=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),fe=!0;break}fe&&(F.preventDefault(),n.update())}function ae(F){if(E.length===1)u.set(F.pageX,F.pageY);else{let fe=$e(F),Te=.5*(F.pageX+fe.x),ye=.5*(F.pageY+fe.y);u.set(Te,ye)}}function Pe(F){if(E.length===1)x.set(F.pageX,F.pageY);else{let fe=$e(F),Te=.5*(F.pageX+fe.x),ye=.5*(F.pageY+fe.y);x.set(Te,ye)}}function Y(F){let fe=$e(F),Te=F.pageX-fe.x,ye=F.pageY-fe.y,Oe=Math.sqrt(Te*Te+ye*ye);p.set(0,Oe)}function ge(F){n.enableZoom&&Y(F),n.enablePan&&Pe(F)}function U(F){n.enableZoom&&Y(F),n.enableRotate&&ae(F)}function re(F){if(E.length==1)f.set(F.pageX,F.pageY);else{let Te=$e(F),ye=.5*(F.pageX+Te.x),Oe=.5*(F.pageY+Te.y);f.set(ye,Oe)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;N(2*Math.PI*d.x/fe.clientHeight),z(2*Math.PI*d.y/fe.clientHeight),u.copy(f)}function Z(F){if(E.length===1)_.set(F.pageX,F.pageY);else{let fe=$e(F),Te=.5*(F.pageX+fe.x),ye=.5*(F.pageY+fe.y);_.set(Te,ye)}g.subVectors(_,x).multiplyScalar(n.panSpeed),O(g.x,g.y),x.copy(_)}function se(F){let fe=$e(F),Te=F.pageX-fe.x,ye=F.pageY-fe.y,Oe=Math.sqrt(Te*Te+ye*ye);y.set(0,Oe),v.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),k(v.y),p.copy(y);let je=(F.pageX+fe.x)*.5,et=(F.pageY+fe.y)*.5;J(je,et)}function W(F){n.enableZoom&&se(F),n.enablePan&&Z(F)}function Ae(F){n.enableZoom&&se(F),n.enableRotate&&re(F)}function de(F){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",R)),ke(F),F.pointerType==="touch"?Ue(F):q(F))}function C(F){n.enabled!==!1&&(F.pointerType==="touch"?be(F):oe(F))}function R(F){Ge(F),E.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",R)),n.dispatchEvent(Ed),r=s.NONE}function q(F){let fe;switch(F.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case hs.DOLLY:if(n.enableZoom===!1)return;G(F),r=s.DOLLY;break;case hs.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;Q(F),r=s.PAN}else{if(n.enableRotate===!1)return;K(F),r=s.ROTATE}break;case hs.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;K(F),r=s.ROTATE}else{if(n.enablePan===!1)return;Q(F),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Lh)}function oe(F){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(F);break;case s.DOLLY:if(n.enableZoom===!1)return;ne(F);break;case s.PAN:if(n.enablePan===!1)return;ve(F);break}}function he(F){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(F.preventDefault(),n.dispatchEvent(Lh),we(F),n.dispatchEvent(Ed))}function ce(F){n.enabled===!1||n.enablePan===!1||xe(F)}function Ue(F){switch(ue(F),E.length){case 1:switch(n.touches.ONE){case us.ROTATE:if(n.enableRotate===!1)return;ae(F),r=s.TOUCH_ROTATE;break;case us.PAN:if(n.enablePan===!1)return;Pe(F),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case us.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(F),r=s.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(F),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Lh)}function be(F){switch(ue(F),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;re(F),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Z(F),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(F),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(F),n.update();break;default:r=s.NONE}}function Le(F){n.enabled!==!1&&F.preventDefault()}function ke(F){E.push(F.pointerId)}function Ge(F){delete P[F.pointerId];for(let fe=0;fe<E.length;fe++)if(E[fe]==F.pointerId){E.splice(fe,1);return}}function ue(F){let fe=P[F.pointerId];fe===void 0&&(fe=new le,P[F.pointerId]=fe),fe.set(F.pageX,F.pageY)}function $e(F){let fe=F.pointerId===E[0]?E[1]:E[0];return P[fe]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",de),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}};mn();var tl=class extends Ks{constructor(e=null){super();let t=new Rn;t.deleteAttribute("uv");let n=new os({side:an}),s=new os,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Fi(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new De(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new De(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new De(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new De(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new De(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new De(t,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new De(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let x=new De(t,rr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let _=new De(t,rr(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let g=new De(t,rr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let p=new De(t,rr(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new De(t,rr(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let v=new De(t,rr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rr(i){let e=new Pt;return e.color.setScalar(i),e}mn();var ao=new I;function Gn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ao.copy(e),ao[n]=0,ao.normalize();let c=.5*o/(o+a),h=1-ao.angleTo(i)/l;return Math.sign(ao[t])===1?h*c:a/(o+a)+c+c*(1-h)}var nl=class extends Rn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,x=new I,_=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:x.set(1,0,0),f[p+0]=Gn(x,l,"z","y",r,n),f[p+1]=1-Gn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[p+0]=1-Gn(x,l,"z","y",r,n),f[p+1]=1-Gn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[p+0]=1-Gn(x,l,"x","z",r,e),f[p+1]=Gn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[p+0]=1-Gn(x,l,"x","z",r,e),f[p+1]=1-Gn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[p+0]=1-Gn(x,l,"x","y",r,e),f[p+1]=1-Gn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[p+0]=Gn(x,l,"x","y",r,e),f[p+1]=1-Gn(x,l,"y","x",r,t);break}}};mn();var Bi=class i extends De{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new kt;let n=this,s=t.color!==void 0?new Xe(t.color):new Xe(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new En,u=new I,f=new I,d=new I,x=new nt,_=new I(0,0,-1),g=new _t,p=new I,y=new I,v=new _t,M=new nt,b=this.camera,S=new jt(r,o,{samples:c,type:vn}),E=new It({name:l.name!==void 0?l.name:"unspecified",uniforms:Cn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=S.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=M,this.material=E,this.onBeforeRender=function(P,w,A){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(A.matrixWorld),x.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(x),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),x.extractRotation(A.matrixWorld),_.set(0,0,-1),_.applyMatrix4(x),_.add(d),y.subVectors(f,_),y.reflect(u).negate(),y.add(f),b.position.copy(p),b.up.set(0,1,0),b.up.applyMatrix4(x),b.up.reflect(u),b.lookAt(y),b.far=A.far,b.updateMatrixWorld(),b.projectionMatrix.copy(A.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(b.projectionMatrix),M.multiply(b.matrixWorldInverse),M.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(b.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let N=b.projectionMatrix;v.x=(Math.sign(g.x)+N.elements[8])/N.elements[0],v.y=(Math.sign(g.y)+N.elements[9])/N.elements[5],v.z=-1,v.w=(1+N.elements[10])/N.elements[14],g.multiplyScalar(2/g.dot(v)),N.elements[2]=g.x,N.elements[6]=g.y,N.elements[10]=g.z+1-a,N.elements[14]=g.w,n.visible=!1;let z=P.getRenderTarget(),V=P.xr.enabled,D=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(S),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(w,b),P.xr.enabled=V,P.shadowMap.autoUpdate=D,P.setRenderTarget(z);let O=A.viewport;O!==void 0&&P.state.viewport(O),n.visible=!0},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};Bi.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};mn();function Ad(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new At,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Td(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let x=Td(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Td(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;let l=new Nt(o,t,n);return s!==void 0&&(l.gpuType=s),l}function Rd(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,v=a.length;y<v;y++){let M=a[y],b=i.attributes[M];l[M]=new Nt(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=i.morphAttributes[M];S&&(c[M]=new Nt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}let d=e*.5,x=Math.log10(1/e),_=Math.pow(10,x),g=d*_;for(let y=0;y<r;y++){let v=n?n.getX(y):y,M="";for(let b=0,S=a.length;b<S;b++){let E=a[b],P=i.getAttribute(E),w=P.itemSize;for(let A=0;A<w;A++)M+=`${~~(P[u[A]](v)*_+g)},`}if(M in t)h.push(t[M]);else{for(let b=0,S=a.length;b<S;b++){let E=a[b],P=i.getAttribute(E),w=i.morphAttributes[E],A=P.itemSize,N=l[E],z=c[E];for(let V=0;V<A;V++){let D=u[V],O=f[V];if(N[O](o,P[D](v)),w)for(let k=0,B=w.length;k<B;k++)z[k][O](o,w[k][D](v))}}t[M]=o,h.push(o),o++}}let p=i.clone();for(let y in i.attributes){let v=l[y];if(p.setAttribute(y,new Nt(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),y in c)for(let M=0;M<c[y].length;M++){let b=c[y][M];p.morphAttributes[y][M]=new Nt(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}mn();Dh();mn();ar();var il=class extends Pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof It?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cn.clone(e.uniforms),this.material=new It({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};ar();var lo=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sl=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new il(or),this.copyPass.material.blending=zt,this.clock=new Ga}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lo!==void 0&&(o instanceof lo?n=!0:o instanceof sl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};mn();ar();var ol=class extends Pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};mn();ar();var Cd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var al=class extends Pn{constructor(){super();let e=Cd;this.uniforms=Cn.clone(e.uniforms),this.material=new Ba({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var zh=null;try{({GTAOPass:zh}=await Promise.resolve().then(()=>(Nd(),Ud)))}catch(i){console.warn("GTAO unavailable",i)}performance.mark("k-start");var Zd=JSON.parse(document.getElementById("units-data").textContent),dr=JSON.parse(document.getElementById("style-data").textContent),Ll=Object.fromEntries(Zd.map(i=>[i.id,i])),jn=document.getElementById("stage"),$d=3,yi=3.2,Mi=8,Ce=i=>i/100-yi/2,Ie=i=>i/100-Mi/2,_r=(location.hash||"").replace("#","").split("-").filter(Boolean),vr=_r.includes("render"),hn=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(hover: none)").matches,lt=new Wr({antialias:!0,preserveDrawingBuffer:vr,powerPreference:"high-performance"}),Ot=hn||_r.includes("lite"),_l=Math.min(window.devicePixelRatio||1,Ot?1.25:1.5),Od=Ot?.7:.9;lt.setPixelRatio(Ot||vr?_l:Math.min(_l,1.25));lt.outputColorSpace=Ct;lt.toneMapping=oo;lt.shadowMap.enabled=!0;lt.shadowMap.type=Xa;lt.shadowMap.autoUpdate=!1;var pr=!0,vl=!0;jn.appendChild(lt.domElement);var jd=Math.min(8,lt.capabilities.getMaxAnisotropy()),Kt=new Ks,Cy=new js(lt);Kt.environment=Cy.fromScene(new tl(lt),.04).texture;var _e=new on;Kt.add(_e);function Qt(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Py=i=>i.getContext("2d",{willReadFrequently:!0});function Ft(i,e,t,n,s,r=!0){let o=document.createElement("canvas");o.width=i,o.height=e;let a=Py(o);s(a,i,e);let l=new $r(o);return l.wrapS=l.wrapT=Fn,l.repeat.set(1/t,1/n),l.colorSpace=r?Ct:_n,l.anisotropy=jd,l}function yn(i,e,t,n,s){let r=Qt(s),o=i.getImageData(0,0,e,t),a=o.data;for(let l=0;l<a.length;l+=4){let c=(r()-.5)*n;for(let h=0;h<3;h++)a[l+h]=Math.max(0,Math.min(255,a[l+h]+c))}i.putImageData(o,0,0)}function $h(i,e,t,n,s,r){let o=Qt(n);for(let a=0;a<s;a++){let l=o()*e,c=o()*t,h=(.08+o()*.25)*e,u=o()<.5,f=r*(.3+o()*.7);for(let d of[-e,0,e])for(let x of[-t,0,t]){let _=i.createRadialGradient(l+d,c+x,0,l+d,c+x,h);_.addColorStop(0,u?`rgba(70,60,50,${f})`:`rgba(255,255,255,${f})`),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(l+d-h,c+x-h,h*2,h*2)}}}var pe={};pe.planks=Ft(1024,1024,1.2,1.2,(i,e,t)=>{let n=Qt(7),s=6,r=e/s;for(let o=0;o<s;o++){let a=-n()*t,l;for(;a<t;){l=t*(.55+n()*.6);let c=226+n()*26;i.fillStyle=`rgb(${c},${c},${c})`,i.fillRect(o*r,a,r,l);for(let h=0;h<52;h++){let u=o*r+n()*r;i.strokeStyle=`rgba(50,32,16,${.03+n()*.06})`,i.lineWidth=.6+n()*1.8,i.beginPath(),i.moveTo(u,a),i.bezierCurveTo(u+(n()-.5)*10,a+l*.33,u+(n()-.5)*10,a+l*.66,u+(n()-.5)*6,a+l),i.stroke()}i.fillStyle="rgba(30,20,10,.3)",i.fillRect(o*r,a,r,2),a+=l}i.fillStyle="rgba(30,20,10,.45)",i.fillRect(o*r,0,2,t)}yn(i,e,t,10,3)});pe.veneer=Ft(512,512,.6,.6,(i,e,t)=>{let n=Qt(11);i.fillStyle="rgb(236,236,236)",i.fillRect(0,0,e,t);for(let s=0;s<150;s++){let r=n()*e;i.strokeStyle=`rgba(40,30,20,${.03+n()*.08})`,i.lineWidth=.5+n()*2,i.beginPath(),i.moveTo(r,0),i.bezierCurveTo(r+(n()-.5)*18,t*.3,r+(n()-.5)*18,t*.7,r,t),i.stroke()}yn(i,e,t,8,5)});pe.fabric=Ft(256,256,.1,.1,(i,e,t)=>{i.fillStyle="rgb(238,238,238)",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=2)i.fillStyle="rgba(0,0,0,.05)",i.fillRect(n,0,1,t),i.fillRect(0,n,e,1);yn(i,e,t,26,9)});pe.boucle=Ft(256,256,.08,.08,(i,e,t)=>{let n=Qt(17);i.fillStyle="rgb(232,232,232)",i.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=n()<.5?255:190;i.fillStyle=`rgba(${r},${r},${r},.55)`,i.beginPath(),i.arc(n()*e,n()*t,1+n()*2.2,0,7),i.fill()}yn(i,e,t,20,19)});pe.stripes=Ft(256,256,.12,.12,(i,e,t)=>{i.fillStyle="rgb(238,238,236)",i.fillRect(0,0,e,t);for(let n=0;n<8;n++)i.fillStyle="rgba(60,68,78,.75)",i.fillRect(0,n*t/8,e,t/26),i.fillStyle="rgba(60,68,78,.3)",i.fillRect(0,n*t/8+t/18,e,t/60);for(let n=0;n<e;n+=2)i.fillStyle="rgba(0,0,0,.04)",i.fillRect(n,0,1,t);yn(i,e,t,16,29)});pe.paint=Ft(256,256,.6,.6,(i,e,t)=>{i.fillStyle="rgb(246,246,246)",i.fillRect(0,0,e,t),yn(i,e,t,7,13)});pe.plaster=Ft(512,512,1.4,1.4,(i,e,t)=>{i.fillStyle="rgb(240,240,240)",i.fillRect(0,0,e,t),$h(i,e,t,23,60,.07),yn(i,e,t,9,24)});function Dl(i,e,t,n={}){let r=Math.round(512*e/i);return Ft(512,r,i,e,(o,a,l)=>{let c=Qt(t);if(o.fillStyle=n.base||"rgb(244,244,244)",o.fillRect(0,0,a,l),n.mottle&&$h(o,a,l,t+2,n.mottle,n.mamp||.06),n.veins)for(let h=0;h<n.veins;h++){o.strokeStyle=n.veinCol?n.veinCol(c()):`rgba(90,90,96,${.06+c()*.12})`,o.lineWidth=.6+c()*2.2,o.beginPath();let u=c()*a,f=0;for(o.moveTo(u,f);f<l;)u+=(c()-.5)*60,f+=30+c()*40,o.lineTo(u,f);o.stroke()}yn(o,a,l,n.speck||8,t+1),n.grout!==!1&&(o.fillStyle=n.groutCol||"rgba(70,70,70,.5)",o.fillRect(0,0,a,n.gw||3),o.fillRect(0,0,n.gw||3,l))})}pe.porcelain80=Dl(.8,.8,39,{mottle:26,mamp:.045,speck:6,groutCol:"rgba(110,100,90,.32)",gw:2});pe.stone=Dl(.6,1.2,43,{mottle:34,mamp:.07,speck:9,groutCol:"rgba(80,76,72,.45)",gw:2});pe.stone60=Dl(.6,.6,45,{mottle:22,mamp:.06,speck:9,groutCol:"rgba(80,76,72,.45)",gw:2});pe.marbleDark=Dl(.4,.4,47,{base:"rgb(48,46,45)",veins:9,speck:6,grout:!1,veinCol:i=>`rgba(235,230,224,${.25+i*.45})`});function Iy(i,e){return Ft(512,1024,.6,1.2,(t,n,s)=>{let r=Qt(i);t.fillStyle="rgb(222,222,222)",t.fillRect(0,0,n,s),$h(t,n,s,i+4,18,.05);for(let o=0;o<230;o++){let a=r()*s,l=4+r()*22,c=120+r()*380,h=r()*6.28,u=.6+Math.pow(r(),2)*9,f=r()<.66?105+r()*70:245,d=f>240?.22+r()*.3:.08+r()*.24;t.strokeStyle=`rgba(${f},${f-4},${f-10},${d})`,t.lineWidth=u,t.beginPath();for(let x=-10;x<=n+10;x+=8){let _=a+l*Math.sin(x/c*6.283+h)+.35*l*Math.sin(x/(c*.37)*6.283+h*2);x<0?t.moveTo(x,_):t.lineTo(x,_)}t.stroke()}for(let o=0;o<520;o++)t.fillStyle=`rgba(70,62,54,${.25+r()*.35})`,t.beginPath(),t.ellipse(r()*n,r()*s,1+r()*5,.5+r()*1.2,0,0,7),t.fill();yn(t,n,s,8,i+1),e&&(t.fillStyle="rgba(80,70,60,.4)",t.fillRect(0,0,n,2),t.fillRect(0,0,2,s))})}pe.greige=Ft(512,1536,1,3,(i,e,t)=>{let n=Qt(63);i.fillStyle="rgb(176,167,155)",i.fillRect(0,0,e,t);for(let s=0;s<e;){let r=3+n()*30,o=(n()-.5)*12;i.fillStyle=o>0?`rgba(240,234,224,${o/90})`:`rgba(70,60,48,${-o/90})`,i.fillRect(s,0,r,t),s+=r}for(let s=0;s<900;s++){let r=n()*e,o=n()<.6,a=o?-10:n()*t*.6-t*.1,l=o?t+20:t*(.3+n()*.7),c=n()<.7,h=.03+n()*.08;i.strokeStyle=c?`rgba(100,88,74,${h})`:`rgba(226,220,210,${h})`,i.lineWidth=.3+n()*.9,i.beginPath(),i.moveTo(r,a),i.bezierCurveTo(r+(n()-.5)*7,a+l*.33,r+(n()-.5)*7,a+l*.66,r+(n()-.5)*4,a+l),i.stroke()}for(let s=0;s<16;s++){let r=n()*e,o=n()*t,a=140+n()*320;i.strokeStyle=`rgba(112,98,82,${.07+n()*.08})`,i.lineWidth=1+n()*2.2,i.beginPath(),i.moveTo(r,o),i.bezierCurveTo(r+9,o+a*.3,r-9,o+a*.7,r+3,o+a),i.stroke()}for(let s=0;s<2600;s++)i.fillStyle=`rgba(84,72,60,${.1+n()*.18})`,i.fillRect(n()*e,n()*t,1,2+n()*6);yn(i,e,t,6,64)});pe.greige.offset.x=-.15;pe.travTop=Iy(53,!1);pe.perf=Ft(256,256,.2,.2,(i,e,t)=>{i.fillStyle="rgb(236,236,236)",i.fillRect(0,0,e,t);let n=Qt(57);for(let o=0;o<90;o++){let a=n()*e;i.strokeStyle=`rgba(40,30,20,${.03+n()*.06})`,i.lineWidth=.5+n()*1.6,i.beginPath(),i.moveTo(0,a),i.lineTo(e,a+(n()-.5)*8),i.stroke()}let s=10,r=e/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(o+.5)*r,c=(a+.5)*r;i.fillStyle="rgba(0,0,0,.95)",i.beginPath(),i.arc(l,c,r*.21,0,7),i.fill(),i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=1.2,i.beginPath(),i.arc(l,c+.8,r*.19,.2,2.9),i.stroke()}yn(i,e,t,8,59)});pe.perfBump=Ft(256,256,.2,.2,(i,e,t)=>{i.fillStyle="rgb(255,255,255)",i.fillRect(0,0,e,t);let n=10,s=e/n;for(let r=0;r<n;r++)for(let o=0;o<n;o++)i.fillStyle="#000",i.beginPath(),i.arc((r+.5)*s,(o+.5)*s,s*.18,0,7),i.fill()},!1);pe.veneerH=Ft(512,512,.8,.8,(i,e,t)=>{let n=Qt(12);i.fillStyle="rgb(236,236,236)",i.fillRect(0,0,e,t);for(let s=0;s<150;s++){let r=n()*t;i.strokeStyle=`rgba(40,30,20,${.03+n()*.08})`,i.lineWidth=.5+n()*2,i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(e*.3,r+(n()-.5)*18,e*.7,r+(n()-.5)*18,e,r),i.stroke()}yn(i,e,t,8,6)});function Jd(i){return(e,t,n)=>{let r=t/5,o=Qt(14);for(let a=0;a<5;a++){let l=e.createLinearGradient(a*r,0,(a+1)*r,0);l.addColorStop(0,"rgb(96,96,96)"),l.addColorStop(.14,"rgb(212,212,212)"),l.addColorStop(.45,"rgb(252,252,252)"),l.addColorStop(.8,"rgb(222,222,222)"),l.addColorStop(.93,"rgb(150,150,150)"),l.addColorStop(1,"rgb(70,70,70)"),e.fillStyle=l,e.fillRect(a*r,0,r,n)}if(i){for(let a=0;a<140;a++){let l=o()*t;e.strokeStyle=`rgba(40,30,20,${.04+o()*.08})`,e.lineWidth=.5+o()*1.4,e.beginPath(),e.moveTo(l,0),e.bezierCurveTo(l+(o()-.5)*5,n*.3,l+(o()-.5)*5,n*.7,l,n),e.stroke()}yn(e,t,n,8,15)}}}pe.fluteOak=Ft(256,512,.11,.6,Jd(!0));pe.fluteBump=Ft(256,64,.11,.6,Jd(!1),!1);pe.mesh=Ft(64,64,.06,.035,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="rgba(255,255,255,1)",i.lineWidth=9;for(let n=-1;n<=1;n++)i.beginPath(),i.moveTo(n*e,0),i.lineTo(n*e+e,t),i.stroke(),i.beginPath(),i.moveTo(n*e+e,0),i.lineTo(n*e,t),i.stroke()});pe.groove=Ft(128,16,.3,.3,(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,t),i.fillStyle="#000",i.fillRect(0,0,3,t),i.fillStyle="#777",i.fillRect(3,0,2,t)},!1);pe.grille=Ft(128,128,.04,.04,(i,e,t)=>{i.fillStyle="rgb(200,200,200)",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=4)i.fillStyle="rgba(0,0,0,.25)",i.fillRect(n,0,2,t),i.fillRect(0,n,e,2);yn(i,e,t,30,61)});function Ly(i){return Ft(2048,1024,1,1,(e,t,n)=>{let s=Qt(41),r=n*.5,o=i==="day",a=i==="dusk",l=i==="night",c=e.createLinearGradient(0,0,0,r);if(l?(c.addColorStop(0,"#060b1c"),c.addColorStop(.75,"#16223f"),c.addColorStop(1,"#2b3352")):a?(c.addColorStop(0,"#2f3d70"),c.addColorStop(.45,"#b9788a"),c.addColorStop(.8,"#f2a46c"),c.addColorStop(1,"#ffd29a")):(c.addColorStop(0,"#7fb0db"),c.addColorStop(.6,"#c7dceb"),c.addColorStop(1,"#eaf0f2")),e.fillStyle=c,e.fillRect(0,0,t,r+2),a){let x=e.createRadialGradient(t*.22,r-30,4,t*.22,r-30,420);x.addColorStop(0,"rgba(255,236,190,1)"),x.addColorStop(.08,"rgba(255,200,130,.85)"),x.addColorStop(1,"rgba(255,160,90,0)"),e.fillStyle=x,e.fillRect(0,0,t,r)}if(l)for(let x=0;x<260;x++)e.fillStyle=`rgba(255,255,255,${.2+s()*.6})`,e.fillRect(s()*t,s()*r*.8,1.6,1.6);if(!l)for(let x=0;x<26;x++){let _=s()*t,g=r*(.2+s()*.65),p=120+s()*260,y=a?.22:.42;for(let v=0;v<7;v++){let M=e.createRadialGradient(_+(s()-.5)*p,g+(s()-.5)*18,1,_,g,p*(.25+s()*.3)),b=a?"255,214,190":"255,255,255";M.addColorStop(0,`rgba(${b},${y})`),M.addColorStop(1,`rgba(${b},0)`),e.fillStyle=M,e.fillRect(_-p,g-p*.4,p*2,p*.8)}}c=e.createLinearGradient(0,r,0,n*.78),l?(c.addColorStop(0,"#1c2440"),c.addColorStop(1,"#0a1020")):a?(c.addColorStop(0,"#d79a84"),c.addColorStop(.35,"#7d6f86"),c.addColorStop(1,"#3d4a66")):(c.addColorStop(0,"#a9c3cf"),c.addColorStop(.3,"#6f97ac"),c.addColorStop(1,"#3f6c84")),e.fillStyle=c,e.fillRect(0,r,t,n*.3);for(let x=0;x<900;x++){let _=r+Math.pow(s(),1.6)*n*.28,g=6+(_-r)*.25*s();e.fillStyle=l?`rgba(255,214,150,${.05+s()*.12})`:`rgba(255,255,255,${.04+s()*(a?.2:.12)})`,e.fillRect(s()*t,_,g,1+(_-r)/160)}if(a){let x=e.createLinearGradient(t*.22-60,0,t*.22+60,0);x.addColorStop(0,"rgba(255,200,140,0)"),x.addColorStop(.5,"rgba(255,214,160,.45)"),x.addColorStop(1,"rgba(255,200,140,0)"),e.fillStyle=x,e.fillRect(t*.22-60,r,120,n*.26)}let h=l?"rgba(30,36,58,1)":a?"rgba(120,104,128,.75)":"rgba(132,158,170,.7)";e.fillStyle=h;for(let[x,_,g]of[[.05,.2,9],[.52,.66,7],[.78,.98,11]]){e.beginPath(),e.moveTo(x*t,r+1);for(let p=x*t;p<=_*t;p+=6){let y=(p-x*t)/((_-x)*t);e.lineTo(p,r+1-g*Math.sin(y*Math.PI)*(.7+.3*Math.sin(p*.05)))}e.lineTo(_*t,r+1),e.closePath(),e.fill()}for(let x=0;x<70;x++){let _=t*(.56+s()*.08),g=3+s()*7,p=4+Math.pow(s(),2)*26;e.fillStyle=h,e.fillRect(_,r+1-p,g,p),l&&(e.fillStyle=`rgba(255,214,150,${.4+s()*.5})`,e.fillRect(_+1,r-p*s(),1.4,1.4))}let u=n*.74;c=e.createLinearGradient(0,u,0,n),l?(c.addColorStop(0,"#141826"),c.addColorStop(1,"#0b0d14")):a?(c.addColorStop(0,"#6a5e64"),c.addColorStop(1,"#3e3a40")):(c.addColorStop(0,"#8e958f"),c.addColorStop(1,"#6b726c")),e.fillStyle=c,e.beginPath(),e.moveTo(0,n);for(let x=0;x<=t;x+=16)e.lineTo(x,u+14*Math.sin(x/260)+8*Math.sin(x/90));e.lineTo(t,n),e.closePath(),e.fill();let f=l?[[28,30,40],[36,38,48],[22,24,32]]:a?[[120,104,108],[150,128,120],[96,86,92]]:[[196,196,188],[168,172,168],[214,210,200],[140,146,142],[182,150,128]];for(let x=0;x<520;x++){let _=u+10+Math.pow(s(),.8)*(n-u),g=.3+(_-u)/(n-u)*1.8,p=(10+s()*26)*g,y=(4+s()*12)*g,v=f[s()*f.length|0];e.fillStyle=`rgb(${v[0]},${v[1]},${v[2]})`,e.fillRect(s()*t,_-y,p,y),l&&s()<.5&&(e.fillStyle=`rgba(255,206,140,${.5+s()*.5})`,e.fillRect(s()*t,_-y*s(),1.5*g,1.5*g)),!l&&s()<.18&&(e.fillStyle="rgba(90,120,80,.6)",e.beginPath(),e.arc(s()*t,_,3*g+s()*4*g,0,7),e.fill())}c=e.createLinearGradient(0,u,0,n);let d=l?"12,16,28":a?"150,128,140":"200,212,216";c.addColorStop(0,`rgba(${d},.55)`),c.addColorStop(1,`rgba(${d},.12)`),e.fillStyle=c,e.fillRect(0,u-20,t,n-u+20);for(let x=0;x<14;x++){let _=s()*t,g=22+s()*34,p=60+s()*150,y=u+40+s()*80,v=f[s()*f.length|0];e.fillStyle=`rgb(${v[0]+10},${v[1]+10},${v[2]+10})`,e.fillRect(_,y-p,g,p);for(let M=y-p+6;M<y-4;M+=7)for(let b=_+4;b<_+g-4;b+=6)e.fillStyle=l?s()<.45?`rgba(255,210,140,${.5+s()*.5})`:"rgba(10,12,18,.6)":"rgba(40,50,60,.22)",e.fillRect(b,M,3,3.5)}})}var yl={};for(let i of["day","dusk","night"])Object.defineProperty(yl,i,{configurable:!0,get(){let e=Ly(i);return e.repeat.set(1,1),e.wrapS=e.wrapT=wn,Object.defineProperty(yl,i,{value:e}),e}});var me=i=>new os(i),m={floor:me({map:pe.planks,roughness:.45}),tile:me({map:pe.porcelain80,roughness:.32}),paint:me({map:pe.plaster,roughness:.95}),wallOut:me({color:15460063,roughness:.95}),cap:me({color:14933202,roughness:.95}),slab:me({color:15130840,roughness:.95}),ceiling:me({color:16052974,roughness:.95}),base:me({color:2762790,roughness:.7}),wood:me({map:pe.veneer,roughness:.5}),woodPanel:me({map:pe.veneer,bumpMap:pe.groove,bumpScale:1.4,roughness:.5}),oak:me({map:pe.veneer,roughness:.55}),oakH:me({map:pe.veneerH,roughness:.55}),oakFlute:me({map:pe.fluteOak,bumpMap:pe.fluteBump,bumpScale:2.2,roughness:.55}),charcoal:me({map:pe.paint,roughness:.82}),console:me({map:pe.veneer,roughness:.5}),bronze:me({color:7033920,roughness:.35,metalness:.6}),speakerBox:me({map:pe.veneer,color:3812386,roughness:.45}),woodDark:me({map:pe.veneer,roughness:.45}),slat:me({map:pe.veneer,roughness:.55}),slatBack:me({color:1908513,roughness:.9}),head:me({map:pe.fabric,roughness:.95}),bedFrame:me({map:pe.veneer,roughness:.55}),sheet:me({map:pe.fabric,roughness:.96}),duvet:me({map:pe.fabric,roughness:.97}),pillow:me({map:pe.fabric,roughness:.97}),pillow2:me({map:pe.fabric,roughness:.97}),throwM:me({map:pe.fabric,roughness:.95}),cushion:me({map:pe.boucle,roughness:1}),stripe:me({map:pe.stripes,roughness:.95}),blackout:me({map:pe.fabric,roughness:.95,side:Ut}),metal:me({color:1973790,roughness:.45,metalness:.7}),black:me({color:1776670,roughness:.5,metalness:.2}),frameBlk:me({color:1974049,roughness:.45,metalness:.5}),plinth:me({color:2828326,roughness:.8}),mirror:me({color:13226452,roughness:.03,metalness:1}),screen:me({color:723982,roughness:.18,metalness:.4}),door:me({map:pe.veneer,roughness:.5}),white:me({color:15987697,roughness:.5}),tvSide:me({map:pe.greige,roughness:.62}),consoleLt:me({map:pe.paint,roughness:.6}),shelfWood:me({map:pe.veneer,roughness:.5}),travTop:me({map:pe.travTop,roughness:.4}),perf:me({map:pe.perf,bumpMap:pe.perfBump,bumpScale:2.5,roughness:.6}),bathWall:me({map:pe.stone,roughness:.45}),bathFloor:me({map:pe.stone60,roughness:.55}),showerFloor:me({map:pe.stone60,roughness:.65}),balcFloor:me({map:pe.stone,roughness:.7}),balcWall:me({map:pe.stone,roughness:.6}),pot:me({roughness:.8}),leaf:me({color:5992005,roughness:.62,side:Ut}),twig:me({color:7035464,roughness:.9}),soil:me({color:3812386,roughness:1}),ceramic:me({color:15328218,roughness:.6}),porcelain:me({color:16185076,roughness:.16}),book1:me({color:10127992,roughness:.8}),book2:me({color:4082258,roughness:.8}),book3:me({color:14273456,roughness:.8}),shade:me({color:15918802,roughness:.8,emissive:16761978,emissiveIntensity:0}),led:me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4}),ledAcc:me({color:16773592,emissive:16760698,emissiveIntensity:0,roughness:.4}),sky:new Pt({map:yl.day})};performance.mark("k-tex");m.steel=me({color:13225166,roughness:.3,metalness:.85});m.inox=me({color:12172736,roughness:.22,metalness:.9});m.brass=me({color:12096090,roughness:.32,metalness:.9});m.fit=me({color:9078401,roughness:.4,metalness:.6});m.hose=me({color:9078401,roughness:.45,metalness:.5});m.bottle=me({color:15855595,roughness:.35});m.socket=me({color:15526372,roughness:.5});m.wc=me({color:16053232,roughness:.16});m.wcSeat=me({color:16250611,roughness:.2});m.wcIn=me({color:15329251,roughness:.1});m.basin=me({color:16119025,roughness:.14,side:Ut});m.basinIn=me({color:15460837,roughness:.08});m.bathCeil=me({color:15855337,roughness:.9});m.ledBath=me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4});m.ledWard=me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4});m.ledKit=me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4});m.lampWhite=me({color:16052714,roughness:.4,emissive:16767400,emissiveIntensity:0});m.balcLamp=me({color:15920096,roughness:.6,emissive:16761978,emissiveIntensity:0});m.speaker=me({map:pe.grille,color:2763308,roughness:.95});m.induction=me({color:789517,roughness:.08,metalness:.3});m.hobRing=me({color:1710619,emissive:16726554,emissiveIntensity:0,roughness:.3});m.fridgeIn=me({color:15922164,emissive:15266047,emissiveIntensity:0,roughness:.4});m.olive=me({color:9280122,roughness:.7,side:Ut});m.olive2=me({color:6714202,roughness:.7,side:Ut});m.drawerIn=me({map:pe.veneer,color:10126192,roughness:.6});m.garm=[15328476,13616824,9211795,3093824,7305822,11045482,2039585,16052974,9068362,5135214].map(i=>me({map:pe.fabric,color:i,roughness:.95}));m.food=[14241594,15777866,8171083,15986662,5078968,15043130].map(i=>me({color:i,roughness:.5}));function qi(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d");t(s,i,e);let r=new $r(n);return r.colorSpace=Ct,r.anisotropy=jd,r.userData.g=s,r}pe.netflix=qi(1024,576,(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t);let n=i.createRadialGradient(e/2,t/2,10,e/2,t/2,e*.55);n.addColorStop(0,"rgba(110,6,12,.38)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=[..."NETFLIX"],r=158,o=.8,a=4;i.font=`400 ${r}px "Bebas Neue", Impact, "Arial Narrow", sans-serif-condensed, "Roboto Condensed", "Arial Black", sans-serif`,i.fillStyle="#e50914",i.textBaseline="alphabetic";let l=s.map(d=>i.measureText(d).width*o),c=l.reduce((d,x)=>d+x,0)+a*(s.length-1),h=(e-c)/2,u=t/2+r*.34,f=(s.length-1)/2;s.forEach((d,x)=>{let _=(x-f)/f,g=1+.15*_*_;i.save(),i.translate(h,u+9*_*_),i.scale(o,g),i.fillText(d,0,0),i.restore(),h+=l[x]+a})});pe.acDisp=qi(128,56,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#9fe6ff",i.font='600 40px "Segoe UI", Roboto, Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("24\xB0",e/2,t/2+2)});pe.lockDisp=qi(64,96,(i,e,t)=>{i.fillStyle="#05060a",i.fillRect(0,0,e,t),i.fillStyle="#7fd4ff",i.font='600 15px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",[["1","2","3"],["4","5","6"],["7","8","9"],["*","0","#"]].forEach((n,s)=>n.forEach((r,o)=>i.fillText(r,12+o*20,14+s*22)))});pe.windStreak=qi(128,32,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.3,"rgba(255,255,255,1)"),n.addColorStop(.7,"rgba(255,255,255,.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.globalCompositeOperation="destination-in";let s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.5,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),i.globalCompositeOperation="source-over"});m.tvScreen=me({color:394759,roughness:.22,metalness:.3,emissive:16777215,emissiveMap:pe.netflix,emissiveIntensity:0});m.lockScr=me({color:329224,roughness:.2,emissive:16777215,emissiveMap:pe.lockDisp,emissiveIntensity:.6});m.acDisp=new Pt({map:pe.acDisp,transparent:!0,opacity:0,depthWrite:!1});m.acLed=me({color:1776670,emissive:4645002,emissiveIntensity:0});m.wind=new Pt({map:pe.windStreak,color:10475263,transparent:!0,opacity:0,depthWrite:!1,side:Ut});pe.flow=qi(32,256,(i,e,t)=>{i.fillStyle="rgba(255,255,255,.38)",i.fillRect(0,0,e,t);let n=Qt(97);for(let s=0;s<80;s++){let r=n()*e,o=n()*t,a=10+n()*46,l=.3+n()*.65;i.fillStyle=`rgba(255,255,255,${l})`,i.fillRect(r,o,1+n()*3,a),i.fillRect(r,o-t,1+n()*3,a)}});pe.flow.wrapS=pe.flow.wrapT=Fn;pe.flow.repeat.set(1,1.4);pe.hot=qi(64,64,(i,e)=>{let t=e/2;i.fillStyle="rgba(28,24,20,.42)",i.beginPath(),i.arc(t,t,t*.92,0,7),i.fill(),i.fillStyle="rgba(255,251,244,.97)",i.beginPath(),i.arc(t,t,t*.7,0,7),i.fill()});m.hot=new qr({map:pe.hot,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-40});m.outline=new Zr({color:16773590,transparent:!0,opacity:.9,depthTest:!1});pe.glowV=qi(32,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)});pe.glowR=qi(128,128,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)});var oi=(i,e,t)=>new Pt({map:i,color:e,transparent:!0,opacity:t,blending:oa,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-8});m.glowFake=oi(pe.glowV,16758903,.5);m.glowTV=oi(pe.glowR,16738906,0);m.glowBalc=oi(pe.glowR,16758903,0);m.glowFridge=oi(pe.glowV,14674431,0);m.glowSoft=oi(pe.glowR,16758903,.4);m.glowSlot=oi(pe.glowV,16763030,.2);m.glowUp=oi(pe.glowV,16761477,.5);m.glowWash=oi(pe.glowV,16762510,.3);m.glowLamp=oi(pe.glowR,16758903,0);m.cageMesh=me({map:pe.mesh,color:4935250,alphaTest:.5,side:Ut,roughness:.5,metalness:.55});m.cageFrame=me({color:4079684,roughness:.45,metalness:.6});m.brassRing=me({color:12096090,roughness:.3,metalness:.9});m.cone=me({color:1710619,roughness:.7});m.carafe=me({color:14674154,roughness:.05,transparent:!0,opacity:.38,depthWrite:!1});function qt(i,e,t,n,s,r,o,a,l=m.glowFake){let c=new De(new Vt(i/100,e/100),l);return c.position.set(Ce(t),n/100,Ie(s)),c.rotation.set(r,o,0),c.renderOrder=3,(a||_e).add(c),c}m.water=new Pt({color:15004415,transparent:!0,opacity:.8,depthWrite:!1});m.mist=new Pt({color:15660799,transparent:!0,opacity:.1,depthWrite:!1,side:Ut});m.splash=new Pt({color:15398399,transparent:!0,opacity:.35,depthWrite:!1});m.glass=new Pt({color:9411230,transparent:!0,opacity:.09,depthWrite:!1});m.rail=new Pt({color:9411230,transparent:!0,opacity:.13,depthWrite:!1});m.sheer=new za({map:pe.fabric,transparent:!0,opacity:.6,side:Ut,depthWrite:!1});pe.sheen=Ft(256,256,.7,.7,(i,e,t)=>{i.fillStyle="rgba(70,50,34,.55)",i.fillRect(0,0,e,t);for(let[n,s,r]of[[.18,.16,.13],[.42,.05,.1],[.75,.1,.07]])i.save(),i.translate(e/2,t/2),i.rotate(-.7),i.fillStyle=`rgba(255,255,255,${r})`,i.fillRect(-e,(n-.5)*t*1.4,e*2,s*t),i.restore()});m.smoked=me({map:pe.sheen,transparent:!0,roughness:.06,metalness:.1,depthWrite:!1});var qe={};function gt(i,e,t=1.4,n=[]){qe[i]={v:0,t:0,speed:t,apply:e},n.forEach(s=>s.traverse(r=>{r.userData.toggle=i})),e(0)}function tn(i,e,t,n,s){let r=new on;return r.position.set(Ce(i),e/100,Ie(t)),r.userData.pivot=!0,(s||_e).add(r),s&&s.updateMatrixWorld(!0),n.forEach(o=>r.attach(o)),r}function Ul(i,e,t,n){let s=i.attributes.position,r=i.attributes.normal,o=i.attributes.uv;if(!o)return i;for(let a=0;a<s.count;a++){let l=Math.abs(r.getX(a)),c=Math.abs(r.getY(a)),h=Math.abs(r.getZ(a)),u=s.getX(a)+e,f=s.getY(a)+t,d=s.getZ(a)+n;l>=c&&l>=h?o.setXY(a,d,f):c>=h?o.setXY(a,u,d):o.setXY(a,u,f)}return o.needsUpdate=!0,i}function T(i,e,t,n,s,r,o,a={}){let l=(t-i)/100,c=(n-e)/100,h=(r-s)/100,u=a.r?Math.min(a.r/100,Math.min(l,c,h)/2-8e-4):0,f=u>0?new nl(l,h,c,a.seg||3,u):new Rn(l,h,c),d=Ce((i+t)/2),x=(s+r)/200,_=Ie((e+n)/2);Ul(f,d,x,_);let g=new De(f,o);return g.position.set(d,x,_),g.castShadow=a.cast!==!1,g.receiveShadow=a.recv!==!1,(a.parent||_e).add(g),g}function Be(i,e,t,n,s,r,o,a={}){let l=new Oi(t/100,n/100,(r-s)/100,a.seg||28),c=new De(l,o);return c.position.set(Ce(i),(s+r)/200,Ie(e)),c.castShadow=a.cast!==!1,c.receiveShadow=!0,(a.parent||_e).add(c),c}function Wi(i,e,t,n,s,r,o,a={}){let l=new De(new si(1,a.seg||24,a.seg?Math.round(a.seg*.7):16,0,Math.PI*2,0,a.half?Math.PI/2:Math.PI),o);return l.scale.set(n/100,s/100,r/100),l.position.set(Ce(i),t/100,Ie(e)),l.castShadow=a.cast!==!1,l.receiveShadow=!0,(a.parent||_e).add(l),l}function Ml(i,e,t,n,s,r,o,a,l={}){let c=(e-i)/100,h=(s-n)/100,u=Math.max(24,Math.round(c*70)),f=new Vt(c,h,u,1),d=f.attributes.position;for(let _=0;_<d.count;_++){let g=d.getX(_);d.setZ(_,r/100*Math.sin((g+c/2)/(o/100)*Math.PI*2))}f.computeVertexNormals(),Ul(f,Ce((i+e)/2),0,0);let x=new De(f,a);return x.position.set(Ce((i+e)/2),(n+s)/200,Ie(t)),x.castShadow=l.cast!==!1,x.receiveShadow=!0,(l.parent||_e).add(x),x}var jh=new si(1,14,10),Jh=Ot?new si(1,6,3):new si(1,8,5);function Dy(i,e,t,n,s,r,o=1,a=m.leaf){for(let l=0;l<t;l++){let c=l*2.39996,h=n+l*s,u=r+.04*Math.sin(l),f=new De(jh,a);f.scale.set(.085*o,.011,.055*o),f.position.set(Ce(i)+Math.cos(c)*u,h,Ie(e)+Math.sin(c)*u),f.rotation.set(.35*Math.sin(l*1.3),-c,.5+.25*Math.cos(l)),f.castShadow=!0,f.receiveShadow=!0,_e.add(f)}}function Fe(i,e,t,n,s={}){let r=new I(Ce(i[0]),i[2]/100,Ie(i[1])),o=new I(Ce(e[0]),e[2]/100,Ie(e[1])),a=new De(new Oi(t/100,t/100,r.distanceTo(o),s.seg||18),n);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new I(0,1,0),o.clone().sub(r).normalize()),a.castShadow=s.cast!==!1,a.receiveShadow=!0,(s.parent||_e).add(a),a}function cr(i,e,t,n,s,r,o,a,l,c,h){let u=new Qr,f=(S,E)=>[Ce(S),-Ie(E)],d=i+l,x=e+l,_=t-l,g=n-l,p=Math.max(.1,o-l),y=Math.max(.1,a-l);u.moveTo(...f(d+p,x)),u.lineTo(...f(_-p,x)),u.quadraticCurveTo(...f(_,x),...f(_,x+p)),u.lineTo(...f(_,g-y)),u.quadraticCurveTo(...f(_,g),...f(_-y,g)),u.lineTo(...f(d+y,g)),u.quadraticCurveTo(...f(d,g),...f(d,g-y)),u.lineTo(...f(d,x+p)),u.quadraticCurveTo(...f(d,x),...f(d+p,x));let v=new Na(u,{depth:Math.max(.001,(r-s-2*l)/100),bevelEnabled:l>0,bevelThickness:l/100,bevelSize:l/100,bevelSegments:4,curveSegments:12,steps:h?10:1});if(v.rotateX(-Math.PI/2),v.translate(0,(s+l)/100,0),h){let S=v.attributes.position,E=Ie(n),P=Ce((i+t)/2);for(let w=0;w<S.count;w++){let A=Math.min(1,Math.max(0,(h.top/100-S.getY(w))/((h.top-s)/100))),N=A*A;S.setZ(w,E-(E-S.getZ(w))*(1-h.ky*N)),S.setX(w,P+(S.getX(w)-P)*(1-h.kx*N))}}v.deleteAttribute("normal"),v.deleteAttribute("uv");let M=Rd(v,1e-5);M.computeVertexNormals(),v.dispose();let b=new De(M,c);return b.castShadow=!0,b.receiveShadow=!0,_e.add(b),b}function bl(i,e,t){let n=new Jr(i.map(r=>new I(Ce(r[0]),r[2]/100,Ie(r[1])))),s=new De(new Fa(n,64,e/100,8,!1),t);return s.castShadow=!0,s.receiveShadow=!0,_e.add(s),s}var Xi=null,vo=[],hr={},yr=[],st=[],Mo=[],Je=null,go=null,vi=[],Kh=[],_i=null,ut=null,Uy=[],ur=null,Nl=[],fr=null;function fo(i,e,t,n,s){let r=new on;return _e.add(r),Mo.push({name:i,g:r,n:new I(e,0,t),p:new I(n,0,s)}),r}function Kd(i,e,t,n,s={}){let r=s.n||(hn?180:300),o=9.8,a=s.v0||2.3,l=.012,c=s.spread||.34,h=new xi(new Rn(.007,.1,.007),m.water,r);h.frustumCulled=!1;let u=new xi(new si(.006,6,4),m.splash,90);u.frustumCulled=!1;let f=O=>(O+Math.sqrt(O*O+2*o*(e.y-l)))/o,d=t.clone().multiplyScalar(a),x=f(d.y),_=e.clone().addScaledVector(d,x);_.y=l;let g=e.clone().sub(_),p=g.length(),y=new De(new Oi(s.r0||.06,s.r1||.24,p,28,1,!0),m.mist);y.position.copy(e).add(_).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new I(0,1,0),g.normalize()),h.visible=u.visible=y.visible=!1,_e.add(h),_e.add(u),_e.add(y);let v=Math.random,M=[],b=new I,S=s.rad||.035,E=O=>{b.set((v()-.5)*c,(v()-.5)*.2,(v()-.5)*c),O.v=t.clone().add(b).normalize().multiplyScalar(a*(.88+v()*.24));let k=v()*6.283,B=Math.sqrt(v())*S;O.p=e.clone().add(new I(Math.cos(k)*B,0,Math.sin(k)*B)),O.T=f(O.v.y),O.t=0};for(let O=0;O<r;O++){let k={};E(k),k.t=v()*k.T,M.push(k)}let P=new nt,w=new en,A=new en,N=new I(1,1,1),z=new I,V=new I,D=new I(0,1,0);yr.push({id:i,update(O){for(let k=0;k<r;k++){let B=M[k];B.t+=O,(B.t>B.T||B.t<0)&&E(B),z.copy(B.p).addScaledVector(B.v,B.t),z.y-=.5*o*B.t*B.t,V.copy(B.v),V.y-=o*B.t,w.setFromUnitVectors(D,V.normalize()),P.compose(z,w,N),h.setMatrixAt(k,P)}h.instanceMatrix.needsUpdate=!0;for(let k=0;k<90;k++){let B=v()*6.283,J=Math.sqrt(v())*(s.splash||.13);z.set(_.x+Math.cos(B)*J,l+v()*.05,_.z+Math.sin(B)*J),P.compose(z,A,N),u.setMatrixAt(k,P)}u.instanceMatrix.needsUpdate=!0}}),gt(i,O=>{h.visible=u.visible=y.visible=O>.02,m.water.opacity=.8*O,m.splash.opacity=.45*O,m.mist.opacity=.03*O},3,n)}function Qh(i,e,t){let n=[],s=[],r=new Pt({map:pe.flow,color:14873343,transparent:!0,opacity:0,depthWrite:!1}),o=new Pt({color:14479359,transparent:!0,opacity:0,depthWrite:!1}),a=new Pt({color:15923711,transparent:!0,opacity:0,depthWrite:!1});for(let[_,g,p,y]of e){let v=new De(new Oi(.0034,.0046,(p-y)/100,12,1,!0),r);v.position.set(Ce(_),(p+y)/200,Ie(g)),_e.add(v),n.push(v);let M=new De(new Hn(.04,24),o);M.rotation.x=-Math.PI/2,M.position.set(Ce(_),y/100+.002,Ie(g)),_e.add(M),n.push(M),s.push(new I(Ce(_),y/100,Ie(g)))}let l=18*s.length,c=new xi(new si(.0022,6,4),a,l);c.frustumCulled=!1,_e.add(c),n.push(c),n.forEach(_=>{_.visible=!1});let h=new nt,u=new en,f=new I(1,1,1),d=new I,x=Math.random;yr.push({id:i,update(_){pe.flow.offset.y+=_*2.6;for(let g=0;g<l;g++){let p=s[g%s.length],y=x()*6.283,v=.006+x()*.022;d.set(p.x+Math.cos(y)*v,p.y+x()*.016,p.z+Math.sin(y)*v),h.compose(d,u,f),c.setMatrixAt(g,h)}c.instanceMatrix.needsUpdate=!0}}),gt(i,_=>{n.forEach(g=>{g.visible=_>.02}),r.opacity=.85*_,o.opacity=.3*_,a.opacity=.6*_},2.5,t)}function Qd(i,e,t,n,s){let r=n.n,o=9.8,a=.012,l=n.v0,c=Math.random,h=new Pt({color:15004415,transparent:!0,opacity:0,depthWrite:!1}),u=new Pt({color:15661055,transparent:!0,opacity:0,depthWrite:!1}),f=new xi(new Rn(n.w,n.l,n.w),h,r);f.frustumCulled=!1;let d=new xi(new si(n.w,6,4),u,40);d.frustumCulled=!1,f.visible=d.visible=!1,_e.add(f),_e.add(d),t.normalize();let x=N=>(N+Math.sqrt(N*N+2*o*(e.y-a)))/o,_=t.clone().multiplyScalar(l),g=e.clone().addScaledVector(_,x(_.y));g.y=a;let p=[],y=new I,v=N=>{y.set((c()-.5)*n.spread,(c()-.5)*n.spread,(c()-.5)*n.spread),N.v=t.clone().add(y).normalize().multiplyScalar(l*(.9+c()*.2)),N.p=e,N.T=x(N.v.y),N.t=0};for(let N=0;N<r;N++){let z={};v(z),z.t=c()*z.T,p.push(z)}let M=new nt,b=new en,S=new en,E=new I(1,1,1),P=new I,w=new I,A=new I(0,1,0);yr.push({id:i,update(N){for(let z=0;z<r;z++){let V=p[z];V.t+=N,(V.t>V.T||V.t<0)&&v(V),P.copy(V.p).addScaledVector(V.v,V.t),P.y-=.5*o*V.t*V.t,w.copy(V.v),w.y-=o*V.t,b.setFromUnitVectors(A,w.normalize()),M.compose(P,b,E),f.setMatrixAt(z,M)}f.instanceMatrix.needsUpdate=!0;for(let z=0;z<40;z++){let V=c()*6.283,D=Math.sqrt(c())*.07;P.set(g.x+Math.cos(V)*D,a+c()*.03,g.z+Math.sin(V)*D),M.compose(P,S,E),d.setMatrixAt(z,M)}d.instanceMatrix.needsUpdate=!0}}),gt(i,N=>{f.visible=d.visible=N>.02,h.opacity=.7*N,u.opacity=.45*N},3,s)}function ep(i,e,t,n,s,r=m.wind){let o=hn?48:72,a=1.8,l=Math.random,c=new I,h=new xi(new Vt(1,1),r,o);h.frustumCulled=!1,h.visible=!1,_e.add(h);let u=[],f=M=>{M.p=e.clone().addScaledVector(n,(l()-.5)*s),M.v=t.clone().multiplyScalar(.62+l()*.32),M.v.y=-(.3+l()*.28),M.v.addScaledVector(n,(l()-.5)*.24),M.t=0,M.ph=l()*6.28,M.len=.2+l()*.22};for(let M=0;M<o;M++){let b={};f(b),b.t=l()*a,u.push(b)}let d=new nt,x=new I,_=new I,g=new I,p=new I,y=new I,v={id:i,mesh:h,update(M,b){let S=h.parent.worldToLocal(c.copy(b));for(let E=0;E<o;E++){let P=u[E];P.t+=M,(P.t>a||P.t<0)&&f(P);let w=P.t,A=Math.sin(Math.PI*Math.min(1,w/a));p.copy(P.p).addScaledVector(P.v,w),p.y-=.14*w*w,p.addScaledVector(n,Math.sin(w*2.4+P.ph)*.035),y.copy(P.v),y.y-=.28*w,y.addScaledVector(n,Math.cos(w*2.4+P.ph)*.084),x.copy(y).normalize(),g.copy(S).sub(p),g.addScaledVector(x,-g.dot(x)).normalize(),_.crossVectors(g,x),d.makeBasis(x.multiplyScalar(P.len*(.45+.55*A)),_.multiplyScalar(.034*A+.001),g),d.setPosition(p),h.setMatrixAt(E,d)}h.instanceMatrix.needsUpdate=!0}};return yr.push(v),v}function Ny(){_e.updateMatrixWorld(!0),_e.traverse(i=>{let e=i.userData.toggle;e&&i.isMesh&&(hr[e]=hr[e]||[]).push(i)});for(let[i,e]of Object.entries(hr)){let t=null;for(let s of e)for(let r of Mo){let o=s.parent;for(;o&&o!==r.g;)o=o.parent;o&&(t=r)}let n=new wa(m.hot);n.renderOrder=10,n.userData={toggle:i,hot:!0,wall:t,box:new Bn},_e.add(n),vo.push(n)}vl=!0}function Oy(i){if(i.index){let e=i.index.array;for(let t=0;t<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}return i.index.needsUpdate=!0,i}for(let e of Object.values(i.attributes)){let t=e.array,n=e.itemSize;for(let s=0;s<e.count;s+=3)for(let r=0;r<n;r++){let o=(s+1)*n+r,a=(s+2)*n+r,l=t[o];t[o]=t[a],t[a]=l}e.needsUpdate=!0}return i}function Fy(){let i=new Set([jh,Jh]),e=new Set(Mo.map(c=>c.g));_e.updateMatrixWorld(!0);let t=c=>{let h=c.parent;for(;h&&h!==_e;){if(h.userData.pivot||h===Je||e.has(h))return h;h=h.parent}return _e},n=new Map,s=[],r=new nt,o=new nt,a=(c,h,u,f,d,x)=>{let _=[c.uuid,h.uuid,u.castShadow,u.receiveShadow,d||"",!!f.index,Object.keys(f.attributes).sort().join()].join("|");n.has(_)||n.set(_,{owner:c,mat:h,cast:u.castShadow,recv:u.receiveShadow,tog:d,geos:[],src:[]});let g=n.get(_);g.geos.push(f),g.src.push({m:u,split:x})};_e.traverse(c=>{if(!c.isMesh||c.isInstancedMesh||c.isReflector||c.children.length||!c.visible||c.layers.mask!==1||c.userData.walk||c.userData.keep||[].concat(c.material).some(x=>x.transparent))return;let h=t(c),u=c.userData.toggle;if(u&&!h.userData.pivot)return;r.copy(h.matrixWorld).invert(),o.multiplyMatrices(r,c.matrixWorld);let f=o.determinant()<0,d=x=>(x.applyMatrix4(o),f?Oy(x):x);if(Array.isArray(c.material)){let x=c.geometry;if(!x.index||!x.groups.length)return;for(let _ of x.groups){let g=x.clone();g.clearGroups(),g.setIndex(Array.from(x.index.array.slice(_.start,_.start+_.count))),a(h,c.material[_.materialIndex],c,d(g),u,!0)}}else a(h,c.material,c,d(c.geometry.clone()),u,!1);s.push(c)});let l=new Set;for(let c of n.values()){if(c.geos.length===1&&!c.src[0].split){l.add(c.src[0].m),c.geos[0].dispose();continue}let h=c.geos.length===1?c.geos[0]:Ad(c.geos,!1);if(c.geos.length>1&&c.geos.forEach(f=>f.dispose()),!h){c.src.forEach(f=>l.add(f.m));continue}let u=new De(h,c.mat);u.castShadow=c.cast,u.receiveShadow=c.recv,c.tog&&(u.userData.toggle=c.tog),c.owner.add(u)}for(let c of s)l.has(c)||(c.parent.remove(c),i.has(c.geometry)||c.geometry.dispose())}function By(){Kt.remove(_e),_e.traverse(i=>{i.isReflector?i.dispose():i.geometry&&i.geometry!==jh&&i.geometry!==Jh&&i.geometry.dispose(),i.isLight&&i.dispose&&i.dispose()})}var ky={E:0,W:1,UP:2,DN:3,S:4,N:5};function Xt(i,e){let t=Array(6).fill(i);for(let[n,s]of Object.entries(e))t[ky[n]]=s;return t}function zy(i,e){let{W:t,D:n,H:s}=i,[r,o]=i.entry,[a,l]=i.slide,c=i.glzH,h=i.bath,u=i.balcony,f=h.x1,d=h.x1+h.wall,x=h.y0;T(-15,u.y0,0,x+h.wall,0,s,Xt(m.paint,{W:m.wallOut,UP:m.cap}),{parent:e.W}),T(-15,x+h.wall,0,n+15,0,s,Xt(m.bathWall,{W:m.wallOut,UP:m.cap}),{parent:e.W}),T(t,0,t+15,n+15,0,s,Xt(m.paint,{E:m.wallOut,UP:m.cap}),{parent:e.E}),T(l,u.y0,t+15,0,0,s,Xt(m.wallOut,{W:m.balcWall,S:m.paint,UP:m.cap}),{parent:e.E}),T(-15,n,f,n+15,0,s,Xt(m.wallOut,{N:m.bathWall,UP:m.cap}),{parent:e.S}),T(f,n,r,n+15,0,s,Xt(m.wallOut,{N:m.paint,UP:m.cap}),{parent:e.S}),T(r,n,o,n+15,215,s,Xt(m.wallOut,{N:m.paint,UP:m.cap}),{parent:e.S}),T(o,n,t+15,n+15,0,s,Xt(m.wallOut,{N:m.paint,UP:m.cap}),{parent:e.S}),T(-15,-12,a,0,0,s,Xt(m.wallOut,{S:m.paint,UP:m.cap}),{parent:e.N}),T(a,-12,l,0,c,s,Xt(m.wallOut,{S:m.paint,UP:m.cap,DN:m.frameBlk}),{parent:e.N});let[_,g]=i.bathDoor;T(0,x,d,x+h.wall,0,s,Xt(m.paint,{S:m.bathWall,UP:m.cap})),T(f,x+h.wall,d,_,0,s,Xt(m.paint,{W:m.bathWall,UP:m.cap})),T(f,g,d,n,0,s,Xt(m.paint,{W:m.bathWall,UP:m.cap})),T(f,_,d,g,216,s,Xt(m.paint,{W:m.bathWall,UP:m.cap,DN:m.black}));for(let k of i.cols||[])T(k[0],k[1],k[2],k[3],0,s,Xt(m[k[4]||"paint"],{UP:m.cap})),st.push({r:k.slice(0,4)});st.push({r:[0,x,d,x+h.wall]},{r:[f,x,d,_]},{r:[f,g,d,n]},{r:[-15,u.y0,0,n+15]},{r:[t,-12,t+15,n+15]},{r:[-15,n,t+15,n+15]},{r:[-15,-12,a,0]},{r:[l,u.y0,t+15,0]}),T(-15,u.y0-5,t+15,n+15,-24,-1.5,m.slab,{cast:!1});let p=i.floorSplit,y=(k,B,J,j,K,G)=>{let Q=new Vt((J-k)/100,(j-B)/100);Q.rotateX(-Math.PI/2),Ul(Q,Ce((k+J)/2),0,Ie((B+j)/2));let X=new De(Q,G);return X.position.set(Ce((k+J)/2),K/100,Ie((B+j)/2)),X.receiveShadow=!0,X.userData.walk=!0,_e.add(X),X};y(0,0,t,p,.1,m.floor),y(0,p,t,n,.1,m.tile),T(d,p-.4,t,p+.4,0,.35,m.brass,{cast:!1});{let k=new Vt(60,60);k.rotateX(-Math.PI/2);let B=new De(k,new io({opacity:.16}));B.position.y=-.242,B.receiveShadow=!0,_e.add(B)}Je=new on,_e.add(Je);let v={parent:Je,cast:!1},M=i.cove;T(0,0,t,p,s-1,s+1,m.ceiling,v),T(0,0,M[0],p,275,s-1,m.ceiling,v);let[b,S]=i.ceilSlot;T(M[1],0,b,p,275,s-1,Xt(m.ceiling,{E:m.black}),v),T(S,0,t,p,275,s-1,Xt(m.ceiling,{W:m.black}),v),T(b,0,S,p,280,s-1,m.black,v),T(b+.7,1,S-.7,p-1,279.4,280,m.ledAcc,v),T(M[0],16,M[1],19,275,s-1,m.ceiling,v),T(a,0,t,16,s-1.4,s-1,m.black,v),T(0,p,t,n,260,s-1,m.ceiling,v);for(let k of[M[0]-1.6,M[1]+.1])T(k,19,k+1.5,p-1,273.6,275,m.ledAcc,v);qt(p-30,70,M[0]+36,s-1.6,p/2+8,0,0,Je).rotation.set(Math.PI/2,0,Math.PI/2),qt(p-30,70,M[1]-36,s-1.6,p/2+8,0,0,Je).rotation.set(Math.PI/2,0,-Math.PI/2),T(-15,i.balcony.y0-5,t+15,n+15,s+2,s+24,m.cap).layers.set(1),T(0,p,.8,x,0,6,m.base,{cast:!1,parent:e.W}),T(t-.8,i.tvWall[1],t,i.kitchen[0],0,6,m.base,{cast:!1,parent:e.E}),T(d,n-.8,r,n,0,6,m.base,{cast:!1,parent:e.S});let E={parent:e.S};T(r-5,n,r,n+1.6,0,219,m.frameBlk,E),T(o,n,o+5,n+1.6,0,219,m.frameBlk,E),T(r-5,n,o+5,n+1.6,214,219,m.frameBlk,E);let P=o-9,w=[T(r+.3,n+1.2,o-.3,n+5.2,0,213.5,m.door,E),T(P-3,n-1.6,P+3,n+1.2,92,118,m.black,{r:1,parent:e.S}),T(P-15,n-4.4,P+2,n-2.2,103,106,m.black,{r:1,parent:e.S}),T(P-2,n-2.2,P+2,n-1.6,103.5,105.5,m.black,E),T(P-3.2,n+5.2,P+3.2,n+7.4,94,126,m.black,{r:1,parent:e.S}),T(P-15,n+8.6,P+2,n+10.6,103,106,m.black,{r:1,parent:e.S})],A=new De(new Vt(.044,.07),m.lockScr);A.position.set(Ce(P),1.15,Ie(n+7.45)),e.S.add(A),w.push(A);let N=new on;N.position.set(Ce(r+.3),0,Ie(n+1.2)),N.userData.pivot=!0,e.S.add(N),w.forEach(k=>N.attach(k)),gt("door",k=>{N.rotation.y=k*Math.PI*.5},1.1,w),st.push({r:[r,n-(o-r),r+6,n],when:()=>qe.door.v>.1});let z=i.switchY,V=T(d+2.4,z-5.5,d+3.2,z+5.5,115,127,m.white,{cast:!1}),D=T(d+3.2,z-3.8,d+4.1,z+3.8,116.6,125.4,m.white,{cast:!1,r:.4}),O=tn(d+3.6,121,z,[D]);gt("lights",k=>{O.rotation.z=.2*(k-.5),nu()},2.6,[V,D])}function tp(i,e){let[t,n]=i.slide,s=i.glzH,r={parent:e.N},o=(t+n)/2;T(t,-11,n,0,0,2.5,m.frameBlk,r),T(t,-11,n,0,s-4,s,m.frameBlk,r),T(t,-11,t+4,0,0,s,m.frameBlk,r),T(n-4,-11,n,0,0,s,m.frameBlk,r);let a=(_,g,p,y)=>{let v={parent:y};return[T(_,p,g,p+3.4,2.5,7,m.frameBlk,v),T(_,p,g,p+3.4,s-9,s-4,m.frameBlk,v),T(_,p,_+4,p+3.4,2.5,s-4,m.frameBlk,v),T(g-4,p,g,p+3.4,2.5,s-4,m.frameBlk,v),T(_+4,p+1.4,g-4,p+2,7,s-9,m.glass,{cast:!1,parent:y})]};a(t+4,o+3,-9,e.N);let l=new on;l.userData.pivot=!0,e.N.add(l);let c=a(o-3,n-4,-4.6,l);c.push(T(o+2,-1.2,o+4.5,.6,85,145,m.frameBlk,{parent:l}));let h=(n-t)/2-8;gt("slide",_=>{l.position.x=-_*h/100},.9,c),st.push({r:[t,-11,o+3,0]},{r:[o-3,-11,n,0],when:()=>!(qe.slide&&qe.slide.v>.85)}),T(t+4,-11,n-4,0,0,.6,m.frameBlk,{cast:!1,parent:e.N});let u=9,[f,d]=i.curtainX||[t,i.W];Ml(f+2,f+62,u-3,1.5,274,2.2,11,m.sheer,{cast:!1,parent:e.N});let x=[];for(let[_,g,p]of[[f+1,o+2,26],[d-2,o-2,34]]){let y=Math.abs(g-_),v=Ml(Math.min(_,g),Math.max(_,g),u+2,1.5,274,4.4,16,m.blackout,r);v.geometry.translate(_<g?y/200:-y/200,0,0),v.position.x=Ce(_),x.push([v,p/y])}gt("curtain",_=>{x.forEach(([g,p])=>{g.scale.x=p+(1-p)*_})},.7,x.map(_=>_[0])),T(f,7.6,d-.5,10.4,274,275,m.frameBlk,{cast:!1,parent:Je})}function np(i,e){let t=i.balcony,[n,s]=i.slide,r=t.y0,o=i.H,[a]=i.acLedge,l=T(n,r,s,-11,-2.4,-1,m.balcFloor,{cast:!1});l.userData.walk=!0,T(a,r,n,-12,-2.4,-1,m.balcFloor,{cast:!1}),T(n,r,s,r+1.2,-1,106,m.rail,{cast:!1}),T(n,r-1,s,r+2.2,-1,6,m.frameBlk),T(n,r-.6,s,r+1.8,106,110,m.frameBlk,{r:.8}),st.push({r:[n,r-4,s,r+2]});let c={parent:Je,cast:!1};T(a,r,s,-12,o-10,o,m.ceiling,c),T(n+8,(r-12)/2-1,s-8,(r-12)/2+1,o-10.6,o-10,m.ledAcc,c);let[h,u,f,d]=i.coffee;T(h,u,f,d,28,32,m.woodDark,{r:1.5});for(let[V,D]of[[h+4,u+4],[f-6,u+4],[h+4,d-6],[f-6,d-6]])T(V,D,V+2,D+2,0,28,m.black);T(h+6,u+8,h+34,u+30,32,33.4,m.black,{r:.6}),Be(h+14,u+16,3.6,3,33.4,41,m.ceramic),Be(h+26,u+22,3.6,3,33.4,41,m.ceramic),st.push({r:i.coffee});let x=[f-12,d-13],_=[Be(x[0],x[1],4.6,5,32,33.4,m.black),Be(x[0],x[1],.8,.8,33.4,47,m.black),Wi(x[0],x[1],46,11,8,11,m.balcLamp,{half:!0,seg:28})];Ot||(ur=new Fi(16761469,0,0,2),ur.position.set(Ce(x[0]),.44,Ie(x[1])),_e.add(ur)),qt(80,80,x[0],33.6,x[1],-Math.PI/2,0,_e,m.glowBalc),gt("balclamp",V=>{dp()},2.4,_);let[g,p]=i.tree;Be(g,p,20,17,0,46,m.pot),Be(g,p,18.5,18.5,44,45,m.soil,{cast:!1}),Fe([g,p,44],[g-3,p+2,112],2.2,m.twig),Fe([g-3,p+2,108],[g+8,p-6,150],1.3,m.twig),Fe([g-3,p+2,104],[g-12,p+6,140],1.2,m.twig);{let V=Qt(5);for(let[D,O,k,B]of[[g-3,p+2,122,19],[g+9,p-6,146,16],[g-13,p+7,138,15],[g-2,p,166,15],[g+5,p+9,128,13]])for(let J=0;J<80;J++){let j=V()*2-1,K=V()*6.283,G=Math.sqrt(1-j*j),Q=.55+.45*Math.cbrt(V()),X=new De(Jh,J%3?m.olive:m.olive2);X.scale.set(.034,.003,.0085),X.position.set(Ce(D+Math.cos(K)*G*B*Q),(k+j*B*.75*Q)/100,Ie(O+Math.sin(K)*G*B*Q)),X.rotation.set(V()*6.28,V()*6.28,V()*6.28),X.castShadow=!0,X.receiveShadow=!0,_e.add(X)}}st.push({r:[g-21,p-21,g+21,p+21]});let y=i.condenser,v=[(y[1]+y[3])/2,31];T(y[0],y[1],y[2],y[3],3,58,m.white,{r:1.2});for(let V of[y[1]+6,y[3]-10])T(y[0]+4,V,y[2]-4,V+4,-1,3,m.black);let M=new De(new Hn(.19,32),m.black);M.position.set(Ce(y[2]+.2),v[1]/100,Ie(v[0]-8)),M.rotation.y=Math.PI/2,_e.add(M);for(let V=0;V<6;V++){let D=new De(new Oa(.04+V*.03,.0025,4,40),m.metal);D.position.set(Ce(y[2]+.6),v[1]/100,Ie(v[0]-8)),D.rotation.y=Math.PI/2,_e.add(D)}T(y[2]-.3,y[3]-13,y[2]+.3,y[3]-3,8,50,m.frameBlk,{cast:!1}),Fe([y[0]+8,y[3],20],[y[0]+8,-12,20],.9,m.white),Fe([y[0]+14,y[3],16],[y[0]+14,-12,16],.7,m.white);let[b,S,E,P,w]=i.cage,A=3;T(b,S,E,P,-1,.6,m.cageFrame,{cast:!1});for(let[V,D]of[[b,S],[E-A,S],[b,P-A],[E-A,P-A]])T(V,D,V+A,D+A,.6,w,m.cageFrame);for(let V of[.6,w/2-1.5,w-A])T(b+A,S,E-A,S+A,V,V+A,m.cageFrame),T(b+A,P-A,E-A,P,V,V+A,m.cageFrame),T(b,S+A,b+A,P-A,V,V+A,m.cageFrame),T(E-A,S+A,E,P-A,V,V+A,m.cageFrame);T(b+A,(S+P)/2-1.5,E-A,(S+P)/2+1.5,w-A,w,m.cageFrame),T(b+A,S+1.2,E-A,S+1.6,.6,w-A,m.cageMesh),T(b+A,P-1.6,E-A,P-1.2,.6,w-A,m.cageMesh),T(b+A,S+A,E-A,P-A,w-1.6,w-1.2,m.cageMesh);let N=(P-S-2*A)/2,z=[];for(let[V,D]of[[0,S+A],[1,S+A+N]]){let O=D+N,k=[T(E-1.8,D+.3,E-1.4,O-.3,A,w-A,m.cageMesh),T(E-2.2,D+.3,E-1,D+2.3,A,w-A,m.cageFrame),T(E-2.2,O-2.3,E-1,O-.3,A,w-A,m.cageFrame),T(E-2.2,D+2.3,E-1,O-2.3,A,A+2,m.cageFrame),T(E-2.2,D+2.3,E-1,O-2.3,w-A-2,w-A,m.cageFrame),T(E-1,V?D+3:O-5,E+.6,V?D+5:O-3,w/2-6,w/2+6,m.black)];z.push([tn(E-1.6,0,V?O-.3:D+.3,k),V?-1:1,k])}gt("cage",V=>z.forEach(([D,O])=>{D.rotation.y=O*1.6*V}),1,z.flatMap(V=>V[2])),st.push({r:[b-15,S,E,P]},{r:[E,S,E+N,P],when:()=>qe.cage&&qe.cage.v>.1})}var Hh=null;function Hy(i,e){let[t,n]=i.ac,s=i.D,r=s-21,o=225,a=253,l={parent:e.S},c=T(t,r,n,s,o,a,m.white,{r:4,parent:e.S});T(t+4,r-.4,n-4,r,a-7,a-4,m.black,{cast:!1,parent:e.S}),T(t+5,r+1.5,n-5,r+8,o-.6,o+.2,m.black,{cast:!1,parent:e.S});let h=T(t+5.5,r+.4,n-5.5,r+7.5,o-1.1,o-.4,m.white,{cast:!1,parent:e.S}),u=tn((t+n)/2,o-.7,r+7.5,[h],e.S),f=T(n-7.4,r-.25,n-6,r,a-9,a-7.6,m.acLed,{cast:!1,parent:e.S}),d=new De(new Vt(.075,.033),m.acDisp);d.rotation.y=Math.PI,d.position.set(Ce(n-16),(a-12)/100,Ie(r-.3)),e.S.add(d),Hh=ep("ac",new I(Ce((t+n)/2),(o-2)/100,Ie(r-2)),new I(0,0,-1),new I(1,0,0),(n-t-16)/100),gt("ac",x=>{u.rotation.x=-.8*x,m.acDisp.opacity=x,m.acLed.emissiveIntensity=1.6*x,m.wind.opacity=.5*x,Hh.mesh.visible=x>.02},1.2,[c,h,f,d])}function ip(i,e){let[t,n]=i.backdrop,s={parent:e.W},r=i.bandTop,o=i.fluteTop,a=274.6,l=Math.max(1,Math.round((n-t)/125)),c=(n-t)/l;for(let y=0;y<l;y++)T(0,t+y*c+(y?.25:0),4,t+(y+1)*c-(y<l-1?.25:0),.5,r,m.charcoal,s);T(0,t,3.4,n,0,r,m.slatBack,{cast:!1,parent:e.W}),T(1.4,t+.5,3,n-.5,r,r+.5,m.ledAcc,{cast:!1,parent:e.W}),qt(n-t-2,80,2.75,r+40,(t+n)/2,0,0,e.W,m.glowUp).rotation.set(0,Math.PI/2,Math.PI),T(0,t,1,n,r,i.fluteTop,m.slatBack,{cast:!1,parent:e.W}),T(1,t,2.6,n,r,o,m.oakFlute,s);let[h,u]=i.seams,[f,d]=i.niche,[x,_]=i.nicheH,g=5;T(0,t,g,h-.25,o,a,m.oakH,s),T(0,u+.25,g,n,o,a,m.oakH,s),T(0,h+.25,g,u-.25,o,x,m.oakH,s),T(0,h+.25,g,u-.25,_,a,m.oakH,s),T(0,h+.25,g,f,x,_,m.oakH,s),T(0,d,g,u-.25,x,_,m.oakH,s),T(0,f,1,d,x,_,m.oakH,s);for(let y of[h,u])T(0,y-.25,4.4,y+.25,o,a,m.slatBack,{cast:!1,parent:e.W});{let[y,v,M,b]=i.nightstands[0],S=50,E=1.6;for(let[P,w]of[[y,v],[M-E,v],[y,b-E],[M-E,b-E]])T(P,w,P+E,w+E,0,S,m.frameBlk);for(let P of[0,S-E])T(y+E,v,M-E,v+E,P,P+E,m.frameBlk),T(y+E,b-E,M-E,b,P,P+E,m.frameBlk),T(y,v+E,y+E,b-E,P,P+E,m.frameBlk),T(M-E,v+E,M,b-E,P,P+E,m.frameBlk);T(y+E,v+E,M-E,b-E,S-E-.4,S-.3,m.wood),T(y+E,v+E,M-.4,b-E,S-E-14,S-E-.4,m.wood),T(M-.5,v+E+6,M-.3,b-E-6,S-E-2.6,S-E-1.8,m.black,{cast:!1}),T(y+E,v+E,M-E,b-E,8,9.6,m.wood),T(y+6,v+6,y+26,v+30,9.6,13,m.book3),T(y+7,v+7,y+25,v+29,13,15.5,m.book2),T(y+6,v+8,y+24,v+34,S-.3,S+1.8,m.book1),Be(y+20,b-12,3.4,4.2,S-.3,S+11,m.ceramic),st.push({r:[y,v,M,b]})}{let[y,v,M,b]=i.nightstands[1],S=52;T(y+4,v+4,M-4,b-4,0,6,m.plinth,{cast:!1}),T(y,v,M,b,6,S,m.bedFrame),T(M,v+1.5,M+.2,b-1.5,37.6,38.2,m.black,{cast:!1}),T(y+8,v+6,y+30,v+22,S,S+2.4,m.book3),T(y+9,v+7,y+29,v+21,S+2.4,S+4.4,m.book1);let E=y+18,P=b-13;Be(E,P,4.6,5,S,S+13,m.carafe,{cast:!1}),Be(E,P,1.6,2.6,S+13,S+21,m.carafe,{cast:!1}),Be(E+9,P+3,3,2.6,S,S+8,m.carafe,{cast:!1}),st.push({r:[y,v,M,b]})}let p=new Hn(.03,20);for(let y of i.wallWash){let v=new De(p,m.led);v.rotation.x=Math.PI/2,v.position.set(Ce(i.cove[0]/2),2.748,Ie(y)),Je.add(v)}}function sp(i){let[e,t,n,s]=i.bed,r=i.mattress,o=i.headboard;T(o[0],o[1],o[2],o[3],o[4],o[5],m.bedFrame,{r:.8}),T(e+12,t+12,n-12,s-12,0,8,m.plinth,{cast:!1}),T(e,t,n,s,8,22,m.bedFrame,{r:1}),T(r[0],r[1],r[2],r[3],22,44,m.sheet,{r:4});let a=r[0]+48,l=(r[1]+r[3])/2;T(a,r[1]-3,r[2]+3,r[3]+3,40,49,m.duvet,{r:4}),T(a-2,r[1]-3.3,a+20,r[3]+3.3,47,51.5,m.duvet,{r:2}),T(a,r[1]-4,r[2]+3,r[1]-2,24,47,m.duvet,{r:1}),T(a,r[3]+2,r[2]+3,r[3]+4,24,47,m.duvet,{r:1}),T(r[2]+2,r[1]-3,r[2]+4,r[3]+3,24,47,m.duvet,{r:1});let c=(u,f,d,x,_,g,p,y,v=6)=>{let M=T(u,d,f,x,_,g,p,{r:v,seg:5});return M.rotation.z=y,M},h=r[0];c(h+1,h+15,r[1]+4,l-2,43,93,m.pillow,.22),c(h+1,h+15,l+2,r[3]-4,43,93,m.pillow,.22),c(h+15,h+29,r[1]+9,l-5,43,83,m.pillow2,.3,7),c(h+15,h+29,l+5,r[3]-9,43,83,m.pillow2,.3,7),c(h+29,h+40,l-24,l+24,45,74,m.throwM,.34,5),st.push({r:[o[0],Math.min(t,o[1]),n,Math.max(s,o[3])]})}function rp(i,e){let t=i.W,[n,s]=i.tvWall,r={parent:e.E},o=i.sideW,a=275,l=14,c=n+o,h=s-o,u=c+2,f=h-2,d=2.6;for(let[ae,Pe]of[[n,c],[h,s]])T(t-4,ae,t,Pe,l,a,m.tvSide,r);T(t-1,c,t,h,l,a,m.slatBack,{cast:!1,parent:e.E}),T(t-4.8,u,t-1,u+d,l,a,m.bronze,r),T(t-4.8,f-d,t-1,f,l,a,m.bronze,r),T(t-3.4,u+d,t-1,f-d,l,a,m.perf,r),qt(s-n-2,230,t-4.9,a-115,(n+s)/2,0,-Math.PI/2,e.E,m.glowWash);let x=(n+s)/2,_=i.tv[0],g=_*9/16,p=i.tv[1],y=T(t-7.4,x-_/2,t-3.4,x+_/2,p,p+g,m.black,{r:.6,parent:e.E});T(t-7.65,x-_/2+1,t-7.4,x+_/2-1,p+1,p+g-1,m.screen,{cast:!1,parent:e.E});let v=new De(new Vt((_-2)/100,(g-2)/100),m.tvScreen);v.rotation.y=-Math.PI/2,v.position.set(Ce(t-7.7),(p+g/2)/100,Ie(x)),e.E.add(v),qt(_+70,g+70,t-3.3,p+g/2,x,0,-Math.PI/2,e.E,m.glowTV),gt("tv",ae=>{m.tvScreen.emissiveIntensity=1.05*ae,m.glowTV.opacity=.38*ae},1.8,[v,y]);let M=i.tvc,[b,S]=M.x,E=m.consoleLt,[P,w]=M.modA,A=M.modAH;T(b+4,P+2,S,w-2,0,6,m.plinth,{cast:!1}),T(b+1.8,P,S,P+1.6,6,A,E),T(b+1.8,w-1.6,S,w,6,A,E),T(S-1.6,P,S,w,6,A,E),T(b+1.8,P,S,w,6,7.6,E),T(b+1.8,P,S,w,A-1.6,A,E),T(b+3,P+1.6,S-1.6,w-1.6,25.4,27,E),T(b+8,P+10,b+30,P+40,7.6,12,m.black,{r:.6}),T(b+7.9,P+14,b+8,P+16,9.4,10.2,m.acLed,{cast:!1}),T(b+6,w-40,b+34,w-8,7.6,21,m.pot,{r:2});for(let ae=0;ae<6;ae++)T(b+10,P+8+ae*3.4,b+32,P+11+ae*3.4,27,42+ae%3*1.5,m[["book1","book2","book3"][ae%3]]);Be(b+20,w-24,6,5,27,39,m.ceramic);let N=[];for(let[ae,Pe,Y]of[[0,P,(P+w)/2],[1,(P+w)/2,w]]){let ge=T(b,Pe+.2,b+1.8,Y-.2,6.3,A-.3,E);N.push([tn(b,0,ae?Y-.2:Pe+.2,[ge]),ae?1:-1,ge])}gt("consoleA",ae=>N.forEach(([Pe,Y])=>{Pe.rotation.y=Y*1.6*ae}),1,N.map(ae=>ae[2])),st.push({r:[b-52,P,b,w],when:()=>qe.consoleA&&qe.consoleA.v>.1});let z=M.lamp,V=[Be(z[0],z[1],5,5.5,A,A+1.6,m.black),Be(z[0],z[1],.6,.6,A+1.6,A+16,m.black),Be(z[0],z[1],9.5,10.5,A+14,A+31,m.lampWhite,{seg:32})];qt(70,90,t-4.2,A+22,z[1],0,-Math.PI/2,e.E,m.glowLamp),Ot||(fr=new Fi(16761469,0,0,2),fr.position.set(Ce(z[0]),(A+24)/100,Ie(z[1])),_e.add(fr)),gt("tvlamp",()=>pp(),2.4,V);let[D,O]=M.base,[k,B]=M.baseH;T(b,D,S,O,k,B,E);let[J,j]=M.books;for(let ae=0;ae<4;ae++)T(b+8,J+2,b+30,J+26,B+ae*2.6,B+ae*2.6+2.4,m[["book3","book2","book1","book3"][ae]]);for(let ae=0;ae<5;ae++){let Pe=T(b+10,J+32+ae*3.2,b+32,J+34.8+ae*3.2,B,B+22+ae%3*2,m[["book1","book2","book3"][ae%3]]);ae===4&&(Pe.rotation.x=-.25)}Be(b+22,j-6,4,5,B,B+9,m.black);let[K,G]=M.modB,Q=M.modBH,X=M.drawers;T(b+1.8,K,S,G,B,B+1.6,E),T(b+1.8,K,S,K+1.6,B,Q,E),T(b+1.8,G-1.6,S,G,B,Q,E),T(S-1.6,K,S,G,B,Q,E),T(b-.5,K,S,G,Q-1.6,Q,E);for(let ae=1;ae<X.length-1;ae++)T(b+1.8,X[ae]-.8,S,X[ae]+.8,B,Q-1.6,E);let ne=[],ve=[];for(let ae=0;ae<X.length-1;ae++){let Pe=X[ae]+.25,Y=X[ae+1]-.25,ge=T(b,Pe,b+1.8,Y,B+.3,Q-3.4,E);T(b+.6,Pe,b+1.8,Y,Q-3.4,Q-1.6,m.slatBack,{cast:!1});let U=Pe+2,re=Y-2,Z=(U+re)/2,se=[ge,T(b+1.8,U,S-6,re,B+2,B+3,m.drawerIn),T(b+1.8,U,S-6,U+1.2,B+3,Q-5,m.drawerIn),T(b+1.8,re-1.2,S-6,re,B+3,Q-5,m.drawerIn),T(S-7.4,U,S-6,re,B+3,Q-5,m.drawerIn)];ae===0?se.push(T(b+8,Z-34,b+30,Z-16,B+3,B+5,m.book2),T(b+9,Z-33,b+29,Z-17,B+5,B+6.6,m.book1),T(b+10,Z+2,b+26,Z+20,B+3,B+6,m.black,{r:1})):ae===1?se.push(T(b+8,Z-26,b+24,Z-8,B+3,B+6,m.black,{r:1.2}),T(b+8,Z+2,b+12,Z+18,B+3,B+4.6,m.black,{r:.8}),T(b+16,Z+2,b+20,Z+18,B+3,B+4.6,m.black,{r:.8}),T(b+8,Z+24,b+30,Z+42,B+3,B+8,m.book3)):se.push(T(b+8,U+4,b+30,Z,B+3,B+7,m.garm[2],{r:1}),Be(b+20,Z+14,4,4,B+3,B+10,m.ceramic));let W=tn(0,0,0,se);ne.push([W,W.position.x]),ve.push(ge)}gt("drawers",ae=>ne.forEach(([Pe,Y])=>{Pe.position.x=Y-.3*ae}),1.2,ve),qt(S-b+20,G-K+10,(b+S)/2,.45,(K+G)/2,-Math.PI/2,0,_e,m.glowSoft);let[we,xe]=M.vase;Be(we,xe,4.6,6.2,Q,Q+14,m.black,{seg:24}),Be(we,xe,3,4.6,Q+14,Q+22,m.black,{seg:24}),Be(we,xe,2.4,3,Q+22,Q+25,m.black,{seg:24});{let ae=Qt(33);for(let Pe=0;Pe<7;Pe++){let Y=[we+(ae()-.5)*2,xe+(ae()-.5)*2,Q+23],ge=ae()*6.28,U=.25+ae()*.45;for(let re=0;re<4;re++){let Z=9+ae()*8,se=[Y[0]+Math.cos(ge+re*.5)*Z*U,Y[1]+Math.sin(ge+re*.5)*Z*U,Y[2]+Z*(1-U*.5)];if(Fe(Y,se,Math.max(.18,.5-re*.1),m.twig,{seg:5,cast:!1}),ae()<.6){let W=[se[0]+(ae()-.5)*9,se[1]+(ae()-.5)*9,se[2]+3+ae()*6];Fe(se,W,.18,m.twig,{seg:4,cast:!1})}Y=se}}}st.push({r:[b,P,S,w]},{r:[b,D,S,O]},{r:[b-30,X[0],b,X[X.length-1]],when:()=>qe.drawers&&qe.drawers.v>.1}),i.shelving&&Vy(i,e)}function Vy(i,e){let t=i.shelving,[n,s]=t.x,[r,o]=t.y,[a,l]=t.column,c=i.tvc.modBH,h=t.top,u=m.shelfWood,f=Qt(47);T(s-2,r,s,a,c,h,u,{parent:e.E}),T(n,r,s-2,r+1.8,c,h,u),T(n,r,s-2,a,h-2,h,u);let[[d,x],[_,g]]=t.bays;T(n,x,s-2,_,c,h-2,u),T(n+2,r+1.8,s-2,a,c,c+1.8,u);let p=11;T(n+p,a,s,l,0,260,u),T(n,a,n+p,l-p,0,260,u);{let v=new De(new Oi(p/100,p/100,2.6,28,1,!1,Math.PI*1.5,Math.PI/2),u);v.position.set(Ce(n+p),1.3,Ie(l-p)),v.castShadow=v.receiveShadow=!0,_e.add(v)}T(n+.6,a-.3,n+2,l-p,0,260,m.slatBack,{cast:!1});let y=(v,M,b,S)=>{let E=(v+M)/2,P=(n+s)/2-2;switch(S%6){case 0:T(P-10,v+3,P+8,M-4,b,b+2.2,m.book3),T(P-9,v+4,P+7,M-5,b+2.2,b+4.2,m.book2),Wi(P,E,b+9.5,4.2,5.2,4.2,m.bronze);break;case 1:Be(P,E,8.5,5,b,b+4.5,m.black,{seg:28});break;case 2:Be(P,E,3.4,5.4,b,b+16,m.ceramic),Be(P,E,1.8,2.6,b+16,b+21,m.ceramic);break;case 3:T(P-3,E-6,P+3,E+6,b,b+2,m.black),T(P-1.5,E-1.5,P+1.5,E+1.5,b+2,b+16,m.bronze),Wi(P,E,b+20,4.5,6,3,m.bronze);break;case 4:for(let w=0;w<5;w++)T(P-8,v+3+w*3,P+10,v+5.6+w*3,b,b+19+f()*6,m[["book1","book2","book3"][w%3]]);break;default:Be(P-2,E,4.2,4.6,b,b+12,m.black),Wi(P-2,E,b+15,3.4,4.6,3.4,m.black);break}};t.levels.forEach((v,M)=>{let[b,S]=t.bays[M];v.forEach((E,P)=>{T(n+1,b,s-2,S,E-1.8,E,u),T(n+3,b+1,n+4.2,S-1,E-2.4,E-1.8,m.ledWard,{cast:!1})}),[c+1.8,...v].forEach((E,P)=>{E+30<h&&y(b,S,E,P+M*3)})}),qt(a-r-4,h-c-10,s-2.1,(h+c)/2,(r+a)/2,0,-Math.PI/2,_e),st.push({r:[n,r,s,l]})}function Fd(i,e,t,n,s,r){let a=[T(i,t+.6,e,t+2.2,n,s,m.charcoal),T(i,t,i+6,t+.6,n,s,m.charcoal),T(e-6,t,e,t+.6,n,s,m.charcoal),T(i+6,t,e-6,t+.6,n,n+6,m.charcoal),T(i+6,t,e-6,t+.6,s-6,s,m.charcoal)];return r&&a.push(T(i+6,t,e-6,t+.6,r-2.5,r+2.5,m.charcoal)),a}var pl=[];function op(i){let[e,t,n,s]=i.storage,r=260,o=1.8,a=95,l=Qt(91),c=i.storeBays;T(e,s-1,n,s,0,r,m.woodDark,{cast:!1}),T(n-o,t+2.2,n,s,0,r,m.charcoal),T(e,t+2.2,e+o,s,0,r,m.charcoal),T(e,t+2.2,n,s,r-2,r,m.charcoal);let h=[];for(let[f,d,x]of c)if(f==="shaker"){T(d,t+2.2,x,s-1,0,2,m.woodDark,{cast:!1});for(let[p,y]of[40,80,120,160,200,238].entries()){T(d+.1,t+3,x-.1,s-1,y-1.6,y,m.woodDark);let v=d+3;for(;v<x-8;){let M=Math.min(x-3-v,12+l()*8);T(v,t+8,v+M,s-6,y,y+8+l()*(p===5?10:18),p===5?m.pot:m.garm[l()*m.garm.length|0],{cast:!1}),v+=M+1.2}}let _=d<=e+.5,g=Fd(d+.2,x-.2,t,.4,r-.4,a);g.push(T(_?x-2.4:d+.4,t-2,_?x-.4:d+2.4,t,a+6,a+34,m.black,{r:.4})),h.push([tn(_?d+.2:x-.2,0,t,g),_?1:-1,g]),st.push({r:[d,t-(x-d),x,t],when:()=>qe.wardrobe&&qe.wardrobe.v>.1})}else if(f==="column"){Fd(d+.2,x-.2,t,.4,a-.2,0),T(d+.2,t,x-.2,t+2.2,a+.2,r-.4,m.wood);let _=(d+x)/2;if(T(_-.7,t-1.6,_+.7,t,112,190,m.lampWhite,{cast:!1}),T(_-1.4,t-2.6,_+1.4,t,136,144,m.black,{r:.4}),qt(x-d-4,150,_,151,t-.1,0,Math.PI,_e,m.glowSoft),!Ot){let g=new Fi(16761469,0,0,2);g.position.set(Ce(_),1.55,Ie(t-20)),_e.add(g),Kh.push(g)}}else{T(d,t+2.2,d+1.8,s-1,0,r-2,m.woodDark),T(x-1.8,t+2.2,x,s-1,0,r-2,m.woodDark),T(d,t+2.2,x,s-1,0,8,m.woodDark);let _=d+1.8,g=x-1.8,p=[8,48,88,128,168,208];for(let[v,M]of p.entries()){v&&T(_,t+4,g,s-1,M-1.6,M,m.woodDark),T(_+1,t+4,g-1,t+5,M+37,M+38,m.ledWard,{cast:!1});let b=v%3;if(b===0){let S=_+2;for(;S<g-6;){let E=2.2+l()*1.6;T(S,t+18,S+E,s-12,M,M+20+l()*8,m[["book1","book2","book3"][l()*3|0]]),S+=E+.3}}else if(b===1)Be((_+g)/2-8,(t+s)/2,5,3.6,M,M+22,m.ceramic),T(g-18,t+14,g-4,s-14,M,M+4,m.book3),Wi(g-11,(t+s)/2,M+9,5,5,5,m.bronze);else{for(let S=0;S<4;S++)T(_+2,t+16,g-8,s-12,M+S*2.4,M+S*2.4+2.2,m[["book3","book1","book2","book3"][S]]);Be(g-8,(t+s)/2,3,3,M+9.6,M+26,m.black)}}qt(g-_-2,r-30,(_+g)/2,(r-10)/2,s-1.2,0,Math.PI,_e);let y=(d+x)/2;for(let[v,M,b]of[[0,d+.2,y-.15],[1,y+.15,x-.2]]){let E=t-.2,P=E+1.8,w=.4,A=r-.4,N=[T(M,E,M+1.6,P,w,A,m.frameBlk),T(b-1.6,E,b,P,w,A,m.frameBlk),T(M+1.6,E,b-1.6,P,w,w+1.6,m.frameBlk),T(M+1.6,E,b-1.6,P,A-1.6,A,m.frameBlk),T(M+1.6,E+.6,b-1.6,E+1.2,w+1.6,A-1.6,m.smoked,{cast:!1}),T(v?M+1.6:b-2.6,E-2,v?M+2.6:b-1.6,E,100,150,m.black)],z=v?b:M;pl.push([tn(z,0,E,N),v?-1:1,N])}}gt("storage",f=>{pl.forEach(([d,x])=>{d.rotation.y=x*1.75*f})},.9,pl.flatMap(f=>f[2])),h.length&&gt("wardrobe",f=>{h.forEach(([d,x])=>{d.rotation.y=x*1.6*f})},.9,h.flatMap(f=>f[2]));let u=c.find(f=>f[0]==="glass");st.push({r:i.storage},{r:[u[1]-6,t-26,u[2]+6,t],when:()=>qe.storage&&qe.storage.v>.1})}function ap(i,e){let t=i.W,[n,s]=i.kitchen,r=i.kitX,o=88,a=Qt(77),[l,c]=i.sink,[h,u]=i.hob;T(r+5,n,t-2,s,0,10,m.plinth,{cast:!1});let f={cast:!1};T(r+2,n,t-2,s,10,11.8,m.woodDark,f),T(t-4,n,t-2,s,11.8,o-3,m.woodDark,f),T(r+2,n,t-4,s,o-4.8,o-3,m.woodDark,f);let d=i.kitCuts||[n,l-4,c+4,h-20,u+20,s],x=i.kitDrawer??3,_=i.kitSink??1;d.forEach((Y,ge)=>{let U=ge===0?Y:ge===d.length-1?Y-1.8:Y-.9;T(r+2,U,t-4,U+1.8,11.8,o-4.8,m.woodDark,f)});let g=[],p=[],y=[];for(let Y=0;Y<d.length-1;Y++){let ge=d[Y]+.2,U=d[Y+1]-.2,re=d[Y]+.9,Z=d[Y+1]-.9,se=(re+Z)/2;if(Y===x){for(let[de,[C,R]]of[[10.4,36],[36.4,61],[61.4,o-6.4]].entries()){let q=T(r,ge,r+2,U,C,R,m.wood),oe=C+2,he=R-C-6,ce=[q,T(r+2,re+1,t-8,Z-1,oe,oe+1.2,m.drawerIn),T(r+2,re+1,t-8,re+2.2,oe,oe+he,m.drawerIn),T(r+2,Z-2.2,t-8,Z-1,oe,oe+he,m.drawerIn),T(t-9.2,re+1,t-8,Z-1,oe,oe+he,m.drawerIn)];if(de===2)for(let be=0;be<5;be++)ce.push(T(r+8+be*7,re+4,r+13+be*7,Z-4,oe+1.2,oe+2.4,be%2?m.steel:m.black));else de===1?ce.push(Be(r+24,se,11,10,oe+1.2,oe+12,m.black),Be(r+24,se,10.4,10.4,oe+12,oe+12.4,m.steel)):ce.push(Be(r+20,se-6,10,9,oe+1.2,oe+16,m.steel),Be(r+38,se+8,7,7,oe+1.2,oe+12,m.black));let Ue=tn(0,0,0,ce);p.push([Ue,Ue.position.x,.42-de*.04]),y.push(q)}continue}let W=T(r,ge,r+2,U,10.4,o-6.4,m.wood),Ae=Y===0;if(g.push([tn(r,0,Ae?ge:U,[W]),Ae?-1:1]),y.push(W),Y===_){let de=(r+6+t-14)/2,C=(l+c)/2;Fe([de,C,o-19],[de,C,46],2,m.white),Fe([de,C,46],[t-4,C,46],2,m.white),T(r+10,re+4,r+34,Z-4,11.8,46,m.black,{r:1})}else{T(r+3,re,t-4,Z,48,49.6,m.woodDark);let de=re+4;for(;de<Z-14;){let C=4+a()*3;Be(r+20+a()*10,de+C,C,C,49.6,59.6+a()*12,a()<.5?m.ceramic:m.porcelain,{cast:!1}),de+=2*C+3}Be(r+26,se,12,11,11.8,24,m.steel)}}gt("kitbase",Y=>{g.forEach(([ge,U])=>{ge.rotation.y=U*1.55*Y}),p.forEach(([ge,U,re])=>{ge.position.x=U-re*Y})},1,y),st.push({r:[r-46,n,r,s],when:()=>qe.kitbase&&qe.kitbase.v>.1}),T(r+.5,n,r+2.5,s,o-6,o-3,m.black,{cast:!1});let v=r+6,M=t-14;T(r-1,n,t,l,o-3,o+1,m.travTop),T(r-1,c,t,s,o-3,o+1,m.travTop),T(r-1,l,v,c,o-3,o+1,m.travTop),T(M,l,t,c,o-3,o+1,m.travTop),T(t-1.6,n,t,s,o+1,150,m.travTop,{parent:e.E}),T(v,l,M,c,o-20,o-19,m.inox,{cast:!1}),T(v,l,v+.8,c,o-19,o+.9,m.inox,{cast:!1}),T(M-.8,l,M,c,o-19,o+.9,m.inox,{cast:!1}),T(v+.8,l,M-.8,l+.8,o-19,o+.9,m.inox,{cast:!1}),T(v+.8,c-.8,M-.8,c,o-19,o+.9,m.inox,{cast:!1}),Be((v+M)/2,(l+c)/2,2.2,2.2,o-19,o-18.6,m.metal,{cast:!1});let b=t-7,S=(l+c)/2,E=b-22,P=[Be(b,S,2.6,2.6,o+1,o+4,m.metal),Fe([b,S,o+4],[b,S,o+34],1.25,m.metal),Fe([b,S,o+34],[b-5,S,o+39],1.25,m.metal),Fe([b-5,S,o+39],[E+4,S,o+39],1.25,m.metal),Fe([E+4,S,o+39],[E,S,o+34],1.25,m.metal),Fe([b+2.2,S,o+14],[b+2.2,S+8,o+18],.6,m.metal)];Qh("tap",[[E,S,o+33.4,o-18.6]],P);let w=r+6,A=w+50,N=(h+u)/2;T(w,h,A,u,o+1,o+1.6,m.induction,{cast:!1});let z=[];for(let Y of[w+14,A-14]){let ge=new De(new er(.075,.088,48),m.hobRing);ge.rotation.x=-Math.PI/2,ge.position.set(Ce(Y),(o+1.62)/100,Ie(N)),_e.add(ge),z.push(ge);let U=new De(new er(.035,.044,40),m.hobRing);U.rotation.x=-Math.PI/2,U.position.copy(ge.position),_e.add(U),z.push(U)}let V=[Be(w+14,N,11,10,o+1.6,o+8,m.black),Be(w+14,N,10.4,10.4,o+8,o+8.4,m.steel),Fe([w+14,N+11,o+6],[w+14,N+30,o+8],1.1,m.black)];gt("hob",Y=>{m.hobRing.emissiveIntensity=2.4*Y},1.4,[...z,...V]);let D=i.upperX,O=150,k=245,B={parent:e.E};T(D,n,t-1.6,s,O,O+1.8,m.woodDark,B),T(D,n,t-1.6,s,k-1.8,k,m.woodDark,B),T(D,n,t-1.6,n+1.8,O,k,m.woodDark,B),T(D,s-1.8,t-1.6,s,O,k,m.woodDark,B),T(t-2.4,n,t-1.6,s,O,k,m.woodDark,{cast:!1,parent:e.E}),T(D,n,t,s,k,260,m.wood,B);let J=Math.max(2,Math.round((s-n)/55)),j=(s-n)/J,K=[];for(let Y=0;Y<J;Y++){let ge=n+Y*j,U=ge+j;Y>0&&T(D+.5,ge-.6,t-2.4,ge+.6,O,k,m.woodDark,B),T(D+.5,ge+1,t-2.4,U-1,O+46,O+47,m.glass,{cast:!1,parent:e.E}),T(t-3.4,ge+1,t-2.4,U-1,O+47,O+48,m.ledKit,{cast:!1,parent:e.E});for(let Ae of[O+1.8,O+47]){let de=ge+4;for(;de<U-8;){let C=3+a()*2,R=8+a()*10;Be(D+15,de+C,C,C*.85,Ae,Ae+R,a()<.5?m.ceramic:m.porcelain,{cast:!1,parent:e.E}),de+=2*C+2.5}}let re=ge+.3,Z=U-.3,se=2,W=[T(D-1.8,re,D,re+se,O+.3,k-.3,m.frameBlk,B),T(D-1.8,Z-se,D,Z,O+.3,k-.3,m.frameBlk,B),T(D-1.8,re+se,D,Z-se,O+.3,O+.3+se,m.frameBlk,B),T(D-1.8,re+se,D,Z-se,k-.3-se,k-.3,m.frameBlk,B),T(D-1.2,re+se,D-.6,Z-se,O+.3+se,k-.3-se,m.smoked,{cast:!1,parent:e.E}),T(D-3.4,Z-3.6,D-1.8,Z-2.4,O+4,O+20,m.black,B)];K.push([tn(D-1.8,0,re,W,e.E),W])}gt("uppers",Y=>K.forEach(([ge])=>{ge.rotation.y=-1.45*Y}),.9,K.flatMap(Y=>Y[1])),T(D-4,h-4,t-3,u+4,O-3,O,m.frameBlk,B),T(D+1,n+2,D+3,s-2,O-.6,O,m.ledKit,{cast:!1,parent:e.E}),qt(s-n-6,60,t-1.7,O-30,(n+s)/2,0,-Math.PI/2,e.E);{let Y=c+26;Y+22>h-4&&Y<u+4&&(Y=u+12),Y+22<s-22&&T(r+8,Y,r+40,Y+22,o+1,o+3.4,m.wood,{r:.6})}Be(t-12,s-14,5.5,4.5,o+1,o+18,m.ceramic),Be(t-12,s-14,.4,.4,o+18,o+40,m.twig,{cast:!1}),Dy(t-12,s-14,10,(o+32)/100,.006,.05,.6,m.leaf),st.push({r:[r,n,t,s]});let[G,Q]=i.fridge,X=r+2;T(X,G,t-1,G+1.8,0,260,m.woodDark),T(X,Q-1.8,t-1,Q,0,260,m.woodDark),T(t-3,G,t-1,Q,0,260,m.woodDark),T(X,G,t-1,Q,0,2,m.woodDark),T(X,G+1.8,t-3,Q-1.8,182,260,m.woodDark),T(r,G+.3,r+2,Q-.3,182.4,186,m.woodDark),T(r,G+3,r+2,Q-3,186.4,225,m.induction,{cast:!1}),T(r-.3,Q-13,r,Q-5,192,218,m.black,{cast:!1}),T(r,G+.3,r+2,Q-.3,225.4,259.6,m.woodDark);let ne=X+1,ve=t-3,we=G+1.8,xe=Q-1.8;T(ve-1,we,ve,xe,2,182,m.fridgeIn,{cast:!1}),T(ne,we,ve,we+1,2,182,m.fridgeIn,{cast:!1}),T(ne,xe-1,ve,xe,2,182,m.fridgeIn,{cast:!1}),T(ne,we,ve,xe,180.6,182,m.fridgeIn,{cast:!1});for(let Y of[42,86,128])T(ne+2,we+1,ve-1,xe-1,Y,Y+.8,m.glass,{cast:!1});for(let[Y,ge]of[[2.4,3],[42.8,4],[86.8,3],[128.8,4]])for(let U=0;U<ge;U++){let re=we+6+U*(xe-we-12)/ge,Z=m.food[(U+(Y|0))%m.food.length];U%2?Be(ne+22+U*3,re+5,4,4,Y,Y+10+U*5%12,Z,{cast:!1}):T(ne+12,re,ne+28,re+10,Y,Y+8+U*3%9,Z,{cast:!1})}let ae=[T(r,G+.3,r+2.2,Q-.3,.4,182,m.woodDark),T(r-1.6,G+5,r,G+6.6,30,160,m.black)];for(let Y of[30,72,114])ae.push(T(r+2.2,G+6,r+9,Q-6,Y,Y+1.4,m.fridgeIn,{cast:!1}),T(r+8.4,G+6,r+9,Q-6,Y+1.4,Y+8,m.glass,{cast:!1}));let Pe=tn(r,0,Q-.3,ae);qt(70,110,r-2,90,(G+Q)/2,0,-Math.PI/2,_e,m.glowFridge),gt("fridge",Y=>{Pe.rotation.y=1.7*Y,m.fridgeIn.emissiveIntensity=.55*Y,m.glowFridge.opacity=.35*Y},1.2,ae),st.push({r:[r,G,t,Q]},{r:[r-(Q-G),Q-6,r,Q],when:()=>qe.fridge&&qe.fridge.v>.1})}function lp(i,e){return i.userData.base=e,_e.add(i),i.target&&_e.add(i.target),Nl.push(i),i}function Gy(i,e){let t=i.bath,n=i.D,s=t.x1,r=t.y0+t.wall,o=260,[a,l]=i.bathDoor,c=i.shower,[h,u,f,d]=i.vanity,x=i.wc,_=T(0,r,s,n,0,.8,m.bathFloor,{cast:!1});_.userData.walk=!0,T(0,r,s,c.y1,.8,1,m.showerFloor,{cast:!1}),T(4,r+3,s-4,r+7,.95,1.05,m.frameBlk,{cast:!1}),T(0,r,s,n,o,o+1,m.bathCeil,{cast:!1,parent:Je});let g=c.glass;T(0,c.y1-.5,g,c.y1+.5,1,o,m.glass,{cast:!1}),T(0,c.y1-1,g,c.y1+1,1,2.6,m.fit,{cast:!1}),T(g-1.6,c.y1-1,g,c.y1+1,1,o,m.fit,{cast:!1}),Fe([g-1,c.y1,200],[g-1,r,200],.8,m.fit),st.push({r:[0,c.y1-1,g,c.y1+1]});let p=22,y=82;T(p,r-.2,y,r+.2,108,140,m.slatBack,{cast:!1}),T(p,r,y,r+1.2,138.6,140,m.ledAcc,{cast:!1});for(let[W,Ae]of[[0,p+8],[1,p+15],[2,p+22]])Be(Ae,r+4,2.3,2.3,108,118-W*1.5,W===1?m.frameBlk:m.bottle,{seg:20}),Be(Ae,r+4,.9,.9,118-W*1.5,119.5-W*1.5,m.frameBlk,{seg:12});let v=c.head[0],M=c.head[1],b=[T(v-14,M-14,v+14,M+14,o-1.4,o-.6,m.fit),Be(v,M,1,1,o-.6,o,m.fit)],S=(r+c.y1)/2;b.push(Fe([1.2,S,95],[1.2,S,190],.9,m.fit),T(0,S-2,1.4,S+2,93,97,m.fit),T(0,S-2,1.4,S+2,188,192,m.fit)),b.push(T(1.2,S-2.4,4.6,S+2.4,160,166,m.fit,{r:.8}),Fe([4.2,S,163],[8.8,S,175],1.3,m.fit),Fe([8.8,S,175],[9.4,S,177],3.6,m.fit,{seg:24})),b.push(bl([[4,S,158],[5,S+1,130],[6,S+3,98],[4,S+8,84],[2.4,S+12,90]],.55,m.hose)),b.push(Fe([0,S+18,100],[.8,S+18,100],3.6,m.fit,{seg:28}),Fe([.8,S+18,100],[4.4,S+18,100],2.2,m.fit,{seg:24}),Fe([3.8,S+18,100],[4.6,S+18,92.5],.7,m.fit)),Kd("shower",new I(Ce(v),(o-1.6)/100,Ie(M)),new I(0,-1,0),b,{v0:.5,spread:.16,rad:.12,r0:.15,r1:.24,splash:.24}),T(h,u,f,d,45,81,m.wood),T(f,u+.6,f+.4,(u+d)/2-.4,46,80,m.wood),T(f,(u+d)/2+.4,f+.4,d-.6,46,80,m.wood),T(f+.4,u+4,f+1.2,d-4,62.4,63.6,m.black,{cast:!1}),T(h,u,f+1,d,81,84,m.travTop),T(h+2,u+2,f-3,d-2,44.4,45,m.ledAcc,{cast:!1}),qt(f-h+20,d-u+10,(h+f)/2,.9,(u+d)/2,-Math.PI/2,0,_e,m.glowSoft);let E=(h+f)/2+2,P=(u+d)/2,w=new De(new Kr([[.001,0],[.12,.004],[.18,.04],[.2,.1],[.2,.13],[.19,.13],[.185,.1],[.165,.045],[.11,.016],[.001,.014]].map(W=>new le(W[0],W[1])),48),m.basin);w.position.set(Ce(E),.84,Ie(P)),w.castShadow=!0,w.receiveShadow=!0,_e.add(w),Be(E,P,2,2,85.4,85.6,m.fit,{cast:!1});let A=E-4,N=[Fe([0,P,112],[.8,P,112],3,m.fit,{seg:24}),Fe([.8,P,112],[A+1,P,112],.95,m.fit),Fe([0,P+14,112],[.8,P+14,112],3,m.fit,{seg:24}),Fe([.8,P+14,112],[3.8,P+14,112],1.9,m.fit,{seg:20}),Fe([3.4,P+14,112],[4.1,P+14,105.5],.6,m.fit)];Qh("basin",[[A,P,111.2,85.6]],N),st.push({r:[h,u,f,d]});let z=120,V=205,D=u+4,O=d-4;T(0,D+1.5,1.2,O-1.5,z+1.5,V-1.5,m.black,{cast:!1,parent:e.W});let k=T(1.2,D,1.6,O,z,V,m.mirror,{cast:!1,parent:e.W});if(k.userData.keep=!0,Bi&&!Ot&&!eu()){let W=new Bi(new Vt((O-D)/100,(V-z)/100),{textureWidth:1024,textureHeight:1024,color:11842740,clipBias:.003,multisample:2});W.rotation.y=Math.PI/2,W.position.set(Ce(1.62),(z+V)/200,Ie((D+O)/2)),e.W.add(W),Xi={live:W,plain:k}}qt(O-D+30,V-z+30,.3,(z+V)/2,(D+O)/2,0,Math.PI/2,e.W,m.glowSoft),T(1.2,D-.2,1.4,O+.2,z-1.2,z-.6,m.ledBath,{cast:!1,parent:e.W}),T(1.2,D-.2,1.4,O+.2,V+.6,V+1.2,m.ledBath,{cast:!1,parent:e.W});let B=n-18,[J,j]=x.cistern,K=x.cx;T(J,B,j,n,0,112,m.bathWall),T(J-1,B-1.5,j,n,112,115,m.travTop),T(K-11,B-.6,K+11,B,92,107,m.black,{cast:!1}),T(K-9.5,B-.9,K-.5,B-.6,93.5,105.5,m.fit,{cast:!1}),T(K+.5,B-.9,K+9.5,B-.6,93.5,105.5,m.fit,{cast:!1}),Be(J+14,B-7,3.6,3.6,115,128,m.bottle),T(j-30,B-12,j-6,B-2,115,125,m.garm[0],{r:1.5});let G=B-54;cr(K-18,G,K+18,B+1,13,40,14,3,2.4,m.wc,{top:31,ky:.42,kx:.3}),cr(K-17.7,G+.3,K+17.7,B-1,40,41.6,13.5,3,.6,m.wcSeat);{let W=Be(K,G+21,10.5,10.5,41.6,41.72,m.wcIn,{cast:!1,seg:36});W.scale.z=1.38}let Q=[cr(K-17.7,G+.3,K+17.7,B-2,41.75,43.6,13.5,3,.8,m.wcSeat)],X=tn(K,42.6,B-2,Q);gt("wc",W=>{X.rotation.x=W*1.5},1.6,Q),st.push({r:[J,B,j,n]},{r:[K-18,G,K+18,B]});let ne=x.jet,ve=[Fe([s,ne,74],[s-3.4,ne,74],1.1,m.fit),T(s-4.4,ne-1.4,s-2.2,ne+1.4,70,76,m.fit,{r:.6}),Fe([s-3.3,ne,61],[s-3.3,ne,77],1.2,m.fit),Fe([s-3.3,ne,77],[s-6.6,ne,80],1.1,m.fit)];Qd("bidet",new I(Ce(s-7),.802,Ie(ne)),new I(-.5,-.87,0),{n:hn?90:150,v0:1.8,spread:.1,w:.0018,l:.028},ve),bl([[s-3.3,ne,61],[s-3.6,ne-.6,40],[s-4.5,ne-2.5,22],[s-3,ne-5,26],[s-1.5,ne-4.6,50],[s-.6,ne-2,71]],.45,m.hose),Fe([s,ne-22,68],[s-7,ne-22,68],.6,m.fit),Be(s-7.5,ne-22,5.5,5.5,64,72,m.white,{seg:24}).rotation.x=Math.PI/2;let[we,xe]=i.towel;for(let W of[we,xe]){Fe([s-4.5,W,92],[s-4.5,W,168],.95,m.fit);for(let Ae of[96,164])Fe([s,W,Ae],[s-4.5,W,Ae],.6,m.fit)}for(let W of[100,116,132,148,162])Fe([s-4.5,we,W],[s-4.5,xe,W],.7,m.fit);T(s-7.5,we+3,s-5.6,xe-3,112,160,m.garm[7],{r:.8}),T(K-10,B-40,K+10,B-20,o-.8,o-.2,m.white,{cast:!1,parent:Je});for(let W=0;W<6;W++)T(K-9,B-39+W*3.2,K+9,B-38+W*3.2,o-.85,o-.8,m.black,{cast:!1,parent:Je});let ae=new Hn(.03,20);for(let[W,Ae]of[[40,P-18],[40,P+18],[v+30,M-30],[100,(a+l)/2],[K,B-70]]){let de=new De(ae,m.ledBath);de.rotation.x=Math.PI/2,de.position.set(Ce(W),(o-.3)/100,Ie(Ae)),Je.add(de)}let Pe=(W,Ae,de,C,R,q)=>{let oe=new Vn(16763279,0,0,.75,.8,2);oe.position.set(Ce(W),(o-4)/100,Ie(Ae)),oe.target.position.set(Ce(de),R/100,Ie(C)),lp(oe,q)};Ot?Pe(s/2,(r+n)/2,s/2,(r+n)/2,0,4.2):(Pe(40,P,10,P,90,3.6),Pe(v+20,M,v,M,0,3));let Y=s+t.wall,ge=.35,U=216,re=(W,Ae)=>{let de=Math.max(1,Math.round((Ae-W)/54)),C=(Ae-W)/de;for(let R=0;R<de;R++)T(Y,W+R*C+ge,Y+2,W+(R+1)*C-ge,0,259.6,m.wood)};re(t.y0,a),re(l,n),T(Y,a+ge,Y+2,l-ge,U+ge,259.6,m.wood),T(Y,t.y0,Y+.4,a,0,260,m.slatBack,{cast:!1}),T(Y,l,Y+.4,n,0,260,m.slatBack,{cast:!1}),T(Y,a,Y+.4,l,U,260,m.slatBack,{cast:!1});let Z=[T(Y-4,a+ge,Y+2,l-ge,.4,U-ge,Xt(m.wood,{W:m.bathWall})),T(Y+2,l-9,Y+6,l-6.5,101,106,m.black,{r:1}),T(Y+4,l-22,Y+6,l-6.5,102.5,104.5,m.black,{r:1}),T(Y-8,l-9,Y-4,l-6.5,101,106,m.black,{r:1}),T(Y-8,l-22,Y-6,l-6.5,102.5,104.5,m.black,{r:1})],se=tn(Y-4,0,a+ge,Z);gt("bathdoor",W=>{se.rotation.y=-W*Math.PI*.5},1.1,Z),st.push({r:[s,a,Y+2,l],when:()=>!(qe.bathdoor&&qe.bathdoor.v>.85)},{r:[Y-4-(l-a),a,Y-4,a+6],when:()=>qe.bathdoor&&qe.bathdoor.v>.1})}function Wy(i){let e=new Hn(.0125,18),t=i.H,[n,s,r]=i.channel;T(n-6,s,n+6,r,t-1.7,t-1,m.black,{cast:!1,parent:Je}),[s+60,(s+r)/2,r-60].forEach((h,u)=>{T(n-3.2,h-31,n+3.2,h+31,t-2.3,t-1.7,m.frameBlk,{cast:!1,parent:Je});for(let d=0;d<6;d++){let x=new De(e,m.led);x.rotation.x=Math.PI/2,x.position.set(Ce(n),(t-2.35)/100,Ie(h-25+d*10)),Je.add(x)}if(Ot||u===1)return;let f=new Vn(16763279,0,0,.95,.75,2);f.position.set(Ce(n),(t-4)/100,Ie(h)),f.target.position.set(Ce(n),0,Ie(h)),_e.add(f),_e.add(f.target),vi.push(f)});let[a,l,c]=i.track;T(a-2,l,a+2,c,256.5,260,m.black,{parent:Je});for(let[h,u]of[l+40,(l+c)/2,c-40].entries()){Fe([a,u,256.5],[a,u,252],.6,m.black,{parent:Je});let f=Fe([a,u,252],[a+6,u,240],3.2,m.black,{parent:Je});f.castShadow=!1;let d=new De(new Hn(.026,20),m.led);if(d.position.set(Ce(a+6.4),2.392,Ie(u)),d.lookAt(Ce(a+26),1.6,Ie(u)),Je.add(d),!Ot&&h===1){let x=new Vn(16763279,0,0,.9,.75,2);x.position.set(Ce(a+6),2.38,Ie(u)),x.target.position.set(Ce(i.W-20),.9,Ie(u)),_e.add(x),_e.add(x.target),vi.push(x)}}for(let[h,u]of i.downlights){let f=new De(new Hn(.045,24),m.led);if(f.rotation.x=Math.PI/2,f.position.set(Ce(h),2.595,Ie(u)),Je.add(f),!Ot){let d=new Vn(16763279,0,0,.85,.75,2);d.position.set(Ce(h),2.58,Ie(u)),d.target.position.set(Ce(h),0,Ie(u)),_e.add(d),_e.add(d.target),vi.push(d),d.userData.down=!0}}if(Ot){let h=new Vn(16763279,0,0,1.3,.9,1.4);h.position.set(Ce(i.W/2),(t-4)/100,Ie(i.floorSplit/2)),h.target.position.set(Ce(i.W/2),0,Ie(i.floorSplit/2)),_e.add(h),_e.add(h.target),vi.push(h)}}function Xy(i){performance.mark("k-build0"),By(),yi=i.W/100,Mi=i.D/100,$d=i.H/100,_e=new on,i.mirror&&(_e.scale.x=-1),Kt.add(_e),_e.updateMatrixWorld(!0);for(let r of[pe.netflix,pe.acDisp,pe.lockDisp])r.repeat.x=i.mirror?-1:1,r.offset.x=i.mirror?1:0;if(Mo=[],Xi=null,vo=[],hr={},yr=[],st=[],vi=[],Kh=[],Nl=[],Uy=[],pl=[],ur=null,fr=null,Hh=null,ut=i,qe={},i.kind==="g"){let r={};for(let o of i.wallGroups)r[o.id]=fo(o.id,o.n[0],o.n[1],Ce(o.p[0]),Ie(o.p[1]));s1(i,r)}else{let r={W:fo("W",1,0,Ce(0),0),N:fo("N",0,1,0,Ie(0)),E:fo("E",-1,0,Ce(i.W),0),S:fo("S",0,-1,0,Ie(i.D))};zy(i,r),tp(i,r),np(i,r),Hy(i,r),ip(i,r),sp(i),rp(i,r),op(i),ap(i,r),Gy(i,r),Wy(i)}let e=i.balcony;go=new De(new Vt(26,11),m.sky),go.position.set(Ce(i.W/2),1.5,Ie(e.y0)-5.5),_e.add(go);let[t,n]=i.slide;_i=new Vn(15331839,2,0,1.2,1,0),_i.position.set(Ce((t+n)/2),1.9,Ie(e.y0-90)),_i.target.position.set(Ce((t+n)/2),.4,Ie(i.D*.4)),_e.add(_i.target),_e.add(_i);let s=Math.max(yi,Mi-e.y0/100)/2+1.2;Object.assign(xn.shadow.camera,{left:-s,right:s,top:s,bottom:-s}),xn.shadow.camera.updateProjectionMatrix(),performance.mark("k-build1"),Fy(),r1(),Ny(),pr=!0,tu(xs),Fl()}m.sofa=me({map:pe.boucle,roughness:1});m.rug=me({map:pe.fabric,roughness:1});m.livLamp=me({color:16052198,roughness:.5,emissive:16765600,emissiveIntensity:0});m.glowLiv=oi(pe.glowR,16758903,0);m.shade.side=Ut;function Bd(i,e,t){let n=(i.rot||0)*Math.PI/180,s=Math.round(Math.cos(n)),r=Math.round(Math.sin(n)),o=i.mir?-e:e;return[i.x+s*o-r*t,i.y+r*o+s*t]}function qy(i,e){let[t,n]=Bd(i,e[0],e[1]),[s,r]=Bd(i,e[2],e[3]);return[Math.min(t,s),Math.min(n,r),Math.max(t,s),Math.max(n,r)]}function Oh(i,e){let t=new on;return t.position.set(Ce(i.x),0,Ie(i.y)),t.rotation.y=-(i.rot||0)*Math.PI/180,i.mir&&(t.scale.x=-1),t.userData.frame=!0,e.add(t),t}function cp(i,e,t){let n={room:_e,ceilG:Je,RW:yi,RD:Mi,n:st.length},s=Oh(i,_e),r=Oh(i,Je),o={};for(let a of["W","N","E","S"]){let l=i.walls&&i.walls[a];o[a]=l&&e[l]?Oh(i,e[l]):s}_e=s,Je=r,yi=0,Mi=0;try{t(o)}finally{_e=n.room,Je=n.ceilG,yi=n.RW,Mi=n.RD;for(let a=n.n;a<st.length;a++)st[a].r=qy(i,st[a].r)}}var eu=()=>(_e.updateMatrixWorld(!0),_e.matrixWorld.determinant()<0);function Yy(i,e){let t=i.id||"ac",n=i.w||80,s=-n/2,r=n/2,o=-21,a=i.h0||225,l=a+28,c={parent:e.S},h=t!=="ac",u=h?m.acDisp.clone():m.acDisp,f=h?m.acLed.clone():m.acLed,d=h?m.wind.clone():m.wind,x=T(s,o,r,0,a,l,m.white,{r:4,parent:e.S});T(s+4,o-.4,r-4,o,l-7,l-4,m.black,{cast:!1,parent:e.S}),T(s+5,o+1.5,r-5,o+8,a-.6,a+.2,m.black,{cast:!1,parent:e.S});let _=T(s+5.5,o+.4,r-5.5,o+7.5,a-1.1,a-.4,m.white,{cast:!1,parent:e.S}),g=tn(0,a-.7,o+7.5,[_],e.S),p=T(r-7.4,o-.25,r-6,o,l-9,l-7.6,f,{cast:!1,parent:e.S}),y=new De(new Vt(.075,.033),u);y.rotation.y=Math.PI,y.position.set(Ce(r-16),(l-12)/100,Ie(o-.3)),e.S.add(y);let v=ep(t,new I(Ce(0),(a-2)/100,Ie(o-2)),new I(0,0,-1),new I(1,0,0),(n-16)/100,d);gt(t,M=>{g.rotation.x=-.8*M,u.opacity=M,f.emissiveIntensity=1.6*M,d.opacity=.5*M,v.mesh.visible=M>.02},1.2,[x,_,p,y])}function Zy(i,e){let t=i.id,n=i.w,s=i.t||10,r=i.h||213,o={parent:e.W},a=m[i.mat||"door"];for(let[u,f]of[[-1.4,0],[s,s+1.4]])T(u,-5,f,0,0,r+5,m.frameBlk,o),T(u,n,f,n+5,0,r+5,m.frameBlk,o),T(u,-5,f,n+5,r,r+5,m.frameBlk,o);T(0,-.6,s,0,0,r,m.frameBlk,o),T(0,n,s,n+.6,0,r,m.frameBlk,o),T(0,-.6,s,n+.6,r-.6,r,m.frameBlk,o);let l=n-9,c=[T(s-4,.3,s,n-.3,.6,r-.6,a,o)];if(c.push(T(s,l-3,s+1.2,l+3,100,108,m.black,{r:.6,parent:e.W}),T(s+1.2,l-14,s+3.2,l+2,102.6,105.4,m.black,{r:.8,parent:e.W})),i.lock){c.push(T(s-6.6,l-3.2,s-4,l+3.2,94,126,m.black,{r:1,parent:e.W}),T(s-8.6,l-14,s-6.6,l+2,103,106,m.black,{r:1,parent:e.W}));let u=new De(new Vt(.044,.07),m.lockScr);u.rotation.y=-Math.PI/2,u.position.set(Ce(s-6.65),1.15,Ie(l)),e.W.add(u),c.push(u),eu()!==!!ut.mirror&&(u.scale.x=-1),c.push(T(s,l-3,s+1.6,l+3,112,124,m.black,{r:.6,parent:e.W}))}else c.push(T(s-5.2,l-3,s-4,l+3,100,108,m.black,{r:.6,parent:e.W}),T(s-7.2,l-14,s-5.2,l+2,102.6,105.4,m.black,{r:.8,parent:e.W}));let h=tn(s,0,.3,c,e.W);gt(t,u=>{h.rotation.y=u*Math.PI*.5},1.1,c),st.push({r:[-2,0,s+2,n],when:()=>!(qe[t]&&qe[t].v>.85)},{r:[s,0,s+n,6],when:()=>qe[t]&&qe[t].v>.1})}function $y(i,e){let t=T(0,-5.5,.8,5.5,115,127,m.white,{cast:!1,parent:e.W}),n=T(.8,-3.8,1.7,3.8,116.6,125.4,m.white,{cast:!1,r:.4,parent:e.W}),s=tn(1.2,121,0,[n],e.W);gt("lights",r=>{s.rotation.z=.2*(r-.5),nu()},2.6,[t,n])}function jy(i,e){let[t,n]=i.x,s=i.h||275,r={parent:e.N},o=Math.max(1,Math.round((n-t)/115)),a=(n-t)/o;T(t,-11,n,0,0,2.5,m.frameBlk,r),T(t,-11,n,0,s-4,s,m.frameBlk,r);for(let d=0;d<=o;d++){let x=t+d*a;T(Math.max(t,x-2),-11,Math.min(n,x+2),0,0,s,m.frameBlk,r)}if(T(t+2,-6,n-2,-5.4,2.5,s-4,m.glass,{cast:!1,parent:e.N}),st.push({r:[t,-11,n,0]}),!i.cid)return;let[l,c]=i.c||[t,n],h=(l+c)/2,u=9;Ml(l+2,Math.min(c-2,l+62),u-3,1.5,274,2.2,11,m.sheer,{cast:!1,parent:e.N});let f=[];for(let[d,x,_]of[[l+1,h+2,26],[c-1,h-2,26]]){let g=Math.abs(x-d),p=Ml(Math.min(d,x),Math.max(d,x),u+2,1.5,274,4.4,16,m.blackout,r);p.geometry.translate(d<x?g/200:-g/200,0,0),p.position.x=Ce(d),f.push([p,_/g])}gt(i.cid,d=>{f.forEach(([x,_])=>{x.scale.x=_+(1-_)*d})},.7,f.map(d=>d[0])),T(l,7.6,c,10.4,274,275,m.frameBlk,{cast:!1,parent:Je})}function hp(){let i=Math.max(Mr[xs].inside,.6)*(qe.livlamp?qe.livlamp.v:0);m.livLamp.emissiveIntensity=1.5*i,m.glowLiv.opacity=.5*i,yt=!0}function Jy(i){let e=i.len||220,t=94,n=m.sofa,s=i.rug||170,r=i.table||[118,172],o=i.rugPad??16,a=T(t-34,-o,t+s,e+o,.1,1.1,m.rug,{cast:!1});a.userData.walk=!0;for(let[p,y]of[[8,6],[t-11,6],[8,e-9],[t-11,e-9]])T(p,y,p+3,y+3,0,9,m.black);T(4,1,t,e-1,9,40,n,{r:3}),T(4,1,28,e-1,40,80,n,{r:6}),T(4,1,t,21,40,62,n,{r:6}),T(4,e-21,t,e-1,40,62,n,{r:6});let l=i.seats||3,c=(e-42)/l;for(let p=0;p<l;p++){let y=21+p*c+.6,v=21+(p+1)*c-.6;T(26,y,t-1,v,40,53,n,{r:5}),T(26,y+1,44,v-1,52,84,n,{r:6}).rotation.z=-.12}let h=(p,y,v,M)=>{let b=T(30,p,44,y,52,92,v,{r:6,seg:5});b.rotation.z=M,b.rotation.x=.1};h(23,66,m.pillow2,-.2),h(e-66,e-23,m.throwM,-.2),st.push({r:[0,0,t,e]});let[u,f]=r,d=e/2;T(u,d-45,f,d+45,36,40,m.woodDark,{r:1.2}),T(u+8,d-35,f-8,d+35,0,36,m.black),T(u+10,d-30,u+34,d-10,40,43,m.book3),T(u+11,d-29,u+33,d-11,43,45,m.book2),Be(u+30,d+18,9,5,40,46,m.ceramic,{seg:32}),st.push({r:[u,d-45,f,d+45]}),i.side!==!1&&(Be(46,e+26,20,20,52,54,m.woodDark),Be(46,e+26,1.5,1.5,0,52,m.black),Be(46,e+26,14,14,0,1.5,m.black),st.push({r:[26,e+6,66,e+46]}));let x=20,_=-26,g=[Be(x,_,15,16,0,4,m.black),Fe([x,_,4],[x,_,150],1,m.black),Fe([x,_,150],[x+40,_+20,192],.9,m.black),Fe([x+40,_+20,192],[x+88,_+34,176],.9,m.black),Wi(x+92,_+35,172,17,12,17,m.livLamp,{half:!0,seg:28})];g[4].rotation.x=Math.PI,qt(160,160,x+92,41,_+35,-Math.PI/2,0,_e,m.glowLiv),gt("livlamp",()=>hp(),2.4,g),st.push({r:[x-16,_-16,x+16,_+16]})}function Ky(i){let e=i.lx||140,t=i.ly||80,n=75,s=i.ch||300;T(-e/2,-t/2,e/2,t/2,n-3.2,n,m.travTop,{r:1});for(let a of[-1,1])T(a*(e/2-22)-2,-t/2+10,a*(e/2-22)+2,t/2-10,0,n-3.2,m.black),T(a*(e/2-22)-4,-t/2+8,a*(e/2-22)+4,t/2-8,0,2,m.black);T(-e/2+22,-2,e/2-22,2,60,64,m.black);let r=(a,l,c)=>{let h=l-c*23,u=l+c*19,f=Math.min(h,u),d=Math.max(h,u);for(let[_,g]of[[a-19,f+2],[a+16,f+2],[a-19,d-5],[a+16,d-5]])T(_,g,_+3,g+3,0,44,m.woodDark);T(a-21,f,a+21,d,44,47,m.woodDark,{r:.8}),T(a-20,f+1,a+20,d-1,47,50,m.sofa,{r:1.5});let x=c>0?f:d-3;T(a-20,x,a+20,x+3,66,84,m.woodDark,{r:1}),T(a-19,x+(c>0,.5),a-16,x+2.5,47,66,m.woodDark),T(a+16,x+.5,a+19,x+2.5,47,66,m.woodDark)},o=e/4+4;for(let a of[-o,o])r(a,-t/2-18,1),r(a,t/2+18,-1);st.push({r:[-e/2,-t/2-40,e/2,t/2+40]}),Fe([0,0,s],[0,0,178],.25,m.black,{cast:!1,parent:Je}),Be(0,0,5,5,s-1.2,s,m.black,{parent:Je}),Wi(0,0,168,19,12,19,m.black,{half:!0,seg:32,parent:Je}),Wi(0,0,167.6,18.3,11.3,18.3,m.shade,{half:!0,seg:32,parent:Je,cast:!1}),qt(e+60,t+60,0,n+.4,0,-Math.PI/2,0,_e,m.glowSoft)}function Qy(i,e){let t=i.d,n=i.l,s=260,r=i.shower,[o,a]=i.notch||[0,0],l={parent:e.W},c=T(0,0,t,n,0,.8,m.bathFloor,{cast:!1});c.userData.walk=!0,T(0,0,t,r,.8,1,m.showerFloor,{cast:!1}),T(4,r-8,t-4,r-4,.95,1.05,m.frameBlk,{cast:!1}),T(0,0,t,n,s,s+1,m.bathCeil,{cast:!1,parent:Je});let h=i.glass;T(0,r-.5,h,r+.5,1,s,m.glass,{cast:!1}),T(0,r-1,h,r+1,1,2.6,m.fit,{cast:!1}),T(h-1.6,r-1,h,r+1,1,s,m.fit,{cast:!1}),Fe([h-1,r,200],[h-1,0,200],.8,m.fit),st.push({r:[0,r-1,h,r+1]});let u=(Math.max(o,0)+t)/2,f=r/2,d=Math.max(o+8,u-6),x=Math.min(t-6,d+52);T(d,-.2,x,.2,108,140,m.slatBack,{cast:!1}),T(d,0,x,1.2,138.6,140,m.ledAcc,{cast:!1});for(let[G,Q]of[[0,d+8],[1,d+15],[2,d+22]])Be(Q,4,2.3,2.3,108,118-G*1.5,G===1?m.frameBlk:m.bottle,{seg:20}),Be(Q,4,.9,.9,118-G*1.5,119.5-G*1.5,m.frameBlk,{seg:12});let _=[T(u-14,f-14,u+14,f+14,s-1.4,s-.6,m.fit),Be(u,f,1,1,s-.6,s,m.fit)],g=Math.max(o+14,u-26);_.push(Fe([g,1.2,95],[g,1.2,190],.9,m.fit),T(g-2,0,g+2,1.4,93,97,m.fit),T(g-2,0,g+2,1.4,188,192,m.fit)),_.push(T(g-2.4,1.2,g+2.4,4.6,160,166,m.fit,{r:.8}),Fe([g,4.2,163],[g,8.8,175],1.3,m.fit),Fe([g,8.8,175],[g,9.4,177],3.6,m.fit,{seg:24})),_.push(bl([[g,4,158],[g+1,5,130],[g+3,6,98],[g+8,4,84],[g+12,2.4,90]],.55,m.hose)),_.push(Fe([g+18,0,100],[g+18,.8,100],3.6,m.fit,{seg:28}),Fe([g+18,.8,100],[g+18,4.4,100],2.2,m.fit,{seg:24}),Fe([g+18,3.8,100],[g+18,4.6,92.5],.7,m.fit)),Kd("shower",new I(Ce(u),(s-1.6)/100,Ie(f)),new I(0,-1,0),_,{v0:.5,spread:.16,rad:.12,r0:.15,r1:.24,splash:.24});let[p,y]=i.vanity,v=0,M=50;T(v,p,M,y,45,81,m.wood),T(M,p+.6,M+.4,(p+y)/2-.4,46,80,m.wood),T(M,(p+y)/2+.4,M+.4,y-.6,46,80,m.wood),T(M+.4,p+4,M+1.2,y-4,62.4,63.6,m.black,{cast:!1}),T(v,p,M+1,y,81,84,m.travTop),T(v+2,p+2,M-3,y-2,44.4,45,m.ledAcc,{cast:!1}),qt(M-v+20,y-p+10,(v+M)/2,.9,(p+y)/2,-Math.PI/2,0,_e,m.glowSoft);let b=(v+M)/2+2,S=(p+y)/2,E=new De(new Kr([[.001,0],[.12,.004],[.18,.04],[.2,.1],[.2,.13],[.19,.13],[.185,.1],[.165,.045],[.11,.016],[.001,.014]].map(G=>new le(G[0],G[1])),48),m.basin);E.position.set(Ce(b),.84,Ie(S)),E.castShadow=!0,E.receiveShadow=!0,_e.add(E),Be(b,S,2,2,85.4,85.6,m.fit,{cast:!1});let P=b-4,w=[Fe([0,S,112],[.8,S,112],3,m.fit,{seg:24}),Fe([.8,S,112],[P+1,S,112],.95,m.fit),Fe([0,S+14,112],[.8,S+14,112],3,m.fit,{seg:24}),Fe([.8,S+14,112],[3.8,S+14,112],1.9,m.fit,{seg:20}),Fe([3.4,S+14,112],[4.1,S+14,105.5],.6,m.fit)];Qh("basin",[[P,S,111.2,85.6]],w),st.push({r:[v,p,M,y]});let A=120,N=205,z=p+4,V=y-4;T(0,z+1.5,1.2,V-1.5,A+1.5,N-1.5,m.black,{cast:!1,parent:e.W});let D=T(1.2,z,1.6,V,A,N,m.mirror,{cast:!1,parent:e.W});if(D.userData.keep=!0,Bi&&!Ot&&!eu()){let G=new Bi(new Vt((V-z)/100,(N-A)/100),{textureWidth:1024,textureHeight:1024,color:11842740,clipBias:.003,multisample:2});G.rotation.y=Math.PI/2,G.position.set(Ce(1.62),(A+N)/200,Ie((z+V)/2)),e.W.add(G),Xi={live:G,plain:D}}qt(V-z+30,N-A+30,.3,(A+N)/2,(z+V)/2,0,Math.PI/2,e.W,m.glowSoft),T(1.2,z-.2,1.4,V+.2,A-1.2,A-.6,m.ledBath,{cast:!1,parent:e.W}),T(1.2,z-.2,1.4,V+.2,N+.6,N+1.2,m.ledBath,{cast:!1,parent:e.W}),cp({x:0,y:i.wc,rot:90,walls:{S:"W"}},e,()=>e1(i));let[O,k]=i.towel,B=t;for(let G of[O,k]){Fe([B-4.5,G,92],[B-4.5,G,168],.95,m.fit);for(let Q of[96,164])Fe([B,G,Q],[B-4.5,G,Q],.6,m.fit)}for(let G of[100,116,132,148,162])Fe([B-4.5,O,G],[B-4.5,k,G],.7,m.fit);T(B-7.5,O+3,B-5.6,k-3,112,160,m.garm[7],{r:.8});let J=[t-40,(r+n)/2];T(J[0]-10,J[1]-10,J[0]+10,J[1]+10,s-.8,s-.2,m.white,{cast:!1,parent:Je});for(let G=0;G<6;G++)T(J[0]-9,J[1]-9+G*3.2,J[0]+9,J[1]-8+G*3.2,s-.85,s-.8,m.black,{cast:!1,parent:Je});let j=new Hn(.03,20);for(let[G,Q]of[[40,S-18],[40,S+18],[u,f+24],[t-50,n-40]]){let X=new De(j,m.ledBath);X.rotation.x=Math.PI/2,X.position.set(Ce(G),(s-.3)/100,Ie(Q)),Je.add(X)}let K=(G,Q,X,ne,ve,we)=>{let xe=new Vn(16763279,0,0,.75,.8,2);xe.position.set(Ce(G),(s-4)/100,Ie(Q)),xe.target.position.set(Ce(X),ve/100,Ie(ne)),lp(xe,we)};Ot?K(t/2,n/2,t/2,n/2,0,4.2):(K(40,S,10,S,90,3.6),K(u,f+20,u,f,0,3))}function e1(i){let t=(i.cis||84)/2,n=-t,s=t,r=0;T(n,-18,s,0,0,112,m.bathWall),T(n-1,-18-1.5,s,0,112,115,m.travTop),T(r-11,-18-.6,r+11,-18,92,107,m.black,{cast:!1}),T(r-9.5,-18-.9,r-.5,-18-.6,93.5,105.5,m.fit,{cast:!1}),T(r+.5,-18-.9,r+9.5,-18-.6,93.5,105.5,m.fit,{cast:!1}),Be(n+12,-25,3.6,3.6,115,128,m.bottle),T(s-28,-30,s-6,-20,115,125,m.garm[0],{r:1.5});let o=-72;cr(r-18,o,r+18,-17,13,40,14,3,2.4,m.wc,{top:31,ky:.42,kx:.3}),cr(r-17.7,o+.3,r+17.7,-19,40,41.6,13.5,3,.6,m.wcSeat);{let u=Be(r,o+21,10.5,10.5,41.6,41.72,m.wcIn,{cast:!1,seg:36});u.scale.z=1.38}let a=[cr(r-17.7,o+.3,r+17.7,-20,41.75,43.6,13.5,3,.8,m.wcSeat)],l=tn(r,42.6,-20,a);gt("wc",u=>{l.rotation.x=u*1.5},1.6,a),st.push({r:[n,-18,s,0]},{r:[r-18,o,r+18,-18]});let c=s-9,h=[Fe([c,-18,74],[c,-18-3.4,74],1.1,m.fit),T(c-1.4,-18-4.4,c+1.4,-18-2.2,70,76,m.fit,{r:.6}),Fe([c,-18-3.3,61],[c,-18-3.3,77],1.2,m.fit),Fe([c,-18-3.3,77],[c,-18-6.6,80],1.1,m.fit)];Qd("bidet",new I(Ce(c),.802,Ie(-25)),new I(-.42,-.87,-.26),{n:hn?90:150,v0:1.8,spread:.1,w:.0018,l:.028},h),bl([[c,-18-3.3,61],[c-.6,-18-3.6,40],[c-2.5,-18-4.5,22],[c-5,-21,26],[c-4.6,-18-1.5,50],[c-2,-18-.6,71]],.45,m.hose)}function t1(i,e){let t=i.H,n=i.extent;for(let s of i.shell){let[r,o]=s.h||[0,t],a={UP:m.cap};for(let[l,c]of Object.entries(s.m||{}))a[l]=m[c];T(s.r[0],s.r[1],s.r[2],s.r[3],r,o,Xt(m[s.base||"paint"],a),{parent:s.g?e[s.g]:_e}),s.c!==!1&&r<150&&st.push({r:s.r})}for(let s of i.floors){let[r,o,a,l]=s.r,c=new Vt((a-r)/100,(l-o)/100);c.rotateX(-Math.PI/2),Ul(c,Ce((r+a)/2),0,Ie((o+l)/2));let h=new De(c,m[s.m]);h.position.set(Ce((r+a)/2),(s.h||.1)/100,Ie((o+l)/2)),h.receiveShadow=!0,h.userData.walk=!0,_e.add(h)}for(let s of i.strips||[])T(s[0],s[1],s[2],s[3],0,.35,m.brass,{cast:!1});for(let s of i.slabs||[n])T(s[0],s[1],s[2],s[3],-24,-1.5,m.slab,{cast:!1});{let s=new Vt(60,60);s.rotateX(-Math.PI/2);let r=new De(s,new io({opacity:.16}));r.position.y=-.242,r.receiveShadow=!0,_e.add(r)}Je=new on,_e.add(Je);for(let s of i.ceils)T(s.r[0],s.r[1],s.r[2],s.r[3],s.h[0],s.h[1],m[s.m||"ceiling"],{parent:Je,cast:!1});for(let s of i.slabs||[n])T(s[0],s[1],s[2],s[3],t+2,t+24,m.cap).layers.set(1)}function n1(i){let e=new Hn(.045,24),t=new er(.045,.058,24);for(let n of i.lights){let s=new De(e,m.led);s.rotation.x=Math.PI/2,s.position.set(Ce(n.x),(n.h-.4)/100,Ie(n.y)),Je.add(s);let r=new De(t,m.black);if(r.rotation.x=Math.PI/2,r.position.set(Ce(n.x),(n.h-.35)/100,Ie(n.y)),Je.add(r),n.real&&!Ot){let o=new Vn(16763279,0,0,.9,.75,2);o.position.set(Ce(n.x),(n.h-2)/100,Ie(n.y)),o.target.position.set(Ce(n.x),0,Ie(n.y)),_e.add(o),_e.add(o.target),vi.push(o),o.userData.down=!0}}if(Ot)for(let[n,s,r]of i.liteSpots){let o=new Vn(16763279,0,0,1.3,.9,1.4);o.position.set(Ce(n),(r-4)/100,Ie(s)),o.target.position.set(Ce(n),0,Ie(s)),_e.add(o),_e.add(o.target),vi.push(o)}}var i1={bedwall:(i,e)=>{ip(i,e),sp(i)},tvwall:(i,e)=>rp(i,e),storage:i=>op(i),kitchen:(i,e)=>ap(i,e),balcony:(i,e)=>np(i,e),slide:(i,e)=>tp(i,e),window:(i,e)=>jy(i,e),ac:(i,e)=>Yy(i,e),door:(i,e)=>Zy(i,e),switch:(i,e)=>$y(i,e),bath:(i,e)=>Qy(i,e),sofa:i=>Jy(i),dining:i=>Ky(i)};function s1(i,e){t1(i,e);for(let t of i.mods)cp(t.fr,e,n=>i1[t.fn](t,n));n1(i)}var up=new Ha(16777215,9405814,.3);Kt.add(up);var xn=new Va(16773339,5);xn.castShadow=!0;xn.shadow.mapSize.set(hn?1024:2048,hn?1024:2048);Object.assign(xn.shadow.camera,{left:-5.5,right:5.5,top:5.5,bottom:-5.5,near:.5,far:34});xn.shadow.bias=-4e-4;xn.shadow.normalBias=.02;xn.shadow.radius=3;xn.shadow.camera.layers.enable(1);Kt.add(xn);Kt.add(xn.target);var Mr={day:{exp:.9,sun:[4.6,16773339,[-2.6,4.8,-7.6]],hemi:.26,win:1.2,env:.34,inside:0,acc:.55,bg:15330284,sky:"day",skyBoost:1.25},dusk:{exp:.94,sun:[3.6,16753244,[-6.4,1.8,-5.6]],hemi:.14,win:.65,env:.22,inside:.45,acc:.85,bg:15130842,sky:"dusk",skyBoost:1.1},night:{exp:1.05,sun:[0,0,[-2,4,-8]],hemi:.05,win:.12,env:.12,inside:1,acc:1,bg:1448994,sky:"night",skyBoost:.95}},xs="day",Ol=Object.keys(dr)[0],yt=!0,Sl=null,fp=5.5;Ot&&!_r.includes("envall")&&(Sl=Kt.environment,Kt.environment=null);function r1(){Sl&&_e.traverse(i=>{i.material&&[].concat(i.material).forEach(e=>{e.isMeshStandardMaterial&&!e.envMap&&(e.metalness>.3||e.roughness<.2)&&(e.envMap=Sl,e.needsUpdate=!0)})})}function tu(i){let e=Mr[i];xs=i,lt.toneMappingExposure=e.exp;let t=Math.max(yi,Mi)/5;xn.intensity=e.sun[0],xn.color.set(e.sun[1]),xn.position.set(e.sun[2][0]*t*.6,e.sun[2][1]*t*.6,e.sun[2][2]*t*.6-.6),xn.target.position.set(0,0,-.6),up.intensity=e.hemi+(Sl?e.env*fp:0),_i&&(_i.intensity=e.win*2.4,_i.color.set(i==="dusk"?16765608:i==="night"?10466520:15331839)),m.sky.map=yl[e.sky],m.sky.color.setScalar(e.skyBoost),m.sky.needsUpdate=!0,Kt.background=new Xe(e.bg);let n=e.inside,s=e.acc;Kh.forEach(o=>o.intensity=.5*Math.max(n,s*.5));let r=Math.max(.85,n);Nl.forEach(o=>o.intensity=o.userData.base*r),m.ledBath.emissiveIntensity=2.2*r,m.glowFake.opacity=.32+.3*n,m.glowSoft.opacity=.22+.3*n,m.glowSlot.opacity=.08+.2*s,m.glowUp.opacity=.18+.4*s,m.glowWash.opacity=.1+.22*s,m.ledAcc.emissiveIntensity=2.6*s,m.ledWard.emissiveIntensity=2*s,m.ledKit.emissiveIntensity=2.2*s;for(let[o,a]of[["lights",nu],["balclamp",dp],["tvlamp",pp],["livlamp",hp]]){let l=qe[o];l&&(l.t=l.v=n>0||o==="lights"&&ut&&ut.lightsDay?1:0),a()}_e.traverse(o=>{o.material&&[].concat(o.material).forEach(a=>{"envMapIntensity"in a&&(a.envMapIntensity=e.env)})}),pr=!0,yt=!0}function nu(){let i=Math.max(Mr[xs].inside,.7)*(qe.lights?qe.lights.v:0);vi.forEach(e=>{e.intensity=(e.userData.down?5:6.5)*i}),m.led.emissiveIntensity=2.2*i,m.shade.emissiveIntensity=1.3*i,pr=!0,yt=!0}function dp(){let i=Math.max(Mr[xs].inside,.6)*(qe.balclamp?qe.balclamp.v:0);ur&&(ur.intensity=.7*i),m.balcLamp.emissiveIntensity=1.6*i,m.glowBalc.opacity=.45*i,yt=!0}function pp(){let i=Math.max(Mr[xs].inside,.6)*(qe.tvlamp?qe.tvlamp.v:0);fr&&(fr.intensity=.55*i),m.lampWhite.emissiveIntensity=1.6*i,m.glowLamp.opacity=.5*i,yt=!0}function mp(i){let e=dr[i];Ol=i;for(let[t,n]of Object.entries(e.colors))m[t]&&m[t].color&&m[t].color.set(n);for(let[t,n]of Object.entries(e.tex||{}))m[t]&&pe[n]&&(m[t].map=pe[n],m[t].needsUpdate=!0);Fl(),yt=!0}var Qe=new kt(35,1,.05,90),In=new Ni(-1,1,1,-1,.1,40),bt=Qe,it=new el(Qe,lt.domElement);it.enableDamping=!0;it.dampingFactor=.08;it.maxDistance=28;it.minDistance=.3;it.addEventListener("change",()=>{yt=!0,Hi=!0});function Fl(){m.cap.color.set(bt===In?2830388:dr[Ol].colors.cap||"#e3dcd2")}var o1=new I,mr=i=>{let e=_e.worldToLocal(o1.copy(i));return[(e.x+yi/2)*100,(e.z+Mi/2)*100]},El=(i,e,t)=>_e.localToWorld(new I(Ce(i),e,Ie(t))),gp=(i,e,t=0)=>ut&&ut.walk.some(([n,s,r,o])=>i>n+t&&i<r-t&&e>s+t&&e<o-t),Bl=i=>{let[e,t]=mr(i);return i.y<$d&&gp(e,t)},cn=!1,wl=hn||window.matchMedia("(any-pointer: coarse)").matches,a1=hn?"Drag to orbit \xB7 pinch to zoom \xB7 double-tap the floor to step inside":"Drag to orbit \xB7 scroll to zoom \xB7 double-click the floor or press W to step inside",Vh=hn?"Left stick to walk \xB7 drag to look around \xB7 double-tap the floor to move there":"WASD / arrows to walk \xB7 Shift to run \xB7 F free look \xB7 Q/E to turn \xB7 drag to look";function yo(i){cn=i,it.enabled=!i,it.rotateSpeed=1,it.enableZoom=!i,it.enablePan=!i,it.minDistance=i?.02:.3,i||(zl(),it.enableDamping=!1,it.update(),it.enableDamping=!0);let e=document.getElementById("hint3d");e&&(e.textContent=i?Vh:a1),ln&&(ln.hidden=!(i&&wl),i&&wl?gl():su()),ms&&(ms.hidden=!i),br()}var ms=document.getElementById("btn-look"),kd=document.getElementById("cross"),Jt=!1,bi=!1,kl=0,po=new cs,ul=new I;function br(){it.enabled=!cn&&!Jt,kd&&(kd.hidden=!Jt),ms&&(ms.setAttribute("aria-pressed",bi?"true":"false"),ms.textContent=bi?hn?"Exit free look":"Exit free look (Esc)":hn?"Free look":"Free look (F)")}function zl(){bi=!1,kl++,document.pointerLockElement===lt.domElement&&document.exitPointerLock(),Jt=!1,br()}function iu(){gn.clear(),su(),Pp(),zl()}function Gh(i){i!==kl||!bi||!cn||(br(),Hl("Drag to look around \xB7 WASD / arrows to walk"))}function xp(){if(bi||Jt){zl();return}if(!ut||document.body.dataset.screen!=="viewer"||((!cn||Mt)&&xr("walk",!0),!cn))return;bi=!0;let i=++kl;if(br(),hn||!lt.domElement.requestPointerLock){Hl(hn?"Drag to look around \xB7 left stick to walk":"Drag to look around \xB7 WASD / arrows to walk");return}try{let e=lt.domElement.requestPointerLock();e&&e.catch&&e.catch(()=>Gh(i))}catch{Gh(i)}}document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===lt.domElement;if(i&&(!bi||!cn||document.body.dataset.screen!=="viewer")){document.exitPointerLock();return}Jt&&!i&&(bi=!1),Jt=i,Pp(),br(),Jt&&Hl("Move the mouse to look \xB7 click to interact \xB7 Esc to exit")});document.addEventListener("pointerlockerror",()=>Gh(kl));function _p(i,e,t=.0024){!cn||Mt||bt!==Qe||(ul.copy(it.target).sub(Qe.position),po.setFromVector3(ul),po.theta-=i*t,po.phi=Math.min(Math.PI-.08,Math.max(.08,po.phi+e*t)),ul.setFromSpherical(po).setLength(.12),it.target.copy(Qe.position).add(ul),Qe.lookAt(it.target),Qe.updateMatrixWorld(!0),yt=Hi=!0)}document.addEventListener("mousemove",i=>{Jt&&_p(i.movementX,i.movementY)});ms&&ms.addEventListener("click",xp);var gn=new Set,ln=document.getElementById("joy"),Wh=ln?ln.querySelector("i"):null,Gi={x:0,y:0},ml=null,l1=["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","q","e"];window.addEventListener("keydown",i=>{if(document.body.dataset.screen!=="viewer"||i.ctrlKey||i.metaKey||i.altKey)return;let e=i.key.toLowerCase();if(e==="shift"){gn.add(e);return}if(e==="escape"){zl();return}if(e==="f"){i.preventDefault(),i.repeat||xp();return}l1.includes(e)&&(i.preventDefault(),gn.add(e),!cn&&!Mt&&ut&&ut.views.walk&&xr("walk"))});window.addEventListener("keyup",i=>{gn.delete(i.key.toLowerCase())});window.addEventListener("blur",iu);document.addEventListener("visibilitychange",()=>{document.hidden&&iu()});function gl(){let i=document.getElementById("dock");if(!ln||!i)return;if(document.body.dataset.dock==="min"){ln.style.bottom="calc(env(safe-area-inset-bottom, 0px) + 86px)";return}let e=i.getBoundingClientRect();ln.style.bottom=Math.round(window.innerHeight-e.top+14)+"px"}function su(){ml=null,Gi.x=Gi.y=0,Wh&&(Wh.style.transform="")}function zd(i){let e=ln.getBoundingClientRect(),t=e.width/2,n=t*.6,s=i.clientX-(e.left+t),r=i.clientY-(e.top+t),o=Math.hypot(s,r);o>n&&(s*=n/o,r*=n/o),Wh.style.transform=`translate(${s}px, ${r}px)`,Gi.x=s/n,Gi.y=-r/n}if(ln){ln.addEventListener("pointerdown",e=>{ml=e.pointerId,ln.setPointerCapture(e.pointerId),zd(e),e.preventDefault(),e.stopPropagation()}),ln.addEventListener("pointermove",e=>{e.pointerId===ml&&zd(e)});for(let e of["pointerup","pointercancel","lostpointercapture"])ln.addEventListener(e,t=>{t.pointerId===ml&&su()});window.addEventListener("resize",()=>{ln.hidden||gl()}),window.addEventListener("dockchange",()=>{ln.hidden||gl()});let i=document.getElementById("dock");i&&new ResizeObserver(()=>{ln.hidden||gl()}).observe(i)}function xo(i,e,t=18){if(!gp(i,e))return!1;for(let n of st){if(n.when&&!n.when())continue;let[s,r,o,a]=n.r,l=Math.max(s,Math.min(i,o)),c=Math.max(r,Math.min(e,a));if((l-i)*(l-i)+(c-e)*(c-e)<t*t)return!1}return!0}var c1=new I(0,1,0),fs=new I,Hd=new I,Vd=new I;function h1(i){if(!cn||Mt||bt!==Qe||!ut)return!1;let e=0,t=0,n=0;if((gn.has("w")||gn.has("arrowup"))&&(e+=1),(gn.has("s")||gn.has("arrowdown"))&&(e-=1),gn.has("d")&&(t+=1),gn.has("a")&&(t-=1),(gn.has("arrowleft")||gn.has("q"))&&(n+=1),(gn.has("arrowright")||gn.has("e"))&&(n-=1),Math.hypot(Gi.x,Gi.y)>.12&&(e+=Gi.y,t+=Gi.x),!e&&!t&&!n)return!1;let s=Qe.position;if(n&&(Vd.copy(it.target).sub(s).applyAxisAngle(c1,n*1.7*i),it.target.copy(s).add(Vd)),e||t){let r=Math.max(1,Math.hypot(e,t)),o=(gn.has("shift")?2.5:1.35)*i/r;fs.copy(it.target).sub(s).setY(0),fs.lengthSq()<1e-10&&fs.set(0,0,1),fs.normalize(),Hd.set(-fs.z,0,fs.x);let[a,l]=mr(s),[c,h]=mr(Hd.clone().multiplyScalar(t*o).addScaledVector(fs,e*o).add(s));xo(a,l)&&(xo(c,l)||(c=a),xo(c,h)||(h=l));let u=El(c,s.y,h),f=u.x-s.x,d=u.z-s.z,x=(1.6-s.y)*Math.min(1,i*3);s.x+=f,s.z+=d,s.y+=x,it.target.x+=f,it.target.z+=d,it.target.y+=x}return!0}function vp(i,e){let t=e.clone().sub(i).normalize();it.target.copy(i).addScaledVector(t,.12)}var Gd=0;function Hl(i){let e=document.getElementById("toast3d");e&&(e.textContent=i,e.classList.add("show"),clearTimeout(Gd),Gd=setTimeout(()=>e.classList.remove("show"),2200))}function yp(i){if(!zh)throw new Error("no GTAO");let e=new jt(2,2,{type:vn,samples:4}),t=new rl(lt,e);t.addPass(new ol(Kt,i));let n=new zh(Kt,i,2,2);try{n.updateGtaoMaterial({radius:.32,distanceExponent:1.6,thickness:1.2,scale:1.15,samples:16}),n.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),n.blendIntensity=.9}catch(r){console.warn(r)}let s=n.overrideVisibility.bind(n);return n.overrideVisibility=function(){s(),Kt.traverse(r=>{(r.isReflector||r.isSprite||r.isMesh&&[].concat(r.material).some(o=>o.transparent))&&(r.visible=!1)})},t.addPass(n),t.addPass(new al),{c:t,ao:n}}var gr=null,xl=null,Ln=vr&&!Ot;function Mp(){if(gr)return!0;try{return gr=yp(Qe),jn.clientWidth&&Sr(),!0}catch(i){return console.warn("AO off",i),!1}}Ln&&!Mp()&&(Ln=!1);var bp="iso",Mt=null;function Sp(){let i=ut.extent,e=El((i[0]+i[2])/2,0,(i[1]+i[3])/2);return{cx:e.x,cz:e.z,w:(i[2]-i[0])/100,h:(i[3]-i[1])/100}}function Ep(){let i=jn.clientWidth||1,e=jn.clientHeight||1,t=i/e,n=ut?Sp():{w:yi,h:Mi},s=n.w+.7,o=(n.h+.9)/2,a=o*t;a<s/2&&(a=s/2,o=a/t),Object.assign(In,{left:-a,right:a,top:o,bottom:-o}),In.updateProjectionMatrix()}function wp(i,e,t){let n=Qe.aspect||1.6,s=1.6;if(n>=s)return{p:i,t:e,f:t};let r=Math.tan(t*Math.PI/360)*s/n;if(Bl(i))return{p:i,t:e,f:Math.min(100,2*Math.atan(r)*180/Math.PI)};let o=Math.min(46,2*Math.atan(r)*180/Math.PI),a=r/Math.tan(o*Math.PI/360);return{p:e.clone().add(i.clone().sub(e).multiplyScalar(a)),t:e,f:o}}function u1(i,e){let t=ut.views[i];if(!t)return;if(bp=i,t.ortho){yo(!1);let s=Sp();bt=In,it.object=In,it.enableRotate=!1,In.position.set(s.cx,16,s.cz+1e-4),In.up.set(0,0,-1),In.lookAt(s.cx,0,s.cz),In.zoom=1,Ep(),it.target.set(s.cx,0,s.cz),it.update(),Mt=null,Fl(),yt=!0;return}let n=wp(new I(...t.pos),new I(...t.target),t.fov);Tp(n.p,n.t,n.f,e)}function Tp(i,e,t,n){let s=bt===In;bt=Qe,it.object=Qe,it.enableRotate=!0,Qe.up.set(0,1,0),Fl(),yo(!1);let r={p:i,t:e,f:t,inside:Bl(i)},o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(n||s||o){Qe.position.copy(r.p),it.target.copy(r.t),Qe.fov=r.f,Qe.updateProjectionMatrix(),r.inside&&(vp(r.p,r.t),yo(!0)),it.update(),Mt=null,yt=!0;return}Mt={t0:performance.now(),dur:950,from:{p:Qe.position.clone(),t:it.target.clone(),f:Qe.fov},to:r}}var Tl=new Wa,Al=new le,Fh=0;function Ap(i,e){let t=lt.domElement.getBoundingClientRect();return ru((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1)}function Rp(i){return i.find(e=>{let t=e.object;for(;t;){if(!t.visible)return!1;t=t.parent}return e.object.layers.test(bt.layers)})}function ru(i,e){Al.set(i,e),Tl.setFromCamera(Al,bt);let t=Rp(Tl.intersectObjects(_e.children,!0));return t&&t.object.userData.toggle||null}var f1={door:["Open the entry door","Close the entry door"],bathdoor:["Open the bathroom door","Close the bathroom door"],shower:["Turn on the rain shower","Turn off the shower"],wc:["Lift the WC lid","Lower the WC lid"],bidet:["Turn on the jet washer","Turn off the jet washer"],basin:["Run the basin tap","Turn off the basin tap"],slide:["Open the balcony door","Close the balcony door"],curtain:["Close the curtains","Open the curtains"],tv:["Turn on the TV","Turn off the TV"],ac:["Turn on the AC","Turn off the AC"],lights:["Turn on the lights","Turn off the lights"],storage:["Open the glass cabinet","Close the glass cabinet"],drawers:["Open the console drawers","Close the console drawers"],tap:["Run the kitchen tap","Turn off the kitchen tap"],hob:["Switch on the induction hob","Switch off the hob"],fridge:["Open the fridge","Close the fridge"],balclamp:["Light the balcony lamp","Switch off the balcony lamp"],cage:["Open the AC cage","Close the AC cage"],tvlamp:["Switch on the table lamp","Switch off the table lamp"],consoleA:["Open the console cabinet","Close the console cabinet"],uppers:["Open the kitchen glass cabinets","Close the kitchen glass cabinets"],kitbase:["Open the kitchen cupboards","Close the kitchen cupboards"],wardrobe:["Open the charcoal cabinets","Close the charcoal cabinets"],ac2:["Turn on the bedroom AC","Turn off the bedroom AC"],curtain2:["Close the bedroom curtains","Open the bedroom curtains"],beddoor:["Open the bedroom door","Close the bedroom door"],livlamp:["Switch on the floor lamp","Switch off the floor lamp"]},Cp=i=>ut&&ut.actLabels&&ut.actLabels[i]||f1[i];function bo(){document.querySelectorAll('[data-k="act"]').forEach(i=>{let e=qe[i.dataset.v],t=!!e&&e.t>.5;i.hidden=!e,i.setAttribute("aria-pressed",t?"true":"false");let n=Cp(i.dataset.v);n&&(i.textContent=n[t?1:0])})}function Rl(i){let e=qe[i];e&&(e.t=e.t>.5?0:1,yt=!0,bo(),y1(i),Vi&&i===Jn&&!Vi.hidden&&(Vi.textContent=Xh(i)))}function d1(i,e){let t=lt.domElement.getBoundingClientRect();Al.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Tl.setFromCamera(Al,bt);let n=Rp(Tl.intersectObjects(_e.children,!0));if(!n||!n.object.userData.walk){Hl(hn?"Double-tap an open patch of floor":"Double-click an open patch of floor");return}let[s,r]=mr(n.point);for(let h=0;h<12&&!xo(s,r);h++){let u=ut.walk.find(([f,d,x,_])=>s>=f&&s<=x&&r>=d&&r<=_)||ut.walk[0];s+=((u[0]+u[2])/2-s)*.2,r+=((u[1]+u[3])/2-r)*.2}let o=El(s,1.6,r),a;bt===Qe&&Bl(Qe.position)?a=it.target.clone().sub(Qe.position).setY(0):(a=El(ut.W/2,0,ut.D/2).sub(o).setY(0),a.length()<.6&&a.set(0,0,-1)),a.normalize();let l=o.clone().addScaledVector(a,3);l.y=1.25,So('[data-k="view"]',""),Il&&(Il.textContent="Walk mode: "+Vh.charAt(0).toLowerCase()+Vh.slice(1)+".");let c=wp(o,l,72);Tp(c.p,c.t,c.f,!1)}var Zn=null,ri=null,$n=null,mo=new Set;function Pp(){Zn=null,ri=null,$n=null,mo.clear()}function p1(i){let e=performance.now();if(e-Fh<450)return;if(Jt){let n=ru(0,0);n&&(Rl(n),Fh=e);return}let t=Ap(i.clientX,i.clientY);if(t){Rl(t),Fh=e,$n=null;return}$n&&e-$n.time<380&&Math.hypot(i.clientX-$n.x,i.clientY-$n.y)<36?($n=null,d1(i.clientX,i.clientY)):$n={time:e,x:i.clientX,y:i.clientY}}{let i=lt.domElement;i.addEventListener("pointerdown",e=>{mo.add(e.pointerId),mo.size!==1||e.pointerType==="mouse"&&e.button!==0?Zn=ri=$n=null:(ri={id:e.pointerId,x:e.clientX,y:e.clientY,time:performance.now(),dragged:!1},cn&&!Jt&&!Mt&&(Zn={id:e.pointerId,x:e.clientX,y:e.clientY},i.setPointerCapture(e.pointerId))),(cn||Jt)&&(e.preventDefault(),e.stopImmediatePropagation())},!0),i.addEventListener("pointermove",e=>{ri&&!Jt&&Math.hypot(e.clientX-ri.x,e.clientY-ri.y)>10&&(ri.dragged=!0,$n=null),Zn&&e.pointerId===Zn.id&&!Jt&&(_p(e.clientX-Zn.x,e.clientY-Zn.y,e.pointerType==="touch"?.004:.003),Zn.x=e.clientX,Zn.y=e.clientY),(cn||Jt)&&e.stopImmediatePropagation()},!0),i.addEventListener("pointerup",e=>{let t=ri;mo.delete(e.pointerId),Zn=ri=null,t&&t.id===e.pointerId&&!t.dragged&&performance.now()-t.time<=320&&!Mt&&p1(e),(cn||Jt)&&(i.hasPointerCapture(e.pointerId)&&i.releasePointerCapture(e.pointerId),e.stopImmediatePropagation())},!0);for(let e of["pointercancel","lostpointercapture"])i.addEventListener(e,t=>{mo.delete(t.pointerId),Zn=ri=null,e==="pointercancel"&&($n=null)})}function m1(){let i=bt.position,e=bt===Qe&&Bl(i);for(let t of Mo){let n=!0;bt===Qe&&!e&&(n=_e.worldToLocal(i.clone()).sub(t.p).dot(t.n)>0),t.shown!==n&&(t.shown=n,t.g.traverse(s=>{s.isMesh&&(s.layers.set(n?0:1),n&&s.layers.enable(1))}))}Je&&Je.userData.inside!==e&&(Je.userData.inside=e,Je.traverse(t=>{t.isMesh&&(t.layers.set(e?0:1),e&&t.layers.enable(1))})),go&&(go.visible=e)}function Sr(){let i=jn.clientWidth,e=jn.clientHeight;if(!i||!e)return;lt.setSize(i,e,!1),Qe.aspect=i/e,Qe.updateProjectionMatrix(),Ep();let t=lt.getPixelRatio();for(let n of[gr,xl])n&&(n.c.setPixelRatio(t),n.c.setSize(i,e));yt=!0}new ResizeObserver(Sr).observe(jn);var g1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,lr=0,Wd=performance.now(),fl=!1,Xd=0,Hi=!1;function Ip(i){requestAnimationFrame(Ip);let e=Math.max(0,(i-Wd)/1e3),t=Math.min(.05,e),n=Math.min(.12,e);if(Wd=i,document.body.dataset.screen!=="viewer"||!ut)return;for(let r of Object.values(qe))if(r.v!==r.t){pr=!0,vl=!0;let o=r.speed*t;r.v=r.t>r.v?Math.min(r.t,r.v+o):Math.max(r.t,r.v-o),r.apply(r.v<.5?2*r.v*r.v:1-Math.pow(-2*r.v+2,2)/2),yt=Hi=!0}for(let r of yr){let o=qe[r.id];o&&o.v>0&&(r.update(t,bt.position),yt=Hi=!0)}if(h1(n)&&(yt=Hi=!0),Mt){let r=Math.min(1,(i-Mt.t0)/Mt.dur),o=g1(r);Qe.position.lerpVectors(Mt.from.p,Mt.to.p,o),it.target.lerpVectors(Mt.from.t,Mt.to.t,o),Qe.fov=Mt.from.f+(Mt.to.f-Mt.from.f)*o,Qe.updateProjectionMatrix(),r>=1&&(Mt.to.inside&&(vp(Mt.to.p,Mt.to.t),yo(!0)),Mt=null),yt=Hi=!0}if(cn||Jt||Mt?Qe.lookAt(it.target):it.update(),Yh)return;if(v1(),!yt){fl&&i-Xd>220&&(fl=!1,qh(!0));return}yt=!1;let s=Ln&&!vr&&lr>1&&Hi;Hi=!1,qh(!s&&Ln),s?(fl=!0,Xd=i):fl=!1,b1(i),lr===0&&performance.mark("k-frame1"),lr<2&&(yt=!0),++lr===2&&(document.body.classList.add("ready3d"),window.__nhReady=!0,performance.mark("k-ready"))}var ps=!vr,Jn=null;try{localStorage.getItem("nh.hot")==="0"&&(ps=!1)}catch{}var Bh=new I,dl=new I,qd=new I,x1=new Bn;function _1(){if(vl){_e.updateMatrixWorld(!0);for(let s of vo){s.userData.box.makeEmpty();for(let r of hr[s.userData.toggle])s.userData.box.union(x1.setFromObject(r))}vl=!1}let i=ps&&bt===Qe,e=wl||jn.clientWidth<=700,t=[];bt.updateMatrixWorld(!0);for(let s of vo){let r=s.userData;if(s.visible=i&&!r.box.isEmpty()&&(!r.wall||r.wall.shown!==!1),!s.visible)continue;r.box.getCenter(dl),r.box.getSize(qd).multiplyScalar(.5),Bh.copy(bt.position).sub(dl).normalize();let o=1/0;for(let c of["x","y","z"]){let h=Math.abs(Bh[c]);h>1e-4&&(o=Math.min(o,qd[c]/h))}s.position.copy(dl).addScaledVector(Bh,Math.min(o,dl.distanceTo(bt.position)*.6)+.015);let a=s.position.clone().project(bt);s.parent.worldToLocal(s.position);let l=(e?13:9)*(r.toggle===Jn?1.5:1);if(s.scale.setScalar(l*2*Math.tan(bt.fov*Math.PI/360)/Math.max(1,jn.clientHeight)),a.z<-1||a.z>1||Math.abs(a.x)>1||Math.abs(a.y)>1){s.visible=!1;continue}e&&t.push({s,x:a.x*jn.clientWidth/2,y:a.y*jn.clientHeight/2,depth:a.z,r:l/2})}t.sort((s,r)=>+(r.s.userData.toggle===Jn)-+(s.s.userData.toggle===Jn)||s.depth-r.depth);let n=[];for(let s of t)n.some(r=>Math.hypot(s.x-r.x,s.y-r.y)<s.r+r.r+7)?s.s.visible=!1:n.push(s)}var Vi=document.getElementById("tip3d");function Cl(i,e){for(let t of hr[i]||[]){if(!t.userData.ol){if(!e)continue;let n=new Ta(new Ua(t.geometry,35),m.outline);n.raycast=()=>{},n.renderOrder=12,t.add(n),t.userData.ol=n}t.userData.ol.visible=e}yt=!0}function Xh(i){let e=qe[i],t=Cp(i);return t?t[e&&e.t>.5?1:0]:""}function Pl(i,e,t){i!==Jn&&(Jn&&Cl(Jn,!1),Jn=i,i&&Cl(i,!0),lt.domElement.style.cursor=i?"pointer":"",yt=!0),Vi&&(i&&Xh(i)?(Vi.textContent=Xh(i),Vi.style.transform=`translate(${Math.round(e+14)}px, ${Math.round(t+18)}px)`,Vi.hidden=!1):Vi.hidden=!0)}var _o=null;{let i=lt.domElement;i.addEventListener("pointermove",e=>{e.pointerType==="mouse"&&!e.buttons?_o=[e.clientX,e.clientY]:e.buttons&&Jn&&Pl(null)}),i.addEventListener("pointerleave",()=>{_o=null,Jt||Pl(null)})}function v1(){if(Jt){yt&&Pl(ru(0,0),innerWidth/2,innerHeight/2);return}if(!_o||Mt)return;let[i,e]=_o;_o=null,Pl(Ap(i,e),i,e)}function y1(i){!wl||i===Jn||(Cl(i,!0),setTimeout(()=>{i!==Jn&&Cl(i,!1)},650))}function M1(){if(!ut)return!1;let[i,e]=mr(Qe.position),t=ut.bath;if(ut.bathRect){let[n,s,r,o]=ut.bathRect;return i>n&&i<r&&e>s&&e<o}return i>0&&i<t.x1&&e>t.y0+t.wall&&e<ut.D}function qh(i=Ln){m1(),_1();let e=bt===Qe&&cn,t=e&&M1(),n=qe.bathdoor&&qe.bathdoor.v>.02;if(Xi){let r=e&&(t||n);Xi.live.visible=r,Xi.plain.visible=!r}if(pr&&(lt.shadowMap.needsUpdate=!0,pr=!1),i&&bt===In&&!xl&&gr)try{xl=yp(In),Sr()}catch{}let s=bt===In?xl:gr;i&&s?s.c.render():lt.render(Kt,bt)}var zi=lt.getPixelRatio(),Yd=0,ds=0,kh=0;function b1(i){let e=i-Yd;if(Yd=i,vr||e>150){ds=0;return}if(ds=ds?ds*.9+e*.1:e,i-kh<1500)return;let t=zi;ds>42&&zi>Od?t=Math.max(Od,zi-.15):ds<21&&zi<_l&&i-kh>5e3&&(t=Math.min(_l,zi+.15)),t!==zi&&(zi=t,lt.setPixelRatio(zi),Sr(),kh=i,ds=0)}function S1(i=20,e=Ln){let t=lt.getContext(),n=new Uint8Array(4),s=lt.info;s.autoReset=!1;let r=0,o=0,a=performance.now();for(let u=0;u<i;u++)s.reset(),Qe.position.sub(it.target).applyAxisAngle(new I(0,1,0),.01).add(it.target),Qe.lookAt(it.target),qh(e),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n),r+=s.render.calls,o+=s.render.triangles;let l=(performance.now()-a)/i;s.autoReset=!0;let c=0,h=0;return Kt.traverse(u=>{u.isLight&&u.intensity>0&&c++,u.isMesh&&h++}),{ms:+l.toFixed(1),calls:Math.round(r/i),tris:Math.round(o/i),lights:c,meshes:h,programs:s.programs.length,px:[lt.domElement.width,lt.domElement.height],ao:Ln,lite:Ot}}function So(i,e){document.querySelectorAll(i).forEach(t=>t.setAttribute("aria-pressed",t.dataset.v===e?"true":"false"))}var Il=document.getElementById("view-cap");function E1(){document.querySelectorAll('[data-k="view"]').forEach(i=>{i.hidden=!ut.views[i.dataset.v],ut.labels&&ut.labels[i.dataset.v]&&(i.textContent=ut.labels[i.dataset.v])})}function w1(i){let e=i.match(/^(.*?)\s*Laptop:\s*(.*?)\s*Phone:\s*(.*)$/);return e?`${e[1].replace(/\.$/,":")} ${hn?e[3]:e[2]}`:i}function xr(i,e){u1(i,e),So('[data-k="view"]',i),Il&&(Il.textContent=w1(ut.views[i].cap))}function Lp(i){mp(i),So('[data-k="style"]',i),document.querySelectorAll("[data-style-row]").forEach(e=>{e.textContent=dr[i].finish[e.dataset.styleRow]||"\u2013"}),document.querySelectorAll("[data-style-name]").forEach(e=>{e.textContent=dr[i].name})}function Dp(i){tu(i),So('[data-k="light"]',i),bo()}var Yh=!1;async function T1(){if(lt.compileAsync){Yh=!0;try{if(await lt.compileAsync(Kt,Qe),Xi){let i=Xi.live;i.visible=!1,lt.setRenderTarget(i.getRenderTarget()),await lt.compileAsync(Kt,Qe),lt.setRenderTarget(null)}}catch{lt.setRenderTarget(null)}Yh=!1,yt=!0}}function Zh(i,e,t){let n=Ll[i];if(!n)return;(!ut||ut.id!==i)&&(Xy(n),mp(Ol),lr=Math.min(lr,1),T1()),So('[data-k="room"]',i),E1(),document.querySelectorAll("[data-room-info]").forEach(o=>{o.hidden=o.dataset.roomInfo!==i});let s=document.getElementById("room-title"),r=document.getElementById("room-sub");s&&(s.textContent=n.name),r&&(r.textContent=n.sub),Sr(),xr(e&&n.views[e]?e:"iso",t!==!1),bo()}function ou(i){i!=="viewer"&&(iu(),yo(!1)),document.body.dataset.screen=i,i==="viewer"&&(Sr(),yt=!0)}function au(i,e,t){let n=!ut||ut.id!==i,s=Ll[i];if(n&&s){document.body.classList.remove("ready3d");let r=document.getElementById("load-name"),o=document.getElementById("room-title");r&&(r.textContent=s.name),o&&(o.textContent=s.name)}if(ou("viewer"),n&&t?setTimeout(()=>Zh(i,e,!0),70):Zh(i,e,!0),t)try{history.pushState({room:i},"","#"+i)}catch{}}function Up(i){if(ou("home"),i)try{history.pushState({home:!0},"","#home")}catch{}}window.addEventListener("popstate",i=>{let e=i.state||{};e.room&&Ll[e.room]?au(e.room,null,!1):Up(!1)});document.addEventListener("click",i=>{let e=i.target.closest("[data-open-room]");if(e){i.preventDefault(),au(e.dataset.openRoom,null,!0);return}if(i.target.closest("[data-go-home]")){i.preventDefault(),history.state&&history.state.room?history.back():Up(!1);return}let n=i.target.closest(".chip3d");if(n){let r=n.dataset.k,o=n.dataset.v;if(r==="view")xr(o);else if(r==="style")Lp(o);else if(r==="light")Dp(o);else if(r==="room")Zh(o,bp==="plan"?"plan":"iso",!0);else if(r==="act")Rl(o);else if(r==="hot"){ps=!ps,n.setAttribute("aria-pressed",ps?"true":"false");try{localStorage.setItem("nh.hot",ps?"1":"0")}catch{}yt=!0}else r==="ao"&&(Ln=!Ln&&Mp(),n.setAttribute("aria-pressed",Ln?"true":"false"),yt=!0);return}let s=i.target.closest("[data-goto]");s&&xr(s.dataset.goto)});var gs=null,Np=null,Op=Ol,Fp="day",A1=new Set(Zd.flatMap(i=>Object.keys(i.views)));for(let i of _r)Ll[i]&&(gs=i),dr[i]&&(Op=i),Mr[i]&&(Fp=i),A1.has(i)&&(Np=i),i==="render"&&document.body.classList.add("render-mode"),i==="noao"&&(Ln=!1);gr||(Ln=!1);document.querySelectorAll('[data-k="ao"]').forEach(i=>i.setAttribute("aria-pressed",Ln?"true":"false"));document.querySelectorAll('[data-k="hot"]').forEach(i=>i.setAttribute("aria-pressed",ps?"true":"false"));Lp(Op);Dp(Fp);gs?au(gs,Np,!1):ou("home");gs&&_r.includes("all")&&(Object.values(qe).forEach(i=>{i.t=i.v=1,i.apply(1)}),bo());if(gs){for(let i of _r){let e=qe[i.slice(1)];i[0]==="x"&&e&&(e.t=e.v=1,e.apply(1))}bo()}try{history.replaceState(gs?{room:gs}:{home:!0},"")}catch{}window.__nhModule=!0;window.__nh={toggle:Rl,state:()=>Object.fromEntries(Object.entries(qe).map(([i,e])=>[i,e.t])),view:i=>xr(i,!0),pos:()=>[Qe.position.x,Qe.position.y,Qe.position.z].map(i=>+i.toFixed(3)),plan:()=>mr(Qe.position).map(Math.round),interior:()=>cn,free:(i,e)=>xo(i,e),hot:()=>vo.filter(i=>i.visible).map(i=>i.userData.toggle),hits:(i,e,t=18)=>st.filter(n=>(!n.when||n.when())&&(()=>{let[s,r,o,a]=n.r,l=Math.max(s,Math.min(i,o)),c=Math.max(r,Math.min(e,a));return(l-i)**2+(c-e)**2<t*t})()).map(n=>n.r.map(s=>Math.round(s))),lookSim:i=>(bi=i,br(),i),dir:()=>{let i=it.target.clone().sub(Qe.position).normalize();return[i.x,i.y,i.z].map(e=>+e.toFixed(3))},marks:()=>Object.fromEntries(performance.getEntriesByType("mark").filter(i=>i.name.startsWith("k-")).map(i=>[i.name,Math.round(i.startTime)])),bench:S1,_:{M:m,scene:Kt,renderer:lt,get camera(){return bt},get room(){return _e},get spots(){return vi},get bathLights(){return Nl},get winLight(){return _i},setLiteK:i=>(fp=i,tu(xs),i)}};requestAnimationFrame(Ip);
