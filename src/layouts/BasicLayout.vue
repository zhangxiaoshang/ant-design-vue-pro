<template>
  <div>
    <Header />
    <SideMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
export default {
  components: {
    Header,
    SideMenu,
    Footer
  }
};
</script>

<style></style>
