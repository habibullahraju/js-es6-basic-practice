/*
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/
const myFunction = (num1, num2, num3 = 7) =>{
    return num1 + num2 + num3;
}

const result = myFunction(10,10, 10);
console.log(result);

function myFunc(num1, num2, num3 = 7) {
    return num1 + num2 + num3;
}
console.log(myFunc(20,20));