function manOWar(arr) {
    let pirateShip = arr[0].split('>').map(Number);
    let warShip = arr[1].split('>').map(Number);
    let maxHealth = Number(arr[2]);

    for (let i = 3; i < arr.length; i++) {
        let line = arr[i];

        if (line === 'Retire') break;

        let [command, ...params] = line.split(' ');

        if (command === 'Fire') {
            let [index, damage] = params.map(Number);

            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;

                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command === 'Defend') {
            let [startIndex, endIndex, damage] = params.map(Number);

            if (
                startIndex >= 0 &&
                endIndex < pirateShip.length &&
                startIndex <= endIndex
            ) {
                for (let j = startIndex; j <= endIndex; j++) {
                    pirateShip[j] -= damage;

                    if (pirateShip[j] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            let [index, health] = params.map(Number);

            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] = Math.min(pirateShip[index] + health, maxHealth);
            }
        } else if (command === 'Status') {
            let count = pirateShip.filter(x => x < maxHealth * 0.2).length;
            console.log(`${count} sections need repair.`);
        }
    }

    let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    let warShipSum = warShip.reduce((a, b) => a + b, 0);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}

manOWar((["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]));