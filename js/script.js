// jQuery for making the form tag (to create a new user) visible once the new user button is clicked (had to link to jQuery in hmtl to make it work)
$("button").click(function(){
    $("form").removeClass("hidden");
});

// use getElementById and addEventListener when user clicks ‘submit’ on form, create function(e) to use .preventDefault() and then create variables that extract content from first three <input> elements by using getElementById('idname').value, and use console.log to display content extracted
document.getElementById('submit-button').addEventListener('click', function(e) {
	e.preventDefault();
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var userName = document.getElementById('username').value;
    console.log("New User = First Name: " + firstName + ", Last Name: " + lastName + ", Username: " + userName);
});

// user constructor using object constructor with a function to return user information
function User(firstname, lastname, username) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.username = username;
  this.userInfo = function () {
    return this.firstname + "\n" +
    this.lastname + "\n" +
    this.username + "\n";
  };
}

// new user object created using user constructor, console.log to debug; append new user info to html page, console.log to debug
var newUser = new User("Luna", "Lovegood", "looney-lovegood");
console.log(newUser.userInfo());
document.getElementById('new-user').append(newUser.userInfo());
console.log(newUser);
