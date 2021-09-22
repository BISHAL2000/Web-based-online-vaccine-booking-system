      
      function display()
      {
        var u_name=document.getElementById("username").value;
        var vac_name=document.getElementById("vaccine").value;
        var dos_num=document.getElementById("dose").value;
        var v_date=document.getElementById("Date").value;
        var hos=document.getElementById("hospital").value;
        var v_slot=document.getElementById("slot").value;
        var e_mail=document.getElementById("mail").value;
        var phone_n=document.getElementById("phone").value;
        var Id=document.getElementById("proof").value;
        var Id_n=document.getElementById("idnumber").value;
        document.getElementById("result").innerHTML="Thank you "+u_name+" for using vaxo.You registered for "+vac_name+" dose "+dos_num+" on date "+v_date+" at "+hos+". Your slot is "+v_slot+". We will also notify you through mail.";

        var Body1="Name: "+u_name+"<br>Email: "+e_mail+"<br>Phone: "+phone_n+"<br>Id: "+Id+"<br>Id Number: "+Id_n+"<br>Vaccine: "+vac_name+"<br>Dose: "+dos_num+"<br>Hospital: "+hos+"<br>Date:"+v_date+"<br>Slot: "+v_slot;
        var Body2="Thank you for using VAXO.<br>You registered for "+vac_name+"<br>Dose:"+dos_num+"<br>Date: "+v_date+"<br>Slot:"+v_slot;
         Email.send({
         Host : "smtp.gmail.com",
         Username : "teamvaxo@gmail.com",
         Password : "SKNPhs2020#",
         To : e_mail,
         From : "teamvaxo@gmail.com",
         Subject : u_name+", your booking request have been registered.",
         Body : Body2
         }).then(
         message =>alert("Thank you "+u_name+" for using vaxo.You registered for "+vac_name+" dose "+dos_num+" on date "+v_date+" at "+hos+". Your slot is "+v_slot+". We will also notify you through mail.")
         );
         
         Email.send({
         Host : "smtp.gmail.com",
         Username : "teamvaxo@gmail.com",
         Password : "SKNPhs2020#",
         To : 'teamvaxo@gmail.com',
         From : "teamvaxo@gmail.com",
         Subject : u_name+" "+vac_name+" Dose:"+dos_num+". "+hos,
         Body : Body1
         }).then(
         
         );
         return false;
         }