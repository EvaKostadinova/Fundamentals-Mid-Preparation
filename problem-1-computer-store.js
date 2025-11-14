function computerStore(arr) {
    let index = 0;

    let command = arr[index];
    index++;

    let total = 0;

    while(command !== 'special' && command !== 'regular'){
        let partsPrice = Number(command);

        if(partsPrice < 0){
            console.log("Invalid price!");
            command = arr[index];
            index++;
            continue;
        } 

        total += partsPrice;
        command = arr[index];
        index++;

    }

    if(total === 0){
            console.log("Invalid order!");
        } else {
            let totalPrice = total * 1.2;
            let taxes = totalPrice - total;
            if(command === 'special'){
                totalPrice *= 0.90;
            }
            console.log("Congratulations you've just bought a new computer!");
            console.log(`Price without taxes: ${total.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log("-----------");
            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
            
        }


}

computerStore([

'1050',

'200',

'450',

'2',

'18.50',

'16.86',

'special'

]);