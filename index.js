function sendMail(){
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      project: document.getElementById("project").value,
      message: document.getElementById("message").value,
    };
  
     const serviceID = "service_c7o9ran";
    const templateID = "template_tl0gkzm";
  
      emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("project").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!");  
      })
      .catch((err) => console.log(err)); 
  }
  
  
