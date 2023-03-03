function showBlog(event){
    // console.log("CLICKED");
    event.preventDefault();
    let container =  document.getElementById("main-content");
    container.innerHTML= 
    
    `

    <div> 
        <div class="headline">
           <h1>   
            Difference between var,let & const

           </h1> 
        </div>  
        <div class="description" >
            var, let, and const are three keywords used to declare variables in JavaScript. They have some differences in terms of their scope and reassignment abilities.

            var: var was the original way of declaring variables in JavaScript. Variables declared with var are function-scoped, meaning they are accessible within the function in which they are defined, as well as any functions declared within that function. Variables declared with var can be reassigned and redeclared within their scope.

            let: let was introduced in ECMAScript 6 as a replacement for var. Variables declared with let are block-scoped, meaning they are accessible only within the block in which they are defined. A block is a piece of code surrounded by curly braces {}. Variables declared with let can be reassigned within their scope but cannot be redeclared.

            const: const is also introduced in ECMAScript 6. Variables declared with const are also block-scoped and cannot be reassigned or redeclared within their scope. However, it is important to note that const does not make the variable immutable, only its reference. That means you cannot assign a new value to the same reference, but you can still mutate its properties if it is an object or array.

            In summary, var is function-scoped, let and const are block-scoped. var can be redeclared and reassigned, let can be reassigned but not redeclared, and const cannot be redeclared or reassigned.
                

        </div>  
    </div>
    <div> 
        <div class="headline">
           <h1>   
            Difference between map,filter,find & forEach


           </h1> 
        </div>  
        <div class="description" >
 <b> map():</b>  The map() method is used to transform each element in an array and returns a new array with the same number of elements as the original. It applies a function to each element in the array and returns a new array containing the results. The original array remains unchanged.

Example:


<br> 
const numbers = [1, 2, 3, 4];
<br> 
const doubledNumbers = numbers.map(num => num * 2);
<br> 
console.log(doubledNumbers); // [2, 4, 6, 8]

<br> <br> 
<b>filter():   </b>The filter() method is used to create a new array by filtering out elements from an existing array that don't meet a certain criteria. It returns a new array containing only the elements that pass the test implemented by the provided function.

Example:

<br>

const numbers = [1, 2, 3, 4];<br>
const evenNumbers = numbers.filter(num => num % 2 === 0);<br>
console.log(evenNumbers); // [2, 4]

<br> <br> 
 <b> find(): </b> The find() method is used to find the first element in an array that satisfies a provided testing function. It returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

Example:

<br>

const numbers = [1, 2, 3, 4];<br> 
const found = numbers.find(num => num > 2);<br>
console.log(found); // 3

<br> <br> 
 <b>forEach():  </b>The forEach() method is used to execute a provided function once for each array element. It does not return a new array, but simply executes the provided function for each element in the array.

Example:

<br>

const numbers = [1, 2, 3, 4];<br> 
numbers.forEach(num => console.log(num));<br>
// 1<br>
// 2<br>
// 3<br>
// 4<br>
In summary, map() and filter() create a new array, find() returns a single value, and forEach() simply loops over the array elements and executes a function for each element.

        </div>  
    </div>
    <div> 
        <div class="headline">
           <h1>   
          Why would I use template string?

           </h1> 
        </div>  
        <div class="description" >
            Template strings, also known as template literals, are a way to create strings that allow for dynamic expressions to be embedded within them. Here are some reasons why you might use template strings:

            <ol>
                <li>
                    Variable interpolation: One of the main benefits of template strings is that you can easily embed 
                    variables within them using the //$ {}// syntax. This makes it easy to create dynamic strings
                     that include variable data.


                </li>
                <li>
                    Multiline strings: With template strings, you can create multiline strings without needing to use concatenation or
                     escape characters. This makes code more readable and easier to maintain.



                </li>
                <li>
                    Improved readability: Template strings can make your code more readable by allowing you 
                    to include expressions within the string itself, rather than having to use concatenation or multiple function calls.


                </li>
                <li>
                    Avoiding security issues: Template strings can help prevent security issues such as SQL injection attacks by automatically escaping any embedded expressions.

                </li>
            </ol>

            
            
            
            
            Overall, template strings can make your code cleaner, more readable, and more secure. If you need to create dynamic strings that include variable data or multiline content, then template strings are a great option to consider.
        </div>  
    </div>


    `
}