window.addEventListener("load", event => main());

const main = () => {
	console.log("MAIN");
	let employees = test_employees();
	test_table(employees);
}

const test_employees = () => {
	console.log("test employees");
	faker.locale = "fr";
	
	employees = [];
	
	for(let i = 0; i < 2500; i++) {
		let employee = new Employee(
			faker.name.firstName(),
			faker.name.lastName(),
			faker.internet.email(),
			faker.phone.phoneNumber(),
			randRange(18, 62),
			faker.name.jobTitle(),
			randRange(1000, 10000)
		);
		employees.push(employee);
	}
	
	console.log("salaire median", Employee.medSalary(employees));
	console.log("age moyen", Employee.avgAge(employees));
	console.log("charges totales", Employee.totalSalary(employees));
	console.log("last name a", Employee.lastNameBeginsWithA(employees));
	console.log("meilleur salaire", Employee.bestSalary(employees));

	return employees;
	
}

const test_table = (data) => {
	console.log("test table");

	let container = document.createElement("div");
	document.body.appendChild(container);

	new SuperTable(container, {
		columns: [

		],
		data: data
	})

}

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
	};
}

const median = arr => {
	arr.sort((a, b) => a - b);
	return (arr[(arr.length - 1) >> 1] + arr[arr.length >> 1]) / 2;
}
const avg = arr => arr.reduce((sum, cur) => sum + cur, 0) / arr.length;
const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;