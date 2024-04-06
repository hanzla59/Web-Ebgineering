// // const hani = 0;
// // console.log(`hanzla has ${hani==0 ? "no": hani} friends`);

// const person = {
//     name: "Hanzla",
//     age: 22,
//     gender: "male",
//     nationality: "Pakistani"
// }
// const obj = person;
// obj.name = "hani";
// console.log(person);
// console.log(obj);
// const{name,age,...rest} = obj;
// console.log(rest);

console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 5 seconds.');
}, 5000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');


function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    resolve(data);
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    
    });
    }
    console.log(mydata);
    console.log(`I am after promis`);
    
    // Consuming the Promise
    getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
    const mydata = getData();
    console.log(`hello`);



