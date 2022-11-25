function changeName()
{
    let text_x = document.getElementById("x").textContent;
    let text_y = document.getElementById("y").textContent;
    document.getElementById("y").innerHTML=text_x;
    document.getElementById("x").innerHTML=text_y;
}

function getPlosha()
{
    let a = 10;
    let b =20;
    let h = 8;
    let P = (a+b)/2*h;
    document.getElementById("a").innerHTML=a;
    document.getElementById("b").innerHTML=b;
    document.getElementById("h").innerHTML=h;
    document.getElementById("P").innerHTML=P;
}

function reverseNumber(num)
{
    let new_num = parseFloat(num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num);
      return new_num;

}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let num = document.getElementById("form_number").value;
  if (num != "") {
    alert("Your reverse number is: "+ reverseNumber(num).toString());
      setCookie("value_"+num,reverseNumber(num).toString(), 2);
      location.reload();
  
  } 
  
}

function deleteCookie(cookieName, cookieValue, cookieExpire)
{
  document.cookie = cookieName + "=" + cookieValue + ";" + cookieExpire + ";path=/";

}


function getAllCookies()
{
  var cookies = document.cookie.split(';');
  var ret = '';
  for(var i = 1; i <= cookies.length; i++) {
    if (cookies[i-1]!="")
      ret += i + ' - ' + cookies[i - 1] + "<br>";
  }
  return ret;
  
}

function displayAllCookies()
{
  alert("All cookies: "+getAllCookies().toString());
}


function askAboutCookies()
{
  if(document.cookie){
  let save_cookies = prompt("YOUR COOKIES:\n"+getAllCookies().toString()+"Do you want to delete cookies?(yes/no)","yes");
  if(save_cookies=="yes")
  {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        alert("The cookies were deleted successfully.Refresh the page to see.");
    }
  }
  else{
  alert("The cookies are saved.")
  }
}
else
{
  alert("You have no cookies");
}
}


function SetlocalStorForAligns()
{
  let text_for_local = 0;
  if(document.getElementById('menu_text').style.textAlign=="left")
  {
    text_for_local += 1;
  }
  
  if (document.getElementById('list_area').style.textAlign == "left")
  {
    text_for_local += 10;
  }
  
  if (document.getElementById('plain_text').style.textAlign == "left")
  {
    text_for_local += 50;
  }
  
  localStorage.aligns = text_for_local;
  
  
}

function checkLocalStor()
{
  if(localStorage.aligns)
  {
    let checker = Number(localStorage.aligns);
    if(checker==1)
    {
      document.getElementById('menu_text').style.textAlign="left";
    }
    else{
     if (checker == 10)
     {
       document.getElementById('list_area').style.textAlign = "left";
     } 
      else {
        if (checker == 50)
      {
        document.getElementById('plain_text').style.textAlign = "left";
      }
      else {
        if (checker == 11)
        {
          document.getElementById('list_area').style.textAlign = "left";
          document.getElementById('menu_text').style.textAlign="left";
        }
      else {
        if (checker == 51)
        {
          document.getElementById('plain_text').style.textAlign = "left";
          document.getElementById('menu_text').style.textAlign = "left";
        }
        else {
          if (checker == 60)
          {
            document.getElementById('plain_text').style.textAlign = "left";
            document.getElementById('list_area').style.textAlign = "left";
          }
          else{
           if (checker >= 61)
           {
             document.getElementById('plain_text').style.textAlign = "left";
             document.getElementById('list_area').style.textAlign = "left";
             document.getElementById('menu_text').style.textAlign = "left";
           } 
            
          }
        
        
        }
      
      }  
      }
    }
  }
}

}

function clean_local_storage()
{
  localStorage.clear();
  alert('REFRESH THE PAGE');
}



function addElement() {
 const newNode = document.createElement("li");
 const newBut = document.createElement("button");
 newBut.innerHTML = "delete";
 
 
 //newNode.style.fontSize = '50%';
 let name = document.getElementById("fname").value;
 newBut.addEventListener('click',function()
 {
   var old = localStorage.getItem("names").toString();
   let coma_after = old.search(name+",");
   let coma_before = old.search(","+  name);
   if(coma_after!=-1){
   var new_text = old.replace(name+",", "");
   }
   else{
     if(coma_before!=-1)
     {
       var new_text = old.replace(","+name, "");
     }
     else{
       var new_text = old.replace(name, "");
     }
   }
   
   
   localStorage.setItem("names", new_text);
   document.location.reload();
   
 });
  const textNode = document.createTextNode(name);
  newNode.appendChild(textNode);
  
  const list = document.getElementById("myList");
  list.insertBefore(newNode, list.children[0]);
  newNode.appendChild(newBut);
  var old = localStorage.getItem("names");
  if (old === null) old = "";
  else{
    old+=",";
  }
  localStorage.setItem("names", old+ name);
  
  
}



function setListFromLocal()
{
  //alert(localStorage.names);
  if(localStorage.names)
  {
    //alert("leeeeeeeeera");
    var list_data = localStorage.getItem("names");
   
    let text = list_data.toString();
    let text_list = text.split(",");
    for(let name_in_l in text_list){
    
     const newNode = document.createElement("li");
    // let name = item
     const textNode = document.createTextNode(text_list[name_in_l]);
     let name = text_list[name_in_l];
     const newBut = document.createElement("button");
     newBut.innerHTML = "delete";
     
     newBut.addEventListener('click', function()
         {
           var old = localStorage.getItem("names").toString();
           let coma_after = old.search(name + ",");
           let coma_before = old.search("," + name);
           if (coma_after != -1) {
             var new_text = old.replace(name + ",", "");
           }
           else {
             if (coma_before != -1)
             {
               var new_text = old.replace("," + name, "");
             }
             else {
               var new_text = old.replace(name, "");
             }
           }
           localStorage.setItem("names", new_text);
           document.location.reload();
         });
     newNode.appendChild(textNode);
    
     const list = document.getElementById("myList");
     list.insertBefore(newNode, list.children[0]);
     newNode.appendChild(newBut);
    
    
  }
}
}





function start_page()
{
  askAboutCookies();
  checkLocalStor();
  setListFromLocal();
  
  document.getElementById("focus_form").style.display = "none";


}

