(function() {
    'use strict';
  
    angular
      .module('nandi-tech')
      .directive('acmeNavbar', acmeNavbar)
      .directive('acmeHeader', acmeHeader);
  
  
    /** @ngInject */
    function acmeNavbar() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
      };
  
      return directive;
  
      /** @ngInject */
      function NavbarController(Data, $scope, $timeout, $rootScope, $filter,$location ,$window,Auth, localStorageService) {
        var vm = this;
         
        vm.product=$rootScope.products;
        vm.act= window.location.hash;
        var user = JSON.parse($window.sessionStorage.getItem('45'));
  
      
          if (user==undefined) { 
        vm.account = 'my account';
        Auth.setUser();
    
       } 
       else {
    
    vm.account  = user.firstname;
    Auth.setUser(user.email);
      }
      var profileList = document.getElementById("profiles");
      var classList = document.getElementById("listings");



      vm.change=function(classname){
        console.log(classname)
        if(classname==1){
         profileList.style.display = "none";
         classList.style.display="block";
        }
        if(classname==2){
          profileList.style.display = "block";
          classList.style.display="none";

        }
      }
      window.onclick = function(event) {
        if (event.target == classList) {
          classList.style.display = "none";
        }
      }
      window.onclick = function(event) {
        if (event.target == profileList) {
          profileList.style.display = "none";
        }
      }
    
      
    
  
  
   }
  }
  
  
  
      function acmeHeader() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/header.html',
        controller: headerController,
        controllerAs: 'vmh',
        bindToController: true
      };
  
      return directive;
  
      /** @ngInject */
      function headerController() {
        var vmf = this;
      }
    }
  
  
     
  
  
  
  
  })()