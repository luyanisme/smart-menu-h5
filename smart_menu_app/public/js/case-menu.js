/**
 * Created by luyan on 3/14/17.
 */
/*存放已点商品的数组*/
var orderSpecials = [];
var categoryIndex = 0;//记录当前是第几个选项
var totalOrderNums = 0;//购买商品的总数
var isOrdered = false;//是否在已选界面

function initDatas() {
	/*初始化左边的栏目*/
	var leftHtml = '';
	categories.forEach(function (category) {
		leftHtml += '<li class="left-col-item">' +
		'<div class="ui-list-info" style="margin-left: 15px">' +
		'<h4 class="ui-nowrap" style="color: #ffffff">' + category.name + '</h4>' +
		'</div>'
		'</li>'
	});
	$(".left_col ul").html(leftHtml);

	///*初始化右边的栏目*/
	//var rightHtml = '';
	//var category = categories[0];
	//category.specials.forEach(function (special) {
	//	rightHtml += '<li class="ui-border-t">' +
	//	'<div class="ui-list-img ui-tag-hot">' +
	//	'<span id="case_img" style="background-image:url(' + special.img + ');"></span>' +
	//	'</div>' +
	//	'<div class="ui-list-info">' +
	//	'<h4 class="ui-nowrap">' + special.name + '</h4>' +
	//	'<h4 class="ui-nowrap" style="color: #FF5E24;">' + special.price + '.0￥</h4>' +
	//	'<h6 class="ui-nowrap">' + special.orders + '人点过</h6>' +
	//	'</div>' +
	//	'<div class="ui-list-add-btn">' +
	//	'<img src="icons/add_icon.png">' +
	//	'</div><h4 class="case_num_h">' + special.orderNum + '</h4>' +
	//	'<div class="ui-list-remove-btn">' +
	//	'<img src="icons/remove_icon.png">' +
	//	'</div>' +
	//	'</li>'
	//});
	$(".right_col div").html(createRightE(categories));
	mrightScroll.refresh();

	/*第一个为选中状态*/
	$(".left_col_ul li:first-child").addClass("left-item-selected");
	$(".left_col_ul li:first-child div h4").css('color', '#000000');
}

/*初始化右边的栏目*/
function createRightE(categories) {
	var rightHtml = '';

	for (var i=0;i<categories.length;i++)
	{
		var category = categories[i];
		rightHtml += '<div id="section_'+category.id+'" class="header-section" style="background-color: #F8F8F8">'+ '' +
		'<h4>'+category.name+'</h4></div>'
		+ '<ul class="ui-list right_col_ul" id="ul_'+ i +'">'
		category.specials.forEach(function (special) {
			rightHtml += '<li class="ui-border-t">' +
			'<div class="ui-list-img ui-tag-hot">' +
			'<span id="case_img" style="background-image:url(' + special.img + ');"></span>' +
			'</div>' +
			'<div class="ui-list-info">' +
			'<h4 class="ui-nowrap">' + special.name + '</h4>' +
			'<h4 class="ui-nowrap" style="color: #FF5E24;">' + special.price + '.0￥</h4>' +
			'<h6 class="ui-nowrap">' + special.orders + '人点过</h6>' +
			'</div>' +
			'<div class="ui-list-add-btn">' +
			'<img src="icons/add_icon.png">' +
			'</div><h4 class="case_num_h">' + special.orderNum + '</h4>' +
			'<div class="ui-list-remove-btn">' +
			'<img src="icons/remove_icon.png">' +
			'</div>' +
			'</li>'
		});
	}

	//categories.forEach(function (category) {
	//
	//});
	rightHtml += '</ul>'
	return rightHtml;
}

/*将导航栏的高度和底部结算栏的高度去掉*/
var headBarHeight = $('.ui-header').height();
var footerHeight = $('.ui-footer').height();
$('.left_col').css('height', $(window).height() - headBarHeight - footerHeight);
$('.right_col').css('height', $(window).height() - headBarHeight - footerHeight);

var mleftScroll;
var mrightScroll;
var orderGoodsScroll;
mleftScroll = new IScroll('.left_col', {
	preventDefault: false,
	hScrollbar: false,
	vScroll: true,
	hideScrollbar: true //是否隐藏滚动条
});
mrightScroll = new IScroll('.right_col', {
	preventDefault: false,
	hScrollbar: false,
	vScroll: true,
	hideScrollbar: true //是否隐藏滚动条
});

$('.left_col_ul').on('tap', '.left-col-item', function () {
	if (categoryIndex == $(this).index()) {
		return;
	}
	var currentThis = this;
	$(".left_col_ul li").each(function () {
		if (currentThis == this) {
			$(this).addClass("left-item-selected");
			$(this).find('h4').css('color', '#000000');
		} else {
			$(this).removeClass("left-item-selected");
			$(this).find('h4').css('color', '#ffffff');
		}
	});

	categoryIndex = $(this).index();
var category = categories[$(this).index()];
	//var category = categories[$(this).index()];
	//$(".right_col ul").html(outputRightHtml(category));
	mrightScroll.scrollToElement(document.querySelector("#section_"+category.id));
	mrightScroll.refresh();
});

$('.ui-list-add-btn').live('tap', function () {
	totalOrderNums++;
	var index = $(this).parent().parent().attr('id').replace(/[^0-9]+/ig,"");
	categoryIndex = index;
	var special = isOrdered ? orderSpecials[$(this).parent().index()] : categories[index].specials[$(this).parent().index()];
	special.orderNum++;
	if (!isOrdered) {
		special.rowIndex = $(this).parent().index();
		/*选中li的index*/
		special.cateIndex = categoryIndex;//选中的菜品分类

	}
	if (orderSpecials.contain(special) == false) {
		orderSpecials.push(special);
	}

	if (totalOrderNums > 0) {
		$('.ui-badge').css('display', 'block');
		$('.ui-badge').html(totalOrderNums);
	}
	var nums = $(this).parent().find('.case_num_h').text();
	nums = parseInt(nums);
	nums = nums + 1;
	$(this).parent().find('.case_num_h').css('display', 'block');
	$(this).parent().find('.case_num_h').text(nums);
	$(this).parent().find('.ui-list-remove-btn').css('display', 'block');
	if (isOrdered) {
			$(".right_col div").find("#ul_"+special.cateIndex+" li").eq(special.rowIndex).find('.case_num_h').text(nums);
	}
});

$('.ui-list-remove-btn').live('tap', function () {
	totalOrderNums--;
	var index = $(this).parent().parent().attr('id').replace(/[^0-9]+/ig,"");
	categoryIndex = index;
	var special = isOrdered ? orderSpecials[$(this).parent().index()] : categories[index].specials[$(this).parent().index()];
	special.orderNum--;
	$('.ui-badge').html(totalOrderNums);

	var nums = $(this).parent().find('.case_num_h').text();
	nums = nums - 1;
	if (nums == 0) {
		$(this).parent().find('.case_num_h').css('display', 'none');
		$(this).css('display', 'none');
		orderSpecials.remove(special);
		if (isOrdered) {
			$(this).parent().remove();
			orderGoodsScroll.refresh();
		}
	}

	$(this).parent().find('.case_num_h').text(nums);
	if (isOrdered) {
			if (nums == 0) {
				$(".right_col div").find("#ul_"+special.cateIndex+" li").eq(special.rowIndex).find('.case_num_h').css('display', 'none');
				$(".right_col div").find("#ul_"+special.cateIndex+" li").eq(special.rowIndex).find('.ui-list-remove-btn').css('display', 'none');
			}
			$(".right_col div").find("#ul_"+special.cateIndex+" li").eq(special.rowIndex).find('.case_num_h').text(nums);
	}
	if (totalOrderNums == 0) {
		$('.ui-badge').css('display', 'none');
		if (isOrdered) {
			onTapShadow();
		}
	}
});

$('body').bind("touchmove", function (e) {
	e.preventDefault();
});

/*点击购物车*/
$('.cart').on('tap', function () {
	isOrdered = true;
	if (orderSpecials.length == 0) {
		return;
	}
	$('.shadow-bg').css('display', 'block');
	/*禁止滑动*/
	$('.shadow-bg').bind("touchmove", function (e) {
		e.preventDefault();
	});

	$('.order_goods').css('display', 'block');

	var html = '';
	orderSpecials.forEach(function (special) {
		html += '<li class="ui-border-t">' +
		'<h4 class="dot_character">&#8226;</h4>' +

		'<div class="ui-list-info" style="margin-left: 10px">' +
		'<h4 class="ui-nowrap">' + special.name + '</h4>' +
		'</div>' +
		'<h4 class="order_price">' + '￥' + special.price + '.0' + '</h4>' +

		'<div class="ui-list-add-btn">' +
		'<img src="icons/add_icon.png"/>' +
		'</div>' +
		'<h4 class="case_num_h" style="display: block;">' + special.orderNum + '</h4>' +

		'<div class="ui-list-remove-btn" style="display: block;">' +
		'<img src="icons/remove_icon.png">' +
		'</div>' +
		'</li>'
	});
	$(".order_goods ul").html(html);

	orderGoodsScroll = new IScroll('.order_goods', {
		preventDefault: false,
		hScrollbar: false,
		vScroll: true,
		hideScrollbar: true //是否隐藏滚动条
	});
});

/*点击背景*/
$('.shadow-bg').on('tap', function () {
	onTapShadow();
});

function onTapShadow(){
	isOrdered = false;
	$('.order_goods').css('display', 'none');
	$('.shadow-bg').css('display', 'none');
	orderGoodsScroll = null;
};

function outputRightHtml(category) {
	var html = '';
	category.specials.forEach(function (special) {
		html += '<li class="ui-border-t">' +
		'<div class="ui-list-img ui-tag-hot">' +
		'<span id="case_img" style="background-image:url(' + special.img + ');"></span>' +
		'</div>' +
		'<div class="ui-list-info">' +
		'<h4 class="ui-nowrap">' + special.name + '</h4>' +
		'<h4 class="ui-nowrap" style="color: #FF5E24;">' + special.price + '.0￥</h4>' +
		'<h6 class="ui-nowrap">' + special.orders + '人点过</h6>' +
		'</div>' +
		'<div class="ui-list-add-btn">' +
		'<img src="icons/add_icon.png">' +
		'</div><h4 class="case_num_h" style="display: ' + (special.orderNum > 0 ? "block" : "none") + '">' + special.orderNum + '</h4>' +
		'<div class="ui-list-remove-btn" style="display: ' + (special.orderNum > 0 ? "block" : "none") + '">' +
		'<img src="icons/remove_icon.png">' +
		'</div>' +
		'</li>'
	});
	return html;
}

Array.prototype.remove = function (val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};

Array.prototype.contain = function (val) {
	var index = this.indexOf(val);
	if (index != -1) {
		return true;
	} else {
		return false;
	}
};

