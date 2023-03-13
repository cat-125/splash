$(function(){
	$('.selectmenu > button').click(e => {
		let btn = $(e.currentTarget);
		let menu = btn.parent();
		menu.find('button').removeClass('active');
		btn.addClass('active')
		menu.val(btn.val());
		menu.trigger('select').trigger('change');
	});
});