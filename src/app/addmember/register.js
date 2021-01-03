


  (function() {
    'use strict';
  
    angular
      .module('nandi-tech')
      .controller('addController', addController);
  
    /** @ngInject */
    function addController(Data,$scope,$rootScope,Upload,$window,$filter,$http ,localStorageService
        ) {  
    var vmam = this;
    Data.get('data/religion').then(function (argument) {
      $rootScope.religion = argument.data;
     
      
      });
      
    
      Data.get('data/cities').then(function (argument) {
        $rootScope.cities = argument.data;
        
        });
        Data.get('data/occupation').then(function (argument) {
          $rootScope.occupation = argument.data;
          
          });
        
        Data.get('data/languages').then(function (argument) {
        $rootScope.language = argument.data;
        console.log(argument.data);
        
        });
          Data.get('data/height').then(function (argument) {
          $rootScope.height = argument.data;
          
          });
            Data.get('data/country').then(function (argument) {
            $rootScope.country = argument.data;
            console.log(argument.data[0]);
      
            });


            Data.get('data/education').then(function (argument) {
              $rootScope.education = argument.data;
              
              });
              Data.get('data/maritalStatus').then(function (argument) {
                $rootScope.status = argument.data;
                
                });
   
              

    vmam.register=function(args){
      console.log(args)
      var data ={
        email:args.email,
       
        password:args.password

      };
      console.log(data);
      var token=JSON.parse($window.localStorage.getItem('TOKEN'));
      console.log(token.accessToken);
      var config = {
       
          authorization:'bearer'+" "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwNzQ0MzA3OCwiZXhwIjoxNjA3NjE1ODc4fQ.v4YEZiYPj0Q8SUOlmTMQiwPFWT25Ak1mGu9z4m8-S4s",

        
          // authorization: "bearer "+"token.accessToken",
        
        
      };
      console.log(config);
      
      var pd={
        fullName:args.name,
        heightId:args.height,
        weight:args.weight,
        gender:args.gender,
        birthDate:args.birthyear+"-"+args.birthmonth+"-"+args.birthday,
        tempCountryId:args.country,
        occupationId:args.occupation,
        martialStatusId:args.martialstats,
        religionId:args.religion,
        languageId:args.language,
        permanentCityId:args.cities

      };
     
          
   
      // Data.post('user/checkusername',username)
      // .catch(function(error){
      //   console.log(error);
      // })
      // .then(function (argument) {
        $http.post('http://localhost:5000/kerala/api/v1/user/register', data)
       .then(function (res) {
        console.log(res);
        
          if (res.data.status == "Success") {
            console.log(res.data.user_id)
          
            
          pd["userId"]=res.data.user_id;
         var abcd= {
            method:'post',
           url:'http://localhost:5000/kerala/api/v1/userdetails' , 
           headers:config,
           data:pd
         };
          
          $http(abcd).then(function (argument) {
            console.log(argument.data);    
             });

          Upload.upload({
              url: 'http://localhost:5000/kerala/api/v1/user/profileImage/'+ res.data.user_id,
              headers:config,
              data: {profileImage: $scope.file}
          }).then(function (resp) {
              console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          }, function (resp) {
              console.log('Error status: ' + resp.status);
          }, function (evt) {
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          });
      

       }

       });
      


       


       
    //  });
    };

    };

   
  })();
  