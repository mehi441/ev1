document.write("<table>")
for (var i = 1; i < 10; i++) {
    document.write("<tr>");
    for (var j = 1; j < 10; j++) {
        document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");  
}
document.write("</table>")

var cars=document.querySelectorAll("td");
for (var z=0;z<cars.length;z++){
    cars[z].addEventListener("click", function(){
        if(this.classList.contains("rotate")){
            this.classList.remove("rotate")
            this.classList.add("rotatex");
        }else{
            this.classList.add("rotate");
        }
        
    })
}