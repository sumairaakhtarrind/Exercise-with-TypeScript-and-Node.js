"use strict";
let Guest_List = ['ahmed', 'arham', 'ahsan'];
// for (let i=0 ; i<Guest_List.length; i++ ){
//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You ! ')
// }
let absent_Guest = 'ahmed';
let new_Guest = 'abrar';
Guest_List[0] = new_Guest;
// for (let i=0 ; i<Guest_List.length; i++ ){
//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You !\n\n ')
// }
console.log(`Mr. ${absent_Guest}  is not coming to the party`);
console.log('Good New ! we found Big Table so we are inviting 3 more guests.');

// i added in array 3 guest
Guest_List.unshift('abrahim');
Guest_List.splice(2, 0, 'Iman Ali');
Guest_List.push('Kubra khan');

// i print 6 guest array here 
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You !\n\n ');
}
// sorry message to guest for not inviting
console.log('\n Sorry we can not arrange big table , only two people will be invited.');
// guest removed
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for Dinner. `);
}
// remainig two guests
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ', \n\nyou are still invited. \n\nThank You !\n\n ');
}
// through array i removed the all guests
Guest_List.splice(0, 2);
console.log(Guest_List);
