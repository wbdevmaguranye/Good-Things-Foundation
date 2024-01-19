<template>
  <div class="who-we-are-container">
    <div class="image-section">
      <img
        src="https://www.goodthingsfoundation.org/wp-content/uploads/2023/06/CM10009-scaled.jpg"
        alt="Description of the image"
      />
    </div>

    <div class="text-section">
      <h2>{{ pageData.heading }}</h2>
      <p v-html="pageData.description"></p>
      <button class="learn-more-button">Learn more about us</button>
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
        const response = await client.getEntry(config.entries.whoWeAre);
        this.pageData = {
          heading: response.fields.headingWhoweare,
          description: response.fields.subheadingWhoweare,
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.who-we-are-container {
  display: flex;
  flex-direction: column;
}

.image-section img {
  width: 100%;
  height: auto;
}

.text-section {
  background-color: #0d4721;
  color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}

.text-section h2 {
  font-size: 24px;
  margin-top: 15px;
}

.text-section p {
  margin-top: 30px;
}

.learn-more-button {
  background-color: #0d4721;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

@media (min-width: 768px) {
  .who-we-are-container {
    flex-direction: row;
  }

  .text-section {
    margin-left: 0px;
    width: 200%;
  }
}
</style>
