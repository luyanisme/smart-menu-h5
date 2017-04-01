/**
 * Created by luyan on 2/20/17.
 */
var express = require('express');
var router = express.Router();
var socket_io = require('socket.io');

var casePayCtrl = require('../controller/CasePayCtrl.js');
var caseListCtrl = require('../controller/CaseListCtrl.js');

router.route('/').get(caseListCtrl.onShowCases).post(caseListCtrl.onGetOrders);
router.route('/getAllSpecials').get(caseListCtrl.onGetAllSpecials);
router.route('/payInfo').get(casePayCtrl.onShowPayInfo);

router.useSocket = function(server){
	var clients = [];
	var io = socket_io.listen(server);
	io.sockets.on('connection', function (socket) {

		socket.on('join', function (user) {
			//socket.user = user;
			clients.push(user);
			socket.emit('state', 'SERVER', true);
			socket.broadcast.emit('state', 'SERVER', true);
		});
		socket.on('getClients', function (msg) {
			console.log(clients.length);
			socket.emit('clients', clients, msg);
			socket.broadcast.emit('clients', clients, msg);
		});

	});
}

module.exports = router;