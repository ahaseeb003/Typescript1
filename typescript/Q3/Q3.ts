let myname1 = "ABDUL HASEEB" ,
    myname2 = "abdul haseeb" ;
console.log(myname1);
// For lower - Case
console.log(myname1.toLowerCase());


console.log(myname2);
// For Upper - Case
console.log(myname2.toUpperCase());

 
// For Title - Case
function myname3(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  myname3("abdul haseeb");








