exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
    indexOf : function(arr, item) {
   return (arr.indexOf(item));
  },

  sum : function(arr) {
    var sum = 0;
        for (var i = 0, len = arr.length; i < len; i++) {
          sum += arr[i];
        }
        return sum;
  },

  remove : function(arr, item) {
    var ret = [];
       for (var i = 0, len = arr.length; i < len; i++) {
         if (arr[i] !== item) {
           ret.push(arr[i]);
         }
         return ret;
       }
  },

  reverseString : function(str) {
    return str.split('').reverse().join('');
      },
  },

  longestSubString : function(str) {
    var strSplit = str.split(' ');
        var longestWord= 0;
        for (var i = 0; i < strSplit.length; i++){
          if (strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
            var strSplits = strSplit[i];
          }
        }
        return strSplits;
  },

  letterMoveForward : function(str) {
    var newStr = str.replace(/[a-zA-Z]/g, function(char) {
           switch (char) {
             case 'z': return 'a';
             case 'Z': return 'A';
             default: return String.fromCharCode(char.charCodeAt(0)+1);
           }
         });
         return newStr;
  },

  capitalizeWords : function(str) {
    words = str.toLowerCase().split(' ');

         for(var i = 0; i < words.length; i++) {
    	      var letters = words[i].split('');
    	      letters[0] = letters[0].toUpperCase();
    	      words[i] = letters.join('');
    	      }
    	      return words.join(' ');
  }
};
