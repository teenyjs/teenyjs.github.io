"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[296],{

/***/ 5404:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6672);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 9489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_block_buster_mdx_e59_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-block-buster-mdx-e59.json
const site_docs_block_buster_mdx_e59_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"block-buster","title":"Block Buster: React Edition","description":"","source":"@site/docs/block-buster.mdx","sourceDirName":".","slug":"/block-buster","permalink":"/games/block-buster","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"gamesSidebar","previous":{"title":"Country Flag & Map Quiz","permalink":"/games/country-quiz"},"next":{"title":"Hangman","permalink":"/games/hangman"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(3420);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.1.8_react@19.1.0/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(5404);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(6672);
;// ./src/components/BlockBuster/index.tsx
// Define types for state
const GAME_WIDTH=600;const GAME_HEIGHT=400;const PADDLE_WIDTH=80;const PADDLE_HEIGHT=10;const BALL_SIZE=10;const BLOCK_WIDTH=40;const BLOCK_HEIGHT=15;const INITIAL_BALL_SPEED=3;const BALL_INITIAL_OFFSET_FROM_PADDLE=5;// Small gap above the paddle
function App(){const[paddle,setPaddle]=(0,react.useState)({x:(GAME_WIDTH-PADDLE_WIDTH)/2});const[ball,setBall]=(0,react.useState)({x:GAME_WIDTH/2,y:GAME_HEIGHT-PADDLE_HEIGHT-BALL_SIZE-BALL_INITIAL_OFFSET_FROM_PADDLE,vx:INITIAL_BALL_SPEED,vy:-INITIAL_BALL_SPEED});const[blocks,setBlocks]=(0,react.useState)([]);const[score,setScore]=(0,react.useState)(0);const[gameOver,setGameOver]=(0,react.useState)(false);const[gameWon,setGameWon]=(0,react.useState)(false);// New state for win condition
const[blocksRemaining,setBlocksRemaining]=(0,react.useState)(0);// New state to track blocks
const gameAreaRef=(0,react.useRef)(null);const animationFrameRef=(0,react.useRef)(null);// --- Game Initialization ---
(0,react.useEffect)(()=>{const initialBlocks=[];const rows=3;const cols=Math.floor(GAME_WIDTH/BLOCK_WIDTH)-1;const startX=(GAME_WIDTH-cols*BLOCK_WIDTH)/2;const startY=30;let initialVisibleBlocks=0;// Count blocks during initialization
for(let r=0;r<rows;r++){for(let c=0;c<cols;c++){initialBlocks.push({id:r*cols+c,x:startX+c*BLOCK_WIDTH,y:startY+r*BLOCK_HEIGHT,width:BLOCK_WIDTH,height:BLOCK_HEIGHT,visible:true});initialVisibleBlocks++;// Increment for each block added
}}setBlocks(initialBlocks);setBlocksRemaining(initialVisibleBlocks);// Set initial count
},[]);// --- Game Loop (requestAnimationFrame) ---
const gameLoop=(0,react.useCallback)(()=>{if(gameOver||gameWon)return;// Stop loop if game is over or won
setBall(prevBall=>{let{x,y,vx,vy}=prevBall;x+=vx;y+=vy;// Wall collisions
if(x+BALL_SIZE>GAME_WIDTH||x<0)vx*=-1;if(y<0)vy*=-1;// Game Over (ball hits bottom)
if(y+BALL_SIZE>GAME_HEIGHT){setGameOver(true);return prevBall;}// Paddle collision
if(y+BALL_SIZE>=GAME_HEIGHT-PADDLE_HEIGHT&&x+BALL_SIZE>paddle.x&&x<paddle.x+PADDLE_WIDTH&&vy>0){vy*=-1;vx+=(x-(paddle.x+PADDLE_WIDTH/2))*0.1;}// Block collisions
setBlocks(currentBlocks=>{let newBlocks=[...currentBlocks];let bouncedOffBlock=false;let blocksHitThisFrame=0;// Track blocks hit in current frame
for(let i=0;i<newBlocks.length;i++){const block=newBlocks[i];if(block.visible){if(x<block.x+block.width&&x+BALL_SIZE>block.x&&y<block.y+block.height&&y+BALL_SIZE>block.y){block.visible=false;setScore(s=>s+10);blocksHitThisFrame++;// Increment hit counter
if(!bouncedOffBlock){vy*=-1;bouncedOffBlock=true;}}}}// Update blocksRemaining after checking all collisions for this frame
if(blocksHitThisFrame>0){setBlocksRemaining(prev=>prev-blocksHitThisFrame);}return newBlocks;});return{x,y,vx,vy};});animationFrameRef.current=requestAnimationFrame(gameLoop);},[gameOver,gameWon,paddle.x]);// Add gameWon to dependencies
// --- Check for Win Condition after blocksRemaining changes ---
(0,react.useEffect)(()=>{if(blocksRemaining===0&&blocks.length>0){// Ensure blocks have been initialized
setGameWon(true);}},[blocksRemaining,blocks.length]);// Depend on blocksRemaining and total blocks
(0,react.useEffect)(()=>{animationFrameRef.current=requestAnimationFrame(gameLoop);return()=>{if(animationFrameRef.current){cancelAnimationFrame(animationFrameRef.current);}};},[gameLoop]);// --- Keyboard Input for Paddle ---
(0,react.useEffect)(()=>{const handleKeyDown=e=>{if(gameOver||gameWon)return;// Prevent movement if game is over or won
if(e.key==='ArrowLeft'){setPaddle(p=>({x:Math.max(0,p.x-20)}));}else if(e.key==='ArrowRight'){setPaddle(p=>({x:Math.min(GAME_WIDTH-PADDLE_WIDTH,p.x+20)}));}};window.addEventListener('keydown',handleKeyDown);return()=>window.removeEventListener('keydown',handleKeyDown);},[gameOver,gameWon]);// Add gameWon to dependencies
// Restart Game
const resetGame=()=>{setGameOver(false);setGameWon(false);// Reset game won status
setScore(0);setBlocksRemaining(0);// Reset blocks remaining
setPaddle({x:(GAME_WIDTH-PADDLE_WIDTH)/2});setBall({x:GAME_WIDTH/2,y:GAME_HEIGHT-PADDLE_HEIGHT-BALL_SIZE-BALL_INITIAL_OFFSET_FROM_PADDLE,vx:INITIAL_BALL_SPEED,vy:-INITIAL_BALL_SPEED});const initialBlocks=[];const rows=3;const cols=Math.floor(GAME_WIDTH/BLOCK_WIDTH)-1;const startX=(GAME_WIDTH-cols*BLOCK_WIDTH)/2;const startY=30;let newVisibleBlocks=0;for(let r=0;r<rows;r++){for(let c=0;c<cols;c++){initialBlocks.push({id:r*cols+c,x:startX+c*BLOCK_WIDTH,y:startY+r*BLOCK_HEIGHT,width:BLOCK_WIDTH,height:BLOCK_HEIGHT,visible:true});newVisibleBlocks++;}}setBlocks(initialBlocks);setBlocksRemaining(newVisibleBlocks);// Set updated count
animationFrameRef.current=requestAnimationFrame(gameLoop);};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{width:GAME_WIDTH,height:GAME_HEIGHT,backgroundColor:'#333',position:'relative',overflow:'hidden',border:'2px solid white',fontFamily:'monospace',color:'white',textAlign:'center',userSelect:'none'},ref:gameAreaRef,tabIndex:0,onFocus:()=>{},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{style:{marginBottom:'10px',fontSize:'1.5em'},children:"BLOCK BUSTER"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{position:'absolute',top:5,left:5,fontSize:'1.2em'},children:["Score: ",score]}),blocks.map(block=>block.visible&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:'absolute',left:block.x,top:block.y,width:block.width,height:block.height,backgroundColor:'lightblue',border:'1px solid #666'}},block.id)),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:'absolute',left:paddle.x,bottom:0,width:PADDLE_WIDTH,height:PADDLE_HEIGHT,backgroundColor:'lime'}}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:'absolute',left:ball.x,top:ball.y,width:BALL_SIZE,height:BALL_SIZE,borderRadius:'50%',backgroundColor:'yellow'}}),(gameOver||gameWon)&&/*#__PURE__*/// Display overlay if game is over OR won
(0,jsx_runtime.jsxs)("div",{style:{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)',backgroundColor:'rgba(0,0,0,0.8)',padding:'20px',border:'2px solid',borderColor:gameWon?'gold':'red',// Gold border for win, red for loss
fontSize:'2em',zIndex:10},children:[gameWon?'YOU WIN!':'GAME OVER!'," ",gameWon?'':`Final Score: ${score}`,/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:resetGame,style:{display:'block',margin:'20px auto 0',padding:'10px 20px',fontSize:'0.6em',backgroundColor:gameWon?'gold':'yellowgreen',// Button color changes
color:gameWon?'black':'black',border:'none',cursor:'pointer',borderRadius:'5px'},children:"Play Again"})]})]});}/* harmony default export */ const BlockBuster = (App);
;// ./docs/block-buster.mdx


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Block Buster: React Edition';

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "block-buster-react-edition",
        children: "Block Buster: React Edition"
      })
    }), "\n", (0,jsx_runtime.jsx)(BlockBuster, {})]
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