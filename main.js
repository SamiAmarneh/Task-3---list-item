var data = "" ;
for(var year = 2000; year <= 2024; year++){
    data+="<option>" + year + "</option>" ;
}

document.querySelector("select").innerHTML = data;