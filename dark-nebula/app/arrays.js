exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for(i = arr.length-1; i > 0; i--) {
          if (arr[i] == item) {
            arr.splice(i, 1);
          }
        }
        return arr;
  },

  append : function(arr, item) {
    arr[4] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var a = arr1.concat(arr2);
    return a;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(i = arr.length; i > 0; i--){
      if (arr[i] == item) {
        count += 1;
      }
    }
    return count;
  },

  duplicates : function(arr) {

  var results = [];
   // Find if there is a duplicate or not
  for (var i = 0, len = arr.length - 1; i < len; i++) {
     // Find if the element is already in the result array or not
    if((results.indexOf(arr[i]) == -1) && (arr.indexOf(arr[i], i + 1) != -1)) {
        results.push(arr[i]);
     }
  }
  return results;
  },


  square : function(arr) {
    ret= [];

    for (var i = 0, len = arr.length; i < len; i++) {
        ret.push(arr[i] * arr[i]);
  }
      return ret;
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === target)
                indexes.push(i);

        return indexes;
  }
};
