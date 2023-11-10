
function palindrome() {
    const string = document.getElementById("string").value;
    return string === string.replace("/[\W_]/g","").toLowerCase().split("").reverse().join("")
  
    
  }
  
  document.getElementById("submit").addEventListener("click",function() {
    const result = palindrome();
    result ? document.getElementById("result").innerHTML = "The string is a palindrome." : document.getElementById("result").innerHTML = "The string is not a palindrome."
    
  })


 // const punctuation = /[\W_]/g;
    // const replaceing = string.replace(punctuation, "");
    // const lowerCase = replaceing.toLowerCase();
    // const spliting = lowerCase.split("");
    // const reverseing = spliting.reverse().join("")

