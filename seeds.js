var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image:"https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptatem, minus, explicabo odio corporis quisquam unde aut consequuntur tenetur esse error similique a reiciendis adipisci inventore! Saepe, alias consectetur laborum!"
        
    },
    {
        name: "Nothing", 
        image:"https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptatem, minus, explicabo odio corporis quisquam unde aut consequuntur tenetur esse error similique a reiciendis adipisci inventore! Saepe, alias consectetur laborum!"
        
    },
    {
        name: "Stars", 
        image:"https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, voluptatem, minus, explicabo odio corporis quisquam unde aut consequuntur tenetur esse error similique a reiciendis adipisci inventore! Saepe, alias consectetur laborum!"
        
    }
    ];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // data.forEach(function(seed){
        // Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         }
                // else {
                    // console.log("added a campground");
                    // //create a comment
                    //     Comment.create(
                    //         {
                    //             text: "This place is great, but I wish there was internet",
                    //             author: "Homer"
                    //         }, function(err, comment){
                    //             if(err){
                    //                 console.log(err)
                    //             } else {
                    //                 campground.comments.push(comment);
                    //                 campground.save(); 
                    //                 console.log("Created a comment!");
                    //             }
                                
                    //         });
                    //     }
            // });
        // });
    });
    //add camp
    
    
}

module.exports = seedDB;