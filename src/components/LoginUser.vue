<template>
    <div class="login-container">
      <div class="border-log">
        <h1 class="login-h1">LOGIN</h1>
        <p class="fill">Please enter your email address and password</p>
        <form class="form-login" @submit.prevent="handleLoginSubmit">
          
          <label for="email" class="label-login">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            class="input-login"
            placeholder="Please enter your email"
            v-model="email"
          />
          <label for="password" class="label-login">Password:</label>
          <div  class="input-login">
          <input
            type="password"
            id="password"
            name="password"
            class="input-pass"
            placeholder="Please enter your password" 
            v-model="password"
          />
          <a href="#" class="forgot-pass">Forgot Password?</a>
          </div>

          <div class="btn-login">
            <p class="acc">Don't have an account? <a href="/register" class="acc-login">Create one</a></p>
     
          <button type="submit" class="button-login">LOGIN</button>
        </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import swal from "sweetalert";
  
  export default {
    data() {
      return {
       
        email: "",
        password: "",
      };
    },
    methods: {
      async handleLoginSubmit() {
        if ( !this.email || !this.password) {
          swal({
            title: "Error",
            text: "Please fill in all the fields",
            icon: "error",
          });
          return;
        }
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/login",
            {
              email: this.email,
              password: this.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200) {
            console.log("login ok");
            console.log(response);
            swal({
              title: "Login successful",
              icon: "success",
            }).then(() => {
              localStorage.setItem("token", response.data.token);
              window.location.href = "/login";
            });
          } else {
            swal({
              title: "Login failed",
              text: response.data.message,
              icon: "error",
            });
          }
        } catch (error) {
          // Handle error
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.border-log {
  width: 400px;
  padding: 20px;
}

.login-h1 {
  font-size: 28px;
  font-weight: 800;
  font-family: 'PT Serif Caption', sans-serif;
}

.form-login {
  display: flex;
  flex-direction: column;
}

.label-login {
  font-size: 14px;
  margin-bottom: 8px;
  text-align: initial;
  font-weight: 600;
}

.fill{
  margin-bottom: 35px;
}

.input-login {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 12px;
}

.input-pass{
    border: none;
    text-align: initial;
  
}

.forgot-pass{
 font-size: 14px;
 margin-left: 95px;
 text-decoration: none;
 color: #6d6c6c;
}
.acc{
  display: flex;
  flex-direction: row;
  font-size: 14px;
}

.acc-login{
  text-decoration: none;
  color: #6d6c6c;
  margin-left: 1px;
}

.acc-login:hover{
  text-decoration: underline;
}
.btn-login{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 5.7rem;
}
.button-login {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;

}

.button-login:hover {
  background-color: #ccc;
}
  </style>
  