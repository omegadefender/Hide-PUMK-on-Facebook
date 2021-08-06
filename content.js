function hidePUMK() {
  let pumkdiv = document.evaluate("//span[text() = 'People you may know']/../../../../../div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  if (pumkdiv.singleNodeValue == null) {
    console.log("People you may know didn't spawn on this page")
  } 
  else {
    pumkdiv.singleNodeValue.remove();
    console.log("People you may know has been hidden")    
  }
}

hidePUMK();
const homebtn = document.querySelector('[aria-label="Home"]');
const profilePage = document.querySelector("a[href='/me/']")