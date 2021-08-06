const homebtn = document.querySelector('[aria-label="Home"]');
const profilePage = document.querySelector("a[href='/me/']");

function hidePUMK() {
  let pumkdiv = document.evaluate("//span[text() = 'People you may know']/../../../../../div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  if (pumkdiv.singleNodeValue == null) {
    console.log("People you may know didn't spawn on this page")
    console.log(window.location.href)
  } 
  else {
    pumkdiv.singleNodeValue.remove();
    console.log("People you may know has been hidden")
    console.log(window.location.href)   
  }
}

homebtn.addEventListener("click", hidePUMK);
profilePage.addEventListener("click", hidePUMK);
hidePUMK();