// To display the name using callback function.
function displayName(name) {
    console.log("Name: " + name);
  }
  
  function getName(callback) {
    const name = "Surya"; 
    callback(name); 
  }
  
  getName(displayName);
  

// To display name, age, city and course using the class.
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
  
  const student1 = new Student("Surya",21, "Ghaziabad", "Computer Science (IT)");
  student1.displayDetails();