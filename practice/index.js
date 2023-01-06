// function test(...args){
//     console.log("this spread0",sum(...args))
// return [...args]
// }
// console.log(test([1,2,3,4,5],[3,4,5,6,7]))

// const student= {
//     name: "ankit",
//     Designation : "JSE",
//     Level:"Entry"
// }
// // let studentOne= {...student,
// // name:"Amit"
// // }
// const {name, ...rest} = student

// console.log(name,rest)



// setImmediate((arg) => {
//   console.log(`executing immediate: ${arg}`);
// }, 'so immediate');
// console.log('before immediate');
// console.log('after immediate');

const htttp = require('http');
const { hostname } = require('os');

const host = '127.0.0.1';
const port = 3000;

const server= htttp.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
});

server.listen(port,host,()=>{
    console.log(`server running on http://${host}:${port}/`)
})













// class Node {
//     constructor(value){
//         this.value =value;
//         this.left =null;
//         this.right = null;
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }
//     isEmpty(){
//         return this.root===null;
//     }
//     insert(value){
//         const newNode =new Node(value);
//         if(this.isEmpty()){
//             this.root=newNode;
//         }
//         else{
//             this.insertion(this.root,newNode);
//         }
//     }
//     insertion(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left===null){
//                 root.left = newNode;
//             }
//             else{
//                 this.insertion(root.left,newNode)
//             }
//         }
//         else{
//             if(root.right===null){
//                 root.right = newNode;
//             }
//             else{
//                 this.insertion(root.right,newNode)
//             }
//         }
//     }
//     search(root ,value){
//         if(!root){
//             return false;
//         }
//         if(root.value===value){
//             return true;
//         }
//         else if(value>root.value){
//             return this.search(root.right,value)
//         }
//         else{
//             return this.search( root.right , value)
//         }
//     }
//     preOrder(root){
//         if(root){
//            console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right); 
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }
//     min(root){
//         if(!root.left){
//             return console.log(root.value)
//         }
//         else{
//             return this.min(root.left)

//         }
//     }
//     max(root){
//         if(!root.right){
//             return console.log(root.value)
//         }
//         else{
//             return this.max(root.right)
//         }
//     }
//     height(node){
//         if(!node){
//             return 0;
//         }
//         else{
//             const leftheight = this.height(node.left);
//             // console.log("This is 1 left root", node.left)
//             const rightHeight = this.height(node.right);
//             // console.log("This is 1 rrrgiht root", node.right)
//             // console.log(leftheight,rightHeight)
//             return Math.max(leftheight,rightHeight) +1;
//         }
//     }
//     levelOrder(){
//         const array = [];
//         array.push(this.root)
//         // console.log("This is arry" ,this.root, array.length)
//         while(array.length){
//             let curr = array.shift();
//             console.log(curr.value)
//             if(curr.left){
//                 array.push(curr.left)
//                 console.log("Next Layer")
//             }
//             if(curr.right){
//                 array.push(curr.right)
//                 console.log("Next Layer")
//             }
//         }
//     }
//     printLevel(node,level){
//         if(!node){
//             return 0;
//         }
//         if(level===1){
//             return console.log(`${node.value} `);
//         }
//         else if(level>1){
//             this.printLevel(node.left, level-1);
//             this.printLevel(node.right, level-1);
//         }
//     }
//     isBST(node,min,max){
//         if(!node){
//             return true;
//         }
//         if(node.value<min || node.value>max){
//             return false;
//         }
//         else{
//             return this.isBST(node.left,min,node.value) && this.isBST(node.right,node.value,max)
//         }
//     }
// }

// const bst = new BinarySearchTree()
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(16);
// bst.insert(20);
// console.log("Is bst empty? =>", bst.isEmpty())
// console.log("Does BST have? =>", bst.search(bst.root , 100))
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root);
// // bst.min(bst.root);
// // bst.max(bst.root);
// // console.log(bst.height(bst.root));
// bst.levelOrder(bst.root);
// // bst.printLevel(bst.root,4)
// console.log("This is the result ",bst.isBST(bst.root,bst.min,bst.max))






























// function Hashtable(size){
// this.size = size;
// this.key = this.initalArray(size);
// this.value = this.initalArray(size);
// this.limit =0;
// }
// HashTable.prototype.initalArray = function(size){
//     var array = [];
//     for(var i =0 ; i<size ; i++){
//         array.push(null)
//     }return array
// } 
// Hashtable.prototype.put= function (key,value){
//     if(this.limit <= this.size) throw 'Hastable is full'
// var hashedIndex = this.hash(key)
// //linear probing 
// while(this.key[hashedIndex]!=null){
//     hashedIndex = hashedIndex% this.size
//     hashedIndex++;
// }
// this.key[hashedIndex] =key;
// this.value[hashedIndex] = value;
// this.limit++
// console.log("this si where key is stored",this.key[hashedIndex])
// }
// var exampletable = new Hashtable(13);
// exampletable.put(7, "hi");





































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
