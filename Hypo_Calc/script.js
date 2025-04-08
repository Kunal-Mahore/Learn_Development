let a;
let b;
let c;
/*
a = window.prompt("Enter a");
a = Number(a);

b = window.prompt("Enter b");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Side c: ",c);
*/

document.getElementById("calcButton").onclick = function() {
    a = document.getElementById("atextbox").value;
    a = Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}