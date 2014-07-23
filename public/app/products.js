alt
.factory('productObject', function($resource) {
	var ProductsResource = $resource('/api/products/:id', {_id: "@id"}, {
  	update: {method: 'PUT', isArray: false}
  });
	
	return ProductsResource;
})
.factory('filterService', function(){
	return {
		activeFilters: {}, 
		searchText: ''
	};
})
.directive('myRepeatDirective', function() {
  return function(scope, element, attrs) {
    angular.element(element).css('color','blue');
    if (scope.$last){
      $('.tag-trigger').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).parents('.tag').find('.tag_info').fadeIn(500, 'easeOutExpo');
      }, function() {
        /* Stuff to do when the mouse leaves the element */

      });

      $('.tag .tag_info').hover(function() {
        /* Stuff to do when the mouse enters the element */

      }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).fadeOut(500, 'easeOutExpo');
      });

      $('.tag').hover(function() {
        /* Stuff to do when the mouse enters the element */

      }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).find('.tag_info').hide();
      });
    }
  };
})
.directive('follow', function() {
  return function(scope, element, attrs) {
    $(".follow").click( function(event){
    event.preventDefault();
    console.log(this);
    $('#follow').stop().fadeIn(200);
    $('#follow').addClass("popup");
    return false;
  });
    $(".close").click(function(){
      $('#follow').stop().fadeOut(200);
    $('#follow').removeClass("popup");
    })
  };  
})
.filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});