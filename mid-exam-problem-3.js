function phoneShop(arr) {
    let phones = arr[0].split(', ');

    let index = 1;
    let command = arr[index];
    
    while(command !== 'End'){

        let tokens = command.split(' - ');
        let commandToken = tokens[0];
        let phoneToken = tokens[1];


        if(commandToken === 'Add'){

            if(!phones.includes(phoneToken)){
                phones.push(phoneToken)
            }


        } else if(commandToken === 'Remove'){

            phones = phones.filter(x => x !== phoneToken); 
            // върни всички телефони, които не са равни на този, който искам да премахна


        } else if(commandToken === 'Bonus phone'){

            let [oldPhone, newPhone] = phoneToken.split(':');
            let oldPhoneIndex = phones.indexOf(oldPhone);
            // Ако indexOf не го намери, връща -1

            if(oldPhoneIndex !== -1){  
                // Провери дали го има

                phones.splice(oldPhoneIndex +1, 0, newPhone)
            }


        } else if(commandToken === 'Last'){

            if(phones.includes(phoneToken)){
                phones = phones.filter(x => x !== phoneToken); 
                // filter() минава през всеки елемент x и запазва само тези, които не са равни на phoneToken.

                phones.push(phoneToken);
            }

        }

        index++;
        command = arr[index];

    }

    console.log(phones.join(', '));
    

}

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"]);
