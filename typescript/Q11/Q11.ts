var listpeople = ["Babar Azam","M.Rizwan","Usman","Anas"];
for (var i = 0; i < listpeople.length; i++) {
    var guest = listpeople[i];
    var message = "Dear " + guest + ", you are invited to dinner. Please join us!.\nWe are looking forward for your presence.\nThank you.";
    console.log(message);
  }
var notmakeit = 3;
var toremove = listpeople.splice(notmakeit, 3);

 var newG = "Muneeb";
listpeople.push(newG);
console.log(listpeople);
for (var i = 0; i < listpeople.length; i++) {
    var guest = listpeople[i];
    var message = "Dear " + guest + ", you are invited to dinner on Saturday at my House. Please join us!.\nWe are looking forward for your presence.\nThank you.";
    console.log(message);
}