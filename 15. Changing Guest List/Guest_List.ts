let Guest_List :string[] = ['ahmed' , 'arham', 'ahsan'];

for (let i=0 ; i<Guest_List.length; i++ ){

    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You ! ')
}


let absent_Guest :string = 'ahmed';

let new_Guest :string = 'abrar';

Guest_List [0] = new_Guest ;

for (let i=0 ; i<Guest_List.length; i++ ){

    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is pleasure to nvite you in our party. \n\nThank You !\n\n ')
}

console.log (`Mr. ${absent_Guest}  is not coming to the party`);
