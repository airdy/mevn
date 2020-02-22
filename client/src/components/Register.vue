<!--suppress ALL -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="Enter email"
            >
          </div>
          <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            v-model="username"
            class="form-control"
            name="username"
            placeholder="Enter username"
          >
        </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <label for="bio">Biography</label>
            <input
              type="text"
              v-model="bio"
              class="form-control"
              name="biography"
              placeholder="Enter your biography"
            >
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Register!</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import router from '../router';

export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      bio: '',
    };
  },
  methods: {
    register() {
      axios.post('/users/register',
        {
          email: this.email,
          username: this.username,
          password: this.password,
          bio: this.bio,
        },
      ).then((res) => {
        router.push({ name: 'Login' });
        // eslint-disable-next-line no-console
        console.log(res);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    },
  },
};
</script>
