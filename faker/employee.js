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
		return median(employees.map(employee => employee.salary));
	}

	static avgAge(employees) {
		return avg(employees.map(employee => employee.age));
	}

	static totalSalary(employees) {
		let sum = employees.reduce((acc, employee) => acc + employee.salary, 0);
		return sum * 1.87;
	}

	static lastNameBeginsWithA(employees) {
		return employees.reduce((acc, employee) => {
			if(employee.lastName.charAt(0).toLowerCase() === "a") acc++
			return acc;
		}, 0);
	}

	static bestSalary(employees) {
		return Math.max(...employees.map(employee => employee.salary));
	}
}