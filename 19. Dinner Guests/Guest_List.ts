let Guest_List :string[] = ['ahmed' , 'arham', 'ahsan'];
// for (let i=0 ; i<Guest_List.length; i++ ){
//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You ! ')
// }
let absent_Guest :string = 'ahmed';
let new_Guest :string = 'abrar';
Guest_List [0] = new_Guest ;
// for (let i=0 ; i<Guest_List.length; i++ ){
//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You !\n\n ')
// }
// console.log (`Mr. ${absent_Guest}  is not coming to the party`);
// console.log('Good New ! we found Big Table so we are inviting 3 more guests.')

Guest_List.unshift('abrahim');
Guest_List.splice(2,0 ,'Iman Ali');
Guest_List.push ('Kubra khan');

// for (let i=0 ; i<Guest_List.length; i++ ){

//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You !\n\n ')
// }
// console.log ('\n Sorry we can not arrange big table , only two people will be invited.');

while (Guest_List.length > 2 ){ 
    let remove_Guest = Guest_List.pop ();
    // console.log (`Sorry Mr. ${remove_Guest}, you are not invited for Dinner. `);
}

// for (let i=0 ; i<Guest_List.length; i++ ){

//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nyou are still invited. \n\nThank You !\n\n ')
// }

Guest_List.splice (0 , 2);
console.log(Guest_List);

// Exercise no 19

// print a message indicating the number of people you are inviting to dinner.

console.log(`Total Number Of Guests are : ${Guest_List.length}`);


