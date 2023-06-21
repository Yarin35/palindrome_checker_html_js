document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('palindromeForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var inputValue = document.getElementById('inputText').value;
      var result = isPalindrome(inputValue);
      showResultAnimation(result);
    });
  
    function isPalindrome(str) {
      var sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
      var reversedStr = sanitizedStr.split('').reverse().join('');
      return sanitizedStr === reversedStr;
    }
  

    function showResultAnimation(isPalindrome) {
        var bodyElement = document.querySelector('body');
        if (isPalindrome) {
          bodyElement.classList.add('fade');
          setTimeout(function() {
            bodyElement.classList.remove('fade');
          }, 2000);
        } else {
          bodyElement.classList.add('shake');
          setTimeout(function() {
            bodyElement.classList.remove('shake');
          }, 500);
        }
      }
  });
  