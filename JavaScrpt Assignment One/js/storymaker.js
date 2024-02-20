const nounButton = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');

const nounPara = document.querySelector('#chosenNoun1');
const verbPara = document.querySelector('#chosenVerb');
const adjectivePara = document.querySelector('#chosenAdjective');
const noun2Para = document.querySelector('#chosenNoun2');
const settingPara = document.querySelector('#chosenSetting');

const showStoryButton = document.querySelector('#playback');
const randomizeButton = document.querySelector('#random');
const resetButton = document.querySelector('#reset');
const storyPara = document.querySelector('#story');

const nounArray = ["Mystical Forest", "Fairy Tale Castle", "Dreamy Meadow", "Whispering Brook", "Enchanted Garden", "Magic Kingdom", "Wondrous Wonderland", "Pixie Hollow", "Secret Cove", "Ethereal Realm"];
const verbArray = ["danced", "giggled", "twinkled", "sparkled", "whispered", "glowed", "wandered", "enchanted", "enchanted", "laughed"];
const adjectiveArray = ["enchanted", "mystical", "whimsical", "magical", "glittering", "charming", "radiant", "ethereal", "bewitched", "spellbinding"];
const noun2Array = ["Golden Rainbow", "Crystal Waterfall", "Twinkling Stars", "Moonlit Sky", "Gentle Breeze", "Shimmering Lake", "Silent Forest", "Sapphire Sea", "Celestial Moon", "Starlit Night"];
const settingArray = ["where dreams come true", "beneath the moonlight", "amidst the stars", "in the land of make-believe", "underneath the twinkling sky", "within the magic circle", "between the pages of a storybook", "along the path of imagination", "at the edge of the universe", "within the realm of fantasy"];

let nounCount = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

function selectNoun() {
    let selectedNoun = nounArray[nounCount];
    if (nounCount < nounArray.length - 1) {
        nounCount++;
    }
    nounPara.textContent = selectedNoun;
}

function selectVerb() {
    let selectedVerb = verbArray[verbCount];
    if (verbCount < verbArray.length - 1) {
        verbCount++;
    }
    verbPara.textContent = selectedVerb;
}

function selectAdjective() {
    let selectedAdjective = adjectiveArray[adjectiveCount];
    if (adjectiveCount < adjectiveArray.length - 1) {
        adjectiveCount++;
    }
    adjectivePara.textContent = selectedAdjective;
}

function selectNoun2() {
    let selectedNoun2 = noun2Array[noun2Count];
    if (noun2Count < noun2Array.length - 1) {
        noun2Count++;
    }
    noun2Para.textContent = selectedNoun2;
}

function selectSetting() {
    let selectedSetting = settingArray[settingCount];
    if (settingCount < settingArray.length - 1) {
        settingCount++;
    }
    settingPara.textContent = selectedSetting;
}

function showStory() {
    storyPara.textContent = `${nounPara.textContent} ${verbPara.textContent} ${adjectivePara.textContent} ${noun2Para.textContent} ${settingPara.textContent}`;
}

function generateRandomStory() {
    let randomNoun = nounArray[Math.floor(Math.random() * nounArray.length)];
    let randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
    let randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    let randomNoun2 = noun2Array[Math.floor(Math.random() * noun2Array.length)];
    let randomSetting = settingArray[Math.floor(Math.random() * settingArray.length)];

    nounPara.textContent = randomNoun;
    verbPara.textContent = randomVerb;
    adjectivePara.textContent = randomAdjective;
    noun2Para.textContent = randomNoun2;
    settingPara.textContent = randomSetting;

    storyPara.textContent = `${nounPara.textContent} ${verbPara.textContent} ${adjectivePara.textContent} ${noun2Para.textContent} ${settingPara.textContent}`;
}

function resetStory() {
    nounCount = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;

    nounPara.textContent = '';
    verbPara.textContent = '';
    adjectivePara.textContent = '';
    noun2Para.textContent = '';
    settingPara.textContent = '';
    storyPara.textContent = '';
}

nounButton.addEventListener('click', selectNoun);
verbButton.addEventListener('click', selectVerb);
adjectiveButton.addEventListener('click', selectAdjective);
noun2Button.addEventListener('click', selectNoun2);
settingButton.addEventListener('click', selectSetting);
showStoryButton.addEventListener('click', showStory);
randomizeButton.addEventListener('click', generateRandomStory);
resetButton.addEventListener('click', resetStory);
