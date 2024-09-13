let a1 = document.createElement("h1"); //To create an html element using Js we use createElement. Document is like a super class which contain all the html elements.
console.log(a1);
a1.innerText = "Document in Heading";//a1.innerText is used to fillup the interior details of the h1 tag that is stored in a1 object.
a1.style.backgroundColor = "pink"; //style stores all the css properties using which we can acess and use all the css properties.
a1.style.color = "white";

let body = document.getElementById("b1");//document.getElementById("b1") we are creating the elements but to store them in the body we need to acess 
console.log(body);

let image = document.createElement("img");
console.log(image);
image.src = "https://imgs.search.brave.com/HxCTkUnxJqp4nIGm2iknNyS5yGoEuG10U2bEzTTnBB4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9icmFp/bmJsYXN0dHJpdmlh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/YnJhaW5ib3kucG5n";

body.appendChild(a1);
body.appendChild(image);

let c1 =document.getElementsByTagName("b");
console.log(c1);
c1[0].innerText ="I am text 1";
c1[1].innerText ="I am text 2";

let d1 = document.querySelector('#abc');
console.log(d1);

let m1 = document.querySelector(".monga");
console.log(m1);

let b1 = document.querySelectorAll("b");
console.log(b1);
b1[0].innerText = "I am b1"

//evnet handeler in doms

let body1= document.querySelector("body");
body1.style.transition="1s";

function change(){
    if(body1.style.backgroundColor!="black"){
        body1.style.backgroundColor="black";
        body1.style.color="white";
    }
    else{
        body1.style.backgroundColor="white";
        body1.style.color="black";
    }
}

