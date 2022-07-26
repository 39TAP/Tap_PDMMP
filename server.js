const Express = require('express');
const Websocket = require('ws');
const FileSystem = require('fs');
const {keyboard, Key} = require("@nut-tree/nut-js");

var App = Express();
App.use('/', Express.static('.'));
App.get('/', async(req, res) => {
    res.send(FileSystem.readFileSync('diva.html', 'utf-8'));
})
App.get('/overlay', async(req, res) => {
    res.send(FileSystem.readFileSync('diva.html', 'utf-8'));
})

keyboard.config.autoDelayMs = 0;

var Clients = {};
var Server = new Websocket.Server({port: 8000});
Server.on('connection', async(ws) => {
    var Index;
    ws.on('message', (e) => {
        var data = e.toString('utf-8')
        Object.values(Clients).forEach((client) => {
            client.send(data)
        })
        if (data.split('-')[0] == 'down' ) {
            keyboard.pressKey(Key[data.split('-')[1].toUpperCase()]);
        } else if (data.split('-')[0] == 'up' ) {
            keyboard.releaseKey(Key[data.split('-')[1].toUpperCase()]);
        } else if (data.split('-')[0] == 'type') {
            if (data.split('-')[1] == 'overlay') {
                Index = Clients.length
                Clients[Index] = ws;
            }
        }
    });
    ws.on('close', () => {
        if (!!Index) {
            Clients[Index] = null;
        }
    })
})

App.listen(80, () => {});