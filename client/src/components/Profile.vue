<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <hi class="text-center">PROFILE</hi>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
        <tr>
          <td>Email</td>
          <td>{{email}}</td>
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

export default {
  data() {
    const token = localStorage.usertoken;
    const decoded = jwtDecode(token);
    return {
      email: decoded.email,
      bio: decoded.bio,
    };
  },
};
</script>
