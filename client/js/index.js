
const sock = io();
let newLine = createNewLine();

var wordRow = "row";
var rowNum = 1;
var userName = "Aum";
var userId = "AA";
var userName2 = "Nina";
var userId2 = "NN";
var nickname = '';
var connectedUser = '';
var userOnline = '';
var userOffline = '';
var aumWins = 0;
var ninaWins = 0;
var aumChas = 1;
var ninaChas = 1;

//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------
const promptMsg = () => {
    var nick = prompt("Please enter your pin number:");
    while (nick.length == 0) {
        alert("Please enter your pin number!");
        nick = prompt("Please enter your pin number:");
    }


    if (nick === '1111') {
        nickname = 'Aum';
        correctPin = true;
    } else if (nick === '8888') {
        nickname = 'Nina'
        correctPin = true;
    } else if (nick === '9035') {
        nickname = 'LXR'
        correctPin = true;
    } else if (nick === '6588') {
        nickname = 'TJY'
        correctPin = true;
    } else if (nick === '1072') {
        nickname = 'JL'
        correctPin = true;
    } else if (nick === '3839') {
        nickname = 'SZF'
        correctPin = true;
    } else if (nick === '88888') {
        nickname = 'TCR'
        correctPin = true;
    } else if (nick === '3583') {
        nickname = 'JHA'
        correctPin = true;
    } else if (nick === '5086') {
        nickname = 'CED'
    } else if (nick === '2105') {
        nickname = 'CJH'
    } else if (nick === '2167') {
        nickname = 'KX'
    } else if (nick === '7051') {
        nickname = 'KN'
    } else if (nick === '1198') {
        nickname = 'LOK'
    } else if (nick === '7089') {
        nickname = 'JW'
    } else {
        alert("Wrong pin number!");
        promptMsg();
    }
};

promptMsg();
sock.emit('newuser', nickname);
//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------



//++++++++++++++++++++++++++++++++++++++++ DOCUMENT OBJECT METHOD UPDATE +++++++++++++++++++++++++++++++++++

document.body.appendChild(createContainerFluid());

let mainDiv = document.getElementById("maindiv");

document.body.appendChild(createNewRow(wordRow + rowNum, userName, userId));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId2));
//document.body.appendChild(newLine);
//++++++++++++++++++++++++++++++++++++++++ DOCUMENT OBJECT METHOD UPDATE +++++++++++++++++++++++++++++++++++


//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} LISTENERS FROM SERVER {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{
sock.on('updateallwins', data => {
    //alert(data.aumWins + " vs " + aumWins);
    if (data.aumWins > aumWins) {
        var aumWinDif = data.aumWins - aumWins;
        var userId = "AA"
        updateAllWins(userId , aumWinDif);
        aumWins = data.aumWins;
        
        //alert(aumWins);
    }
    if (data.ninaWins > ninaWins) {
        var ninaWinDif = data.ninaWins - ninaWins;
        var userId = "NN"
        updateAllWins(userId , ninaWinDif);
        ninaWins = data.ninaWins;
    }
    if (data.aumWins < aumWins) {
        var userId = "AA"
        removeWin(userId , aumWins);
        aumWins = data.aumWins;
    }
    if (data.ninaWins < ninaWins) {
        var userId = "NN"
        removeWin(userId , ninaWins);
        ninaWins = data.ninaWins;
    }
    
});

sock.on('updateallchas', data => {
    if (data.aumChas > aumChas) {
        var aumChaDif = data.aumChas - aumChas;
        var userId = "AA"
        updateAllChas(userId , aumChaDif);
        aumChas = data.aumChas;
    }
    if (data.ninaChas > ninaChas) {
        var ninaChaDif = data.ninaChas - ninaChas;
        var userId = "NN"
        updateAllChas(userId , ninaChaDif);
        ninaChas = data.ninaChas;
    }

    if (data.aumChas < aumChas) {
        var userId = "AA"
        removeCha(userId , aumChas);
        aumChas = data.aumChas;
    }
    if (data.ninaChas < ninaChas) {
        var userId = "NN"
        removeCha(userId , ninaChas);
        ninaChas = data.ninaChas;
    }
});

sock.on('transmituser', data => {
    userOnline = data;
    if (userOnline === "Aum") {
        var togSpan = document.getElementById('AAspan');
        togSpan.style.background = "green";
    };
    if (userOnline === "Nina") {
        var togSpan = document.getElementById('NNspan');
        togSpan.style.background = "green";

    };

});

sock.on('userdisconnect', data => {
    userOffline = data;
    if (userOffline === "Aum") {
        var togSpan = document.getElementById('AAspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "Nina") {
        var togSpan = document.getElementById('NNspan');
        togSpan.style.background = "red";
    };
});

sock.on('updateallresults', data => {
    if (data.userId === "AA") {
        var updatebox = document.getElementById('AAinput');
        updatebox.value = data.aumRes;
    }
    if (data.userId === "NN") {
        var updatebox = document.getElementById('NNinput');
        updatebox.value = data.ninaRes;
    }
});
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} LISTENERS FROM SERVER {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{



//(((((((((((((((((((((((((((((((((((((((( FACTORY FUNCTIONS ))))))))))))))))))))))))))))))))))))))))))))))))

function createContainerFluid() {
    var createDiv = document.createElement('div');
    createDiv.className = "container-fluid";
    createDiv.setAttribute("id", "maindiv");
    return createDiv;
}

function createNewRow(rowNum, userName, userId) {

    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var divCol1 = divRow.appendChild(document.createElement('div'));
    divCol1.className = "col1";
    divCol1.style.padding = "10px";
    var label1 = divCol1.appendChild(document.createElement('h2'));
    label1.innerHTML = userName;
    var span1 = label1.appendChild(document.createElement('span'));
    span1.setAttribute("id", userId + "span");
    span1.style = "width:20px;height:20px";
    span1.style.display = "inline-block";
    span1.style.background = "red";

    /* var divCol1e = divRow.appendChild(document.createElement('div'));
    divCol1e.className = "col1e";
    divCol1e.style.padding = "10px";
    var span1 = divCol1e.appendChild(document.createElement('span'));
    span1.style = "width:10rem;height:10rem;background:red"; */

    var divCol2 = divRow.appendChild(document.createElement('div'));
    divCol2.className = "col2"
    divCol2.setAttribute("id", userId + "border");
    //createDiv.style.border = "5px solid black"
    //createDiv.style.padding = "40px"
    divCol2.style = "width:400px;height:65px"
    //createDiv.style.float = "left"
    //createDiv.className = "rounded"
    divCol2.style.backgroundImage = "url(https://lh3.googleusercontent.com/g1-vQvca_v4Juug9neJuXRY9Nnwh4sdNnxqG0THU_WocwJiD7ixvJL4CoGTWmdyZyCFtjz4gTI7LQCJaJ29eMk9xg_h2qonU0bcDbVYvxQ2BKzZWYs-VL02fLFHqhlfo3Cheh-om=w2400)"
    divCol2.style.backgroundSize = "100%"
    divCol2.style.backgroundRepeat = "no-repeat"

    var divCol1a = divRow.appendChild(document.createElement('input'));
    divCol1a.className = "input1";
    divCol1a.style.width = "7%";
    divCol1a.setAttribute("id", userId + "input");
    divCol1a.setAttribute("type", "number");

    var divCol1b = divRow.appendChild(document.createElement('button'));
    divCol1b.className = "btn btn-secondary";
    //divCol1b.style.width = "7%";
    divCol1b.setAttribute("id", userId + "submitbtn");
    divCol1b.innerHTML = "Submit"
    divCol1b.addEventListener('click', function () {
        var result = document.getElementById(userId + "input").value;
        sock.emit('submit', {userId, result});
    });

    var divCol3 = divRow.appendChild(document.createElement('div'));
    divCol3.className = "col3"
    divCol3.style.padding = "10px";
    divCol3.appendChild(createButtonGroup("btnGrp1", userId + "border", userId));

    var divCol4 = divRow.appendChild(document.createElement('div'));
    divCol4.setAttribute("id", userId + "chadiv");
    divCol4.className = "col4";
    divCol4.style.padding = "10px";
    createChallenges(userId, userId + "chadiv", 1);
    //createChallenges(userId, userId + "chadiv", 2);
    //createChallenges(userId, userId + "chadiv", 3);
    //divCol4.appendChild(createChallenges(userId + "chadiv"));

    var divCol5 = divRow.appendChild(document.createElement('div'));
    divCol5.className = "col5"
    divCol5.style.padding = "10px";
    divCol5.appendChild(createChaButtons(userId));

    return mainDiv;
}

function createChallenges(userId, elToApply, chaCount) {
    var createDiv = document.getElementById(elToApply);
    createDiv.className = "float-left";
    //createDiv.setAttribute("id", "col4");
    var img = document.createElement('img');
    img.src = "https://cdn4.iconfinder.com/data/icons/battlefield-3/340/battleship_warship_cannon_military_marine_ocean_battle-1024.png";
    img.style = "width:35px;height:35px";
    img.setAttribute("id", userId + "cha" + chaCount);
    createDiv.appendChild(img);
    return createDiv;
}

function createButtonGroup(name, elToApply, userId) {
    let winCount = 0;
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", name)
    createDiv.className = "btn-group"
    //createDiv.style.display = 'block'
    //createDiv.style = "width:100px;height:80px"
    //createDiv.style.clear = "left"
    let btn1 = createDiv.appendChild(document.createElement('button'));
    btn1.setAttribute("id", "btn1")
    btn1.className = "btn btn-success"
    btn1.innerHTML = "Add Win"
    let btn2 = createDiv.appendChild(document.createElement('button'));
    btn2.setAttribute("id", "btn2")
    btn2.className = "btn btn-dark"
    btn2.innerHTML = "Minus Win"
    //btn2.style.visibility = "hidden";
    
    btn1.addEventListener('click', function () {
        sock.emit('addWin', userId);
    })
    btn2.addEventListener('click', function () {
        sock.emit('minusWin', userId);
    })
    return createDiv;

}

function createChaButtons(userId) {
    //var chaCount = 3;
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", userId + "chabtndiv");
    createDiv.className = "btn-group";
    let chaBtn1 = createDiv.appendChild(document.createElement('button'));
    chaBtn1.setAttribute("id", userId + "chabtn1");
    chaBtn1.className = "btn btn-success";
    chaBtn1.innerHTML = "Add Challenge";
    //chaBtn1.disabled = "true";
    let chaBtn2 = createDiv.appendChild(document.createElement('button'));
    chaBtn2.setAttribute("id", userId + "chabtn2");
    chaBtn2.className = "btn btn-dark";
    chaBtn2.innerHTML = "Deduct Challenge";

    chaBtn1.addEventListener('click', function () {
        sock.emit('addCha', userId);
    });

    chaBtn2.addEventListener('click', function () {
        sock.emit('minusCha', userId);
    });

    

    return createDiv;

}

function removeWin(userId, winCount) {
    //alert(userId + "win" + winCount);
    var removeWin = document.getElementById(userId + "win" + winCount);
    removeWin.parentNode.removeChild(removeWin);


}

function removeCha(userId, chaCount) {

    var removeCha = document.getElementById(userId + "cha" + chaCount);
    removeCha.parentNode.removeChild(removeCha);
    //chaCount -= 1;

}

function addChallenge(userId, chaCount) {
    //chaCount++;
    var addCha = document.getElementById(userId + "chadiv");
    var img = document.createElement('img');
    img.src = "https://cdn4.iconfinder.com/data/icons/battlefield-3/340/battleship_warship_cannon_military_marine_ocean_battle-1024.png";
    img.style = "width:35px;height:35px";
    //chaCount += 1;
    img.setAttribute("id", userId + "cha" + chaCount);
    //alert(userId + "cha" + chaCount);
    //img.style.padding = "10px"
    addCha.appendChild(img);
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function createNewLine() {
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", "blankdiv");
    createDiv.style.clear = "left";
    return createDiv;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function updateAllWins(userId, winDif) {
    if (userId === "AA") {
        counter = aumWins;
    }
    if (userId === "NN") {
        counter = ninaWins;
    }

    for (var i = counter + 1; i < winDif + counter + 1; i++) {
        var displayWin = document.getElementById(userId + "border");
        var img = document.createElement('img');
        img.src = "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-256.png";
        img.style = "width:30px;height:30px"
        img.style.position = "relative"
        img.style.top = "17px"
        img.style.left = "10px"
        img.setAttribute("id", userId + "win" + i);
        displayWin.appendChild(img);
        //alert(userId + "win" + i)
    };
    
}

function updateAllChas(userId, chaDif) {
    if (userId === "AA") {
        counter = aumChas;
    }
    if (userId === "NN") {
        counter = ninaChas;
    }

    for (var i = counter + 1; i < chaDif + counter + 1; i++) {
    var addCha = document.getElementById(userId + "chadiv");
    var img = document.createElement('img');
    img.src = "https://cdn4.iconfinder.com/data/icons/battlefield-3/340/battleship_warship_cannon_military_marine_ocean_battle-1024.png";
    img.style = "width:35px;height:35px";
    img.setAttribute("id", userId + "cha" + i);
    addCha.appendChild(img);
    }
    
}


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* function displayWin(elToApply, userId, winCount) {
    //winCount++;
    var displayWin = document.getElementById(elToApply);
    var img = document.createElement('img');
    img.src = "https://cdn1.iconfinder.com/data/icons/food-4-9/128/Vigor_Fire-Hot-Flame-Burn-256.png";
    img.style = "width:30px;height:30px"
    img.style.position = "relative"
    img.style.top = "17px"
    img.style.left = "10px"
    img.setAttribute("id", userId + "win" + winCount);


    //img.style.padding = "10px"
    displayWin.appendChild(img);
    alert(userId + "win" + winCount);

} */