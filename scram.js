// Check for element for up to ~10s to account for slow page loads
var intervalId = setInterval(scram, 100)
var maxChecks = 100
var numChecks = 0
var cleared = false
function scram () {
  var container_ids = [
    'credential_picker_container',
    'credential_picker_iframe',
    'google-ebay'
  ]
  var container
  console.log('checking for gooble...')
  for (let id in container_ids) {
    container = document.getElementById(container_ids[id])
    if (container == null) {
      continue
    }
    container.remove()
    cleared = true
  }
  if (!cleared) {
    ++numChecks
  }
  if (numChecks >= maxChecks || cleared) {
    if (cleared) console.log('yeeted gooble')
    else console.log('no gooble')
    clearInterval(intervalId)
  }
}
