const node = document.body;
const config = { childList: true, subtree: true, characterData: true };

let observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
     if (mutation.addedNodes.length) {
        hidePUMK();
    }
  })
});

observer.observe(node, config);

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