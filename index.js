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


const createPassword = (length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex]; 
  }
  return password;
};

const generatePassword = () => {
  const lengthInput = document.querySelector("#number")
  const length = Number(lengthInput.value)

  if (!length) {
    alert("Enter a password length (5–15).");
    return;
  }

  if (length < 5 || length > 15) {
      alert("Unsecure password length. Choose 5–15.");
      return;
  }
    result1.textContent = createPassword(length);
    result2.textContent = createPassword(length);
  
    lengthInput.value=""
};

const copyToClipboard = (element) => {
  const text = element.textContent;
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const originalText = element.textContent;
    element.textContent = "Copied! ✓";

    setTimeout(() => {
      element.textContent = originalText;
    }, 900);
  });
};

result1.addEventListener("click", () => copyToClipboard(result1));
result2.addEventListener("click", () => copyToClipboard(result2));


generateBtn.addEventListener("click", generatePassword);