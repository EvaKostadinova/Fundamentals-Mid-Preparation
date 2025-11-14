function treasureHunt(arr) {
    let index = 0;

    let state = arr[index].split('|');
    index++;

    let command = arr[index];
    index++;

    while(command !== 'Yohoho!'){
        let el = command.split(' ');

        let action = el[0];

        switch(action) {
            case "Loot":
                for(let i = 1; i < el.length; i++){
                    let currentElement = el[i];
                    if(!state.includes(currentElement)){
                        state.unshift(currentElement);
                    }
                }

                break;
            case "Drop":
                let position = Number(el[1]);
                if(position < 0 || position > state.length){
                    command = arr[index];
                    index++;
                    continue;
                }

                let element = state.splice(position, 1);
                state.push(element);

                break;
            case "Steal":
                let count = Number(el[1]);
                let items = state.splice(-count);
                console.log(items.join(', '));
                break;
        }
        command = arr[index];
        index++;
    }

    if(state.length === 0){
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        for(let item of state){
            sum += item.length;
        }

        let avg = sum / state.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
        
    }

}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 3",

"Yohoho!"]);