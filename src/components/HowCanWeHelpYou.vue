<template>
  <div class="help-you-container">
    <div class="header-section">
      <h2>{{ pageData.title }}</h2>
      <p v-html="pageData.subTitle"></p>
    </div>

    <div class="card-section">
      <div class="individual-section">
        <label>
          I am
          <select v-model="individualOption">
            <option value="individual" style="color: rgb(11, 11, 39)">
              {{ pageData.selectIndividual }}
            </option>
          </select>
        </label>
      </div>

      <div class="learn-section">
        <label>
          and I want
          <select v-model="learnOption">
            <option value="learn">want to learn</option>
          </select>
        </label>
      </div>

      <button class="start-now-button">Start now</button>
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
      individualOption: "individual",
      learnOption: "learn",
      pageData: {},
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await client.getEntry(config.entries.howCanWeHelpYou);
        console.log(response);
        this.pageData = {
          title: response.fields.title,
          subTitle: response.fields.subTitle,
          selectIndividual: response.fields.selectIndividual,
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.help-you-container {
  background-color: #f2f2f2;
  padding: 20px;
  box-sizing: border-box;
}

.header-section {
  text-align: left;
}

.header-section h2 {
  color: #000;
  font-weight: bold;
}

.card-section {
  margin-top: 20px;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  padding: 20px;
  justify-content: center;
}

.individual-section,
.learn-section {
  display: flex;
  margin-bottom: 10px;
}

.card label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.card label select {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
}

.start-now-button {
  background-color: #760a0a;
  color: #ffffff;
  border: none;
  padding: 7px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 25px;
  margin-left: 10px;
  margin-bottom: 7px;
}

/* Media query for smaller screens */
@media (max-width: 268px) {
  .individual-section,
  .learn-section {
    flex: 1;
  }
}
</style>
