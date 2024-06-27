"use strict";
let Guest_List = ['ahmed', 'arham', 'ahsan'];
// for (let i=0 ; i<Guest_List.length; i++ ){
//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You ! ')
// }
let absent_Guest = 'ahmed';
let new_Guest = 'abrar';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You !\n\n ');
}
console.log(`Mr. ${absent_Guest}  is not coming to the party`);
console.log('Good New ! we found Big Table so we are inviting 3 more guests.');
Guest_List.unshift('abrahim');
Guest_List.splice(2, 0, 'Iman Ali');
Guest_List.push('Kubra khan');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You !\n\n ');
}
