let statusReq = document.getElementById('status');
function loadDoc() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
      setWeather(this.responseText);
    }
    if(this.readyState==0){
      statusReq.innerHTML='request not initialized';
    }
    if(this.readyState==1){
      statusReq.innerHTML='server connection established';
    }
    if(this.readyState==2){
     statusReq.innerHTML='request received';
    }
    if(this.readyState==3){
       statusReq.innerHTML='processing request';
    }
    setStatus(this.status);
    
    console.log(this.readyState);
  }
  
  xhttp.onload = function() {
    
    console.log(this.responseText);
    console.log(this.status);
    console.log(this.statusText);
  }
  // xhttp.open('GET','ajax_info.txt');
  xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Ashgabat&appid=c33f1fa73169b9c1cf4186a69375fb9e&units=metric", true);
//   xhttp.setRequestHeader('Access-Control-Allow-Origin','*')
  xhttp.send();
}



function setWeather(data){
  let weather = JSON.parse(data);
  statusReq.innerHTML=`${weather.weather[0].main}/${weather.weather[0].description}`;
  setIcon(weather.weather[0].icon)
}

function setIcon(icon){
  document.getElementById('icon').src=`http://openweathermap.org/img/wn/${icon}@2x.png`;
}

// {
//   "data":{
//     value:"Hello"
//   }
// }

{/* <data>
  <value>Hello</value>
</data> */}





// xhttp.open("POST", "ajax_test.asp");
// xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp.send("fname=Henry&lname=Ford");

// xhttp.open("GET", "ajax_info.txt", false);
// xhttp.send();
// document.getElementById("demo").innerHTML = xhttp.responseText;