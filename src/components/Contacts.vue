<template>
  <div>
    <section class="banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="container">
                <div class="banner_content text-center">
                    <h2>Contacts</h2>
                    <div class="page_link">
                        <router-link  to="/"><a>Home</a></router-link>
                        <router-link to="/cotacts"><a>Contacts</a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contact_area section_gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="contact_info">
              <div class="info_item">
                <i class="fab fa-telegram-plane contactIcons">
                </i>
                <h6>
                  <a href="https://t.me/bastiang19">
                    @bastiang19
                  </a>
                </h6>
                <p>Mon to Sun 9am to 11 pm
                </p>
              </div>
              <div class="info_item">
                <i class="lnr lnr-envelope">
                </i>
                <h6>
                  <a>
                    <span class="__cf_email__">bastiang19@protonmail.com
                    </span>
                  </a>
                </h6>
                <p>Send me your query anytime!
                </p>
              </div>
              <div class="info_item">
                <i class="far fa-home contactIcons">
                </i>
                <h6>Belarus, Minsk <img src="assets/img/bel/22.png" height="20px" />
                </h6>
                <p>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            
<div class="space planett">
  <div class="ship">
    <div class="ship-rotate">
      <div class="pod"></div>
      <div class="fuselage"></div>
    </div>
  </div>
  <div class="ship-shadow"></div>
  <div class="mars">
    <div class="tentacle"></div>
    <div class="flag">
      <div class="flag1"></div>
      <div class="flag2"></div>
      <div class="small-tentacle"></div>
    </div>
    <div class="planet">
      <div class="surface"></div>
      <div class="crater1"></div>
      <div class="crater2"></div>
      <div class="crater3"></div>
    </div>
  </div>
  <div class="test"></div>
</div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact_area section_gap planettt">
        <div class="container">
            <div class="row">
                <div class="space">
  <div class="ship">
    <div class="ship-rotate">
      <div class="pod"></div>
      <div class="fuselage"></div>
    </div>
  </div>
  <div class="ship-shadow"></div>
  <div class="mars">
    <div class="tentacle"></div>
    <div class="flag">
      <div class="flag1"></div>
      <div class="flag2"></div>
      <div class="small-tentacle"></div>
    </div>
    <div class="planet">
      <div class="surface"></div>
      <div class="crater1"></div>
      <div class="crater2"></div>
      <div class="crater3"></div>
    </div>
  </div>
  <div class="test"></div>
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

<style type="text/css">
@media(min-width:992px) {
    .planettt {
        display: none;
    }
}
@media(max-width:991px) {
    .planett {
        display: none;
    }
}
    .contactIcons {
        background: -webkit-linear-gradient(90deg, #4458dc 0%, #854fee 100%);
        background-clip: border-box;
        position: absolute;
        left: 0;
        top: 0;
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
    }

.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: #435d70;*/
  overflow: hidden;
}
.space .mars {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
}
.space .mars .tentacle {
  position: absolute;
  top: -60px;
  right: -80px;
  z-index: 1;
  height: 70px;
  width: 70px;
  box-sizing: border-box;
  border-radius: 100%;
  border-left: 15px solid #1aae1e;
  transform: rotate(-30deg);
  animation: tentacle 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
.space .mars .flag {
  position: absolute;
  height: 17px;
  width: 15px;
  top: -57px;
  left: -1px;
  animation: flag-pole 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
.space .mars .flag:before {
  content: "";
  position: absolute;
  height: 17px;
  width: 2px;
  background: #aaa;
}
.space .mars .flag:after {
  content: "";
  position: absolute;
  height: 3px;
  width: 14px;
  left: 2px;
  border-top:0.5px solid #aaa;
  border-right:0.5px solid #aaa;
  top: 0;
  background: #fff;
  animation: flag-unfurl 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
.space .mars .flag1:after {
  content: "";
  position: absolute;
  height: 3px;
  width: 14px;
  left: 2px;
  top: 3px;
  background: red;
  border-right:0.5px solid #aaa;
  animation: flag-unfurl 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
.space .mars .flag2:after {
  content: "";
  position: absolute;
  height: 3px;
  width: 14px;
  left: 2px;
  border-bottom:0.5px solid #aaa;
  border-right:0.5px solid #aaa;
  top: 6px;
  background: #fff;
  animation: flag-unfurl 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
.space .mars .flag .small-tentacle {
  position: absolute;
  left: -16px;
  top: 3px;
  height: 50px;
  width: 50px;
  border-left: 10px solid #1aae1e;
  border-radius: 100%;
  transform: rotate(25deg);
  animation: small-tentacle 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
  z-index: 2;
}
.space .mars:before {
  content: "";
  position: absolute;
  top: 80px;
  left: -30px;
  height: 10px;
  width: 60px;
  background: rgba(0, 0, 0, 0.2);
  background: #374d5c;
  border-radius: 100%;
}
.space .mars .planet {
  box-sizing: border-box;
  position: absolute;
  border-radius: 100%;
  height: 120px;
  width: 120px;
  overflow: hidden;
  margin-left: -60px;
  margin-top: -60px;
  z-index: 2;
}
.space .mars .planet .surface {
  position: absolute;
  border-radius: 100%;
  height: 140%;
  width: 140%;
  top: -30%;
  right: -10%;
  box-sizing: border-box;
  border: 30px solid rgba(0, 0, 0, 0.15);
  background: #ff5f40;
}
.space .mars .planet .crater1, .space .mars .planet .crater2, .space .mars .planet .crater3 {
  position: absolute;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 3px 3px 0 rgba(0, 0, 0, 0.2);
}
.space .mars .planet .crater1 {
  height: 20px;
  width: 20px;
  top: 32%;
  left: 17%;
}
.space .mars .planet .crater2 {
  height: 10px;
  width: 10px;
  top: 26%;
  left: 55%;
  box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.2);
}
.space .mars .planet .crater3 {
  height: 10px;
  width: 10px;
  top: 60%;
  left: 40%;
  box-shadow: inset 2px 2px 0 rgba(0, 0, 0, 0.2);
}
.space .ship {
  position: absolute;
  right: 50%;
  top: 50%;
  margin-top: -55px;
  margin-right: -55px;
  height: 22px;
  background: rgba(0, 0, 0, 0.1);
  transform-origin: 0% 100% 0;
  z-index: 1;
  animation: ship 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
.space .ship .ship-rotate {
  position: absolute;
  height: 22px;
  transform: rotate(-110deg);
  animation: ship-rotate 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
.space .ship .pod {
  position: absolute;
  top: 0px;
  left: -8px;
  height: 15px;
  width: 15px;
  background: white;
  border-radius: 100% 0 100% 0;
  transform: rotate(-45deg);
  border-right:0.8px solid #aaa;
  border-top:0.8px solid #aaa;
  border-left:0.8px solid #aaa;
  border-bottom:0.8px solid #aaa;
}

.space .ship .pod::before {
  content: '';
  position: absolute;
  top: 3.5px;
  left: 0;
  right: 0;
  width: 80%;
  height: 5px;
  background: red;
   border-radius: 30px 30px 30px 30px;
   margin-bottom: 2px!important;
   margin-left: 2px!important;
   transform: rotate(45deg);
  /*border-bottom-left-radius: 9px;*/
}


.space .ship .fuselage {
  position: absolute;
  top: 14px;
  left: -6px;
  height: 8px;
  width: 12px;
  background: #eee;
  border-radius: 100% 100% 0 0;
  border-right:0.8px solid #aaa;
  border-left:0.8px solid #aaa;
}
.space .ship .fuselage:after {
  content: "";
  position: absolute;
  left: 2px;
  top: 100%;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid red;
}
.space .ship-shadow {
  position: absolute;
  right: 10%;
  top: 50%;
  margin-right: -28px;
  margin-top: 83px;
  height: 4px;
  width: 16px;
  background: #374d5c;
  border-radius: 100%;
  animation: ship-shadow 12s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}
@keyframes small-tentacle {
  0% {
    transform: rotate(-60deg);
  }
  86% {
    transform: rotate(-60deg);
  }
  89% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
@keyframes tentacle {
  0% {
    transform: rotate(-30deg);
  }
  75% {
    transform: rotate(-30deg);
  }
  80% {
    transform: rotate(-165deg) translate(6px, 8px);
  }
  82.5% {
    transform: rotate(-165deg) translate(28px, -17px);
  }
  100% {
    transform: rotate(-165deg) translate(35px, -22px);
  }
}
@keyframes ship {
  0% {
    right: -10%;
    top: -10%;
    margin-top: -55px;
    margin-right: -55px;
  }
  40% {
    right: 50%;
    top: 50%;
  }
  79.5% {
    margin-top: -55px;
    margin-right: -55px;
  }
  84% {
    margin-top: -20px;
    margin-right: 0px;
  }
  100% {
    right: 50%;
    top: 50%;
    margin-top: 0px;
    margin-right: 0px;
  }
}
@keyframes ship-rotate {
  0% {
    transform: rotate(-110deg);
  }
  20% {
    transform: rotate(-110deg);
  }
  34% {
    transform: rotate(47deg);
  }
  79% {
    transform: rotate(47deg);
  }
  100% {
    transform: rotate(47deg);
  }
}
@keyframes ship-shadow {
  0% {
    right: -10%;
    transform: scale(1.4, 1);
    opacity: 0.3;
  }
  40% {
    right: 50%;
    transform: scale(0.75, 1);
    opacity: 1;
  }
  100% {
    right: 50%;
  }
}
@keyframes planet-bump {
  0% {
    margin-left: 0;
  }
  39% {
    margin-left: 0;
  }
  40% {
    margin-left: -1px;
  }
  40.5% {
    margin-left: 1px;
  }
  41% {
    margin-left: 0;
  }
  100% {
    margin-left: 0;
  }
}
@keyframes flag-pole {
  0% {
    top: -57px;
  }
  48% {
    top: -57px;
  }
  54% {
    top: -77px;
  }
  90% {
    top: -77px;
  }
  92% {
    top: -57px;
  }
  100% {
    top: -57px;
  }
}
@keyframes flag-unfurl {
  0% {
    width: 0;
  }
  55% {
    width: 0;
  }
  60% {
    width: 14px;
  }
  90% {
    width: 14px;
  }
  100% {
    width: 14px;
  }
}

</style>