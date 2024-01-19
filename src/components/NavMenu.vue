<template>
  <div class="nav-menu">
    <div class="logo-container">
      <img
        src="https://www.goodthingsfoundation.org/wp-content/uploads/2021/01/good-things-foundation-logo.png"
        alt="Good Things Foundation Logo"
      />
    </div>
    <div class="menu-items">
      <router-link
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :to="menuItem.path"
        >{{ menuItem.label }}</router-link
      >
    </div>
    <div class="hamburger-menu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="mobile-menu-items" v-if="isMobileMenuOpen">
      <router-link
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :to="menuItem.path"
        >{{ menuItem.label }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menuItems() {
      // All menu items for navigation bar, except for the logo are coming from vuex store
      return this.$store.getters.getMenuItems;
    },
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
};
</script>

<style scoped>
.nav-menu {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  color: black;
}

.logo-container {
  flex: 1;
}

.logo-container img {
  max-width: 30%;
  height: auto;
}

.menu-items {
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
}

.menu-items a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}

.hamburger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
}

.hamburger-menu span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
}

.mobile-menu-items {
  display: none;
  flex-direction: column;
  margin-top: 15px;
}

@media (max-width: 768px) {
  /* Show hamburger menu and hide regular menu on smaller screens */
  .hamburger-menu {
    display: flex;
  }

  .menu-items {
    display: none;
  }

  .mobile-menu-items {
    display: flex;
  }
}
</style>
