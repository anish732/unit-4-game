$(document).ready(function () {


    var randomNumber;

    randomNumber = Math.floor(Math.random() * 101) + 19;
    
    
    $("#number-to-guess").text(randomNumber);

    var win = 0;
    var lost = 0;
    var counter = 0;
    var images =["crystals.png", "diamond.png","superthumb.png","pendants.jpg"]
    for (var i=0; i<images.length; i++){
      var randomValue = Math.floor(Math.random() * 11) +1;
      console.log("initial set up random = " + randomValue);
     // var myDiv = $("<div class=" + "")
      var imageCrystal = $("<img>");

      imageCrystal.addClass("crystal-image");
      //imageCrystal.attr("id",i).attr("value",crystalValue);
        
      imageCrystal.attr("src", images[i]);
      imageCrystal.attr("id",i).attr("value",randomValue);

      imageCrystal.val(randomValue);
      //imageCrystal.attr("data-value", randomValue);
      
      //imageCrystal.html(randomValue);
     
      $("#crystal").append(imageCrystal);
      console.log(imageCrystal);
    }
    
    $(document).on("click",".crystal-image",function(event){
      var crystalValue = event.target.value
      console.log("crystalValue = " + crystalValue)
         //crystalValue = parseInt(crystalValue);
         
          counter += parseInt(crystalValue)
          $("#score").text("score :" + counter);
         //alert("New score " + counter);
      console.log(counter)
      if (counter === randomNumber){
      win++;
     // counter =0;
     // randomNumber = Math.floor(Math.random() * 101) + 19;
     
      reset();
    }
    if(counter > randomNumber){
      lost++;
      //counter =0;
      //randomNumber = Math.floor(Math.random() * 101) + 19;
      
     reset();
      
      }

      function reset(){
        $(".crystal").empty();
        console.log("func reset");
        randomNumber = Math.floor(Math.random() * 101) + 19;
          $("#number-to-guess").text(randomNumber);
          console.log("images = " + images.length);
          for (var i=0; i < images.length; i++){
                var randomValue = Math.floor(Math.random() * 11) +1;
                console.log("crystal random num = " + randomValue);
                var imageCrystal = $("<img>");

                imageCrystal.attr("id",i).attr("value",randomValue);
                imageCrystal.val(randomValue);


              // var myDiv = $("<div class=" + "")
                //var imageCrystal = $("<img>");                  
                //$("image").(randomValue);              
                //$("#crystal").append(imageCrystal);
                
          }
        counter =0;
      }

    $("#win").text("wins :" + win);
    $("#loose").text("lost :" + lost);
  

    })
  
  })
