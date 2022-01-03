//sample collection of items in string format
let items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item7",
  "item6",
  "item10",
];

//use reduce to get the total tally of type of items
let tally = items.reduce((acc, item) => {
  if (acc[item]) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});

console.log(tally);
//set Quokka to run on the file to see the results
