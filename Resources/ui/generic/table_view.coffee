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
    item['subSite']  = "test1_detail.js"
    item['hasChild'] = true

  table = Ti.UI.createTableView(data: tableData)

  table.addEventListener "click", (e) ->
    if e.rowData.subSite
      details = Ti.UI.createWindow
        title: "Detail Test"
        url: e.rowData.subSite
        item: e.rowData

      if Ti.Platform.name == 'android'
        tabGroup.activeTab.open(details, {animated: true })
      else
        Ti.UI.currentTab.open(details, { animated: true })

  table

module.exports = TableView
