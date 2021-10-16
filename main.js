                    //Topic: Monster Apocalypse

//events
let event1;
let event2;
let event3;

//main object
const variables = {
    monster : ["zombie", "alien", "vampire", "demon", "mutant", "minecraft bee" /*add more...*/],
    target : ["food", "materials", "weapons", "survivors", "clothing", "tools" /*add more...*/],
    typeOfMonster : ["hideous", "bloodthirsty", "insatiable", "voracious", "shapeless", "brutish"],
    bodyPart : ["head", "neck", "left arm", "right arm", "torso", "left leg", "right leg", "left hand", "right hand"],
    weapon : ["baseball bat", "sharp machete", "pistol", "golf club", "crowbar", "pool cue", "sledgehammer", "snow shovel", "hand axe", "katana"],
    illness : {
        break() {
            const part = ["left arm", "right arm", "right leg", "left leg"];
            //returns a broken boddy part
        },
        dislocate() {
            const part = ["left shoulder", "right shoulder", "left ankle", "right ankle"];
            //returns a dislocated body part
        }
    }, 
    building : ["house", "police station", "hospital", "school", "fierhouse", "store"],
    entity() {
        //returns a tring of typeOfMonster + monster. 
    }
}

/*
let i = 0;
while (i < 20){
    console.log(variables.monster[Math.floor(Math.random() * variables.monster.length)]);
    i++;
}
*/

// functions
function articleSelector(word) {
    const vowels = ["a", "e", "i", "o", "u"];       //works perfectely 
    if (vowels.includes(word.charAt(0))) {
        console.log(`an ${word}`);
    } else {
        console.log(`a ${word}`);
    }
}
const randomItem = (object, key) => {
    let thisObject = object;                        // error......
    console.log(thisObject.key)
    return thisObject.key[Math.floor(Math.random() * thisObject.key.length)];
};

const sentenceCreator = () => {
    event1 = `You are into ${articleSelector(randomItem(monster))} apocalypse. You decide to enter a random ${randomItem(building)} looking for ${randomItem(supplies)}.`;
    event2 = `All the sudden ${articleSelector(randomItem(typeOfMonster))} is attacking you! It tries to bite your ${randomItem(bodyPart)}, but you defeated it with your ${randomItem(weapon)}.`;
    event3 = `Running from ${articleSelector(entity)} you accidentally ${randomItem(illness)}, but somehow you managed to escape!`; 
}

articleSelector(randomItem(variables, "monster"));