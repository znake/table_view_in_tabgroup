TableView = (tabGroup) ->


  tableData = [
    title: "Apples"
    price: "1.25"
  ,
    title: "Grapes"
    price: "1.50"
  ,
    title: "Oranges"
    price: "2.50"
  ]

  tableData.map (item) ->
    item['hasChild'] = true

  table = Ti.UI.createTableView(data: tableData)

  table.addEventListener "click", (e) ->
    if e.rowData.hasChild
      DetailWindow = require('ui/test/test1_detail')
      details = new DetailWindow(e.rowData)

      tabGroup.activeTab.open(details, {animated: true })

  table

module.exports = TableView
