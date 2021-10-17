                    //Topic: Monster Apocalypse

        //Events
let event1;
let event2;
let event3;

let typeOfApocalypse;


        //Objects

//monster
const monst = {
    type : ["zombie", "alien", "vampire", "demon", "mutant", "minecraft bee" /*add more...*/],
    monstAdjective : ["hideous", "bloodthirsty", "insatiable", "voracious", "shapeless", "brutish"],
    get monstGenerator(){
        let randAdjective = Math.floor(Math.random() * this.monstAdjective.length);
        return `${this.monstAdjective[randAdjective]} ${typeOfApocalypse}`;
    }
}
//objects
const objects = {
    target : ["food", "materials", "weapons", "survivors", "clothing", "tools" /*add more...*/],
    weapon : ["baseball bat", "sharp machete", "pistol", "golf club", "crowbar", "pool cue", "sledgehammer", "snow shovel", "hand axe", "katana"],
    building : ["house", "police station", "hospital", "school", "fierhouse", "store"]
};
//character status
const charStatus = {
    generalBodyParts : ["head", "torso","neck", "left arm", "right arm", "left leg", "right leg", "left hand", "right hand"],
    specificBodyParts : [["left arm", "right arm", "left leg", "right leg"], ["left shoulder", "right shoulder", "left ankle", "right ankle"], ["arm", "leg", "mouth", "ear", "face"]],
    get illness(){
        let typeOfIllness = ["broke", "dislocated", "cut"];
        let randIllness = typeOfIllness[Math.floor(Math.random() * typeOfIllness.length)];

        if (randIllness == "broke"){
            return `broke your ${this.specificBodyParts[0][Math.floor(Math.random() * this.specificBodyParts[0].length)]}`;
        } else if (randIllness == "dislocated"){
            return `dislocated you ${this.specificBodyParts[1][Math.floor(Math.random() * this.specificBodyParts[1].length)]}`
        } else if (randIllness == "cut") {
            return `cut your ${this.specificBodyParts[2][Math.floor(Math.random() * this.specificBodyParts[2].length)]}`
        }
    }
}


        //Functions

//returns a random item from a specific object
function randomItem(object, property, method) {
    if (property){
        return object[property][Math.floor(Math.random() * object[property].length)];
    } else if (method){
        return object[method];
    }
}

//selects the correct article for the random item
function articleSelector(word) {
    const vowels = ["a", "e", "i", "o", "u"];      
    if (vowels.includes(word.charAt(0))) {
        return (`an ${word}`);
    } else {
        return (`a ${word}`);
    }
}

//puts the sentence together and prints the 3 events
function sentenceGenerator() {
    typeOfApocalypse = monst["type"][Math.floor(Math.random() * monst["type"].length)];

    event1 = `You are into ${articleSelector(typeOfApocalypse)} apocalypse. You decide to enter a random ${randomItem(objects, "building")} looking for ${randomItem(objects, "target")}.`;
    console.log(event1);
    event2 = `All the sudden ${articleSelector(randomItem(monst, null, "monstGenerator"))} is attacking you! It tries to bite your ${randomItem(charStatus, "generalBodyParts")}, but you defeated it just in time with your ${randomItem(objects, "weapon")}.`;
    console.log(event2);
    event3 = `Running from ${articleSelector(randomItem(monst,null, "monstGenerator"))} you accidentally ${randomItem(charStatus, null, "illness")}, but somehow you managed to escape!`; 
    console.log(event3);
}


//creates 5 aleatory apocalypse situation
let i = 0;
while (i < 5){
    sentenceGenerator();
    console.log("");
    i++;
}