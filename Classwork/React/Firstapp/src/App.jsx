import React from 'react'
import Books from './components/Books'
import LearnJSX from './components/LearnJSX'

const App = () => {
  return (
    <>
      <h1>This is a heading</h1>
      <Person/>
      <Person/>
      <Person/>
    </>
  )
}

export default App

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// function App() {
//   return /*#__PURE__*/_jsxs("div", {
//     children: [/*#__PURE__*/_jsx("h1", {
//       children: "This is a heading"
//     }), /*#__PURE__*/_jsx("p", {
//       children: "This is a paragraph"
//     })]
//   });
// }
// export default App;