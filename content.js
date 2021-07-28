let pumkdiv = document.evaluate("//*[text() = 'People you may know']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
console.log(pumkdiv)
pumkdiv.singleNodeValue.remove();
console.log("The 'Hide People You May Know' Chrome Extension for Facebook is Awesome");