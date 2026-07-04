const plan = document.querySelector('#plan');
const show = document.querySelector("#other-plan");

plan.addEventListener('change', function(){
   if(plan.value === "other"){
    show.classList.remove("hidden") ;
   }else{
    show.classList.add("hidden") ;
   }
})

