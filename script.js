

function getRandomString(str){

  var start = Math.floor(Math.random() * str.length);

  var length = Math.floor(Math.random() * (str.length - start)) + 1;

  return str.substring(
    start, start + length);

}


function showPassword(){
 
  // Inputs
  var name = document.getElementById('name').value.replace(/\s/g, "");
  var bday = document.getElementById('bday').value.replace(/\s/g, "");
  var color = document.getElementById('color').value.replace(/\s/g, "");
  var length = document.getElementById('length').value;
  //Functions
  var password =
    getRandomString(name) +
    getRandomString(bday) +
    getRandomString(color) +
    getRandomString(name) +
    getRandomString(bday) +
    getRandomString(color) +
    getRandomString(name) +
    getRandomString(bday) +
    getRandomString(color);

  // Output
  console.log(password);

  if  (password.length>length) 
    {

      var password2=password.substring(0,12)
    console.log(password2)

    } 
  else {
     var string_length=12-password.length;

  }


  var outputDiv = document.getElementById('output');

  outputDiv.innerHTML = `<h3> Your Password Is: ${password2} <h3>`







}




// google "JavaScript String Manipulation Methods"

//create a password maker that takes someones name, birthday, and favorite color and generates a password. 

// MY PASSWORD GENERATOR
// I added some code i found on stack overflow to make the password exactly 12. but i dont know how to randomize the existing substrings that you're supposed to input.



