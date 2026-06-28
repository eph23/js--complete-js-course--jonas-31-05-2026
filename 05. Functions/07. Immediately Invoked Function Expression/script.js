'use strict';

const runOnce = function () {
  console.log(`This function will never run again...`);
};
runOnce();

// ANCHOR: Immediately Invoked Function
/* NOTE: 
An Immediately Invoked Function Expression (IIFE) is a JavaScript function design pattern that runs automatically as soon as it is defined. It requires no separate invocation call and is primarily used to isolate variable scope, preventing global namespace pollution 
*/
(function () {
  console.log(`This is an IIFE and this will never run again...`);
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log(`This is an arrow IIFE and this will never run again...`))();

{
  const isPrivate = 23;
  var isNotPrivate = 46;
}
console.log(isNotPrivate);
console.log(isPrivate);
