/*
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
*/

const arr = [
    {product:'laptop',price: 400},
    {product:'mobile',price: 2500},
    {product:'headphone',price: 500},
    {product:'phoce-case',price: 700},

];
const find = arr.find(arr => arr.price === 500,0,);
console.log(find);