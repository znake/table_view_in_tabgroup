DetailWindow = (item) ->

  win = Ti.UI.createWindow
    title: "Detail Test"
  
  view = Ti.UI.createView
     backgroundColor: 'white'

  priceLabel = Ti.UI.createLabel
    text: "price: #{item.price}"

  view.add(priceLabel)

  win.add(view)

  win

module.exports = DetailWindow
