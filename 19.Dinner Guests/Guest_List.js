var Guest_List = ['salar', 'musa', 'mudasir', 'ali'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. '  + Guest_List[i] +',\n\nit is our pleasure to invite you for my heart.\n\nThank you|\n\n')
// }
var absent_Guest = 'ali';
var new_Guest = 'furquan';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you|\n\n')
// }
// console.log(`Mr. ${absent_Guest} is not coming to party.`);
// console.log('Good news! We find a big table so we are inviting 3 more guests.')
//array main 3 guest add kiye hain.
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0, 'maryam nawaz');
Guest_List.push('asif ali zardari');
//yahan per mene 6 guest ke array ko print karwaya hai.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you|\n\n')
// }
//sorry message to guest for not inviting.
// console.log('\nsorry we can not arrange big tale, Only Two peoples will be invited.');
//yahan per mene guest remove kiye hain.
while (Guest_List.length > 2) {
    var remove_guest = Guest_List.pop();
    // console.log(`sorry Mr. ${remove_guest}, you are not invited for Dinner.`);
}
//hamare bache howe 2 invited guest.
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nyou are still invited.\n\nThank you|\n\n')
// }
//mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
//Exercise.19
//print a message indicating the number of people you are inviting to dinner.
console.log("Total number of guest are: ".concat(Guest_List.length));
