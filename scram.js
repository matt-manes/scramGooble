// Check for element for up to ~10s to account for slow page loads
var intervalId = setInterval(scram, 100)
var maxChecks = 100
var numChecks = 0
var cleared = false
function scram () {
  var container = document.getElementById('credential_picker_container')
  var mobileContainer = document.getElementById('credential_picker_iframe')

  if (container != null) {
    container.remove()
    cleared = true
  } else if (mobileContainer != null) {
    mobileContainer.remove()
    cleared = true
  } else {
    ++numChecks
  }
  if (numChecks >= maxChecks || cleared) {
    clearInterval(intervalId)
  }
}
