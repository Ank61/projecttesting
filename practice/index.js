function Hashtable(size){
this.size = size;
this.key = this.initalArray(size);
this.value = this.initalArray(size);
this.limit =0;
}
HashTable.prototype.initalArray = function(size){
    var array = [];
    for(var i =0 ; i<size ; i++){
        array.push(null)
    }return array
} 
Hashtable.prototype.put= function (key,value){
    if(this.limit <= this.size) throw 'Hastable is full'
var hashedIndex = this.hash(key)
//linear probing 
while(this.key[hashedIndex]!=null){
    hashedIndex = hashedIndex% this.size
    hashedIndex++;
}
this.key[hashedIndex] =key;
this.value[hashedIndex] = value;
this.limit++
console.log("this si where key is stored",this.key[hashedIndex])
}
var exampletable = new Hashtable(13);
exampletable.put(7, "hi");





































// function Hashtable(size) {
//     this.size = size;
//     this.key = this.initArray(size);
//     this.value = this.initArray(size);
//     this.limit = 0;
// }
// Hashtable.prototype.put = function (key, value) {
//     if (this.limit >= this.size) throw 'hash table is full'
//     var hashedIndex = this.hash(key);

//     // Linear probing
//     while (this.keys[hashedIndex] != null) {
//         hashedIndex++;
//         hashedIndex = hashedIndex % this.size; 
//     }
//     this.keys[hashedIndex] = key;
//     this.values[hashedIndex] = value;
//     this.limit++;
// }
// Hashtable.prototype.get = function (key) {
//     var hashedIndex = this.hash(key);
//     while (this.keys[hashedIndex] != key) {
//         hashedIndex++;
//         hashedIndex = hashedIndex % this.size;
//     }
//     return this.values[hashedIndex];
// }
// Hashtable.prototype.hash = function (key) {
//     // Check if int
//     if (!Number.isInteger(key)) throw 'must be int';
//     return key % this.size;
// }
// Hashtable.prototype.initArray = function (size) {
//     var array = [];
//     for (var i = 0; i < size; i++) {
//         array.push(null);
//     }
//     return array;
// }

// var exampletable = new Hashtable(13);
// exampletable.put(7, "hi");
// exampletable.put(20, "hello");
// exampletable.put(33, "sunny");
// exampletable.put(46, "weather");
// exampletable.put(59, "wow");
// exampletable.put(72, "forty");
// exampletable.put(85, "happy");
























// function quickSort(array) {
//   if (array.length < 2) {   /////base case
//     return array;
//   }
//   const pivot = array[array.length - 1];
//   let leftArray = [];
//   let rightArray = [];
//   for (var i = 0; i < array.length-1; i++) { ///-1
//     if(array[i]<pivot){
//       leftArray.push(array[i])
//     }
//     else {
//         rightArray.push(array[i])   ///shift no
//     }
//   }
//   return [...quickSort(leftArray),pivot,...quickSort(rightArray)]
// }
// const result = quickSort([1, 4, 2, 5, 3, 8]);
// console.log(result);






















// function swap(array,indexOf,indexAt){
//     const temp = array[indexOf]
//     array[indexOf] = array[indexAt]
//     array[indexAt]= temp
// }
// function selectionSort(array){
// for(var i=0;i<array.length; i++){
//     var min =i;
//     for(var j=i+1;j<array.length ; j++){
//         if(array[j]<array[min]){
//             min = j
//         }
//     }
//     if(i!=min){
//         swap(array,i,min)
//     }
// }
// return array
// }
// const result = selectionSort([1,3,2,6,4,8])
// console.log(result)

// function swap(array, indexOf, indexAt) {
//     var temp = array(indexOf)
//     array(indexOf) = array(indexAt)
//     array(indexAt) = temp
// }
// function InsertionSort(array) {
//     for (var i = 1; i < array.length; i++) {
//         var current = array[i]
//         var j = i - 1;
//         while (j >= 0 && array[j] > array[j + 1]) {
//             array[j + 1] = array[j]
//             j--
//         }
//         array[j + 1] = current
//     }
//     return array
// }

// const result = InsertionSort([1,4,3,6,5,7])
// console.log(result)

// function mergeSort(array){
//     if(array.length<2){
//         return array
//     }
// const mid = Math.floor(array.length/2)
// var leftArray = array.slice(0,mid)
// var rightArray = array.slice(mid)
// return merge(mergeSort(leftArray),mergeSort(rightArray))
// }
// function merge(leftArray,rightArray){
// const sortedArray = []
// while(leftArray.length && rightArray.length){
//     if(leftArray[0] <= rightArray[0]){
//         sortedArray.push(leftArray.shift())
//     }
//     else{
//         sortedArray.push(rightArray.shift())
//     }
// }
// return [ ...sortedArray, ...leftArray, ...rightArray]
// }
// const result = mergeSort([1,3,2,34,21])
// console.log(result)
