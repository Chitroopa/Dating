$(function() {
  $("#form").submit(function(event) {
    var nameInput = $("#name").val();
    var ageInput = parseInt($("#age").val());
    var hobbyInput = $("#hobby").val();
    var sexInput = $("#sex").val();
    var preferenceInput = $("#preference").val();
    $("img, .hopeless").hide();
    if(nameInput && ageInput && hobbyInput && sexInput && preferenceInput)
    {
      if (sexInput === "male")
      {
        if (ageInput <= 23 && (preferenceInput === "op1" || preferenceInput === "op2"))
        {
          $("#ew, .hide").show();
        }
        else if (ageInput <= 23 && (preferenceInput === "op1" || preferenceInput === "op3"))
        {
          $("#st, .hide").show();
        }
        else if ((ageInput >= 24 && ageInput < 45) && preferenceInput === "op2" || preferenceInput === "op3")
        {
          $("#kk, .hide").show();
        }
        else if (ageInput >= 45 && preferenceInput === "op3")
        {
          $("#ms, .hide").show();
        }
        else {
          $(".hopeless").show();
        }
       }
      else if (sexInput === "female")
       {
         if (ageInput <= 23 && (preferenceInput === "op1" || preferenceInput === "op2"))
         {
           $("#gc, .hide").show();
         }
         else if (ageInput <= 23 && (preferenceInput === "op1" || preferenceInput === "op3"))
         {
           $("#ob, .hide").show();
         }
         else if ((ageInput >= 24 && ageInput < 45) && preferenceInput === "op2" || preferenceInput === "op3")
         {
           $("#ze, .hide").show();
         }
         else if (ageInput >= 45 && preferenceInput === "op3")
         {
           $("#th, .hide").show();
         }
         else {
           $(".hopeless").show();
         }
       }
    }
    else {
      alert("Please enter all information")
    }

  event.preventDefault();
  });
});
