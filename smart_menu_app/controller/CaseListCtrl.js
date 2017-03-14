/**
 * Created by luyan on 2/21/17.
 */
exports.onShowCases = function (req, res) {
	var categories = [{
		id: 1,
		name: '特色菜',
		specials : [{
			id:111,
			name:'红烧河豚',
			price:123,
			img:'images/hetun.jpg',
			orderNums: 1234
		},
			{
				id:112,
				name:'清蒸鲈鱼',
				price:85,
				img:'images/luyu.jpg',
				orderNums: 1004
			},
			{
				id:113,
				name:'清蒸鸦片鱼',
				price:90,
				img:'images/yapianyu.jpg',
				orderNums: 998
			}]
	},
		{
			id: 2,
			name: '炒菜',
			specials:[{
				id:114,
				name:'毛肚炒菜',
				price:35,
				img:'images/maodu.jpg',
				orderNums: 556
			},
				{
					id:115,
					name:'地三鲜',
					price:25,
					img:'images/disanxian.jpg',
					orderNums: 678
				}]
		},
		{
			id: 3,
			name: '素菜',
			specials:[{
				id:116,
				name:'芦蒿',
				price:15,
				img:'images/luhao.jpg',
				orderNums: 1002
			}]
		},
		{
			id: 4,
			name: '煲汤',
			specials:[{
				id:117,
				name:'瓦罐鸡',
				price:85,
				img:'images/waguanji.jpg',
				orderNums: 345
			}]
		}];

	res.render("case_menu_list", {title: '菜谱', categories : categories});
};

exports.onShowTest = function (req, res) {
	res.render("test", {title: '特色菜'});
};