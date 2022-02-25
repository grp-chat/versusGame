const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
var roundNum = 1;
var connectedUser = '';
var aumIn = false;
var aumWins = 0;
var aumChas = 1;
var aumRes = 0;

var ninaIn = false;
var ninaWins = 0;
var ninaChas = 1;
var ninaRes = 0;

var LKIn = false;
var LKWins = 0;
var LKChas = 1;
var LKRes = 0;

var LXRIn = false;
var LXRWins = 0;
var LXRChas = 1;
var LXRRes = 0;

var JHAIn = false;
var JHAWins = 0;
var JHAChas = 1;
var JHARes = 0;

var SZFIn = false;
var SZFWins = 0;
var SZFChas = 1;
var SZFRes = 0;

var JLIn = false;
var JLWins = 0;
var JLChas = 1;
var JLRes = 0;

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

io.on('connection', (sock) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('newuser', (data) => {
        if (data === "Aum") {
            aumIn = true;
            sock.id = "Aum";
        }
        if (data === "Nina") {
            ninaIn = true;
            sock.id = "Nina";
        }
        if (data === "LK") {
            LKIn = true;
            sock.id = "LK";
        }
        if (data === "LXR") {
            LXRIn = true;
            sock.id = "LXR";
        }
        if (data === "JHA") {
            JHAIn = true;
            sock.id = "JHA";
        }
        if (data === "SZF") {
            SZFIn = true;
            sock.id = "SZF";
        }
        if (data === "JL") {
            JLIn = true;
            sock.id = "JL";
        }
        
        io.emit('updateallwins', { aumWins, ninaWins });

    });

    sock.on('disconnect', () => {
        if (sock.id === "Aum") {
            aumIn = false;
        }
        if (sock.id === "Nina") {
            ninaIn = false;
        }
        if (sock.id === "LK") {
            LKIn = false;
        }
        if (sock.id === "LXR") {
            LXRIn = false;
        }
        if (sock.id === "JHA") {
            JHAIn = false;
        }
        if (sock.id === "SZF") {
            SZFIn = false;
        }
        if (sock.id === "JL") {
            JLIn = false;
        }

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addWin', (data) => {
        if (data === "AA") {
            aumWins++;
        }
        if (data === "NN") {
            ninaWins++;
        }
        if (data === "LK") {
            LKWins++;
        }
        if (data === "LXR") {
            LXRWins++;
        }
        if (data === "JHA") {
            JHAWins++;
        }
        if (data === "SZF") {
            SZFWins++;
        }
        if (data === "JL") {
            JLWins++;
        }
    });
    sock.on('minusWin', (data) => {
        if (data === "AA") {
            aumWins--;
            //console.log("did this run? " + data + " " + aumWins);
        }
        if (data === "NN") {
            ninaWins--;
        }
        if (data === "LK") {
            LKWins--;
        }
        if (data === "LXR") {
            LXRWins--;
        }
        if (data === "JHA") {
            JHAWins--;
        }
        if (data === "SZF") {
            SZFWins--;
        }
        if (data === "JL") {
            JLWins--;
        }

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addCha', (data) => {
        if (data === "AA") {
            aumChas++;
        }
        if (data === "NN") {
            ninaChas++;
        }
        if (data === "LK") {
            LKChas++;
        }
        if (data === "LXR") {
            LXRChas++;
        }
        if (data === "JHA") {
            JHAChas++;
        }
        if (data === "SZF") {
            SZFChas++;
        }
        if (data === "JL") {
            JLChas++;
        }
    });

    sock.on('minusCha', (data) => {
        if (data === "AA") {
            aumChas--;
        }
        if (data === "NN") {
            ninaChas--;
        }
        if (data === "LK") {
            LKChas--;
        }
        if (data === "LXR") {
            LXRChas--;
        }
        if (data === "JHA") {
            JHAChas--;
        }
        if (data === "SZF") {
            SZFChas--;
        }
        if (data === "JL") {
            JLChas--;
        }
    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('submit', (data) => {
        if (data.userId === "AA") {
            aumRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , aumRes});
        }
        if (data.userId === "NN") {
            ninaRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , ninaRes});
        }
        if (data.userId === "LK") {
            LKRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , LKRes});
        }
        if (data.userId === "LXR") {
            LXRRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , LXRRes});
        }
        if (data.userId === "JHA") {
            JHARes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , JHARes});
        }
        if (data.userId === "SZF") {
            SZFRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , SZFRes});
        }
        if (data.userId === "JL") {
            JLRes = data.result;
            var userId = data.userId;
            io.emit('updateallresults', {userId , JLRes});
        }
    });

    sock.on('challenge', (data) => {   
            var userId = data;
            io.emit('sendchallenge', userId);
            
    });

    sock.on('nextround', (data) => {
        roundNum = data;
        io.emit('refreshall', roundNum);
    });

});


setInterval(function () {
    if (aumIn === true) {
        io.emit("transmituser", "Aum");
    }
    if (ninaIn === true) {
        io.emit("transmituser", "Nina");
    }
    if (LKIn === true) {
        io.emit("transmituser", "LK");
    }
    if (LXRIn === true) {
        io.emit("transmituser", "LXR");
    }
    if (JHAIn === true) {
        io.emit("transmituser", "JHA");
    }
    if (SZFIn === true) {
        io.emit("transmituser", "SZF");
    }
    if (JLIn === true) {
        io.emit("transmituser", "JL");
    }
    //dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

    if (aumIn === false) {
        io.emit('userdisconnect', "Aum");
    }
    if (ninaIn === false) {
        io.emit("userdisconnect", "Nina");
    }
    if (LKIn === false) {
        io.emit('userdisconnect', "LK");
    }
    if (LXRIn === false) {
        io.emit("userdisconnect", "LXR");
    }
    if (JHAIn === false) {
        io.emit("userdisconnect", "JHA");
    }
    if (SZFIn === false) {
        io.emit("userdisconnect", "SZF");
    }
    if (JLIn === false) {
        io.emit("userdisconnect", "JL");
    }


    io.emit('updateallwins', { aumWins, ninaWins, LKWins, LXRWins, JHAWins, SZFWins, JLWins });
    io.emit('updateallchas', { aumChas, ninaChas, LKChas, LXRChas, JHAChas, SZFChas, JLChas });
    

    /* io.emit('updateAA', aumWins);
    io.emit('updateNN', ninaWins); */

}, 500);


