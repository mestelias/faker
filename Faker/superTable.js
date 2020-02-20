class SuperTable {
	constructor(element, options) {
		this._element = element;
		this._options = options;
		this.table();
		this.head();
		this.body();
	}

	table() {
		this._table = document.createElement("table");
		this._element.appendChild(this._table);
	}

	head() {
		this._head = document.createElement("thead");
		this._table.appendChild(this._head);
		this._options.columns.forEach(col => {
			let colHead = document.createElement("th");
			colHead.innertHTML = col.title;
			this._head.appendChild(colHead);
		});
	};

	body() {
		this._body = document.createElement("tbody");
		this._table.appendChild(this._body);
		this._options.data.forEach(entry => {
			let row = document.createElement("tr");
			this._body.appendChild(row);
			this._options.columns.forEach(col => {
				/*const ce = name => document.createElement(name);*/
			})
			let cell = ce("td");
			row.appendChild(cell);
			cell.innertHTML = entry[col.field];
		});
	};

}