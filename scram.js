var intervalId = setInterval(scram, 100)
var numChecks = 0

function scram () {
  var container_ids = [
    'credential_picker_container',
    'credential_picker_iframe',
    'google-one-tap-iframe',
    'google-ebay'
  ]
  var container
  if (numChecks % 100 == 0) {
    console.log('checking for gooble...')
  }
  for (let id in container_ids) {
    container = document.getElementById(container_ids[id])
    if (container == null) {
      continue
    }
    container.remove()
    console.log('yeeted gooble')
  }
  numChecks++
}
