/*
Type here
*/
/*GLOBAL VARIABLES====================================*/
var monkeyArray = ["Aye-aye Lemur", "Baboon", "Chimpanzee", "Red-Shanked Douc", "Finger Monkey", "Gorilla", "Indri Lemur", "Japanese Macaque", "Lar Gibbon", "Mandrill", "Orangutan", "Proboscis", "Ring-Tailed Lemur", "Siamang", "Snub-Nosed Monkey", "Spider Monkey", "Squirrel Monkey", "Woolly Monkey"];
var monkeyImgArr = [
    ["images/ayeAye_02.jpg",
        "images/ayeAye_01.jpg",
        "images/ayeAye_03.jpg"],
    ["images/baboon_03.jpg",
        "images/baboon_02.jpg",
        "images/baboon_01.jpg"],
    ["images/chimpanzee_01.jpg",
        "images/chimpanzee_03.jpg",
        "images/chimpanzee_02.jpg"],
    ["images/douc_04.jpg",
        "images/douc_01.jpg",
        "images/douc_02.jpg"],
    ["images/fingerMonkey_01.jpg",
        "images/fingerMonkey_02.jpg",
        "images/fingerMonkey_03.jpg",],
    ["images/gorilla_01.jpg",
        "images/gorilla_02.jpg",
        "images/gorilla_04.jpg",],
    ["images/indriLemur_01.jpg",
        "images/indriLemur_02.jpg",
        "images/indriLemur_03.jpg",],
    ["images/japaneseMacaque_01.jpg",
        "images/japaneseMacaque_02.jpg",
        "images/japaneseMacaque_03.jpg",],
    ["images/larGibbon_02.jpg",
        "images/larGibbon_01.jpg",
        "images/larGibbon_03.jpg",],
    ["images/mandrill_01.jpg",
        "images/mandrill_02.jpg",
        "images/mandrill_03.jpg",],
    ["images/orangutan_02.jpg",
        "images/orangutan_01.jpg",
        "images/orangutan_03.jpg",],
    ["images/proboscis_01.jpg",
        "images/proboscis_03.jpg",
        "images/proboscis_02.jpg",],
    ["images/ringTailedLemur_01.jpg",
        "images/ringTailedLemur_02.jpg",
        "images/ringTailedLemur_03.jpg",
        "images/ringTailedLemur_04.jpg",],
    ["images/siaming_03.jpg",
        "images/siaming_02.jpg",
        "images/siaming_01.jpg",],
    ["images/snubNosedMonkey_01.jpg",
        "images/snubNosedMonkey_02.jpg",
        "images/snubNosedMonkey_03.jpg",],
    ["images/spiderMonkey_01.jpg",
        "images/spiderMonkey_02.jpg",
        "images/spiderMonkey_03.jpg",],
    ["images/squirrelMonkey_03.jpg",
        "images/squirrelMonkey_01.jpg",
        "images/squirrelMonkey_02.jpg",],
    ["images/woollyMonkey_01.jpg",
        "images/woollyMonkey_02.jpg",
        "images/woollyMonkey_03.jpg",]
];
var monkeyInfo = [
    ["Africa", "Africa", "Africa", "Asia", "Latin America", "Africa", "Africa", "Asia", "Asia", "Africa", "Asia", "Asia", "Africa", "Asia", "Asia", "Latin America", "Latin America", "Latin America"],
    ["Lemur", "Cercopithecidae", "Great Ape", "Cercopithecidae", "Marmoset", "Great Ape", "Lemur", "Cercopithecidae", "Gibbon", "Cercopithecidae", "Great Ape", "Cercopithecidae", "Lemur", "Gibbon", "Cercopithecidae", "Atelidae", "Cebidae", "Atelidae"],
    ["Omnivore", "Herbivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Herbivore", "Omnivore", "Omnivore", "Omnivore"]
]
var monkeyDesc = [
    [],
    [],
    ['Chimpanzees, also known as "Chimps" in American Slang, are very cool animals. They are larger and smarter than your average monkey. People share approximately 95-98% of DNA with Chimpanzees. Chimps are the monkey with the longest possible life-span, the oldest ever chimpanzee to live named "Little Mama", was alive for around 75 - 80 years and sadly passed away on November 14, 2017. "Little Mama" was best known as a professional ice skater. Chimpanzees are very handy creatures. Chimps are also special because have the ability to use tools such as hammers and sticks since they got two big thumbs like you.']
]
var scrollImg = 0;
var username = localStorage.getItem("username");
/*CHANGE MONKEY=======================================*/
//Change URL
function sendMonkey(monkeyType) {
    // Navigate to the receiver page with the data as a query parameter
    window.location.href = "monkey.html?type=" + encodeURIComponent(monkeyType);
}
//Change Text
function loadMonkey(monkeyType) {
    console.log("monkeyType:", monkeyType); //LOG
    document.getElementById("title").innerHTML = monkeyArray[monkeyType];
    document.getElementById("region").innerHTML = monkeyInfo[0][monkeyType];
    document.getElementById("species").innerHTML = monkeyInfo[1][monkeyType];
    document.getElementById("diet").innerHTML = monkeyInfo[2][monkeyType];
    document.getElementById("monkeyImg").src = monkeyImgArr[monkeyType][scrollImg];
    document.getElementById("description").innerHTML = monkeyDesc[monkeyType];
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
    /*
    document.getElementById("checkboxSpecies").checked = false;
    document.getElementById("checkboxDiet").checked = false;
    document.getElementById("speciesList").style.display = "none";
    document.getElementById("dietList").style.display = "none";
    */
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
    /*
    document.getElementById("checkboxRegion").checked = false;
    document.getElementById("checkboxDiet").checked = false;
    document.getElementById("regionList").style.display = "none";
    document.getElementById("dietList").style.display = "none";
    */
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
    /*
    document.getElementById("checkboxRegion").checked = false;
    document.getElementById("checkboxSpecies").checked = false;
    document.getElementById("regionList").style.display = "none";
    document.getElementById("speciesList").style.display = "none";
    */
}

var region = "Any";
var species = "Any";
var diet = "Any";

function regionSelector(object) {
    var selector = object;
    if (document.getElementById(selector.id).checked == true) {
        document.getElementById("africa").checked = false;
        document.getElementById("asia").checked = false;
        document.getElementById("latinAmerica").checked = false;
        document.getElementById(selector.id).checked = true;
        region = document.getElementById(selector.id).value;
    }
    if (document.getElementById(selector.id).checked == false) {
        region = "Any";
    }
}
function speciesSelector(object) {
    var selector = object;
    if (document.getElementById(selector.id).checked == true) {
        document.getElementById("atelidae").checked = false;
        document.getElementById("cebidae").checked = false;
        document.getElementById("cercopithecidae").checked = false;
        document.getElementById("gibbons").checked = false;
        document.getElementById("greatApes").checked = false;
        document.getElementById("lemurs").checked = false;
        document.getElementById("marmosets").checked = false;
        document.getElementById(selector.id).checked = true;
        species = document.getElementById(selector.id).value;
    }
    if (document.getElementById(selector.id).checked == false) {
        species = "Any";
    }
}

function dietSelector(object) {
    var selector = object;
    if (document.getElementById(selector.id).checked == true) {
        document.getElementById("herbivore").checked = false;
        document.getElementById("omnivore").checked = false;
        document.getElementById(selector.id).checked = true;
        diet = document.getElementById(selector.id).value;
    }
    if (document.getElementById(selector.id).checked == false) {
        diet = "Any";
    }
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

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});


function search() {
    var input = document.getElementById("search").value;
    window.location.href = 'search_results.html?input=' + encodeURIComponent(input) + "&region=" + encodeURIComponent(region) + "&species=" + encodeURIComponent(species) + "&diet=" + encodeURIComponent(diet);
}

function results(input, monkeyRegion, monkeySpecies, monkeyDiet) {
    document.getElementById("resultsTitle").innerHTML = "Search Results for: \"" + input + "\"";
    input = input.toLowerCase();
    var output = "";
    for (i = 0; i < (monkeyArray.length); i++) {
        monkey = monkeyArray[i].toLowerCase(); //I made them both lower case so it's not case sensitive
        if (monkey.includes(input) == true) {
            if (monkeyInfo[0][i] == monkeyRegion || monkeyRegion == "Any") {
                if (monkeyInfo[1][i] == monkeySpecies || monkeySpecies == "Any") {
                    if (monkeyInfo[2][i] == monkeyDiet || monkeyDiet == "Any") {
                        link = '"monkey.html?type=' + encodeURIComponent(i) + '"';
                        output = output + "<a class=\"monkeyLink\" href=" + link + ">" + monkeyArray[i] + "</a>";
                    }
                }
            }
        }

    }
    document.getElementById("results").innerHTML = output;
}
/*SEARCH=============================================*/
/*DATE===============================================*/
function dateLoad() {
    var d = new Date();
    var dayOfWeek = d.getDay();
    var month = d.getMonth();
    var day = d.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var motdTitle = ["Harambe", "Orangutan Fisherman", "Donkey Kong", "You", "Curious George", "King Kong Balls", "Zooboomafoo"]
    var motdImg = ["images/harambe_01.jpg", "images/fisherman_01.jpg", "images/donkeyKong_01.jpg", "images/you_01.jpg", "images/curiousGeorge_01.jpg", "images/kingKongBalls_01.jpg", "images/zooboomafoo_01.jpg"];
    var motdInfo = [
        ["Cincinnati Zoo", "Shore", "DK Island", "Unknown", "Big City", "Prague", "Duke Lemur Center"],
        ["Gorilla", "Orangutan", "Gorilla", "Human", "Chimpanzee", "Chimpanzee", "Coquerel's Sifaka"],
        ["May 28, 2016", "Fisherman", "Bananas", "Unknown", "Banana", "Big", "Chris & Martin Kratt"]
    ]
    var motdInfoLeft = [
        ["Location: ", "Location: ", "Region: ", "Location: ", "Location: ", "Location: ", "Location: "],
        ["Race: ", "Race: ", "Race: ", "Race: ", "Race: ", "Race: ", "Race: "],
        ["Died: ", "Occupation: ", "Fav Food: ", "Died: ", "Fav Food: ", "Size: ", "Best Friends: "]
    ]
    document.getElementById("dateId").innerHTML = "Monkey of the Day: " + days[dayOfWeek] + ", " + months[month] + " " + day;
    document.getElementById("title").innerHTML = motdTitle[dayOfWeek];
    document.getElementById("region").innerHTML = motdInfo[0][dayOfWeek];
    document.getElementById("species").innerHTML = motdInfo[1][dayOfWeek];
    document.getElementById("diet").innerHTML = motdInfo[2][dayOfWeek];
    document.getElementById("regionLeft").innerHTML = motdInfoLeft[0][dayOfWeek];
    document.getElementById("speciesLeft").innerHTML = motdInfoLeft[1][dayOfWeek];
    document.getElementById("dietLeft").innerHTML = motdInfoLeft[2][dayOfWeek];
    document.getElementById("monkeyImg").src = motdImg[dayOfWeek];
    document.getElementById("description").innerHTML = monkeyDesc[monkeyType];
}
/*DATE===============================================*/
/*STAR_RATING========================================*/
hovered = false;
function star(starNum) {
    for (i = 1; i <= starNum; i++) {
        document.getElementsByClassName("fa fa-star")[i-1].checked=true;
    }
    document.getElementsByClassName("reviewNum").innerHTML="(" + starNum + ".0)";
    hovered = true;
}

function hoveronStar(starNum) {
        resetHover();
        for (i = 1; i <= starNum; i++){
            document.getElementsByClassName("fa fa-star")[i-1].checked=true;
        }
        document.getElementsByClassName("reviewNum").innerHTML="(" + starNum + ".0)";
        hovered = false;
}
function hoveroffStar() {
    if (!hovered) {
        resetHover();
    }
}

function resetHover() {
    for (i = 1; i <= 5; i++) {
        document.getElementsByClassName("fa fa-star")[i-1].checked=false;
    }
}
/*STAR_RATING========================================*/