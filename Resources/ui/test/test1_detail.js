// Generated by CoffeeScript 1.6.3
(function() {
  var priceLabel, view, win;

  win = Ti.UI.currentWindow;

  view = Ti.UI.createView({
    backgroundColor: 'white'
  });

  priceLabel = Ti.UI.createLabel({
    text: "price: " + win.item.price
  });

  view.add(priceLabel);

  win.add(view);

}).call(this);