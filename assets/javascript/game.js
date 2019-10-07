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
     
      var imageCrystal = $("<img>");

      imageCrystal.addClass("crystal-image");
        
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
     
     
      reset();
    }
    if(counter > randomNumber){
      lost++;
      
      
     reset();
      
      }
    });
      function reset(){
        $(".crystal").empty();
        
        randomNumber = Math.floor(Math.random() * 101) + 19;
          $("#number-to-guess").text(randomNumber);
          console.log("images = " + images.length);
          $("#0").val(Math.floor(Math.random() * 11) +1);
          $("#1").val(Math.floor(Math.random() * 11) +1);
           $("#2").val(Math.floor(Math.random() * 11) +1);
           $("#3").val(Math.floor(Math.random() * 11) +1);
          counter = 0;

              // var myDiv = $("<div class=" + "")
                //var imageCrystal = $("<img>");                  
                //$("image").(randomValue);              
                //$("#crystal").append(imageCrystal);
                
          }
        
      

    $("#win").text("wins :" + win);
    $("#loose").text("lost :" + lost);
  

        })   
  
  
