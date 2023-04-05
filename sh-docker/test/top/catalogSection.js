module.exports={
	//'@disabled': true,	
	before(browser){
		browser.page.shopMain()
		.navigate();
		
},
	after(browser){
	browser.end();
},
'catalogSection': function(browser){
		browser.page.shopMain()
		.section.catalogSection
		.waitForElementVisible('css selector', '@catalog', 'Каталог')
		.assert.textContains('@catalog', 'Каталог', 'Каталог ок')
		.waitForElementVisible('css selector', '@searchBar', 'Строка поиска ок');
		
	}
		
};
