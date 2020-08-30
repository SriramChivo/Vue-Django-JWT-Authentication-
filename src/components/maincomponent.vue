<template>
  <div>
    <div class="container">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import signIn from "./signin";
// import signIUp from "./signup";
import navBar from "./navbar";
export default {
  components: {
    // signIn,
    // signIUp,
    navBar
  },
};
</script>