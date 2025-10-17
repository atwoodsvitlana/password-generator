const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
  "U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let generateBtn = document.getElementById("generate-btn");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

// helper function to create one password
const createPassword = (length = 15) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex]; 
  }
  return password;
};

const generatePassword = () => {
  result1.textContent = createPassword();
  result2.textContent = createPassword();
};

generateBtn.addEventListener("click", generatePassword);