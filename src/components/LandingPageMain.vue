<template>
  <div class="landing-page-main">
    <div class="background-image">
      <div class="card-heading">
        <h1>{{ pageData.heading }}</h1>
      </div>
      <div class="card-lorem">
        <p v-html="pageData.description"></p>
      </div>
      <button class="get-involved-btn">Get involved now</button>
    </div>
  </div>
</template>

<script>
import { createClient } from "contentful";
import config from "/config";

const client = createClient({
  space: config.contentful.spaceId,
  accessToken: config.contentful.accessToken,
});

export default {
  data() {
    return {
      pageData: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await client.getEntry(config.entries.LandingPageMain);
        this.pageData = {
          heading: response.fields.mainheading,
          description: response.fields.mainsubheading,
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.landing-page-main {
  position: relative;
}

.background-image {
  background: url(https://www.goodthingsfoundation.org/wp-content/uploads/2023/10/Website-banners-Canva-Banner-2.png)
    no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px; 
}

.card-heading {
  background-color: #045970;
  color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  width: 60%; 
  margin-bottom: 20px;
  text-align: left;
  font-size: 34px;
}

.card-lorem {
  background-color: #f9fcff;
  color: #0d4721;
  padding: 20px;
  border-radius: 5px;
  width: 50%; 
  margin-bottom: 20px;
  text-align: justify;
}

.get-involved-btn {
  background-color: #ffffff;
  color: #6b0f0f;
  padding: 15px 30px;
  font-weight: 900;
  border-radius: 25px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .card-heading {
    width: 85%;
    font-size: 24px; 
  }

  .card-lorem {
    width: 85%;
    font-size: 16px; 
  }
}
</style>
