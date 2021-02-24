/*const username = "sim";
const usertype = "admin";*/

function usernameChecker(username, usertype) {
    if (username.length > 5 && username.length < 10 || usertype === "admin" || usertype === "manager") {
        return "Username valid";
    }   else { 
        return "Username invalid";}
} 

console.log(usernameChecker("sim", "admin"));