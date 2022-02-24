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
var connectedUser = '';
var aumIn = false;
var ninaIn = false;
var aumWins = 0;
var aumChas = 1;
var ninaWins = 0;
var ninaChas = 1;
var aumRes = 0;
var ninaRes = 0;
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

io.on('connection', (sock) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('newuser', (data) => {
        console.log(data);
        if (data === "Aum") {
            aumIn = true;
            sock.id = "Aum";

        }
        if (data === "Nina") {
            ninaIn = true;
            sock.id = "Nina";
        }
        io.emit('updateallwins', { aumWins, ninaWins });

    });

    sock.on('disconnect', () => {
        if (sock.id === "Aum") {
            aumIn = false;
            console.log("Aum disconnected");
        }
        if (sock.id === "Nina") {
            ninaIn = false;
            console.log("Nina disconnected");
        }

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addWin', (data) => {
        if (data === "AA") {
            aumWins++;
            console.log(aumWins);
        }
        if (data === "NN") {
            ninaWins++;
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
    });

    sock.on('minusCha', (data) => {
        if (data === "AA") {
            aumChas--;
        }
        if (data === "NN") {
            ninaChas--;
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
    });

});


setInterval(function () {
    if (aumIn === true) {
        io.emit("transmituser", "Aum");
    }
    if (ninaIn === true) {
        io.emit("transmituser", "Nina");
    }
    if (aumIn === false) {
        io.emit('userdisconnect', "Aum");
    }
    if (ninaIn === false) {
        io.emit("userdisconnect", "Nina");
    }
    io.emit('updateallwins', { aumWins, ninaWins });
    io.emit('updateallchas', { aumChas, ninaChas });
    

    /* io.emit('updateAA', aumWins);
    io.emit('updateNN', ninaWins); */

}, 500);


