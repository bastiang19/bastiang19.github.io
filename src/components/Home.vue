<template>
  <div>
    <section class="home_banner_area">
      <div class="banner_inner">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="banner_content">
                <h3 class="text-uppercase">Hell0
                </h3>
                <h1 class="text-uppercase">I am gleb 
                </h1>
                <h5 class="text-uppercase">web developer
                </h5>
                <div class="d-flex align-items-center">
                  <router-link to="/contacts">
                  	<a class="primary_btn" href="/contacts">
                    	<span>Follow Me
                    	</span>
                  	</a>
              	  </router-link>
                  <a class="primary_btn tr-bg" href="#">
                    <span>Get CV
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="home_right_img">
                <img class="" src="assets/img/banner/home-right.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about_area section_gap">
      <div class="container">
        <div class="row justify-content-start align-items-center">
          <div class="col-lg-5">
            <div class="about_img">
              <img class="" src="assets/img/about-us.png" alt="">
            </div>
          </div>
          <div class="offset-lg-1 col-lg-5">
            <div class="main_title text-left">
              <h2>something 
                <br>
                about 
                <br>
                me
              </h2>
              <p>
                Belarus. Minsk. 19 years. Turning the internet into art.
              </p>
              <p>
                Cocktail of my skills: PHP, CSS, HTML, JavaScript, Jquery, Vue.js, Laravel, Xenforo, Mysql, Git, Linux, Node.js, Puppeteer, Playwright, NativeScript, React.js, Telegraf.js, ...
              </p>
              <a class="primary_btn" href="#">
                <span onclick="window.location.href='https://t.me/bastiang19'">Write me
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="brand_area section_gap_bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="row">
              <div class="about_img">
                <img style="width: 100%;height: auto;" src="assets/img/second-banner.png" alt="">
              </div>
            </div>
          </div>
          <div class="offset-lg-2 col-lg-4 col-md-6">
            <div class="client-info">
              <div class="d-flex mb-50">
                <span class="lage"> &nbsp;&nbsp;5
                </span>
                <span class="smll">Years Experience Working
                </span>
              </div>
              <div class="call-now d-flex">
                <div>
                  <span class="fab fa-telegram-plane">
                  </span>
                </div>
                <div class="ml-15">
                  <p>write me now
                  </p>
                  <h3>
                    <i class="fas fa-at">
                    </i>
                    <a style="color:black!important;" href="https://t.me/bastiang19">bastiang19
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="features_area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="main_title">
              <h2>service offers 
              </h2>
              <p>
                May the force be with you to order from me 
                <br> one of the work variants below
              </p>
            </div>
          </div>
        </div>
        <div class="row feature_inner">
          <div class="col-lg-3 col-md-6">
            <div class="feature_item">
              <img src="assets/img/services/s1.png" alt="">
              <h4>Web developing
              </h4>
              <p>Development of sites of any complexity. Forums, landings, whatever...
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature_item">
              <img src="assets/img/services/s3.png" alt="">
              <h4>TG/VK Bots
              </h4>
              <p>Development of absolutely any bots in popular messengers
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature_item">
              <img src="assets/img/services/s4.png" alt="">
              <h4>seo optimize
              </h4>
              <p>Optimize your sites for search engines
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="feature_item">
              <img src="assets/img/services/s2.png" alt="">
              <h4>Automation
              </h4>
              <p>Automation of actions in browser
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
  export default {
  }
</script>
