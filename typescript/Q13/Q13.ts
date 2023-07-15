var listpeople = ["Babar Azam","M.Rizwan","Usman","Anas"];
console.log("Original Guest List and their invitation : " + listpeople);

for (var i = 0; i < listpeople.length; i++) {
    var guest = listpeople[i];
    var message = "Dear " + guest + ", you are invited to dinner. Please join us!.\nWe are looking forward for your presence.\nThank you.";
    console.log(message);
}
console.log( '\n', "Due to some circumstances we can only invited two of you guys" );

while(listpeople.length > 2) {
    var rempeple = listpeople.pop();
    console.log("Sorry " + rempeple + " we can't invite you " );   
}


// Print invitations to the remaining two guests
console.log("\nInvitations to the remaining guests:");
for (var i = 0; i < listpeople.length; i++) {
  var guest = listpeople[i];
  var message = "Dear " + guest + ", you are still invited to dinner. Please join us!";
  console.log(message); 
}

// Clear the guest list
 listpeople = [];
// Print the empty guest list
console.log("\nGuest list after removing all names:", listpeople);