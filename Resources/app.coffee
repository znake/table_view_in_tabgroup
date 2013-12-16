# set background color
Titanium.UI.setBackgroundColor('#fff')

mainWindow = Titanium.UI.createWindow()

TestTabGroup = require('ui/test/tabgroup')
testTabGroup = new TestTabGroup()

testButton = Titanium.UI.createButton
  top: 160
  width: 240
  left: 60
  title: "Testing"

testButton.addEventListener "click", (e) ->
  testTabGroup.open()

mainWindow.add(testButton)

mainWindow.open()
