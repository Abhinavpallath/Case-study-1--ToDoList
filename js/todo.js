function display(){
    var xhr = new XMLHttpRequest();
    var details;
    xhr .onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        details = JSON.parse(this.responseText);
        var s = "";
        for(var i = 0;i<details.length;i++)
        {
            console.log(details[i]);
            if(details[i].completed==true)
            {
                var html = "<tr><td>"+details[i].userId+"</td><td>"+details[i].id+"</td><td>"+details[i].title+"</td><td style='text-align:center;'><input type='checkbox' class='form-check-input checkbox' checked disabled></td></tr>";
                s += html;
            }
            else{
                html = "<tr><td>"+details[i].userId+"</td><td>"+details[i].id+"</td><td>"+details[i].title+"</td><td style='text-align:center;'><input type='checkbox' class='form-check-input checkbox' onchange = 'validate();'></td></tr>";
                s += html;
            }
        }
        document.getElementById("table").innerHTML = s;
        display1();
    }
}


xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhr.send();
}

function display1(){
    console.log("ji");
    document.getElementById("tab").style.visibility="visible";
}

function validate(){
    var promise = new Promise(function(resolve,reject){
    var data = document.getElementsByClassName("checkbox");
    var count = 0;
    for (var i=0; i<data.length; i++){
        if (data[i].checked == true){
            count++;
        }
            
    }
    if(count%5==0){
        resolve("Congrats! 5 Tasks have been Successfully Completed.");
    }
    else{
        reject();
    }
    })
    promise
    .then(function(tru){
        alert(tru);
    })
    .catch(function(){
        console.log(" select 5 tasks ");
    });
}



