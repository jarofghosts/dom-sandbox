var el

module.exports = sandbox

sandbox.destroy = destroy

function sandbox(html) {
  if(!el) {
    el = document.createElement('div')
    document.body.appendChild(el)
  }

  el.innerHTML = html || ''

  return el
}

function destroy() {
  if(el && el.parentNode) {
    el.parentNode.removeChild(el)
  }

  el = null
}
