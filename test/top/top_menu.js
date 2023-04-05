module.exports={
		
	before(browser){
		browser.page.shopMain()
		.navigate();
		
},
	after(browser){
	browser.end();
},
'Top menu': function(browser){
		browser.page.shopMain()
		.section.topMenu
		.waitForElementVisible('css selector', '@main', 'Главная')
		.assert.textContains('@main', 'Главная', 'Главная страница ок')
		.waitForElementVisible('css selector', '@cart', 'Значок Корзина')
		.waitForElementVisible('css selector', '@favorites', 'Значок Избранное')
		.waitForElementVisible('css selector', '@auth', 'Значок Войти')
		.assert.textContains('@auth', 'Войти');
	}
		
};
