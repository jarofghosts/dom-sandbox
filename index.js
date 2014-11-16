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
  document.body.removeChild(el)
  el = null
}
