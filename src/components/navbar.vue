<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Vue~Django</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{ name:'signin' }" tags="a" class="nav-item nav-link">SignIn</router-link>
          <router-link :to="{ name:'signup' }" tags="a" class="nav-item nav-link">SignUp</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>