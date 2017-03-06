/**
 * Created by luyan on 2/21/17.
 */
exports.onShowCases = function (req, res) {
	res.render("case_menu_list", {title: '特色菜'});
};

exports.onShowTest = function (req, res) {
	res.render("test", {title: '特色菜'});
};