!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=wp.i18n,o=r.__,a=(r.setLocaleData,wp.blocks.registerBlockType),l=wp.editor,c=l.RichText,u=l.BlockControls,i=l.AlignmentToolbar;a("block-examples/block-examples-04-block",{title:o("Controls Block","block-examples"),icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"h1"},alignment:{type:"string"}},edit:function(e){var t=e.className,n=e.attributes,r=n.content,o=n.alignment,a=e.setAttributes;return[React.createElement(u,null,React.createElement(i,{value:o,onChange:function(e){a({alignment:e})}})),React.createElement(c,{tagName:"h1",className:t,onChange:function(e){a({content:e})},value:r,style:{textAlign:o}})]},save:function(e){var t=e.className,n=e.attributes,r=n.content,o=n.alignment;return React.createElement(c.Content,{tagName:"h1",className:t,value:r,style:{textAlign:o}})}})}]);