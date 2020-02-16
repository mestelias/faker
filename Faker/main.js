class User {
	
	constructor(firstName, lastName, eMail, numTel, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.eMail = eMail;
		this.numTel	= numTel;
		this.age = age;
	}

}

class Employee extends User {
	
	constructor(firstName, lastName, eMail, numTel, age, jobTitle, salary) {
		super(firstName, lastName, eMail, numTel, age);
		this.jobTitle = jobTitle;
		this.salary = salary;
	}						

	static medSalary(employees)	{
		return mediane(employees.map(employees => employees.salary));
	}

	static medAge(employees) {
		return mediane(employees.map(employees => employees.age));
	}

}

//const randRange = new Array(100)/*.fill(null)*/.map(e => e = faker.fake("{{firstName}}, {{lastName}}, {{eMail}}, {{numTel}} {{age}}"))

//console.log(randRange);

const generateEmployees = () => {
	function randRange(min,max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let employees = [];

	for(let i = 0; i < 100; i++){
		let Cur_employe = new employe(faker.name.firstName(), faker.name.lastName(), faker.internet.eMail(), faker.phone.phoneNumber(),randRange(20, 115), faker.name.jobTitle(), randRange(1231, 76, 7589, 56));
		employees.push(Cur_employe);
	}
}


/*new Array(100).fill.firstName.lastName.eMail.numTel.age.jobTitle.salary.medSalary.medAge;

console.log(Array);*/
