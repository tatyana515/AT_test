module.exports = {
  command: function(selectorPart, target) {
    return this
      .elements('css selector',  `.card selectorPart`, function(result) {
		let arr=result.value;
		for(let i=1; i<=arr.length; i++){
			this.verify.textContains(`.card:nth-child(${i}) selectorPart`, target, `Текст ссылки ${i} ок`);
		}
	});
  }
};



