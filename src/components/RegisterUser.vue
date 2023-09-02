<template>
    <div class="register-container">
      <div class="border-reg">
        <h1 class="register-h1">REGISTER</h1>
        <p class="fill">Please fill in the information below</p>
        <form class="form-register" @submit.prevent="handleRegisterSubmit">
          <label for="name" class="label-register">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            class="input-register"
            placeholder="Please enter your fisrt name"
            v-model="firstName"
          />
          <label for="name" class="label-register">Last Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            class="input-register"
            placeholder="Please enter your last name"
            v-model="lastName"
          />
          <label for="email" class="label-register">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            class="input-register"
            placeholder="Please enter your email"
            v-model="email"
          />
          <label for="password" class="label-register">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            class="input-register"
            placeholder="Please enter your password"
            v-model="password"
          />
          <label for="password" class="label-register">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            class="input-register"
            placeholder="Please enter your phone number"
            v-model="phoneNumber"
          />
          <div class="btn-register">
            <p class="acc">Have an account already? <a href="/login" class="acc-login">Login</a></p>
     
          <button type="submit" class="button-register">REGISTER</button>
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
      };
    },
    methods: {
      async handleRegisterSubmit() {
        if (!this.firstName || !this.lastName || !this.email || !this.password || !this.phoneNumber) {
          swal({
            title: "Error",
            text: "Please fill in all the fields",
            icon: "error",
          });
          return;
        }
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/api/user",
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password,
              phoneNumber: this.phoneNumber,
              role: "user",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200) {
            console.log("register ok");
            console.log(response);
            swal({
              title: "Register successful",
              icon: "success",
            }).then(() => {
              localStorage.setItem("token", response.data.token);
              window.location.href = "/login";
            });
          } else {
            swal({
              title: "Register failed",
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
  .register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.border-reg {
  width: 400px;
  padding: 20px;
}

.register-h1 {
  font-size: 28px;
  font-weight: 800;
  font-family: 'PT Serif Caption', sans-serif;
}

.form-register {
  display: flex;
  flex-direction: column;
}

.label-register {
  font-size: 14px;
  margin-bottom: 8px;
  text-align: initial;
  font-weight: 600;
}

.fill{
  margin-bottom: 35px;
}

.input-register {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 12px;

}

.acc{
  display: flex;
  flex-direction: row;
  font-size: 14px;
  text-align: initial;
}

.acc-login{
  text-decoration: none;
  color: #6d6c6c;
  margin-left: 1px;
}

.acc-login:hover{
  text-decoration: underline;
}
.btn-register{
  display: flex;
  flex-direction: row;
  /* justify-content: end; */
  margin-top: 20px;
  gap: 4.8rem;
}
.button-register {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  align-items: end;
}

.button-register:hover {
  background-color: #ccc;
}
  </style>
  