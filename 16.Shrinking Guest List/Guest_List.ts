let Guest_List :string[] = ['salar','musa','mudasir','ali'];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. '  + Guest_List[i] +',\n\nit is our pleasure to invite you for my heart.\n\nThank you|\n\n')
}
let absent_Guest :string = 'ali';
let new_Guest :string = 'furquan';
Guest_List[0] = new_Guest;

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you|\n\n')
}
console.log(`Mr. ${absent_Guest} is not coming to party.`);
console.log('Good news! We find a big table so we are inviting 3 more guests.')
Guest_List.unshift('sir zia khan');
Guest_List.splice(2, 0 , 'maryam nawaz');
Guest_List.push('asif ali zardari');

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank you|\n\n')
}

console.log('\nsorry we can not arrange big tale, Only Two peoples will be invited.');

while(Guest_List.length > 2){
    let remove_guest = Guest_List.pop();
    console.log(`sorry Mr. ${remove_guest}, you are not invited for Dinner.`);
}

for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nyou are still invited.\n\nThank you|\n\n')
}

Guest_List.splice(0, 2);
console.log(Guest_List)