function taxCalculator(arr) {

    let cars = arr[0].split('>>');
    
    let totalTax = 0;

    for(i = 0; i < cars.length; i++){
        let [carType, yearsOfTax, kilometersTraveled] = cars[i].split(' ');
        yearsOfTax = Number(yearsOfTax);
        kilometersTraveled = Number(kilometersTraveled);

        let tax = 0;

        if(carType === 'family'){

            tax = Math.floor(kilometersTraveled / 3000) * 12 + (50 - yearsOfTax * 5);

        } else if(carType === 'heavyDuty'){

            tax = Math.floor(kilometersTraveled / 9000) * 14 + (80 - yearsOfTax * 8);

        } else if(carType === 'sports'){

            tax = Math.floor(kilometersTraveled / 2000) * 18 + (100 - yearsOfTax * 9);

        } else {
            console.log("Invalid car type.");
            continue;
        }

        console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);

        totalTax += tax;
        
    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
    

}

taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);