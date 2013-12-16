# window for banks
win = Ti.UI.currentWindow

win.title = "Testing Area 2"

view = Ti.UI.createView
   backgroundColor: 'white'

label = Ti.UI.createLabel
  text: "Test 2"

view.add(label)

win.add(view)
