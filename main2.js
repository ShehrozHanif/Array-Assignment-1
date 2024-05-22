/*3.Impelment a function name changeColor that takes a product object and a new color as input.This function shuld update the color property
of the product and adjust the price based on the new color (implement your own logic, e.g increase by 10 % for red decrease 5% for blue).
*/
// we place object in an Array
let products = [
    {
        name: "Louis Vuitton bag",
        price: 15000,
        color: "white",
        inventory: {
            stock: 100,
            colorOptions: ["red", "blue"]
        }
    },
    {
        name: "Gucci bag",
        price: 10000,
        color: "black",
        inventory: {
            stock: 50,
            colorOptions: ["red", "blue", "white"]
        }
    },
    {
        name: "Mk tote bag ",
        price: 8000,
        color: "Green",
        inventory: {
            stock: 200,
            colorOptions: ["red", "blue", "pink"]
        }
    }
];
function changeColor(products, newColor) {
    products.color = newColor;
    switch (newColor) {
        case "red":
            products.price *= 1.10;
            break;
        case "blue":
            products.price *= 0.95;
            break;
        default:
            // No price change for other colors
            break;
    }
}
// Now i explain what is [0] index, as we all know this index start from 0 and all these objects in an Array named products and his 3 object in 
//Array like   products:string[] = ["Louis Vuitton","Gucci","M.k"],  So as you can see How it is so when we call products[0] it's mean we are  
// calling "Louis Vuitton" , similarly for [1] index means we are calling "Gucci" object so in this part we learn how to add object in an Array
// and when implemnting a function in an Object than how we can execute it.
changeColor(products[2], 'blue');
console.log(products[2]);
/*4.Display each product's name,price,stock and available colors.Iterate through the products array and print each product's details.
  
 For iteration in an Array we use of lopp
*/
for (let product of products) {
    console.log(`Name:${product.name}`);
    console.log(`Price:${product.price}`);
    console.log(`Stock:${product.inventory.stock}`);
    console.log(`Available Colors:${product.inventory.colorOptions}`);
    console.log('----'); //it's a seprator 
}
// 2.Create an array named students containing atleast three student object.Each student Object should include a name and an array of grades.
const students = [
    {
        name: "Shehroz",
        grades: [80, 85, 90]
    },
    {
        name: "Shami",
        grades: [78, 72, 85]
    },
    {
        name: "shayan",
        grades: [85, 70, 68]
    }
];
//3. Implement a function named CalculateAverageGrade that takes a student's grade as input and returns the average grade for that student.
function CalculateAverageGrade(grade) {
    let result = grade.reduce((total, sum) => sum + total, 0);
    return result / grade.length;
}
//4 . Display each student's name and average grade.Iterating through the students array.Calculate the average grade for each student using the
//    calculateAverageGrade function and print their name and average grade.
// Aagain using  of-lopp
for (let student of students) {
    let averageGrades = CalculateAverageGrade(student.grades);
    console.log(`Name:${student.name}`);
    console.log(`Grades:${student.grades}`);
    console.log(`AverageGrades:${averageGrades.toFixed(2)}`);
    console.log('----'); // As usual seprator
}
export {};
