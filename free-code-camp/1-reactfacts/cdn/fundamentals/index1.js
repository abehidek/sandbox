// ReactDOM.render(<h1>Hi, Everyone!</h1>, document.getElementById("root"))
// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>Foo</li>
//         <li>Bar</li>
//       </ul>
//     </nav>
//   );
// }

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <h1>Hello, Everyone</h1>
//     <ul>
//       <li>Item 1</li>
//       <li>Item 2</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// let h1 = document.createElement("h1")
// h1.innerText = "Hello, Everyone"
// h1.className = "header"

// document.querySelector("#root").appendChild(h1)

// ReactDOM.render(
//   <h1 className="header">Hello, React!</h1>
//   , document.getElementById("root")
// )

// {
//   "type": "h1",
//   "key": null,
//   "ref": null,
//   "props": {
//       "className": "header",
//       "children": "This is JSX"
//   },
//   "_owner": null,
//   "_store": {}
// }

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)
// ReactDOM.render(
//   element
//   , document.getElementById("root")
// )

const page = (
  <div>
    <h1>Hello, Everyone</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
)
console.log(page)

// {
//   "type": "div",
//   "key": null,
//   "ref": null,
//   "props": {
//       "children": [
//           {
//               "type": "h1",
//               "key": null,
//               "ref": null,
//               "props": {
//                   "children": "Hello, Everyone"
//               },
//               "_owner": null,
//               "_store": {}
//           },
//           {
//               "type": "ul",
//               "key": null,
//               "ref": null,
//               "props": {
//                   "children": [
//                       {
//                           "type": "li",
//                           "key": null,
//                           "ref": null,
//                           "props": {
//                               "children": "Item 1"
//                           },
//                           "_owner": null,
//                           "_store": {}
//                       },
//                       {
//                           "type": "li",
//                           "key": null,
//                           "ref": null,
//                           "props": {
//                               "children": "Item 2"
//                           },
//                           "_owner": null,
//                           "_store": {}
//                       }
//                   ]
//               },
//               "_owner": null,
//               "_store": {}
//           }
//       ]
//   },
//   "_owner": null,
//   "_store": {}
// }

// ReactDOM.render(
//   page,document.getElementById("root")
// );

/* 

Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

function Navbar() {
  return (
    <nav>
      <h1>Website Name</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

ReactDOM.render(
  <Navbar />
  , document.getElementById("root")
)
