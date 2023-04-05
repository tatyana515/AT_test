const pageCommands = {
  search(word) {
    this
      	.waitForElementVisible('css selector', '@searchBar')
	.setValue('@searchBar', [word, this.api.Keys.ENTER])
	.pause(2000);
	return this; 
  }
};

module.exports = {
  url: 'http://testshop.sedtest-school.ru/',
  commands: [pageCommands],
  elements: {
	main: '#nav_link_main',
	searchBar: {selector:'input.form-control[name=search]'},
	product: '.text-info[href^="/product/"]'
  },
  sections:{
    topMenu: {
      selector: '#navbarCollapse',
      elements: {
        main: '#nav_link_main',
		cart: '[href="/mycart/"]',
		favorites: '[href="/myfavorites/"]',
		auth: '[href="/users/auth/"]'
       }
	},
	catalogSection: {
		selector: 'div.container > div:nth-child(1)',
		elements: {
			catalog: 'div.container > div:nth-child(1) > div.col-md-3.mt-2 > h4',
			searchBar: {selector:'input.form-control[name=search]'}
		}
	}
    
  }
}
