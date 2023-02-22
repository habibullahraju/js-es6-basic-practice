/*
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
*/

const myFunction = (num1,num2)=>{
    const addition1 = num1 + 2;
    const addition2 = num2 + 2;
    return addition1 * addition2;
}

const result = myFunction(8, 8);
console.log(result);