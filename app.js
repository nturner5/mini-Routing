angular.module('miniRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/')

$stateProvider
.state('home', {
    templateUrl: 'home/homeTempl.html',
    url: '/',
    controller: "homeCtrl" 
})

.state('settings', {
    templateUrl: 'settings/settingsTmpl.html',
    url: '/settings',
    controller: "settingsCtrl"

})

.state('products', {
    templateUrl: 'products/productTmpl.html',
    url: '/products/:id',
    controller: 'productsCtrl'
})



})