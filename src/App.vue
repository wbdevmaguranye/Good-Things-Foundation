<template>
  <div id="app">
    <header>
      <!-- Include the TopNavMenu component -->
      <TopNavMenu />
      <!-- Navigation Menu -->
      <NavMenu />
    </header>
    <main>
      <!--  main content goes here -->
      <LandingPageMain />
      <WhoWeAre />
      <HowCanWeHelpYou />
      <WhatWeDo />
    </main>
    <router-view></router-view>
   
      <FooterForm />
    
  </div>
</template>

<script>
import TopNavMenu from "@/components/TopNavMenu.vue";
import NavMenu from "@/components/NavMenu.vue";
import LandingPageMain from "@/components/LandingPageMain.vue";
import WhoWeAre from "@/components/WhoWeAre.vue";
import HowCanWeHelpYou from "@/components/HowCanWeHelpYou.vue";
import WhatWeDo from "@/components/WhatWeDo.vue"
import FooterForm from "@/components/FooterForm.vue";

export default {
  name: "App",
  components: {
    // Register  components here
    TopNavMenu,
    NavMenu,
    LandingPageMain,
    WhoWeAre,
    HowCanWeHelpYou,
    WhatWeDo,
    FooterForm,
  },
};
</script>

<style>
/* Reset some default styles */
body,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #ffffff;
  color: white;
  padding: 15px;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
