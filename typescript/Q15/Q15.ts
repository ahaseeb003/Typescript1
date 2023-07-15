var listpeople = ["Babar Azam","M.Rizwan","Usman","Anas"];
console.log("Original Guest List and their invitation : " + listpeople);

for (var i = 0; i < listpeople.length; i++) {
    var guest = listpeople[i];
    var message = "Dear " + guest + ", you are invited to dinner. Please join us!.\nWe are looking forward for your presence.\nThank you.";
    console.log(message);
  }
console.log("wE HAVE space for more Guys to Join");
listpeople.unshift("Muneeb");
listpeople.splice(3,0,"Khubaib");
listpeople.push("Abdul Rehman");
console.log(listpeople);
for (var i = 0; i < listpeople.length; i++) {
    var guest = listpeople[i];
    var message = "Dear " + guest + ", you are invited to dinner. Please join us!.\nWe are looking forward for your presence.\nThank you.";
    console.log(message);
  }
  // Print the number of people being invited to dinner
console.log("\nTotal number of people invited: " + listpeople.length);