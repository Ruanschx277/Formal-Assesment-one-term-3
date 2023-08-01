$(document).ready

    console.log("Evergreen");

    $(".plant-image").animate({top: '-=100'});

    $(".Item 1").click(function(){
      

        $("#price").toggle();
        $("#descriptionText").toggle();
    
        $(".item-img-top").toggleClass("small");

        


    });




