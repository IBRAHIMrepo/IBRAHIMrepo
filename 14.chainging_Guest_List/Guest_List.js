var Guest_List = ['salar', 'musa', 'mudasir', 'ali'];
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Mr.'   + Guest_List[i] +',\n\nit is our pleasure to invite you for my heart.\n\nThank you|\n\n')
//} 
var absent_Guest = 'ali';
var new_Guest = 'furquan';
Guest_List[0] = new_Guest[1];
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you for my heart.\n\nThank you|\n\n');
}
console.log("Mr.ali ".concat(absent_Guest, " is not coming to party."));
