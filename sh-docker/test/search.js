module.exports={
	'@tags': ['search'],
	
	before(browser){
		browser.page.shopMain()
		.navigate()
		.waitForElementVisible('css selector', '@main', 'Главная')
		.assert.textContains('@main', 'Главная', 'Главная страница ок');
},
	after(browser){
	browser.end();
},
'Search for word': function(browser){
		let word = browser.globals.searchText;
		
		browser.page.shopMain()
		.search(word)
		
		.waitForElementVisible('css selector', '[class="card ml-1 mr-1 mt-2"]', 5000, 'Товары видны')
		.assert.textContains('.text-info[href^="/product/"]', word, 'Текст первой ссылки ok');
		
		browser.checkSearchingResult('.text-info[href^="/product/"]', word);
		
		},

};
