// let data = {
//   Sophia: {
//     id: 33,
//     study: [
//       {
//         primary: [
//           {school_name: "ABC primary school"},
//           {location: "Peters burg"},
//         ],
//       },
//       {
//         secondary: [
//           {school_name: "ABC secondary school"},

//           {location: "St Lorence"},
//         ],
//       },
//     ],
//   },
// };
// console.log(data.Sophia.study[1]);
// let data = [
//   {
//     pHeroCourses: {
//       "course-x": "web development",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-y": "phitron",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-z": "acc",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-xyz": "level-2",
//     },
//     locationField: {
//       "en-US": {
//         lat: 19.28563,
//         lon: 72.8691,
//       },
//     },
//   },
// ];
// console.log(data[2].pHeroCourses['course-z']);
// console.log(data[3].pHeroCourses['course-xyz']);
// let instructor = {
//   name: "Jhankar Mahbub",
//   entrepreneur: true,
//   additionalData: {
//     writer: true,
//     favoriteHobbies: ["travelling", "Coding"],
//     books: ["programming er bolod to bos", "programming er coddogosti"],
//     moreDetails: {
//       favoriteBasketballTeam: "XYZ",
//       isYoungest: true,
//       hometown: {
//         city: "ABC",
//         state: "VW",
//       },
//       countriesLivedIn: ["Bangladesh", "New York"],
//     },
//   },
// };
// console.log(instructor.additionalData['books']);
// console.log(instructor['additionalData'].moreDetails.hometown['state']);
// console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);
// const studentData = [
//   {
//     class: 10,
//     details: [
//       {
//         studentId: "1",
//         gradingDetails: [{grade: "A"}],
//       },
//       {
//         studentId: "2",
//         gradingDetails: [{grade: "B"}],
//       },
//     ],
//   },
//   {
//     class: 11,
//     details: [
//       {
//         studentId: 3,
//         gradingDetails: [{grade: "B"}],
//       },
//       {
//         studentId: 4,
//         gradingDetails: [{grade: "D"}],
//       },
//     ],
//   },
// ];
// console.log(studentData[0].details[0].gradingDetails[0].grade);
// console.log(studentData[1].details[0].gradingDetails[0].grade);
let data = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },

      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {name: "gobluder adda", category: "ABC", price: "40$"},
      bookCategory: "Beginner",
    },
  ],
};
console.log(data.data[0].bookDetails.name);
console.log(data.data[1].bookCategory);