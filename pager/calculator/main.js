const buttons=document.querySelectorAll("input[type=button]")
const text=document.querySelector('input[type=text]')

for (let index = 0; index < buttons.length; index++) {
  const element = buttons[index];
  element.setAttribute("onclick", "gettheval(this)");
}

gettheval=(r)=>{
  try {
    if(r.value=="Del"){
      text.value=text.value.slice(0,-1)
    }
    else if(r.value=="AC"){
      text.value=""
    }
    else if (r.value=="="){
      text.value=eval(text.value)
    }
    else{
      text.value+=r.value
    }
    if (text.value=="undefined" || text.value=="NaN" || text.value=="Infinity"){
      text.value=""
    }
  } catch (err) {
    text.value=err.name
    setTimeout(()=>{text.value=""},800)
  }
}