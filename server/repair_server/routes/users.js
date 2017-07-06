var express = require('express');
var router = express.Router();
var User = require('../data/users');
/* GET users lpisting. */

 router.get('/getUsers', function(req, res, next) {
       if(req.query){
      var userInstance = new User();
      userInstance.name = "Aad";
      userInstance.phone = 8907922308;
      userInstance.description = "Tyre Only";

            userInstance.loc = {type: 'Point',
              coordinates: [
                9.938611,76.3204335
              ]}
              console.log(userInstance);

    //           userInstance.save(function(err,data){
    //         if(err){
    //           console.log(err+"------");
    //         }else{
    //           console.log(data+"data-----");
    //     res.send(data);
    //         }
    // });
    User.find({ loc: { '$near': {
           '$maxDistance': 10000,
           '$geometry': { type: 'Point', coordinates: [9.938611,76.3204335] } }
       }},function(err,data){
         var items = [];
         data.forEach(function(item){
           items.push(item);
         })
         console.log();
         res.send(items);
       });
    }else {
      res.send('Error');
    }

    })
 router.get('/createuser', function(req, res, next) {
      console.log('_____---');

       if(req.query){
      var userInstance = new User();
      userInstance.name = req.query.name;
      userInstance.phone = req.query.phone;
      userInstance.description = req.query.description || "";
            userInstance.loc = {type: 'Point',
              coordinates: [Number(req.query.lat),Number(req.query.lng)]}

              userInstance.save(function(err,data){
            if(err){
              console.log(err+"------");
            }else{
              console.log(data+"data-----");
        res.send(data);
            }
    });



    }else {
      res.send('Error');
    }

    })






module.exports = router;
