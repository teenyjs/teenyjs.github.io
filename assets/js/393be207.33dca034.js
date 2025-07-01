"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[134],{

/***/ 8306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_src_pages_markdown_page_md_393_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-pages/default/site-src-pages-markdown-page-md-393.json
const site_src_pages_markdown_page_md_393_namespaceObject = /*#__PURE__*/JSON.parse('{"type":"mdx","permalink":"/markdown-page","source":"@site/src/pages/markdown-page.md","title":"Markdown page example","description":"You don\'t need React to write simple standalone pages.","frontMatter":{"title":"Markdown page example"},"unlisted":false}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(5404);
;// ./src/pages/markdown-page.md


const frontMatter = {
	title: 'Markdown page example'
};
const contentTitle = 'Markdown page example';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "markdown-page-example",
        children: "Markdown page example"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You don't need React to write simple standalone pages."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);