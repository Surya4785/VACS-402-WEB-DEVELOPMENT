// write a program to display age, city and course using the class.
class Student {
    constructor(name, age, city, course) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.course = course;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.city}`);
        console.log(`Course: ${this.course}`);
    }
  }
  
  const student1 = new Student("Surya",21, "Ghaziabad", "Computer Science");
  student1.displayDetails();
  