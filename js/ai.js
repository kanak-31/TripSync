const plan = document.querySelector('#plan');

plan.addEventListener('change', function(){
   if(plan.value === "other"){
    document.querySelector("#other-plan").style.display = "block";
   }else{
    document.querySelector("#other-plan").style.display = "";
   }
})