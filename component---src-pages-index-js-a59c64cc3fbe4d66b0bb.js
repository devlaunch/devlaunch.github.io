webpackJsonp([35783957827783],{78:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),f=n(22),c=r(f),p=n(16),s=r(p),d=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,r=e.postSEO,a=void 0,o=void 0,i=void 0,l=void 0;if(r){var f=t.frontmatter;a=f.title,o=f.description?f.description:t.excerpt,i=f.cover,l=s.default.siteUrl+s.default.pathPrefix+n}else a=s.default.siteTitle,o=s.default.siteDescription,i=s.default.siteLogo;var p="/"===s.default.pathPrefix?"":s.default.pathPrefix;i=s.default.siteUrl+p+i;var d=s.default.siteUrl+s.default.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:a,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:""}];return r&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":l,name:a,image:i}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:a,alternateName:s.default.siteTitleAlt?s.default.siteTitleAlt:"",headline:a,image:{"@type":"ImageObject",url:i},description:o}]),u.default.createElement(c.default,null,u.default.createElement("meta",{name:"description",content:o}),u.default.createElement("meta",{name:"image",content:i}),u.default.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),u.default.createElement("meta",{property:"og:url",content:r?l:d}),r?u.default.createElement("meta",{property:"og:type",content:"article"}):null,u.default.createElement("meta",{property:"og:title",content:a}),u.default.createElement("meta",{property:"og:description",content:o}),u.default.createElement("meta",{property:"og:image",content:i}),u.default.createElement("meta",{property:"fb:app_id",content:s.default.siteFBAppID?s.default.siteFBAppID:""}),u.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.default.createElement("meta",{name:"twitter:creator",content:s.default.userTwitter?s.default.userTwitter:""}),u.default.createElement("meta",{name:"twitter:title",content:a}),u.default.createElement("meta",{name:"twitter:description",content:o}),u.default.createElement("meta",{name:"twitter:image",content:i}))},t}(l.Component);t.default=d,e.exports=t.default},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),f=n(8),c=n(19),p=r(c),s=n(49),d=r(s),m=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.appName;return u.default.createElement(f.Banner,{color:"gray.8",bg:"white"},u.default.createElement(f.Heading,{is:"h1",fontSize:[5,6,7,8]},e),u.default.createElement(f.Heading,{is:"h1",fontSize:[5,6,7,8]},"Coming Soon"),u.default.createElement(f.Lead,{fontSize:[2,3,4,5],my:4,fontWeight:"thin"},"A place to realize your ideas."),u.default.createElement(d.default.Big,{is:p.default,to:"/"},"Home"))},t}(l.Component);t.default=m,e.exports=t.default},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),u=r(l),f=n(22),c=r(f),p=n(60),s=r(p),d=n(200),m=r(d),y=n(78),h=r(y),b=n(16),g=r(b),E=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return u.default.createElement(s.default,null,u.default.createElement(c.default,{title:g.default.siteTitle}),u.default.createElement(h.default,{postEdges:e}),u.default.createElement(m.default,{appName:g.default.siteTitle}))},t}(u.default.Component);t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-a59c64cc3fbe4d66b0bb.js.map