// Generated by CoffeeScript 1.6.3
var TableView;

TableView = function(tabGroup) {
	var table, tableData;

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

	tableData.map(function(item) {
		item['subSite'] = "test1_detail.js";
		item['hasChild'] = true;
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
				tabGroup.activeTab.open(details, { animated: true });
			} else {
				Ti.UI.currentTab.open(details, { animated: true });
			}
		}
	});
	return table;
};

module.exports = TableView;
