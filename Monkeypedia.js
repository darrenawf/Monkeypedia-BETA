/*
Type here
*/
/*GLOBAL VARIABLES====================================*/
var monkeyArray = ["Aye-aye", "Baboon", "Chimpanzee", "Douc", "Finger Monkey", "Gorilla", "Indri", "Japanese Macaque", "Lar Gibbon", "Mandrill", "Orangutan", "Proboscis", "Siamang", "Snub-Nosed Monkey", "Spider Monkey", "Squirrel Monkey", "Woolly Monkey"];
var monkeyImgArr = [
    ["images/aye-aye_01.jpg",
        "images/aye-aye_02.jpg",
        "images/aye-aye_03.jpg"],
    ["images/baboon_01.jpg",
        "images/baboon_02.jpg",
        "images/baboon_03.jpg"],
    [
        "images/chimpanzee_03.jpg",
        "images/chimpanzee_01.jpg",
        "images/chimpanzee_02.jpg",]
];
var monkeyInfo = [
    ["Africa", "Africa", "Africa", "Asia", "Latin America", "Africa", "Africa", "Asia", "Asia", "Africa", "Asia", "Asia", "Asia", "Asia", "Latin America", "Latin America", "Latin America"],
    ["Lemur", "Cercopithecidae", "Great Ape", "Cercopithecidae", "Marmoset", "Great Ape", "Lemur", "Cercopithecidae", "Gibbon", "Cercopithecidae", "Great Ape", "Cercopithecidae", "Gibbon", "Cercopithecidae", "Atelidae", "Cebidae", "Atelidae"],
    ["Omnivore", "Herbivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "herbivore", "Omnivore", "Omnivore"]
]
var scrollImg = 0;
/*CHANGE MONKEY=======================================*/
//Change URL
function sendMonkey(monkeyType) {
    // Navigate to the receiver page with the data as a query parameter
    window.location.href = "monkey.html?data=" + encodeURIComponent(monkeyType);
}
//Change Text
function loadMonkey(monkeyType) {
    console.log("monkeyType:", monkeyType); //LOG
    document.getElementById("title").innerHTML = monkeyArray[monkeyType];
    document.getElementById("region").innerHTML = monkeyInfo[0][monkeyType];
    document.getElementById("species").innerHTML = monkeyInfo[1][monkeyType];
    document.getElementById("diet").innerHTML = monkeyInfo[2][monkeyType];
    document.getElementById("monkeyImg").src = monkeyImgArr[monkeyType][scrollImg];
}
/*SLIDE IMAGES========================================*/
function sLeft(monkeyType) {
    scrollImg--;
    if (scrollImg < 0) {
        scrollImg = monkeyImgArr[monkeyType].length - 1;
    }
    var monkeyImg = document.querySelector(".monkeyImg");
    monkeyImg.src = monkeyImgArr[monkeyType][scrollImg];
}
function scrollRight(monkeyType) {
    scrollImg++;
    if (scrollImg >= monkeyImgArr[monkeyType].length) {
        scrollImg = 0;
    }
    var monkeyImg = document.querySelector(".monkeyImg");
    monkeyImg.src = monkeyImgArr[monkeyType][scrollImg];
}
/*SLIDE IMAGES========================================*/
/*FILTERS=============================================*/
function checkRegion() { // Region filter checkbox
    var checkboxRegion = document.getElementById("checkboxRegion");
    //Display drop down
    if (checkboxRegion.checked) {
        document.getElementById("regionList").style.display = 'block';
    } else {
        document.getElementById("regionList").style.display = 'none';
    }
    //Uncheck other boxes
    document.getElementById("checkboxSpecies").checked = false;
    document.getElementById("checkboxDiet").checked = false;
    document.getElementById("speciesList").style.display = "none";
    document.getElementById("dietList").style.display = "none";
}

function checkSpecies() { // Diet filter checkbox
    var checkboxRegion = document.getElementById("checkboxSpecies");
    //Display drop down
    if (checkboxRegion.checked) {
        document.getElementById("speciesList").style.display = 'block';
    } else {
        document.getElementById("speciesList").style.display = 'none';
    }
    //Uncheck other boxes
    document.getElementById("checkboxRegion").checked = false;
    document.getElementById("checkboxDiet").checked = false;
    document.getElementById("regionList").style.display = "none";
    document.getElementById("dietList").style.display = "none";
}
function checkDiet() { // Diet filter checkbox
    var checkboxRegion = document.getElementById("checkboxDiet");
    //Display drop down
    if (checkboxRegion.checked) {
        document.getElementById("dietList").style.display = 'block';
    } else {
        document.getElementById("dietList").style.display = 'none';
    }
    //Uncheck other boxes
    document.getElementById("checkboxRegion").checked = false;
    document.getElementById("checkboxSpecies").checked = false;
    document.getElementById("regionList").style.display = "none";
    document.getElementById("speciesList").style.display = "none";
}
/*FILTERS=============================================*/

/*ACCOUNT=============================================*/
function createAccount() { //Finish this later when we learn about node.js
    /*

    var newUser = document.getElementById("newUser").value;
    var newPass = document.getElementById("newPass").value;
    alert("newUser");
    const fs = require('fs');

    let fileUser = fs.readFileSync(usernames.txt).toString();
    let filePass = fs.readFileSync(passwords.txt).toString();
    const userArray = fileUser.split("");
    const passArray = fileUser.split("");
    
    for (let i = 0; i < userArray.length;i++){
        
        if (userArray[i] == newUser){
            alert("That username has been taken. Please enter a new username")
            return;
        }
    }
    alert("Account has been created")
    userArray.push(newUser);
    passArray.push(newPass);
    fileUser = userArray.join("");
    filePass = passArray.join("");
    fs.writeFileSync("usernames.txt", fileUser)
    fs.writeFileSync("passwords.txt", filePass)
    */



}
/*ACCOUNT=============================================*/


/*SEARCH=============================================*/
function search() {
    var input = document.getElementById("search").value;
    window.location.href = 'search_results.html?input=' + encodeURIComponent(input);
}

function results(input) {
    document.getElementById("resultsTitle").innerHTML = "Search Results for: \"" + input + "\"";
    input = input.toLowerCase();
    var output = "";
    for (i = 0; i < (monkeyArray.length); i++) {
        monkey = monkeyArray[i].toLowerCase(); //I made them both lower case so it's not case sensitive
        if (monkey.includes(input) == true) {
            link = '"' + monkey + '.html"';
            output = output + "<a class=\"monkeyLink\" href=" + link + ">" + monkeyArray[i] + "</a>" //creates the <a> tag with a working link, Note: The link most likely doesnt work with monkey names with spaces, but I can easily fix that later
        }
    }
    document.getElementById("results").innerHTML = output;
}
/*SEARCH=============================================*/

