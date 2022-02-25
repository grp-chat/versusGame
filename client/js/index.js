
const sock = io();
//let newLine = createNewLine();
var roundNum = 1;
var wordRow = "row";
var rowNum = 1;
var userName = "Aum";
var userId = "AA";
var userName2 = "Julie ";
var userId2 = "NN";
var userId3 = "LK";
var userId4 = "LXR";
var userId5 = "JHA";
var userId6 = "JL";
var userId7 = "SZF";
var userId8 = "";
var nickname = '';
var connectedUser = '';
var userOnline = '';
var userOffline = '';
var aumWins = 0;
var aumChas = 1;
var ninaWins = 0;
var ninaChas = 1;
var LKWins = 0;
var LKChas = 1;
var LXRWins = 0;
var LXRChas = 1;
var JHAWins = 0;
var JHAChas = 1;
var SZFWins = 0;
var SZFChas = 1;
var JLWins = 0;
var JLChas = 1;

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
    } else if (nick === '9852') {
        nickname = 'LK'
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

/* document.body.appendChild(createNewRow(wordRow + rowNum, userName, userId));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId2));
rowNum++;
document.body.appendChild(createHrLine(rowNum));
rowNum++; */

document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId3));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId4));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId5));
rowNum++;
document.body.appendChild(createHrLine(wordRow + rowNum));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId6));
rowNum++;
document.body.appendChild(createNewRow(wordRow + rowNum, userName2, userId7));
rowNum++;
document.body.appendChild(createHrLine(wordRow + rowNum));
rowNum++;
document.body.appendChild(createBotBtn(wordRow + rowNum));

//++++++++++++++++++++++++++++++++++++++++ DOCUMENT OBJECT METHOD UPDATE +++++++++++++++++++++++++++++++++++


//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} LISTENERS FROM SERVER {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{
sock.on('updateallwins', data => {
    if (data.aumWins > aumWins) {
        var aumWinDif = data.aumWins - aumWins;
        var userId = "AA"
        updateAllWins(userId, aumWinDif);
        aumWins = data.aumWins;
    }
    if (data.ninaWins > ninaWins) {
        var ninaWinDif = data.ninaWins - ninaWins;
        var userId = "NN"
        updateAllWins(userId, ninaWinDif);
        ninaWins = data.ninaWins;
    }
    if (data.LKWins > LKWins) {
        var LKWinDif = data.LKWins - LKWins;
        var userId = "LK"
        updateAllWins(userId, LKWinDif);
        LKWins = data.LKWins;
    }
    if (data.LXRWins > LXRWins) {
        var LXRWinDif = data.LXRWins - LXRWins;
        var userId = "LXR"
        updateAllWins(userId, LXRWinDif);
        LXRWins = data.LXRWins;
    }
    if (data.JHAWins > JHAWins) {
        var JHAWinDif = data.JHAWins - JHAWins;
        var userId = "JHA"
        updateAllWins(userId, JHAWinDif);
        JHAWins = data.JHAWins;
    }
    if (data.SZFWins > SZFWins) {
        var SZFWinDif = data.SZFWins - SZFWins;
        var userId = "SZF"
        updateAllWins(userId, SZFWinDif);
        SZFWins = data.SZFWins;
    }
    if (data.JLWins > JLWins) {
        var JLWinDif = data.JLWins - JLWins;
        var userId = "JL"
        updateAllWins(userId, JLWinDif);
        JLWins = data.JLWins;
    }

    //MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    if (data.aumWins < aumWins) {
        var userId = "AA"
        removeWin(userId, aumWins);
        aumWins = data.aumWins;
    }
    if (data.ninaWins < ninaWins) {
        var userId = "NN"
        removeWin(userId, ninaWins);
        ninaWins = data.ninaWins;
    }
    if (data.LKWins < LKWins) {
        var userId = "LK"
        removeWin(userId, LKWins);
        LKWins = data.LKWins;
    }
    if (data.LXRWins < LXRWins) {
        var userId = "LXR"
        removeWin(userId, LXRWins);
        LXRWins = data.LXRWins;
    }
    if (data.JHAWins < JHAWins) {
        var userId = "JHA"
        removeWin(userId, JHAWins);
        JHAWins = data.JHAWins;
    }
    if (data.SZFWins < SZFWins) {
        var userId = "SZF"
        removeWin(userId, SZFWins);
        SZFWins = data.SZFWins;
    }
    if (data.JLWins < JLWins) {
        var userId = "JL"
        removeWin(userId, JLWins);
        JLWins = data.JLWins;
    }

});

sock.on('updateallchas', data => {
    if (data.aumChas > aumChas) {
        var aumChaDif = data.aumChas - aumChas;
        var userId = "AA"
        updateAllChas(userId, aumChaDif);
        aumChas = data.aumChas;
    }
    if (data.ninaChas > ninaChas) {
        var ninaChaDif = data.ninaChas - ninaChas;
        var userId = "NN"
        updateAllChas(userId, ninaChaDif);
        ninaChas = data.ninaChas;
    }
    if (data.LKChas > LKChas) {
        var LKChaDif = data.LKChas - LKChas;
        var userId = "LK"
        updateAllChas(userId, LKChaDif);
        LKChas = data.LKChas;
    }
    if (data.LXRChas > LXRChas) {
        var LXRChaDif = data.LXRChas - LXRChas;
        var userId = "LXR"
        updateAllChas(userId, LXRChaDif);
        LXRChas = data.LXRChas;
    }
    if (data.JHAChas > JHAChas) {
        var JHAChaDif = data.JHAChas - JHAChas;
        var userId = "JHA"
        updateAllChas(userId, JHAChaDif);
        JHAChas = data.JHAChas;
    }
    if (data.SZFChas > SZFChas) {
        var SZFChaDif = data.SZFChas - SZFChas;
        var userId = "SZF"
        updateAllChas(userId, SZFChaDif);
        SZFChas = data.SZFChas;
    }
    if (data.JLChas > JLChas) {
        var JLChaDif = data.JLChas - JLChas;
        var userId = "JL"
        updateAllChas(userId, JLChaDif);
        JLChas = data.JLChas;
    }

    //CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

    if (data.aumChas < aumChas) {
        var userId = "AA"
        removeCha(userId, aumChas);
        aumChas = data.aumChas;
    }
    if (data.ninaChas < ninaChas) {
        var userId = "NN"
        removeCha(userId, ninaChas);
        ninaChas = data.ninaChas;
    }
    if (data.LKChas < LKChas) {
        var userId = "LK"
        removeCha(userId, LKChas);
        LKChas = data.LKChas;
    }
    if (data.LXRChas < LXRChas) {
        var userId = "LXR"
        removeCha(userId, LXRChas);
        LXRChas = data.LXRChas;
    }
    if (data.JHAChas < JHAChas) {
        var userId = "JHA"
        removeCha(userId, JHAChas);
        JHAChas = data.JHAChas;
    }
    if (data.SZFChas < SZFChas) {
        var userId = "SZF"
        removeCha(userId, SZFChas);
        SZFChas = data.SZFChas;
    }
    if (data.JLChas < JLChas) {
        var userId = "JL"
        removeCha(userId, JLChas);
        JLChas = data.JLChas;
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
    if (userOnline === "LK") {
        var togSpan = document.getElementById('LKspan');
        togSpan.style.background = "green";
    };
    if (userOnline === "LXR") {
        var togSpan = document.getElementById('LXRspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "JHA") {
        var togSpan = document.getElementById('JHAspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "SZF") {
        var togSpan = document.getElementById('SZFspan');
        togSpan.style.background = "green";

    };
    if (userOnline === "JL") {
        var togSpan = document.getElementById('JLspan');
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
    if (userOffline === "LK") {
        var togSpan = document.getElementById('LKspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "LXR") {
        var togSpan = document.getElementById('LXRspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "JHA") {
        var togSpan = document.getElementById('JHAspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "SZF") {
        var togSpan = document.getElementById('SZFspan');
        togSpan.style.background = "red";
    };
    if (userOffline === "JL") {
        var togSpan = document.getElementById('JLspan');
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
    if (data.userId === "LK") {
        var updatebox = document.getElementById('LKinput');
        updatebox.value = data.LKRes;
    }
    if (data.userId === "LXR") {
        var updatebox = document.getElementById('LXRinput');
        updatebox.value = data.LXRRes;
    }
    if (data.userId === "JHA") {
        var updatebox = document.getElementById('JHAinput');
        updatebox.value = data.JHARes;
    }
    if (data.userId === "SZF") {
        var updatebox = document.getElementById('SZFinput');
        updatebox.value = data.SZFRes;
    }
    if (data.userId === "JL") {
        var updatebox = document.getElementById('JLinput');
        updatebox.value = data.JLRes;
    }
});

sock.on('sendchallenge', data => {
    if (nickname === "TCR") {
        alert(data + " has called for a Challenge");
    }
});

sock.on('refreshall', data => {
    roundNum = data;
    var refreshIt = document.getElementById(nickname + "submitbtn");
    refreshIt.disabled = false;
    var clearIt = document.getElementById("LKinput");
    clearIt.value = '';
    clearIt = document.getElementById("LXRinput");
    clearIt.value = '';
    clearIt = document.getElementById("JHAinput");
    clearIt.value = '';
    clearIt = document.getElementById("SZFinput");
    clearIt.value = '';
    clearIt = document.getElementById("JLinput");
    clearIt.value = '';

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
    label1.innerHTML = userId;
    label1.style.width = "100px";
    //label1.style = "background:rgba(255, 255, 0, 0.3)"
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
    if (userId != nickname) {
        divCol1a.disabled = true;
    }

    var divCol1b = divRow.appendChild(document.createElement('button'));
    divCol1b.className = "btn btn-secondary";
    //divCol1b.style.width = "7%";
    divCol1b.setAttribute("id", userId + "submitbtn");
    divCol1b.innerHTML = "Submit"
    if (userId != nickname) {
        divCol1b.disabled = true;
    }
    divCol1b.addEventListener('click', function () {
        var result = document.getElementById(userId + "input").value;
        sock.emit('submit', { userId, result });
        divCol1b.disabled = true;
    });

    var divCol1c = divRow.appendChild(document.createElement('button'));
    divCol1c.className = "btn btn-warning";
    //divCol1b.style.width = "7%";
    divCol1c.setAttribute("id", userId + "callcha");
    divCol1c.innerHTML = "Challenge"
    if (userId != nickname) {
        divCol1c.disabled = true;
    }
    divCol1c.addEventListener('click', function () {
        sock.emit('challenge', userId);
    });

    var divCol3 = divRow.appendChild(document.createElement('div'));
    divCol3.className = "col3"
    divCol3.style.padding = "10px";
    divCol3.appendChild(createButtonGroup("btnGrp1", userId + "border", userId));

    var divCol4 = divRow.appendChild(document.createElement('div'));
    divCol4.setAttribute("id", userId + "chadiv");
    divCol4.className = "col4";
    //divCol4.style.padding = "10px";
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
    img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
    img.style = "width:55px;height:55px";
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
    btn1.innerHTML = "+Win"
    let btn2 = createDiv.appendChild(document.createElement('button'));
    btn2.setAttribute("id", "btn2")
    btn2.className = "btn btn-dark"
    btn2.innerHTML = "-Win"

    btn1.addEventListener('click', function () {
        sock.emit('addWin', userId);
    })
    btn2.addEventListener('click', function () {
        sock.emit('minusWin', userId);
    })

    if (nickname != "TCR") {
        //alert("hello")
        btn1.style.visibility = "hidden"
        btn2.style.visibility = "hidden"
    }
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
    chaBtn1.innerHTML = "+Challenge";
    //chaBtn1.disabled = "true";
    let chaBtn2 = createDiv.appendChild(document.createElement('button'));
    chaBtn2.setAttribute("id", userId + "chabtn2");
    chaBtn2.className = "btn btn-dark";
    chaBtn2.innerHTML = "-Challenge";

    chaBtn1.addEventListener('click', function () {
        sock.emit('addCha', userId);
    });

    chaBtn2.addEventListener('click', function () {
        sock.emit('minusCha', userId);
    });

    if (nickname != "TCR") {
        chaBtn1.style.visibility = "hidden";
        chaBtn2.style.visibility = "hidden";
    }



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
    img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
    img.style = "width:35px;height:35px";
    //chaCount += 1;
    img.setAttribute("id", userId + "cha" + chaCount);
    //alert(userId + "cha" + chaCount);
    //img.style.padding = "10px"
    addCha.appendChild(img);
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function createHrLine(rowNum) {
    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var createLine = divRow.appendChild(document.createElement('hr'));
    createLine.setAttribute("width", "1300px");
    return mainDiv;
}

function createBotBtn(rowNum) {
    var divRow = mainDiv.appendChild(document.createElement('div'));
    divRow.className = "row";
    divRow.setAttribute("id", rowNum);

    var botBtn = divRow.appendChild(document.createElement('button'));
    botBtn.setAttribute("id", userId + "botbtn");
    botBtn.className = "btn btn-success btn-lg";
    botBtn.innerHTML = "Next Round";
    botBtn.style.visibility = "hidden";
    if (nickname === "TCR") {
        botBtn.style.visibility = "visible";

        botBtn.addEventListener('click', function () {
            roundNum++;
            sock.emit('nextround', roundNum);
            var clearIt = document.getElementById("LKinput");
            clearIt.value = '';
            clearIt = document.getElementById("LXRinput");
            clearIt.value = '';
            clearIt = document.getElementById("JHAinput");
            clearIt.value = '';
            clearIt = document.getElementById("SZFinput");
            clearIt.value = '';
            clearIt = document.getElementById("JLinput");
            clearIt.value = '';

        });


    }

    return mainDiv;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function updateAllWins(userId, winDif) {
    if (userId === "AA") {
        counter = aumWins;
    }
    if (userId === "NN") {
        counter = ninaWins;
    }
    if (userId === "LK") {
        counter = LKWins;
    }
    if (userId === "LXR") {
        counter = LXRWins;
    }
    if (userId === "JHA") {
        counter = JHAWins;
    }
    if (userId === "SZF") {
        counter = SZFWins;
    }
    if (userId === "JL") {
        counter = JLWins;
    }

    for (var i = counter + 1; i < winDif + counter + 1; i++) {
        var displayWin = document.getElementById(userId + "border");
        var img = document.createElement('img');
        img.src = "https://cdn4.iconfinder.com/data/icons/trophy-and-awards-1/64/Icon_Star_Trophy_Awards_Gold-1024.png";
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
    if (userId === "LK") {
        counter = LKChas;
    }
    if (userId === "LXR") {
        counter = LXRChas;
    }
    if (userId === "JHA") {
        counter = JHAChas;
    }
    if (userId === "SZF") {
        counter = SZFChas;
    }
    if (userId === "JL") {
        counter = JLChas;
    }

    for (var i = counter + 1; i < chaDif + counter + 1; i++) {
        var addCha = document.getElementById(userId + "chadiv");
        var img = document.createElement('img');
        img.src = "https://lh3.googleusercontent.com/xpz43lDxs3mmfni85cCGkIX4GeKMsoC5RHDoLRxOpj28VggUjXnadGBq7Oh_TX4Hp7-cT68YfJhmh_LB-5RooPgxNhFn0NKSM1z6PKVwtLUmACeKct8Uo6N269krf5tg9KMOmf0y=w2400";
        img.style = "width:55px;height:55px";
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

/* function createNewLine() {
    var createDiv = document.createElement('div');
    createDiv.setAttribute("id", "blankdiv");
    createDiv.style.clear = "left";
    var createLine = createDiv.appendChild(document.createElement('hr'));
    createLine.setAttribute("width", "500px");
    return createDiv;
} */