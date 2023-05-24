function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value


  };
  if (params.email==""||params.name==""||params.message=="") {
    alert("fill the space")
  } else {
    
  
  const serviceID = "service_f7u0spe";
  const templateID = "template_2cy6wsy"

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully")
      })
    .catch((err) => console.log(err));
  }
}