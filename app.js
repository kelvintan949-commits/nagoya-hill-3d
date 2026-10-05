var Ip=Object.defineProperty;var Wi=(i,e)=>()=>(i&&(e=i(i=0)),e);var Lp=(i,e)=>{for(var t in e)Ip(i,t,{get:e[t],enumerable:!0})};function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function Sm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Em(i,e,t){return i!==e?(t-i)/(e-i):0}function Cr(i,e,t){return(1-t)*i+t*e}function wm(i,e,t,n){return Cr(i,e,1-Math.exp(-t*n))}function Tm(i,e=1){return e-Math.abs(xh(i,e*2)-e)}function Am(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pm(i,e){return i+Math.random()*(e-i)}function Im(i){return i*(.5-Math.random())}function Lm(i){i!==void 0&&(Bu=i);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dm(i){return i*Fs}function Um(i){return i*Vs}function Tc(i){return(i&i-1)===0&&i!==0}function Nm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function la(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Om(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*x,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*x,a*c);break;case"ZYZ":i.set(l*x,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fm(){let i=ca("canvas");return i.style.display="block",i}function Pr(i){i in ku||(ku[i]=!0,console.warn(i))}function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Yl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);let a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Jm(i,e,t,n,s,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ei,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:i}}function Bo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,bs),i.getVertexPosition(l,Ss),i.getVertexPosition(c,Es);let h=Jm(i,e,t,n,bs,Ss,Es,Oo);if(h){s&&(Do.fromBufferAttribute(s,a),Uo.fromBufferAttribute(s,l),No.fromBufferAttribute(s,c),h.uv=bi.getInterpolation(Oo,bs,Ss,Es,Do,Uo,No,new le)),r&&(Do.fromBufferAttribute(r,a),Uo.fromBufferAttribute(r,l),No.fromBufferAttribute(r,c),h.uv1=bi.getInterpolation(Oo,bs,Ss,Es,Do,Uo,No,new le),h.uv2=h.uv1),o&&(Ku.fromBufferAttribute(o,a),Qu.fromBufferAttribute(o,l),ef.fromBufferAttribute(o,c),h.normal=bi.getInterpolation(Oo,bs,Ss,Es,Ku,Qu,ef,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};bi.getNormal(bs,Ss,Es,u.normal),h.face=u}return h}function Gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Gs(i[t]);for(let s in n)e[s]=n[s]}return e}function Km(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ed(i){return i.getRenderTarget()===null?i.outputColorSpace:pt.workingColorSpace}function td(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function i0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,x=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&x.length===0&&i.bufferSubData(u,0,f),x.length!==0){for(let v=0,g=x.length;v<g;v++){let p=x[v];t?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}function Fx(i,e,t,n,s,r,o){let a=new Xe(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function x(g,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Va)?(h===void 0&&(h=new De(new wn(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Gs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=pt.getTransfer(_.colorSpace)!==xt,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new De(new Ht(2,2),new Ct({name:"BackgroundMaterial",uniforms:Gs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=pt.getTransfer(_.colorSpace)!==xt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(zo,ed(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(a,l)},render:x}}function Bx(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null),c=l,h=!1;function u(D,O,k,B,J){let j=!1;if(o){let K=v(B,k,O);c!==K&&(c=K,d(c.object)),j=p(D,B,k,J),j&&y(D,B,k,J)}else{let K=O.wireframe===!0;(c.geometry!==B.id||c.program!==k.id||c.wireframe!==K)&&(c.geometry=B.id,c.program=k.id,c.wireframe=K,j=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,P(D,O,k,B),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function x(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,O,k){let B=k.wireframe===!0,J=a[D.id];J===void 0&&(J={},a[D.id]=J);let j=J[O.id];j===void 0&&(j={},J[O.id]=j);let K=j[B];return K===void 0&&(K=g(f()),j[B]=K),K}function g(D){let O=[],k=[],B=[];for(let J=0;J<s;J++)O[J]=0,k[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:B,object:D,attributes:{},index:null}}function p(D,O,k,B){let J=c.attributes,j=O.attributes,K=0,G=k.getAttributes();for(let Q in G)if(G[Q].location>=0){let ne=J[Q],_e=j[Q];if(_e===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),ne===void 0||ne.attribute!==_e||_e&&ne.data!==_e.data)return!0;K++}return c.attributesNum!==K||c.index!==B}function y(D,O,k,B){let J={},j=O.attributes,K=0,G=k.getAttributes();for(let Q in G)if(G[Q].location>=0){let ne=j[Q];ne===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let _e={};_e.attribute=ne,ne&&ne.data&&(_e.data=ne.data),J[Q]=_e,K++}c.attributes=J,c.attributesNum=K,c.index=B}function _(){let D=c.newAttributes;for(let O=0,k=D.length;O<k;O++)D[O]=0}function M(D){b(D,0)}function b(D,O){let k=c.newAttributes,B=c.enabledAttributes,J=c.attributeDivisors;k[D]=1,B[D]===0&&(i.enableVertexAttribArray(D),B[D]=1),J[D]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),J[D]=O)}function S(){let D=c.newAttributes,O=c.enabledAttributes;for(let k=0,B=O.length;k<B;k++)O[k]!==D[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function E(D,O,k,B,J,j,K){K===!0?i.vertexAttribIPointer(D,O,k,J,j):i.vertexAttribPointer(D,O,k,B,J,j)}function P(D,O,k,B){if(n.isWebGL2===!1&&(D.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let J=B.attributes,j=k.getAttributes(),K=O.defaultAttributeValues;for(let G in j){let Q=j[G];if(Q.location>=0){let X=J[G];if(X===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let ne=X.normalized,_e=X.itemSize,we=t.get(X);if(we===void 0)continue;let xe=we.buffer,ae=we.type,Pe=we.bytesPerElement,Y=n.isWebGL2===!0&&(ae===i.INT||ae===i.UNSIGNED_INT||X.gpuType===Vf);if(X.isInterleavedBufferAttribute){let ge=X.data,U=ge.stride,re=X.offset;if(ge.isInstancedInterleavedBuffer){for(let Z=0;Z<Q.locationSize;Z++)b(Q.location+Z,ge.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Z=0;Z<Q.locationSize;Z++)M(Q.location+Z);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Z=0;Z<Q.locationSize;Z++)E(Q.location+Z,_e/Q.locationSize,ae,ne,U*Pe,(re+_e/Q.locationSize*Z)*Pe,Y)}else{if(X.isInstancedBufferAttribute){for(let ge=0;ge<Q.locationSize;ge++)b(Q.location+ge,X.meshPerAttribute);D.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ge=0;ge<Q.locationSize;ge++)M(Q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ge=0;ge<Q.locationSize;ge++)E(Q.location+ge,_e/Q.locationSize,ae,ne,_e*Pe,_e/Q.locationSize*ge*Pe,Y)}}else if(K!==void 0){let ne=K[G];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Q.location,ne);break;case 3:i.vertexAttrib3fv(Q.location,ne);break;case 4:i.vertexAttrib4fv(Q.location,ne);break;default:i.vertexAttrib1fv(Q.location,ne)}}}}S()}function w(){z();for(let D in a){let O=a[D];for(let k in O){let B=O[k];for(let J in B)x(B[J].object),delete B[J];delete O[k]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;let O=a[D.id];for(let k in O){let B=O[k];for(let J in B)x(B[J].object),delete B[J];delete O[k]}delete a[D.id]}function N(D){for(let O in a){let k=a[O];if(k[D.id]===void 0)continue;let B=k[D.id];for(let J in B)x(B[J].object),delete B[J];delete k[D.id]}}function z(){V(),h=!0,c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:V,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:M,disableUnusedAttributes:S}}function kx(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,x;if(s)d=i,x="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[x](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let v=0;v<f;v++)x+=u[v];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function zx(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,M=o||e.has("OES_texture_float"),b=_&&M,S=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:S}}function Hx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Mn,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,_=y*4,M=p.clippingState||null;l.value=M,M=h(x,f,_,d);for(let b=0;b!==_;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,x){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,x!==!0||g===null){let p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,M=d;_!==v;++_,M+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Vx(i){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=zs:a===bc&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mc||a===bc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Pc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Gx(i){let e=[],t=[],n=[],s=i,r=i-Ds+1+tf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ds?l=tf[o-i+Ds-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,v=3,g=2,p=1,y=new Float32Array(v*x*d),_=new Float32Array(g*x*d),M=new Float32Array(p*x*d);for(let S=0;S<d;S++){let E=S%3*2/3-1,P=S>2?0:-1,w=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(w,v*x*S),_.set(f,g*x*S);let A=[S,S,S,S,S,S];M.set(A,p*x*S)}let b=new wt;b.setAttribute("position",new Nt(y,v)),b.setAttribute("uv",new Nt(_,g)),b.setAttribute("faceIndex",new Nt(M,p)),e.push(b),s>Ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rf(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wx(i,e,t){let n=new Float32Array(ji),s=new I(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_h(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function of(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function af(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function Xx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mc||l===bc,h=l===zs||l===Hs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ws(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Ws(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yx(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let v=f.morphAttributes[x];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)e.update(f[x],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let v=d[x];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,x=u.attributes.position,v=0;if(d!==null){let y=d.array;v=d.version;for(let _=0,M=y.length;_<M;_+=3){let b=y[_+0],S=y[_+1],E=y[_+2];f.push(b,S,S,E,E,b)}}else if(x!==void 0){let y=x.array;v=x.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let b=_+0,S=_+1,E=_+2;f.push(b,S,S,E,E,b)}}else return;let g=new(Kf(f)?ma:pa)(f,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Zx(i,e,t,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,x){i.drawElements(r,x,a,d*l),t.update(x,r,1)}function u(d,x,v){if(v===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,x,a,d*l,v),t.update(x,r,v)}function f(d,x,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(d[p]/l,x[p]);else{g.multiDrawElementsWEBGL(r,x,0,a,d,0,v);let p=0;for(let y=0;y<v;y++)p+=x[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function $x(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jx(i,e){return i[0]-e[0]}function Jx(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Kx(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=d!==void 0?d.length:0,v=r.get(h);if(v===void 0||v.count!==x){let D=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],E=h.morphAttributes.color||[],P=0;y===!0&&(P=1),_===!0&&(P=2),M===!0&&(P=3);let w=h.attributes.position.count*P,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let N=new Float32Array(w*A*4*x),z=new fa(N,w,A,x);z.type=Mi,z.needsUpdate=!0;let V=P*4;for(let O=0;O<x;O++){let k=b[O],B=S[O],J=E[O],j=w*A*4*O;for(let K=0;K<k.count;K++){let G=K*V;y===!0&&(o.fromBufferAttribute(k,K),N[j+G+0]=o.x,N[j+G+1]=o.y,N[j+G+2]=o.z,N[j+G+3]=0),_===!0&&(o.fromBufferAttribute(B,K),N[j+G+4]=o.x,N[j+G+5]=o.y,N[j+G+6]=o.z,N[j+G+7]=0),M===!0&&(o.fromBufferAttribute(J,K),N[j+G+8]=o.x,N[j+G+9]=o.y,N[j+G+10]=o.z,N[j+G+11]=J.itemSize===4?o.w:1)}}v={count:x,texture:z,size:new le(w,A)},r.set(h,v),h.addEventListener("dispose",D)}let g=0;for(let y=0;y<f.length;y++)g+=f[y];let p=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let d=f===void 0?0:f.length,x=n[h.id];if(x===void 0||x.length!==d){x=[];for(let _=0;_<d;_++)x[_]=[_,0];n[h.id]=x}for(let _=0;_<d;_++){let M=x[_];M[0]=_,M[1]=f[_]}x.sort(Jx);for(let _=0;_<8;_++)_<d&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(jx);let v=h.morphAttributes.position,g=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let M=a[_],b=M[0],S=M[1];b!==Number.MAX_SAFE_INTEGER&&S?(v&&h.getAttribute("morphTarget"+_)!==v[b]&&h.setAttribute("morphTarget"+_,v[b]),g&&h.getAttribute("morphNormal"+_)!==g[b]&&h.setAttribute("morphNormal"+_,g[b]),s[_]=S,p+=S):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Qx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xa(i,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function e_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function s_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;ff.set(n),i.uniformMatrix2fv(this.addr,!1,ff),Gt(t,n)}}function r_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Gt(t,n)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;hf.set(n),i.uniformMatrix4fv(this.addr,!1,hf),Gt(t,n)}}function a_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function u_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?id:nd;t.setTexture2D(e||r,s)}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rd,s)}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||od,s)}function __(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sd,s)}function v_(i){switch(i){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return __}}function y_(i,e){i.uniform1fv(this.addr,e)}function M_(i,e){let t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function b_(i,e){let t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function S_(i,e){let t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function E_(i,e){let t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w_(i,e){let t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T_(i,e){let t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function A_(i,e){i.uniform1iv(this.addr,e)}function R_(i,e){i.uniform2iv(this.addr,e)}function C_(i,e){i.uniform3iv(this.addr,e)}function P_(i,e){i.uniform4iv(this.addr,e)}function I_(i,e){i.uniform1uiv(this.addr,e)}function L_(i,e){i.uniform2uiv(this.addr,e)}function D_(i,e){i.uniform3uiv(this.addr,e)}function U_(i,e){i.uniform4uiv(this.addr,e)}function N_(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||nd,r[o])}function O_(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rd,r[o])}function F_(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||od,r[o])}function B_(i,e,t){let n=this.cache,s=e.length,r=Xa(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sd,r[o])}function k_(i){switch(i){case 5126:return y_;case 35664:return M_;case 35665:return b_;case 35666:return S_;case 35674:return E_;case 35675:return w_;case 35676:return T_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return L_;case 36295:return D_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return B_}}function df(i,e){i.seq.push(e),i.map[e.id]=e}function z_(i,e,t){let n=i.name,s=n.length;for(hc.lastIndex=0;;){let r=hc.exec(n),o=hc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(t,c===void 0?new Ic(a,i,e):new Lc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Dc(a),df(t,u)),t=u}}}function pf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function G_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function W_(i){let e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i),n;switch(e===t?n="":e===oa&&t===ra?n="LinearDisplayP3ToLinearSRGB":e===ra&&t===oa&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case Wa:return[n,"LinearTransferOETF"];case At:case gh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function mf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+G_(i.getShaderSource(e),o)}else return s}function X_(i,e){let t=W_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function q_(i,e){let t;switch(e){case uh:t="Linear";break;case fh:t="Reinhard";break;case dh:t="OptimizedCineon";break;case eo:t="ACESFilmic";break;case ph:t="AgX";break;case im:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function Z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Us).join(`
`)}function $_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Us(i){return i!==""}function gf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Uc(i){return i.replace(J_,Q_)}function Q_(i,e){let t=nt[e];if(t===void 0){let n=K_.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uc(t)}function _f(i){return i.replace(ev,tv)}function tv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ka?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Np?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function iv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:e="ENVMAP_BLENDING_MULTIPLY";break;case tm:e="ENVMAP_BLENDING_MIX";break;case nm:e="ENVMAP_BLENDING_ADD";break}return e}function ov(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function av(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nv(t),c=iv(t),h=sv(t),u=rv(t),f=ov(t),d=t.isWebGL2?"":Y_(t),x=Z_(t),v=$_(r),g=s.createProgram(),p,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Us).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Us).join(`
`),y.length>0&&(y+=`
`)):(p=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),y=[d,vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?nt.tonemapping_pars_fragment:"",t.toneMapping!==Si?q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,X_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),o=Uc(o),o=gf(o,t),o=xf(o,t),a=Uc(a),a=gf(a,t),a=xf(a,t),o=_f(o),a=_f(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=_+p+o,b=_+y+a,S=pf(s,s.VERTEX_SHADER,M),E=pf(s,s.FRAGMENT_SHADER,b);s.attachShader(g,S),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(z){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(S).trim(),O=s.getShaderInfoLog(E).trim(),k=!0,B=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,E);else{let J=mf(s,S,"vertex"),j=mf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+J+`
`+j)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(D===""||O==="")&&(B=!1);B&&(z.diagnostics={runnable:k,programLog:V,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:y}})}s.deleteShader(S),s.deleteShader(E),w=new ks(s,g),A=j_(s,g)}let w;this.getUniforms=function(){return w===void 0&&P(this),w};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,H_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=V_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}function cv(i,e,t,n,s,r,o){let a=new Or,l=new Nc,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function g(w,A,N,z,V){let D=z.fog,O=V.geometry,k=w.isMeshStandardMaterial?z.environment:null,B=(w.isMeshStandardMaterial?t:e).get(w.envMap||k),J=B&&B.mapping===Va?B.image.height:null,j=x[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,G=K!==void 0?K.length:0,Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let X,ne,_e,we;if(j){let ln=Zn[j];X=ln.vertexShader,ne=ln.fragmentShader}else X=w.vertexShader,ne=w.fragmentShader,l.update(w),_e=l.getVertexShaderID(w),we=l.getFragmentShaderID(w);let xe=i.getRenderTarget(),ae=V.isInstancedMesh===!0,Pe=V.isBatchedMesh===!0,Y=!!w.map,ge=!!w.matcap,U=!!B,re=!!w.aoMap,Z=!!w.lightMap,se=!!w.bumpMap,W=!!w.normalMap,Ae=!!w.displacementMap,de=!!w.emissiveMap,C=!!w.metalnessMap,R=!!w.roughnessMap,q=w.anisotropy>0,oe=w.clearcoat>0,he=w.iridescence>0,ce=w.sheen>0,Ue=w.transmission>0,be=q&&!!w.anisotropyMap,Le=oe&&!!w.clearcoatMap,ke=oe&&!!w.clearcoatNormalMap,Ge=oe&&!!w.clearcoatRoughnessMap,ue=he&&!!w.iridescenceMap,$e=he&&!!w.iridescenceThicknessMap,F=ce&&!!w.sheenColorMap,fe=ce&&!!w.sheenRoughnessMap,Te=!!w.specularMap,ve=!!w.specularColorMap,Oe=!!w.specularIntensityMap,je=Ue&&!!w.transmissionMap,Qe=Ue&&!!w.thicknessMap,Ye=!!w.gradientMap,Me=!!w.alphaMap,H=w.alphaTest>0,Se=!!w.alphaHash,Ee=!!w.extensions,Ve=!!O.attributes.uv1,ze=!!O.attributes.uv2,ft=!!O.attributes.uv3,dt=Si;return w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(dt=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:X,fragmentShader:ne,defines:w.defines,customVertexShaderID:_e,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Pe,instancing:ae,instancingColor:ae&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ci,map:Y,matcap:ge,envMap:U,envMapMode:U&&B.mapping,envMapCubeUVHeight:J,aoMap:re,lightMap:Z,bumpMap:se,normalMap:W,displacementMap:f&&Ae,emissiveMap:de,normalMapObjectSpace:W&&w.normalMapType===mm,normalMapTangentSpace:W&&w.normalMapType===Ga,metalnessMap:C,roughnessMap:R,anisotropy:q,anisotropyMap:be,clearcoat:oe,clearcoatMap:Le,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ge,iridescence:he,iridescenceMap:ue,iridescenceThicknessMap:$e,sheen:ce,sheenColorMap:F,sheenRoughnessMap:fe,specularMap:Te,specularColorMap:ve,specularIntensityMap:Oe,transmission:Ue,transmissionMap:je,thicknessMap:Qe,gradientMap:Ye,opaque:w.transparent===!1&&w.blending===Os,alphaMap:Me,alphaTest:H,alphaHash:Se,combine:w.combine,mapUv:Y&&v(w.map.channel),aoMapUv:re&&v(w.aoMap.channel),lightMapUv:Z&&v(w.lightMap.channel),bumpMapUv:se&&v(w.bumpMap.channel),normalMapUv:W&&v(w.normalMap.channel),displacementMapUv:Ae&&v(w.displacementMap.channel),emissiveMapUv:de&&v(w.emissiveMap.channel),metalnessMapUv:C&&v(w.metalnessMap.channel),roughnessMapUv:R&&v(w.roughnessMap.channel),anisotropyMapUv:be&&v(w.anisotropyMap.channel),clearcoatMapUv:Le&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:F&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(w.sheenRoughnessMap.channel),specularMapUv:Te&&v(w.specularMap.channel),specularColorMapUv:ve&&v(w.specularColorMap.channel),specularIntensityMapUv:Oe&&v(w.specularIntensityMap.channel),transmissionMapUv:je&&v(w.transmissionMap.channel),thicknessMapUv:Qe&&v(w.thicknessMap.channel),alphaMapUv:Me&&v(w.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(W||q),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:ze,vertexUv3s:ft,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(Y||Me),fog:!!D,useFog:w.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Y&&w.map.isVideoTexture===!0&&pt.getTransfer(w.map.colorSpace)===xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ut,flipSided:w.side===rn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ee&&w.extensions.derivatives===!0,extensionFragDepth:Ee&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){let A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(let N in w.defines)A.push(N),A.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(y(A,w),_(A,w),A.push(i.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function y(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function _(w,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),w.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),w.push(a.mask)}function M(w){let A=x[w.type],N;if(A){let z=Zn[A];N=Tn.clone(z.uniforms)}else N=w.uniforms;return N}function b(w,A){let N;for(let z=0,V=c.length;z<V;z++){let D=c[z];if(D.cacheKey===A){N=D,++N.usedTimes;break}}return N===void 0&&(N=new av(i,A,w,r),c.push(N)),N}function S(w){if(--w.usedTimes===0){let A=c.indexOf(w);c[A]=c[c.length-1],c.pop(),w.destroy()}}function E(w){l.remove(w)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:P}}function hv(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,x,v,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:v,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,f,d,x,v,g){let p=o(u,f,d,x,v,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,x,v,g){let p=o(u,f,d,x,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||uv),n.length>1&&n.sort(f||yf),s.length>1&&s.sort(f||yf)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function fv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Mf,i.set(n,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Xe};break;case"SpotLight":t={position:new I,direction:new I,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function pv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function gv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xv(i,e){let t=new dv,n=pv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new st,a=new st;function l(h,u){let f=0,d=0,x=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let v=0,g=0,p=0,y=0,_=0,M=0,b=0,S=0,E=0,P=0,w=0;h.sort(gv);let A=u===!0?Math.PI:1;for(let z=0,V=h.length;z<V;z++){let D=h[z],O=D.color,k=D.intensity,B=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=O.r*k*A,d+=O.g*k*A,x+=O.b*k*A;else if(D.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(D.sh.coefficients[j],k);w++}else if(D.isDirectionalLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){let K=D.shadow,G=n.get(D);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,s.directionalShadow[v]=G,s.directionalShadowMap[v]=J,s.directionalShadowMatrix[v]=D.shadow.matrix,M++}s.directional[v]=j,v++}else if(D.isSpotLight){let j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(O).multiplyScalar(k*A),j.distance=B,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,s.spot[p]=j;let K=D.shadow;if(D.map&&(s.spotLightMap[E]=D.map,E++,K.updateMatrices(D),D.castShadow&&P++),s.spotLightMatrix[p]=K.matrix,D.castShadow){let G=n.get(D);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,s.spotShadow[p]=G,s.spotShadowMap[p]=J,S++}p++}else if(D.isRectAreaLight){let j=t.get(D);j.color.copy(O).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=j,y++}else if(D.isPointLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*A),j.distance=D.distance,j.decay=D.decay,D.castShadow){let K=D.shadow,G=n.get(D);G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,s.pointShadow[g]=G,s.pointShadowMap[g]=J,s.pointShadowMatrix[g]=D.shadow.matrix,b++}s.point[g]=j,g++}else if(D.isHemisphereLight){let j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(k*A),j.groundColor.copy(D.groundColor).multiplyScalar(k*A),s.hemi[_]=j,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=x;let N=s.hash;(N.directionalLength!==v||N.pointLength!==g||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==M||N.numPointShadows!==b||N.numSpotShadows!==S||N.numSpotMaps!==E||N.numLightProbes!==w)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=y,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=S+E-P,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=w,N.directionalLength=v,N.pointLength=g,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=M,N.numPointShadows=b,N.numSpotShadows=S,N.numSpotMaps=E,N.numLightProbes=w,s.version=mv++)}function c(h,u){let f=0,d=0,x=0,v=0,g=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let M=h[y];if(M.isDirectionalLight){let b=s.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),f++}else if(M.isSpotLight){let b=s.spot[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),x++}else if(M.isRectAreaLight){let b=s.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let b=s.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=s.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:s}}function bf(i,e){let t=new xv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _v(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new bf(i,e),t.set(r,[l])):o>=a.length?(l=new bf(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}function Mv(i,e,t){let n=new Fr,s=new le,r=new le,o=new _t,a=new Fc({depthPacking:pm}),l=new Bc,c={},h=t.maxTextureSize,u={[Ei]:rn,[rn]:Ei,[Ut]:Ut},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:vv,fragmentShader:yv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new wt;x.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let p=this.type;this.render=function(S,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let w=i.getRenderTarget(),A=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(kt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=p!==oi&&this.type===oi,D=p===oi&&this.type!==oi;for(let O=0,k=S.length;O<k;O++){let B=S[O],J=B.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||V===!0||D===!0){let G=this.type!==oi?{minFilter:Dt,magFilter:Dt}:{};J.map!==null&&J.map.dispose(),J.map=new $t(s.x,s.y,G),J.map.texture.name=B.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let K=J.getViewportCount();for(let G=0;G<K;G++){let Q=J.getViewport(G);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),z.viewport(o),J.updateMatrices(B,G),n=J.getFrustum(),M(E,P,J.camera,B,this.type)}J.isPointLightShadow!==!0&&this.type===oi&&y(J,P),J.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,A,N)};function y(S,E){let P=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $t(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,P,d,v,null)}function _(S,E,P,w){let A=null,N=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)A=N;else if(A=P.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=A.uuid,V=E.uuid,D=c[z];D===void 0&&(D={},c[z]=D);let O=D[V];O===void 0&&(O=A.clone(),D[V]=O,E.addEventListener("dispose",b)),A=O}if(A.visible=E.visible,A.wireframe=E.wireframe,w===oi?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:u[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=i.properties.get(A);z.light=P}return A}function M(S,E,P,w,A){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===oi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let V=e.update(S),D=S.material;if(Array.isArray(D)){let O=V.groups;for(let k=0,B=O.length;k<B;k++){let J=O[k],j=D[J.materialIndex];if(j&&j.visible){let K=_(S,j,w,A);S.onBeforeShadow(i,S,E,P,V,K,J),i.renderBufferDirect(P,null,V,K,S,J),S.onAfterShadow(i,S,E,P,V,K,J)}}}else if(D.visible){let O=_(S,D,w,A);S.onBeforeShadow(i,S,E,P,V,O,null),i.renderBufferDirect(P,null,V,O,S,null),S.onAfterShadow(i,S,E,P,V,O,null)}}let z=S.children;for(let V=0,D=z.length;V<D;V++)M(z[V],E,P,w,A)}function b(S){S.target.removeEventListener("dispose",b);for(let P in c){let w=c[P],A=S.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function bv(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Se=new _t,Ee=null,Ve=new _t(0,0,0,0);return{setMask:function(ze){Ee!==ze&&!H&&(i.colorMask(ze,ze,ze,ze),Ee=ze)},setLocked:function(ze){H=ze},setClear:function(ze,ft,dt,qt,ln){ln===!0&&(ze*=qt,ft*=qt,dt*=qt),Se.set(ze,ft,dt,qt),Ve.equals(Se)===!1&&(i.clearColor(ze,ft,dt,qt),Ve.copy(Se))},reset:function(){H=!1,Ee=null,Ve.set(-1,0,0,0)}}}function r(){let H=!1,Se=null,Ee=null,Ve=null;return{setTest:function(ze){ze?Pe(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(ze){Se!==ze&&!H&&(i.depthMask(ze),Se=ze)},setFunc:function(ze){if(Ee!==ze){switch(ze){case Zp:i.depthFunc(i.NEVER);break;case $p:i.depthFunc(i.ALWAYS);break;case jp:i.depthFunc(i.LESS);break;case ta:i.depthFunc(i.LEQUAL);break;case Jp:i.depthFunc(i.EQUAL);break;case Kp:i.depthFunc(i.GEQUAL);break;case Qp:i.depthFunc(i.GREATER);break;case em:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ze}},setLocked:function(ze){H=ze},setClear:function(ze){Ve!==ze&&(i.clearDepth(ze),Ve=ze)},reset:function(){H=!1,Se=null,Ee=null,Ve=null}}}function o(){let H=!1,Se=null,Ee=null,Ve=null,ze=null,ft=null,dt=null,qt=null,ln=null;return{setTest:function(vt){H||(vt?Pe(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(vt){Se!==vt&&!H&&(i.stencilMask(vt),Se=vt)},setFunc:function(vt,cn,Yn){(Ee!==vt||Ve!==cn||ze!==Yn)&&(i.stencilFunc(vt,cn,Yn),Ee=vt,Ve=cn,ze=Yn)},setOp:function(vt,cn,Yn){(ft!==vt||dt!==cn||qt!==Yn)&&(i.stencilOp(vt,cn,Yn),ft=vt,dt=cn,qt=Yn)},setLocked:function(vt){H=vt},setClear:function(vt){ln!==vt&&(i.clearStencil(vt),ln=vt)},reset:function(){H=!1,Se=null,Ee=null,Ve=null,ze=null,ft=null,dt=null,qt=null,ln=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},x=new WeakMap,v=[],g=null,p=!1,y=null,_=null,M=null,b=null,S=null,E=null,P=null,w=new Xe(0,0,0),A=0,N=!1,z=null,V=null,D=null,O=null,k=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=j>=2);let G=null,Q={},X=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),_e=new _t().fromArray(X),we=new _t().fromArray(ne);function xe(H,Se,Ee,Ve){let ze=new Uint8Array(4),ft=i.createTexture();i.bindTexture(H,ft),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let dt=0;dt<Ee;dt++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Se,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Se+dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return ft}let ae={};ae[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),l.setFunc(ta),de(!1),C(nu),Pe(i.CULL_FACE),W(kt);function Pe(H){f[H]!==!0&&(i.enable(H),f[H]=!0)}function Y(H){f[H]!==!1&&(i.disable(H),f[H]=!1)}function ge(H,Se){return d[H]!==Se?(i.bindFramebuffer(H,Se),d[H]=Se,n&&(H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Se),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Se)),!0):!1}function U(H,Se){let Ee=v,Ve=!1;if(H)if(Ee=x.get(Se),Ee===void 0&&(Ee=[],x.set(Se,Ee)),H.isWebGLMultipleRenderTargets){let ze=H.texture;if(Ee.length!==ze.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,dt=ze.length;ft<dt;ft++)Ee[ft]=i.COLOR_ATTACHMENT0+ft;Ee.length=ze.length,Ve=!0}}else Ee[0]!==i.COLOR_ATTACHMENT0&&(Ee[0]=i.COLOR_ATTACHMENT0,Ve=!0);else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Ve=!0);Ve&&(t.isWebGL2?i.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function re(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let Z={[Un]:i.FUNC_ADD,[Op]:i.FUNC_SUBTRACT,[Fp]:i.FUNC_REVERSE_SUBTRACT};if(n)Z[ru]=i.MIN,Z[ou]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(Z[ru]=H.MIN_EXT,Z[ou]=H.MAX_EXT)}let se={[Js]:i.ZERO,[Bp]:i.ONE,[kp]:i.SRC_COLOR,[vc]:i.SRC_ALPHA,[Gp]:i.SRC_ALPHA_SATURATE,[Ha]:i.DST_COLOR,[za]:i.DST_ALPHA,[zp]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[Vp]:i.ONE_MINUS_DST_COLOR,[Hp]:i.ONE_MINUS_DST_ALPHA,[Wp]:i.CONSTANT_COLOR,[Xp]:i.ONE_MINUS_CONSTANT_COLOR,[qp]:i.CONSTANT_ALPHA,[Yp]:i.ONE_MINUS_CONSTANT_ALPHA};function W(H,Se,Ee,Ve,ze,ft,dt,qt,ln,vt){if(H===kt){p===!0&&(Y(i.BLEND),p=!1);return}if(p===!1&&(Pe(i.BLEND),p=!0),H!==ch){if(H!==y||vt!==N){if((_!==Un||S!==Un)&&(i.blendEquation(i.FUNC_ADD),_=Un,S=Un),vt)switch(H){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ea:i.blendFunc(i.ONE,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ea:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,b=null,E=null,P=null,w.set(0,0,0),A=0,y=H,N=vt}return}ze=ze||Se,ft=ft||Ee,dt=dt||Ve,(Se!==_||ze!==S)&&(i.blendEquationSeparate(Z[Se],Z[ze]),_=Se,S=ze),(Ee!==M||Ve!==b||ft!==E||dt!==P)&&(i.blendFuncSeparate(se[Ee],se[Ve],se[ft],se[dt]),M=Ee,b=Ve,E=ft,P=dt),(qt.equals(w)===!1||ln!==A)&&(i.blendColor(qt.r,qt.g,qt.b,ln),w.copy(qt),A=ln),y=H,N=!1}function Ae(H,Se){H.side===Ut?Y(i.CULL_FACE):Pe(i.CULL_FACE);let Ee=H.side===rn;Se&&(Ee=!Ee),de(Ee),H.blending===Os&&H.transparent===!1?W(kt):W(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Ve=H.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(H){z!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),z=H)}function C(H){H!==Dp?(Pe(i.CULL_FACE),H!==V&&(H===nu?i.cullFace(i.BACK):H===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),V=H}function R(H){H!==D&&(J&&i.lineWidth(H),D=H)}function q(H,Se,Ee){H?(Pe(i.POLYGON_OFFSET_FILL),(O!==Se||k!==Ee)&&(i.polygonOffset(Se,Ee),O=Se,k=Ee)):Y(i.POLYGON_OFFSET_FILL)}function oe(H){H?Pe(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function he(H){H===void 0&&(H=i.TEXTURE0+B-1),G!==H&&(i.activeTexture(H),G=H)}function ce(H,Se,Ee){Ee===void 0&&(G===null?Ee=i.TEXTURE0+B-1:Ee=G);let Ve=Q[Ee];Ve===void 0&&(Ve={type:void 0,texture:void 0},Q[Ee]=Ve),(Ve.type!==H||Ve.texture!==Se)&&(G!==Ee&&(i.activeTexture(Ee),G=Ee),i.bindTexture(H,Se||ae[H]),Ve.type=H,Ve.texture=Se)}function Ue(){let H=Q[G];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function be(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(H){_e.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),_e.copy(H))}function je(H){we.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),we.copy(H))}function Qe(H,Se){let Ee=u.get(Se);Ee===void 0&&(Ee=new WeakMap,u.set(Se,Ee));let Ve=Ee.get(H);Ve===void 0&&(Ve=i.getUniformBlockIndex(Se,H.name),Ee.set(H,Ve))}function Ye(H,Se){let Ve=u.get(Se).get(H);h.get(Se)!==Ve&&(i.uniformBlockBinding(Se,Ve,H.__bindingPointIndex),h.set(Se,Ve))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},G=null,Q={},d={},x=new WeakMap,v=[],g=null,p=!1,y=null,_=null,M=null,b=null,S=null,E=null,P=null,w=new Xe(0,0,0),A=0,N=!1,z=null,V=null,D=null,O=null,k=null,_e.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Y,bindFramebuffer:ge,drawBuffers:U,useProgram:re,setBlending:W,setMaterial:Ae,setFlipSided:de,setCullFace:C,setLineWidth:R,setPolygonOffset:q,setScissorTest:oe,activeTexture:he,bindTexture:ce,unbindTexture:Ue,compressedTexImage2D:be,compressedTexImage3D:Le,texImage2D:Te,texImage3D:ve,updateUBOMapping:Qe,uniformBlockBinding:Ye,texStorage2D:F,texStorage3D:fe,texSubImage2D:ke,texSubImage3D:Ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:$e,scissor:Oe,viewport:je,reset:Me}}function Sv(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,R){return d?new OffscreenCanvas(C,R):ca("canvas")}function v(C,R,q,oe){let he=1;if((C.width>oe||C.height>oe)&&(he=oe/Math.max(C.width,C.height)),he<1||R===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ce=R?la:Math.floor,Ue=ce(he*C.width),be=ce(he*C.height);u===void 0&&(u=x(Ue,be));let Le=q?x(Ue,be):u;return Le.width=Ue,Le.height=be,Le.getContext("2d").drawImage(C,0,0,Ue,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ue+"x"+be+")."),Le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Tc(C.width)&&Tc(C.height)}function p(C){return a?!1:C.wrapS!==bn||C.wrapT!==bn||C.minFilter!==Dt&&C.minFilter!==Dn}function y(C,R){return C.generateMipmaps&&R&&C.minFilter!==Dt&&C.minFilter!==Dn}function _(C){i.generateMipmap(C)}function M(C,R,q,oe,he=!1){if(a===!1)return R;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=R;if(R===i.RED&&(q===i.FLOAT&&(ce=i.R32F),q===i.HALF_FLOAT&&(ce=i.R16F),q===i.UNSIGNED_BYTE&&(ce=i.R8)),R===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ce=i.R8UI),q===i.UNSIGNED_SHORT&&(ce=i.R16UI),q===i.UNSIGNED_INT&&(ce=i.R32UI),q===i.BYTE&&(ce=i.R8I),q===i.SHORT&&(ce=i.R16I),q===i.INT&&(ce=i.R32I)),R===i.RG&&(q===i.FLOAT&&(ce=i.RG32F),q===i.HALF_FLOAT&&(ce=i.RG16F),q===i.UNSIGNED_BYTE&&(ce=i.RG8)),R===i.RGBA){let Ue=he?sa:pt.getTransfer(oe);q===i.FLOAT&&(ce=i.RGBA32F),q===i.HALF_FLOAT&&(ce=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ce=Ue===xt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(C,R,q){return y(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==Dn?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function S(C){return C===Dt||C===au||C===Ol?i.NEAREST:i.LINEAR}function E(C){let R=C.target;R.removeEventListener("dispose",E),w(R),R.isVideoTexture&&h.delete(R)}function P(C){let R=C.target;R.removeEventListener("dispose",P),N(R)}function w(C){let R=n.get(C);if(R.__webglInit===void 0)return;let q=C.source,oe=f.get(q);if(oe){let he=oe[R.__cacheKey];he.usedTimes--,he.usedTimes===0&&A(C),Object.keys(oe).length===0&&f.delete(q)}n.remove(C)}function A(C){let R=n.get(C);i.deleteTexture(R.__webglTexture);let q=C.source,oe=f.get(q);delete oe[R.__cacheKey],o.memory.textures--}function N(C){let R=C.texture,q=n.get(C),oe=n.get(R);if(oe.__webglTexture!==void 0&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(q.__webglFramebuffer[he]))for(let ce=0;ce<q.__webglFramebuffer[he].length;ce++)i.deleteFramebuffer(q.__webglFramebuffer[he][ce]);else i.deleteFramebuffer(q.__webglFramebuffer[he]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[he])}else{if(Array.isArray(q.__webglFramebuffer))for(let he=0;he<q.__webglFramebuffer.length;he++)i.deleteFramebuffer(q.__webglFramebuffer[he]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let he=0;he<q.__webglColorRenderbuffer.length;he++)q.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[he]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let he=0,ce=R.length;he<ce;he++){let Ue=n.get(R[he]);Ue.__webglTexture&&(i.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(R[he])}n.remove(R),n.remove(C)}let z=0;function V(){z=0}function D(){let C=z;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function O(C){let R=[];return R.push(C.wrapS),R.push(C.wrapT),R.push(C.wrapR||0),R.push(C.magFilter),R.push(C.minFilter),R.push(C.anisotropy),R.push(C.internalFormat),R.push(C.format),R.push(C.type),R.push(C.generateMipmaps),R.push(C.premultiplyAlpha),R.push(C.flipY),R.push(C.unpackAlignment),R.push(C.colorSpace),R.join()}function k(C,R){let q=n.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(q,C,R);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+R)}function B(C,R){let q=n.get(C);if(C.version>0&&q.__version!==C.version){_e(q,C,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+R)}function J(C,R){let q=n.get(C);if(C.version>0&&q.__version!==C.version){_e(q,C,R);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+R)}function j(C,R){let q=n.get(C);if(C.version>0&&q.__version!==C.version){we(q,C,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+R)}let K={[Nn]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Sc]:i.MIRRORED_REPEAT},G={[Dt]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Ol]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[sm]:i.LINEAR_MIPMAP_NEAREST,[Nr]:i.LINEAR_MIPMAP_LINEAR},Q={[gm]:i.NEVER,[bm]:i.ALWAYS,[xm]:i.LESS,[jf]:i.LEQUAL,[_m]:i.EQUAL,[Mm]:i.GEQUAL,[vm]:i.GREATER,[ym]:i.NOTEQUAL};function X(C,R,q){if(q?(i.texParameteri(C,i.TEXTURE_WRAP_S,K[R.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,K[R.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,K[R.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,G[R.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,G[R.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(R.wrapS!==bn||R.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,S(R.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,S(R.minFilter)),R.minFilter!==Dt&&R.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Q[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let oe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===Dt||R.minFilter!==Ol&&R.minFilter!==Nr||R.type===Mi&&e.has("OES_texture_float_linear")===!1||a===!1&&R.type===gn&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function ne(C,R){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",E));let oe=R.source,he=f.get(oe);he===void 0&&(he={},f.set(oe,he));let ce=O(R);if(ce!==C.__cacheKey){he[ce]===void 0&&(he[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),he[ce].usedTimes++;let Ue=he[C.__cacheKey];Ue!==void 0&&(he[C.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(R)),C.__cacheKey=ce,C.__webglTexture=he[ce].texture}return q}function _e(C,R,q){let oe=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=i.TEXTURE_3D);let he=ne(C,R),ce=R.source;t.bindTexture(oe,C.__webglTexture,i.TEXTURE0+q);let Ue=n.get(ce);if(ce.version!==Ue.__version||he===!0){t.activeTexture(i.TEXTURE0+q);let be=pt.getPrimaries(pt.workingColorSpace),Le=R.colorSpace===mn?null:pt.getPrimaries(R.colorSpace),ke=R.colorSpace===mn||be===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Ge=p(R)&&g(R.image)===!1,ue=v(R.image,Ge,!1,s.maxTextureSize);ue=de(R,ue);let $e=g(ue)||a,F=r.convert(R.format,R.colorSpace),fe=r.convert(R.type),Te=M(R.internalFormat,F,fe,R.colorSpace,R.isVideoTexture);X(oe,R,$e);let ve,Oe=R.mipmaps,je=a&&R.isVideoTexture!==!0&&Te!==Zf,Qe=Ue.__version===void 0||he===!0,Ye=b(R,ue,$e);if(R.isDepthTexture)Te=i.DEPTH_COMPONENT,a?R.type===Mi?Te=i.DEPTH_COMPONENT32F:R.type===yi?Te=i.DEPTH_COMPONENT24:R.type===li?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:R.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Ji&&Te===i.DEPTH_COMPONENT&&R.type!==mh&&R.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=yi,fe=r.convert(R.type)),R.format===wi&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,R.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=li,fe=r.convert(R.type))),Qe&&(je?t.texStorage2D(i.TEXTURE_2D,1,Te,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Te,ue.width,ue.height,0,F,fe,null));else if(R.isDataTexture)if(Oe.length>0&&$e){je&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,Oe[0].width,Oe[0].height);for(let Me=0,H=Oe.length;Me<H;Me++)ve=Oe[Me],je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ve.width,ve.height,F,fe,ve.data):t.texImage2D(i.TEXTURE_2D,Me,Te,ve.width,ve.height,0,F,fe,ve.data);R.generateMipmaps=!1}else je?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,F,fe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Te,ue.width,ue.height,0,F,fe,ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){je&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,Te,Oe[0].width,Oe[0].height,ue.depth);for(let Me=0,H=Oe.length;Me<H;Me++)ve=Oe[Me],R.format!==Sn?F!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ve.width,ve.height,ue.depth,F,ve.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Te,ve.width,ve.height,ue.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ve.width,ve.height,ue.depth,F,fe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Te,ve.width,ve.height,ue.depth,0,F,fe,ve.data)}else{je&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,Oe[0].width,Oe[0].height);for(let Me=0,H=Oe.length;Me<H;Me++)ve=Oe[Me],R.format!==Sn?F!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,ve.width,ve.height,F,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ve.width,ve.height,F,fe,ve.data):t.texImage2D(i.TEXTURE_2D,Me,Te,ve.width,ve.height,0,F,fe,ve.data)}else if(R.isDataArrayTexture)je?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,Te,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,F,fe,ue.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ue.width,ue.height,ue.depth,0,F,fe,ue.data);else if(R.isData3DTexture)je?(Qe&&t.texStorage3D(i.TEXTURE_3D,Ye,Te,ue.width,ue.height,ue.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,F,fe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ue.width,ue.height,ue.depth,0,F,fe,ue.data);else if(R.isFramebufferTexture){if(Qe)if(je)t.texStorage2D(i.TEXTURE_2D,Ye,Te,ue.width,ue.height);else{let Me=ue.width,H=ue.height;for(let Se=0;Se<Ye;Se++)t.texImage2D(i.TEXTURE_2D,Se,Te,Me,H,0,F,fe,null),Me>>=1,H>>=1}}else if(Oe.length>0&&$e){je&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,Oe[0].width,Oe[0].height);for(let Me=0,H=Oe.length;Me<H;Me++)ve=Oe[Me],je?t.texSubImage2D(i.TEXTURE_2D,Me,0,0,F,fe,ve):t.texImage2D(i.TEXTURE_2D,Me,Te,F,fe,ve);R.generateMipmaps=!1}else je?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ye,Te,ue.width,ue.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,F,fe,ue)):t.texImage2D(i.TEXTURE_2D,0,Te,F,fe,ue);y(R,$e)&&_(oe),Ue.__version=ce.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function we(C,R,q){if(R.image.length!==6)return;let oe=ne(C,R),he=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let ce=n.get(he);if(he.version!==ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let Ue=pt.getPrimaries(pt.workingColorSpace),be=R.colorSpace===mn?null:pt.getPrimaries(R.colorSpace),Le=R.colorSpace===mn||Ue===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ke=R.isCompressedTexture||R.image[0].isCompressedTexture,Ge=R.image[0]&&R.image[0].isDataTexture,ue=[];for(let Me=0;Me<6;Me++)!ke&&!Ge?ue[Me]=v(R.image[Me],!1,!0,s.maxCubemapSize):ue[Me]=Ge?R.image[Me].image:R.image[Me],ue[Me]=de(R,ue[Me]);let $e=ue[0],F=g($e)||a,fe=r.convert(R.format,R.colorSpace),Te=r.convert(R.type),ve=M(R.internalFormat,fe,Te,R.colorSpace),Oe=a&&R.isVideoTexture!==!0,je=ce.__version===void 0||oe===!0,Qe=b(R,$e,F);X(i.TEXTURE_CUBE_MAP,R,F);let Ye;if(ke){Oe&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ve,$e.width,$e.height);for(let Me=0;Me<6;Me++){Ye=ue[Me].mipmaps;for(let H=0;H<Ye.length;H++){let Se=Ye[H];R.format!==Sn?fe!==null?Oe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,0,0,Se.width,Se.height,fe,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,ve,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,0,0,Se.width,Se.height,fe,Te,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H,ve,Se.width,Se.height,0,fe,Te,Se.data)}}}else{Ye=R.mipmaps,Oe&&je&&(Ye.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ve,ue[0].width,ue[0].height));for(let Me=0;Me<6;Me++)if(Ge){Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ue[Me].width,ue[Me].height,fe,Te,ue[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ve,ue[Me].width,ue[Me].height,0,fe,Te,ue[Me].data);for(let H=0;H<Ye.length;H++){let Ee=Ye[H].image[Me].image;Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,0,0,Ee.width,Ee.height,fe,Te,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,ve,Ee.width,Ee.height,0,fe,Te,Ee.data)}}else{Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,fe,Te,ue[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ve,fe,Te,ue[Me]);for(let H=0;H<Ye.length;H++){let Se=Ye[H];Oe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,0,0,fe,Te,Se.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,H+1,ve,fe,Te,Se.image[Me])}}}y(R,F)&&_(i.TEXTURE_CUBE_MAP),ce.__version=he.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function xe(C,R,q,oe,he,ce){let Ue=r.convert(q.format,q.colorSpace),be=r.convert(q.type),Le=M(q.internalFormat,Ue,be,q.colorSpace);if(!n.get(R).__hasExternalTextures){let Ge=Math.max(1,R.width>>ce),ue=Math.max(1,R.height>>ce);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ce,Le,Ge,ue,R.depth,0,Ue,be,null):t.texImage2D(he,ce,Le,Ge,ue,0,Ue,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),W(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,he,n.get(q).__webglTexture,0,se(R)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,he,n.get(q).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(C,R,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),R.depthBuffer&&!R.stencilBuffer){let oe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||W(R)){let he=R.depthTexture;he&&he.isDepthTexture&&(he.type===Mi?oe=i.DEPTH_COMPONENT32F:he.type===yi&&(oe=i.DEPTH_COMPONENT24));let ce=se(R);W(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,oe,R.width,R.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,oe,R.width,R.height)}else i.renderbufferStorage(i.RENDERBUFFER,oe,R.width,R.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(R.depthBuffer&&R.stencilBuffer){let oe=se(R);q&&W(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,R.width,R.height):W(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,i.DEPTH24_STENCIL8,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{let oe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let he=0;he<oe.length;he++){let ce=oe[he],Ue=r.convert(ce.format,ce.colorSpace),be=r.convert(ce.type),Le=M(ce.internalFormat,Ue,be,ce.colorSpace),ke=se(R);q&&W(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Le,R.width,R.height):W(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Le,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Le,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(C,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),k(R.depthTexture,0);let oe=n.get(R.depthTexture).__webglTexture,he=se(R);if(R.depthTexture.format===Ji)W(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(R.depthTexture.format===wi)W(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Y(C){let R=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Pe(R.__webglFramebuffer,C)}else if(q){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]=i.createRenderbuffer(),ae(R.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),ae(R.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(C,R,q){let oe=n.get(C);R!==void 0&&xe(oe.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Y(C)}function U(C){let R=C.texture,q=n.get(C),oe=n.get(R);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=R.version,o.memory.textures++);let he=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,Ue=g(C)||a;if(he){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(a&&R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Le=0;Le<R.mipmaps.length;Le++)q.__webglFramebuffer[be][Le]=i.createFramebuffer()}else q.__webglFramebuffer[be]=i.createFramebuffer()}else{if(a&&R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)q.__webglFramebuffer[be]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let be=C.texture;for(let Le=0,ke=be.length;Le<ke;Le++){let Ge=n.get(be[Le]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&W(C)===!1){let be=ce?R:[R];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Le=0;Le<be.length;Le++){let ke=be[Le];q.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Le]);let Ge=r.convert(ke.format,ke.colorSpace),ue=r.convert(ke.type),$e=M(ke.internalFormat,Ge,ue,ke.colorSpace,C.isXRRenderTarget===!0),F=se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,$e,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,q.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),X(i.TEXTURE_CUBE_MAP,R,Ue);for(let be=0;be<6;be++)if(a&&R.mipmaps&&R.mipmaps.length>0)for(let Le=0;Le<R.mipmaps.length;Le++)xe(q.__webglFramebuffer[be][Le],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le);else xe(q.__webglFramebuffer[be],C,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(R,Ue)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let be=C.texture;for(let Le=0,ke=be.length;Le<ke;Le++){let Ge=be[Le],ue=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),X(i.TEXTURE_2D,Ge,Ue),xe(q.__webglFramebuffer,C,Ge,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),y(Ge,Ue)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?be=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,oe.__webglTexture),X(be,R,Ue),a&&R.mipmaps&&R.mipmaps.length>0)for(let Le=0;Le<R.mipmaps.length;Le++)xe(q.__webglFramebuffer[Le],C,R,i.COLOR_ATTACHMENT0,be,Le);else xe(q.__webglFramebuffer,C,R,i.COLOR_ATTACHMENT0,be,0);y(R,Ue)&&_(be),t.unbindTexture()}C.depthBuffer&&Y(C)}function re(C){let R=g(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let oe=0,he=q.length;oe<he;oe++){let ce=q[oe];if(y(ce,R)){let Ue=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(ce).__webglTexture;t.bindTexture(Ue,be),_(Ue),t.unbindTexture()}}}function Z(C){if(a&&C.samples>0&&W(C)===!1){let R=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,oe=C.height,he=i.COLOR_BUFFER_BIT,ce=[],Ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(C),Le=C.isWebGLMultipleRenderTargets===!0;if(Le)for(let ke=0;ke<R.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ke=0;ke<R.length;ke++){ce.push(i.COLOR_ATTACHMENT0+ke),C.depthBuffer&&ce.push(Ue);let Ge=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(Ge===!1&&(C.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ke]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ue])),Le){let ue=n.get(R[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,q,oe,0,0,q,oe,he,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let ke=0;ke<R.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,be.__webglColorRenderbuffer[ke]);let Ge=n.get(R[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function se(C){return Math.min(s.maxSamples,C.samples)}function W(C){let R=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ae(C){let R=o.render.frame;h.get(C)!==R&&(h.set(C,R),C.update())}function de(C,R){let q=C.colorSpace,oe=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===wc||q!==ci&&q!==mn&&(pt.getTransfer(q)===xt?a===!1?e.has("EXT_sRGB")===!0&&oe===Sn?(C.format=wc,C.minFilter=Dn,C.generateMipmaps=!1):R=ha.sRGBToLinear(R):(oe!==Sn||he!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}this.allocateTextureUnit=D,this.resetTextureUnits=V,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=ge,this.setupRenderTarget=U,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=W}function Ev(i,e,t){let n=t.isWebGL2;function s(r,o=mn){let a,l=pt.getTransfer(o);if(r===jn)return i.UNSIGNED_BYTE;if(r===Gf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===rm)return i.BYTE;if(r===om)return i.SHORT;if(r===mh)return i.UNSIGNED_SHORT;if(r===Vf)return i.INT;if(r===yi)return i.UNSIGNED_INT;if(r===Mi)return i.FLOAT;if(r===gn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===am)return i.ALPHA;if(r===Sn)return i.RGBA;if(r===lm)return i.LUMINANCE;if(r===cm)return i.LUMINANCE_ALPHA;if(r===Ji)return i.DEPTH_COMPONENT;if(r===wi)return i.DEPTH_STENCIL;if(r===wc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===hm)return i.RED;if(r===Xf)return i.RED_INTEGER;if(r===um)return i.RG;if(r===qf)return i.RG_INTEGER;if(r===Yf)return i.RGBA_INTEGER;if(r===Fl||r===Bl||r===kl||r===zl)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===lu||r===cu||r===hu||r===uu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===lu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fu||r===du)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fu)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===du)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pu||r===mu||r===gu||r===xu||r===_u||r===vu||r===yu||r===Mu||r===bu||r===Su||r===Eu||r===wu||r===Tu||r===Au)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_u)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Su)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tu)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Au)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl||r===Ru||r===Cu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Hl)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ru)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===fm||r===Pu||r===Iu||r===Lu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Hl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Iu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===li?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function Tv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ed(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Av(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let M=_.program;n.uniformBlockBinding(y,M)}function c(y,_){let M=s[y.id];M===void 0&&(x(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",g));let b=_.program;n.updateUBOMapping(y,b);let S=e.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let M=i.createBuffer(),b=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=s[y.id],M=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,E=M.length;S<E;S++){let P=Array.isArray(M[S])?M[S]:[M[S]];for(let w=0,A=P.length;w<A;w++){let N=P[w];if(d(N,S,w,b)===!0){let z=N.__offset,V=Array.isArray(N.value)?N.value:[N.value],D=0;for(let O=0;O<V.length;O++){let k=V[O],B=v(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+D,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,D),D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,_,M,b){let S=y.value,E=_+"_"+M;if(b[E]===void 0)return typeof S=="number"||typeof S=="boolean"?b[E]=S:b[E]=S.clone(),!0;{let P=b[E];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return b[E]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function x(y){let _=y.uniforms,M=0,b=16;for(let E=0,P=_.length;E<P;E++){let w=Array.isArray(_[E])?_[E]:[_[E]];for(let A=0,N=w.length;A<N;A++){let z=w[A],V=Array.isArray(z.value)?z.value:[z.value];for(let D=0,O=V.length;D<O;D++){let k=V[D],B=v(k),J=M%b;J!==0&&b-J<B.boundary&&(M+=b-J),z.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=B.storage}}}let S=M%b;return S>0&&(M+=b-S),y.__size=M,y.__cache={},this}function v(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function Wo(i,e,t,n,s,r){Is.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Er.x=r*Is.x-s*Is.y,Er.y=s*Is.x+r*Is.y):Er.copy(Is),i.copy(e),i.x+=Er.x,i.y+=Er.y,i.applyMatrix4(ad)}function vh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function Lf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Cv(i,e){let t=1-i;return t*t*e}function Pv(i,e){return 2*(1-i)*i*e}function Iv(i,e){return i*i*e}function Lr(i,e,t,n){return Cv(i,e)+Pv(i,t)+Iv(i,n)}function Lv(i,e){let t=1-i;return t*t*t*e}function Dv(i,e){let t=1-i;return 3*t*t*i*e}function Uv(i,e){return 3*(1-i)*i*i*e}function Nv(i,e){return i*i*i*e}function Dr(i,e,t,n,s){return Lv(i,e)+Dv(i,t)+Uv(i,n)+Nv(i,s)}function ld(i,e,t,n,s){let r,o;if(s===Kv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Df(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Df(r,i[r],i[r+1],o);return o&&qa(o,o.next)&&(jr(o),o=o.next),o}function es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qa(t,t.next)||St(t.prev,t,t.next)===0)){if(jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&qv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Bv(i,n,s,r):Fv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),jr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=kv(es(i),e,t),Zr(i,e,t,n,s,r,2)):o===2&&zv(i,e,t,n,s,r):Zr(es(i),e,t,n,s,r,1);break}}}function Fv(i){let e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&Ns(s,a,r,l,o,c,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Bv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(St(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,x=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=Yc(d,x,e,t,n),y=Yc(v,g,e,t,n),_=i.prevZ,M=i.nextZ;for(;_&&_.z>=p&&M&&M.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=x&&_.y<=g&&_!==s&&_!==o&&Ns(a,h,l,u,c,f,_.x,_.y)&&St(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&Ns(a,h,l,u,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=x&&_.y<=g&&_!==s&&_!==o&&Ns(a,h,l,u,c,f,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=g&&M!==s&&M!==o&&Ns(a,h,l,u,c,f,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function kv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!qa(s,r)&&cd(s,n,n.next,r)&&$r(s,r)&&$r(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),jr(n),jr(n.next),n=i=r),n=n.next}while(n!==i);return es(n)}function zv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$v(o,a)){let l=hd(o,a);o=es(o,o.next),l=es(l,l.next),Zr(o,e,t,n,s,r,0),Zr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Hv(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ld(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Zv(c));for(s.sort(Vv),r=0;r<s.length;r++)t=Gv(s[r],t);return t}function Vv(i,e){return i.x-e.x}function Gv(i,e){let t=Wv(i,e);if(!t)return e;let n=hd(t,i);return es(n,n.next),es(t,t.next)}function Wv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ns(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),$r(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Xv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Xv(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function qv(i,e,t,n){let s=i;do s.z===0&&(s.z=Yc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Yv(s)}function Yv(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Yc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Zv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ns(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function $v(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jv(i,e)&&($r(i,e)&&$r(e,i)&&Jv(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||qa(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qa(i,e){return i.x===e.x&&i.y===e.y}function cd(i,e,t,n){let s=Ko(St(i,e,t)),r=Ko(St(i,e,n)),o=Ko(St(t,n,i)),a=Ko(St(t,n,e));return!!(s!==r&&o!==a||s===0&&Jo(i,t,e)||r===0&&Jo(i,n,e)||o===0&&Jo(t,i,n)||a===0&&Jo(t,e,n))}function Jo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ko(i){return i>0?1:i<0?-1:0}function jv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function Jv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hd(i,e){let t=new Zc(i.i,i.x,i.y),n=new Zc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Df(i,e,t,n){let s=new Zc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Uf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Nf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function ey(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Qo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ty(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kf(){return(typeof performance>"u"?Date:performance).now()}function zf(i,e){return i.distance-e.distance}function lh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)lh(s[r],e,t,!0)}}var rs,os,Dp,nu,Up,ka,Np,oi,Ei,rn,Ut,kt,Os,ea,iu,su,ch,Un,Op,Fp,ru,ou,Js,Bp,kp,zp,vc,yc,za,Hp,Ha,Vp,Gp,Wp,Xp,qp,Yp,Zp,$p,jp,ta,Jp,Kp,Qp,em,hh,tm,nm,Si,uh,fh,dh,eo,im,ph,Hf,zs,Hs,Mc,bc,Va,Nn,bn,Sc,Dt,au,Ol,Dn,sm,Nr,jn,rm,om,mh,Vf,yi,Mi,gn,Gf,Wf,li,am,Sn,lm,cm,Ji,wi,hm,Xf,um,qf,Yf,Fl,Bl,kl,zl,lu,cu,hu,uu,Zf,fu,du,pu,mu,gu,xu,_u,vu,yu,Mu,bu,Su,Eu,wu,Tu,Au,Hl,Ru,Cu,fm,Pu,Iu,Lu,na,ia,Vl,Du,Uu,Nu,$f,Ki,dm,pm,Ga,mm,mn,At,ci,gh,Wa,sa,xt,ra,oa,fs,Ou,gm,xm,_m,jf,vm,ym,Mm,bm,Ec,Fu,wc,ai,aa,Kn,tn,Bu,Fs,Vs,Jf,le,at,Gl,ku,zu,Hu,yo,Bm,pt,ds,ha,km,ua,zm,En,_t,Ac,$t,fa,Rc,Kt,I,ql,Vu,On,ti,Gn,Mo,ps,ms,gs,mi,gi,Xi,vr,bo,So,qi,Hm,yr,Zl,Ti,ni,$l,Eo,xi,jl,wo,Jl,Qi,st,xs,Wn,Vm,Gm,_i,To,vn,Gu,Wu,da,Or,Wm,Xu,_s,ii,Ao,Mr,Xm,qm,qu,Yu,Zu,Ym,Zm,zt,Xn,si,Kl,ri,vs,ys,$u,Ql,ec,tc,Ro,bi,Qf,vi,Co,Xe,nn,$m,Fn,Rt,Lt,Po,Nt,pa,ma,rt,jm,Ln,ic,Ms,yn,br,Zt,wt,ju,Yi,Io,Ju,bs,Ss,Es,sc,Lo,Do,Uo,No,Ku,Qu,ef,Oo,Fo,De,wn,Tn,Qm,e0,Ct,ga,Bt,ws,Ts,Cc,xa,Pc,rc,t0,n0,Mn,Zi,ko,Fr,Ht,s0,r0,o0,a0,l0,c0,h0,u0,f0,d0,p0,m0,g0,x0,_0,v0,y0,M0,b0,S0,E0,w0,T0,A0,R0,C0,P0,I0,L0,D0,U0,N0,O0,F0,B0,k0,z0,H0,V0,G0,W0,X0,q0,Y0,Z0,$0,j0,J0,K0,Q0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,fg,dg,pg,mg,gg,xg,_g,vg,yg,Mg,bg,Sg,Eg,wg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Og,Fg,Bg,kg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,Zg,$g,jg,Jg,Kg,Qg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,fx,dx,px,mx,gx,xx,_x,vx,yx,Mx,bx,Sx,Ex,wx,Tx,Ax,Rx,Cx,Px,Ix,Lx,Dx,Ux,Nx,Ox,nt,Re,Zn,zo,Ai,Ds,tf,ji,oc,nf,ac,lc,cc,$i,As,sf,Ws,Xs,nd,id,sd,rd,od,lf,cf,hf,uf,ff,Ic,Lc,Dc,hc,ks,H_,V_,J_,K_,ev,lv,Nc,Oc,mv,Fc,Bc,vv,yv,kc,sn,wv,Ir,zc,Br,Hc,qs,_a,hn,kr,zr,Rs,Sr,Cs,Ps,Is,Er,ad,Vo,wr,Go,Sf,uc,Ef,va,Ys,Hr,Ls,wf,Xo,Tf,Rv,Tr,Ar,hi,Vr,Af,Rf,Cf,fc,qo,Vc,Pf,If,ya,Gr,Bn,Wr,Gc,Yo,dc,pc,mc,Xr,Ma,Wc,ba,Xc,Sa,Ea,wa,Ta,qc,Aa,qr,kn,Ri,Zo,$o,gc,jo,Ra,Yr,Ov,Ur,Ca,Qv,Zs,ui,Pa,Ia,Jr,La,ts,Da,Ua,$s,$c,jc,Jc,qn,ns,Kc,Qc,eh,Kr,is,th,nh,ny,ih,js,Na,xc,Of,Ff,Qr,sh,zn,Bf,Rr,_c,rh,Ci,oh,Oa,Fa,yh,iy,Mh,sy,ry,oy,ay,ly,cy,hy,ah,Mt,p1,Ba,ss,fn=Wi(()=>{rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dp=0,nu=1,Up=2,ka=1,Np=2,oi=3,Ei=0,rn=1,Ut=2,kt=0,Os=1,ea=2,iu=3,su=4,ch=5,Un=100,Op=101,Fp=102,ru=103,ou=104,Js=200,Bp=201,kp=202,zp=203,vc=204,yc=205,za=206,Hp=207,Ha=208,Vp=209,Gp=210,Wp=211,Xp=212,qp=213,Yp=214,Zp=0,$p=1,jp=2,ta=3,Jp=4,Kp=5,Qp=6,em=7,hh=0,tm=1,nm=2,Si=0,uh=1,fh=2,dh=3,eo=4,im=5,ph=6,Hf=300,zs=301,Hs=302,Mc=303,bc=304,Va=306,Nn=1e3,bn=1001,Sc=1002,Dt=1003,au=1004,Ol=1005,Dn=1006,sm=1007,Nr=1008,jn=1009,rm=1010,om=1011,mh=1012,Vf=1013,yi=1014,Mi=1015,gn=1016,Gf=1017,Wf=1018,li=1020,am=1021,Sn=1023,lm=1024,cm=1025,Ji=1026,wi=1027,hm=1028,Xf=1029,um=1030,qf=1031,Yf=1033,Fl=33776,Bl=33777,kl=33778,zl=33779,lu=35840,cu=35841,hu=35842,uu=35843,Zf=36196,fu=37492,du=37496,pu=37808,mu=37809,gu=37810,xu=37811,_u=37812,vu=37813,yu=37814,Mu=37815,bu=37816,Su=37817,Eu=37818,wu=37819,Tu=37820,Au=37821,Hl=36492,Ru=36494,Cu=36495,fm=36283,Pu=36284,Iu=36285,Lu=36286,na=2300,ia=2301,Vl=2302,Du=2400,Uu=2401,Nu=2402,$f=3e3,Ki=3001,dm=3200,pm=3201,Ga=0,mm=1,mn="",At="srgb",ci="srgb-linear",gh="display-p3",Wa="display-p3-linear",sa="linear",xt="srgb",ra="rec709",oa="p3",fs=7680,Ou=519,gm=512,xm=513,_m=514,jf=515,vm=516,ym=517,Mm=518,bm=519,Ec=35044,Fu="300 es",wc=1035,ai=2e3,aa=2001,Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=1234567,Fs=Math.PI/180,Vs=180/Math.PI;Jf={DEG2RAD:Fs,RAD2DEG:Vs,generateUUID:Jn,clamp:Ft,euclideanModulo:xh,mapLinear:Sm,inverseLerp:Em,lerp:Cr,damp:wm,pingpong:Tm,smoothstep:Am,smootherstep:Rm,randInt:Cm,randFloat:Pm,randFloatSpread:Im,seededRandom:Lm,degToRad:Dm,radToDeg:Um,isPowerOfTwo:Tc,ceilPowerOfTwo:Nm,floorPowerOfTwo:la,setQuaternionFromProperEuler:Om,normalize:mt,denormalize:$n},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},at=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],v=s[0],g=s[3],p=s[6],y=s[1],_=s[4],M=s[7],b=s[2],S=s[5],E=s[8];return r[0]=o*v+a*y+l*b,r[3]=o*g+a*_+l*S,r[6]=o*p+a*M+l*E,r[1]=c*v+h*y+u*b,r[4]=c*g+h*_+u*S,r[7]=c*p+h*M+u*E,r[2]=f*v+d*y+x*b,r[5]=f*g+d*_+x*S,r[8]=f*p+d*M+x*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,x=t*u+n*f+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gl=new at;ku={};zu=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hu=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[ci]:{transfer:sa,primaries:ra,toReference:i=>i,fromReference:i=>i},[At]:{transfer:xt,primaries:ra,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Wa]:{transfer:sa,primaries:oa,toReference:i=>i.applyMatrix3(Hu),fromReference:i=>i.applyMatrix3(zu)},[gh]:{transfer:xt,primaries:oa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Hu),fromReference:i=>i.applyMatrix3(zu).convertLinearToSRGB()}},Bm=new Set([ci,Wa]),pt={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=yo[e].toReference,s=yo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yo[i].primaries},getTransfer:function(i){return i===mn?sa:yo[i].transfer}};ha=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=ca("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ca("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},km=0,ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xl(s[o].image)):r.push(Xl(s[o]))}else r=Xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};zm=0,En=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bn,s=bn,r=Dn,o=Nr,a=Sn,l=jn,c=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Jn(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ki?At:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?Ki:$f}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?At:mn}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Hf;En.DEFAULT_ANISOTROPY=1;_t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(d+1)/2,b=(p+1)/2,S=(h+f)/4,E=(u+v)/4,P=(x+g)/4;return _>M&&_>b?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=E/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=P/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=E/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-x)*(g-x)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-x)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?At:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends Ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fa=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rc=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],x=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=x,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==x){let g=1-a,p=l*f+c*d+h*x+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let b=Math.sqrt(_),S=Math.atan2(b,p*y);g=Math.sin(g*S)/b,a=Math.sin(a*S)/b}let M=a*y;if(l=l*g+f*M,c=c*g+d*M,h=h*g+x*M,u=u*g+v*M,g===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*d-c*f,e[t+1]=l*x+h*f+c*u-a*d,e[t+2]=c*x+h*d+a*f-l*u,e[t+3]=h*x-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ql=new I,Vu=new Kt,On=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),bo.subVectors(this.max,vr),ps.subVectors(e.a,vr),ms.subVectors(e.b,vr),gs.subVectors(e.c,vr),mi.subVectors(ms,ps),gi.subVectors(gs,ms),Xi.subVectors(ps,gs);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Xi.z,Xi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Xi.z,0,-Xi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Xi.y,Xi.x,0];return!Yl(t,ps,ms,gs,bo)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,ps,ms,gs,bo))?!1:(So.crossVectors(mi,gi),t=[So.x,So.y,So.z],Yl(t,ps,ms,gs,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ti=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,Mo=new On,ps=new I,ms=new I,gs=new I,mi=new I,gi=new I,Xi=new I,vr=new I,bo=new I,So=new I,qi=new I;Hm=new On,yr=new I,Zl=new I,Ti=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Zl)),this.expandByPoint(yr.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new I,$l=new I,Eo=new I,xi=new I,jl=new I,wo=new I,Jl=new I,Qi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$l.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),xi.copy(this.origin).sub($l);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Eo),a=xi.dot(this.direction),l=-xi.dot(Eo),c=xi.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($l).addScaledVector(Eo,f),d}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){jl.subVectors(t,e),wo.subVectors(n,e),Jl.crossVectors(jl,wo);let o=this.direction.dot(Jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,e);let l=a*this.direction.dot(wo.crossVectors(xi,wo));if(l<0)return null;let c=a*this.direction.dot(jl.cross(xi));if(c<0||l+c>o)return null;let h=-a*xi.dot(Jl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,x,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,x,v,g)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,x,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+x*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=x+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,x=c*h,v=c*u;t[0]=f+v*a,t[4]=x*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,x=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,x=a*h,v=a*u;t[0]=l*h,t[4]=x*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=x*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+x,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,d=o*c,x=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-x,t[2]=x*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Gm)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),_i.crossVectors(n,vn),_i.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),_i.crossVectors(n,vn)),_i.normalize(),To.crossVectors(vn,_i),s[0]=_i.x,s[4]=To.x,s[8]=vn.x,s[1]=_i.y,s[5]=To.y,s[9]=vn.y,s[2]=_i.z,s[6]=To.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],v=n[6],g=n[10],p=n[14],y=n[3],_=n[7],M=n[11],b=n[15],S=s[0],E=s[4],P=s[8],w=s[12],A=s[1],N=s[5],z=s[9],V=s[13],D=s[2],O=s[6],k=s[10],B=s[14],J=s[3],j=s[7],K=s[11],G=s[15];return r[0]=o*S+a*A+l*D+c*J,r[4]=o*E+a*N+l*O+c*j,r[8]=o*P+a*z+l*k+c*K,r[12]=o*w+a*V+l*B+c*G,r[1]=h*S+u*A+f*D+d*J,r[5]=h*E+u*N+f*O+d*j,r[9]=h*P+u*z+f*k+d*K,r[13]=h*w+u*V+f*B+d*G,r[2]=x*S+v*A+g*D+p*J,r[6]=x*E+v*N+g*O+p*j,r[10]=x*P+v*z+g*k+p*K,r[14]=x*w+v*V+g*B+p*G,r[3]=y*S+_*A+M*D+b*J,r[7]=y*E+_*N+M*O+b*j,r[11]=y*P+_*z+M*k+b*K,r[15]=y*w+_*V+M*B+b*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],x=e[3],v=e[7],g=e[11],p=e[15];return x*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+v*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],x=e[12],v=e[13],g=e[14],p=e[15],y=u*g*c-v*f*c+v*l*d-a*g*d-u*l*p+a*f*p,_=x*f*c-h*g*c-x*l*d+o*g*d+h*l*p-o*f*p,M=h*v*c-x*u*c+x*a*d-o*v*d-h*a*p+o*u*p,b=x*u*l-h*v*l-x*a*f+o*v*f+h*a*g-o*u*g,S=t*y+n*_+s*M+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return e[0]=y*E,e[1]=(v*f*r-u*g*r-v*s*d+n*g*d+u*s*p-n*f*p)*E,e[2]=(a*g*r-v*l*r+v*s*c-n*g*c-a*s*p+n*l*p)*E,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*E,e[4]=_*E,e[5]=(h*g*r-x*f*r+x*s*d-t*g*d-h*s*p+t*f*p)*E,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*p-t*l*p)*E,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*E,e[8]=M*E,e[9]=(x*u*r-h*v*r-x*n*d+t*v*d+h*n*p-t*u*p)*E,e[10]=(o*v*r-x*a*r+x*n*c-t*v*c-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*E,e[12]=b*E,e[13]=(h*v*s-x*u*s+x*n*f-t*v*f-h*n*g+t*u*g)*E,e[14]=(x*a*s-o*v*s-x*n*l+t*v*l+o*n*g-t*a*g)*E,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,x=r*u,v=o*h,g=o*u,p=a*u,y=l*c,_=l*h,M=l*u,b=n.x,S=n.y,E=n.z;return s[0]=(1-(v+p))*b,s[1]=(d+M)*b,s[2]=(x-_)*b,s[3]=0,s[4]=(d-M)*S,s[5]=(1-(f+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(x+_)*E,s[9]=(g-y)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),a=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let c=1/r,h=1/o,u=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ai){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),d,x;if(a===ai)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===aa)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ai){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,d=(n+s)*h,x,v;if(a===ai)x=(o+r)*u,v=-2*u;else if(a===aa)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xs=new I,Wn=new st,Vm=new I(0,0,0),Gm=new I(1,1,1),_i=new I,To=new I,vn=new I,Gu=new st,Wu=new Kt,da=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};da.DEFAULT_ORDER="XYZ";Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wm=0,Xu=new I,_s=new Kt,ii=new st,Ao=new I,Mr=new I,Xm=new I,qm=new Kt,qu=new I(1,0,0),Yu=new I(0,1,0),Zu=new I(0,0,1),Ym={type:"added"},Zm={type:"removed"},zt=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new da,n=new Kt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new at}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Mr,Ao,this.up):ii.lookAt(Ao,Mr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ii),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};zt.DEFAULT_UP=new I(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xn=new I,si=new I,Kl=new I,ri=new I,vs=new I,ys=new I,$u=new I,Ql=new I,ec=new I,tc=new I,Ro=!1,bi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),si.subVectors(n,t),Kl.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(si),l=Xn.dot(Kl),c=si.dot(si),h=si.dot(Kl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,t,n,s,r,o,a,l){return Ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ro=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),si.subVectors(e,t),Xn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Xn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ro===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ro=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,n),ys.subVectors(r,n),Ql.subVectors(e,n);let l=vs.dot(Ql),c=ys.dot(Ql);if(l<=0&&c<=0)return t.copy(n);ec.subVectors(e,s);let h=vs.dot(ec),u=ys.dot(ec);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vs,o);tc.subVectors(e,r);let d=vs.dot(tc),x=ys.dot(tc);if(x>=0&&d<=x)return t.copy(r);let v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(ys,a);let g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return $u.subVectors(r,s),a=(u-h)/(u-h+(d-x)),t.copy(s).addScaledVector($u,a);let p=1/(g+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Co={h:0,s:0,l:0};Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=xh(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nc(o,r,e+1/3),this.g=nc(o,r,e),this.b=nc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Wl(e.r),this.g=Wl(e.g),this.b=Wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return pt.fromWorkingColorSpace(nn.copy(this),e),Math.round(Ft(nn.r*255,0,255))*65536+Math.round(Ft(nn.g*255,0,255))*256+Math.round(Ft(nn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=At){pt.fromWorkingColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Co);let n=Cr(vi.h,Co.h,t),s=Cr(vi.s,Co.s,t),r=Cr(vi.l,Co.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Xe;Xe.NAMES=Qf;$m=0,Fn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Os,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=yc,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vc&&(n.blendSrc=this.blendSrc),this.blendDst!==yc&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lt=new I,Po=new le,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}},pa=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ma=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},rt=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jm=0,Ln=new st,ic=new zt,Ms=new I,yn=new On,br=new On,Zt=new I,wt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?ma:pa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(yn.min,br.min),yn.expandByPoint(Zt),Zt.addVectors(yn.max,br.max),yn.expandByPoint(Zt)):(yn.expandByPoint(br.min),yn.expandByPoint(br.max))}yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Zt.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(e,c),Zt.add(Ms)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<a;A++)c[A]=new I,h[A]=new I;let u=new I,f=new I,d=new I,x=new le,v=new le,g=new le,p=new I,y=new I;function _(A,N,z){u.fromArray(s,A*3),f.fromArray(s,N*3),d.fromArray(s,z*3),x.fromArray(o,A*2),v.fromArray(o,N*2),g.fromArray(o,z*2),f.sub(u),d.sub(u),v.sub(x),g.sub(x);let V=1/(v.x*g.y-g.x*v.y);isFinite(V)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(V),y.copy(d).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(V),c[A].add(p),c[N].add(p),c[z].add(p),h[A].add(y),h[N].add(y),h[z].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,N=M.length;A<N;++A){let z=M[A],V=z.start,D=z.count;for(let O=V,k=V+D;O<k;O+=3)_(n[O+0],n[O+1],n[O+2])}let b=new I,S=new I,E=new I,P=new I;function w(A){E.fromArray(r,A*3),P.copy(E);let N=c[A];b.copy(N),b.sub(E.multiplyScalar(E.dot(N))).normalize(),S.crossVectors(P,N);let V=S.dot(h[A])<0?-1:1;l[A*4]=b.x,l[A*4+1]=b.y,l[A*4+2]=b.z,l[A*4+3]=V}for(let A=0,N=M.length;A<N;++A){let z=M[A],V=z.start,D=z.count;for(let O=V,k=V+D;O<k;O+=3)w(n[O+0]),w(n[O+1]),w(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let x=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[x++]=c[d++]}return new Nt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ju=new st,Yi=new Qi,Io=new Ti,Ju=new I,bs=new I,Ss=new I,Es=new I,sc=new I,Lo=new I,Do=new le,Uo=new le,No=new le,Ku=new I,Qu=new I,ef=new I,Oo=new I,Fo=new I,De=class extends zt{constructor(e=new wt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sc.fromBufferAttribute(u,e),o?Lo.addScaledVector(sc,h):Lo.addScaledVector(sc.sub(t),h))}t.add(Lo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(Io.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Io,Ju)===null||Yi.origin.distanceToSquared(Ju)>(e.far-e.near)**2))&&(ju.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(ju),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let g=f[x],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,b=_;M<b;M+=3){let S=a.getX(M),E=a.getX(M+1),P=a.getX(M+2);s=Bo(this,p,e,n,c,h,u,S,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=x,p=v;g<p;g+=3){let y=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);s=Bo(this,o,e,n,c,h,u,y,_,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){let g=f[x],p=o[g.materialIndex],y=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,b=_;M<b;M+=3){let S=M,E=M+1,P=M+2;s=Bo(this,p,e,n,c,h,u,S,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=x,p=v;g<p;g+=3){let y=g,_=g+1,M=g+2;s=Bo(this,o,e,n,c,h,u,y,_,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};wn=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function x(v,g,p,y,_,M,b,S,E,P,w){let A=M/E,N=b/P,z=M/2,V=b/2,D=S/2,O=E+1,k=P+1,B=0,J=0,j=new I;for(let K=0;K<k;K++){let G=K*N-V;for(let Q=0;Q<O;Q++){let X=Q*A-z;j[v]=X*y,j[g]=G*_,j[p]=D,c.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[p]=S>0?1:-1,h.push(j.x,j.y,j.z),u.push(Q/E),u.push(1-K/P),B+=1}}for(let K=0;K<P;K++)for(let G=0;G<E;G++){let Q=f+G+O*K,X=f+G+O*(K+1),ne=f+(G+1)+O*(K+1),_e=f+(G+1)+O*K;l.push(Q,X,_e),l.push(X,ne,_e),J+=6}a.addGroup(d,J,w),d+=J,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Tn={clone:Gs,merge:un},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=Km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ga=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bt=class extends ga{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,Ts=1,Cc=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(ws,Ts,e,t);s.layers=this.layers,this.add(s);let r=new Bt(ws,Ts,e,t);r.layers=this.layers,this.add(r);let o=new Bt(ws,Ts,e,t);o.layers=this.layers,this.add(o);let a=new Bt(ws,Ts,e,t);a.layers=this.layers,this.add(a);let l=new Bt(ws,Ts,e,t);l.layers=this.layers,this.add(l);let c=new Bt(ws,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},xa=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pc=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ki?At:mn),this.texture=new xa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:kt});r.uniforms.tEquirect.value=t;let o=new De(s,r),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=Dn),new Cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},rc=new I,t0=new I,n0=new at,Mn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=rc.subVectors(n,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(rc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||n0.getNormalMatrix(e),s=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new Ti,ko=new I,Fr=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],x=s[9],v=s[10],g=s[11],p=s[12],y=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,g-d,M-p).normalize(),n[1].setComponents(l+r,f+c,g+d,M+p).normalize(),n[2].setComponents(l+o,f+h,g+x,M+y).normalize(),n[3].setComponents(l-o,f-h,g-x,M-y).normalize(),n[4].setComponents(l-a,f-u,g-v,M-_).normalize(),t===ai)n[5].setComponents(l+a,f+u,g+v,M+_).normalize();else if(t===aa)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ht=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],x=[],v=[],g=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let M=_*u-r;x.push(M,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,M=y+c*(p+1),b=y+1+c*(p+1),S=y+1+c*p;d.push(_,M,S),d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
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
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`
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
}`,O0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
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
#endif`,ig=`struct PhysicalMaterial {
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
}`,sg=`
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sx=`uniform sampler2D t2D;
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,hx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,fx=`#define DISTANCE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`uniform float scale;
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
}`,gx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,_x=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,yx=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,bx=`#define MATCAP
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
}`,Sx=`#define NORMAL
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
}`,Ex=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Tx=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Px=`#define TOON
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
}`,Ix=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Ux=`uniform vec3 color;
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
}`,Nx=`uniform float rotation;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:s0,alphahash_pars_fragment:r0,alphamap_fragment:o0,alphamap_pars_fragment:a0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:u0,batching_pars_vertex:f0,batching_vertex:d0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:x0,bumpmap_pars_fragment:_0,clipping_planes_fragment:v0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:b0,color_fragment:S0,color_pars_fragment:E0,color_pars_vertex:w0,color_vertex:T0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:I0,emissivemap_fragment:L0,emissivemap_pars_fragment:D0,colorspace_fragment:U0,colorspace_pars_fragment:N0,envmap_fragment:O0,envmap_common_pars_fragment:F0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:J0,envmap_vertex:z0,fog_vertex:H0,fog_pars_vertex:V0,fog_fragment:G0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_fragment:q0,lightmap_pars_fragment:Y0,lights_lambert_fragment:Z0,lights_lambert_pars_fragment:$0,lights_pars_begin:j0,lights_toon_fragment:K0,lights_toon_pars_fragment:Q0,lights_phong_fragment:eg,lights_phong_pars_fragment:tg,lights_physical_fragment:ng,lights_physical_pars_fragment:ig,lights_fragment_begin:sg,lights_fragment_maps:rg,lights_fragment_end:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:fg,map_particle_fragment:dg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphcolor_vertex:xg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:yg,normal_fragment_begin:Mg,normal_fragment_maps:bg,normal_pars_fragment:Sg,normal_pars_vertex:Eg,normal_vertex:wg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Pg,opaque_fragment:Ig,packing:Lg,premultiplied_alpha_fragment:Dg,project_vertex:Ug,dithering_fragment:Ng,dithering_pars_fragment:Og,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:zg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:Wg,skinning_vertex:Xg,skinnormal_vertex:qg,specularmap_fragment:Yg,specularmap_pars_fragment:Zg,tonemapping_fragment:$g,tonemapping_pars_fragment:jg,transmission_fragment:Jg,transmission_pars_fragment:Kg,uv_pars_fragment:Qg,uv_pars_vertex:ex,uv_vertex:tx,worldpos_vertex:nx,background_vert:ix,background_frag:sx,backgroundCube_vert:rx,backgroundCube_frag:ox,cube_vert:ax,cube_frag:lx,depth_vert:cx,depth_frag:hx,distanceRGBA_vert:ux,distanceRGBA_frag:fx,equirect_vert:dx,equirect_frag:px,linedashed_vert:mx,linedashed_frag:gx,meshbasic_vert:xx,meshbasic_frag:_x,meshlambert_vert:vx,meshlambert_frag:yx,meshmatcap_vert:Mx,meshmatcap_frag:bx,meshnormal_vert:Sx,meshnormal_frag:Ex,meshphong_vert:wx,meshphong_frag:Tx,meshphysical_vert:Ax,meshphysical_frag:Rx,meshtoon_vert:Cx,meshtoon_frag:Px,points_vert:Ix,points_frag:Lx,shadow_vert:Dx,shadow_frag:Ux,sprite_vert:Nx,sprite_frag:Ox},Re={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Zn={basic:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:un([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:un([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Xe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:un([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:un([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:un([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:un([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:un([Re.common,Re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:un([Re.lights,Re.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Zn.physical={uniforms:un([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};zo={r:0,b:0,g:0};Ai=class extends ga{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=4,tf=[.125,.215,.35,.446,.526,.582],ji=20,oc=new Ai,nf=new Xe,ac=null,lc=0,cc=0,$i=(1+Math.sqrt(5))/2,As=1/$i,sf=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,$i,As),new I(0,$i,-As),new I(As,0,$i),new I(-As,0,$i),new I($i,As,0),new I(-$i,As,0)],Ws=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,lc,cc),e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:gn,format:Sn,colorSpace:ci,depthBuffer:!1},s=rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gx(r)),this._blurMaterial=Wx(r,e,t)}return s}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,s){let a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(nf),h.toneMapping=Si,h.autoClear=!1;let d=new Rt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new De(new wn,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(nf),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Ho(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zs||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sf[(s-1)%sf.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new De(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ji-1),v=r/x,g=isFinite(r)?1+Math.floor(h*v):ji;g>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ji}`);let p=[],y=0;for(let E=0;E<ji;++E){let P=E/v,w=Math.exp(-P*P/2);p.push(w),E===0?y+=w:E<g&&(y+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;let M=this._sizeLods[s],b=3*M*(s>_-Ds?s-_+Ds:0),S=4*(this._cubeSize-M);Ho(t,b,S,3*M,2*M),l.setRenderTarget(t),l.render(u,oc)}};Xs=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=yi),n===void 0&&h===wi&&(n=li),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nd=new En,id=new Xs(1,1);id.compareFunction=jf;sd=new fa,rd=new Rc,od=new xa,lf=[],cf=[],hf=new Float32Array(16),uf=new Float32Array(9),ff=new Float32Array(4);Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}},Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}},Dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hc=/(\w+)(\])?(\[|\.)?/g;ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);z_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};H_=37297,V_=0;J_=/^[ \t]*#include +<([\w\d./]+)>/gm;K_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;lv=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oc(e),t.set(e,n)),n}},Oc=class{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}};mv=0;Fc=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bc=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
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
}`;kc=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},sn=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wv={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zc=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,v=t.getContextAttributes(),g=null,p=null,y=[],_=[],M=new le,b=null,S=new Bt;S.layers.enable(1),S.viewport=new _t;let E=new Bt;E.layers.enable(2),E.viewport=new _t;let P=[S,E],w=new kc;w.layers.enable(1),w.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=y[X];return ne===void 0&&(ne=new Ir,y[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=y[X];return ne===void 0&&(ne=new Ir,y[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=y[X];return ne===void 0&&(ne=new Ir,y[X]=ne),ne.getHandSpace()};function z(X){let ne=_.indexOf(X.inputSource);if(ne===-1)return;let _e=y[ne];_e!==void 0&&(_e.update(X.inputSource,X.frame,c||o),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){let ne=_[X];ne!==null&&(_[X]=null,y[X].disconnect(ne))}A=null,N=null,e.setRenderTarget(g),d=null,f=null,u=null,s=null,p=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new $t(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ne=null,_e=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=v.stencil?wi:Ji,_e=v.stencil?li:yi);let xe={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new $t(f.textureWidth,f.textureHeight,{format:Sn,type:jn,depthTexture:new Xs(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let ae=e.properties.get(p);ae.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(X){for(let ne=0;ne<X.removed.length;ne++){let _e=X.removed[ne],we=_.indexOf(_e);we>=0&&(_[we]=null,y[we].disconnect(_e))}for(let ne=0;ne<X.added.length;ne++){let _e=X.added[ne],we=_.indexOf(_e);if(we===-1){for(let ae=0;ae<y.length;ae++)if(ae>=_.length){_.push(_e),we=ae;break}else if(_[ae]===null){_[ae]=_e,we=ae;break}if(we===-1)break}let xe=y[we];xe&&xe.connect(_e)}}let O=new I,k=new I;function B(X,ne,_e){O.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(_e.matrixWorld);let we=O.distanceTo(k),xe=ne.projectionMatrix.elements,ae=_e.projectionMatrix.elements,Pe=xe[14]/(xe[10]-1),Y=xe[14]/(xe[10]+1),ge=(xe[9]+1)/xe[5],U=(xe[9]-1)/xe[5],re=(xe[8]-1)/xe[0],Z=(ae[8]+1)/ae[0],se=Pe*re,W=Pe*Z,Ae=we/(-re+Z),de=Ae*-re;ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(de),X.translateZ(Ae),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let C=Pe+Ae,R=Y+Ae,q=se-de,oe=W+(we-de),he=ge*Y/R*C,ce=U*Y/R*C;X.projectionMatrix.makePerspective(q,oe,he,ce,C,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;w.near=E.near=S.near=X.near,w.far=E.far=S.far=X.far,(A!==w.near||N!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,N=w.far);let ne=X.parent,_e=w.cameras;J(w,ne);for(let we=0;we<_e.length;we++)J(_e[we],ne);_e.length===2?B(w,S,E):w.projectionMatrix.copy(S.projectionMatrix),j(X,w,ne)};function j(X,ne,_e){_e===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let K=null;function G(X,ne){if(h=ne.getViewerPose(c||o),x=ne,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let we=!1;_e.length!==w.cameras.length&&(w.cameras.length=0,we=!0);for(let xe=0;xe<_e.length;xe++){let ae=_e[xe],Pe=null;if(d!==null)Pe=d.getViewport(ae);else{let ge=u.getViewSubImage(f,ae);Pe=ge.viewport,xe===0&&(e.setRenderTargetTextures(p,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(p))}let Y=P[xe];Y===void 0&&(Y=new Bt,Y.layers.enable(xe),Y.viewport=new _t,P[xe]=Y),Y.matrix.fromArray(ae.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(ae.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),xe===0&&(w.matrix.copy(Y.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),we===!0&&w.cameras.push(Y)}}for(let _e=0;_e<y.length;_e++){let we=_[_e],xe=y[_e];we!==null&&xe!==void 0&&xe.update(we,ne,c||o)}K&&K(X,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}let Q=new td;Q.setAnimationLoop(G),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}};Br=class{constructor(e={}){let{canvas:t=Fm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),x=new Int32Array(4),v=null,g=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;let _=this,M=!1,b=0,S=0,E=null,P=-1,w=null,A=new _t,N=new _t,z=null,V=new Xe(0),D=0,O=t.width,k=t.height,B=1,J=null,j=null,K=new _t(0,0,O,k),G=new _t(0,0,O,k),Q=!1,X=new Fr,ne=!1,_e=!1,we=null,xe=new st,ae=new le,Pe=new I,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return E===null?B:1}let U=n;function re(L,$){for(let te=0;te<L.length;te++){let ie=L[te],ee=t.getContext(ie,$);if(ee!==null)return ee}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Se,!1),U===null){let $=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&$.shift(),U=re($,L),U===null)throw re($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Z,se,W,Ae,de,C,R,q,oe,he,ce,Ue,be,Le,ke,Ge,ue,$e,F,fe,Te,ve,Oe,je;function Qe(){Z=new qx(U),se=new zx(U,Z,e),Z.init(se),ve=new Ev(U,Z,se),W=new bv(U,Z,se),Ae=new $x(U),de=new hv,C=new Sv(U,Z,W,de,se,ve,Ae),R=new Vx(_),q=new Xx(_),oe=new i0(U,se),Oe=new Bx(U,Z,oe,se),he=new Yx(U,oe,Ae,Oe),ce=new Qx(U,he,oe,Ae),F=new Kx(U,se,C),Ge=new Hx(de),Ue=new cv(_,R,q,Z,se,Oe,Ge),be=new Tv(_,de),Le=new fv,ke=new _v(Z,se),$e=new Fx(_,R,q,W,ce,f,l),ue=new Mv(_,ce,se),je=new Av(U,Ae,se,W),fe=new kx(U,Z,Ae,se),Te=new Zx(U,Z,Ae,se),Ae.programs=Ue.programs,_.capabilities=se,_.extensions=Z,_.properties=de,_.renderLists=Le,_.shadowMap=ue,_.state=W,_.info=Ae}Qe();let Ye=new zc(_,U);this.xr=Ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let L=Z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(O,k,!1))},this.getSize=function(L){return L.set(O,k)},this.setSize=function(L,$,te=!0){if(Ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=L,k=$,t.width=Math.floor(L*B),t.height=Math.floor($*B),te===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(O*B,k*B).floor()},this.setDrawingBufferSize=function(L,$,te){O=L,k=$,B=te,t.width=Math.floor(L*te),t.height=Math.floor($*te),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(K)},this.setViewport=function(L,$,te,ie){L.isVector4?K.set(L.x,L.y,L.z,L.w):K.set(L,$,te,ie),W.viewport(A.copy(K).multiplyScalar(B).floor())},this.getScissor=function(L){return L.copy(G)},this.setScissor=function(L,$,te,ie){L.isVector4?G.set(L.x,L.y,L.z,L.w):G.set(L,$,te,ie),W.scissor(N.copy(G).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(L){W.setScissorTest(Q=L)},this.setOpaqueSort=function(L){J=L},this.setTransparentSort=function(L){j=L},this.getClearColor=function(L){return L.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(L=!0,$=!0,te=!0){let ie=0;if(L){let ee=!1;if(E!==null){let Ne=E.texture.format;ee=Ne===Yf||Ne===qf||Ne===Xf}if(ee){let Ne=E.texture.type,He=Ne===jn||Ne===yi||Ne===mh||Ne===li||Ne===Gf||Ne===Wf,We=$e.getClearColor(),Ze=$e.getClearAlpha(),it=We.r,Ke=We.g,et=We.b;He?(d[0]=it,d[1]=Ke,d[2]=et,d[3]=Ze,U.clearBufferuiv(U.COLOR,0,d)):(x[0]=it,x[1]=Ke,x[2]=et,x[3]=Ze,U.clearBufferiv(U.COLOR,0,x))}else ie|=U.COLOR_BUFFER_BIT}$&&(ie|=U.DEPTH_BUFFER_BIT),te&&(ie|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Le.dispose(),ke.dispose(),de.dispose(),R.dispose(),q.dispose(),ce.dispose(),Oe.dispose(),je.dispose(),Ue.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",ln),Ye.removeEventListener("sessionend",vt),we&&(we.dispose(),we=null),cn.stop()};function Me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=Ae.autoReset,$=ue.enabled,te=ue.autoUpdate,ie=ue.needsUpdate,ee=ue.type;Qe(),Ae.autoReset=L,ue.enabled=$,ue.autoUpdate=te,ue.needsUpdate=ie,ue.type=ee}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ee(L){let $=L.target;$.removeEventListener("dispose",Ee),Ve($)}function Ve(L){ze(L),de.remove(L)}function ze(L){let $=de.get(L).programs;$!==void 0&&($.forEach(function(te){Ue.releaseProgram(te)}),L.isShaderMaterial&&Ue.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,te,ie,ee,Ne){$===null&&($=Y);let He=ee.isMesh&&ee.matrixWorld.determinant()<0,We=Ap(L,$,te,ie,ee);W.setMaterial(ie,He);let Ze=te.index,it=1;if(ie.wireframe===!0){if(Ze=he.getWireframeAttribute(te),Ze===void 0)return;it=2}let Ke=te.drawRange,et=te.attributes.position,Tt=Ke.start*it,_n=(Ke.start+Ke.count)*it;Ne!==null&&(Tt=Math.max(Tt,Ne.start*it),_n=Math.min(_n,(Ne.start+Ne.count)*it)),Ze!==null?(Tt=Math.max(Tt,0),_n=Math.min(_n,Ze.count)):et!=null&&(Tt=Math.max(Tt,0),_n=Math.min(_n,et.count));let Yt=_n-Tt;if(Yt<0||Yt===1/0)return;Oe.setup(ee,ie,We,te,Ze);let ei,bt=fe;if(Ze!==null&&(ei=oe.get(Ze),bt=Te,bt.setIndex(ei)),ee.isMesh)ie.wireframe===!0?(W.setLineWidth(ie.wireframeLinewidth*ge()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(ee.isLine){let ot=ie.linewidth;ot===void 0&&(ot=1),W.setLineWidth(ot*ge()),ee.isLineSegments?bt.setMode(U.LINES):ee.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else ee.isPoints?bt.setMode(U.POINTS):ee.isSprite&&bt.setMode(U.TRIANGLES);if(ee.isBatchedMesh)bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)bt.renderInstances(Tt,Yt,ee.count);else if(te.isInstancedBufferGeometry){let ot=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ll=Math.min(te.instanceCount,ot);bt.renderInstances(Tt,Yt,Ll)}else bt.render(Tt,Yt)};function ft(L,$,te){L.transparent===!0&&L.side===Ut&&L.forceSinglePass===!1?(L.side=rn,L.needsUpdate=!0,vo(L,$,te),L.side=Ei,L.needsUpdate=!0,vo(L,$,te),L.side=Ut):vo(L,$,te)}this.compile=function(L,$,te=null){te===null&&(te=L),g=ke.get(te),g.init(),y.push(g),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),L!==te&&L.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),g.setupLights(_._useLegacyLights);let ie=new Set;return L.traverse(function(ee){let Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){let We=Ne[He];ft(We,te,ee),ie.add(We)}else ft(Ne,te,ee),ie.add(Ne)}),y.pop(),g=null,ie},this.compileAsync=function(L,$,te=null){let ie=this.compile(L,$,te);return new Promise(ee=>{function Ne(){if(ie.forEach(function(He){de.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ee(L);return}setTimeout(Ne,10)}Z.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let dt=null;function qt(L){dt&&dt(L)}function ln(){cn.stop()}function vt(){cn.start()}let cn=new td;cn.setAnimationLoop(qt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(L){dt=L,Ye.setAnimationLoop(L),L===null?cn.stop():cn.start()},Ye.addEventListener("sessionstart",ln),Ye.addEventListener("sessionend",vt),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera($),$=Ye.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,$,E),g=ke.get(L,y.length),g.init(),y.push(g),xe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X.setFromProjectionMatrix(xe),_e=this.localClippingEnabled,ne=Ge.init(this.clippingPlanes,_e),v=Le.get(L,p.length),v.init(),p.push(v),Yn(L,$,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(J,j),this.info.render.frame++,ne===!0&&Ge.beginShadows();let te=g.state.shadowsArray;if(ue.render(te,L,$),ne===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(v,L),g.setupLights(_._useLegacyLights),$.isArrayCamera){let ie=$.cameras;for(let ee=0,Ne=ie.length;ee<Ne;ee++){let He=ie[ee];jh(v,L,He,He.viewport)}}else jh(v,L,$);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),L.isScene===!0&&L.onAfterRender(_,L,$),Oe.resetDefaultState(),P=-1,w=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Yn(L,$,te,ie){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||X.intersectsSprite(L)){ie&&Pe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(xe);let He=ce.update(L),We=L.material;We.visible&&v.push(L,He,We,te,Pe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||X.intersectsObject(L))){let He=ce.update(L),We=L.material;if(ie&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Pe.copy(L.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Pe.copy(He.boundingSphere.center)),Pe.applyMatrix4(L.matrixWorld).applyMatrix4(xe)),Array.isArray(We)){let Ze=He.groups;for(let it=0,Ke=Ze.length;it<Ke;it++){let et=Ze[it],Tt=We[et.materialIndex];Tt&&Tt.visible&&v.push(L,He,Tt,te,Pe.z,et)}}else We.visible&&v.push(L,He,We,te,Pe.z,null)}}let Ne=L.children;for(let He=0,We=Ne.length;He<We;He++)Yn(Ne[He],$,te,ie)}function jh(L,$,te,ie){let ee=L.opaque,Ne=L.transmissive,He=L.transparent;g.setupLightsView(te),ne===!0&&Ge.setGlobalState(_.clippingPlanes,te),Ne.length>0&&Tp(ee,Ne,$,te),ie&&W.viewport(A.copy(ie)),ee.length>0&&_o(ee,$,te),Ne.length>0&&_o(Ne,$,te),He.length>0&&_o(He,$,te),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Tp(L,$,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;let Ne=se.isWebGL2;we===null&&(we=new $t(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?gn:jn,minFilter:Nr,samples:Ne?4:0})),_.getDrawingBufferSize(ae),Ne?we.setSize(ae.x,ae.y):we.setSize(la(ae.x),la(ae.y));let He=_.getRenderTarget();_.setRenderTarget(we),_.getClearColor(V),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();let We=_.toneMapping;_.toneMapping=Si,_o(L,te,ie),C.updateMultisampleRenderTarget(we),C.updateRenderTargetMipmap(we);let Ze=!1;for(let it=0,Ke=$.length;it<Ke;it++){let et=$[it],Tt=et.object,_n=et.geometry,Yt=et.material,ei=et.group;if(Yt.side===Ut&&Tt.layers.test(ie.layers)){let bt=Yt.side;Yt.side=rn,Yt.needsUpdate=!0,Jh(Tt,te,ie,_n,Yt,ei),Yt.side=bt,Yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(C.updateMultisampleRenderTarget(we),C.updateRenderTargetMipmap(we)),_.setRenderTarget(He),_.setClearColor(V,D),_.toneMapping=We}function _o(L,$,te){let ie=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Ne=L.length;ee<Ne;ee++){let He=L[ee],We=He.object,Ze=He.geometry,it=ie===null?He.material:ie,Ke=He.group;We.layers.test(te.layers)&&Jh(We,$,te,Ze,it,Ke)}}function Jh(L,$,te,ie,ee,Ne){L.onBeforeRender(_,$,te,ie,ee,Ne),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(_,$,te,ie,L,Ne),ee.transparent===!0&&ee.side===Ut&&ee.forceSinglePass===!1?(ee.side=rn,ee.needsUpdate=!0,_.renderBufferDirect(te,$,ie,ee,L,Ne),ee.side=Ei,ee.needsUpdate=!0,_.renderBufferDirect(te,$,ie,ee,L,Ne),ee.side=Ut):_.renderBufferDirect(te,$,ie,ee,L,Ne),L.onAfterRender(_,$,te,ie,ee,Ne)}function vo(L,$,te){$.isScene!==!0&&($=Y);let ie=de.get(L),ee=g.state.lights,Ne=g.state.shadowsArray,He=ee.state.version,We=Ue.getParameters(L,ee.state,Ne,$,te),Ze=Ue.getProgramCacheKey(We),it=ie.programs;ie.environment=L.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(L.isMeshStandardMaterial?q:R).get(L.envMap||ie.environment),it===void 0&&(L.addEventListener("dispose",Ee),it=new Map,ie.programs=it);let Ke=it.get(Ze);if(Ke!==void 0){if(ie.currentProgram===Ke&&ie.lightsStateVersion===He)return Qh(L,We),Ke}else We.uniforms=Ue.getUniforms(L),L.onBuild(te,We,_),L.onBeforeCompile(We,_),Ke=Ue.acquireProgram(We,Ze),it.set(Ze,Ke),ie.uniforms=We.uniforms;let et=ie.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(et.clippingPlanes=Ge.uniform),Qh(L,We),ie.needsLights=Cp(L),ie.lightsStateVersion=He,ie.needsLights&&(et.ambientLightColor.value=ee.state.ambient,et.lightProbe.value=ee.state.probe,et.directionalLights.value=ee.state.directional,et.directionalLightShadows.value=ee.state.directionalShadow,et.spotLights.value=ee.state.spot,et.spotLightShadows.value=ee.state.spotShadow,et.rectAreaLights.value=ee.state.rectArea,et.ltc_1.value=ee.state.rectAreaLTC1,et.ltc_2.value=ee.state.rectAreaLTC2,et.pointLights.value=ee.state.point,et.pointLightShadows.value=ee.state.pointShadow,et.hemisphereLights.value=ee.state.hemi,et.directionalShadowMap.value=ee.state.directionalShadowMap,et.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,et.spotShadowMap.value=ee.state.spotShadowMap,et.spotLightMatrix.value=ee.state.spotLightMatrix,et.spotLightMap.value=ee.state.spotLightMap,et.pointShadowMap.value=ee.state.pointShadowMap,et.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=Ke,ie.uniformsList=null,Ke}function Kh(L){if(L.uniformsList===null){let $=L.currentProgram.getUniforms();L.uniformsList=ks.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Qh(L,$){let te=de.get(L);te.outputColorSpace=$.outputColorSpace,te.batching=$.batching,te.instancing=$.instancing,te.instancingColor=$.instancingColor,te.skinning=$.skinning,te.morphTargets=$.morphTargets,te.morphNormals=$.morphNormals,te.morphColors=$.morphColors,te.morphTargetsCount=$.morphTargetsCount,te.numClippingPlanes=$.numClippingPlanes,te.numIntersection=$.numClipIntersection,te.vertexAlphas=$.vertexAlphas,te.vertexTangents=$.vertexTangents,te.toneMapping=$.toneMapping}function Ap(L,$,te,ie,ee){$.isScene!==!0&&($=Y),C.resetTextureUnits();let Ne=$.fog,He=ie.isMeshStandardMaterial?$.environment:null,We=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ci,Ze=(ie.isMeshStandardMaterial?q:R).get(ie.envMap||He),it=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ke=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),et=!!te.morphAttributes.position,Tt=!!te.morphAttributes.normal,_n=!!te.morphAttributes.color,Yt=Si;ie.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Yt=_.toneMapping);let ei=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,bt=ei!==void 0?ei.length:0,ot=de.get(ie),Ll=g.state.lights;if(ne===!0&&(_e===!0||L!==w)){let In=L===w&&ie.id===P;Ge.setState(ie,L,In)}let Et=!1;ie.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Ll.state.version||ot.outputColorSpace!==We||ee.isBatchedMesh&&ot.batching===!1||!ee.isBatchedMesh&&ot.batching===!0||ee.isInstancedMesh&&ot.instancing===!1||!ee.isInstancedMesh&&ot.instancing===!0||ee.isSkinnedMesh&&ot.skinning===!1||!ee.isSkinnedMesh&&ot.skinning===!0||ee.isInstancedMesh&&ot.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ot.instancingColor===!1&&ee.instanceColor!==null||ot.envMap!==Ze||ie.fog===!0&&ot.fog!==Ne||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Ge.numPlanes||ot.numIntersection!==Ge.numIntersection)||ot.vertexAlphas!==it||ot.vertexTangents!==Ke||ot.morphTargets!==et||ot.morphNormals!==Tt||ot.morphColors!==_n||ot.toneMapping!==Yt||se.isWebGL2===!0&&ot.morphTargetsCount!==bt)&&(Et=!0):(Et=!0,ot.__version=ie.version);let Vi=ot.currentProgram;Et===!0&&(Vi=vo(ie,$,ee));let eu=!1,_r=!1,Dl=!1,en=Vi.getUniforms(),Gi=ot.uniforms;if(W.useProgram(Vi.program)&&(eu=!0,_r=!0,Dl=!0),ie.id!==P&&(P=ie.id,_r=!0),eu||w!==L){en.setValue(U,"projectionMatrix",L.projectionMatrix),en.setValue(U,"viewMatrix",L.matrixWorldInverse);let In=en.map.cameraPosition;In!==void 0&&In.setValue(U,Pe.setFromMatrixPosition(L.matrixWorld)),se.logarithmicDepthBuffer&&en.setValue(U,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&en.setValue(U,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,_r=!0,Dl=!0)}if(ee.isSkinnedMesh){en.setOptional(U,ee,"bindMatrix"),en.setOptional(U,ee,"bindMatrixInverse");let In=ee.skeleton;In&&(se.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),en.setValue(U,"boneTexture",In.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ee.isBatchedMesh&&(en.setOptional(U,ee,"batchingTexture"),en.setValue(U,"batchingTexture",ee._matricesTexture,C));let Ul=te.morphAttributes;if((Ul.position!==void 0||Ul.normal!==void 0||Ul.color!==void 0&&se.isWebGL2===!0)&&F.update(ee,te,Vi),(_r||ot.receiveShadow!==ee.receiveShadow)&&(ot.receiveShadow=ee.receiveShadow,en.setValue(U,"receiveShadow",ee.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Gi.envMap.value=Ze,Gi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),_r&&(en.setValue(U,"toneMappingExposure",_.toneMappingExposure),ot.needsLights&&Rp(Gi,Dl),Ne&&ie.fog===!0&&be.refreshFogUniforms(Gi,Ne),be.refreshMaterialUniforms(Gi,ie,B,k,we),ks.upload(U,Kh(ot),Gi,C)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ks.upload(U,Kh(ot),Gi,C),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&en.setValue(U,"center",ee.center),en.setValue(U,"modelViewMatrix",ee.modelViewMatrix),en.setValue(U,"normalMatrix",ee.normalMatrix),en.setValue(U,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let In=ie.uniformsGroups;for(let Nl=0,Pp=In.length;Nl<Pp;Nl++)if(se.isWebGL2){let tu=In[Nl];je.update(tu,Vi),je.bind(tu,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function Rp(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Cp(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(L,$,te){de.get(L.texture).__webglTexture=$,de.get(L.depthTexture).__webglTexture=te;let ie=de.get(L);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){let te=de.get(L);te.__webglFramebuffer=$,te.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,te=0){E=L,b=$,S=te;let ie=!0,ee=null,Ne=!1,He=!1;if(L){let Ze=de.get(L);Ze.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(U.FRAMEBUFFER,null),ie=!1):Ze.__webglFramebuffer===void 0?C.setupRenderTarget(L):Ze.__hasExternalTextures&&C.rebindTextures(L,de.get(L.texture).__webglTexture,de.get(L.depthTexture).__webglTexture);let it=L.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(He=!0);let Ke=de.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ke[$])?ee=Ke[$][te]:ee=Ke[$],Ne=!0):se.isWebGL2&&L.samples>0&&C.useMultisampledRTT(L)===!1?ee=de.get(L).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[te]:ee=Ke,A.copy(L.viewport),N.copy(L.scissor),z=L.scissorTest}else A.copy(K).multiplyScalar(B).floor(),N.copy(G).multiplyScalar(B).floor(),z=Q;if(W.bindFramebuffer(U.FRAMEBUFFER,ee)&&se.drawBuffers&&ie&&W.drawBuffers(L,ee),W.viewport(A),W.scissor(N),W.setScissorTest(z),Ne){let Ze=de.get(L.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ze.__webglTexture,te)}else if(He){let Ze=de.get(L.texture),it=$||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ze.__webglTexture,te||0,it)}P=-1},this.readRenderTargetPixels=function(L,$,te,ie,ee,Ne,He){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){W.bindFramebuffer(U.FRAMEBUFFER,We);try{let Ze=L.texture,it=Ze.format,Ke=Ze.type;if(it!==Sn&&ve.convert(it)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let et=Ke===gn&&(Z.has("EXT_color_buffer_half_float")||se.isWebGL2&&Z.has("EXT_color_buffer_float"));if(Ke!==jn&&ve.convert(Ke)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Mi&&(se.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ie&&te>=0&&te<=L.height-ee&&U.readPixels($,te,ie,ee,ve.convert(it),ve.convert(Ke),Ne)}finally{let Ze=E!==null?de.get(E).__webglFramebuffer:null;W.bindFramebuffer(U.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(L,$,te=0){let ie=Math.pow(2,-te),ee=Math.floor($.image.width*ie),Ne=Math.floor($.image.height*ie);C.setTexture2D($,0),U.copyTexSubImage2D(U.TEXTURE_2D,te,0,0,L.x,L.y,ee,Ne),W.unbindTexture()},this.copyTextureToTexture=function(L,$,te,ie=0){let ee=$.image.width,Ne=$.image.height,He=ve.convert(te.format),We=ve.convert(te.type);C.setTexture2D(te,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,te.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,te.unpackAlignment),$.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,L.x,L.y,ee,Ne,He,We,$.image.data):$.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,He,$.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,ie,L.x,L.y,He,We,$.image),ie===0&&te.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(L,$,te,ie,ee=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ne=L.max.x-L.min.x+1,He=L.max.y-L.min.y+1,We=L.max.z-L.min.z+1,Ze=ve.convert(ie.format),it=ve.convert(ie.type),Ke;if(ie.isData3DTexture)C.setTexture3D(ie,0),Ke=U.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)C.setTexture2DArray(ie,0),Ke=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ie.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,ie.unpackAlignment);let et=U.getParameter(U.UNPACK_ROW_LENGTH),Tt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),_n=U.getParameter(U.UNPACK_SKIP_PIXELS),Yt=U.getParameter(U.UNPACK_SKIP_ROWS),ei=U.getParameter(U.UNPACK_SKIP_IMAGES),bt=te.isCompressedTexture?te.mipmaps[ee]:te.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,L.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,L.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,L.min.z),te.isDataTexture||te.isData3DTexture?U.texSubImage3D(Ke,ee,$.x,$.y,$.z,Ne,He,We,Ze,it,bt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ke,ee,$.x,$.y,$.z,Ne,He,We,Ze,bt.data)):U.texSubImage3D(Ke,ee,$.x,$.y,$.z,Ne,He,We,Ze,it,bt),U.pixelStorei(U.UNPACK_ROW_LENGTH,et),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_n),U.pixelStorei(U.UNPACK_SKIP_ROWS,Yt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ei),ee===0&&ie.generateMipmaps&&U.generateMipmap(Ke),W.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?C.setTextureCube(L,0):L.isData3DTexture?C.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?C.setTexture2DArray(L,0):C.setTexture2D(L,0),W.unbindTexture()},this.resetState=function(){b=0,S=0,E=null,W.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gh?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?Ki:$f}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?At:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Hc=class extends Br{};Hc.prototype.isWebGL1Renderer=!0;qs=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},_a=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new I,kr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zr=class extends Fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr=new I,Cs=new I,Ps=new I,Is=new le,Er=new le,ad=new st,Vo=new I,wr=new I,Go=new I,Sf=new le,uc=new le,Ef=new le,va=class extends zt{constructor(e=new zr){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _a(t,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new kr(n,3,0,!1)),Rs.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Ps.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Wo(Vo.set(-.5,-.5,0),Ps,o,Cs,s,r),Wo(wr.set(.5,-.5,0),Ps,o,Cs,s,r),Wo(Go.set(.5,.5,0),Ps,o,Cs,s,r),Sf.set(0,0),uc.set(1,0),Ef.set(1,1);let a=e.ray.intersectTriangle(Vo,wr,Go,!1,Sr);if(a===null&&(Wo(wr.set(-.5,.5,0),Ps,o,Cs,s,r),uc.set(0,1),a=e.ray.intersectTriangle(Vo,Go,wr,!1,Sr),a===null))return;let l=e.ray.origin.distanceTo(Sr);l<e.near||l>e.far||t.push({distance:l,point:Sr.clone(),uv:bi.getInterpolation(Sr,Vo,wr,Go,Sf,uc,Ef,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ys=class extends En{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dt,h=Dt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hr=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new st,wf=new st,Xo=[],Tf=new On,Rv=new st,Tr=new De,Ar=new Ti,hi=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Tf.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Tf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Ar.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),wf.multiplyMatrices(n,Ls),Tr.matrixWorld=wf,Tr.raycast(e,Xo);for(let o=0,a=Xo.length;o<a;o++){let l=Xo[o];l.instanceId=r,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Vr=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Af=new I,Rf=new I,Cf=new st,fc=new Qi,qo=new Ti,Vc=class extends zt{constructor(e=new wt,t=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Af.fromBufferAttribute(t,s-1),Rf.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Af.distanceTo(Rf);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Cf.copy(s).invert(),fc.copy(e.ray).applyMatrix4(Cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,h=new I,u=new I,f=new I,d=this.isLineSegments?2:1,x=n.index,g=n.attributes.position;if(x!==null){let p=Math.max(0,o.start),y=Math.min(x.count,o.start+o.count);for(let _=p,M=y-1;_<M;_+=d){let b=x.getX(_),S=x.getX(_+1);if(c.fromBufferAttribute(g,b),h.fromBufferAttribute(g,S),fc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=p,M=y-1;_<M;_+=d){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),fc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Pf=new I,If=new I,ya=class extends Vc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pf.fromBufferAttribute(t,s),If.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pf.distanceTo(If);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gr=class extends En{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],o=[],a=new I,l=new st;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wr=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new le,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gc=class extends Wr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Yo=new I,dc=new vh,pc=new vh,mc=new vh,Xr=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Yo.subVectors(s[0],s[1]).add(s[0]),c=Yo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),g<1e-4&&(g=v),dc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,v,g),pc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,v,g),mc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,v,g)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),pc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),mc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(dc.calc(l),pc.calc(l),mc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ma=class extends Bn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wc=class extends Bn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y),Dr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends Bn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xc=class extends Bn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Bn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends Bn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,s.x,r.x,o.x),Lr(e,s.y,r.y,o.y),Lr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Lf(a,l.x,c.x,h.x,u.x),Lf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},Ta=Object.freeze({__proto__:null,ArcCurve:Gc,CatmullRomCurve3:Xr,CubicBezierCurve:Ma,CubicBezierCurve3:Wc,EllipseCurve:Wr,LineCurve:ba,LineCurve3:Xc,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:Ea,SplineCurve:wa}),qc=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}},Aa=class extends qc{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ba(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Sa(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ma(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Wr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qr=class i extends wt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ft(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new I,f=new le,d=new I,x=new I,v=new I,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(x)}for(let y=0;y<=t;y++){let _=n+y*h*s,M=Math.sin(_),b=Math.cos(_);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*b,o.push(u.x,u.y,u.z),f.x=y/t,f.y=S/(e.length-1),a.push(f.x,f.y);let E=l[3*S+0]*M,P=l[3*S+1],w=l[3*S+0]*b;c.push(E,P,w)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let M=_+y*e.length,b=M,S=M+e.length,E=M+e.length+1,P=M+1;r.push(b,S,P),r.push(E,P,S)}this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},kn=class i extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ri=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],x=0,v=[],g=n/2,p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function y(){let M=new I,b=new I,S=0,E=(t-e)/n;for(let P=0;P<=r;P++){let w=[],A=P/r,N=A*(t-e)+e;for(let z=0;z<=s;z++){let V=z/s,D=V*l+a,O=Math.sin(D),k=Math.cos(D);b.x=N*O,b.y=-A*n+g,b.z=N*k,u.push(b.x,b.y,b.z),M.set(O,E,k).normalize(),f.push(M.x,M.y,M.z),d.push(V,1-A),w.push(x++)}v.push(w)}for(let P=0;P<s;P++)for(let w=0;w<r;w++){let A=v[w][P],N=v[w+1][P],z=v[w+1][P+1],V=v[w][P+1];h.push(A,N,V),h.push(N,z,V),S+=6}c.addGroup(p,S,0),p+=S}function _(M){let b=x,S=new le,E=new I,P=0,w=M===!0?e:t,A=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),x++;let N=x;for(let z=0;z<=s;z++){let D=z/s*l+a,O=Math.cos(D),k=Math.sin(D);E.x=w*k,E.y=g*A,E.z=w*O,u.push(E.x,E.y,E.z),f.push(0,A,0),S.x=O*.5+.5,S.y=k*.5*A+.5,d.push(S.x,S.y),x++}for(let z=0;z<s;z++){let V=b+z,D=N+z;M===!0?h.push(D,D+1,V):h.push(D+1,D,V),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zo=new I,$o=new I,gc=new I,jo=new bi,Ra=class extends wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Fs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:v,b:g,c:p}=jo;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),jo.getNormal(gc),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let _=(y+1)%3,M=u[y],b=u[_],S=jo[h[y]],E=jo[h[_]],P=`${M}_${b}`,w=`${b}_${M}`;w in f&&f[w]?(gc.dot(f[w].normal)<=r&&(d.push(S.x,S.y,S.z),d.push(E.x,E.y,E.z)),f[w]=null):P in f||(f[P]={index0:c[y],index1:c[_],normal:gc.clone()})}}for(let x in f)if(f[x]){let{index0:v,index1:g}=f[x];Zo.fromBufferAttribute(a,v),$o.fromBufferAttribute(a,g),d.push(Zo.x,Zo.y,Zo.z),d.push($o.x,$o.y,$o.z)}this.setAttribute("position",new rt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Yr=class extends Aa{constructor(e){super(e),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Aa().fromJSON(s))}return this}},Ov={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ld(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Hv(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Zr(r,o,t,a,l,d,0),o}};Ur=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Uf(e),Nf(n,e);let o=e.length;t.forEach(Uf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Nf(n,t[l]);let a=Ov.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ca=class i extends wt{constructor(e=new Yr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Qv,_,M=!1,b,S,E,P;p&&(_=p.getSpacedPoints(h),M=!0,f=!1,b=p.computeFrenetFrames(h,!1),S=new I,E=new I,P=new I),f||(g=0,d=0,x=0,v=0);let w=a.extractPoints(c),A=w.shape,N=w.holes;if(!Ur.isClockWise(A)){A=A.reverse();for(let U=0,re=N.length;U<re;U++){let Z=N[U];Ur.isClockWise(Z)&&(N[U]=Z.reverse())}}let V=Ur.triangulateShape(A,N),D=A;for(let U=0,re=N.length;U<re;U++){let Z=N[U];A=A.concat(Z)}function O(U,re,Z){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(re,Z)}let k=A.length,B=V.length;function J(U,re,Z){let se,W,Ae,de=U.x-re.x,C=U.y-re.y,R=Z.x-U.x,q=Z.y-U.y,oe=de*de+C*C,he=de*q-C*R;if(Math.abs(he)>Number.EPSILON){let ce=Math.sqrt(oe),Ue=Math.sqrt(R*R+q*q),be=re.x-C/ce,Le=re.y+de/ce,ke=Z.x-q/Ue,Ge=Z.y+R/Ue,ue=((ke-be)*q-(Ge-Le)*R)/(de*q-C*R);se=be+de*ue-U.x,W=Le+C*ue-U.y;let $e=se*se+W*W;if($e<=2)return new le(se,W);Ae=Math.sqrt($e/2)}else{let ce=!1;de>Number.EPSILON?R>Number.EPSILON&&(ce=!0):de<-Number.EPSILON?R<-Number.EPSILON&&(ce=!0):Math.sign(C)===Math.sign(q)&&(ce=!0),ce?(se=-C,W=de,Ae=Math.sqrt(oe)):(se=de,W=C,Ae=Math.sqrt(oe/2))}return new le(se/Ae,W/Ae)}let j=[];for(let U=0,re=D.length,Z=re-1,se=U+1;U<re;U++,Z++,se++)Z===re&&(Z=0),se===re&&(se=0),j[U]=J(D[U],D[Z],D[se]);let K=[],G,Q=j.concat();for(let U=0,re=N.length;U<re;U++){let Z=N[U];G=[];for(let se=0,W=Z.length,Ae=W-1,de=se+1;se<W;se++,Ae++,de++)Ae===W&&(Ae=0),de===W&&(de=0),G[se]=J(Z[se],Z[Ae],Z[de]);K.push(G),Q=Q.concat(G)}for(let U=0;U<g;U++){let re=U/g,Z=d*Math.cos(re*Math.PI/2),se=x*Math.sin(re*Math.PI/2)+v;for(let W=0,Ae=D.length;W<Ae;W++){let de=O(D[W],j[W],se);xe(de.x,de.y,-Z)}for(let W=0,Ae=N.length;W<Ae;W++){let de=N[W];G=K[W];for(let C=0,R=de.length;C<R;C++){let q=O(de[C],G[C],se);xe(q.x,q.y,-Z)}}}let X=x+v;for(let U=0;U<k;U++){let re=f?O(A[U],Q[U],X):A[U];M?(E.copy(b.normals[0]).multiplyScalar(re.x),S.copy(b.binormals[0]).multiplyScalar(re.y),P.copy(_[0]).add(E).add(S),xe(P.x,P.y,P.z)):xe(re.x,re.y,0)}for(let U=1;U<=h;U++)for(let re=0;re<k;re++){let Z=f?O(A[re],Q[re],X):A[re];M?(E.copy(b.normals[U]).multiplyScalar(Z.x),S.copy(b.binormals[U]).multiplyScalar(Z.y),P.copy(_[U]).add(E).add(S),xe(P.x,P.y,P.z)):xe(Z.x,Z.y,u/h*U)}for(let U=g-1;U>=0;U--){let re=U/g,Z=d*Math.cos(re*Math.PI/2),se=x*Math.sin(re*Math.PI/2)+v;for(let W=0,Ae=D.length;W<Ae;W++){let de=O(D[W],j[W],se);xe(de.x,de.y,u+Z)}for(let W=0,Ae=N.length;W<Ae;W++){let de=N[W];G=K[W];for(let C=0,R=de.length;C<R;C++){let q=O(de[C],G[C],se);M?xe(q.x,q.y+_[h-1].y,_[h-1].x+Z):xe(q.x,q.y,u+Z)}}}ne(),_e();function ne(){let U=s.length/3;if(f){let re=0,Z=k*re;for(let se=0;se<B;se++){let W=V[se];ae(W[2]+Z,W[1]+Z,W[0]+Z)}re=h+g*2,Z=k*re;for(let se=0;se<B;se++){let W=V[se];ae(W[0]+Z,W[1]+Z,W[2]+Z)}}else{for(let re=0;re<B;re++){let Z=V[re];ae(Z[2],Z[1],Z[0])}for(let re=0;re<B;re++){let Z=V[re];ae(Z[0]+k*h,Z[1]+k*h,Z[2]+k*h)}}n.addGroup(U,s.length/3-U,0)}function _e(){let U=s.length/3,re=0;we(D,re),re+=D.length;for(let Z=0,se=N.length;Z<se;Z++){let W=N[Z];we(W,re),re+=W.length}n.addGroup(U,s.length/3-U,1)}function we(U,re){let Z=U.length;for(;--Z>=0;){let se=Z,W=Z-1;W<0&&(W=U.length-1);for(let Ae=0,de=h+g*2;Ae<de;Ae++){let C=k*Ae,R=k*(Ae+1),q=re+se+C,oe=re+W+C,he=re+W+R,ce=re+se+R;Pe(q,oe,he,ce)}}}function xe(U,re,Z){l.push(U),l.push(re),l.push(Z)}function ae(U,re,Z){Y(U),Y(re),Y(Z);let se=s.length/3,W=y.generateTopUV(n,s,se-3,se-2,se-1);ge(W[0]),ge(W[1]),ge(W[2])}function Pe(U,re,Z,se){Y(U),Y(re),Y(se),Y(re),Y(Z),Y(se);let W=s.length/3,Ae=y.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);ge(Ae[0]),ge(Ae[1]),ge(Ae[3]),ge(Ae[1]),ge(Ae[2]),ge(Ae[3])}function Y(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function ge(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ey(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ta[s.type]().fromJSON(s)),new i(n,e.options)}},Qv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],x=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-u),new le(f,1-x),new le(v,1-p)]:[new le(a,1-l),new le(h,1-u),new le(d,1-x),new le(g,1-p)]}};Zs=class i extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new I,x=new le;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/t+1)/2,x.y=(d.y/t+1)/2,h.push(x.x,x.y)}u+=f}for(let v=0;v<s;v++){let g=v*(n+1);for(let p=0;p<n;p++){let y=p+g,_=y,M=y+n+1,b=y+n+2,S=y+1;a.push(_,M,S),a.push(M,b,S)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ui=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],x=[],v=[],g=[];for(let p=0;p<=n;p++){let y=[],_=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(S+M,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=h[p][y+1],M=h[p][y],b=h[p+1][y],S=h[p+1][y+1];(p!==0||o>0)&&d.push(_,M,S),(p!==n-1||l<Math.PI)&&d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new rt(x,3)),this.setAttribute("normal",new rt(v,3)),this.setAttribute("uv",new rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Pa=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let v=x/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let v=(s+1)*d+x-1,g=(s+1)*(d-1)+x-1,p=(s+1)*(d-1)+x,y=(s+1)*d+x;o.push(v,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ia=class i extends wt{constructor(e=new Ea(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new le,h=new I,u=[],f=[],d=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function v(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),y(),p()}function g(_){h=e.getPointAt(_/t,h);let M=o.normals[_],b=o.binormals[_];for(let S=0;S<=s;S++){let E=S/s*Math.PI*2,P=Math.sin(E),w=-Math.cos(E);l.x=w*M.x+P*b.x,l.y=w*M.y+P*b.y,l.z=w*M.z+P*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let M=1;M<=s;M++){let b=(s+1)*(_-1)+(M-1),S=(s+1)*_+(M-1),E=(s+1)*_+M,P=(s+1)*(_-1)+M;x.push(b,S,P),x.push(S,E,P)}}function y(){for(let _=0;_<=t;_++)for(let M=0;M<=s;M++)c.x=_/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ta[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Jr=class extends Fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},La=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ts=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Da=class extends Fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ua=class extends Fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};$s=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$c=class extends $s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Du,endingEnd:Du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:r=e,a=2*t-n;break;case Nu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:o=e,l=2*n-t;break;case Nu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),v=x*x,g=v*x,p=-f*g+2*f*v-f*x,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*x+1,_=(-1-d)*g+(1.5+d)*v+.5*x,M=d*g-d*v;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+y*o[c+b]+_*o[l+b]+M*o[u+b];return r}},jc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Jc=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $c(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case ia:t=this.InterpolantFactoryMethodLinear;break;case Vl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return Vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ty(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let v=t[u+x];if(v!==t[f+x]||v!==t[d+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=ia;ns=class extends qn{};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=na;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;Kc=class extends qn{};Kc.prototype.ValueTypeName="color";Qc=class extends qn{};Qc.prototype.ValueTypeName="number";eh=class extends $s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Kr=class extends qn{InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.DefaultInterpolation=ia;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;is=class extends qn{};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=na;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;th=class extends qn{};th.prototype.ValueTypeName="vector";nh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},ny=new nh,ih=class{constructor(e){this.manager=e!==void 0?e:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ih.DEFAULT_MATERIAL_NAME="__DEFAULT";js=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Na=class extends js{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xc=new st,Of=new I,Ff=new I,Qr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Of.setFromMatrixPosition(e.matrixWorld),t.position.copy(Of),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sh=class extends Qr{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},zn=class extends js{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bf=new st,Rr=new I,_c=new I,rh=class extends Qr{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rr),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),Bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf)}},Ci=class extends js{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},oh=class extends Qr{constructor(){super(new Ai(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oa=class extends js{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new oh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=kf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};yh="\\[\\]\\.:\\/",iy=new RegExp("["+yh+"]","g"),Mh="[^"+yh+"]",sy="[^"+yh.replace("\\.","")+"]",ry=/((?:WC+[\/:])*)/.source.replace("WC",Mh),oy=/(WCOD+)?/.source.replace("WCOD",sy),ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),cy=new RegExp("^"+ry+oy+ay+ly+"$"),hy=["material","materials","bones","map"],ah=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iy,"")}static parseTrackName(e){let t=cy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=ah;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];p1=new Float32Array(1),Ba=class{constructor(e,t,n=0,s=1/0){this.ray=new Qi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return lh(e,this,n,t),n.sort(zf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)lh(e[s],this,n,t);return n.sort(zf),n}};ss=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var er,Sh=Wi(()=>{er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var An,dy,Eh,py,Ii,tr=Wi(()=>{fn();An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dy=new Ai(-1,1,1,-1,0,1),Eh=class extends wt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},py=new Eh,Ii=class{constructor(e){this._mesh=new De(py,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});function _d(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=my(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ys(s,e,e);return r.wrapS=Nn,r.wrapT=Nn,r.needsUpdate=!0,r}function my(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var io,so,nl,vd=Wi(()=>{fn();io={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new st},cameraProjectionMatrixInverse:{value:new st},cameraWorldMatrix:{value:new st},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},so={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},nl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`}});function wh(i,e,t){let n=gy(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function gy(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new I(Math.cos(r),Math.sin(r),o))}return n}var ro,yd=Wi(()=>{fn();ro={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:wh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new le},cameraProjectionMatrixInverse:{value:new st},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`}});var il,Md=Wi(()=>{il=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,x=e-f,v=t-d,g,p;x>v?(g=1,p=0):(g=0,p=1);let y=x-g+h,_=v-p+h,M=x-1+2*h,b=v-1+2*h,S=l&255,E=c&255,P=this.perm[S+this.perm[E]]%12,w=this.perm[S+g+this.perm[E+p]]%12,A=this.perm[S+1+this.perm[E+1]]%12,N=.5-x*x-v*v;N<0?n=0:(N*=N,n=N*N*this.dot(this.grad3[P],x,v));let z=.5-y*y-_*_;z<0?s=0:(z*=z,s=z*z*this.dot(this.grad3[w],y,_));let V=.5-M*M-b*b;return V<0?r=0:(V*=V,r=V*V*this.dot(this.grad3[A],M,b)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,x=(h+u+f)*d,v=h-x,g=u-x,p=f-x,y=e-v,_=t-g,M=n-p,b,S,E,P,w,A;y>=_?_>=M?(b=1,S=0,E=0,P=1,w=1,A=0):y>=M?(b=1,S=0,E=0,P=1,w=0,A=1):(b=0,S=0,E=1,P=1,w=0,A=1):_<M?(b=0,S=0,E=1,P=0,w=1,A=1):y<M?(b=0,S=1,E=0,P=0,w=1,A=1):(b=0,S=1,E=0,P=1,w=1,A=0);let N=y-b+d,z=_-S+d,V=M-E+d,D=y-P+2*d,O=_-w+2*d,k=M-A+2*d,B=y-1+3*d,J=_-1+3*d,j=M-1+3*d,K=h&255,G=u&255,Q=f&255,X=this.perm[K+this.perm[G+this.perm[Q]]]%12,ne=this.perm[K+b+this.perm[G+S+this.perm[Q+E]]]%12,_e=this.perm[K+P+this.perm[G+w+this.perm[Q+A]]]%12,we=this.perm[K+1+this.perm[G+1+this.perm[Q+1]]]%12,xe=.6-y*y-_*_-M*M;xe<0?s=0:(xe*=xe,s=xe*xe*this.dot3(this.grad3[X],y,_,M));let ae=.6-N*N-z*z-V*V;ae<0?r=0:(ae*=ae,r=ae*ae*this.dot3(this.grad3[ne],N,z,V));let Pe=.6-D*D-O*O-k*k;Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this.dot3(this.grad3[_e],D,O,k));let Y=.6-B*B-J*J-j*j;return Y<0?a=0:(Y*=Y,a=Y*Y*this.dot3(this.grad3[we],B,J,j)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,x,v=(e+t+n+s)*l,g=Math.floor(e+v),p=Math.floor(t+v),y=Math.floor(n+v),_=Math.floor(s+v),M=(g+p+y+_)*c,b=g-M,S=p-M,E=y-M,P=_-M,w=e-b,A=t-S,N=n-E,z=s-P,V=w>A?32:0,D=w>N?16:0,O=A>N?8:0,k=w>z?4:0,B=A>z?2:0,J=N>z?1:0,j=V+D+O+k+B+J,K=o[j][0]>=3?1:0,G=o[j][1]>=3?1:0,Q=o[j][2]>=3?1:0,X=o[j][3]>=3?1:0,ne=o[j][0]>=2?1:0,_e=o[j][1]>=2?1:0,we=o[j][2]>=2?1:0,xe=o[j][3]>=2?1:0,ae=o[j][0]>=1?1:0,Pe=o[j][1]>=1?1:0,Y=o[j][2]>=1?1:0,ge=o[j][3]>=1?1:0,U=w-K+c,re=A-G+c,Z=N-Q+c,se=z-X+c,W=w-ne+2*c,Ae=A-_e+2*c,de=N-we+2*c,C=z-xe+2*c,R=w-ae+3*c,q=A-Pe+3*c,oe=N-Y+3*c,he=z-ge+3*c,ce=w-1+4*c,Ue=A-1+4*c,be=N-1+4*c,Le=z-1+4*c,ke=g&255,Ge=p&255,ue=y&255,$e=_&255,F=a[ke+a[Ge+a[ue+a[$e]]]]%32,fe=a[ke+K+a[Ge+G+a[ue+Q+a[$e+X]]]]%32,Te=a[ke+ne+a[Ge+_e+a[ue+we+a[$e+xe]]]]%32,ve=a[ke+ae+a[Ge+Pe+a[ue+Y+a[$e+ge]]]]%32,Oe=a[ke+1+a[Ge+1+a[ue+1+a[$e+1]]]]%32,je=.6-w*w-A*A-N*N-z*z;je<0?h=0:(je*=je,h=je*je*this.dot4(r[F],w,A,N,z));let Qe=.6-U*U-re*re-Z*Z-se*se;Qe<0?u=0:(Qe*=Qe,u=Qe*Qe*this.dot4(r[fe],U,re,Z,se));let Ye=.6-W*W-Ae*Ae-de*de-C*C;Ye<0?f=0:(Ye*=Ye,f=Ye*Ye*this.dot4(r[Te],W,Ae,de,C));let Me=.6-R*R-q*q-oe*oe-he*he;Me<0?d=0:(Me*=Me,d=Me*Me*this.dot4(r[ve],R,q,oe,he));let H=.6-ce*ce-Ue*Ue-be*be-Le*Le;return H<0?x=0:(H*=H,x=H*H*this.dot4(r[Oe],ce,Ue,be,Le)),27*(h+u+f+d+x)}}});var bd={};Lp(bd,{GTAOPass:()=>sl});var sl,Sd=Wi(()=>{fn();tr();vd();yd();Sh();Md();sl=class i extends An{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=_d(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new $t(this.width,this.height,{type:gn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ct({defines:Object.assign({},io.defines),uniforms:Tn.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Da,this.normalMaterial.blending=kt,this.pdMaterial=new Ct({defines:Object.assign({},ro.defines),uniforms:Tn.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ct({defines:Object.assign({},so.defines),uniforms:Tn.clone(so.uniforms),vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ct({uniforms:Tn.clone(er.uniforms),vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ha,blendDst:Js,blendEquation:Un,blendSrcAlpha:za,blendDstAlpha:Js,blendEquationAlpha:Un}),this.blendMaterial=new Ct({uniforms:Tn.clone(nl.uniforms),vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ch,blendSrc:Ha,blendDst:Js,blendEquation:Un,blendSrcAlpha:za,blendDstAlpha:Js,blendEquationAlpha:Un}),this.fsQuad=new Ii(null),this.originalClearColor=new Xe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Xs,this.depthTexture.format=wi,this.depthTexture.type=li,this.normalRenderTarget=new $t(this.width,this.height,{minFilter:Dt,magFilter:Dt,type:gn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new il,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ys(s,e,e,Sn,jn);return r.wrapS=Nn,r.wrapT=Nn,r.needsUpdate=!0,r}};sl.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5}});fn();fn();var ud={type:"change"},bh={type:"start"},fd={type:"end"},Ya=new Qi,dd=new Mn,fy=Math.cos(70*Jf.DEG2RAD),Za=class extends Kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",ce),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ce),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ud),n.update(),r=s.NONE},this.update=(function(){let F=new I,fe=new Kt().setFromUnitVectors(e.up,new I(0,1,0)),Te=fe.clone().invert(),ve=new I,Oe=new Kt,je=new I,Qe=2*Math.PI;return function(Me=null){let H=n.object.position;F.copy(H).sub(n.target),F.applyQuaternion(fe),a.setFromVector3(F),n.autoRotate&&r===s.NONE&&N(w(Me)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Se=n.minAzimuthAngle,Ee=n.maxAzimuthAngle;isFinite(Se)&&isFinite(Ee)&&(Se<-Math.PI?Se+=Qe:Se>Math.PI&&(Se-=Qe),Ee<-Math.PI?Ee+=Qe:Ee>Math.PI&&(Ee-=Qe),Se<=Ee?a.theta=Math.max(Se,Math.min(Ee,a.theta)):a.theta=a.theta>(Se+Ee)/2?Math.max(Se,a.theta):Math.min(Ee,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*c),F.setFromSpherical(a),F.applyQuaternion(Te),H.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ve=!1;if(n.zoomToCursor&&S){let ze=null;if(n.object.isPerspectiveCamera){let ft=F.length();ze=j(ft*c);let dt=ft-ze;n.object.position.addScaledVector(M,dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ft=new I(b.x,b.y,0);ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ve=!0;let dt=new I(b.x,b.y,0);dt.unproject(n.object),n.object.position.sub(dt).add(ft),n.object.updateMatrixWorld(),ze=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ze).add(n.object.position):(Ya.origin.copy(n.object.position),Ya.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ya.direction))<fy?e.lookAt(n.target):(dd.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ya.intersectPlane(dd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ve=!0);return c=1,S=!1,Ve||ve.distanceToSquared(n.object.position)>o||8*(1-Oe.dot(n.object.quaternion))>o||je.distanceToSquared(n.target)>0?(n.dispatchEvent(ud),ve.copy(n.object.position),Oe.copy(n.object.quaternion),je.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",de),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",R),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ce),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new ss,l=new ss,c=1,h=new I,u=new le,f=new le,d=new le,x=new le,v=new le,g=new le,p=new le,y=new le,_=new le,M=new I,b=new le,S=!1,E=[],P={};function w(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function A(F){let fe=Math.abs(F)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*fe)}function N(F){l.theta-=F}function z(F){l.phi-=F}let V=(function(){let F=new I;return function(Te,ve){F.setFromMatrixColumn(ve,0),F.multiplyScalar(-Te),h.add(F)}})(),D=(function(){let F=new I;return function(Te,ve){n.screenSpacePanning===!0?F.setFromMatrixColumn(ve,1):(F.setFromMatrixColumn(ve,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(Te),h.add(F)}})(),O=(function(){let F=new I;return function(Te,ve){let Oe=n.domElement;if(n.object.isPerspectiveCamera){let je=n.object.position;F.copy(je).sub(n.target);let Qe=F.length();Qe*=Math.tan(n.object.fov/2*Math.PI/180),V(2*Te*Qe/Oe.clientHeight,n.object.matrix),D(2*ve*Qe/Oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(Te*(n.object.right-n.object.left)/n.object.zoom/Oe.clientWidth,n.object.matrix),D(ve*(n.object.top-n.object.bottom)/n.object.zoom/Oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function k(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(F,fe){if(!n.zoomToCursor)return;S=!0;let Te=n.domElement.getBoundingClientRect(),ve=F-Te.left,Oe=fe-Te.top,je=Te.width,Qe=Te.height;b.x=ve/je*2-1,b.y=-(Oe/Qe)*2+1,M.set(b.x,b.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function K(F){u.set(F.clientX,F.clientY)}function G(F){J(F.clientX,F.clientX),p.set(F.clientX,F.clientY)}function Q(F){x.set(F.clientX,F.clientY)}function X(F){f.set(F.clientX,F.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;N(2*Math.PI*d.x/fe.clientHeight),z(2*Math.PI*d.y/fe.clientHeight),u.copy(f),n.update()}function ne(F){y.set(F.clientX,F.clientY),_.subVectors(y,p),_.y>0?k(A(_.y)):_.y<0&&B(A(_.y)),p.copy(y),n.update()}function _e(F){v.set(F.clientX,F.clientY),g.subVectors(v,x).multiplyScalar(n.panSpeed),O(g.x,g.y),x.copy(v),n.update()}function we(F){J(F.clientX,F.clientY),F.deltaY<0?B(A(F.deltaY)):F.deltaY>0&&k(A(F.deltaY)),n.update()}function xe(F){let fe=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),fe=!0;break}fe&&(F.preventDefault(),n.update())}function ae(F){if(E.length===1)u.set(F.pageX,F.pageY);else{let fe=$e(F),Te=.5*(F.pageX+fe.x),ve=.5*(F.pageY+fe.y);u.set(Te,ve)}}function Pe(F){if(E.length===1)x.set(F.pageX,F.pageY);else{let fe=$e(F),Te=.5*(F.pageX+fe.x),ve=.5*(F.pageY+fe.y);x.set(Te,ve)}}function Y(F){let fe=$e(F),Te=F.pageX-fe.x,ve=F.pageY-fe.y,Oe=Math.sqrt(Te*Te+ve*ve);p.set(0,Oe)}function ge(F){n.enableZoom&&Y(F),n.enablePan&&Pe(F)}function U(F){n.enableZoom&&Y(F),n.enableRotate&&ae(F)}function re(F){if(E.length==1)f.set(F.pageX,F.pageY);else{let Te=$e(F),ve=.5*(F.pageX+Te.x),Oe=.5*(F.pageY+Te.y);f.set(ve,Oe)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);let fe=n.domElement;N(2*Math.PI*d.x/fe.clientHeight),z(2*Math.PI*d.y/fe.clientHeight),u.copy(f)}function Z(F){if(E.length===1)v.set(F.pageX,F.pageY);else{let fe=$e(F),Te=.5*(F.pageX+fe.x),ve=.5*(F.pageY+fe.y);v.set(Te,ve)}g.subVectors(v,x).multiplyScalar(n.panSpeed),O(g.x,g.y),x.copy(v)}function se(F){let fe=$e(F),Te=F.pageX-fe.x,ve=F.pageY-fe.y,Oe=Math.sqrt(Te*Te+ve*ve);y.set(0,Oe),_.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),k(_.y),p.copy(y);let je=(F.pageX+fe.x)*.5,Qe=(F.pageY+fe.y)*.5;J(je,Qe)}function W(F){n.enableZoom&&se(F),n.enablePan&&Z(F)}function Ae(F){n.enableZoom&&se(F),n.enableRotate&&re(F)}function de(F){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",R)),ke(F),F.pointerType==="touch"?Ue(F):q(F))}function C(F){n.enabled!==!1&&(F.pointerType==="touch"?be(F):oe(F))}function R(F){Ge(F),E.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",R)),n.dispatchEvent(fd),r=s.NONE}function q(F){let fe;switch(F.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case rs.DOLLY:if(n.enableZoom===!1)return;G(F),r=s.DOLLY;break;case rs.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;Q(F),r=s.PAN}else{if(n.enableRotate===!1)return;K(F),r=s.ROTATE}break;case rs.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;K(F),r=s.ROTATE}else{if(n.enablePan===!1)return;Q(F),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(bh)}function oe(F){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(F);break;case s.DOLLY:if(n.enableZoom===!1)return;ne(F);break;case s.PAN:if(n.enablePan===!1)return;_e(F);break}}function he(F){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(F.preventDefault(),n.dispatchEvent(bh),we(F),n.dispatchEvent(fd))}function ce(F){n.enabled===!1||n.enablePan===!1||xe(F)}function Ue(F){switch(ue(F),E.length){case 1:switch(n.touches.ONE){case os.ROTATE:if(n.enableRotate===!1)return;ae(F),r=s.TOUCH_ROTATE;break;case os.PAN:if(n.enablePan===!1)return;Pe(F),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(F),r=s.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;U(F),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(bh)}function be(F){switch(ue(F),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;re(F),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Z(F),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(F),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(F),n.update();break;default:r=s.NONE}}function Le(F){n.enabled!==!1&&F.preventDefault()}function ke(F){E.push(F.pointerId)}function Ge(F){delete P[F.pointerId];for(let fe=0;fe<E.length;fe++)if(E[fe]==F.pointerId){E.splice(fe,1);return}}function ue(F){let fe=P[F.pointerId];fe===void 0&&(fe=new le,P[F.pointerId]=fe),fe.set(F.pageX,F.pageY)}function $e(F){let fe=F.pointerId===E[0]?E[1]:E[0];return P[fe]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",de),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}};fn();var $a=class extends qs{constructor(e=null){super();let t=new wn;t.deleteAttribute("uv");let n=new ts({side:rn}),s=new ts,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Ci(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new De(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new De(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new De(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new De(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new De(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new De(t,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new De(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let x=new De(t,Qs(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let v=new De(t,Qs(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let g=new De(t,Qs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let p=new De(t,Qs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let y=new De(t,Qs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new De(t,Qs(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qs(i){let e=new Rt;return e.color.setScalar(i),e}fn();var to=new I;function Hn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;to.copy(e),to[n]=0,to.normalize();let c=.5*o/(o+a),h=1-to.angleTo(i)/l;return Math.sign(to[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ja=class extends wn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,l=new I,c=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,x=new I,v=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:x.set(1,0,0),f[p+0]=Hn(x,l,"z","y",r,n),f[p+1]=1-Hn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[p+0]=1-Hn(x,l,"z","y",r,n),f[p+1]=1-Hn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[p+0]=1-Hn(x,l,"x","z",r,e),f[p+1]=Hn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[p+0]=1-Hn(x,l,"x","z",r,e),f[p+1]=1-Hn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[p+0]=1-Hn(x,l,"x","y",r,e),f[p+1]=1-Hn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[p+0]=Hn(x,l,"x","y",r,e),f[p+1]=1-Hn(x,l,"y","x",r,t);break}}};fn();var Pi=class i extends De{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Bt;let n=this,s=t.color!==void 0?new Xe(t.color):new Xe(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Mn,u=new I,f=new I,d=new I,x=new st,v=new I(0,0,-1),g=new _t,p=new I,y=new I,_=new _t,M=new st,b=this.camera,S=new $t(r,o,{samples:c,type:gn}),E=new Ct({name:l.name!==void 0?l.name:"unspecified",uniforms:Tn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=S.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=M,this.material=E,this.onBeforeRender=function(P,w,A){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(A.matrixWorld),x.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(x),p.subVectors(f,d),p.dot(u)>0)return;p.reflect(u).negate(),p.add(f),x.extractRotation(A.matrixWorld),v.set(0,0,-1),v.applyMatrix4(x),v.add(d),y.subVectors(f,v),y.reflect(u).negate(),y.add(f),b.position.copy(p),b.up.set(0,1,0),b.up.applyMatrix4(x),b.up.reflect(u),b.lookAt(y),b.far=A.far,b.updateMatrixWorld(),b.projectionMatrix.copy(A.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(b.projectionMatrix),M.multiply(b.matrixWorldInverse),M.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(b.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let N=b.projectionMatrix;_.x=(Math.sign(g.x)+N.elements[8])/N.elements[0],_.y=(Math.sign(g.y)+N.elements[9])/N.elements[5],_.z=-1,_.w=(1+N.elements[10])/N.elements[14],g.multiplyScalar(2/g.dot(_)),N.elements[2]=g.x,N.elements[6]=g.y,N.elements[10]=g.z+1-a,N.elements[14]=g.w,n.visible=!1;let z=P.getRenderTarget(),V=P.xr.enabled,D=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(S),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(w,b),P.xr.enabled=V,P.shadowMap.autoUpdate=D,P.setRenderTarget(z);let O=A.viewport;O!==void 0&&P.state.viewport(O),n.visible=!0},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};Pi.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};fn();function md(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new wt,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=pd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);let x=pd(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function pd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;let l=new Nt(o,t,n);return s!==void 0&&(l.gpuType=s),l}function gd(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,_=a.length;y<_;y++){let M=a[y],b=i.attributes[M];l[M]=new Nt(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=i.morphAttributes[M];S&&(c[M]=new Nt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}let d=e*.5,x=Math.log10(1/e),v=Math.pow(10,x),g=d*v;for(let y=0;y<r;y++){let _=n?n.getX(y):y,M="";for(let b=0,S=a.length;b<S;b++){let E=a[b],P=i.getAttribute(E),w=P.itemSize;for(let A=0;A<w;A++)M+=`${~~(P[u[A]](_)*v+g)},`}if(M in t)h.push(t[M]);else{for(let b=0,S=a.length;b<S;b++){let E=a[b],P=i.getAttribute(E),w=i.morphAttributes[E],A=P.itemSize,N=l[E],z=c[E];for(let V=0;V<A;V++){let D=u[V],O=f[V];if(N[O](o,P[D](_)),w)for(let k=0,B=w.length;k<B;k++)z[k][O](o,w[k][D](_))}}t[M]=o,h.push(o),o++}}let p=i.clone();for(let y in i.attributes){let _=l[y];if(p.setAttribute(y,new Nt(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),y in c)for(let M=0;M<c[y].length;M++){let b=c[y][M];p.morphAttributes[y][M]=new Nt(b.array.slice(0,o*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}fn();Sh();fn();tr();var Ja=class extends An{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tn.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};tr();var no=class extends An{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ka=class extends An{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Qa=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ja(er),this.copyPass.material.blending=kt,this.clock=new Fa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}no!==void 0&&(o instanceof no?n=!0:o instanceof Ka&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};fn();tr();var el=class extends An{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};fn();tr();var xd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var tl=class extends An{constructor(){super();let e=xd;this.uniforms=Tn.clone(e.uniforms),this.material=new La({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===dh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ph&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ph=null;try{({GTAOPass:Ph}=await Promise.resolve().then(()=>(Sd(),bd)))}catch(i){console.warn("GTAO unavailable",i)}performance.mark("k-start");var Od=JSON.parse(document.getElementById("units-data").textContent),ar=JSON.parse(document.getElementById("style-data").textContent),Tl=Object.fromEntries(Od.map(i=>[i.id,i])),zi=document.getElementById("stage"),Fd=3,di=3.2,pi=8,Ce=i=>i/100-di/2,Ie=i=>i/100-pi/2,po=(location.hash||"").replace("#","").split("-").filter(Boolean),fr=po.includes("render"),Vn=window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(hover: none)").matches,ct=new Br({antialias:!0,preserveDrawingBuffer:fr,powerPreference:"high-performance"}),jt=Vn||po.includes("lite"),fl=Math.min(window.devicePixelRatio||1,jt?1.25:1.5),Ed=jt?.7:.9;ct.setPixelRatio(jt||fr?fl:Math.min(fl,1.25));ct.outputColorSpace=At;ct.toneMapping=eo;ct.shadowMap.enabled=!0;ct.shadowMap.type=ka;ct.shadowMap.autoUpdate=!1;var lr=!0,dl=!0;zi.appendChild(ct.domElement);var Bd=Math.min(8,ct.capabilities.getMaxAnisotropy()),an=new qs,xy=new Ws(ct);an.environment=xy.fromScene(new $a(ct),.04).texture;var ye=new sn;an.add(ye);function Jt(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var _y=i=>i.getContext("2d",{willReadFrequently:!0});function Ot(i,e,t,n,s,r=!0){let o=document.createElement("canvas");o.width=i,o.height=e;let a=_y(o);s(a,i,e);let l=new Gr(o);return l.wrapS=l.wrapT=Nn,l.repeat.set(1/t,1/n),l.colorSpace=r?At:mn,l.anisotropy=Bd,l}function xn(i,e,t,n,s){let r=Jt(s),o=i.getImageData(0,0,e,t),a=o.data;for(let l=0;l<a.length;l+=4){let c=(r()-.5)*n;for(let h=0;h<3;h++)a[l+h]=Math.max(0,Math.min(255,a[l+h]+c))}i.putImageData(o,0,0)}function Bh(i,e,t,n,s,r){let o=Jt(n);for(let a=0;a<s;a++){let l=o()*e,c=o()*t,h=(.08+o()*.25)*e,u=o()<.5,f=r*(.3+o()*.7);for(let d of[-e,0,e])for(let x of[-t,0,t]){let v=i.createRadialGradient(l+d,c+x,0,l+d,c+x,h);v.addColorStop(0,u?`rgba(70,60,50,${f})`:`rgba(255,255,255,${f})`),v.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=v,i.fillRect(l+d-h,c+x-h,h*2,h*2)}}}var pe={};pe.planks=Ot(1024,1024,1.2,1.2,(i,e,t)=>{let n=Jt(7),s=6,r=e/s;for(let o=0;o<s;o++){let a=-n()*t,l;for(;a<t;){l=t*(.55+n()*.6);let c=226+n()*26;i.fillStyle=`rgb(${c},${c},${c})`,i.fillRect(o*r,a,r,l);for(let h=0;h<52;h++){let u=o*r+n()*r;i.strokeStyle=`rgba(50,32,16,${.03+n()*.06})`,i.lineWidth=.6+n()*1.8,i.beginPath(),i.moveTo(u,a),i.bezierCurveTo(u+(n()-.5)*10,a+l*.33,u+(n()-.5)*10,a+l*.66,u+(n()-.5)*6,a+l),i.stroke()}i.fillStyle="rgba(30,20,10,.3)",i.fillRect(o*r,a,r,2),a+=l}i.fillStyle="rgba(30,20,10,.45)",i.fillRect(o*r,0,2,t)}xn(i,e,t,10,3)});pe.veneer=Ot(512,512,.6,.6,(i,e,t)=>{let n=Jt(11);i.fillStyle="rgb(236,236,236)",i.fillRect(0,0,e,t);for(let s=0;s<150;s++){let r=n()*e;i.strokeStyle=`rgba(40,30,20,${.03+n()*.08})`,i.lineWidth=.5+n()*2,i.beginPath(),i.moveTo(r,0),i.bezierCurveTo(r+(n()-.5)*18,t*.3,r+(n()-.5)*18,t*.7,r,t),i.stroke()}xn(i,e,t,8,5)});pe.fabric=Ot(256,256,.1,.1,(i,e,t)=>{i.fillStyle="rgb(238,238,238)",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=2)i.fillStyle="rgba(0,0,0,.05)",i.fillRect(n,0,1,t),i.fillRect(0,n,e,1);xn(i,e,t,26,9)});pe.boucle=Ot(256,256,.08,.08,(i,e,t)=>{let n=Jt(17);i.fillStyle="rgb(232,232,232)",i.fillRect(0,0,e,t);for(let s=0;s<2600;s++){let r=n()<.5?255:190;i.fillStyle=`rgba(${r},${r},${r},.55)`,i.beginPath(),i.arc(n()*e,n()*t,1+n()*2.2,0,7),i.fill()}xn(i,e,t,20,19)});pe.stripes=Ot(256,256,.12,.12,(i,e,t)=>{i.fillStyle="rgb(238,238,236)",i.fillRect(0,0,e,t);for(let n=0;n<8;n++)i.fillStyle="rgba(60,68,78,.75)",i.fillRect(0,n*t/8,e,t/26),i.fillStyle="rgba(60,68,78,.3)",i.fillRect(0,n*t/8+t/18,e,t/60);for(let n=0;n<e;n+=2)i.fillStyle="rgba(0,0,0,.04)",i.fillRect(n,0,1,t);xn(i,e,t,16,29)});pe.paint=Ot(256,256,.6,.6,(i,e,t)=>{i.fillStyle="rgb(246,246,246)",i.fillRect(0,0,e,t),xn(i,e,t,7,13)});pe.plaster=Ot(512,512,1.4,1.4,(i,e,t)=>{i.fillStyle="rgb(240,240,240)",i.fillRect(0,0,e,t),Bh(i,e,t,23,60,.07),xn(i,e,t,9,24)});function Al(i,e,t,n={}){let r=Math.round(512*e/i);return Ot(512,r,i,e,(o,a,l)=>{let c=Jt(t);if(o.fillStyle=n.base||"rgb(244,244,244)",o.fillRect(0,0,a,l),n.mottle&&Bh(o,a,l,t+2,n.mottle,n.mamp||.06),n.veins)for(let h=0;h<n.veins;h++){o.strokeStyle=n.veinCol?n.veinCol(c()):`rgba(90,90,96,${.06+c()*.12})`,o.lineWidth=.6+c()*2.2,o.beginPath();let u=c()*a,f=0;for(o.moveTo(u,f);f<l;)u+=(c()-.5)*60,f+=30+c()*40,o.lineTo(u,f);o.stroke()}xn(o,a,l,n.speck||8,t+1),n.grout!==!1&&(o.fillStyle=n.groutCol||"rgba(70,70,70,.5)",o.fillRect(0,0,a,n.gw||3),o.fillRect(0,0,n.gw||3,l))})}pe.porcelain80=Al(.8,.8,39,{mottle:26,mamp:.045,speck:6,groutCol:"rgba(110,100,90,.32)",gw:2});pe.stone=Al(.6,1.2,43,{mottle:34,mamp:.07,speck:9,groutCol:"rgba(80,76,72,.45)",gw:2});pe.stone60=Al(.6,.6,45,{mottle:22,mamp:.06,speck:9,groutCol:"rgba(80,76,72,.45)",gw:2});pe.marbleDark=Al(.4,.4,47,{base:"rgb(48,46,45)",veins:9,speck:6,grout:!1,veinCol:i=>`rgba(235,230,224,${.25+i*.45})`});function vy(i,e){return Ot(512,1024,.6,1.2,(t,n,s)=>{let r=Jt(i);t.fillStyle="rgb(222,222,222)",t.fillRect(0,0,n,s),Bh(t,n,s,i+4,18,.05);for(let o=0;o<230;o++){let a=r()*s,l=4+r()*22,c=120+r()*380,h=r()*6.28,u=.6+Math.pow(r(),2)*9,f=r()<.66?105+r()*70:245,d=f>240?.22+r()*.3:.08+r()*.24;t.strokeStyle=`rgba(${f},${f-4},${f-10},${d})`,t.lineWidth=u,t.beginPath();for(let x=-10;x<=n+10;x+=8){let v=a+l*Math.sin(x/c*6.283+h)+.35*l*Math.sin(x/(c*.37)*6.283+h*2);x<0?t.moveTo(x,v):t.lineTo(x,v)}t.stroke()}for(let o=0;o<520;o++)t.fillStyle=`rgba(70,62,54,${.25+r()*.35})`,t.beginPath(),t.ellipse(r()*n,r()*s,1+r()*5,.5+r()*1.2,0,0,7),t.fill();xn(t,n,s,8,i+1),e&&(t.fillStyle="rgba(80,70,60,.4)",t.fillRect(0,0,n,2),t.fillRect(0,0,2,s))})}pe.greige=Ot(512,1536,1,3,(i,e,t)=>{let n=Jt(63);i.fillStyle="rgb(176,167,155)",i.fillRect(0,0,e,t);for(let s=0;s<e;){let r=3+n()*30,o=(n()-.5)*12;i.fillStyle=o>0?`rgba(240,234,224,${o/90})`:`rgba(70,60,48,${-o/90})`,i.fillRect(s,0,r,t),s+=r}for(let s=0;s<900;s++){let r=n()*e,o=n()<.6,a=o?-10:n()*t*.6-t*.1,l=o?t+20:t*(.3+n()*.7),c=n()<.7,h=.03+n()*.08;i.strokeStyle=c?`rgba(100,88,74,${h})`:`rgba(226,220,210,${h})`,i.lineWidth=.3+n()*.9,i.beginPath(),i.moveTo(r,a),i.bezierCurveTo(r+(n()-.5)*7,a+l*.33,r+(n()-.5)*7,a+l*.66,r+(n()-.5)*4,a+l),i.stroke()}for(let s=0;s<16;s++){let r=n()*e,o=n()*t,a=140+n()*320;i.strokeStyle=`rgba(112,98,82,${.07+n()*.08})`,i.lineWidth=1+n()*2.2,i.beginPath(),i.moveTo(r,o),i.bezierCurveTo(r+9,o+a*.3,r-9,o+a*.7,r+3,o+a),i.stroke()}for(let s=0;s<2600;s++)i.fillStyle=`rgba(84,72,60,${.1+n()*.18})`,i.fillRect(n()*e,n()*t,1,2+n()*6);xn(i,e,t,6,64)});pe.greige.offset.x=-.15;pe.travTop=vy(53,!1);pe.perf=Ot(256,256,.2,.2,(i,e,t)=>{i.fillStyle="rgb(236,236,236)",i.fillRect(0,0,e,t);let n=Jt(57);for(let o=0;o<90;o++){let a=n()*e;i.strokeStyle=`rgba(40,30,20,${.03+n()*.06})`,i.lineWidth=.5+n()*1.6,i.beginPath(),i.moveTo(0,a),i.lineTo(e,a+(n()-.5)*8),i.stroke()}let s=10,r=e/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let l=(o+.5)*r,c=(a+.5)*r;i.fillStyle="rgba(0,0,0,.95)",i.beginPath(),i.arc(l,c,r*.21,0,7),i.fill(),i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=1.2,i.beginPath(),i.arc(l,c+.8,r*.19,.2,2.9),i.stroke()}xn(i,e,t,8,59)});pe.perfBump=Ot(256,256,.2,.2,(i,e,t)=>{i.fillStyle="rgb(255,255,255)",i.fillRect(0,0,e,t);let n=10,s=e/n;for(let r=0;r<n;r++)for(let o=0;o<n;o++)i.fillStyle="#000",i.beginPath(),i.arc((r+.5)*s,(o+.5)*s,s*.18,0,7),i.fill()},!1);pe.veneerH=Ot(512,512,.8,.8,(i,e,t)=>{let n=Jt(12);i.fillStyle="rgb(236,236,236)",i.fillRect(0,0,e,t);for(let s=0;s<150;s++){let r=n()*t;i.strokeStyle=`rgba(40,30,20,${.03+n()*.08})`,i.lineWidth=.5+n()*2,i.beginPath(),i.moveTo(0,r),i.bezierCurveTo(e*.3,r+(n()-.5)*18,e*.7,r+(n()-.5)*18,e,r),i.stroke()}xn(i,e,t,8,6)});function kd(i){return(e,t,n)=>{let r=t/5,o=Jt(14);for(let a=0;a<5;a++){let l=e.createLinearGradient(a*r,0,(a+1)*r,0);l.addColorStop(0,"rgb(96,96,96)"),l.addColorStop(.14,"rgb(212,212,212)"),l.addColorStop(.45,"rgb(252,252,252)"),l.addColorStop(.8,"rgb(222,222,222)"),l.addColorStop(.93,"rgb(150,150,150)"),l.addColorStop(1,"rgb(70,70,70)"),e.fillStyle=l,e.fillRect(a*r,0,r,n)}if(i){for(let a=0;a<140;a++){let l=o()*t;e.strokeStyle=`rgba(40,30,20,${.04+o()*.08})`,e.lineWidth=.5+o()*1.4,e.beginPath(),e.moveTo(l,0),e.bezierCurveTo(l+(o()-.5)*5,n*.3,l+(o()-.5)*5,n*.7,l,n),e.stroke()}xn(e,t,n,8,15)}}}pe.fluteOak=Ot(256,512,.11,.6,kd(!0));pe.fluteBump=Ot(256,64,.11,.6,kd(!1),!1);pe.mesh=Ot(64,64,.06,.035,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="rgba(255,255,255,1)",i.lineWidth=9;for(let n=-1;n<=1;n++)i.beginPath(),i.moveTo(n*e,0),i.lineTo(n*e+e,t),i.stroke(),i.beginPath(),i.moveTo(n*e+e,0),i.lineTo(n*e,t),i.stroke()});pe.groove=Ot(128,16,.3,.3,(i,e,t)=>{i.fillStyle="#fff",i.fillRect(0,0,e,t),i.fillStyle="#000",i.fillRect(0,0,3,t),i.fillStyle="#777",i.fillRect(3,0,2,t)},!1);pe.grille=Ot(128,128,.04,.04,(i,e,t)=>{i.fillStyle="rgb(200,200,200)",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=4)i.fillStyle="rgba(0,0,0,.25)",i.fillRect(n,0,2,t),i.fillRect(0,n,e,2);xn(i,e,t,30,61)});function yy(i){return Ot(2048,1024,1,1,(e,t,n)=>{let s=Jt(41),r=n*.5,o=i==="day",a=i==="dusk",l=i==="night",c=e.createLinearGradient(0,0,0,r);if(l?(c.addColorStop(0,"#060b1c"),c.addColorStop(.75,"#16223f"),c.addColorStop(1,"#2b3352")):a?(c.addColorStop(0,"#2f3d70"),c.addColorStop(.45,"#b9788a"),c.addColorStop(.8,"#f2a46c"),c.addColorStop(1,"#ffd29a")):(c.addColorStop(0,"#7fb0db"),c.addColorStop(.6,"#c7dceb"),c.addColorStop(1,"#eaf0f2")),e.fillStyle=c,e.fillRect(0,0,t,r+2),a){let x=e.createRadialGradient(t*.22,r-30,4,t*.22,r-30,420);x.addColorStop(0,"rgba(255,236,190,1)"),x.addColorStop(.08,"rgba(255,200,130,.85)"),x.addColorStop(1,"rgba(255,160,90,0)"),e.fillStyle=x,e.fillRect(0,0,t,r)}if(l)for(let x=0;x<260;x++)e.fillStyle=`rgba(255,255,255,${.2+s()*.6})`,e.fillRect(s()*t,s()*r*.8,1.6,1.6);if(!l)for(let x=0;x<26;x++){let v=s()*t,g=r*(.2+s()*.65),p=120+s()*260,y=a?.22:.42;for(let _=0;_<7;_++){let M=e.createRadialGradient(v+(s()-.5)*p,g+(s()-.5)*18,1,v,g,p*(.25+s()*.3)),b=a?"255,214,190":"255,255,255";M.addColorStop(0,`rgba(${b},${y})`),M.addColorStop(1,`rgba(${b},0)`),e.fillStyle=M,e.fillRect(v-p,g-p*.4,p*2,p*.8)}}c=e.createLinearGradient(0,r,0,n*.78),l?(c.addColorStop(0,"#1c2440"),c.addColorStop(1,"#0a1020")):a?(c.addColorStop(0,"#d79a84"),c.addColorStop(.35,"#7d6f86"),c.addColorStop(1,"#3d4a66")):(c.addColorStop(0,"#a9c3cf"),c.addColorStop(.3,"#6f97ac"),c.addColorStop(1,"#3f6c84")),e.fillStyle=c,e.fillRect(0,r,t,n*.3);for(let x=0;x<900;x++){let v=r+Math.pow(s(),1.6)*n*.28,g=6+(v-r)*.25*s();e.fillStyle=l?`rgba(255,214,150,${.05+s()*.12})`:`rgba(255,255,255,${.04+s()*(a?.2:.12)})`,e.fillRect(s()*t,v,g,1+(v-r)/160)}if(a){let x=e.createLinearGradient(t*.22-60,0,t*.22+60,0);x.addColorStop(0,"rgba(255,200,140,0)"),x.addColorStop(.5,"rgba(255,214,160,.45)"),x.addColorStop(1,"rgba(255,200,140,0)"),e.fillStyle=x,e.fillRect(t*.22-60,r,120,n*.26)}let h=l?"rgba(30,36,58,1)":a?"rgba(120,104,128,.75)":"rgba(132,158,170,.7)";e.fillStyle=h;for(let[x,v,g]of[[.05,.2,9],[.52,.66,7],[.78,.98,11]]){e.beginPath(),e.moveTo(x*t,r+1);for(let p=x*t;p<=v*t;p+=6){let y=(p-x*t)/((v-x)*t);e.lineTo(p,r+1-g*Math.sin(y*Math.PI)*(.7+.3*Math.sin(p*.05)))}e.lineTo(v*t,r+1),e.closePath(),e.fill()}for(let x=0;x<70;x++){let v=t*(.56+s()*.08),g=3+s()*7,p=4+Math.pow(s(),2)*26;e.fillStyle=h,e.fillRect(v,r+1-p,g,p),l&&(e.fillStyle=`rgba(255,214,150,${.4+s()*.5})`,e.fillRect(v+1,r-p*s(),1.4,1.4))}let u=n*.74;c=e.createLinearGradient(0,u,0,n),l?(c.addColorStop(0,"#141826"),c.addColorStop(1,"#0b0d14")):a?(c.addColorStop(0,"#6a5e64"),c.addColorStop(1,"#3e3a40")):(c.addColorStop(0,"#8e958f"),c.addColorStop(1,"#6b726c")),e.fillStyle=c,e.beginPath(),e.moveTo(0,n);for(let x=0;x<=t;x+=16)e.lineTo(x,u+14*Math.sin(x/260)+8*Math.sin(x/90));e.lineTo(t,n),e.closePath(),e.fill();let f=l?[[28,30,40],[36,38,48],[22,24,32]]:a?[[120,104,108],[150,128,120],[96,86,92]]:[[196,196,188],[168,172,168],[214,210,200],[140,146,142],[182,150,128]];for(let x=0;x<520;x++){let v=u+10+Math.pow(s(),.8)*(n-u),g=.3+(v-u)/(n-u)*1.8,p=(10+s()*26)*g,y=(4+s()*12)*g,_=f[s()*f.length|0];e.fillStyle=`rgb(${_[0]},${_[1]},${_[2]})`,e.fillRect(s()*t,v-y,p,y),l&&s()<.5&&(e.fillStyle=`rgba(255,206,140,${.5+s()*.5})`,e.fillRect(s()*t,v-y*s(),1.5*g,1.5*g)),!l&&s()<.18&&(e.fillStyle="rgba(90,120,80,.6)",e.beginPath(),e.arc(s()*t,v,3*g+s()*4*g,0,7),e.fill())}c=e.createLinearGradient(0,u,0,n);let d=l?"12,16,28":a?"150,128,140":"200,212,216";c.addColorStop(0,`rgba(${d},.55)`),c.addColorStop(1,`rgba(${d},.12)`),e.fillStyle=c,e.fillRect(0,u-20,t,n-u+20);for(let x=0;x<14;x++){let v=s()*t,g=22+s()*34,p=60+s()*150,y=u+40+s()*80,_=f[s()*f.length|0];e.fillStyle=`rgb(${_[0]+10},${_[1]+10},${_[2]+10})`,e.fillRect(v,y-p,g,p);for(let M=y-p+6;M<y-4;M+=7)for(let b=v+4;b<v+g-4;b+=6)e.fillStyle=l?s()<.45?`rgba(255,210,140,${.5+s()*.5})`:"rgba(10,12,18,.6)":"rgba(40,50,60,.22)",e.fillRect(b,M,3,3.5)}})}var pl={};for(let i of["day","dusk","night"])Object.defineProperty(pl,i,{configurable:!0,get(){let e=yy(i);return e.repeat.set(1,1),e.wrapS=e.wrapT=bn,Object.defineProperty(pl,i,{value:e}),e}});var me=i=>new ts(i),m={floor:me({map:pe.planks,roughness:.45}),tile:me({map:pe.porcelain80,roughness:.32}),paint:me({map:pe.plaster,roughness:.95}),wallOut:me({color:15460063,roughness:.95}),cap:me({color:14933202,roughness:.95}),slab:me({color:15130840,roughness:.95}),ceiling:me({color:16052974,roughness:.95}),base:me({color:2762790,roughness:.7}),wood:me({map:pe.veneer,roughness:.5}),woodPanel:me({map:pe.veneer,bumpMap:pe.groove,bumpScale:1.4,roughness:.5}),oak:me({map:pe.veneer,roughness:.55}),oakH:me({map:pe.veneerH,roughness:.55}),oakFlute:me({map:pe.fluteOak,bumpMap:pe.fluteBump,bumpScale:2.2,roughness:.55}),charcoal:me({map:pe.paint,roughness:.82}),console:me({map:pe.veneer,roughness:.5}),bronze:me({color:7033920,roughness:.35,metalness:.6}),speakerBox:me({map:pe.veneer,color:3812386,roughness:.45}),woodDark:me({map:pe.veneer,roughness:.45}),slat:me({map:pe.veneer,roughness:.55}),slatBack:me({color:1908513,roughness:.9}),head:me({map:pe.fabric,roughness:.95}),bedFrame:me({map:pe.veneer,roughness:.55}),sheet:me({map:pe.fabric,roughness:.96}),duvet:me({map:pe.fabric,roughness:.97}),pillow:me({map:pe.fabric,roughness:.97}),pillow2:me({map:pe.fabric,roughness:.97}),throwM:me({map:pe.fabric,roughness:.95}),cushion:me({map:pe.boucle,roughness:1}),stripe:me({map:pe.stripes,roughness:.95}),blackout:me({map:pe.fabric,roughness:.95,side:Ut}),metal:me({color:1973790,roughness:.45,metalness:.7}),black:me({color:1776670,roughness:.5,metalness:.2}),frameBlk:me({color:1974049,roughness:.45,metalness:.5}),plinth:me({color:2828326,roughness:.8}),mirror:me({color:13226452,roughness:.03,metalness:1}),screen:me({color:723982,roughness:.18,metalness:.4}),door:me({map:pe.veneer,roughness:.5}),white:me({color:15987697,roughness:.5}),tvSide:me({map:pe.greige,roughness:.62}),consoleLt:me({map:pe.paint,roughness:.6}),shelfWood:me({map:pe.veneer,roughness:.5}),travTop:me({map:pe.travTop,roughness:.4}),perf:me({map:pe.perf,bumpMap:pe.perfBump,bumpScale:2.5,roughness:.6}),bathWall:me({map:pe.stone,roughness:.45}),bathFloor:me({map:pe.stone60,roughness:.55}),showerFloor:me({map:pe.stone60,roughness:.65}),balcFloor:me({map:pe.stone,roughness:.7}),balcWall:me({map:pe.stone,roughness:.6}),pot:me({roughness:.8}),leaf:me({color:5992005,roughness:.62,side:Ut}),twig:me({color:7035464,roughness:.9}),soil:me({color:3812386,roughness:1}),ceramic:me({color:15328218,roughness:.6}),porcelain:me({color:16185076,roughness:.16}),book1:me({color:10127992,roughness:.8}),book2:me({color:4082258,roughness:.8}),book3:me({color:14273456,roughness:.8}),shade:me({color:15918802,roughness:.8,emissive:16761978,emissiveIntensity:0}),led:me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4}),ledAcc:me({color:16773592,emissive:16760698,emissiveIntensity:0,roughness:.4}),sky:new Rt({map:pl.day})};performance.mark("k-tex");m.steel=me({color:13225166,roughness:.3,metalness:.85});m.inox=me({color:12172736,roughness:.22,metalness:.9});m.brass=me({color:12096090,roughness:.32,metalness:.9});m.fit=me({color:9078401,roughness:.4,metalness:.6});m.hose=me({color:9078401,roughness:.45,metalness:.5});m.bottle=me({color:15855595,roughness:.35});m.socket=me({color:15526372,roughness:.5});m.wc=me({color:16053232,roughness:.16});m.wcSeat=me({color:16250611,roughness:.2});m.wcIn=me({color:15329251,roughness:.1});m.basin=me({color:16119025,roughness:.14,side:Ut});m.basinIn=me({color:15460837,roughness:.08});m.bathCeil=me({color:15855337,roughness:.9});m.ledBath=me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4});m.ledWard=me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4});m.ledKit=me({color:16773592,emissive:16763274,emissiveIntensity:0,roughness:.4});m.lampWhite=me({color:16052714,roughness:.4,emissive:16767400,emissiveIntensity:0});m.balcLamp=me({color:15920096,roughness:.6,emissive:16761978,emissiveIntensity:0});m.speaker=me({map:pe.grille,color:2763308,roughness:.95});m.induction=me({color:789517,roughness:.08,metalness:.3});m.hobRing=me({color:1710619,emissive:16726554,emissiveIntensity:0,roughness:.3});m.fridgeIn=me({color:15922164,emissive:15266047,emissiveIntensity:0,roughness:.4});m.olive=me({color:9280122,roughness:.7,side:Ut});m.olive2=me({color:6714202,roughness:.7,side:Ut});m.drawerIn=me({map:pe.veneer,color:10126192,roughness:.6});m.garm=[15328476,13616824,9211795,3093824,7305822,11045482,2039585,16052974,9068362,5135214].map(i=>me({map:pe.fabric,color:i,roughness:.95}));m.food=[14241594,15777866,8171083,15986662,5078968,15043130].map(i=>me({color:i,roughness:.5}));function Hi(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d");t(s,i,e);let r=new Gr(n);return r.colorSpace=At,r.anisotropy=Bd,r.userData.g=s,r}pe.netflix=Hi(1024,576,(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t);let n=i.createRadialGradient(e/2,t/2,10,e/2,t/2,e*.55);n.addColorStop(0,"rgba(110,6,12,.38)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=[..."NETFLIX"],r=158,o=.8,a=4;i.font=`400 ${r}px "Bebas Neue", Impact, "Arial Narrow", sans-serif-condensed, "Roboto Condensed", "Arial Black", sans-serif`,i.fillStyle="#e50914",i.textBaseline="alphabetic";let l=s.map(d=>i.measureText(d).width*o),c=l.reduce((d,x)=>d+x,0)+a*(s.length-1),h=(e-c)/2,u=t/2+r*.34,f=(s.length-1)/2;s.forEach((d,x)=>{let v=(x-f)/f,g=1+.15*v*v;i.save(),i.translate(h,u+9*v*v),i.scale(o,g),i.fillText(d,0,0),i.restore(),h+=l[x]+a})});pe.acDisp=Hi(128,56,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#9fe6ff",i.font='600 40px "Segoe UI", Roboto, Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("24\xB0",e/2,t/2+2)});pe.lockDisp=Hi(64,96,(i,e,t)=>{i.fillStyle="#05060a",i.fillRect(0,0,e,t),i.fillStyle="#7fd4ff",i.font='600 15px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",[["1","2","3"],["4","5","6"],["7","8","9"],["*","0","#"]].forEach((n,s)=>n.forEach((r,o)=>i.fillText(r,12+o*20,14+s*22)))});pe.windStreak=Hi(128,32,(i,e,t)=>{let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.3,"rgba(255,255,255,1)"),n.addColorStop(.7,"rgba(255,255,255,.75)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t),i.globalCompositeOperation="destination-in";let s=i.createLinearGradient(0,0,0,t);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(.5,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),i.globalCompositeOperation="source-over"});m.tvScreen=me({color:394759,roughness:.22,metalness:.3,emissive:16777215,emissiveMap:pe.netflix,emissiveIntensity:0});m.lockScr=me({color:329224,roughness:.2,emissive:16777215,emissiveMap:pe.lockDisp,emissiveIntensity:.6});m.acDisp=new Rt({map:pe.acDisp,transparent:!0,opacity:0,depthWrite:!1});m.acLed=me({color:1776670,emissive:4645002,emissiveIntensity:0});m.wind=new Rt({map:pe.windStreak,color:10475263,transparent:!0,opacity:0,depthWrite:!1,side:Ut});pe.flow=Hi(32,256,(i,e,t)=>{i.fillStyle="rgba(255,255,255,.38)",i.fillRect(0,0,e,t);let n=Jt(97);for(let s=0;s<80;s++){let r=n()*e,o=n()*t,a=10+n()*46,l=.3+n()*.65;i.fillStyle=`rgba(255,255,255,${l})`,i.fillRect(r,o,1+n()*3,a),i.fillRect(r,o-t,1+n()*3,a)}});pe.flow.wrapS=pe.flow.wrapT=Nn;pe.flow.repeat.set(1,1.4);pe.hot=Hi(64,64,(i,e)=>{let t=e/2;i.fillStyle="rgba(28,24,20,.42)",i.beginPath(),i.arc(t,t,t*.92,0,7),i.fill(),i.fillStyle="rgba(255,251,244,.97)",i.beginPath(),i.arc(t,t,t*.7,0,7),i.fill()});m.hot=new zr({map:pe.hot,transparent:!0,opacity:.9,depthWrite:!1,sizeAttenuation:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-40});m.outline=new Vr({color:16773590,transparent:!0,opacity:.9,depthTest:!1});pe.glowV=Hi(32,256,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)});pe.glowR=Hi(128,128,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)});var Qn=(i,e,t)=>new Rt({map:i,color:e,transparent:!0,opacity:t,blending:ea,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-8});m.glowFake=Qn(pe.glowV,16758903,.5);m.glowTV=Qn(pe.glowR,16738906,0);m.glowBalc=Qn(pe.glowR,16758903,0);m.glowFridge=Qn(pe.glowV,14674431,0);m.glowSoft=Qn(pe.glowR,16758903,.4);m.glowSlot=Qn(pe.glowV,16763030,.2);m.glowUp=Qn(pe.glowV,16761477,.5);m.glowWash=Qn(pe.glowV,16762510,.3);m.glowLamp=Qn(pe.glowR,16758903,0);m.cageMesh=me({map:pe.mesh,color:4935250,alphaTest:.5,side:Ut,roughness:.5,metalness:.55});m.cageFrame=me({color:4079684,roughness:.45,metalness:.6});m.brassRing=me({color:12096090,roughness:.3,metalness:.9});m.cone=me({color:1710619,roughness:.7});m.carafe=me({color:14674154,roughness:.05,transparent:!0,opacity:.38,depthWrite:!1});function Xt(i,e,t,n,s,r,o,a,l=m.glowFake){let c=new De(new Ht(i/100,e/100),l);return c.position.set(Ce(t),n/100,Ie(s)),c.rotation.set(r,o,0),c.renderOrder=3,(a||ye).add(c),c}m.water=new Rt({color:15004415,transparent:!0,opacity:.8,depthWrite:!1});m.mist=new Rt({color:15660799,transparent:!0,opacity:.1,depthWrite:!1,side:Ut});m.splash=new Rt({color:15398399,transparent:!0,opacity:.35,depthWrite:!1});m.glass=new Rt({color:9411230,transparent:!0,opacity:.09,depthWrite:!1});m.rail=new Rt({color:9411230,transparent:!0,opacity:.13,depthWrite:!1});m.sheer=new Ua({map:pe.fabric,transparent:!0,opacity:.6,side:Ut,depthWrite:!1});pe.sheen=Ot(256,256,.7,.7,(i,e,t)=>{i.fillStyle="rgba(70,50,34,.55)",i.fillRect(0,0,e,t);for(let[n,s,r]of[[.18,.16,.13],[.42,.05,.1],[.75,.1,.07]])i.save(),i.translate(e/2,t/2),i.rotate(-.7),i.fillStyle=`rgba(255,255,255,${r})`,i.fillRect(-e,(n-.5)*t*1.4,e*2,s*t),i.restore()});m.smoked=me({map:pe.sheen,transparent:!0,roughness:.06,metalness:.1,depthWrite:!1});var qe={};function gt(i,e,t=1.4,n=[]){qe[i]={v:0,t:0,speed:t,apply:e},n.forEach(s=>s.traverse(r=>{r.userData.toggle=i})),e(0)}function Qt(i,e,t,n,s){let r=new sn;return r.position.set(Ce(i),e/100,Ie(t)),(s||ye).add(r),s&&s.updateMatrixWorld(!0),n.forEach(o=>r.attach(o)),r}function Rl(i,e,t,n){let s=i.attributes.position,r=i.attributes.normal,o=i.attributes.uv;if(!o)return i;for(let a=0;a<s.count;a++){let l=Math.abs(r.getX(a)),c=Math.abs(r.getY(a)),h=Math.abs(r.getZ(a)),u=s.getX(a)+e,f=s.getY(a)+t,d=s.getZ(a)+n;l>=c&&l>=h?o.setXY(a,d,f):c>=h?o.setXY(a,u,d):o.setXY(a,u,f)}return o.needsUpdate=!0,i}function T(i,e,t,n,s,r,o,a={}){let l=(t-i)/100,c=(n-e)/100,h=(r-s)/100,u=a.r?Math.min(a.r/100,Math.min(l,c,h)/2-8e-4):0,f=u>0?new ja(l,h,c,a.seg||3,u):new wn(l,h,c),d=Ce((i+t)/2),x=(s+r)/200,v=Ie((e+n)/2);Rl(f,d,x,v);let g=new De(f,o);return g.position.set(d,x,v),g.castShadow=a.cast!==!1,g.receiveShadow=a.recv!==!1,(a.parent||ye).add(g),g}function Be(i,e,t,n,s,r,o,a={}){let l=new Ri(t/100,n/100,(r-s)/100,a.seg||28),c=new De(l,o);return c.position.set(Ce(i),(s+r)/200,Ie(e)),c.castShadow=a.cast!==!1,c.receiveShadow=!0,(a.parent||ye).add(c),c}function Bi(i,e,t,n,s,r,o,a={}){let l=new De(new ui(1,a.seg||24,a.seg?Math.round(a.seg*.7):16,0,Math.PI*2,0,a.half?Math.PI/2:Math.PI),o);return l.scale.set(n/100,s/100,r/100),l.position.set(Ce(i),t/100,Ie(e)),l.castShadow=a.cast!==!1,l.receiveShadow=!0,(a.parent||ye).add(l),l}function ml(i,e,t,n,s,r,o,a,l={}){let c=(e-i)/100,h=(s-n)/100,u=Math.max(24,Math.round(c*70)),f=new Ht(c,h,u,1),d=f.attributes.position;for(let v=0;v<d.count;v++){let g=d.getX(v);d.setZ(v,r/100*Math.sin((g+c/2)/(o/100)*Math.PI*2))}f.computeVertexNormals(),Rl(f,Ce((i+e)/2),0,0);let x=new De(f,a);return x.position.set(Ce((i+e)/2),(n+s)/200,Ie(t)),x.castShadow=l.cast!==!1,x.receiveShadow=!0,(l.parent||ye).add(x),x}var kh=new ui(1,14,10),zh=new ui(1,8,5);function My(i,e,t,n,s,r,o=1,a=m.leaf){for(let l=0;l<t;l++){let c=l*2.39996,h=n+l*s,u=r+.04*Math.sin(l),f=new De(kh,a);f.scale.set(.085*o,.011,.055*o),f.position.set(Ce(i)+Math.cos(c)*u,h,Ie(e)+Math.sin(c)*u),f.rotation.set(.35*Math.sin(l*1.3),-c,.5+.25*Math.cos(l)),f.castShadow=!0,f.receiveShadow=!0,ye.add(f)}}function Fe(i,e,t,n,s={}){let r=new I(Ce(i[0]),i[2]/100,Ie(i[1])),o=new I(Ce(e[0]),e[2]/100,Ie(e[1])),a=new De(new Ri(t/100,t/100,r.distanceTo(o),s.seg||18),n);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new I(0,1,0),o.clone().sub(r).normalize()),a.castShadow=s.cast!==!1,a.receiveShadow=!0,(s.parent||ye).add(a),a}function ir(i,e,t,n,s,r,o,a,l,c,h){let u=new Yr,f=(S,E)=>[Ce(S),-Ie(E)],d=i+l,x=e+l,v=t-l,g=n-l,p=Math.max(.1,o-l),y=Math.max(.1,a-l);u.moveTo(...f(d+p,x)),u.lineTo(...f(v-p,x)),u.quadraticCurveTo(...f(v,x),...f(v,x+p)),u.lineTo(...f(v,g-y)),u.quadraticCurveTo(...f(v,g),...f(v-y,g)),u.lineTo(...f(d+y,g)),u.quadraticCurveTo(...f(d,g),...f(d,g-y)),u.lineTo(...f(d,x+p)),u.quadraticCurveTo(...f(d,x),...f(d+p,x));let _=new Ca(u,{depth:Math.max(.001,(r-s-2*l)/100),bevelEnabled:l>0,bevelThickness:l/100,bevelSize:l/100,bevelSegments:4,curveSegments:12,steps:h?10:1});if(_.rotateX(-Math.PI/2),_.translate(0,(s+l)/100,0),h){let S=_.attributes.position,E=Ie(n),P=Ce((i+t)/2);for(let w=0;w<S.count;w++){let A=Math.min(1,Math.max(0,(h.top/100-S.getY(w))/((h.top-s)/100))),N=A*A;S.setZ(w,E-(E-S.getZ(w))*(1-h.ky*N)),S.setX(w,P+(S.getX(w)-P)*(1-h.kx*N))}}_.deleteAttribute("normal"),_.deleteAttribute("uv");let M=gd(_,1e-5);M.computeVertexNormals(),_.dispose();let b=new De(M,c);return b.castShadow=!0,b.receiveShadow=!0,ye.add(b),b}function gl(i,e,t){let n=new Xr(i.map(r=>new I(Ce(r[0]),r[2]/100,Ie(r[1])))),s=new De(new Ia(n,64,e/100,8,!1),t);return s.castShadow=!0,s.receiveShadow=!0,ye.add(s),s}var ki=null,fo=[],sr={},dr=[],tt=[],mo=[],Je=null,lo=null,Oi=[],Hh=[],Ui=null,ut=null,by=[],rr=null,Vh=[],or=null;function oo(i,e,t,n,s){let r=new sn;return ye.add(r),mo.push({name:i,g:r,n:new I(e,0,t),p:new I(n,0,s)}),r}function zd(i,e,t,n,s={}){let r=s.n||(Vn?180:300),o=9.8,a=s.v0||2.3,l=.012,c=s.spread||.34,h=new hi(new wn(.007,.1,.007),m.water,r);h.frustumCulled=!1;let u=new hi(new ui(.006,6,4),m.splash,90);u.frustumCulled=!1;let f=O=>(O+Math.sqrt(O*O+2*o*(e.y-l)))/o,d=t.clone().multiplyScalar(a),x=f(d.y),v=e.clone().addScaledVector(d,x);v.y=l;let g=e.clone().sub(v),p=g.length(),y=new De(new Ri(s.r0||.06,s.r1||.24,p,28,1,!0),m.mist);y.position.copy(e).add(v).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new I(0,1,0),g.normalize()),h.visible=u.visible=y.visible=!1,ye.add(h),ye.add(u),ye.add(y);let _=Math.random,M=[],b=new I,S=s.rad||.035,E=O=>{b.set((_()-.5)*c,(_()-.5)*.2,(_()-.5)*c),O.v=t.clone().add(b).normalize().multiplyScalar(a*(.88+_()*.24));let k=_()*6.283,B=Math.sqrt(_())*S;O.p=e.clone().add(new I(Math.cos(k)*B,0,Math.sin(k)*B)),O.T=f(O.v.y),O.t=0};for(let O=0;O<r;O++){let k={};E(k),k.t=_()*k.T,M.push(k)}let P=new st,w=new Kt,A=new Kt,N=new I(1,1,1),z=new I,V=new I,D=new I(0,1,0);dr.push({id:i,update(O){for(let k=0;k<r;k++){let B=M[k];B.t+=O,(B.t>B.T||B.t<0)&&E(B),z.copy(B.p).addScaledVector(B.v,B.t),z.y-=.5*o*B.t*B.t,V.copy(B.v),V.y-=o*B.t,w.setFromUnitVectors(D,V.normalize()),P.compose(z,w,N),h.setMatrixAt(k,P)}h.instanceMatrix.needsUpdate=!0;for(let k=0;k<90;k++){let B=_()*6.283,J=Math.sqrt(_())*(s.splash||.13);z.set(v.x+Math.cos(B)*J,l+_()*.05,v.z+Math.sin(B)*J),P.compose(z,A,N),u.setMatrixAt(k,P)}u.instanceMatrix.needsUpdate=!0}}),gt(i,O=>{h.visible=u.visible=y.visible=O>.02,m.water.opacity=.8*O,m.splash.opacity=.45*O,m.mist.opacity=.03*O},3,n)}function Gh(i,e,t){let n=[],s=[],r=new Rt({map:pe.flow,color:14873343,transparent:!0,opacity:0,depthWrite:!1}),o=new Rt({color:14479359,transparent:!0,opacity:0,depthWrite:!1}),a=new Rt({color:15923711,transparent:!0,opacity:0,depthWrite:!1});for(let[v,g,p,y]of e){let _=new De(new Ri(.0034,.0046,(p-y)/100,12,1,!0),r);_.position.set(Ce(v),(p+y)/200,Ie(g)),ye.add(_),n.push(_);let M=new De(new kn(.04,24),o);M.rotation.x=-Math.PI/2,M.position.set(Ce(v),y/100+.002,Ie(g)),ye.add(M),n.push(M),s.push(new I(Ce(v),y/100,Ie(g)))}let l=18*s.length,c=new hi(new ui(.0022,6,4),a,l);c.frustumCulled=!1,ye.add(c),n.push(c),n.forEach(v=>{v.visible=!1});let h=new st,u=new Kt,f=new I(1,1,1),d=new I,x=Math.random;dr.push({id:i,update(v){pe.flow.offset.y+=v*2.6;for(let g=0;g<l;g++){let p=s[g%s.length],y=x()*6.283,_=.006+x()*.022;d.set(p.x+Math.cos(y)*_,p.y+x()*.016,p.z+Math.sin(y)*_),h.compose(d,u,f),c.setMatrixAt(g,h)}c.instanceMatrix.needsUpdate=!0}}),gt(i,v=>{n.forEach(g=>{g.visible=v>.02}),r.opacity=.85*v,o.opacity=.3*v,a.opacity=.6*v},2.5,t)}function Hd(i,e,t,n,s){let r=n.n,o=9.8,a=.012,l=n.v0,c=Math.random,h=new Rt({color:15004415,transparent:!0,opacity:0,depthWrite:!1}),u=new Rt({color:15661055,transparent:!0,opacity:0,depthWrite:!1}),f=new hi(new wn(n.w,n.l,n.w),h,r);f.frustumCulled=!1;let d=new hi(new ui(n.w,6,4),u,40);d.frustumCulled=!1,f.visible=d.visible=!1,ye.add(f),ye.add(d),t.normalize();let x=N=>(N+Math.sqrt(N*N+2*o*(e.y-a)))/o,v=t.clone().multiplyScalar(l),g=e.clone().addScaledVector(v,x(v.y));g.y=a;let p=[],y=new I,_=N=>{y.set((c()-.5)*n.spread,(c()-.5)*n.spread,(c()-.5)*n.spread),N.v=t.clone().add(y).normalize().multiplyScalar(l*(.9+c()*.2)),N.p=e,N.T=x(N.v.y),N.t=0};for(let N=0;N<r;N++){let z={};_(z),z.t=c()*z.T,p.push(z)}let M=new st,b=new Kt,S=new Kt,E=new I(1,1,1),P=new I,w=new I,A=new I(0,1,0);dr.push({id:i,update(N){for(let z=0;z<r;z++){let V=p[z];V.t+=N,(V.t>V.T||V.t<0)&&_(V),P.copy(V.p).addScaledVector(V.v,V.t),P.y-=.5*o*V.t*V.t,w.copy(V.v),w.y-=o*V.t,b.setFromUnitVectors(A,w.normalize()),M.compose(P,b,E),f.setMatrixAt(z,M)}f.instanceMatrix.needsUpdate=!0;for(let z=0;z<40;z++){let V=c()*6.283,D=Math.sqrt(c())*.07;P.set(g.x+Math.cos(V)*D,a+c()*.03,g.z+Math.sin(V)*D),M.compose(P,S,E),d.setMatrixAt(z,M)}d.instanceMatrix.needsUpdate=!0}}),gt(i,N=>{f.visible=d.visible=N>.02,h.opacity=.7*N,u.opacity=.45*N},3,s)}function Vd(i,e,t,n,s,r=m.wind){let o=Vn?48:72,a=1.8,l=Math.random,c=new I,h=new hi(new Ht(1,1),r,o);h.frustumCulled=!1,h.visible=!1,ye.add(h);let u=[],f=M=>{M.p=e.clone().addScaledVector(n,(l()-.5)*s),M.v=t.clone().multiplyScalar(.62+l()*.32),M.v.y=-(.3+l()*.28),M.v.addScaledVector(n,(l()-.5)*.24),M.t=0,M.ph=l()*6.28,M.len=.2+l()*.22};for(let M=0;M<o;M++){let b={};f(b),b.t=l()*a,u.push(b)}let d=new st,x=new I,v=new I,g=new I,p=new I,y=new I,_={id:i,mesh:h,update(M,b){let S=h.parent.worldToLocal(c.copy(b));for(let E=0;E<o;E++){let P=u[E];P.t+=M,(P.t>a||P.t<0)&&f(P);let w=P.t,A=Math.sin(Math.PI*Math.min(1,w/a));p.copy(P.p).addScaledVector(P.v,w),p.y-=.14*w*w,p.addScaledVector(n,Math.sin(w*2.4+P.ph)*.035),y.copy(P.v),y.y-=.28*w,y.addScaledVector(n,Math.cos(w*2.4+P.ph)*.084),x.copy(y).normalize(),g.copy(S).sub(p),g.addScaledVector(x,-g.dot(x)).normalize(),v.crossVectors(g,x),d.makeBasis(x.multiplyScalar(P.len*(.45+.55*A)),v.multiplyScalar(.034*A+.001),g),d.setPosition(p),h.setMatrixAt(E,d)}h.instanceMatrix.needsUpdate=!0}};return dr.push(_),_}function Sy(){ye.updateMatrixWorld(!0),ye.traverse(i=>{let e=i.userData.toggle;e&&i.isMesh&&(sr[e]=sr[e]||[]).push(i)});for(let[i,e]of Object.entries(sr)){let t=null;for(let s of e)for(let r of mo){let o=s.parent;for(;o&&o!==r.g;)o=o.parent;o&&(t=r)}let n=new va(m.hot);n.renderOrder=10,n.userData={toggle:i,hot:!0,wall:t,box:new On},ye.add(n),fo.push(n)}dl=!0}function Ey(){let i=new Set([kh,zh]),e=[],t=n=>{e.push(n);for(let s of n.children)s.userData.frame&&t(s)};[ye,Je,...mo.map(n=>n.g)].forEach(t);for(let n of e){let s=new Map;for(let r of n.children){if(!r.isMesh||r.isInstancedMesh||r.isReflector||r.children.length||Array.isArray(r.material)||r.material.transparent||r.layers.mask!==1||r.userData.toggle||r.userData.walk||r.userData.keep)continue;let o=r.geometry,a=[r.material.uuid,r.castShadow,r.receiveShadow,!!o.index,Object.keys(o.attributes).sort().join()].join("|");s.has(a)||s.set(a,[]),s.get(a).push(r)}for(let r of s.values()){if(r.length<2)continue;let o=r.map(c=>(c.updateMatrix(),c.geometry.clone().applyMatrix4(c.matrix))),a=md(o,!1);if(o.forEach(c=>c.dispose()),!a)continue;let l=new De(a,r[0].material);l.castShadow=r[0].castShadow,l.receiveShadow=r[0].receiveShadow,n.add(l);for(let c of r)n.remove(c),i.has(c.geometry)||c.geometry.dispose()}}}function wy(){an.remove(ye),ye.traverse(i=>{i.isReflector?i.dispose():i.geometry&&i.geometry!==kh&&i.geometry!==zh&&i.geometry.dispose(),i.isLight&&i.dispose&&i.dispose()})}var Ty={E:0,W:1,UP:2,DN:3,S:4,N:5};function Wt(i,e){let t=Array(6).fill(i);for(let[n,s]of Object.entries(e))t[Ty[n]]=s;return t}function Ay(i,e){let{W:t,D:n,H:s}=i,[r,o]=i.entry,[a,l]=i.slide,c=i.glzH,h=i.bath,u=i.balcony,f=h.x1,d=h.x1+h.wall,x=h.y0;T(-15,u.y0,0,x+h.wall,0,s,Wt(m.paint,{W:m.wallOut,UP:m.cap}),{parent:e.W}),T(-15,x+h.wall,0,n+15,0,s,Wt(m.bathWall,{W:m.wallOut,UP:m.cap}),{parent:e.W}),T(t,0,t+15,n+15,0,s,Wt(m.paint,{E:m.wallOut,UP:m.cap}),{parent:e.E}),T(l,u.y0,t+15,0,0,s,Wt(m.wallOut,{W:m.balcWall,S:m.paint,UP:m.cap}),{parent:e.E}),T(-15,n,f,n+15,0,s,Wt(m.wallOut,{N:m.bathWall,UP:m.cap}),{parent:e.S}),T(f,n,r,n+15,0,s,Wt(m.wallOut,{N:m.paint,UP:m.cap}),{parent:e.S}),T(r,n,o,n+15,215,s,Wt(m.wallOut,{N:m.paint,UP:m.cap}),{parent:e.S}),T(o,n,t+15,n+15,0,s,Wt(m.wallOut,{N:m.paint,UP:m.cap}),{parent:e.S}),T(-15,-12,a,0,0,s,Wt(m.wallOut,{S:m.paint,UP:m.cap}),{parent:e.N}),T(a,-12,l,0,c,s,Wt(m.wallOut,{S:m.paint,UP:m.cap,DN:m.frameBlk}),{parent:e.N});let[v,g]=i.bathDoor;T(0,x,d,x+h.wall,0,s,Wt(m.paint,{S:m.bathWall,UP:m.cap})),T(f,x+h.wall,d,v,0,s,Wt(m.paint,{W:m.bathWall,UP:m.cap})),T(f,g,d,n,0,s,Wt(m.paint,{W:m.bathWall,UP:m.cap})),T(f,v,d,g,216,s,Wt(m.paint,{W:m.bathWall,UP:m.cap,DN:m.black}));for(let k of i.cols||[])T(k[0],k[1],k[2],k[3],0,s,Wt(m[k[4]||"paint"],{UP:m.cap})),tt.push({r:k.slice(0,4)});tt.push({r:[0,x,d,x+h.wall]},{r:[f,x,d,v]},{r:[f,g,d,n]},{r:[-15,u.y0,0,n+15]},{r:[t,-12,t+15,n+15]},{r:[-15,n,t+15,n+15]},{r:[-15,-12,a,0]},{r:[l,u.y0,t+15,0]}),T(-15,u.y0-5,t+15,n+15,-24,-1.5,m.slab,{cast:!1});let p=i.floorSplit,y=(k,B,J,j,K,G)=>{let Q=new Ht((J-k)/100,(j-B)/100);Q.rotateX(-Math.PI/2),Rl(Q,Ce((k+J)/2),0,Ie((B+j)/2));let X=new De(Q,G);return X.position.set(Ce((k+J)/2),K/100,Ie((B+j)/2)),X.receiveShadow=!0,X.userData.walk=!0,ye.add(X),X};y(0,0,t,p,.1,m.floor),y(0,p,t,n,.1,m.tile),T(d,p-.4,t,p+.4,0,.35,m.brass,{cast:!1});{let k=new Ht(60,60);k.rotateX(-Math.PI/2);let B=new De(k,new Jr({opacity:.16}));B.position.y=-.242,B.receiveShadow=!0,ye.add(B)}Je=new sn,ye.add(Je);let _={parent:Je,cast:!1},M=i.cove;T(0,0,t,p,s-1,s+1,m.ceiling,_),T(0,0,M[0],p,275,s-1,m.ceiling,_);let[b,S]=i.ceilSlot;T(M[1],0,b,p,275,s-1,Wt(m.ceiling,{E:m.black}),_),T(S,0,t,p,275,s-1,Wt(m.ceiling,{W:m.black}),_),T(b,0,S,p,280,s-1,m.black,_),T(b+.7,1,S-.7,p-1,279.4,280,m.ledAcc,_),T(M[0],16,M[1],19,275,s-1,m.ceiling,_),T(a,0,t,16,s-1.4,s-1,m.black,_),T(0,p,t,n,260,s-1,m.ceiling,_);for(let k of[M[0]-1.6,M[1]+.1])T(k,19,k+1.5,p-1,273.6,275,m.ledAcc,_);Xt(p-30,70,M[0]+36,s-1.6,p/2+8,0,0,Je).rotation.set(Math.PI/2,0,Math.PI/2),Xt(p-30,70,M[1]-36,s-1.6,p/2+8,0,0,Je).rotation.set(Math.PI/2,0,-Math.PI/2),T(-15,i.balcony.y0-5,t+15,n+15,s+2,s+24,m.cap).layers.set(1),T(0,p,.8,x,0,6,m.base,{cast:!1,parent:e.W}),T(t-.8,i.tvWall[1],t,i.kitchen[0],0,6,m.base,{cast:!1,parent:e.E}),T(d,n-.8,r,n,0,6,m.base,{cast:!1,parent:e.S});let E={parent:e.S};T(r-5,n,r,n+1.6,0,219,m.frameBlk,E),T(o,n,o+5,n+1.6,0,219,m.frameBlk,E),T(r-5,n,o+5,n+1.6,214,219,m.frameBlk,E);let P=o-9,w=[T(r+.3,n+1.2,o-.3,n+5.2,0,213.5,m.door,E),T(P-3,n-1.6,P+3,n+1.2,92,118,m.black,{r:1,parent:e.S}),T(P-15,n-4.4,P+2,n-2.2,103,106,m.black,{r:1,parent:e.S}),T(P-2,n-2.2,P+2,n-1.6,103.5,105.5,m.black,E),T(P-3.2,n+5.2,P+3.2,n+7.4,94,126,m.black,{r:1,parent:e.S}),T(P-15,n+8.6,P+2,n+10.6,103,106,m.black,{r:1,parent:e.S})],A=new De(new Ht(.044,.07),m.lockScr);A.position.set(Ce(P),1.15,Ie(n+7.45)),e.S.add(A),w.push(A);let N=new sn;N.position.set(Ce(r+.3),0,Ie(n+1.2)),e.S.add(N),w.forEach(k=>N.attach(k)),gt("door",k=>{N.rotation.y=k*Math.PI*.5},1.1,w),tt.push({r:[r,n-(o-r),r+6,n],when:()=>qe.door.v>.1});let z=i.switchY,V=T(d+2.4,z-5.5,d+3.2,z+5.5,115,127,m.white,{cast:!1}),D=T(d+3.2,z-3.8,d+4.1,z+3.8,116.6,125.4,m.white,{cast:!1,r:.4}),O=Qt(d+3.6,121,z,[D]);gt("lights",k=>{O.rotation.z=.2*(k-.5),Xh()},2.6,[V,D])}function Gd(i,e){let[t,n]=i.slide,s=i.glzH,r={parent:e.N},o=(t+n)/2;T(t,-11,n,0,0,2.5,m.frameBlk,r),T(t,-11,n,0,s-4,s,m.frameBlk,r),T(t,-11,t+4,0,0,s,m.frameBlk,r),T(n-4,-11,n,0,0,s,m.frameBlk,r);let a=(v,g,p,y)=>{let _={parent:y};return[T(v,p,g,p+3.4,2.5,7,m.frameBlk,_),T(v,p,g,p+3.4,s-9,s-4,m.frameBlk,_),T(v,p,v+4,p+3.4,2.5,s-4,m.frameBlk,_),T(g-4,p,g,p+3.4,2.5,s-4,m.frameBlk,_),T(v+4,p+1.4,g-4,p+2,7,s-9,m.glass,{cast:!1,parent:y})]};a(t+4,o+3,-9,e.N);let l=new sn;e.N.add(l);let c=a(o-3,n-4,-4.6,l);c.push(T(o+2,-1.2,o+4.5,.6,85,145,m.frameBlk,{parent:l}));let h=(n-t)/2-8;gt("slide",v=>{l.position.x=-v*h/100},.9,c),tt.push({r:[t,-11,o+3,0]},{r:[o-3,-11,n,0],when:()=>!(qe.slide&&qe.slide.v>.85)}),T(t+4,-11,n-4,0,0,.6,m.frameBlk,{cast:!1,parent:e.N});let u=9,[f,d]=i.curtainX||[t,i.W];ml(f+2,f+62,u-3,1.5,274,2.2,11,m.sheer,{cast:!1,parent:e.N});let x=[];for(let[v,g,p]of[[f+1,o+2,26],[d-2,o-2,34]]){let y=Math.abs(g-v),_=ml(Math.min(v,g),Math.max(v,g),u+2,1.5,274,4.4,16,m.blackout,r);_.geometry.translate(v<g?y/200:-y/200,0,0),_.position.x=Ce(v),x.push([_,p/y])}gt("curtain",v=>{x.forEach(([g,p])=>{g.scale.x=p+(1-p)*v})},.7,x.map(v=>v[0])),T(f,7.6,d-.5,10.4,274,275,m.frameBlk,{cast:!1,parent:Je})}function Wd(i,e){let t=i.balcony,[n,s]=i.slide,r=t.y0,o=i.H,[a]=i.acLedge,l=T(n,r,s,-11,-2.4,-1,m.balcFloor,{cast:!1});l.userData.walk=!0,T(a,r,n,-12,-2.4,-1,m.balcFloor,{cast:!1}),T(n,r,s,r+1.2,-1,106,m.rail,{cast:!1}),T(n,r-1,s,r+2.2,-1,6,m.frameBlk),T(n,r-.6,s,r+1.8,106,110,m.frameBlk,{r:.8}),tt.push({r:[n,r-4,s,r+2]});let c={parent:Je,cast:!1};T(a,r,s,-12,o-10,o,m.ceiling,c),T(n+8,(r-12)/2-1,s-8,(r-12)/2+1,o-10.6,o-10,m.ledAcc,c);let[h,u,f,d]=i.coffee;T(h,u,f,d,28,32,m.woodDark,{r:1.5});for(let[V,D]of[[h+4,u+4],[f-6,u+4],[h+4,d-6],[f-6,d-6]])T(V,D,V+2,D+2,0,28,m.black);T(h+6,u+8,h+34,u+30,32,33.4,m.black,{r:.6}),Be(h+14,u+16,3.6,3,33.4,41,m.ceramic),Be(h+26,u+22,3.6,3,33.4,41,m.ceramic),tt.push({r:i.coffee});let x=[f-12,d-13],v=[Be(x[0],x[1],4.6,5,32,33.4,m.black),Be(x[0],x[1],.8,.8,33.4,47,m.black),Bi(x[0],x[1],46,11,8,11,m.balcLamp,{half:!0,seg:28})];jt||(rr=new Ci(16761469,0,0,2),rr.position.set(Ce(x[0]),.44,Ie(x[1])),ye.add(rr)),Xt(80,80,x[0],33.6,x[1],-Math.PI/2,0,ye,m.glowBalc),gt("balclamp",V=>{tp()},2.4,v);let[g,p]=i.tree;Be(g,p,20,17,0,46,m.pot),Be(g,p,18.5,18.5,44,45,m.soil,{cast:!1}),Fe([g,p,44],[g-3,p+2,112],2.2,m.twig),Fe([g-3,p+2,108],[g+8,p-6,150],1.3,m.twig),Fe([g-3,p+2,104],[g-12,p+6,140],1.2,m.twig);{let V=Jt(5);for(let[D,O,k,B]of[[g-3,p+2,122,19],[g+9,p-6,146,16],[g-13,p+7,138,15],[g-2,p,166,15],[g+5,p+9,128,13]])for(let J=0;J<80;J++){let j=V()*2-1,K=V()*6.283,G=Math.sqrt(1-j*j),Q=.55+.45*Math.cbrt(V()),X=new De(zh,J%3?m.olive:m.olive2);X.scale.set(.034,.003,.0085),X.position.set(Ce(D+Math.cos(K)*G*B*Q),(k+j*B*.75*Q)/100,Ie(O+Math.sin(K)*G*B*Q)),X.rotation.set(V()*6.28,V()*6.28,V()*6.28),X.castShadow=!0,X.receiveShadow=!0,ye.add(X)}}tt.push({r:[g-21,p-21,g+21,p+21]});let y=i.condenser,_=[(y[1]+y[3])/2,31];T(y[0],y[1],y[2],y[3],3,58,m.white,{r:1.2});for(let V of[y[1]+6,y[3]-10])T(y[0]+4,V,y[2]-4,V+4,-1,3,m.black);let M=new De(new kn(.19,32),m.black);M.position.set(Ce(y[2]+.2),_[1]/100,Ie(_[0]-8)),M.rotation.y=Math.PI/2,ye.add(M);for(let V=0;V<6;V++){let D=new De(new Pa(.04+V*.03,.0025,4,40),m.metal);D.position.set(Ce(y[2]+.6),_[1]/100,Ie(_[0]-8)),D.rotation.y=Math.PI/2,ye.add(D)}T(y[2]-.3,y[3]-13,y[2]+.3,y[3]-3,8,50,m.frameBlk,{cast:!1}),Fe([y[0]+8,y[3],20],[y[0]+8,-12,20],.9,m.white),Fe([y[0]+14,y[3],16],[y[0]+14,-12,16],.7,m.white);let[b,S,E,P,w]=i.cage,A=3;T(b,S,E,P,-1,.6,m.cageFrame,{cast:!1});for(let[V,D]of[[b,S],[E-A,S],[b,P-A],[E-A,P-A]])T(V,D,V+A,D+A,.6,w,m.cageFrame);for(let V of[.6,w/2-1.5,w-A])T(b+A,S,E-A,S+A,V,V+A,m.cageFrame),T(b+A,P-A,E-A,P,V,V+A,m.cageFrame),T(b,S+A,b+A,P-A,V,V+A,m.cageFrame),T(E-A,S+A,E,P-A,V,V+A,m.cageFrame);T(b+A,(S+P)/2-1.5,E-A,(S+P)/2+1.5,w-A,w,m.cageFrame),T(b+A,S+1.2,E-A,S+1.6,.6,w-A,m.cageMesh),T(b+A,P-1.6,E-A,P-1.2,.6,w-A,m.cageMesh),T(b+A,S+A,E-A,P-A,w-1.6,w-1.2,m.cageMesh);let N=(P-S-2*A)/2,z=[];for(let[V,D]of[[0,S+A],[1,S+A+N]]){let O=D+N,k=[T(E-1.8,D+.3,E-1.4,O-.3,A,w-A,m.cageMesh),T(E-2.2,D+.3,E-1,D+2.3,A,w-A,m.cageFrame),T(E-2.2,O-2.3,E-1,O-.3,A,w-A,m.cageFrame),T(E-2.2,D+2.3,E-1,O-2.3,A,A+2,m.cageFrame),T(E-2.2,D+2.3,E-1,O-2.3,w-A-2,w-A,m.cageFrame),T(E-1,V?D+3:O-5,E+.6,V?D+5:O-3,w/2-6,w/2+6,m.black)];z.push([Qt(E-1.6,0,V?O-.3:D+.3,k),V?-1:1,k])}gt("cage",V=>z.forEach(([D,O])=>{D.rotation.y=O*1.6*V}),1,z.flatMap(V=>V[2])),tt.push({r:[b-15,S,E,P]},{r:[E,S,E+N,P],when:()=>qe.cage&&qe.cage.v>.1})}var Ih=null;function Ry(i,e){let[t,n]=i.ac,s=i.D,r=s-21,o=225,a=253,l={parent:e.S},c=T(t,r,n,s,o,a,m.white,{r:4,parent:e.S});T(t+4,r-.4,n-4,r,a-7,a-4,m.black,{cast:!1,parent:e.S}),T(t+5,r+1.5,n-5,r+8,o-.6,o+.2,m.black,{cast:!1,parent:e.S});let h=T(t+5.5,r+.4,n-5.5,r+7.5,o-1.1,o-.4,m.white,{cast:!1,parent:e.S}),u=Qt((t+n)/2,o-.7,r+7.5,[h],e.S),f=T(n-7.4,r-.25,n-6,r,a-9,a-7.6,m.acLed,{cast:!1,parent:e.S}),d=new De(new Ht(.075,.033),m.acDisp);d.rotation.y=Math.PI,d.position.set(Ce(n-16),(a-12)/100,Ie(r-.3)),e.S.add(d),Ih=Vd("ac",new I(Ce((t+n)/2),(o-2)/100,Ie(r-2)),new I(0,0,-1),new I(1,0,0),(n-t-16)/100),gt("ac",x=>{u.rotation.x=-.8*x,m.acDisp.opacity=x,m.acLed.emissiveIntensity=1.6*x,m.wind.opacity=.5*x,Ih.mesh.visible=x>.02},1.2,[c,h,f,d])}function Xd(i,e){let[t,n]=i.backdrop,s={parent:e.W},r=i.bandTop,o=i.fluteTop,a=274.6,l=Math.max(1,Math.round((n-t)/125)),c=(n-t)/l;for(let y=0;y<l;y++)T(0,t+y*c+(y?.25:0),4,t+(y+1)*c-(y<l-1?.25:0),.5,r,m.charcoal,s);T(0,t,3.4,n,0,r,m.slatBack,{cast:!1,parent:e.W}),T(1.4,t+.5,3,n-.5,r,r+.5,m.ledAcc,{cast:!1,parent:e.W}),Xt(n-t-2,80,2.75,r+40,(t+n)/2,0,0,e.W,m.glowUp).rotation.set(0,Math.PI/2,Math.PI),T(0,t,1,n,r,i.fluteTop,m.slatBack,{cast:!1,parent:e.W}),T(1,t,2.6,n,r,o,m.oakFlute,s);let[h,u]=i.seams,[f,d]=i.niche,[x,v]=i.nicheH,g=5;T(0,t,g,h-.25,o,a,m.oakH,s),T(0,u+.25,g,n,o,a,m.oakH,s),T(0,h+.25,g,u-.25,o,x,m.oakH,s),T(0,h+.25,g,u-.25,v,a,m.oakH,s),T(0,h+.25,g,f,x,v,m.oakH,s),T(0,d,g,u-.25,x,v,m.oakH,s),T(0,f,1,d,x,v,m.oakH,s);for(let y of[h,u])T(0,y-.25,4.4,y+.25,o,a,m.slatBack,{cast:!1,parent:e.W});{let[y,_,M,b]=i.nightstands[0],S=50,E=1.6;for(let[P,w]of[[y,_],[M-E,_],[y,b-E],[M-E,b-E]])T(P,w,P+E,w+E,0,S,m.frameBlk);for(let P of[0,S-E])T(y+E,_,M-E,_+E,P,P+E,m.frameBlk),T(y+E,b-E,M-E,b,P,P+E,m.frameBlk),T(y,_+E,y+E,b-E,P,P+E,m.frameBlk),T(M-E,_+E,M,b-E,P,P+E,m.frameBlk);T(y+E,_+E,M-E,b-E,S-E-.4,S-.3,m.wood),T(y+E,_+E,M-.4,b-E,S-E-14,S-E-.4,m.wood),T(M-.5,_+E+6,M-.3,b-E-6,S-E-2.6,S-E-1.8,m.black,{cast:!1}),T(y+E,_+E,M-E,b-E,8,9.6,m.wood),T(y+6,_+6,y+26,_+30,9.6,13,m.book3),T(y+7,_+7,y+25,_+29,13,15.5,m.book2),T(y+6,_+8,y+24,_+34,S-.3,S+1.8,m.book1),Be(y+20,b-12,3.4,4.2,S-.3,S+11,m.ceramic),tt.push({r:[y,_,M,b]})}{let[y,_,M,b]=i.nightstands[1],S=52;T(y+4,_+4,M-4,b-4,0,6,m.plinth,{cast:!1}),T(y,_,M,b,6,S,m.bedFrame),T(M,_+1.5,M+.2,b-1.5,37.6,38.2,m.black,{cast:!1}),T(y+8,_+6,y+30,_+22,S,S+2.4,m.book3),T(y+9,_+7,y+29,_+21,S+2.4,S+4.4,m.book1);let E=y+18,P=b-13;Be(E,P,4.6,5,S,S+13,m.carafe,{cast:!1}),Be(E,P,1.6,2.6,S+13,S+21,m.carafe,{cast:!1}),Be(E+9,P+3,3,2.6,S,S+8,m.carafe,{cast:!1}),tt.push({r:[y,_,M,b]})}let p=new kn(.03,20);for(let y of i.wallWash){let _=new De(p,m.led);_.rotation.x=Math.PI/2,_.position.set(Ce(i.cove[0]/2),2.748,Ie(y)),Je.add(_)}}function qd(i){let[e,t,n,s]=i.bed,r=i.mattress,o=i.headboard;T(o[0],o[1],o[2],o[3],o[4],o[5],m.bedFrame,{r:.8}),T(e+12,t+12,n-12,s-12,0,8,m.plinth,{cast:!1}),T(e,t,n,s,8,22,m.bedFrame,{r:1}),T(r[0],r[1],r[2],r[3],22,44,m.sheet,{r:4});let a=r[0]+48,l=(r[1]+r[3])/2;T(a,r[1]-3,r[2]+3,r[3]+3,40,49,m.duvet,{r:4}),T(a-2,r[1]-3.3,a+20,r[3]+3.3,47,51.5,m.duvet,{r:2}),T(a,r[1]-4,r[2]+3,r[1]-2,24,47,m.duvet,{r:1}),T(a,r[3]+2,r[2]+3,r[3]+4,24,47,m.duvet,{r:1}),T(r[2]+2,r[1]-3,r[2]+4,r[3]+3,24,47,m.duvet,{r:1});let c=(u,f,d,x,v,g,p,y,_=6)=>{let M=T(u,d,f,x,v,g,p,{r:_,seg:5});return M.rotation.z=y,M},h=r[0];c(h+1,h+15,r[1]+4,l-2,43,93,m.pillow,.22),c(h+1,h+15,l+2,r[3]-4,43,93,m.pillow,.22),c(h+15,h+29,r[1]+9,l-5,43,83,m.pillow2,.3,7),c(h+15,h+29,l+5,r[3]-9,43,83,m.pillow2,.3,7),c(h+29,h+40,l-24,l+24,45,74,m.throwM,.34,5),tt.push({r:[o[0],Math.min(t,o[1]),n,Math.max(s,o[3])]})}function Yd(i,e){let t=i.W,[n,s]=i.tvWall,r={parent:e.E},o=i.sideW,a=275,l=14,c=n+o,h=s-o,u=c+2,f=h-2,d=2.6;for(let[ae,Pe]of[[n,c],[h,s]])T(t-4,ae,t,Pe,l,a,m.tvSide,r);T(t-1,c,t,h,l,a,m.slatBack,{cast:!1,parent:e.E}),T(t-4.8,u,t-1,u+d,l,a,m.bronze,r),T(t-4.8,f-d,t-1,f,l,a,m.bronze,r),T(t-3.4,u+d,t-1,f-d,l,a,m.perf,r),Xt(s-n-2,230,t-4.9,a-115,(n+s)/2,0,-Math.PI/2,e.E,m.glowWash);let x=(n+s)/2,v=i.tv[0],g=v*9/16,p=i.tv[1],y=T(t-7.4,x-v/2,t-3.4,x+v/2,p,p+g,m.black,{r:.6,parent:e.E});T(t-7.65,x-v/2+1,t-7.4,x+v/2-1,p+1,p+g-1,m.screen,{cast:!1,parent:e.E});let _=new De(new Ht((v-2)/100,(g-2)/100),m.tvScreen);_.rotation.y=-Math.PI/2,_.position.set(Ce(t-7.7),(p+g/2)/100,Ie(x)),e.E.add(_),Xt(v+70,g+70,t-3.3,p+g/2,x,0,-Math.PI/2,e.E,m.glowTV),gt("tv",ae=>{m.tvScreen.emissiveIntensity=1.05*ae,m.glowTV.opacity=.38*ae},1.8,[_,y]);let M=i.tvc,[b,S]=M.x,E=m.consoleLt,[P,w]=M.modA,A=M.modAH;T(b+4,P+2,S,w-2,0,6,m.plinth,{cast:!1}),T(b+1.8,P,S,P+1.6,6,A,E),T(b+1.8,w-1.6,S,w,6,A,E),T(S-1.6,P,S,w,6,A,E),T(b+1.8,P,S,w,6,7.6,E),T(b+1.8,P,S,w,A-1.6,A,E),T(b+3,P+1.6,S-1.6,w-1.6,25.4,27,E),T(b+8,P+10,b+30,P+40,7.6,12,m.black,{r:.6}),T(b+7.9,P+14,b+8,P+16,9.4,10.2,m.acLed,{cast:!1}),T(b+6,w-40,b+34,w-8,7.6,21,m.pot,{r:2});for(let ae=0;ae<6;ae++)T(b+10,P+8+ae*3.4,b+32,P+11+ae*3.4,27,42+ae%3*1.5,m[["book1","book2","book3"][ae%3]]);Be(b+20,w-24,6,5,27,39,m.ceramic);let N=[];for(let[ae,Pe,Y]of[[0,P,(P+w)/2],[1,(P+w)/2,w]]){let ge=T(b,Pe+.2,b+1.8,Y-.2,6.3,A-.3,E);N.push([Qt(b,0,ae?Y-.2:Pe+.2,[ge]),ae?1:-1,ge])}gt("consoleA",ae=>N.forEach(([Pe,Y])=>{Pe.rotation.y=Y*1.6*ae}),1,N.map(ae=>ae[2])),tt.push({r:[b-52,P,b,w],when:()=>qe.consoleA&&qe.consoleA.v>.1});let z=M.lamp,V=[Be(z[0],z[1],5,5.5,A,A+1.6,m.black),Be(z[0],z[1],.6,.6,A+1.6,A+16,m.black),Be(z[0],z[1],9.5,10.5,A+14,A+31,m.lampWhite,{seg:32})];Xt(70,90,t-4.2,A+22,z[1],0,-Math.PI/2,e.E,m.glowLamp),jt||(or=new Ci(16761469,0,0,2),or.position.set(Ce(z[0]),(A+24)/100,Ie(z[1])),ye.add(or)),gt("tvlamp",()=>np(),2.4,V);let[D,O]=M.base,[k,B]=M.baseH;T(b,D,S,O,k,B,E);let[J,j]=M.books;for(let ae=0;ae<4;ae++)T(b+8,J+2,b+30,J+26,B+ae*2.6,B+ae*2.6+2.4,m[["book3","book2","book1","book3"][ae]]);for(let ae=0;ae<5;ae++){let Pe=T(b+10,J+32+ae*3.2,b+32,J+34.8+ae*3.2,B,B+22+ae%3*2,m[["book1","book2","book3"][ae%3]]);ae===4&&(Pe.rotation.x=-.25)}Be(b+22,j-6,4,5,B,B+9,m.black);let[K,G]=M.modB,Q=M.modBH,X=M.drawers;T(b+1.8,K,S,G,B,B+1.6,E),T(b+1.8,K,S,K+1.6,B,Q,E),T(b+1.8,G-1.6,S,G,B,Q,E),T(S-1.6,K,S,G,B,Q,E),T(b-.5,K,S,G,Q-1.6,Q,E);for(let ae=1;ae<X.length-1;ae++)T(b+1.8,X[ae]-.8,S,X[ae]+.8,B,Q-1.6,E);let ne=[],_e=[];for(let ae=0;ae<X.length-1;ae++){let Pe=X[ae]+.25,Y=X[ae+1]-.25,ge=T(b,Pe,b+1.8,Y,B+.3,Q-3.4,E);T(b+.6,Pe,b+1.8,Y,Q-3.4,Q-1.6,m.slatBack,{cast:!1});let U=Pe+2,re=Y-2,Z=(U+re)/2,se=[ge,T(b+1.8,U,S-6,re,B+2,B+3,m.drawerIn),T(b+1.8,U,S-6,U+1.2,B+3,Q-5,m.drawerIn),T(b+1.8,re-1.2,S-6,re,B+3,Q-5,m.drawerIn),T(S-7.4,U,S-6,re,B+3,Q-5,m.drawerIn)];ae===0?se.push(T(b+8,Z-34,b+30,Z-16,B+3,B+5,m.book2),T(b+9,Z-33,b+29,Z-17,B+5,B+6.6,m.book1),T(b+10,Z+2,b+26,Z+20,B+3,B+6,m.black,{r:1})):ae===1?se.push(T(b+8,Z-26,b+24,Z-8,B+3,B+6,m.black,{r:1.2}),T(b+8,Z+2,b+12,Z+18,B+3,B+4.6,m.black,{r:.8}),T(b+16,Z+2,b+20,Z+18,B+3,B+4.6,m.black,{r:.8}),T(b+8,Z+24,b+30,Z+42,B+3,B+8,m.book3)):se.push(T(b+8,U+4,b+30,Z,B+3,B+7,m.garm[2],{r:1}),Be(b+20,Z+14,4,4,B+3,B+10,m.ceramic));let W=Qt(0,0,0,se);ne.push([W,W.position.x]),_e.push(ge)}gt("drawers",ae=>ne.forEach(([Pe,Y])=>{Pe.position.x=Y-.3*ae}),1.2,_e),Xt(S-b+20,G-K+10,(b+S)/2,.45,(K+G)/2,-Math.PI/2,0,ye,m.glowSoft);let[we,xe]=M.vase;Be(we,xe,4.6,6.2,Q,Q+14,m.black,{seg:24}),Be(we,xe,3,4.6,Q+14,Q+22,m.black,{seg:24}),Be(we,xe,2.4,3,Q+22,Q+25,m.black,{seg:24});{let ae=Jt(33);for(let Pe=0;Pe<7;Pe++){let Y=[we+(ae()-.5)*2,xe+(ae()-.5)*2,Q+23],ge=ae()*6.28,U=.25+ae()*.45;for(let re=0;re<4;re++){let Z=9+ae()*8,se=[Y[0]+Math.cos(ge+re*.5)*Z*U,Y[1]+Math.sin(ge+re*.5)*Z*U,Y[2]+Z*(1-U*.5)];if(Fe(Y,se,Math.max(.18,.5-re*.1),m.twig,{seg:5,cast:!1}),ae()<.6){let W=[se[0]+(ae()-.5)*9,se[1]+(ae()-.5)*9,se[2]+3+ae()*6];Fe(se,W,.18,m.twig,{seg:4,cast:!1})}Y=se}}}tt.push({r:[b,P,S,w]},{r:[b,D,S,O]},{r:[b-30,X[0],b,X[X.length-1]],when:()=>qe.drawers&&qe.drawers.v>.1}),i.shelving&&Cy(i,e)}function Cy(i,e){let t=i.shelving,[n,s]=t.x,[r,o]=t.y,[a,l]=t.column,c=i.tvc.modBH,h=t.top,u=m.shelfWood,f=Jt(47);T(s-2,r,s,a,c,h,u,{parent:e.E}),T(n,r,s-2,r+1.8,c,h,u),T(n,r,s-2,a,h-2,h,u);let[[d,x],[v,g]]=t.bays;T(n,x,s-2,v,c,h-2,u),T(n+2,r+1.8,s-2,a,c,c+1.8,u);let p=11;T(n+p,a,s,l,0,260,u),T(n,a,n+p,l-p,0,260,u);{let _=new De(new Ri(p/100,p/100,2.6,28,1,!1,Math.PI*1.5,Math.PI/2),u);_.position.set(Ce(n+p),1.3,Ie(l-p)),_.castShadow=_.receiveShadow=!0,ye.add(_)}T(n+.6,a-.3,n+2,l-p,0,260,m.slatBack,{cast:!1});let y=(_,M,b,S)=>{let E=(_+M)/2,P=(n+s)/2-2;switch(S%6){case 0:T(P-10,_+3,P+8,M-4,b,b+2.2,m.book3),T(P-9,_+4,P+7,M-5,b+2.2,b+4.2,m.book2),Bi(P,E,b+9.5,4.2,5.2,4.2,m.bronze);break;case 1:Be(P,E,8.5,5,b,b+4.5,m.black,{seg:28});break;case 2:Be(P,E,3.4,5.4,b,b+16,m.ceramic),Be(P,E,1.8,2.6,b+16,b+21,m.ceramic);break;case 3:T(P-3,E-6,P+3,E+6,b,b+2,m.black),T(P-1.5,E-1.5,P+1.5,E+1.5,b+2,b+16,m.bronze),Bi(P,E,b+20,4.5,6,3,m.bronze);break;case 4:for(let w=0;w<5;w++)T(P-8,_+3+w*3,P+10,_+5.6+w*3,b,b+19+f()*6,m[["book1","book2","book3"][w%3]]);break;default:Be(P-2,E,4.2,4.6,b,b+12,m.black),Bi(P-2,E,b+15,3.4,4.6,3.4,m.black);break}};t.levels.forEach((_,M)=>{let[b,S]=t.bays[M];_.forEach((E,P)=>{T(n+1,b,s-2,S,E-1.8,E,u),T(n+3,b+1,n+4.2,S-1,E-2.4,E-1.8,m.ledWard,{cast:!1})}),[c+1.8,..._].forEach((E,P)=>{E+30<h&&y(b,S,E,P+M*3)})}),Xt(a-r-4,h-c-10,s-2.1,(h+c)/2,(r+a)/2,0,-Math.PI/2,ye),tt.push({r:[n,r,s,l]})}function wd(i,e,t,n,s,r){let a=[T(i,t+.6,e,t+2.2,n,s,m.charcoal),T(i,t,i+6,t+.6,n,s,m.charcoal),T(e-6,t,e,t+.6,n,s,m.charcoal),T(i+6,t,e-6,t+.6,n,n+6,m.charcoal),T(i+6,t,e-6,t+.6,s-6,s,m.charcoal)];return r&&a.push(T(i+6,t,e-6,t+.6,r-2.5,r+2.5,m.charcoal)),a}var ll=[];function Zd(i){let[e,t,n,s]=i.storage,r=260,o=1.8,a=95,l=Jt(91),c=i.storeBays;T(e,s-1,n,s,0,r,m.woodDark,{cast:!1}),T(n-o,t+2.2,n,s,0,r,m.charcoal),T(e,t+2.2,e+o,s,0,r,m.charcoal),T(e,t+2.2,n,s,r-2,r,m.charcoal);let h=[];for(let[f,d,x]of c)if(f==="shaker"){T(d,t+2.2,x,s-1,0,2,m.woodDark,{cast:!1});for(let[p,y]of[40,80,120,160,200,238].entries()){T(d+.1,t+3,x-.1,s-1,y-1.6,y,m.woodDark);let _=d+3;for(;_<x-8;){let M=Math.min(x-3-_,12+l()*8);T(_,t+8,_+M,s-6,y,y+8+l()*(p===5?10:18),p===5?m.pot:m.garm[l()*m.garm.length|0],{cast:!1}),_+=M+1.2}}let v=d<=e+.5,g=wd(d+.2,x-.2,t,.4,r-.4,a);g.push(T(v?x-2.4:d+.4,t-2,v?x-.4:d+2.4,t,a+6,a+34,m.black,{r:.4})),h.push([Qt(v?d+.2:x-.2,0,t,g),v?1:-1,g]),tt.push({r:[d,t-(x-d),x,t],when:()=>qe.wardrobe&&qe.wardrobe.v>.1})}else if(f==="column"){wd(d+.2,x-.2,t,.4,a-.2,0),T(d+.2,t,x-.2,t+2.2,a+.2,r-.4,m.wood);let v=(d+x)/2;if(T(v-.7,t-1.6,v+.7,t,112,190,m.lampWhite,{cast:!1}),T(v-1.4,t-2.6,v+1.4,t,136,144,m.black,{r:.4}),Xt(x-d-4,150,v,151,t-.1,0,Math.PI,ye,m.glowSoft),!jt){let g=new Ci(16761469,0,0,2);g.position.set(Ce(v),1.55,Ie(t-20)),ye.add(g),Hh.push(g)}}else{T(d,t+2.2,d+1.8,s-1,0,r-2,m.woodDark),T(x-1.8,t+2.2,x,s-1,0,r-2,m.woodDark),T(d,t+2.2,x,s-1,0,8,m.woodDark);let v=d+1.8,g=x-1.8,p=[8,48,88,128,168,208];for(let[_,M]of p.entries()){_&&T(v,t+4,g,s-1,M-1.6,M,m.woodDark),T(v+1,t+4,g-1,t+5,M+37,M+38,m.ledWard,{cast:!1});let b=_%3;if(b===0){let S=v+2;for(;S<g-6;){let E=2.2+l()*1.6;T(S,t+18,S+E,s-12,M,M+20+l()*8,m[["book1","book2","book3"][l()*3|0]]),S+=E+.3}}else if(b===1)Be((v+g)/2-8,(t+s)/2,5,3.6,M,M+22,m.ceramic),T(g-18,t+14,g-4,s-14,M,M+4,m.book3),Bi(g-11,(t+s)/2,M+9,5,5,5,m.bronze);else{for(let S=0;S<4;S++)T(v+2,t+16,g-8,s-12,M+S*2.4,M+S*2.4+2.2,m[["book3","book1","book2","book3"][S]]);Be(g-8,(t+s)/2,3,3,M+9.6,M+26,m.black)}}Xt(g-v-2,r-30,(v+g)/2,(r-10)/2,s-1.2,0,Math.PI,ye);let y=(d+x)/2;for(let[_,M,b]of[[0,d+.2,y-.15],[1,y+.15,x-.2]]){let E=t-.2,P=E+1.8,w=.4,A=r-.4,N=[T(M,E,M+1.6,P,w,A,m.frameBlk),T(b-1.6,E,b,P,w,A,m.frameBlk),T(M+1.6,E,b-1.6,P,w,w+1.6,m.frameBlk),T(M+1.6,E,b-1.6,P,A-1.6,A,m.frameBlk),T(M+1.6,E+.6,b-1.6,E+1.2,w+1.6,A-1.6,m.smoked,{cast:!1}),T(_?M+1.6:b-2.6,E-2,_?M+2.6:b-1.6,E,100,150,m.black)],z=_?b:M;ll.push([Qt(z,0,E,N),_?-1:1,N])}}gt("storage",f=>{ll.forEach(([d,x])=>{d.rotation.y=x*1.75*f})},.9,ll.flatMap(f=>f[2])),h.length&&gt("wardrobe",f=>{h.forEach(([d,x])=>{d.rotation.y=x*1.6*f})},.9,h.flatMap(f=>f[2]));let u=c.find(f=>f[0]==="glass");tt.push({r:i.storage},{r:[u[1]-6,t-26,u[2]+6,t],when:()=>qe.storage&&qe.storage.v>.1})}function $d(i,e){let t=i.W,[n,s]=i.kitchen,r=i.kitX,o=88,a=Jt(77),[l,c]=i.sink,[h,u]=i.hob;T(r+5,n,t-2,s,0,10,m.plinth,{cast:!1});let f={cast:!1};T(r+2,n,t-2,s,10,11.8,m.woodDark,f),T(t-4,n,t-2,s,11.8,o-3,m.woodDark,f),T(r+2,n,t-4,s,o-4.8,o-3,m.woodDark,f);let d=i.kitCuts||[n,l-4,c+4,h-20,u+20,s],x=i.kitDrawer??3,v=i.kitSink??1;d.forEach((Y,ge)=>{let U=ge===0?Y:ge===d.length-1?Y-1.8:Y-.9;T(r+2,U,t-4,U+1.8,11.8,o-4.8,m.woodDark,f)});let g=[],p=[],y=[];for(let Y=0;Y<d.length-1;Y++){let ge=d[Y]+.2,U=d[Y+1]-.2,re=d[Y]+.9,Z=d[Y+1]-.9,se=(re+Z)/2;if(Y===x){for(let[de,[C,R]]of[[10.4,36],[36.4,61],[61.4,o-6.4]].entries()){let q=T(r,ge,r+2,U,C,R,m.wood),oe=C+2,he=R-C-6,ce=[q,T(r+2,re+1,t-8,Z-1,oe,oe+1.2,m.drawerIn),T(r+2,re+1,t-8,re+2.2,oe,oe+he,m.drawerIn),T(r+2,Z-2.2,t-8,Z-1,oe,oe+he,m.drawerIn),T(t-9.2,re+1,t-8,Z-1,oe,oe+he,m.drawerIn)];if(de===2)for(let be=0;be<5;be++)ce.push(T(r+8+be*7,re+4,r+13+be*7,Z-4,oe+1.2,oe+2.4,be%2?m.steel:m.black));else de===1?ce.push(Be(r+24,se,11,10,oe+1.2,oe+12,m.black),Be(r+24,se,10.4,10.4,oe+12,oe+12.4,m.steel)):ce.push(Be(r+20,se-6,10,9,oe+1.2,oe+16,m.steel),Be(r+38,se+8,7,7,oe+1.2,oe+12,m.black));let Ue=Qt(0,0,0,ce);p.push([Ue,Ue.position.x,.42-de*.04]),y.push(q)}continue}let W=T(r,ge,r+2,U,10.4,o-6.4,m.wood),Ae=Y===0;if(g.push([Qt(r,0,Ae?ge:U,[W]),Ae?-1:1]),y.push(W),Y===v){let de=(r+6+t-14)/2,C=(l+c)/2;Fe([de,C,o-19],[de,C,46],2,m.white),Fe([de,C,46],[t-4,C,46],2,m.white),T(r+10,re+4,r+34,Z-4,11.8,46,m.black,{r:1})}else{T(r+3,re,t-4,Z,48,49.6,m.woodDark);let de=re+4;for(;de<Z-14;){let C=4+a()*3;Be(r+20+a()*10,de+C,C,C,49.6,59.6+a()*12,a()<.5?m.ceramic:m.porcelain,{cast:!1}),de+=2*C+3}Be(r+26,se,12,11,11.8,24,m.steel)}}gt("kitbase",Y=>{g.forEach(([ge,U])=>{ge.rotation.y=U*1.55*Y}),p.forEach(([ge,U,re])=>{ge.position.x=U-re*Y})},1,y),tt.push({r:[r-46,n,r,s],when:()=>qe.kitbase&&qe.kitbase.v>.1}),T(r+.5,n,r+2.5,s,o-6,o-3,m.black,{cast:!1});let _=r+6,M=t-14;T(r-1,n,t,l,o-3,o+1,m.travTop),T(r-1,c,t,s,o-3,o+1,m.travTop),T(r-1,l,_,c,o-3,o+1,m.travTop),T(M,l,t,c,o-3,o+1,m.travTop),T(t-1.6,n,t,s,o+1,150,m.travTop,{parent:e.E}),T(_,l,M,c,o-20,o-19,m.inox,{cast:!1}),T(_,l,_+.8,c,o-19,o+.9,m.inox,{cast:!1}),T(M-.8,l,M,c,o-19,o+.9,m.inox,{cast:!1}),T(_+.8,l,M-.8,l+.8,o-19,o+.9,m.inox,{cast:!1}),T(_+.8,c-.8,M-.8,c,o-19,o+.9,m.inox,{cast:!1}),Be((_+M)/2,(l+c)/2,2.2,2.2,o-19,o-18.6,m.metal,{cast:!1});let b=t-7,S=(l+c)/2,E=b-22,P=[Be(b,S,2.6,2.6,o+1,o+4,m.metal),Fe([b,S,o+4],[b,S,o+34],1.25,m.metal),Fe([b,S,o+34],[b-5,S,o+39],1.25,m.metal),Fe([b-5,S,o+39],[E+4,S,o+39],1.25,m.metal),Fe([E+4,S,o+39],[E,S,o+34],1.25,m.metal),Fe([b+2.2,S,o+14],[b+2.2,S+8,o+18],.6,m.metal)];Gh("tap",[[E,S,o+33.4,o-18.6]],P);let w=r+6,A=w+50,N=(h+u)/2;T(w,h,A,u,o+1,o+1.6,m.induction,{cast:!1});let z=[];for(let Y of[w+14,A-14]){let ge=new De(new Zs(.075,.088,48),m.hobRing);ge.rotation.x=-Math.PI/2,ge.position.set(Ce(Y),(o+1.62)/100,Ie(N)),ye.add(ge),z.push(ge);let U=new De(new Zs(.035,.044,40),m.hobRing);U.rotation.x=-Math.PI/2,U.position.copy(ge.position),ye.add(U),z.push(U)}let V=[Be(w+14,N,11,10,o+1.6,o+8,m.black),Be(w+14,N,10.4,10.4,o+8,o+8.4,m.steel),Fe([w+14,N+11,o+6],[w+14,N+30,o+8],1.1,m.black)];gt("hob",Y=>{m.hobRing.emissiveIntensity=2.4*Y},1.4,[...z,...V]);let D=i.upperX,O=150,k=245,B={parent:e.E};T(D,n,t-1.6,s,O,O+1.8,m.woodDark,B),T(D,n,t-1.6,s,k-1.8,k,m.woodDark,B),T(D,n,t-1.6,n+1.8,O,k,m.woodDark,B),T(D,s-1.8,t-1.6,s,O,k,m.woodDark,B),T(t-2.4,n,t-1.6,s,O,k,m.woodDark,{cast:!1,parent:e.E}),T(D,n,t,s,k,260,m.wood,B);let J=Math.max(2,Math.round((s-n)/55)),j=(s-n)/J,K=[];for(let Y=0;Y<J;Y++){let ge=n+Y*j,U=ge+j;Y>0&&T(D+.5,ge-.6,t-2.4,ge+.6,O,k,m.woodDark,B),T(D+.5,ge+1,t-2.4,U-1,O+46,O+47,m.glass,{cast:!1,parent:e.E}),T(t-3.4,ge+1,t-2.4,U-1,O+47,O+48,m.ledKit,{cast:!1,parent:e.E});for(let Ae of[O+1.8,O+47]){let de=ge+4;for(;de<U-8;){let C=3+a()*2,R=8+a()*10;Be(D+15,de+C,C,C*.85,Ae,Ae+R,a()<.5?m.ceramic:m.porcelain,{cast:!1,parent:e.E}),de+=2*C+2.5}}let re=ge+.3,Z=U-.3,se=2,W=[T(D-1.8,re,D,re+se,O+.3,k-.3,m.frameBlk,B),T(D-1.8,Z-se,D,Z,O+.3,k-.3,m.frameBlk,B),T(D-1.8,re+se,D,Z-se,O+.3,O+.3+se,m.frameBlk,B),T(D-1.8,re+se,D,Z-se,k-.3-se,k-.3,m.frameBlk,B),T(D-1.2,re+se,D-.6,Z-se,O+.3+se,k-.3-se,m.smoked,{cast:!1,parent:e.E}),T(D-3.4,Z-3.6,D-1.8,Z-2.4,O+4,O+20,m.black,B)];K.push([Qt(D-1.8,0,re,W,e.E),W])}gt("uppers",Y=>K.forEach(([ge])=>{ge.rotation.y=-1.45*Y}),.9,K.flatMap(Y=>Y[1])),T(D-4,h-4,t-3,u+4,O-3,O,m.frameBlk,B),T(D+1,n+2,D+3,s-2,O-.6,O,m.ledKit,{cast:!1,parent:e.E}),Xt(s-n-6,60,t-1.7,O-30,(n+s)/2,0,-Math.PI/2,e.E);{let Y=c+26;Y+22>h-4&&Y<u+4&&(Y=u+12),Y+22<s-22&&T(r+8,Y,r+40,Y+22,o+1,o+3.4,m.wood,{r:.6})}Be(t-12,s-14,5.5,4.5,o+1,o+18,m.ceramic),Be(t-12,s-14,.4,.4,o+18,o+40,m.twig,{cast:!1}),My(t-12,s-14,10,(o+32)/100,.006,.05,.6,m.leaf),tt.push({r:[r,n,t,s]});let[G,Q]=i.fridge,X=r+2;T(X,G,t-1,G+1.8,0,260,m.woodDark),T(X,Q-1.8,t-1,Q,0,260,m.woodDark),T(t-3,G,t-1,Q,0,260,m.woodDark),T(X,G,t-1,Q,0,2,m.woodDark),T(X,G+1.8,t-3,Q-1.8,182,260,m.woodDark),T(r,G+.3,r+2,Q-.3,182.4,186,m.woodDark),T(r,G+3,r+2,Q-3,186.4,225,m.induction,{cast:!1}),T(r-.3,Q-13,r,Q-5,192,218,m.black,{cast:!1}),T(r,G+.3,r+2,Q-.3,225.4,259.6,m.woodDark);let ne=X+1,_e=t-3,we=G+1.8,xe=Q-1.8;T(_e-1,we,_e,xe,2,182,m.fridgeIn,{cast:!1}),T(ne,we,_e,we+1,2,182,m.fridgeIn,{cast:!1}),T(ne,xe-1,_e,xe,2,182,m.fridgeIn,{cast:!1}),T(ne,we,_e,xe,180.6,182,m.fridgeIn,{cast:!1});for(let Y of[42,86,128])T(ne+2,we+1,_e-1,xe-1,Y,Y+.8,m.glass,{cast:!1});for(let[Y,ge]of[[2.4,3],[42.8,4],[86.8,3],[128.8,4]])for(let U=0;U<ge;U++){let re=we+6+U*(xe-we-12)/ge,Z=m.food[(U+(Y|0))%m.food.length];U%2?Be(ne+22+U*3,re+5,4,4,Y,Y+10+U*5%12,Z,{cast:!1}):T(ne+12,re,ne+28,re+10,Y,Y+8+U*3%9,Z,{cast:!1})}let ae=[T(r,G+.3,r+2.2,Q-.3,.4,182,m.woodDark),T(r-1.6,G+5,r,G+6.6,30,160,m.black)];for(let Y of[30,72,114])ae.push(T(r+2.2,G+6,r+9,Q-6,Y,Y+1.4,m.fridgeIn,{cast:!1}),T(r+8.4,G+6,r+9,Q-6,Y+1.4,Y+8,m.glass,{cast:!1}));let Pe=Qt(r,0,Q-.3,ae);Xt(70,110,r-2,90,(G+Q)/2,0,-Math.PI/2,ye,m.glowFridge),gt("fridge",Y=>{Pe.rotation.y=1.7*Y,m.fridgeIn.emissiveIntensity=.55*Y,m.glowFridge.opacity=.35*Y},1.2,ae),tt.push({r:[r,G,t,Q]},{r:[r-(Q-G),Q-6,r,Q],when:()=>qe.fridge&&qe.fridge.v>.1})}function jd(i,e){return i.userData.base=e,ye.add(i),i.target&&ye.add(i.target),Vh.push(i),i}function Py(i,e){let t=i.bath,n=i.D,s=t.x1,r=t.y0+t.wall,o=260,[a,l]=i.bathDoor,c=i.shower,[h,u,f,d]=i.vanity,x=i.wc,v=T(0,r,s,n,0,.8,m.bathFloor,{cast:!1});v.userData.walk=!0,T(0,r,s,c.y1,.8,1,m.showerFloor,{cast:!1}),T(4,r+3,s-4,r+7,.95,1.05,m.frameBlk,{cast:!1}),T(0,r,s,n,o,o+1,m.bathCeil,{cast:!1,parent:Je});let g=c.glass;T(0,c.y1-.5,g,c.y1+.5,1,o,m.glass,{cast:!1}),T(0,c.y1-1,g,c.y1+1,1,2.6,m.fit,{cast:!1}),T(g-1.6,c.y1-1,g,c.y1+1,1,o,m.fit,{cast:!1}),Fe([g-1,c.y1,200],[g-1,r,200],.8,m.fit),tt.push({r:[0,c.y1-1,g,c.y1+1]});let p=22,y=82;T(p,r-.2,y,r+.2,108,140,m.slatBack,{cast:!1}),T(p,r,y,r+1.2,138.6,140,m.ledAcc,{cast:!1});for(let[W,Ae]of[[0,p+8],[1,p+15],[2,p+22]])Be(Ae,r+4,2.3,2.3,108,118-W*1.5,W===1?m.frameBlk:m.bottle,{seg:20}),Be(Ae,r+4,.9,.9,118-W*1.5,119.5-W*1.5,m.frameBlk,{seg:12});let _=c.head[0],M=c.head[1],b=[T(_-14,M-14,_+14,M+14,o-1.4,o-.6,m.fit),Be(_,M,1,1,o-.6,o,m.fit)],S=(r+c.y1)/2;b.push(Fe([1.2,S,95],[1.2,S,190],.9,m.fit),T(0,S-2,1.4,S+2,93,97,m.fit),T(0,S-2,1.4,S+2,188,192,m.fit)),b.push(T(1.2,S-2.4,4.6,S+2.4,160,166,m.fit,{r:.8}),Fe([4.2,S,163],[8.8,S,175],1.3,m.fit),Fe([8.8,S,175],[9.4,S,177],3.6,m.fit,{seg:24})),b.push(gl([[4,S,158],[5,S+1,130],[6,S+3,98],[4,S+8,84],[2.4,S+12,90]],.55,m.hose)),b.push(Fe([0,S+18,100],[.8,S+18,100],3.6,m.fit,{seg:28}),Fe([.8,S+18,100],[4.4,S+18,100],2.2,m.fit,{seg:24}),Fe([3.8,S+18,100],[4.6,S+18,92.5],.7,m.fit)),zd("shower",new I(Ce(_),(o-1.6)/100,Ie(M)),new I(0,-1,0),b,{v0:.5,spread:.16,rad:.12,r0:.15,r1:.24,splash:.24}),T(h,u,f,d,45,81,m.wood),T(f,u+.6,f+.4,(u+d)/2-.4,46,80,m.wood),T(f,(u+d)/2+.4,f+.4,d-.6,46,80,m.wood),T(f+.4,u+4,f+1.2,d-4,62.4,63.6,m.black,{cast:!1}),T(h,u,f+1,d,81,84,m.travTop),T(h+2,u+2,f-3,d-2,44.4,45,m.ledAcc,{cast:!1}),Xt(f-h+20,d-u+10,(h+f)/2,.9,(u+d)/2,-Math.PI/2,0,ye,m.glowSoft);let E=(h+f)/2+2,P=(u+d)/2,w=new De(new qr([[.001,0],[.12,.004],[.18,.04],[.2,.1],[.2,.13],[.19,.13],[.185,.1],[.165,.045],[.11,.016],[.001,.014]].map(W=>new le(W[0],W[1])),48),m.basin);w.position.set(Ce(E),.84,Ie(P)),w.castShadow=!0,w.receiveShadow=!0,ye.add(w),Be(E,P,2,2,85.4,85.6,m.fit,{cast:!1});let A=E-4,N=[Fe([0,P,112],[.8,P,112],3,m.fit,{seg:24}),Fe([.8,P,112],[A+1,P,112],.95,m.fit),Fe([0,P+14,112],[.8,P+14,112],3,m.fit,{seg:24}),Fe([.8,P+14,112],[3.8,P+14,112],1.9,m.fit,{seg:20}),Fe([3.4,P+14,112],[4.1,P+14,105.5],.6,m.fit)];Gh("basin",[[A,P,111.2,85.6]],N),tt.push({r:[h,u,f,d]});let z=120,V=205,D=u+4,O=d-4;T(0,D+1.5,1.2,O-1.5,z+1.5,V-1.5,m.black,{cast:!1,parent:e.W});let k=T(1.2,D,1.6,O,z,V,m.mirror,{cast:!1,parent:e.W});if(k.userData.keep=!0,Pi&&!jt&&!Wh()){let W=new Pi(new Ht((O-D)/100,(V-z)/100),{textureWidth:1024,textureHeight:1024,color:11842740,clipBias:.003,multisample:2});W.rotation.y=Math.PI/2,W.position.set(Ce(1.62),(z+V)/200,Ie((D+O)/2)),e.W.add(W),ki={live:W,plain:k}}Xt(O-D+30,V-z+30,.3,(z+V)/2,(D+O)/2,0,Math.PI/2,e.W,m.glowSoft),T(1.2,D-.2,1.4,O+.2,z-1.2,z-.6,m.ledBath,{cast:!1,parent:e.W}),T(1.2,D-.2,1.4,O+.2,V+.6,V+1.2,m.ledBath,{cast:!1,parent:e.W});let B=n-18,[J,j]=x.cistern,K=x.cx;T(J,B,j,n,0,112,m.bathWall),T(J-1,B-1.5,j,n,112,115,m.travTop),T(K-11,B-.6,K+11,B,92,107,m.black,{cast:!1}),T(K-9.5,B-.9,K-.5,B-.6,93.5,105.5,m.fit,{cast:!1}),T(K+.5,B-.9,K+9.5,B-.6,93.5,105.5,m.fit,{cast:!1}),Be(J+14,B-7,3.6,3.6,115,128,m.bottle),T(j-30,B-12,j-6,B-2,115,125,m.garm[0],{r:1.5});let G=B-54;ir(K-18,G,K+18,B+1,13,40,14,3,2.4,m.wc,{top:31,ky:.42,kx:.3}),ir(K-17.7,G+.3,K+17.7,B-1,40,41.6,13.5,3,.6,m.wcSeat);{let W=Be(K,G+21,10.5,10.5,41.6,41.72,m.wcIn,{cast:!1,seg:36});W.scale.z=1.38}let Q=[ir(K-17.7,G+.3,K+17.7,B-2,41.75,43.6,13.5,3,.8,m.wcSeat)],X=Qt(K,42.6,B-2,Q);gt("wc",W=>{X.rotation.x=W*1.5},1.6,Q),tt.push({r:[J,B,j,n]},{r:[K-18,G,K+18,B]});let ne=x.jet,_e=[Fe([s,ne,74],[s-3.4,ne,74],1.1,m.fit),T(s-4.4,ne-1.4,s-2.2,ne+1.4,70,76,m.fit,{r:.6}),Fe([s-3.3,ne,61],[s-3.3,ne,77],1.2,m.fit),Fe([s-3.3,ne,77],[s-6.6,ne,80],1.1,m.fit)];Hd("bidet",new I(Ce(s-7),.802,Ie(ne)),new I(-.5,-.87,0),{n:Vn?90:150,v0:1.8,spread:.1,w:.0018,l:.028},_e),gl([[s-3.3,ne,61],[s-3.6,ne-.6,40],[s-4.5,ne-2.5,22],[s-3,ne-5,26],[s-1.5,ne-4.6,50],[s-.6,ne-2,71]],.45,m.hose),Fe([s,ne-22,68],[s-7,ne-22,68],.6,m.fit),Be(s-7.5,ne-22,5.5,5.5,64,72,m.white,{seg:24}).rotation.x=Math.PI/2;let[we,xe]=i.towel;for(let W of[we,xe]){Fe([s-4.5,W,92],[s-4.5,W,168],.95,m.fit);for(let Ae of[96,164])Fe([s,W,Ae],[s-4.5,W,Ae],.6,m.fit)}for(let W of[100,116,132,148,162])Fe([s-4.5,we,W],[s-4.5,xe,W],.7,m.fit);T(s-7.5,we+3,s-5.6,xe-3,112,160,m.garm[7],{r:.8}),T(K-10,B-40,K+10,B-20,o-.8,o-.2,m.white,{cast:!1,parent:Je});for(let W=0;W<6;W++)T(K-9,B-39+W*3.2,K+9,B-38+W*3.2,o-.85,o-.8,m.black,{cast:!1,parent:Je});let ae=new kn(.03,20);for(let[W,Ae]of[[40,P-18],[40,P+18],[_+30,M-30],[100,(a+l)/2],[K,B-70]]){let de=new De(ae,m.ledBath);de.rotation.x=Math.PI/2,de.position.set(Ce(W),(o-.3)/100,Ie(Ae)),Je.add(de)}let Pe=(W,Ae,de,C,R,q)=>{let oe=new zn(16763279,0,0,.75,.8,2);oe.position.set(Ce(W),(o-4)/100,Ie(Ae)),oe.target.position.set(Ce(de),R/100,Ie(C)),jd(oe,q)};jt?Pe(s/2,(r+n)/2,s/2,(r+n)/2,0,4.2):(Pe(40,P,10,P,90,3.6),Pe(_+20,M,_,M,0,3));let Y=s+t.wall,ge=.35,U=216,re=(W,Ae)=>{let de=Math.max(1,Math.round((Ae-W)/54)),C=(Ae-W)/de;for(let R=0;R<de;R++)T(Y,W+R*C+ge,Y+2,W+(R+1)*C-ge,0,259.6,m.wood)};re(t.y0,a),re(l,n),T(Y,a+ge,Y+2,l-ge,U+ge,259.6,m.wood),T(Y,t.y0,Y+.4,a,0,260,m.slatBack,{cast:!1}),T(Y,l,Y+.4,n,0,260,m.slatBack,{cast:!1}),T(Y,a,Y+.4,l,U,260,m.slatBack,{cast:!1});let Z=[T(Y-4,a+ge,Y+2,l-ge,.4,U-ge,Wt(m.wood,{W:m.bathWall})),T(Y+2,l-9,Y+6,l-6.5,101,106,m.black,{r:1}),T(Y+4,l-22,Y+6,l-6.5,102.5,104.5,m.black,{r:1}),T(Y-8,l-9,Y-4,l-6.5,101,106,m.black,{r:1}),T(Y-8,l-22,Y-6,l-6.5,102.5,104.5,m.black,{r:1})],se=Qt(Y-4,0,a+ge,Z);gt("bathdoor",W=>{se.rotation.y=-W*Math.PI*.5},1.1,Z),tt.push({r:[s,a,Y+2,l],when:()=>!(qe.bathdoor&&qe.bathdoor.v>.85)},{r:[Y-4-(l-a),a,Y-4,a+6],when:()=>qe.bathdoor&&qe.bathdoor.v>.1})}function Iy(i){let e=new kn(.0125,18),t=i.H,[n,s,r]=i.channel;T(n-6,s,n+6,r,t-1.7,t-1,m.black,{cast:!1,parent:Je}),[s+60,(s+r)/2,r-60].forEach((h,u)=>{T(n-3.2,h-31,n+3.2,h+31,t-2.3,t-1.7,m.frameBlk,{cast:!1,parent:Je});for(let d=0;d<6;d++){let x=new De(e,m.led);x.rotation.x=Math.PI/2,x.position.set(Ce(n),(t-2.35)/100,Ie(h-25+d*10)),Je.add(x)}if(jt||u===1)return;let f=new zn(16763279,0,0,.95,.75,2);f.position.set(Ce(n),(t-4)/100,Ie(h)),f.target.position.set(Ce(n),0,Ie(h)),ye.add(f),ye.add(f.target),Oi.push(f)});let[a,l,c]=i.track;T(a-2,l,a+2,c,256.5,260,m.black,{parent:Je});for(let[h,u]of[l+40,(l+c)/2,c-40].entries()){Fe([a,u,256.5],[a,u,252],.6,m.black,{parent:Je});let f=Fe([a,u,252],[a+6,u,240],3.2,m.black,{parent:Je});f.castShadow=!1;let d=new De(new kn(.026,20),m.led);if(d.position.set(Ce(a+6.4),2.392,Ie(u)),d.lookAt(Ce(a+26),1.6,Ie(u)),Je.add(d),!jt&&h===1){let x=new zn(16763279,0,0,.9,.75,2);x.position.set(Ce(a+6),2.38,Ie(u)),x.target.position.set(Ce(i.W-20),.9,Ie(u)),ye.add(x),ye.add(x.target),Oi.push(x)}}for(let[h,u]of i.downlights){let f=new De(new kn(.045,24),m.led);if(f.rotation.x=Math.PI/2,f.position.set(Ce(h),2.595,Ie(u)),Je.add(f),!jt){let d=new zn(16763279,0,0,.85,.75,2);d.position.set(Ce(h),2.58,Ie(u)),d.target.position.set(Ce(h),0,Ie(u)),ye.add(d),ye.add(d.target),Oi.push(d),d.userData.down=!0}}if(jt){let h=new zn(16763279,0,0,1.3,.9,1.4);h.position.set(Ce(i.W/2),(t-4)/100,Ie(i.floorSplit/2)),h.target.position.set(Ce(i.W/2),0,Ie(i.floorSplit/2)),ye.add(h),ye.add(h.target),Oi.push(h)}}function Ly(i){performance.mark("k-build0"),wy(),di=i.W/100,pi=i.D/100,Fd=i.H/100,ye=new sn,i.mirror&&(ye.scale.x=-1),an.add(ye),ye.updateMatrixWorld(!0);for(let r of[pe.netflix,pe.acDisp,pe.lockDisp])r.repeat.x=i.mirror?-1:1,r.offset.x=i.mirror?1:0;if(mo=[],ki=null,fo=[],sr={},dr=[],tt=[],Oi=[],Hh=[],Vh=[],by=[],ll=[],rr=null,or=null,Ih=null,ut=i,qe={},i.kind==="g"){let r={};for(let o of i.wallGroups)r[o.id]=oo(o.id,o.n[0],o.n[1],Ce(o.p[0]),Ie(o.p[1]));Xy(i,r)}else{let r={W:oo("W",1,0,Ce(0),0),N:oo("N",0,1,0,Ie(0)),E:oo("E",-1,0,Ce(i.W),0),S:oo("S",0,-1,0,Ie(i.D))};Ay(i,r),Gd(i,r),Wd(i,r),Ry(i,r),Xd(i,r),qd(i),Yd(i,r),Zd(i),$d(i,r),Py(i,r),Iy(i)}let e=i.balcony;lo=new De(new Ht(26,11),m.sky),lo.position.set(Ce(i.W/2),1.5,Ie(e.y0)-5.5),ye.add(lo);let[t,n]=i.slide;Ui=new zn(15331839,2,0,1.2,1,0),Ui.position.set(Ce((t+n)/2),1.9,Ie(e.y0-90)),Ui.target.position.set(Ce((t+n)/2),.4,Ie(i.D*.4)),ye.add(Ui.target),ye.add(Ui);let s=Math.max(di,pi-e.y0/100)/2+1.2;Object.assign(pn.shadow.camera,{left:-s,right:s,top:s,bottom:-s}),pn.shadow.camera.updateProjectionMatrix(),performance.mark("k-build1"),Ey(),Sy(),lr=!0,ep(mr),Pl()}m.sofa=me({map:pe.boucle,roughness:1});m.rug=me({map:pe.fabric,roughness:1});m.livLamp=me({color:16052198,roughness:.5,emissive:16765600,emissiveIntensity:0});m.glowLiv=Qn(pe.glowR,16758903,0);m.shade.side=Ut;function Td(i,e,t){let n=(i.rot||0)*Math.PI/180,s=Math.round(Math.cos(n)),r=Math.round(Math.sin(n)),o=i.mir?-e:e;return[i.x+s*o-r*t,i.y+r*o+s*t]}function Dy(i,e){let[t,n]=Td(i,e[0],e[1]),[s,r]=Td(i,e[2],e[3]);return[Math.min(t,s),Math.min(n,r),Math.max(t,s),Math.max(n,r)]}function Th(i,e){let t=new sn;return t.position.set(Ce(i.x),0,Ie(i.y)),t.rotation.y=-(i.rot||0)*Math.PI/180,i.mir&&(t.scale.x=-1),t.userData.frame=!0,e.add(t),t}function Jd(i,e,t){let n={room:ye,ceilG:Je,RW:di,RD:pi,n:tt.length},s=Th(i,ye),r=Th(i,Je),o={};for(let a of["W","N","E","S"]){let l=i.walls&&i.walls[a];o[a]=l&&e[l]?Th(i,e[l]):s}ye=s,Je=r,di=0,pi=0;try{t(o)}finally{ye=n.room,Je=n.ceilG,di=n.RW,pi=n.RD;for(let a=n.n;a<tt.length;a++)tt[a].r=Dy(i,tt[a].r)}}var Wh=()=>(ye.updateMatrixWorld(!0),ye.matrixWorld.determinant()<0);function Uy(i,e){let t=i.id||"ac",n=i.w||80,s=-n/2,r=n/2,o=-21,a=i.h0||225,l=a+28,c={parent:e.S},h=t!=="ac",u=h?m.acDisp.clone():m.acDisp,f=h?m.acLed.clone():m.acLed,d=h?m.wind.clone():m.wind,x=T(s,o,r,0,a,l,m.white,{r:4,parent:e.S});T(s+4,o-.4,r-4,o,l-7,l-4,m.black,{cast:!1,parent:e.S}),T(s+5,o+1.5,r-5,o+8,a-.6,a+.2,m.black,{cast:!1,parent:e.S});let v=T(s+5.5,o+.4,r-5.5,o+7.5,a-1.1,a-.4,m.white,{cast:!1,parent:e.S}),g=Qt(0,a-.7,o+7.5,[v],e.S),p=T(r-7.4,o-.25,r-6,o,l-9,l-7.6,f,{cast:!1,parent:e.S}),y=new De(new Ht(.075,.033),u);y.rotation.y=Math.PI,y.position.set(Ce(r-16),(l-12)/100,Ie(o-.3)),e.S.add(y);let _=Vd(t,new I(Ce(0),(a-2)/100,Ie(o-2)),new I(0,0,-1),new I(1,0,0),(n-16)/100,d);gt(t,M=>{g.rotation.x=-.8*M,u.opacity=M,f.emissiveIntensity=1.6*M,d.opacity=.5*M,_.mesh.visible=M>.02},1.2,[x,v,p,y])}function Ny(i,e){let t=i.id,n=i.w,s=i.t||10,r=i.h||213,o={parent:e.W},a=m[i.mat||"door"];for(let[u,f]of[[-1.4,0],[s,s+1.4]])T(u,-5,f,0,0,r+5,m.frameBlk,o),T(u,n,f,n+5,0,r+5,m.frameBlk,o),T(u,-5,f,n+5,r,r+5,m.frameBlk,o);T(0,-.6,s,0,0,r,m.frameBlk,o),T(0,n,s,n+.6,0,r,m.frameBlk,o),T(0,-.6,s,n+.6,r-.6,r,m.frameBlk,o);let l=n-9,c=[T(s-4,.3,s,n-.3,.6,r-.6,a,o)];if(c.push(T(s,l-3,s+1.2,l+3,100,108,m.black,{r:.6,parent:e.W}),T(s+1.2,l-14,s+3.2,l+2,102.6,105.4,m.black,{r:.8,parent:e.W})),i.lock){c.push(T(s-6.6,l-3.2,s-4,l+3.2,94,126,m.black,{r:1,parent:e.W}),T(s-8.6,l-14,s-6.6,l+2,103,106,m.black,{r:1,parent:e.W}));let u=new De(new Ht(.044,.07),m.lockScr);u.rotation.y=-Math.PI/2,u.position.set(Ce(s-6.65),1.15,Ie(l)),e.W.add(u),c.push(u),Wh()!==!!ut.mirror&&(u.scale.x=-1),c.push(T(s,l-3,s+1.6,l+3,112,124,m.black,{r:.6,parent:e.W}))}else c.push(T(s-5.2,l-3,s-4,l+3,100,108,m.black,{r:.6,parent:e.W}),T(s-7.2,l-14,s-5.2,l+2,102.6,105.4,m.black,{r:.8,parent:e.W}));let h=Qt(s,0,.3,c,e.W);gt(t,u=>{h.rotation.y=u*Math.PI*.5},1.1,c),tt.push({r:[-2,0,s+2,n],when:()=>!(qe[t]&&qe[t].v>.85)},{r:[s,0,s+n,6],when:()=>qe[t]&&qe[t].v>.1})}function Oy(i,e){let t=T(0,-5.5,.8,5.5,115,127,m.white,{cast:!1,parent:e.W}),n=T(.8,-3.8,1.7,3.8,116.6,125.4,m.white,{cast:!1,r:.4,parent:e.W}),s=Qt(1.2,121,0,[n],e.W);gt("lights",r=>{s.rotation.z=.2*(r-.5),Xh()},2.6,[t,n])}function Fy(i,e){let[t,n]=i.x,s=i.h||275,r={parent:e.N},o=Math.max(1,Math.round((n-t)/115)),a=(n-t)/o;T(t,-11,n,0,0,2.5,m.frameBlk,r),T(t,-11,n,0,s-4,s,m.frameBlk,r);for(let d=0;d<=o;d++){let x=t+d*a;T(Math.max(t,x-2),-11,Math.min(n,x+2),0,0,s,m.frameBlk,r)}if(T(t+2,-6,n-2,-5.4,2.5,s-4,m.glass,{cast:!1,parent:e.N}),tt.push({r:[t,-11,n,0]}),!i.cid)return;let[l,c]=i.c||[t,n],h=(l+c)/2,u=9;ml(l+2,Math.min(c-2,l+62),u-3,1.5,274,2.2,11,m.sheer,{cast:!1,parent:e.N});let f=[];for(let[d,x,v]of[[l+1,h+2,26],[c-1,h-2,26]]){let g=Math.abs(x-d),p=ml(Math.min(d,x),Math.max(d,x),u+2,1.5,274,4.4,16,m.blackout,r);p.geometry.translate(d<x?g/200:-g/200,0,0),p.position.x=Ce(d),f.push([p,v/g])}gt(i.cid,d=>{f.forEach(([x,v])=>{x.scale.x=v+(1-v)*d})},.7,f.map(d=>d[0])),T(l,7.6,c,10.4,274,275,m.frameBlk,{cast:!1,parent:Je})}function Kd(){let i=Math.max(pr[mr].inside,.6)*(qe.livlamp?qe.livlamp.v:0);m.livLamp.emissiveIntensity=1.5*i,m.glowLiv.opacity=.5*i,yt=!0}function By(i){let e=i.len||220,t=94,n=m.sofa,s=i.rug||170,r=i.table||[118,172],o=i.rugPad??16,a=T(t-34,-o,t+s,e+o,.1,1.1,m.rug,{cast:!1});a.userData.walk=!0;for(let[p,y]of[[8,6],[t-11,6],[8,e-9],[t-11,e-9]])T(p,y,p+3,y+3,0,9,m.black);T(4,1,t,e-1,9,40,n,{r:3}),T(4,1,28,e-1,40,80,n,{r:6}),T(4,1,t,21,40,62,n,{r:6}),T(4,e-21,t,e-1,40,62,n,{r:6});let l=i.seats||3,c=(e-42)/l;for(let p=0;p<l;p++){let y=21+p*c+.6,_=21+(p+1)*c-.6;T(26,y,t-1,_,40,53,n,{r:5}),T(26,y+1,44,_-1,52,84,n,{r:6}).rotation.z=-.12}let h=(p,y,_,M)=>{let b=T(30,p,44,y,52,92,_,{r:6,seg:5});b.rotation.z=M,b.rotation.x=.1};h(23,66,m.pillow2,-.2),h(e-66,e-23,m.throwM,-.2),tt.push({r:[0,0,t,e]});let[u,f]=r,d=e/2;T(u,d-45,f,d+45,36,40,m.woodDark,{r:1.2}),T(u+8,d-35,f-8,d+35,0,36,m.black),T(u+10,d-30,u+34,d-10,40,43,m.book3),T(u+11,d-29,u+33,d-11,43,45,m.book2),Be(u+30,d+18,9,5,40,46,m.ceramic,{seg:32}),tt.push({r:[u,d-45,f,d+45]}),i.side!==!1&&(Be(46,e+26,20,20,52,54,m.woodDark),Be(46,e+26,1.5,1.5,0,52,m.black),Be(46,e+26,14,14,0,1.5,m.black),tt.push({r:[26,e+6,66,e+46]}));let x=20,v=-26,g=[Be(x,v,15,16,0,4,m.black),Fe([x,v,4],[x,v,150],1,m.black),Fe([x,v,150],[x+40,v+20,192],.9,m.black),Fe([x+40,v+20,192],[x+88,v+34,176],.9,m.black),Bi(x+92,v+35,172,17,12,17,m.livLamp,{half:!0,seg:28})];g[4].rotation.x=Math.PI,Xt(160,160,x+92,41,v+35,-Math.PI/2,0,ye,m.glowLiv),gt("livlamp",()=>Kd(),2.4,g),tt.push({r:[x-16,v-16,x+16,v+16]})}function ky(i){let e=i.lx||140,t=i.ly||80,n=75,s=i.ch||300;T(-e/2,-t/2,e/2,t/2,n-3.2,n,m.travTop,{r:1});for(let a of[-1,1])T(a*(e/2-22)-2,-t/2+10,a*(e/2-22)+2,t/2-10,0,n-3.2,m.black),T(a*(e/2-22)-4,-t/2+8,a*(e/2-22)+4,t/2-8,0,2,m.black);T(-e/2+22,-2,e/2-22,2,60,64,m.black);let r=(a,l,c)=>{let h=l-c*23,u=l+c*19,f=Math.min(h,u),d=Math.max(h,u);for(let[v,g]of[[a-19,f+2],[a+16,f+2],[a-19,d-5],[a+16,d-5]])T(v,g,v+3,g+3,0,44,m.woodDark);T(a-21,f,a+21,d,44,47,m.woodDark,{r:.8}),T(a-20,f+1,a+20,d-1,47,50,m.sofa,{r:1.5});let x=c>0?f:d-3;T(a-20,x,a+20,x+3,66,84,m.woodDark,{r:1}),T(a-19,x+(c>0,.5),a-16,x+2.5,47,66,m.woodDark),T(a+16,x+.5,a+19,x+2.5,47,66,m.woodDark)},o=e/4+4;for(let a of[-o,o])r(a,-t/2-18,1),r(a,t/2+18,-1);tt.push({r:[-e/2,-t/2-40,e/2,t/2+40]}),Fe([0,0,s],[0,0,178],.25,m.black,{cast:!1,parent:Je}),Be(0,0,5,5,s-1.2,s,m.black,{parent:Je}),Bi(0,0,168,19,12,19,m.black,{half:!0,seg:32,parent:Je}),Bi(0,0,167.6,18.3,11.3,18.3,m.shade,{half:!0,seg:32,parent:Je,cast:!1}),Xt(e+60,t+60,0,n+.4,0,-Math.PI/2,0,ye,m.glowSoft)}function zy(i,e){let t=i.d,n=i.l,s=260,r=i.shower,[o,a]=i.notch||[0,0],l={parent:e.W},c=T(0,0,t,n,0,.8,m.bathFloor,{cast:!1});c.userData.walk=!0,T(0,0,t,r,.8,1,m.showerFloor,{cast:!1}),T(4,r-8,t-4,r-4,.95,1.05,m.frameBlk,{cast:!1}),T(0,0,t,n,s,s+1,m.bathCeil,{cast:!1,parent:Je});let h=i.glass;T(0,r-.5,h,r+.5,1,s,m.glass,{cast:!1}),T(0,r-1,h,r+1,1,2.6,m.fit,{cast:!1}),T(h-1.6,r-1,h,r+1,1,s,m.fit,{cast:!1}),Fe([h-1,r,200],[h-1,0,200],.8,m.fit),tt.push({r:[0,r-1,h,r+1]});let u=(Math.max(o,0)+t)/2,f=r/2,d=Math.max(o+8,u-6),x=Math.min(t-6,d+52);T(d,-.2,x,.2,108,140,m.slatBack,{cast:!1}),T(d,0,x,1.2,138.6,140,m.ledAcc,{cast:!1});for(let[G,Q]of[[0,d+8],[1,d+15],[2,d+22]])Be(Q,4,2.3,2.3,108,118-G*1.5,G===1?m.frameBlk:m.bottle,{seg:20}),Be(Q,4,.9,.9,118-G*1.5,119.5-G*1.5,m.frameBlk,{seg:12});let v=[T(u-14,f-14,u+14,f+14,s-1.4,s-.6,m.fit),Be(u,f,1,1,s-.6,s,m.fit)],g=Math.max(o+14,u-26);v.push(Fe([g,1.2,95],[g,1.2,190],.9,m.fit),T(g-2,0,g+2,1.4,93,97,m.fit),T(g-2,0,g+2,1.4,188,192,m.fit)),v.push(T(g-2.4,1.2,g+2.4,4.6,160,166,m.fit,{r:.8}),Fe([g,4.2,163],[g,8.8,175],1.3,m.fit),Fe([g,8.8,175],[g,9.4,177],3.6,m.fit,{seg:24})),v.push(gl([[g,4,158],[g+1,5,130],[g+3,6,98],[g+8,4,84],[g+12,2.4,90]],.55,m.hose)),v.push(Fe([g+18,0,100],[g+18,.8,100],3.6,m.fit,{seg:28}),Fe([g+18,.8,100],[g+18,4.4,100],2.2,m.fit,{seg:24}),Fe([g+18,3.8,100],[g+18,4.6,92.5],.7,m.fit)),zd("shower",new I(Ce(u),(s-1.6)/100,Ie(f)),new I(0,-1,0),v,{v0:.5,spread:.16,rad:.12,r0:.15,r1:.24,splash:.24});let[p,y]=i.vanity,_=0,M=50;T(_,p,M,y,45,81,m.wood),T(M,p+.6,M+.4,(p+y)/2-.4,46,80,m.wood),T(M,(p+y)/2+.4,M+.4,y-.6,46,80,m.wood),T(M+.4,p+4,M+1.2,y-4,62.4,63.6,m.black,{cast:!1}),T(_,p,M+1,y,81,84,m.travTop),T(_+2,p+2,M-3,y-2,44.4,45,m.ledAcc,{cast:!1}),Xt(M-_+20,y-p+10,(_+M)/2,.9,(p+y)/2,-Math.PI/2,0,ye,m.glowSoft);let b=(_+M)/2+2,S=(p+y)/2,E=new De(new qr([[.001,0],[.12,.004],[.18,.04],[.2,.1],[.2,.13],[.19,.13],[.185,.1],[.165,.045],[.11,.016],[.001,.014]].map(G=>new le(G[0],G[1])),48),m.basin);E.position.set(Ce(b),.84,Ie(S)),E.castShadow=!0,E.receiveShadow=!0,ye.add(E),Be(b,S,2,2,85.4,85.6,m.fit,{cast:!1});let P=b-4,w=[Fe([0,S,112],[.8,S,112],3,m.fit,{seg:24}),Fe([.8,S,112],[P+1,S,112],.95,m.fit),Fe([0,S+14,112],[.8,S+14,112],3,m.fit,{seg:24}),Fe([.8,S+14,112],[3.8,S+14,112],1.9,m.fit,{seg:20}),Fe([3.4,S+14,112],[4.1,S+14,105.5],.6,m.fit)];Gh("basin",[[P,S,111.2,85.6]],w),tt.push({r:[_,p,M,y]});let A=120,N=205,z=p+4,V=y-4;T(0,z+1.5,1.2,V-1.5,A+1.5,N-1.5,m.black,{cast:!1,parent:e.W});let D=T(1.2,z,1.6,V,A,N,m.mirror,{cast:!1,parent:e.W});if(D.userData.keep=!0,Pi&&!jt&&!Wh()){let G=new Pi(new Ht((V-z)/100,(N-A)/100),{textureWidth:1024,textureHeight:1024,color:11842740,clipBias:.003,multisample:2});G.rotation.y=Math.PI/2,G.position.set(Ce(1.62),(A+N)/200,Ie((z+V)/2)),e.W.add(G),ki={live:G,plain:D}}Xt(V-z+30,N-A+30,.3,(A+N)/2,(z+V)/2,0,Math.PI/2,e.W,m.glowSoft),T(1.2,z-.2,1.4,V+.2,A-1.2,A-.6,m.ledBath,{cast:!1,parent:e.W}),T(1.2,z-.2,1.4,V+.2,N+.6,N+1.2,m.ledBath,{cast:!1,parent:e.W}),Jd({x:0,y:i.wc,rot:90,walls:{S:"W"}},e,()=>Hy(i));let[O,k]=i.towel,B=t;for(let G of[O,k]){Fe([B-4.5,G,92],[B-4.5,G,168],.95,m.fit);for(let Q of[96,164])Fe([B,G,Q],[B-4.5,G,Q],.6,m.fit)}for(let G of[100,116,132,148,162])Fe([B-4.5,O,G],[B-4.5,k,G],.7,m.fit);T(B-7.5,O+3,B-5.6,k-3,112,160,m.garm[7],{r:.8});let J=[t-40,(r+n)/2];T(J[0]-10,J[1]-10,J[0]+10,J[1]+10,s-.8,s-.2,m.white,{cast:!1,parent:Je});for(let G=0;G<6;G++)T(J[0]-9,J[1]-9+G*3.2,J[0]+9,J[1]-8+G*3.2,s-.85,s-.8,m.black,{cast:!1,parent:Je});let j=new kn(.03,20);for(let[G,Q]of[[40,S-18],[40,S+18],[u,f+24],[t-50,n-40]]){let X=new De(j,m.ledBath);X.rotation.x=Math.PI/2,X.position.set(Ce(G),(s-.3)/100,Ie(Q)),Je.add(X)}let K=(G,Q,X,ne,_e,we)=>{let xe=new zn(16763279,0,0,.75,.8,2);xe.position.set(Ce(G),(s-4)/100,Ie(Q)),xe.target.position.set(Ce(X),_e/100,Ie(ne)),jd(xe,we)};jt?K(t/2,n/2,t/2,n/2,0,4.2):(K(40,S,10,S,90,3.6),K(u,f+20,u,f,0,3))}function Hy(i){let t=(i.cis||84)/2,n=-t,s=t,r=0;T(n,-18,s,0,0,112,m.bathWall),T(n-1,-18-1.5,s,0,112,115,m.travTop),T(r-11,-18-.6,r+11,-18,92,107,m.black,{cast:!1}),T(r-9.5,-18-.9,r-.5,-18-.6,93.5,105.5,m.fit,{cast:!1}),T(r+.5,-18-.9,r+9.5,-18-.6,93.5,105.5,m.fit,{cast:!1}),Be(n+12,-25,3.6,3.6,115,128,m.bottle),T(s-28,-30,s-6,-20,115,125,m.garm[0],{r:1.5});let o=-72;ir(r-18,o,r+18,-17,13,40,14,3,2.4,m.wc,{top:31,ky:.42,kx:.3}),ir(r-17.7,o+.3,r+17.7,-19,40,41.6,13.5,3,.6,m.wcSeat);{let u=Be(r,o+21,10.5,10.5,41.6,41.72,m.wcIn,{cast:!1,seg:36});u.scale.z=1.38}let a=[ir(r-17.7,o+.3,r+17.7,-20,41.75,43.6,13.5,3,.8,m.wcSeat)],l=Qt(r,42.6,-20,a);gt("wc",u=>{l.rotation.x=u*1.5},1.6,a),tt.push({r:[n,-18,s,0]},{r:[r-18,o,r+18,-18]});let c=s-9,h=[Fe([c,-18,74],[c,-18-3.4,74],1.1,m.fit),T(c-1.4,-18-4.4,c+1.4,-18-2.2,70,76,m.fit,{r:.6}),Fe([c,-18-3.3,61],[c,-18-3.3,77],1.2,m.fit),Fe([c,-18-3.3,77],[c,-18-6.6,80],1.1,m.fit)];Hd("bidet",new I(Ce(c),.802,Ie(-25)),new I(-.42,-.87,-.26),{n:Vn?90:150,v0:1.8,spread:.1,w:.0018,l:.028},h),gl([[c,-18-3.3,61],[c-.6,-18-3.6,40],[c-2.5,-18-4.5,22],[c-5,-21,26],[c-4.6,-18-1.5,50],[c-2,-18-.6,71]],.45,m.hose)}function Vy(i,e){let t=i.H,n=i.extent;for(let s of i.shell){let[r,o]=s.h||[0,t],a={UP:m.cap};for(let[l,c]of Object.entries(s.m||{}))a[l]=m[c];T(s.r[0],s.r[1],s.r[2],s.r[3],r,o,Wt(m[s.base||"paint"],a),{parent:s.g?e[s.g]:ye}),s.c!==!1&&r<150&&tt.push({r:s.r})}for(let s of i.floors){let[r,o,a,l]=s.r,c=new Ht((a-r)/100,(l-o)/100);c.rotateX(-Math.PI/2),Rl(c,Ce((r+a)/2),0,Ie((o+l)/2));let h=new De(c,m[s.m]);h.position.set(Ce((r+a)/2),(s.h||.1)/100,Ie((o+l)/2)),h.receiveShadow=!0,h.userData.walk=!0,ye.add(h)}for(let s of i.strips||[])T(s[0],s[1],s[2],s[3],0,.35,m.brass,{cast:!1});for(let s of i.slabs||[n])T(s[0],s[1],s[2],s[3],-24,-1.5,m.slab,{cast:!1});{let s=new Ht(60,60);s.rotateX(-Math.PI/2);let r=new De(s,new Jr({opacity:.16}));r.position.y=-.242,r.receiveShadow=!0,ye.add(r)}Je=new sn,ye.add(Je);for(let s of i.ceils)T(s.r[0],s.r[1],s.r[2],s.r[3],s.h[0],s.h[1],m[s.m||"ceiling"],{parent:Je,cast:!1});for(let s of i.slabs||[n])T(s[0],s[1],s[2],s[3],t+2,t+24,m.cap).layers.set(1)}function Gy(i){let e=new kn(.045,24),t=new Zs(.045,.058,24);for(let n of i.lights){let s=new De(e,m.led);s.rotation.x=Math.PI/2,s.position.set(Ce(n.x),(n.h-.4)/100,Ie(n.y)),Je.add(s);let r=new De(t,m.black);if(r.rotation.x=Math.PI/2,r.position.set(Ce(n.x),(n.h-.35)/100,Ie(n.y)),Je.add(r),n.real&&!jt){let o=new zn(16763279,0,0,.9,.75,2);o.position.set(Ce(n.x),(n.h-2)/100,Ie(n.y)),o.target.position.set(Ce(n.x),0,Ie(n.y)),ye.add(o),ye.add(o.target),Oi.push(o),o.userData.down=!0}}if(jt)for(let[n,s,r]of i.liteSpots){let o=new zn(16763279,0,0,1.3,.9,1.4);o.position.set(Ce(n),(r-4)/100,Ie(s)),o.target.position.set(Ce(n),0,Ie(s)),ye.add(o),ye.add(o.target),Oi.push(o)}}var Wy={bedwall:(i,e)=>{Xd(i,e),qd(i)},tvwall:(i,e)=>Yd(i,e),storage:i=>Zd(i),kitchen:(i,e)=>$d(i,e),balcony:(i,e)=>Wd(i,e),slide:(i,e)=>Gd(i,e),window:(i,e)=>Fy(i,e),ac:(i,e)=>Uy(i,e),door:(i,e)=>Ny(i,e),switch:(i,e)=>Oy(i,e),bath:(i,e)=>zy(i,e),sofa:i=>By(i),dining:i=>ky(i)};function Xy(i,e){Vy(i,e);for(let t of i.mods)Jd(t.fr,e,n=>Wy[t.fn](t,n));Gy(i)}var Qd=new Na(16777215,9405814,.3);an.add(Qd);var pn=new Oa(16773339,5);pn.castShadow=!0;pn.shadow.mapSize.set(Vn?1024:2048,Vn?1024:2048);Object.assign(pn.shadow.camera,{left:-5.5,right:5.5,top:5.5,bottom:-5.5,near:.5,far:34});pn.shadow.bias=-4e-4;pn.shadow.normalBias=.02;pn.shadow.radius=3;pn.shadow.camera.layers.enable(1);an.add(pn);an.add(pn.target);var pr={day:{exp:.9,sun:[4.6,16773339,[-2.6,4.8,-7.6]],hemi:.26,win:1.2,env:.34,inside:0,acc:.55,bg:15330284,sky:"day",skyBoost:1.25},dusk:{exp:.94,sun:[3.6,16753244,[-6.4,1.8,-5.6]],hemi:.14,win:.65,env:.22,inside:.45,acc:.85,bg:15130842,sky:"dusk",skyBoost:1.1},night:{exp:1.05,sun:[0,0,[-2,4,-8]],hemi:.05,win:.12,env:.12,inside:1,acc:1,bg:1448994,sky:"night",skyBoost:.95}},mr="day",Cl=Object.keys(ar)[0],yt=!0;function ep(i){let e=pr[i];mr=i,ct.toneMappingExposure=e.exp;let t=Math.max(di,pi)/5;pn.intensity=e.sun[0],pn.color.set(e.sun[1]),pn.position.set(e.sun[2][0]*t*.6,e.sun[2][1]*t*.6,e.sun[2][2]*t*.6-.6),pn.target.position.set(0,0,-.6),Qd.intensity=e.hemi,Ui&&(Ui.intensity=e.win*2.4,Ui.color.set(i==="dusk"?16765608:i==="night"?10466520:15331839)),m.sky.map=pl[e.sky],m.sky.color.setScalar(e.skyBoost),m.sky.needsUpdate=!0,an.background=new Xe(e.bg);let n=e.inside,s=e.acc;Hh.forEach(o=>o.intensity=.5*Math.max(n,s*.5));let r=Math.max(.85,n);Vh.forEach(o=>o.intensity=o.userData.base*r),m.ledBath.emissiveIntensity=2.2*r,m.glowFake.opacity=.32+.3*n,m.glowSoft.opacity=.22+.3*n,m.glowSlot.opacity=.08+.2*s,m.glowUp.opacity=.18+.4*s,m.glowWash.opacity=.1+.22*s,m.ledAcc.emissiveIntensity=2.6*s,m.ledWard.emissiveIntensity=2*s,m.ledKit.emissiveIntensity=2.2*s;for(let[o,a]of[["lights",Xh],["balclamp",tp],["tvlamp",np],["livlamp",Kd]]){let l=qe[o];l&&(l.t=l.v=n>0||o==="lights"&&ut&&ut.lightsDay?1:0),a()}ye.traverse(o=>{o.material&&[].concat(o.material).forEach(a=>{"envMapIntensity"in a&&(a.envMapIntensity=e.env)})}),lr=!0,yt=!0}function Xh(){let i=Math.max(pr[mr].inside,.7)*(qe.lights?qe.lights.v:0);Oi.forEach(e=>{e.intensity=(e.userData.down?5:6.5)*i}),m.led.emissiveIntensity=2.2*i,m.shade.emissiveIntensity=1.3*i,lr=!0,yt=!0}function tp(){let i=Math.max(pr[mr].inside,.6)*(qe.balclamp?qe.balclamp.v:0);rr&&(rr.intensity=.7*i),m.balcLamp.emissiveIntensity=1.6*i,m.glowBalc.opacity=.45*i,yt=!0}function np(){let i=Math.max(pr[mr].inside,.6)*(qe.tvlamp?qe.tvlamp.v:0);or&&(or.intensity=.55*i),m.lampWhite.emissiveIntensity=1.6*i,m.glowLamp.opacity=.5*i,yt=!0}function ip(i){let e=ar[i];Cl=i;for(let[t,n]of Object.entries(e.colors))m[t]&&m[t].color&&m[t].color.set(n);for(let[t,n]of Object.entries(e.tex||{}))m[t]&&pe[n]&&(m[t].map=pe[n],m[t].needsUpdate=!0);Pl(),yt=!0}var lt=new Bt(35,1,.05,90),Rn=new Ai(-1,1,1,-1,.1,40),It=lt,ht=new Za(lt,ct.domElement);ht.enableDamping=!0;ht.dampingFactor=.08;ht.maxDistance=28;ht.minDistance=.3;ht.addEventListener("change",()=>{yt=!0,Di=!0});function Pl(){m.cap.color.set(It===Rn?2830388:ar[Cl].colors.cap||"#e3dcd2")}var qy=new I,cr=i=>{let e=ye.worldToLocal(qy.copy(i));return[(e.x+di/2)*100,(e.z+pi/2)*100]},xl=(i,e,t)=>ye.localToWorld(new I(Ce(i),e,Ie(t))),sp=(i,e,t=0)=>ut&&ut.walk.some(([n,s,r,o])=>i>n+t&&i<r-t&&e>s+t&&e<o-t),Il=i=>{let[e,t]=cr(i);return i.y<Fd&&sp(e,t)},gr=!1,co=Vn||window.matchMedia("(any-pointer: coarse)").matches,Yy=Vn?"Drag to orbit \xB7 pinch to zoom \xB7 double-tap the floor to step inside":"Drag to orbit \xB7 scroll to zoom \xB7 double-click the floor or press W to step inside",Lh=Vn?"Left stick to walk \xB7 drag to look around \xB7 double-tap the floor to move there":"WASD / arrows to walk \xB7 Shift to run \xB7 F free look \xB7 Q/E to turn \xB7 drag to look";function _l(i){gr=i,ht.rotateSpeed=i?-.42:1,ht.enableZoom=!i,ht.enablePan=!i,ht.minDistance=i?.02:.3;let e=document.getElementById("hint3d");e&&(e.textContent=i?Lh:Yy),on&&(on.hidden=!(i&&co),i&&co?hl():ap()),i&&!co&&!Ad&&(Ad=!0,setTimeout(()=>qh("WASD to walk \xB7 F for free look"),400)),hs&&(hs.hidden=!(i&&rp())),!i&&Cn&&document.exitPointerLock()}var hs=document.getElementById("btn-look"),vl=document.getElementById("cross"),Cn=!1,rp=()=>!Vn&&!!ct.domElement.requestPointerLock;function op(){if(Cn){document.exitPointerLock();return}!gr&&ut&&ut.views.walk&&ur("walk");try{let i=ct.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}document.addEventListener("pointerlockchange",()=>{Cn=document.pointerLockElement===ct.domElement,ht.enabled=!Cn,vl&&(vl.hidden=!Cn),hs&&(hs.setAttribute("aria-pressed",Cn?"true":"false"),hs.textContent=Cn?"Exit free look (Esc)":"Free look (F)"),Cn&&qh("Move the mouse to look \xB7 click to interact \xB7 Esc to exit")});var ao=new ss,rl=new I;document.addEventListener("mousemove",i=>{!Cn||Pt||(rl.copy(ht.target).sub(lt.position),ao.setFromVector3(rl),ao.theta-=i.movementX*.0024,ao.phi=Math.min(Math.PI-.08,Math.max(.08,ao.phi+i.movementY*.0024)),rl.setFromSpherical(ao).setLength(.12),ht.target.copy(lt.position).add(rl),yt=!0,Di=!0)});hs&&hs.addEventListener("click",op);var dn=new Set,on=document.getElementById("joy"),Dh=on?on.querySelector("i"):null,Fi={x:0,y:0},cl=null,Ad=!1,Zy=["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","q","e"];window.addEventListener("keydown",i=>{if(document.body.dataset.screen!=="viewer"||i.ctrlKey||i.metaKey||i.altKey)return;let e=i.key.toLowerCase();if(e==="shift"){dn.add(e);return}if(e==="f"&&rp()){i.preventDefault(),op();return}Zy.includes(e)&&(i.preventDefault(),dn.add(e),!gr&&!Pt&&ut&&ut.views.walk&&ur("walk"))});window.addEventListener("keyup",i=>{dn.delete(i.key.toLowerCase())});window.addEventListener("blur",()=>dn.clear());function hl(){let i=document.getElementById("dock");if(!on||!i)return;if(document.body.dataset.dock==="min"){on.style.bottom="calc(env(safe-area-inset-bottom, 0px) + 86px)";return}let e=i.getBoundingClientRect();on.style.bottom=Math.round(window.innerHeight-e.top+14)+"px"}function ap(){cl=null,Fi.x=Fi.y=0,Dh&&(Dh.style.transform="")}function Rd(i){let e=on.getBoundingClientRect(),t=e.width/2,n=t*.6,s=i.clientX-(e.left+t),r=i.clientY-(e.top+t),o=Math.hypot(s,r);o>n&&(s*=n/o,r*=n/o),Dh.style.transform=`translate(${s}px, ${r}px)`,Fi.x=s/n,Fi.y=-r/n}if(on){on.addEventListener("pointerdown",e=>{cl=e.pointerId,on.setPointerCapture(e.pointerId),Rd(e),e.preventDefault(),e.stopPropagation()}),on.addEventListener("pointermove",e=>{e.pointerId===cl&&Rd(e)});for(let e of["pointerup","pointercancel","lostpointercapture"])on.addEventListener(e,t=>{t.pointerId===cl&&ap()});window.addEventListener("resize",()=>{on.hidden||hl()}),window.addEventListener("dockchange",()=>{on.hidden||hl()});let i=document.getElementById("dock");i&&new ResizeObserver(()=>{on.hidden||hl()}).observe(i)}function ho(i,e,t=18){if(!sp(i,e))return!1;for(let n of tt){if(n.when&&!n.when())continue;let[s,r,o,a]=n.r,l=Math.max(s,Math.min(i,o)),c=Math.max(r,Math.min(e,a));if((l-i)*(l-i)+(c-e)*(c-e)<t*t)return!1}return!0}var $y=new I(0,1,0),as=new I,Cd=new I,Pd=new I;function jy(i){if(!gr||Pt||It!==lt||!ut)return!1;let e=0,t=0,n=0;if((dn.has("w")||dn.has("arrowup"))&&(e+=1),(dn.has("s")||dn.has("arrowdown"))&&(e-=1),dn.has("d")&&(t+=1),dn.has("a")&&(t-=1),(dn.has("arrowleft")||dn.has("q"))&&(n+=1),(dn.has("arrowright")||dn.has("e"))&&(n-=1),Math.hypot(Fi.x,Fi.y)>.12&&(e+=Fi.y,t+=Fi.x),!e&&!t&&!n)return!1;let s=lt.position;if(n&&(Pd.copy(ht.target).sub(s).applyAxisAngle($y,n*1.7*i),ht.target.copy(s).add(Pd)),e||t){let r=Math.max(1,Math.hypot(e,t)),o=(dn.has("shift")?2.5:1.35)*i/r;as.copy(ht.target).sub(s).setY(0),as.lengthSq()<1e-10&&as.set(0,0,1),as.normalize(),Cd.set(-as.z,0,as.x);let[a,l]=cr(s),[c,h]=cr(Cd.clone().multiplyScalar(t*o).addScaledVector(as,e*o).add(s));ho(a,l)&&(ho(c,l)||(c=a),ho(c,h)||(h=l));let u=xl(c,s.y,h),f=u.x-s.x,d=u.z-s.z,x=(1.6-s.y)*Math.min(1,i*3);s.x+=f,s.z+=d,s.y+=x,ht.target.x+=f,ht.target.z+=d,ht.target.y+=x}return!0}function lp(i,e){let t=e.clone().sub(i).normalize();ht.target.copy(i).addScaledVector(t,.12)}var Id=0;function qh(i){let e=document.getElementById("toast3d");e&&(e.textContent=i,e.classList.add("show"),clearTimeout(Id),Id=setTimeout(()=>e.classList.remove("show"),2200))}function cp(i){if(!Ph)throw new Error("no GTAO");let e=new $t(2,2,{type:gn,samples:4}),t=new Qa(ct,e);t.addPass(new el(an,i));let n=new Ph(an,i,2,2);try{n.updateGtaoMaterial({radius:.32,distanceExponent:1.6,thickness:1.2,scale:1.15,samples:16}),n.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),n.blendIntensity=.9}catch(r){console.warn(r)}let s=n.overrideVisibility.bind(n);return n.overrideVisibility=function(){s(),an.traverse(r=>{(r.isReflector||r.isSprite||r.isMesh&&[].concat(r.material).some(o=>o.transparent))&&(r.visible=!1)})},t.addPass(n),t.addPass(new tl),{c:t,ao:n}}var hr=null,ul=null,Pn=fr&&!jt;function hp(){if(hr)return!0;try{return hr=cp(lt),zi.clientWidth&&xr(),!0}catch(i){return console.warn("AO off",i),!1}}Pn&&!hp()&&(Pn=!1);var up="iso",Pt=null;function fp(){let i=ut.extent,e=xl((i[0]+i[2])/2,0,(i[1]+i[3])/2);return{cx:e.x,cz:e.z,w:(i[2]-i[0])/100,h:(i[3]-i[1])/100}}function dp(){let i=zi.clientWidth||1,e=zi.clientHeight||1,t=i/e,n=ut?fp():{w:di,h:pi},s=n.w+.7,o=(n.h+.9)/2,a=o*t;a<s/2&&(a=s/2,o=a/t),Object.assign(Rn,{left:-a,right:a,top:o,bottom:-o}),Rn.updateProjectionMatrix()}function pp(i,e,t){let n=lt.aspect||1.6,s=1.6;if(n>=s)return{p:i,t:e,f:t};let r=Math.tan(t*Math.PI/360)*s/n;if(Il(i))return{p:i,t:e,f:Math.min(100,2*Math.atan(r)*180/Math.PI)};let o=Math.min(46,2*Math.atan(r)*180/Math.PI),a=r/Math.tan(o*Math.PI/360);return{p:e.clone().add(i.clone().sub(e).multiplyScalar(a)),t:e,f:o}}function Jy(i,e){let t=ut.views[i];if(!t)return;if(up=i,t.ortho){_l(!1);let s=fp();It=Rn,ht.object=Rn,ht.enableRotate=!1,Rn.position.set(s.cx,16,s.cz+1e-4),Rn.up.set(0,0,-1),Rn.lookAt(s.cx,0,s.cz),Rn.zoom=1,dp(),ht.target.set(s.cx,0,s.cz),ht.update(),Pt=null,Pl(),yt=!0;return}let n=pp(new I(...t.pos),new I(...t.target),t.fov);mp(n.p,n.t,n.f,e)}function mp(i,e,t,n){let s=It===Rn;It=lt,ht.object=lt,ht.enableRotate=!0,lt.up.set(0,1,0),Pl(),_l(!1);let r={p:i,t:e,f:t,inside:Il(i)},o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(n||s||o){lt.position.copy(r.p),ht.target.copy(r.t),lt.fov=r.f,lt.updateProjectionMatrix(),r.inside&&(lp(r.p,r.t),_l(!0)),ht.update(),Pt=null,yt=!0;return}Pt={t0:performance.now(),dur:950,from:{p:lt.position.clone(),t:ht.target.clone(),f:lt.fov},to:r}}var yl=new Ba,Ml=new le,Ah=0;function gp(i,e){let t=ct.domElement.getBoundingClientRect();return Yh((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1)}function xp(i){return i.find(e=>{let t=e.object;for(;t;){if(!t.visible)return!1;t=t.parent}return e.object.layers.test(It.layers)})}function Yh(i,e){Ml.set(i,e),yl.setFromCamera(Ml,It);let t=xp(yl.intersectObjects(ye.children,!0));return t&&t.object.userData.toggle||null}var Ky={door:["Open the entry door","Close the entry door"],bathdoor:["Open the bathroom door","Close the bathroom door"],shower:["Turn on the rain shower","Turn off the shower"],wc:["Lift the WC lid","Lower the WC lid"],bidet:["Turn on the jet washer","Turn off the jet washer"],basin:["Run the basin tap","Turn off the basin tap"],slide:["Open the balcony door","Close the balcony door"],curtain:["Close the curtains","Open the curtains"],tv:["Turn on the TV","Turn off the TV"],ac:["Turn on the AC","Turn off the AC"],lights:["Turn on the lights","Turn off the lights"],storage:["Open the glass cabinet","Close the glass cabinet"],drawers:["Open the console drawers","Close the console drawers"],tap:["Run the kitchen tap","Turn off the kitchen tap"],hob:["Switch on the induction hob","Switch off the hob"],fridge:["Open the fridge","Close the fridge"],balclamp:["Light the balcony lamp","Switch off the balcony lamp"],cage:["Open the AC cage","Close the AC cage"],tvlamp:["Switch on the table lamp","Switch off the table lamp"],consoleA:["Open the console cabinet","Close the console cabinet"],uppers:["Open the kitchen glass cabinets","Close the kitchen glass cabinets"],kitbase:["Open the kitchen cupboards","Close the kitchen cupboards"],wardrobe:["Open the charcoal cabinets","Close the charcoal cabinets"],ac2:["Turn on the bedroom AC","Turn off the bedroom AC"],curtain2:["Close the bedroom curtains","Open the bedroom curtains"],beddoor:["Open the bedroom door","Close the bedroom door"],livlamp:["Switch on the floor lamp","Switch off the floor lamp"]},_p=i=>ut&&ut.actLabels&&ut.actLabels[i]||Ky[i];function go(){document.querySelectorAll('[data-k="act"]').forEach(i=>{let e=qe[i.dataset.v],t=!!e&&e.t>.5;i.hidden=!e,i.setAttribute("aria-pressed",t?"true":"false");let n=_p(i.dataset.v);n&&(i.textContent=n[t?1:0])})}function bl(i){let e=qe[i];e&&(e.t=e.t>.5?0:1,yt=!0,go(),o1(i),Ni&&i===fi&&!Ni.hidden&&(Ni.textContent=Uh(i)))}function Qy(i,e){let t=ct.domElement.getBoundingClientRect();Ml.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),yl.setFromCamera(Ml,It);let n=xp(yl.intersectObjects(ye.children,!0));if(!n||!n.object.userData.walk){qh(Vn?"Double-tap an open patch of floor":"Double-click an open patch of floor");return}let[s,r]=cr(n.point);for(let h=0;h<12&&!ho(s,r);h++){let u=ut.walk.find(([f,d,x,v])=>s>=f&&s<=x&&r>=d&&r<=v)||ut.walk[0];s+=((u[0]+u[2])/2-s)*.2,r+=((u[1]+u[3])/2-r)*.2}let o=xl(s,1.6,r),a;It===lt&&Il(lt.position)?a=ht.target.clone().sub(lt.position).setY(0):(a=xl(ut.W/2,0,ut.D/2).sub(o).setY(0),a.length()<.6&&a.set(0,0,-1)),a.normalize();let l=o.clone().addScaledVector(a,3);l.y=1.25,xo('[data-k="view"]',""),wl&&(wl.textContent="Walk mode: "+Lh.charAt(0).toLowerCase()+Lh.slice(1)+".");let c=pp(o,l,72);mp(c.p,c.t,c.f,!1)}{let i=0,e=0,t=0,n=0,s=0,r=0,o=ct.domElement;o.addEventListener("pointerdown",a=>{i=performance.now(),e=a.clientX,t=a.clientY}),o.addEventListener("pointerup",a=>{let l=performance.now();if(l-i>320||Math.hypot(a.clientX-e,a.clientY-t)>10||l-Ah<450)return;if(Cn){let h=Yh(0,0);h&&(bl(h),Ah=l);return}let c=gp(a.clientX,a.clientY);if(c){bl(c),Ah=l,n=0;return}l-n<380&&Math.hypot(a.clientX-s,a.clientY-r)<36?(n=0,Qy(a.clientX,a.clientY)):(n=l,s=a.clientX,r=a.clientY)})}function e1(){let i=It.position,e=It===lt&&Il(i);for(let t of mo){let n=!0;It===lt&&!e&&(n=ye.worldToLocal(i.clone()).sub(t.p).dot(t.n)>0),t.shown!==n&&(t.shown=n,t.g.traverse(s=>{s.isMesh&&(s.layers.set(n?0:1),n&&s.layers.enable(1))}))}Je&&Je.userData.inside!==e&&(Je.userData.inside=e,Je.traverse(t=>{t.isMesh&&(t.layers.set(e?0:1),e&&t.layers.enable(1))})),lo&&(lo.visible=e)}function xr(){let i=zi.clientWidth,e=zi.clientHeight;if(!i||!e)return;ct.setSize(i,e,!1),lt.aspect=i/e,lt.updateProjectionMatrix(),dp();let t=ct.getPixelRatio();for(let n of[hr,ul])n&&(n.c.setPixelRatio(t),n.c.setSize(i,e));yt=!0}new ResizeObserver(xr).observe(zi);var t1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,nr=0,Ld=performance.now(),ol=!1,Dd=0,Di=!1;function vp(i){requestAnimationFrame(vp);let e=Math.max(0,(i-Ld)/1e3),t=Math.min(.05,e),n=Math.min(.12,e);if(Ld=i,document.body.dataset.screen!=="viewer"||!ut)return;for(let r of Object.values(qe))if(r.v!==r.t){lr=!0,dl=!0;let o=r.speed*t;r.v=r.t>r.v?Math.min(r.t,r.v+o):Math.max(r.t,r.v-o),r.apply(r.v<.5?2*r.v*r.v:1-Math.pow(-2*r.v+2,2)/2),yt=Di=!0}for(let r of dr){let o=qe[r.id];o&&o.v>0&&(r.update(t,It.position),yt=Di=!0)}if(jy(n)&&(yt=Di=!0),Pt){let r=Math.min(1,(i-Pt.t0)/Pt.dur),o=t1(r);lt.position.lerpVectors(Pt.from.p,Pt.to.p,o),ht.target.lerpVectors(Pt.from.t,Pt.to.t,o),lt.fov=Pt.from.f+(Pt.to.f-Pt.from.f)*o,lt.updateProjectionMatrix(),r>=1&&(Pt.to.inside&&(lp(Pt.to.p,Pt.to.t),_l(!0)),Pt=null),yt=Di=!0}if(ht.update(),Oh)return;if(r1(),!yt){ol&&i-Dd>220&&(ol=!1,Nh(!0));return}yt=!1;let s=Pn&&!fr&&nr>1&&Di;Di=!1,Nh(!s&&Pn),s?(ol=!0,Dd=i):ol=!1,l1(i),nr===0&&performance.mark("k-frame1"),nr<2&&(yt=!0),++nr===2&&(document.body.classList.add("ready3d"),window.__nhReady=!0,performance.mark("k-ready"))}var cs=!fr,fi=null;try{localStorage.getItem("nh.hot")==="0"&&(cs=!1)}catch{}var n1=co?13:9,Rh=new I,al=new I,Ud=new I,i1=new On;function s1(){if(dl){ye.updateMatrixWorld(!0);for(let e of fo){e.userData.box.makeEmpty();for(let t of sr[e.userData.toggle])e.userData.box.union(i1.setFromObject(t))}dl=!1}let i=cs&&It===lt;for(let e of fo){let t=e.userData;if(e.visible=i&&(!t.wall||t.wall.shown!==!1),!e.visible)continue;t.box.getCenter(al),t.box.getSize(Ud).multiplyScalar(.5),Rh.copy(It.position).sub(al).normalize();let n=1/0;for(let r of["x","y","z"]){let o=Math.abs(Rh[r]);o>1e-4&&(n=Math.min(n,Ud[r]/o))}e.position.copy(al).addScaledVector(Rh,Math.min(n,al.distanceTo(It.position)*.6)+.015);let s=n1*(t.toggle===fi?1.5:1)*2*Math.tan(It.fov*Math.PI/360)/Math.max(1,zi.clientHeight);e.scale.setScalar(s)}}var Ni=document.getElementById("tip3d");function Sl(i,e){for(let t of sr[i]||[]){if(!t.userData.ol){if(!e)continue;let n=new ya(new Ra(t.geometry,35),m.outline);n.raycast=()=>{},n.renderOrder=12,t.add(n),t.userData.ol=n}t.userData.ol.visible=e}yt=!0}function Uh(i){let e=qe[i],t=_p(i);return t?t[e&&e.t>.5?1:0]:""}function El(i,e,t){i!==fi&&(fi&&Sl(fi,!1),fi=i,i&&Sl(i,!0),ct.domElement.style.cursor=i?"pointer":"",yt=!0),Ni&&(i&&Uh(i)?(Ni.textContent=Uh(i),Ni.style.transform=`translate(${Math.round(e+14)}px, ${Math.round(t+18)}px)`,Ni.hidden=!1):Ni.hidden=!0)}var uo=null;{let i=ct.domElement;i.addEventListener("pointermove",e=>{e.pointerType==="mouse"&&!e.buttons?uo=[e.clientX,e.clientY]:e.buttons&&fi&&El(null)}),i.addEventListener("pointerleave",()=>{uo=null,Cn||El(null)})}function r1(){if(Cn){yt&&El(Yh(0,0),innerWidth/2,innerHeight/2);return}if(!uo||Pt)return;let[i,e]=uo;uo=null,El(gp(i,e),i,e)}function o1(i){!co||i===fi||(Sl(i,!0),setTimeout(()=>{i!==fi&&Sl(i,!1)},650))}function a1(){if(!ut)return!1;let[i,e]=cr(lt.position),t=ut.bath;if(ut.bathRect){let[n,s,r,o]=ut.bathRect;return i>n&&i<r&&e>s&&e<o}return i>0&&i<t.x1&&e>t.y0+t.wall&&e<ut.D}function Nh(i=Pn){e1(),s1();let e=It===lt&&gr,t=e&&a1(),n=qe.bathdoor&&qe.bathdoor.v>.02;if(ki){let r=e&&(t||n);ki.live.visible=r,ki.plain.visible=!r}if(lr&&(ct.shadowMap.needsUpdate=!0,lr=!1),i&&It===Rn&&!ul&&hr)try{ul=cp(Rn),xr()}catch{}let s=It===Rn?ul:hr;i&&s?s.c.render():ct.render(an,It)}var Li=ct.getPixelRatio(),Nd=0,ls=0,Ch=0;function l1(i){let e=i-Nd;if(Nd=i,fr||e>150){ls=0;return}if(ls=ls?ls*.9+e*.1:e,i-Ch<1500)return;let t=Li;ls>42&&Li>Ed?t=Math.max(Ed,Li-.15):ls<21&&Li<fl&&i-Ch>5e3&&(t=Math.min(fl,Li+.15)),t!==Li&&(Li=t,ct.setPixelRatio(Li),xr(),Ch=i,ls=0)}function c1(i=20,e=Pn){let t=ct.getContext(),n=new Uint8Array(4),s=ct.info;s.autoReset=!1;let r=0,o=0,a=performance.now();for(let u=0;u<i;u++)s.reset(),lt.position.sub(ht.target).applyAxisAngle(new I(0,1,0),.01).add(ht.target),lt.lookAt(ht.target),Nh(e),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n),r+=s.render.calls,o+=s.render.triangles;let l=(performance.now()-a)/i;s.autoReset=!0;let c=0,h=0;return an.traverse(u=>{u.isLight&&u.intensity>0&&c++,u.isMesh&&h++}),{ms:+l.toFixed(1),calls:Math.round(r/i),tris:Math.round(o/i),lights:c,meshes:h,programs:s.programs.length,px:[ct.domElement.width,ct.domElement.height],ao:Pn,lite:jt}}function xo(i,e){document.querySelectorAll(i).forEach(t=>t.setAttribute("aria-pressed",t.dataset.v===e?"true":"false"))}var wl=document.getElementById("view-cap");function h1(){document.querySelectorAll('[data-k="view"]').forEach(i=>{i.hidden=!ut.views[i.dataset.v],ut.labels&&ut.labels[i.dataset.v]&&(i.textContent=ut.labels[i.dataset.v])})}function ur(i,e){Jy(i,e),xo('[data-k="view"]',i),wl&&(wl.textContent=ut.views[i].cap)}function yp(i){ip(i),xo('[data-k="style"]',i),document.querySelectorAll("[data-style-row]").forEach(e=>{e.textContent=ar[i].finish[e.dataset.styleRow]||"\u2013"}),document.querySelectorAll("[data-style-name]").forEach(e=>{e.textContent=ar[i].name})}function Mp(i){ep(i),xo('[data-k="light"]',i),go()}var Oh=!1;async function u1(){if(ct.compileAsync){Oh=!0;try{if(await ct.compileAsync(an,lt),ki){let i=ki.live;i.visible=!1,ct.setRenderTarget(i.getRenderTarget()),await ct.compileAsync(an,lt),ct.setRenderTarget(null)}}catch{ct.setRenderTarget(null)}Oh=!1,yt=!0}}function Fh(i,e,t){let n=Tl[i];if(!n)return;(!ut||ut.id!==i)&&(Ly(n),ip(Cl),nr=Math.min(nr,1),u1()),xo('[data-k="room"]',i),h1(),document.querySelectorAll("[data-room-info]").forEach(o=>{o.hidden=o.dataset.roomInfo!==i});let s=document.getElementById("room-title"),r=document.getElementById("room-sub");s&&(s.textContent=n.name),r&&(r.textContent=n.sub),xr(),ur(e&&n.views[e]?e:"iso",t!==!1),go()}function Zh(i){document.body.dataset.screen=i,i==="viewer"&&(xr(),yt=!0)}function $h(i,e,t){let n=!ut||ut.id!==i,s=Tl[i];if(n&&s){document.body.classList.remove("ready3d");let r=document.getElementById("load-name"),o=document.getElementById("room-title");r&&(r.textContent=s.name),o&&(o.textContent=s.name)}if(Zh("viewer"),n&&t?setTimeout(()=>Fh(i,e,!0),70):Fh(i,e,!0),t)try{history.pushState({room:i},"","#"+i)}catch{}}function bp(i){if(Zh("home"),i)try{history.pushState({home:!0},"","#home")}catch{}}window.addEventListener("popstate",i=>{let e=i.state||{};e.room&&Tl[e.room]?$h(e.room,null,!1):bp(!1)});document.addEventListener("click",i=>{let e=i.target.closest("[data-open-room]");if(e){i.preventDefault(),$h(e.dataset.openRoom,null,!0);return}if(i.target.closest("[data-go-home]")){i.preventDefault(),history.state&&history.state.room?history.back():bp(!1);return}let n=i.target.closest(".chip3d");if(n){let r=n.dataset.k,o=n.dataset.v;if(r==="view")ur(o);else if(r==="style")yp(o);else if(r==="light")Mp(o);else if(r==="room")Fh(o,up==="plan"?"plan":"iso",!0);else if(r==="act")bl(o);else if(r==="hot"){cs=!cs,n.setAttribute("aria-pressed",cs?"true":"false");try{localStorage.setItem("nh.hot",cs?"1":"0")}catch{}yt=!0}else r==="ao"&&(Pn=!Pn&&hp(),n.setAttribute("aria-pressed",Pn?"true":"false"),yt=!0);return}let s=i.target.closest("[data-goto]");s&&ur(s.dataset.goto)});var us=null,Sp=null,Ep=Cl,wp="day",f1=new Set(Od.flatMap(i=>Object.keys(i.views)));for(let i of po)Tl[i]&&(us=i),ar[i]&&(Ep=i),pr[i]&&(wp=i),f1.has(i)&&(Sp=i),i==="render"&&document.body.classList.add("render-mode"),i==="noao"&&(Pn=!1);hr||(Pn=!1);document.querySelectorAll('[data-k="ao"]').forEach(i=>i.setAttribute("aria-pressed",Pn?"true":"false"));document.querySelectorAll('[data-k="hot"]').forEach(i=>i.setAttribute("aria-pressed",cs?"true":"false"));yp(Ep);Mp(wp);us?$h(us,Sp,!1):Zh("home");us&&po.includes("all")&&(Object.values(qe).forEach(i=>{i.t=i.v=1,i.apply(1)}),go());if(us){for(let i of po){let e=qe[i.slice(1)];i[0]==="x"&&e&&(e.t=e.v=1,e.apply(1))}go()}try{history.replaceState(us?{room:us}:{home:!0},"")}catch{}window.__nhModule=!0;window.__nh={toggle:bl,state:()=>Object.fromEntries(Object.entries(qe).map(([i,e])=>[i,e.t])),view:i=>ur(i,!0),pos:()=>[lt.position.x,lt.position.y,lt.position.z].map(i=>+i.toFixed(3)),plan:()=>cr(lt.position).map(Math.round),interior:()=>gr,free:(i,e)=>ho(i,e),hot:()=>fo.filter(i=>i.visible).map(i=>i.userData.toggle),hits:(i,e,t=18)=>tt.filter(n=>(!n.when||n.when())&&(()=>{let[s,r,o,a]=n.r,l=Math.max(s,Math.min(i,o)),c=Math.max(r,Math.min(e,a));return(l-i)**2+(c-e)**2<t*t})()).map(n=>n.r.map(s=>Math.round(s))),lookSim:i=>(Cn=i,ht.enabled=!i,vl&&(vl.hidden=!i),i),dir:()=>{let i=ht.target.clone().sub(lt.position).normalize();return[i.x,i.y,i.z].map(e=>+e.toFixed(3))},marks:()=>Object.fromEntries(performance.getEntriesByType("mark").filter(i=>i.name.startsWith("k-")).map(i=>[i.name,Math.round(i.startTime)])),bench:c1,_:{M:m,scene:an,renderer:ct,get room(){return ye}}};requestAnimationFrame(vp);
