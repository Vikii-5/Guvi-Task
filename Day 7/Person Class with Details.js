//Creating Class called "Person"
class Person {
    //Assigning personal details for parent constructor
    constructor(name, age, address, qualification){
        this.name = name;
        this.age = age;
        this.address = address;
        this.qualification = qualification;
    }
}

class Details extends Person {
    constructor(name, age, address, qualification, designation, company, exp){
        super(name, age, address, qualification);
        this.designation = designation;
        this.company = company;
        this.exp = exp;
    }
}

let info = new Details("Dinesh", "26", "Tamilnadu", "HSC", "Sales Rep", "Vedish Mobiles", "4 Years");
console.log(info);
