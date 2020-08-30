<template>
  <div class="container p-4">
    <div class="row my-4 p-4">
      <div class="col-md-6 offset-md-3">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter a username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="pwd"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button @click.prevent="Done" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
    };
  },
  methods: {
    Done() {
      var data = {
        username: this.username,
        password: this.pwd,
      };
      console.log(data);
      this.$store.dispatch("getTokeAction", data);
    },
  },
};
</script>