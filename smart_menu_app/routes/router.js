/**
 * Created by luyan on 2/20/17.
 */
var express = require('express');
var router = express.Router();

var caseCategoryCtrl = require('../controller/CaseCategoryCtrl.js');
var caseListCtrl = require('../controller/CaseListCtrl.js');

router.route('/').get(caseListCtrl.onShowCases);
router.route('/showCases').get(caseListCtrl.onShowCases);
router.route('/getAllSpecials').get(caseListCtrl.onGetAllSpecials);
router.route('/test').get(caseListCtrl.onShowTest);

module.exports = router;