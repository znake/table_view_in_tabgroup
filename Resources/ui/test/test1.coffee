win = Ti.UI.currentWindow

win.title = "Testing Area"

TableView = require('ui/generic/table_view')
testTableView = new TableView(win.tabGroup)

win.add(testTableView)
