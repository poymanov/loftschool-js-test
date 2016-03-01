var linksList = document.querySelectorAll('.list__item-link');

for (var i = 0; i < linksList.length; i++) {
	linksList[i].addEventListener('click', function(e){
		event.preventDefault();

		parentHeader = this.parentElement;
		parentHeader.classList.toggle('list__arr-down');
		parentHeader.classList.toggle('list__arr-up');

		parentLi = parentHeader.parentElement;
		parentLi.classList.toggle('list__item-active');

		sublist = parentLi.querySelector('.sublist');

		if(sublist) {
			sublist.classList.toggle('sublist-show');
		}
	});
}