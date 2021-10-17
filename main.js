                    //Topic: Monster Apocalypse

//events
let event1;
let event2;
let event3;

/*
const variables = {

    monster : ["zombie", "alien", "vampire", "demon", "mutant", "minecraft bee" ],
    target : ["food", "materials", "weapons", "survivors", "clothing", "tools" ],
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
        //returns a string of typeOfMonster + monster.
        return `${this.random(this.typeOfMonster)} ${this.random(this.typeOfMonster)}`;
    },
 
}
*/






        //objects
//monster
const monst = {
    type : ["zombie", "alien", "vampire", "demon", "mutant", "minecraft bee" /*add more...*/],
    monstAdjective : ["hideous", "bloodthirsty", "insatiable", "voracious", "shapeless", "brutish"],
    get monstGenerator(){
        return `${this.monstAdjective[Math.floor(Math.random() * this.monstAdjective.length)]} ${this.type[Math.floor(Math.random() * this.type.length)]}`;
    }
}
//objects
const objects = {
    target : ["food", "materials", "weapons", "survivors", "clothing", "tools" /*add more...*/],
    weapon : ["baseball bat", "sharp machete", "pistol", "golf club", "crowbar", "pool cue", "sledgehammer", "snow shovel", "hand axe", "katana"],
    building : ["house", "police station", "hospital", "school", "fierhouse", "store"]
};
//Character status
const charStatus = {
    bodyParts : ["head", "torso","neck", "left arm", "right arm", "left leg", "right leg", "left hand", "right hand"],
    bdyPrt : [["head", "torso","neck"], ["left arm", "right arm", "left leg", "right leg"], ["left hand", "right hand", "left ankle", "right ankle"]],
    get illness(){
        let typeOfIllness = ["broke", "dislocated"];
        if (typeOfIllness[Math.floor(Math.random() * typeOfIllness.length)] == "broke"){
            return `broke your ${this.bdyPrt[1][Math.floor(Math.random() * this.bdyPrt.length)]}`;
        } else if (typeOfIllness[Math.floor(Math.random() * typeOfIllness.length)] == "dislocated"){
            return `dislocated you ${this.bdyPrt[2][Math.floor(Math.random() * this.bdyPrt.length)]}`
        }
    }
}

//functions
function randomItem(object, property, method) {
    if (property){
        return object[property][Math.floor(Math.random() * object[property].length)];
    } else if (method){
        return object[method];
    }
}

function articleSelector(word) {
    const vowels = ["a", "e", "i", "o", "u"];      
    if (vowels.includes(word.charAt(0))) {
        return (`an ${word}`);
    } else {
        return (`a ${word}`);
    }
}

const sentenceGenerator = () => {

    event1 = `You are into ${articleSelector(randomItem(monst, "type"))} apocalypse. You decide to enter a random ${randomItem(objects, "building")} looking for ${randomItem(objects, "target")}.`;
    console.log(event1);
    event2 = `All the sudden ${articleSelector(randomItem(monst, null, "monstGenerator"))} is attacking you! It tries to bite your ${randomItem(charStatus, "bodyParts")}, but you defeated it just in time with your ${randomItem(objects, "weapon")}.`;
    console.log(event2);
    event3 = `Running from ${articleSelector(randomItem(monst,null, "monstGenerator"))} you accidentally ${randomItem(charStatus, null, "illness")}, but somehow you managed to escape!`; 
    console.log(event3);
}

sentenceGenerator();