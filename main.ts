//                           Array Assignment
/* Challenge:
 You are taskd with Creating a Inventory System.Implement functions and logic to manage object manupulation effectively.

 1.Define a type alias named product to represent a product with the following properties:
 . name(string): The name of the product.
 . price(number): The price of producr.
 . inventory(Object): An object containing invemtory details including:
 . stock(number):The number of products is available.
 . colorOptions(string[]):An array listing available color
*/


type product ={
    name:string,
    price:number,
    inventory:{
        stock:number,
        colorOptions:string[]
    }
}



/*2.Create an Array named products containing atleast three product objects.Each product object shuold include a name, price and inventory details.*/

 let products:product[]=[
    {
        name:"Louis Vuitton bag",
        price:15000,
        inventory:{
            stock:100,
            colorOptions:["brown","black"]
        }
    },
    {
        name:"Gucci bag",
        price:10000,
        inventory:{
            stock:50,
            colorOptions:["brown","red","white"]
        } 
    },
    {
        name:"Mk tote bag ",
        price:8000,
        inventory:{
            stock:200,
            colorOptions:["multi color","pink"]
        }
    }
 ]



  
// Ramaining Question & Answers in main2.ts file 
  
  