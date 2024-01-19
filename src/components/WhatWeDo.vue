<template>
  <div class="what-we-do-container">
    <div class="header-section">
      <h2>What do we do?</h2>
      <p>
        You might not have heard of us, but we're the people behind the
        following impactful programmes.
      </p>
    </div>

    <div class="programmes-section">
      <!-- Use v-for to loop through cardData array from Vuex store -->
      <div v-for="card in $store.state.cardData" :key="card.id" class="card">
        <h3>{{ card.heading }}</h3>
        <p>{{ card.description }}</p>

        <router-link :to="{ name: 'helloWorld' }">
          <button class="read-more-button">Read more</button>
        </router-link>
      </div>
    </div>

    <button @click="redirectToMoreAbout" class="more-about-button">
      More about what we do
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    // You can use this method to navigate to the "More about what we do" route
    redirectToMoreAbout() {
      this.$router.push({ name: "moreAbout" });
    },
  },
};
</script>

<style scoped>
.what-we-do-container {
  background-color: #045970;
  color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}

.header-section {
  text-align: left;
  margin-bottom: 20px;
}

.header-section h2 {
  font-weight: bold;
  margin: 0;
}

.header-section p {
  margin: 10px 0 0;
}

.programmes-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  width: 100%;
  max-width: 220px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.card h3 {
  color: #045970;
  font-weight: bold;
  margin: 0;
}

.card p {
  margin: 10px 0;
  color: black;
}

.read-more-button {
  background-color: #ffffff;
  color: #6b0f0f;
  font-weight: 900;
  border: 2px solid #000000;
  padding: 8px 15px;
  border-radius: 25px;
  cursor: pointer;
}

.more-about-button {
  background-color: #ffffff;
  color: #6b0f0f;
  font-weight: 900;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 100px;
  text-align: left;
}

@media (max-width: 280px) {
  .programmes-section {
    flex-direction: column;
  }

  .card {
    width: 85%;
    font-size: 16px;
  }

  .more-about-button {
    width: 85%;
    margin-right: 0;
  }
}
</style>
