const node = document.body;
const config = { childList: true, subtree: true };

let observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation) {
     let url = window.location.href;
     if (mutation.addedNodes.length && url != 'https://www.facebook.com/friends') {
        hidePUMK();
    }
  })
});

observer.observe(node, config);

function hidePUMK() {
  let pumkdiv = document.evaluate("//span[text() = 'People you may know']/../../../../../div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  if (pumkdiv.singleNodeValue != null) {
      pumkdiv.singleNodeValue.remove();
  } 
}