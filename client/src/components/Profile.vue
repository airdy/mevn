<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">PROFILE</h1>
        <h6 class="text-center">There's information get from localStorage</h6>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
        <tr>
          <td>Email</td>
          <td>{{email}}</td>
        </tr>
        <tr>
          <td>Username</td>
          <td>{{username}}</td>
        </tr>
        <tr>
          <td>Bio</td>
          <td>{{bio}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import jwtDecode from 'jwt-decode';

// noinspection JSUnusedGlobalSymbols
export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    return {
      email: decoded.email,
      username: decoded.username,
      bio: decoded.bio,
    };
  },
};
</script>
