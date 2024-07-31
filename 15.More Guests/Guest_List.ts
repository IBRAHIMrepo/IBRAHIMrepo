let Guest_List :string[] = ['salar','musa','mudasir','ali'];
//for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. '  + Guest_List[i] +',\n\nit is our pleasure to invite you for my heart.\n\nThank you|\n\n')
//} 

let absent_Guest :string = 'ali';

let new_Guest :string = 'furquan';

Guest_List[0] = new_Guest;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you for my heart.\n\nThank you|\n\n')
// }

console.log(`Mr. ${absent_Guest} is not coming to party.`);

console.log('Good news! We find a big table so we are inviting 3 more guests.')

Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0 , 'maryam nawaz');
Guest_List.push('asif ali zardari');

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you for my heart.\n\nThank you|\n\n')
}
