win = Ti.UI.currentWindow

view = Ti.UI.createView
   backgroundColor: 'white'

priceLabel = Ti.UI.createLabel
  text: "price: #{win.item.price}"

view.add(priceLabel)

win.add(view)
