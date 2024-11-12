// PART 1.

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }

    sellProduct(quantity) {
        if (quantity > this.quantity) {
            return "Error: Insufficient stock.";
        }
        this.quantity -= quantity;
        return this.price * quantity;
    }

    restockProduct(quantity) {
        this.quantity += quantity;
    }
}

// Example usage
const product = new Product("Dining Table", 999, 32);
console.log(product.sellProduct(5));      // Returns 4995
product.restockProduct(12);               // Adds 12 to stock
console.log(product.quantity);            // Prints 39
product.updatePrice(1200);  // Updates price to 1200
console.log(product.price);  // Output: 1200

// PART 2.2.

function findUniqueWords(words) {
    return Array.from(new Set(words));
}

// Example usage
const words = ["pineapple", "mango", "pineapple", "orange", "mango"];
console.log(findUniqueWords(words));  // Returns ["pineapple", "mango", "orange"]

// Part 2.3.

function commonElements(array1, array2) {
    const set1 = new Set(array1);
    return array2.filter(element => set1.has(element));
}

// Example usage
const array1 = [1, 2, 3, 4, 5, 7];
const array2 = [3, 4, 5, 6, 7, 8];
console.log(commonElements(array1, array2));  // Returns [3, 4, 5, 7]

// PART 3.4.

class StudentGrades {
    constructor() {
        this.grades = new Map();
    }

    // Adds a student and their grade to the map
    addGrade(studentName, grade) {
        this.grades.set(studentName, grade);
    }

    // Returns the grade of the specified student
    getGrade(studentName) {
        return this.grades.get(studentName) || "Student not found.";
    }

    // Updates the grade of the specified student
    updateGrade(studentName, newGrade) {
        if (this.grades.has(studentName)) {
            this.grades.set(studentName, newGrade);
        } else {
            console.log("Student not found.");
        }
    }

    // Removes a student from the map
    removeStudent(studentName) {
        if (this.grades.has(studentName)) {
            this.grades.delete(studentName);
        } else {
            console.log("Student not found.");
        }
    }
}
const studentGrades = new StudentGrades();
studentGrades.addGrade("Tim", 72);
studentGrades.addGrade("Melissa", 93);
console.log(studentGrades.getGrade("Tim")); // Output: 72
studentGrades.updateGrade("Tim", 81);
console.log(studentGrades.getGrade("Melissa")); // Output: 93
console.log(studentGrades.getGrade("Tim")); // Output: 81
studentGrades.removeStudent("Melissa");
console.log(studentGrades.getGrade("Melissa")); // Output: Student not found.

// PART 4.5.

function validatePassword(password) {
    // Regular expression for at least one special character
    const specialCharacterPattern = /[#$%^&*(),.?":{}|<>]/;

    // Check if password is at least 8 characters long and contains a special character
    return password.length >= 8 && specialCharacterPattern.test(password);
}

// Example usage:
console.log(validatePassword("password123"));  // Returns false
console.log(validatePassword("P@ssw0rd!"));    // Returns false
console.log(validatePassword("pa$$w0rd?"));   // Returns true