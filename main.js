let a=parseInt(prompt("Enter a n1 number"));
let b=parseInt(prompt("Enter a n2 number"));
document.write(`Before Swapping n1=${a},n2=${b}<br>`)

let swap=(a,b)=>{
   let c=a
    a=b;
    b=c;
    console.log(a,b);
    document.write(`After Swapping n1=${a},n2=${b}`)
}
swap(a,b);

