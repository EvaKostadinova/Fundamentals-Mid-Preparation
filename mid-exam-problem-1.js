function experienceGaining(arr) {
    let experienceNeededToUnlock = arr[0];
    let battlesCount = arr[1];
    let totalExp = 0;

    for(let i = 0; i < battlesCount; i++){
        let experience = arr[i + 2];
        
        let numberOfBattle = i + 1;
        
        if(numberOfBattle % 3 === 0){
            experience *= 1.15;
        }

        if(numberOfBattle % 5 === 0){
            experience *= 0.90;
        }

        if(numberOfBattle % 15 === 0){
            experience *= 1.05;
        }

        totalExp += experience;

        if(totalExp >= experienceNeededToUnlock){
            console.log(`Player successfully collected his needed experience for ${numberOfBattle} battles.`);
            return;
        } 
        
    } 
    
    let difference = experienceNeededToUnlock - totalExp;
    console.log(`Player was not able to collect the needed experience, ${difference.toFixed(2)} more needed.`);

}

experienceGaining([400,
5,
50,
100,
200,
100,
20]);
