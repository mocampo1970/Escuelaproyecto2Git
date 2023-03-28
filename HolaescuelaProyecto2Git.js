<script>
    var chkAsientos = document.getElementsByClassName("chk_asiento")[0];
    var divAsientos = document.getElementById("div_asientos");
    var asientos = [];

    function asignar()
    {
     chkAsientos.forEach(function(){
        if(this.checked)
            asientos.push(this.value);
     });

     divAsientos.innerHTML = "<b>Tus asientos:</b> ";
     var lugares = "";

     for(var i = 0; i < asientos.length; i++)
     {
        if(lugares == "")
            lugares = asientos[i];
        else
            lugares = lugares + ", " + asientos[i];
     }

     divAsientos.innerHTML += lugares;
    }
    </script>