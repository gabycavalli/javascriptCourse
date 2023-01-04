/*Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.*/

function CodelandUsernameValidation(str) { 

  // code goes here

if (typeof str !== 'string') {
    return false;
  }
  if (str.length < 4 || str.length > 25) {
    return false;
  }
  if (!/^[a-zA-Z]/.test(str)) {
    return false;
  }
  if (!/^[a-zA-Z0-9_]*$/.test(str)) {
    return false;
  }
  if (str[str.length - 1] === '_') {
    return false;
  }
  return true;

  //return str; 
}

  
   
// keep this function call here 
console.log(CodelandUsernameValidation("aaaaa"));