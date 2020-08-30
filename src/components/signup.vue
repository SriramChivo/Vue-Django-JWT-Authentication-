<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username:</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">FirstName</label>
        <input
          v-model="fn"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">LastName</label>
        <input
          v-model="ln"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
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
      <button @click.prevent="submitData" type="submit" class="btn btn-primary">Submit</button>
    </form>
    {{userCreated}}
    {{usercreated}}
    <template v-if="userCreated">
      <div>
        <p class="lead text-success">User Created Successfully</p>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      email: "",
      fn: "",
      ln: "",
      pwd: "",
      usercreated: this.$store.state.IsUserCreated,
    };
  },
  computed: {
    ...mapGetters(["userCreated"]),
  },
  methods: {
    submitData() {
      var formdata = {
        username: this.username,
        email: this.email,
        first_name: this.fn,
        last_name: this.ln,
        password: this.pwd,
      };
      console.log(formdata);
      this.$store.dispatch("CreateUserAction", formdata);
    },
  },
  watch: {
    "$store.state.IsUserCreated"() {
      console.log("hello all");
      this.usercreated = this.$store.state.IsUserCreated;
    },
  },
};
</script>