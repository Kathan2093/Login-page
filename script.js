const data = [
  {
    Email: "kathantrivedi20@gmail.com",
    Password: "12345678",
  },
  {
    Email: "tirth11@gmail.com",
    Password: "12345678",
  },
  {
    Email: "shubh10@gmail.com",
    Password: "12345678",
  },
  {
    Email: "raj69@gmail.com",
    Password: "12345678",
  },
  {
    Email: "anurag1077@gmail.com",
    Password: "12345678",
  },
  {
    Email: "sabbir31@gmail.com",
    Password: "12345678",
  },
];

function func() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const check1 = document.getElementById("check").checked;

  let user = data.find(
    (user) => user.Email === email && user.Password === password
  );

  if (user && check1) {
    alert("Welcome, Login Successful");
  } else {
    alert("Wrong, Try Again");
  }
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("check").checked = false;
}
