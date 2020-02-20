const ce = name => document.createElement(name);

let maTable = ce("div");
let st = new SuperTable(maTable, {
	columns: [
		{title: "first", field: "firstName"},
		{title: "last", field: "lastName"}
	],
	data: employees
});
document.body.appendChild(maTable);


