/**
 * <div id="parent">
 *  <div id="child">
 *    <h1>I'm h1 tag</h1>
 *  </div>
 * </div>
 */

// when we want to create nested element tag then below is the example code

// const parent = React.createElement(
//   'div', {id: 'parent'}, React.createElement(
//     'div', {id: 'child'}, React.createElement(
//       'h1', {}, "I'm a tag")
//     )
//   );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


// Example for siblings tags
/**
 * <div id="parent">
 *  <div id="child">
 *    <h1>I'm h1 tag</h1>
 *    <h2>I'm h1 tag</h2>
 *  </div>
 * </div>
 */

// when we want to create nested element with siblings (eg. h1 and h2 are siblings) tag then below is the example code

const heading1 = React.createElement('h1', {}, "I'm a h1 tag");
const heading2 = React.createElement('h2', {}, "I'm a h2 tag")

const parent2 = React.createElement(
  'div', {id: 'parent'}, React.createElement(
    'div', {id: 'child'}, [heading1, heading2]
    )
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent2);

// const heading = React.createElement('h1', {id: 'heading'}, 'hello from react!');
// here React.createElement will create an object and assign it to heading variable
// below is the result 👇
// console.log("heading variable",heading)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// now this render method basically be responsible to take this object (heading obj) and put it up convert it into that heading tag put it up into the DOM which we see in the browser.