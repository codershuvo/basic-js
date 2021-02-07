//  https://github.com/codershuvo/basic-js


function kilometerToMeter (kilometer) {
    if (kilometer < 0) {  // decrease (-) value 
        return "Eror !";    
    }
    else {
        var meter = kilometer * 1000;  // 1 kilometer = 1000 meter
        return meter;
    }
}





function budgetCalculator (watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) { // decrease (-) value 
        return "Eror !";  
    }
    else {
        return (watch * 50) + (phone * 100) + (laptop * 500);   // watch price $50 and phone price $100 and laptop price $500
    }
}






function hotelCost (day) {
    var cost = 0; 
    if (day < 0) {  // decrease (-) value     
        return "Eror !"; 
    } 
    else if (day <= 10) {  
        cost = day * 100;  // first 10 day cost 100
    }
    else if (day <= 20) {
        var firstTimeCost = 10 * 100; // first 10 day
        var remaining = day - 10;  // total day - first 10 day
        var secondTimeCost = remaining * 80;   // second 10 day cost 80
        cost = firstTimeCost + secondTimeCost;  
    }
    else {
        var firstTimeCost = 10 * 100;  //first 10 day
        var secondTimeCost = 10 * 80;  // second 10 day
        var remaining = day - 20;  // total day - first 20 day
        var thirdTimeCost = remaining * 50;  // more then 20 day cost 50
        cost = firstTimeCost + secondTimeCost + thirdTimeCost; 
    }
    return cost;
}






function megaFriend (array) {
    var lgth = 0; 
    var mega = ""; 
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > lgth) {  // array index er length jodi 0 er theke boro hoi
            var lgth = array[i].length; // array element length
            mega = array[i];  
        }
    }
    return mega;
}






