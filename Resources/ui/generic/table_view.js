// Generated by CoffeeScript 1.6.2
(function() {
  var TableView;

  TableView = function(tabGroup) {
    var subSite, table, tableData;

    tableData = [
      {
        title: "Apples",
        price: "1.25"
      }, {
        title: "Grapes",
        price: "1.50"
      }, {
        title: "Oranges",
        price: "2.50"
      }
    ];
    if (Ti.Platform.name === 'android') {
      subSite = "ui/test/test1_detail.js";
    } else {
      subSite = "test1_detail.js";
    }
    tableData.map(function(item) {
      item['subSite'] = subSite;
      return item['hasChild'] = true;
    });
    table = Ti.UI.createTableView({
      data: tableData
    });
    table.addEventListener("click", function(e) {
      var details;

      if (e.rowData.subSite) {
        details = Ti.UI.createWindow({
          title: "Detail Test",
          url: e.rowData.subSite,
          item: e.rowData
        });
        if (Ti.Platform.name === 'android') {
          return tabGroup.activeTab.open(details, {
            animated: true
          });
        } else {
          return Ti.UI.currentTab.open(details, {
            animated: true
          });
        }
      }
    });
    return table;
  };

  module.exports = TableView;

}).call(this);
