function proceedAction(confirm){
   let user = prompt("Do you wish to continue ?")
   if(user === "confirm"){
    return "Confirmed"

   } else{
    return "Denied"
   }



}
alert(proceedAction());