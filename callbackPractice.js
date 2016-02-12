/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
var first = function(arr, callback) {
    callback(arr[0]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
var last = function(arr, callback) {
    callback(arr[arr.length-1]);
  };
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
var multiply = function(x,y, callback) {
    callback(x*y);
};

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  var contains = function(arr, name, callback) {
      for(var i=0; i < arr.length; i++){
          if(arr[i] === name){
            callback (true);
          }else{
            callback (false);
          }
        }
    };

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
  var uniq = function(array, callback) {
    var newArray = [];
    for (var i=0; i<array.length; i++){
      if(newArray.indexOf(array[i]) === -1){
        newArray.push(array[i]);
      }
    }callback (newArray);
  };

  // var uniq = function(array, callback) {
//   var newArray = [];
//   for(var i=0; i<array.length; i++) {
//     for(var x=i+1; x<array.length; x++) {
//       if (array[i] === array[x]){
//         x = ++i;
//       }
//     }newArray.push(array[i]);
//   }callback (newArray);
// };

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// uniq(names, function(uniqArr){
//   console.log('The new names array with all the duplicate items removed is ', uniqArr);
// });

// var uniq = function(array, callback) {
//   array.sort();
//   for(var i=array.length-1; i>=1; i--) {
//       if(array[i] === array[i-1]){
//         array.splice(i,1);
//       }
//   }callback (array);
// };

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

var each = function(array, callback) {
  for (var i=0; i<array.length; i++){
    callback(array[i], i);
  }
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById



var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

var getUserById = function(arr, id, callback) {
    for( var i = 0; i < arr.length; i++ ) {
        var obj = arr[i];
            if(obj.id === '16t'){
                callback(obj);
        }
    }
 };

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
