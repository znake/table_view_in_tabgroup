// Generated by CoffeeScript 1.6.3
(function() {
  var TestTabGroup;

  TestTabGroup = function() {
    var test1Tab, test1Window, test2Tab, test2Window, testTabGroup;
    testTabGroup = Titanium.UI.createTabGroup({
      exitOnClose: false
    });
    test1Window = Titanium.UI.createWindow({
      url: "ui/test/test1.js",
      tabGroup: testTabGroup
    });
    test1Tab = Titanium.UI.createTab({
      icon: "KS_nav_ui.png",
      title: "Test 1",
      window: test1Window
    });
    test2Window = Titanium.UI.createWindow({
      url: "ui/test/test2.js"
    });
    test2Tab = Titanium.UI.createTab({
      icon: "KS_nav_views.png",
      title: "Test 2",
      window: test2Window
    });
    testTabGroup.addTab(test1Tab);
    testTabGroup.addTab(test2Tab);
    return testTabGroup;
  };

  module.exports = TestTabGroup;

}).call(this);
