alt
.controller('indexCtrl', function($scope){
	$scope.site = {
		name: 'alt',
		description: 'a lovely thing'
	};
})
.controller('searchCtrl', function($scope){
  $scope.searches = [
      {
        "id":"20",
        "name":"Black Cotton Scarf",
        "image":"images/thumnail2.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"19",
        "name":"Black Cotton Scarf",
        "image":"images/thumnail9.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"18",
        "name":"Red Cotton Scarf",
        "image":"images/thumnail8.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"shoe",
        "likeCount":1
      },
      {
        "id":"17",
        "name":"Black Cotton Scarf",
        "image":"images/thumnail7.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"16",
        "name":"Black Cotton Scarf",
        "image":"images/thumnail6.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"15",
        "name":"Red Cotton Scarf",
        "image":"images/thumnail5.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"shoe",
        "likeCount":1
      },
      {
        "id":"14",
        "name":"Blue Cotton Scarf",
        "image":"images/thumnail4.jpg",
        "designer":"Martyn Bal",
        "price":20.00,
        "color":"red",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"13","name":"Grey Cotton Scarf",
        "image":"images/thumnail3.jpg",
        "designer":"Martyn Bal",
        "price":10.00,
        "color":"red",
        "type":"shoe",
        "likeCount":5
      },
      {
        "id":"12",
        "name":"White Cotton Scarf",
        "image":"images/thumnail12.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"11",
        "name":"White Cotton Scarf",
        "image":"images/thumnail11.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"10",
        "name":"White Cotton Scarf",
        "image":"images/thumnail10.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"9",
        "name":"White Cotton Scarf",
        "image":"images/thumnail9.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"bag",
        "likeCount":0
      },
      {
        "id":"8",
        "name":"White Cotton Scarf",
        "image":"images/thumnail8.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"7",
        "name":"White Cotton Scarf",
        "image":"images/thumnail7.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"shoe",
        "likeCount":1
      },
      {
        "id":"6",
        "name":"White Cotton Scarf",
        "image":"images/thumnail6.jpg",
        "designer":"Martyn Bal",
        "price":20.00,
        "color":"red",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"5","name":"White Cotton Scarf",
        "image":"images/thumnail5.jpg",
        "designer":"Martyn Bal",
        "price":10.00,
        "color":"red",
        "type":"shoe",
        "likeCount":5
      },
      {
        "id":"4",
        "name":"White Cotton Scarf",
        "image":"images/thumnail4.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"3",
        "name":"White Cotton Scarf",
        "image":"images/thumnail3.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"2",
        "name":"White Cotton Scarf",
        "image":"images/thumnail2.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"1",
        "name":"White Cotton Scarf",
        "image":"images/thumnail1.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"bag",
        "likeCount":0
      }
    ];
})
.controller('productsCtrl', function($scope, productObject, filterService) {
    $scope.filterService = filterService;
    //$scope.products = productObject.query();
    $scope.products = [
      {
        "id":"20",
        "name":"Black Cotton Scarf",
        "image":"images/img20.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"appeal",
        "gender":"y",
        "likeCount":3
      },
      {
        "id":"19",
        "name":"Black Cotton Scarf",
        "image":"images/img19.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"appeal",
        "gender":"x",
        "likeCount":3
      },
      {
        "id":"18",
        "name":"Red Cotton Scarf",
        "image":"images/img18.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"bag",
        "gender":"y",
        "likeCount":1
      },
      {
        "id":"17",
        "name":"Black Cotton Scarf",
        "image":"images/img17.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "gender":"x",
        "likeCount":3
      },
      {
        "id":"16",
        "name":"Black Cotton Scarf",
        "image":"images/img16.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "type":"jewelly",
        "gender":"y",
        "likeCount":3
      },
      {
        "id":"15",
        "name":"Red Cotton Scarf",
        "image":"images/img15.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"appeal",
        "gender":"x",
        "likeCount":1
      },
      {
        "id":"14",
        "name":"Blue Cotton Scarf",
        "image":"images/img14.jpg",
        "designer":"Martyn Bal",
        "price":20.00,
        "color":"red",
        "type":"accessory",
        "gender":"x",
        "likeCount":0
      },
      {
        "id":"13","name":"Grey Cotton Scarf",
        "image":"images/img13.jpg",
        "designer":"Martyn Bal",
        "price":10.00,
        "color":"red",
        "type":"accessory",
        "gender":"x",
        "likeCount":5
      },
      {
        "id":"12",
        "name":"White Cotton Scarf",
        "image":"images/img12.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"appeal",
        "gender":"y",
        "likeCount":0
      },
      {
        "id":"11",
        "name":"White Cotton Scarf",
        "image":"images/img11.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"bag",
        "gender":"y",
        "likeCount":0
      },
      {
        "id":"10",
        "name":"White Cotton Scarf",
        "image":"images/img10.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"shoe",
        "gender":"y",
        "likeCount":0
      },
      {
        "id":"9",
        "name":"White Cotton Scarf",
        "image":"images/img9.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"appeal",
        "gender":"x",
        "likeCount":0
      },
      {
        "id":"8",
        "name":"White Cotton Scarf",
        "image":"images/img8.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"bag",
        "gender":"y",
        "likeCount":3
      },
      {
        "id":"7",
        "name":"White Cotton Scarf",
        "image":"images/img7.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"appeal",
        "gender":"y",
        "likeCount":1
      },
      {
        "id":"6",
        "name":"White Cotton Scarf",
        "image":"images/img6.jpg",
        "designer":"Martyn Bal",
        "price":20.00,
        "color":"red",
        "type":"accessory",
        "gender":"y",
        "likeCount":0
      },
      {
        "id":"5","name":"White Cotton Scarf",
        "image":"images/img5.jpg",
        "designer":"Martyn Bal",
        "price":10.00,
        "color":"red",
        "type":"appeal",
        "gender":"y",
        "likeCount":5
      },
      {
        "id":"4",
        "name":"White Cotton Scarf",
        "image":"images/img4.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"bag",
        "gender":"y",
        "likeCount":0
      },
      {
        "id":"3",
        "name":"White Cotton Scarf",
        "image":"images/img3.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"bag",
        "gender":"y",
        "likeCount":0
      },
      {
        "id":"2",
        "name":"White Cotton Scarf",
        "image":"images/img2.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "gender":"y",
        "likeCount":0
      },
      {
        "id":"1",
        "name":"White Cotton Scarf",
        "image":"images/img1.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"appeal",
        "gender":"x",
        "likeCount":0
      }
    ];
    $scope.likeEvent = function(product) {
      product.likeCount++;
    } 
})
.controller('brandCtrl', function($scope) {
    $scope.brandProducts = [
      {
        "id":"1",
        "name":"Black Cotton Scarf",
        "image":"images/img2.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"2",
        "name":"Black Cotton Scarf",
        "image":"images/img16.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"3",
        "name":"Red Cotton Scarf",
        "image":"images/brand1.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"shoe",
        "likeCount":1
      },
      {
        "id":"4",
        "name":"Black Cotton Scarf",
        "image":"images/brand2.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"5",
        "name":"Black Cotton Scarf",
        "image":"images/brand3.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"6",
        "name":"Red Cotton Scarf",
        "image":"images/brand4.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"shoe",
        "likeCount":1
      },
      {
        "id":"7",
        "name":"Blue Cotton Scarf",
        "image":"images/brand5.jpg",
        "designer":"Martyn Bal",
        "price":20.00,
        "color":"red",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"8","name":"Grey Cotton Scarf",
        "image":"images/brand6.jpg",
        "designer":"Martyn Bal",
        "price":10.00,
        "color":"red",
        "type":"shoe",
        "likeCount":5
      },
      {
        "id":"9",
        "name":"White Cotton Scarf",
        "image":"images/brand7.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"10",
        "name":"White Cotton Scarf",
        "image":"images/brand8.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"11",
        "name":"White Cotton Scarf",
        "image":"images/brand9.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"12",
        "name":"White Cotton Scarf",
        "image":"images/brand10.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"bag",
        "likeCount":0
      },
      {
        "id":"13",
        "name":"White Cotton Scarf",
        "image":"images/brand11.jpg",
        "designer":"Martyn Bal",
        "price":110.00,
        "color":"red",
        "type":"shoe",
        "likeCount":3
      },
      {
        "id":"14",
        "name":"White Cotton Scarf",
        "image":"images/brand12.jpg",
        "designer":"Martyn Bal",
        "price":12.00,
        "color":"red",
        "type":"shoe",
        "likeCount":1
      },
      {
        "id":"15",
        "name":"White Cotton Scarf",
        "image":"images/img6.jpg",
        "designer":"Martyn Bal",
        "price":20.00,
        "color":"red",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"16","name":"White Cotton Scarf",
        "image":"images/img5.jpg",
        "designer":"Martyn Bal",
        "price":10.00,
        "color":"red",
        "type":"shoe",
        "likeCount":5
      },
      {
        "id":"17",
        "name":"White Cotton Scarf",
        "image":"images/img4.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"shoe",
        "likeCount":0
      },
      {
        "id":"18",
        "name":"White Cotton Scarf",
        "image":"images/img3.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"19",
        "name":"White Cotton Scarf",
        "image":"images/img2.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"accessory",
        "likeCount":0
      },
      {
        "id":"20",
        "name":"White Cotton Scarf",
        "image":"images/img1.jpg",
        "designer":"Martyn Bal",
        "price":120.00,
        "color":"blue",
        "type":"bag",
        "likeCount":0
      }
    ];
})

.controller('productCtrl', function($scope) {
    $scope.product = {
        description: 'description Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.',
        notes: 'notes Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.',
        advice: 'advice Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.',
        size: 'size Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.'
    };
    $scope.carousel1 = [
        { img: '/images/thumnail1.jpg' },
        { img: '/images/thumnail2.jpg' }, 
        { img: '/images/thumnail3.jpg' }, 
        { img: '/images/thumnail4.jpg' },        
        { img: '/images/thumnail5.jpg' },
        { img: '/images/thumnail4.jpg' },        
        { img: '/images/thumnail5.jpg' }, 
        { img: '/images/thumnail6.jpg' }
    ]
    $scope.carousel2 = [
        { img: '/images/thumnail7.jpg' },
        { img: '/images/thumnail8.jpg' }, 
        { img: '/images/thumnail9.jpg' }, 
        { img: '/images/thumnail10.jpg' },        
        { img: '/images/thumnail11.jpg' },
        { img: '/images/thumnail10.jpg' },        
        { img: '/images/thumnail11.jpg' },  
        { img: '/images/thumnail12.jpg' }
    ]
})
.controller('filterCtrl', function($scope, filterService) { 
    $scope.filterService = filterService;

    /*$scope.genders = [{value: "man", text: "Man"}, {value: "woman", text: "Woman"}];
    $scope.types = [{value: "shoe", text: "Shoes"}, {value: "accessory", text: "Accessories"}, {value: "bag", text: "Bags"}, {value: "jewelly", text: "Jewelly"}, {value: "appeal", text: "Appeal"}, {value: "misc", text: "Other misc"}];

    $scope.selected = $scope.genders[0].value;
    console.log($scope.selected);

    $scope.select= function(value) {
       console.log(value);
       $scope.selected = value; 
    };

    $scope.itemClass = function(value) {
        return value === $scope.selected ? 'active' : undefined;
    };*/
})
.controller('brandChapterCtrl', function($scope, $routeParams, $location) { 
    $scope.onchapter = $routeParams.chapter;

    $scope.chapters = [
        { name: 'products', url: '/brand/chapter/products/all' },
        { name: 'story', url: '/brand/chapter/story' },
        { name: 'mood', url: '/brand/chapter/mood' },
        { name: 'talk', url: '/brand/chapter/talk' },
        { name: 'trip', url: '/brand/chapter/trip' },
        { name: 'moment',url: '/brand/chapter/moment' },
    ]

    $scope.navClass = function (page) {
        var currentRoute = $location.path().split('/');
        return page === currentRoute[3] ? 'active' : '';
    };
    //http://stackoverflow.com/questions/19943217/ng-class-to-highlight-active-menu-item-based-on-ng-repeat-angularjs

    $scope.navOnShow = function (page) {
        var currentRoute = $location.path().split('/');
        return page === currentRoute[4] ? 'onshow' : '';
    };

    $scope.navShow = function (page) {
        var currentRoute = $location.path().split('/');
        return page === currentRoute[3] ? true : false;
    };
});
