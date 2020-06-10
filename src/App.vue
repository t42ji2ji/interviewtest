<template lang="pug">
  #app
    router-view

</template>

<style lang="scss">
$title_text: 4rem;
$p_text: 1rem;
$h2_text: 2.3rem;
$h3_text: 2.35rem;
$subtitle_text: 1.3rem;
$gap: 10px;
$workpadding: 8vw;

h1 {
  font-size: $title_text;
}
h2 {
  font-size: $h2_text;
  font-weight: 500;
}
h4 {
  font-weight: 500;
}
p {
  font-size: $p_text;
}
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
html,
body {
  margin: 0;
  overflow-x: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.bgsetting {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.footer {
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: normal;
    margin: 13px;
  }
  .footerDesc {
    padding: 4vw $workpadding 1vw 4vw;
    display: flex;

    .desc {
      flex: 9;
      text-align: left;
      .descTitle {
        display: flex;
        margin-bottom: 22px;
        .t {
          font-size: 1.2rem;
          min-width: 200px;
        }
      }
      p {
        margin: 10px 0px;
      }
    }
    .logo {
      flex: 1;
      position: relative;
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
    .socialIcon {
      flex: 2;
      font-size: 1.5rem;
      display: flex;
      justify-content: flex-end;
      .icon {
        margin-left: 40px;
      }
    }
  }
  .divid {
    width: 100vw;
    height: 1.5px;
    margin: 12px 0px;
    background-color: #fff;
  }
}
</style>
