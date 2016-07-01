(function(){
	var app = angular.module('uberfuli', ['uberfuli-modules']);

	app.controller('FuliController', function(){
		this.fulis = fuliList;
		this.setSession = function(num) {
			//localStorage.removeItem("whichItem");
			localStorage.setItem("whichItem", num);
		};
		this.getSession = function() {
			return localStorage.getItem("whichItem");
		}
	});

	var fuliList = [
		{
			id: 1,
			smallPic: './img/freetrip.jpg',
			bigPic: './img/freetrip-big.jpg',
			compName: 'Uber',
			fuliTitle1: '欢迎加入Uber福利',
			fuliTitle2: '点我优享乘车金',
			discountNum: '15元',
			discountType: '每天',
			link: './detail.html',
			attention: '第一个福利：兑换后优惠码将自动打入您的优步账号，并会在您的下一个行程中自动使用。如账户内已有其它未使用优惠码，兑换后将于下个行程中优先使用您最新兑换的优惠码。'
		},
		{
			id: 2,
			smallPic: './img/coupon.jpg',
			bigPic: './img/coupon-big.jpg',
			compName: 'Uber',
			fuliTitle1: '欢迎加入Uber福利',
			fuliTitle2: '点我优享折扣券',
			discountNum: '8.5',
			discountType: '折',
			link: './detail.html',
			attention: '第二个福利：兑换后优惠码将自动打入您的优步账号，并会在您的下一个行程中自动使用。如账户内已有其它未使用优惠码，兑换后将于下个行程中优先使用您最新兑换的优惠码。'

		}
	];

})();