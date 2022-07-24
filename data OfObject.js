const member={
  age:30,
  working:false,
  country:"Egypt",
  hobbies:["Reading","Swimming","Programming"],
};

// Write Your Destructuring Assignment Here
let {age: g, working : w , country : c , hobbies : [h1,,h3]} = member;

console.log(`My Age Is ${g} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working
console.log(`ILive in ${c}`);
//ILive in Egypt
console.log(`My Hobbies:${h1} And ${h3}`);
// My Hobbies:Reading And Programming