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
		return mediane(employees.map(employee => employee.salary));
	}

	static avgAge(employees) {
		return avg(employees.map(employee => employee.age));
	}

	static totalSalary(employees) {
		let sum = employees.reduce((acc, employee) => acc + employee.salary);
		return sum * 1.87;
	}

	/*static lastNameBeginsWithA(employees) {
		return employees.reduce((acc, employees) => )
	}*/

	static bestSalary(employees) {
		return Math.max(...employees.map(employee => employee.salary));
	}
}

const test_employees = () => {
	faker.locale = "fr";

	let employees = [];

	for(let i = 0; i < 10000; i++) {
		let employees = new Employee(
			faker.name.firstName(),
			faker.name.lastName(),
			faker.internet.eMail(),
			faker.phone.phoneNumber(),
			randRange(18, 62),
			faker.name.jobTitle(),
			randRange(1000, 10000)
		);
		employees.push(employee);
	}
}
