
/* 
Calculate the Sum and average Of the user entered values 
Ask the user to enter how many number he wants to get the sum of
Save the number in array
Show him the sum and average of the entered values 

*/

let quit = false;
while(!quit){
    let many = Number(prompt("How many numbers do you want to get the sum of?"));
    let sum = 0;
    let average = 0;
    let arr = [];
    for (let i = 0; i < many; i++) {
        let num = Number(prompt("Enter a number"));
        arr.push(num);
        sum += num;
    }
    average = sum / many;
    alert("The sum of the numbers is " + sum + " and the average is " + average);
    quit = prompt("Do you want to quit? (y/n)") == "y" ? true : false;

}

