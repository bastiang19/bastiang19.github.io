<template>
  <div id="app">
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand logo_h" href="index.html">
              <img src="assets/img/logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="icon-bar">
              </span>
              <span class="icon-bar">
              </span>
              <span class="icon-bar">
              </span>
            </button>
            <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul class="nav navbar-nav menu_nav justify-content-end">
                <li class="nav-item">
                  <router-link to="/">
                    <a class="desctopIcons" style="font-size: 19px;margin-right: 3px;">&#128213;
                    </a>
                    <a class="nav-link">Home
                    </a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about">
                    <a class="desctopIcons" style="font-size: 19px;margin-right: 3px;">&#127988;
                    </a>
                    <a class="nav-link">About
                    </a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/bots">
                    <a class="desctopIcons" style="font-size: 19px;margin-right: 3px;">&#129302;
                    </a>
                    <a class="nav-link">Bots
                    </a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/sites">
                    <a class="desctopIcons" style="font-size: 19px;margin-right: 3px;">&#128187;
                    </a>
                    <a class="nav-link">WebSites
                    </a>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/contacts">
                    <a class="desctopIcons" style="font-size: 19px;margin-right: 3px;">&#128222;
                    </a>
                    <a class="nav-link">Contacts
                    </a>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!-- ///////////////////////////////// -->
    <router-view/>
  </div>
</template>



<script>
  export default {
  }
</script>

<style>
  .nav .router-link-exact-active a{
    color: #007bff!important;
  }
</style>
