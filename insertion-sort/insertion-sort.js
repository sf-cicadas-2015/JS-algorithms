// var randomArrayOfNumbers = [6, 5, 3, 1, 8, 7, 2, 4];
var randomArrayOfNumbers = [25, 66, 3, 47, 36, 52, 97];
// var sortedArray = [];

function insertionSort (array){
  this.arrayToSort = array;
  this.ele1 = array[0];
  this.ele2 = array[1];
  this.arraySorted = [];

};

var checkArray = new insertionSort(randomArrayOfNumbers)

insertionSort.prototype.setInitalValuesOfSortedArray = function(){
    if (this.ele1 > this.ele2){
    this.arraySorted.push(this.ele2);
    this.arraySorted.push(this.ele1);
  } else {
    this.arraySorted.push(this.ele1);
    this.arraySorted.push(this.ele2);
  }
};

insertionSort.prototype.map = function(fn) {
  
  this.setInitalValuesOfSortedArray()

  for (var i = 2; i < this.arrayToSort.length; i++) {

    var localElement = this.arrayToSort[i]

    if (localElement < this.arraySorted[0]) {
      this.arraySorted.unshift(localElement)
    } else if (localElement > this.arraySorted[i-1]){
        this.arraySorted.push(localElement)
    } else {
      
      for (var j = 0; j < this.arraySorted.length; j++){
        if ( localElement < this.arraySorted[j]){
          this.arraySorted.splice(j, 0, localElement)
          break;
        }   
      }
    };
  };
      return this.arraySorted
};

console.log(checkArray.map())



