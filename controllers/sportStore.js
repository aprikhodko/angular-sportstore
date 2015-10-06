angular.module("sportStore")
.controller("sportStoreCtrl", function ($scope) {

    $scope.data = {
        products: [
          { name: "Product #1", description: "A product",
            category: "Category #1", price: 100 },
          { name: "Product #2", description: "A product",
            category: "Category #2", price: 101 },
          { name: "Product #3", description: "A product",
            category: "Category #3", price: 102 },
          { name: "Product #4", description: "A product",
            category: "Category #4", price: 103 }]
    };
});
