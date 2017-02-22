/**
 * Created by luyan on 2/20/17.
 */
var express = require('express');
var router = express.Router();

var caseCategoryCtrl = require('../controller/CaseCategoryCtrl.js');
var caseListCtrl = require('../controller/CaseListCtrl.js');

router.route('/').get(caseCategoryCtrl.onShowCategory);
router.route('/showCases').get(caseListCtrl.onShowCases);

module.exports = router;