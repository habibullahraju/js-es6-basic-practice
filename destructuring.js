/*
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।
*/
const person = {
    name: 'habibullah',
    age:  20,
    country:'bangladesh',
    isSingle: true,
}
const {name,age,isSingle} =  person;
console.log(name);