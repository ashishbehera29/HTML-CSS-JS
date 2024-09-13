                                                   //anonomus function

// function(a,b){
//     console.log(a+b);
// }
 
                                              //immideately invoke function ex-pression

(function(a,b){
    console.log(a+b);
})(10,20);

                                               //function with expression

let sub = function(c,d){
    console.log(c-d);  
}
sub(30,10);

                                                      //arrow function

  let sub1 = (c,d)=> {
    console.log(c-d);  
    console.log(c+d);
    
}
sub1(30,10);

                                                         //call back funtion

function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}

function total(op,x,y){
    return op(x,y);
}

let a1 = total(add,10,20);
let a2 = total(mul,3,5);
console.log(a1);
console.log(a2);