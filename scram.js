// Check for element for up to ~10s to account for slow page loads
var intervalId = setInterval(scram, 100)
var maxChecks = 100
var numChecks = 0
function scram () {
  var container = document.getElementById('credential_picker_container')

  if (container != null || numChecks >= maxChecks) {
    clearInterval(intervalId)
    container.remove()
  } else {
    ++numChecks
  }
}
