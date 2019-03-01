var services = ["Sales", "Markeing", "Executive CEO", "Accounting", "Analyst"]
//render data
document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('append_services');
    div.innerHTML += '<div class="row">';
    for (let count = 1; count <= services.length ; count++) {
        if(count%4 == 0 && services[count]){
            div.innerHTML += 	`<div class="clearfix"> </div>
                    </div>
                <br/><br/>
                  <div class="row">`
        }
        div.innerHTML += `<div class="col-md-3 col-xs-6" style="display:inline-block">
            <div class="col-md1">
            <a href="#">
                <h1>`+services[count-1]+`</h1>
            </a>
            <div class="price">
                    <input class="item_add" type="button" onclick="alertServices(\`` +services[count-1]+ `\`);" value="LEARN MORE"/>
                    <div class="clearfix"> </div>
            </div>
        </div>
        </div>`;
        
    }

 }, false);


function alertServices(LADSectionTitlte) {
    alert(LADSectionTitlte);
}
