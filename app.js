// create array of strings to be searched
let topics = ["totoro", "ponyo", "soot sprite", "howl's moving castle", "calcifer", "spirited away", "kiki's delivery service"];
let buttonCreated = false;
let buttons = false
window.onload = function() {
startPage();
function startPage() {

    let userInputBox = $("<input placeholder='New Gif'>").attr("id", "userInputBox");
    $(userInputBox).appendTo(".user-input");
    console.log(userInputBox);
    let submitBtn = $("<button>").attr("id", "submitBtn").text("Add");
    $(submitBtn).appendTo(".user-input");

creatingBtn();
}
   function creatingBtn(name) {
       if(buttonCreated === false){
       for (var i = 0; i < topics.length; i++) {
           let button = $("<button>").attr("id", topics[i]).attr("class", "topicBtn").text(topics[i]);
           button.appendTo(".button-view");
           console.log("kjdfkjasdlfkj");
       }
        } 
         buttonCreated= true;
         console.log(name)
    }
   
   $(document).on("click", ".topicBtn", function(){
        let results = $(this).attr("id");
        console.log(results);
        let queryURL =  "https://api.giphy.com/v1/gifs/search?q=" +results + "&api_key=XdXI44bgPmc7886QFjPVxmXeVexmdFoh&limit=10&rating=&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
         for (var j = 0; j <= 10; j++){   
            let gifImg = $("<img>");
            gifImg.attr("src", response.data[j].images.fixed_width_still.url);
            gifImg.attr("data-animate", response.data[j].images.fixed_width.url);
            gifImg.attr("data-still", response.data[j].images.fixed_width_still.url);
            gifImg.attr("id", "gif-img");
            
            let imgRating = $("<p>").text("Rating : " + response.data[j].rating);
            imgRating.attr("id", "rating");
            $(imgRating).prependTo(".gif-view");
            $(gifImg).prependTo(".gif-view");
    
         };
        });
        
   });

   $(document).on("click", "#gif-img", function() {
    for (var j = 0; j <= 10; j++){   
    var state = $(this).attr("data-state");
        
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        };
    };
   });

   
   $("#submitBtn").on("click", function submit(){
        console.log("sfsdfasdfsdaf");
        let boxValue = $("#userInputBox").val();
        console.log(boxValue);
        let newBtn = $("<button>").attr("id", boxValue).attr("class", "topicBtn").text(boxValue);
        newBtn.appendTo(".button-view");

        let results = $(this).attr("id");
        console.log(results);
        let queryURL =  "https://api.giphy.com/v1/gifs/search?q=" +results + "&api_key=XdXI44bgPmc7886QFjPVxmXeVexmdFoh&limit=10&rating=&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            gifImg = $("<img>");
            gifImg.attr("src", response.data[j].images.fixed_width_still.url);
            gifImg.attr("id", "gif-img");
            
            let imgRating = $("<p>").text("Rating : " + response.data[j].rating);
            imgRating.attr("id", "rating");
            $(imgRating).prependTo(".gif-view");
            $(gifImg).prependTo(".gif-view");
//create another button like in start game
//do ajax call again to get new info
        });
    });
};
// app will take these topics and create a button to the html
//try using a loop to append button for each string in the array activity 6, 7, 8, 9

//when user clicks on a button, the page should grab 10 static (non animated gif image)
//fron gihpy api and they should appear on the page  activity 15

//every image should have its rating displayed 

// ((((EXTRA)))) jsondump movie button
//add a form to the page that will take the value from the input box and it gets added 
//to the topics array. then make a function call that takes each topic in the
//arry and remakes the buttons on the page 
//need to make an input type box to append to the 
