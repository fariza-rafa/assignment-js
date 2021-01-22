// https://github.com/fariza-rafa/assignment.js

// Problem 01 // kilometerToMeter

function kilometerToMeter(km){
    if(km >= 0){
        return km*1000;
    }
    else{
        return "Kilometer must be a positive value.";
    }
}
// End of Problem 01. Function checker is in below.


// Problem 02 // budgetCalculator

function budgetCalculator(watch,mobile,laptop){
    if(watch >=0 && mobile >=0 && laptop >=0){
        return (watch * 50) + (mobile * 100) + (laptop * 500);
    }
    else{
        return "Invalid input.";
    }
}
// End of Problem 02. Function checker is in below.


// Problem 03 // hotelCost

function hotelCost(days) {
    if (typeof days != 'number' || days < 0) {
        return "Please input positive values of days."
    }
    if (days <= 10) {
        return days * 100;
    }
    if (days <= 20) {
        return 10 * 100 + (days - 10) * 80;
    }
    else {
        return 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
}
// End of Problem 03. Function checker is in below.


// Problem 04 // megaFriend

function megaFriend(friends){
    if(friends.length == 0){
        return "Input the array of your friends name.";
    }
    else{
        let mega= friends[0];
        for(let i = 0; i < friends.length; i++){
            let friend = friends[i];
            if(mega.length < friend.length){
                mega = friend;
            }
        }
  
       return mega;
    }
}
// End of Problem 04. Function checker is in below.



// For checking function:

// Problem 01:
console.log(kilometerToMeter(-76));

// Problem 02:
console.log(budgetCalculator(1,3,-2));

// Problem 03:
console.log(hotelCost(50));

// Problem 04:
var friendsArray=["Mina","Tina","Rina","Jorina", "Sokhina"];
console.log(megaFriend(friendsArray));