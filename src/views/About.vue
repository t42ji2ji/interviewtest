<template lang="pug">
.branding
  .header
    .nav
      .logo
        h2 B
      .links
        .link(@click="goRoute('/')") About 
        .link Website
        .link.active(@click="") Branding
    .banner
  .work
    .award
      .awardbg
        .logo
          h2 B
      .title 
        h2 Woden Public Realm Improvements Works Package 1 Including Lift & Stairs
        .underline
      .desc
        .desctitle
          h3 Award
        .desccontent
          .state
            .divide
            h4 CLIENT
            h4 ACT Government
          .state
            .divide
            h4 STATUS
            h4 ACT Government
          .state
            .divide
            h4 CLIENT
            h4 ACT Government
          .state
            .divide
            h4 CLIENT
            h4 ACT Government
    .intro
      .introText
        h4 INTRO
        p I'm new in VueJS, I'm using VueJS 2 Webpack template. I was trying to redirect from login component to home component if login successful, I've tried many things but I still getting errors. Here is my routing:ate. I was trying to redirect from login component to home component if login successful, I've tried many things but I still getting errors. Here is my routing:
      .introImage.bgsetting
    .intro
      .fish.bgsetting
      .fishdesc
        .sticker
          .line
          .divide
          p I'm new in VueJS, I'm using VueJS 2 Webpack template. I was trying to redirect from login component to home component if login successful, I've tried many things but I still getting errors. Here is my routing:ate. I was trying to redirect from login component to home component if login successful, I've tried many things but I still getting errors. Here is my routing:
    .video
      .img.bgsetting
        .play
    .blockstudio
      .divider
      .text
        .bgtext Block Studio
        h4 Woden Public Realm Improvements Works Package 1 including Lift & Stairs.
  .pageController
    .last
      .arrow
      h4 Previous
    .next
      h4 Next
      .arrow.white

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
export default {
  name: 'about',
  components: {},
  methods: {
    goRoute(t) {
      console.log(t);
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="scss" scoped>
$title_text: 4rem;
$p_text: 1rem;
$h2_text: 2.3rem;
$h3_text: 2rem;
$subtitle_text: 1.3rem;
$gap: 10px;
$workpadding: 8vw;
$grayText: rgb(172, 172, 172);

h1 {
  font-size: $title_text;
}
h2 {
  font-size: $h2_text;
  font-weight: 500;
}
h3 {
  font-size: $h3_text;
  font-weight: 500;
}
h4 {
  font-weight: 500;
}
p {
  font-size: $p_text;
}
.pageController {
  display: flex;
  width: 100vw;
  height: 100px;
  display: flex;
  h4 {
    margin: 0px 20px;
  }
  .last {
    vertical-align: center;
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    .arrow {
      height: 1px;
      width: 25px;
      background-color: rgb(0, 0, 0);
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        height: 1px;
        width: 8px;
        background: black;
        transform-origin: left bottom;
        transform: rotate(-45deg);
      }
    }
  }
  .next {
    flex: 1;
    color: white;
    background-color: rgb(19, 19, 19);
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow {
      height: 1px;
      width: 25px;
      background-color: rgb(255, 255, 255);
      position: relative;
      &::before {
        content: '';
        position: absolute;
        right: 0;
        height: 1px;
        width: 8px;
        background: white;
        transform-origin: right bottom;
        transform: rotate(45deg);
      }
    }
  }
}
.work {
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  padding: 0 $workpadding 0 $workpadding;

  .blockstudio {
    height: 50vh;
    padding: $workpadding/2 0 $workpadding/2 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .bgtext {
      position: absolute;
      width: 100vw;
      z-index: -1;
      color: rgba(240, 240, 240, 0.384);
      font-size: calc(14vw);
      font-weight: bold;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .divider {
      width: 1px;
      background-color: black;
      flex: 1;
    }
    .text {
      padding: 0 $workpadding * 2 0 $workpadding * 2;
      position: relative;
      h4 {
        font-size: 1.8rem;
        font-weight: normal;
      }
    }
  }
  .video {
    width: 100%;
    height: 100vh;
    padding: $workpadding/2 0 $workpadding/2 0;
    box-sizing: border-box;
    .img {
      width: 100%;
      height: 100%;
      background-image: url('https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');
      display: flex;
      justify-content: center;
      align-items: center;
      .play {
        width: 100px;
        height: 100px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        &::before {
          content: '';
          width: 30px;
          height: 30px;
          background-color: black;
          overflow: hidden;
          transform: translateY(30px) rotate(45deg);
        }
        &::after {
          content: '';
          width: 50px;
          height: 28px;
          z-index: 999;
          background-color: rgb(255, 255, 255);
          overflow: hidden;
          transform: translateY(10px);
        }
      }
    }
  }
  .intro {
    padding: $workpadding/2 0 $workpadding/2 0;
    display: flex;
    text-align: left;
    position: relative;
    .introText {
      padding-right: 4rem;
      h4 {
        color: $grayText;
        margin: 0;
      }
      flex: 7;
      line-height: 170%;
    }
    .introImage {
      flex: 5;
      height: 400px;
      background-color: rgb(177, 177, 177);
      background-image: url('https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');
    }
    .fish {
      background-image: url('https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');
      flex: 7;
      height: 400px;
    }
    .fishdesc {
      flex: 5;
      position: relative;
      .sticker {
        .line {
          position: absolute;
          right: 0;
          top: 100%;
          height: 1px;
          width: 30%;
          transform-origin: left bottom;
          transform: rotate(-50deg);
          background-color: rgb(75, 75, 75);
          // transform: translate(0, -50%);
        }
        background-color: #fff;
        bottom: 0;
        padding: $workpadding/2 $workpadding/4 0 $workpadding/4;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 150%;
        box-sizing: border-box;
      }
    }
  }
  .award {
    padding: $workpadding/2 0 $workpadding/2 0;
    display: flex;
    text-align: left;
    position: relative;
    .awardbg {
      background-color: rgb(248, 248, 248);
      z-index: -1;
      width: 100vw;
      height: calc(100%);
      position: absolute;
      left: -$workpadding;
      top: 0;
      display: flex;
      h2 {
        font-size: 25vw;
        margin: 0;
        color: rgb(230, 230, 230);
        position: relative;
        &::after {
          content: '';
          position: absolute;
          width: 80%;
          height: 20px;
          margin: 25px;
          background-color: rgb(230, 230, 230);
          top: 0;
          left: 0;
        }
      }
    }
    .title {
      flex: 7;
      padding-right: 4rem;
      .underline {
        height: 2px;
        background: #000;
        width: 40%;
      }
    }
    .desc {
      flex: 5;
      display: flex;
      flex-direction: column;
      .desccontent {
        display: flex;
        flex-wrap: wrap;
        .state {
          width: 50%;
          margin-top: 20px;

          h4 {
            line-height: 7px;
            font-weight: normal;
            &:nth-child(2) {
              color: rgb(195, 195, 195);
            }
          }
        }
      }
    }
  }
}
.branding {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.header {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  .banner {
    flex: 1;
    background-color: rgb(177, 177, 177);
    background-image: url('https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.nav {
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 3%;
  top: 0;
  .logo {
    position: relative;
    margin: 2rem 0px;
    h2 {
      margin: 0;
      &::after {
        content: '';
        position: absolute;
        width: $h2_text / 2;
        height: 5px;
        background-color: rgb(0, 0, 0);
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
        content: '';
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: rgb(0, 0, 0);
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        transition: 0.3s;
      }
      &:hover {
        &::after {
          content: '';
          position: absolute;
          width: 70%;
          height: 1px;
          background-color: rgb(0, 0, 0);
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
        content: '';
        position: absolute;
        width: 70%;
        height: 1px;
        background-color: rgb(0, 0, 0);
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
      }
    }
  }
}

.divide {
  width: 20px;
  height: 2px;
  background-color: black;
}
</style>
