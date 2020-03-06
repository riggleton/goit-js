let country;
let credits = 0;

let userCountry = prompt('Please enter your country: ');

if (userCountry === null) {
    alert('Canceled.');
} else if (!userCountry) {
    alert('You have not entered anything.');
} else {
    userCountry = userCountry.toLowerCase();
    userCountry = userCountry.charAt(0).toUpperCase() + userCountry.slice(1);
    switch (userCountry) {
        case 'China': 
            credits = 100;
            break;
        case 'Chile':
            credits = 250;
            break;
        case 'Australia':
            credits = 170;
            break;
        case 'India':
            credits = 80;
            break;
        case 'Jamaica':
            credits = 120;
            break;
    }
    credits === 0 ? alert('Delivery is not available in your country.') : alert(`Delivery to ${userCountry} costs ${credits} credits.`);
}