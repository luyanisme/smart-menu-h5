/**
 * Created by luyan on 2/21/17.
 */
exports.onShowCases = function (req, res) {
	res.render("case_menu_list", {title: '新区餐厅'});
};

exports.onShowTest = function (req, res) {
	res.render("test", {title: '特色菜'});
};

exports.onGetAllSpecials = function(req, res){
	var categories = [{
		id: 1,
		name: '特色菜',
		specials : [{
			id:111,
			name:'红烧河豚',
			price:123,
			img:'hetun.jpg',
			orders: 1234,
			orderNum:0
		},
			{
				id:112,
				name:'清蒸鲈鱼',
				price:85,
				img:'luyu.jpg',
				orders: 1004,
				orderNum:0
			},
			{
				id:113,
				name:'清蒸鸦片鱼',
				price:90,
				img:'yapianyu.jpg',
				orders: 998,
				orderNum:0
			},
			{
				id:111,
				name:'红烧河豚',
				price:123,
				img:'hetun.jpg',
				orders: 1234,
				orderNum:0
			},
			{
				id:112,
				name:'清蒸鲈鱼',
				price:85,
				img:'luyu.jpg',
				orders: 1004,
				orderNum:0
			},
			{
				id:113,
				name:'清蒸鸦片鱼',
				price:90,
				img:'yapianyu.jpg',
				orders: 998,
				orderNum:0
			}]
	},
		{
			id: 2,
			name: '炒菜',
			specials:[{
				id:114,
				name:'毛肚炒菜',
				price:35,
				img:'maodu.jpg',
				orders: 556,
				orderNum:0
			},
				{
					id:115,
					name:'地三鲜',
					price:25,
					img:'disanxian.jpg',
					orders: 678,
					orderNum:0
				},
				{
					id:114,
					name:'毛肚炒菜',
					price:35,
					img:'maodu.jpg',
					orders: 556,
					orderNum:0
				},
				{
					id:115,
					name:'地三鲜',
					price:25,
					img:'disanxian.jpg',
					orders: 678,
					orderNum:0
				},
				{
					id:114,
					name:'毛肚炒菜',
					price:35,
					img:'maodu.jpg',
					orders: 556,
					orderNum:0
				},
				{
					id:115,
					name:'地三鲜',
					price:25,
					img:'disanxian.jpg',
					orders: 678,
					orderNum:0
				}]
		},
		{
			id: 3,
			name: '素菜',
			specials:[{
				id:116,
				name:'芦蒿',
				price:15,
				img:'luhao.jpg',
				orders: 1002,
				orderNum:0
			}]
		},
		{
			id: 4,
			name: '煲汤',
			specials:[{
				id:117,
				name:'瓦罐鸡',
				price:85,
				img:'waguanji.jpg',
				orders: 345,
				orderNum:0
			}]
		}];
	res.send({msg: '请求成功!', status: 0, categories:categories});
}