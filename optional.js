/*
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
*/
const person = {
    name: 'habibullah',
    son:{
        name: 'sonName',
        age: 7,
        sonWife:{
            name:'labanno',
            age: 4,
            favoriteNumbers: [12,34,53,64]
        }
    }
}
console.log(person.son.sonWife.favoriteNumbers);