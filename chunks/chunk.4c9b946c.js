import{R as f,m as u}from"../entry.346ba6be.js";const i="astro:jsx",o=Symbol("empty"),n=r=>r;function p(r){return r&&typeof r=="object"&&r[i]}function l(r){if(typeof r.type=="string")return r;const s={};if(p(r.props.children)){const t=r.props.children;if(!p(t)||!("slot"in t.props))return;const e=n(t.props.slot);s[e]=[t],s[e].$$slot=!0,delete t.props.slot,delete r.props.children}Array.isArray(r.props.children)&&(r.props.children=r.props.children.map(t=>{if(!p(t)||!("slot"in t.props))return t;const e=n(t.props.slot);return Array.isArray(s[e])?s[e].push(t):(s[e]=[t],s[e].$$slot=!0),delete t.props.slot,o}).filter(t=>t!==o)),Object.assign(r.props,s)}function a(r){return typeof r=="string"?u(r):Array.isArray(r)?r.map(s=>a(s)):r}function c(r){if("set:html"in r.props||"set:text"in r.props){if("set:html"in r.props){const s=a(r.props["set:html"]);delete r.props["set:html"],Object.assign(r.props,{children:s});return}if("set:text"in r.props){const s=r.props["set:text"];delete r.props["set:text"],Object.assign(r.props,{children:s});return}}}function y(r,s){const t={[f]:"astro:jsx",[i]:!0,type:r,props:s??{}};return c(t),l(t),t}export{y as c};