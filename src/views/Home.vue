<template lang="pug">
  .home
    .header
      .nav
        .logo
          h2 B
        .links
          .link.active About 
          .link Website
          .link(@click="goRoute('branding')") Branding
      .centerText
        h1.title Commercial builders with pride - workmanship that values quality.
        p.subtitle Acclaim Contractors are a highly specialised local bussiness with over 20 years building and civil industry experience with many accolades, commendations and awards recognising their workmanship. Acclaim Contractors are a highly specialised local bussiness with over 20 years building.
      .copyWrapper
        .copyright Block studio©2018 Copyright. All Rights Reserved.
      .socialIcon
        font-awesome-icon.icon(:icon="['fab', 'facebook-f']")
        font-awesome-icon.icon(:icon="['fab' ,'instagram']")
        font-awesome-icon.icon(:icon="['fab', 'youtube']")
      .scrollIndicator
        .text Scroll
        .underline
    .work
      .title()
        h1 Works
      .cardWrapper
        .card.titleCard.activeHover
          .upFlex
            h2 Award winning civil contractors that partner with all levels of government.
          .downFlex
            .divid
            p The Australian Treasury Building & King Edward TCE Barton Canberra City.
          .nextIcon
            .arrow
        .card.titleCard
          .upFlex
            h2 Known for their innovation in providing solutions. 
          .downFlex
            .divid
            p The Australian Treasury Building & King Edward TCE Barton Canberra City.
          .nextIcon
            .arrow
        .card.titleCard
          .upFlex
            h2 Woden Public Realm Improvements Works Package 1
          .downFlex
            .divid
            p The Australian Treasury Building & King Edward TCE Barton Canberra City.
          .nextIcon
            .arrow

      .cardWrapper
        .card.descCard
          .imageContainer
          .imageDesc
            .btn Award
            h3 Woden Public Realm Improvements Works Package 1 Including Lift & Stairs
            p Urban Public Realm Refurbishment.
            .clientStatus
              .box
                h4 CLIENT
                p ACT Government
              .box
                h4 STATUS
                p Completed 2017

        .card.descCard
          .imageContainer
          .imageDesc
            .btn Award
            h3 Woden Public Realm Improvements Allara Street Segregated Cycleway
            p Urban Public Realm Refurbishment. Urban Public Realm Refurbishment.

            .clientStatus
              .box
                h4 CLIENT
                p ACT Government
              .box
                h4 STATUS
                p Completed 2017
        .card.descCard.activeHover
          .imageContainer
          .imageDesc
            .btn Award
            h3 Woden Public Realm Improvements Works Package 1 Including Lift & Stairs
            p Urban Public Realm Refurbishment.Urban Public Realm Refurbishment. Urban Public Realm Refurbishment.

            .clientStatus
              .box
                h4 CLIENT
                p ACT Government
              .box
                h4 STATUS
                p Completed 2017
      
      .workDetail
        .line
        h3 Woden Public Realm Improvements Works Package 1 Including Lift & Stairs.
        .btn More
    .footer
      .footerDesc
        .logo
          h2 B
        .desc
          .descTitle
            .t About
            .t Website
            .t Branding
          .descDesc
            p T.02-2885-8586
            p T.02-2885-8586
            p T.02-2885-8586
        .socialIcon
          font-awesome-icon.icon(:icon="['fab', 'facebook-f']")
          font-awesome-icon.icon(:icon="['fab' ,'instagram']")
          font-awesome-icon.icon(:icon="['fab', 'youtube']")
      .divid
      h4 Block studio©2018 Copyright. All Rights Reserved.

</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Home",
  mounted() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    // You can also pass an optional settings object
    // below listed default settings
  },
  components: {},
  methods: {
    goRoute(t) {
      console.log(t);
      this.$router.push({ path: "about" });
    },
  },
};
</script>

<style lang="scss" scoped>
$title_text: 4rem;
$p_text: 1rem;
$h2_text: 2.3rem;
$h3_text: 2.35rem;
$subtitle_text: 1.3rem;
$gap: 10px;
$workpadding: 8vw;

.home {
  width: 100vw;
  height: 100vh;
}
.card {
  flex: 1;
  position: relative;
}
.activeHover {
  box-shadow: 3px 3px 14px rgb(212, 212, 212);
}
.header {
  box-sizing: border-box;
  background-image: url("https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  padding: 10%;
  height: 100vh;
  .nav {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 6%);
    top: 0;
    .logo {
      position: relative;
      margin: 2rem 0px;
      h2 {
        margin: 0;
        &::after {
          content: "";
          position: absolute;
          width: $h2_text / 2;
          height: 5px;
          background-color: #fff;
          left: 50%;
          transform: translateX(-50%);
          top: -5px;
        }
      }
    }
    .links {
      display: flex;

      .link {
        padding: 20px;
        position: relative;
        cursor: pointer;
        &::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 1px;
          background-color: #fff;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
          transition: 0.3s;
        }
        &:hover {
          &::after {
            content: "";
            position: absolute;
            width: 70%;
            height: 1px;
            background-color: #fff;
            left: 50%;
            bottom: 10px;
            transform: translateX(-50%);
          }
        }
      }
      .active {
        padding: 20px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 70%;
          height: 1px;
          background-color: #fff;
          left: 50%;
          bottom: 10px;
          transform: translateX(-50%);
        }
      }
    }
  }
  .centerText {
    width: 100vw;
    margin-top: 6%;
    position: relative;
    .title {
      font-weight: bold;
      font-size: $title_text;
      line-height: 110%;
    }
    .subtitle {
      padding: 0% 15%;
      margin-top: 30px;
      font-size: $p_text;
    }
  }

  .copyWrapper {
    position: absolute;
    left: 3%;
    top: 35%;
    .copyright {
      transform-origin: left center;
      transform: rotate(90deg);
      font-size: 0.8rem;
    }
  }

  .socialIcon {
    position: absolute;
    left: 3%;
    display: flex;
    bottom: 3%;

    .icon {
      margin-right: 4rem;
      font-size: 1.6rem;
      vertical-align: baseline;
    }
  }

  .scrollIndicator {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 3%;
    .text {
      margin-bottom: 1rem;
    }
    .underline {
      background-color: #fff;
      width: 1px;
      height: 60px;
    }
  }
}

.work {
  width: 100vw;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  background-color: #fff;
  color: black;
  padding: $workpadding;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    font-size: $title_text;
    font-weight: bold;
  }
  .workDetail {
    margin-top: 10rem;
    width: 46%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .line {
      width: 1px;
      height: 150px;
      background: #000;
    }
    h3 {
      font-weight: normal;
      font-size: 1.5rem;
    }
    .btn {
      padding: 15px 100px;
      cursor: pointer;
      border: 1px solid rgb(82, 82, 82);
    }
  }
}

.cardWrapper {
  .card:nth-child(2) {
    transform: translateY(40px);
  }
  .card:nth-child(3) {
    transform: translateY(80px);
  }
  display: flex;
  padding: 0 $gap 0 $gap;
  .titleCard {
    padding: 0px 20px;
    margin: $gap;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s;
    .divid {
      height: 4px;
      width: 20px;
      background-color: black;
      margin: 1.3rem 0;
    }
    .nextIcon {
      height: 80px;
      background-color: none;
    }

    &:hover {
      box-shadow: 3px 3px 14px rgb(212, 212, 212);
    }
  }
  .descCard {
    margin: $gap;
    text-align: left;
    transition: 0.3s;
    .imageContainer {
      height: 350px;
      width: 100%;
      background-color: rgb(177, 177, 177);
      background-image: url("https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .imageDesc {
      padding: 20px;
      p {
        line-height: 200%;
      }
      .btn {
        color: white;
        background-color: black;
        border-radius: 5px;
        padding: 12px 10px;
        width: 50px;
        text-align: center;
      }
      .clientStatus {
        display: flex;
        .box {
          flex: 1;
          h4 {
            color: rgb(216, 216, 216);
            margin: 0;
          }
          p {
            margin: 0;
          }
        }
      }
    }

    &:hover {
      box-shadow: 3px 3px 24px rgb(212, 212, 212);
    }
  }
}

.arrow {
  height: 1px;
  width: 25px;

  background-color: rgb(0, 0, 0);
  position: absolute;
  right: 20px;
  bottom: 40px;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    height: 1px;
    width: 8px;
    background: rgb(0, 0, 0);
    transform-origin: right bottom;
    transform: rotate(45deg);
  }
}
</style>
