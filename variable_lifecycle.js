/*The explanation on variable lifecycle is a little confusing. Let me explain more to help you better understand that concept.
First, remember this, the lifecycle of a variable declared with let is in a code block scope and one declared with var is in a function scope.

Here is the code with comment I added.
P.S. Copy the code into your editor to get better formatting and reading experience.*/

function makeArray() {
    const arr = []

    for (var i = 0; i < 5; i++) { //Beginning of the code block that i exists in.

        //If you were to log out var or let here, there will be no differences. They will both iterate as expected.

        arr.push(function () {
            console.log(i)
        })

        //var and let will also log out the same iteration here as expected.

    } //End of the code block with i. Since the lifecycle of a variable with let is the block scope, i with let dies right here. You can't get any i with let here. 

    //But var still lives here cuz the lifecycle of a variable wtih var is the function scope and the function has not ended yet. So here you can log out the i with a value of 5 with var. It's not about the iteration of i.

    return arr //This returns console.log(i). With let, it will use every i value in every iteration as expected cuz no i value outside the code block and therefore no value-shadowing. But with var, console.log(i) will directly use the i value outside the iteration code block because they are on the same level. Once the function finds an i, there is no need for it to dig into the code block to use the i there.
} //Function ends, i with var dies

const functionArr = makeArray()
functionArr[0]()
