<template>
  <div class="top-nav-menu">
    <div class="search-container">
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-5-5m2-10a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input type="text" class="search-input" placeholder="Search" />
    </div>

    <div class="buttons-container">
      <button class="learn-button">Learn</button>
      <button class="donate-button">Donate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavMenu",
};
</script>

<style scoped>
.top-nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0px;
}

.search-container {
  display: flex;
  align-items: center;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 5px;
}

.search-icon {
  margin-right: 5px;
  background-color: black;
}

.search-input {
  border: none;
  outline: none;
  width: 100%;
}

.buttons-container {
  display: flex;
}

.learn-button,
.donate-button {
  border-left: 1px solid #ccc;
  border-top: none;
  border-right: none;
  padding: 5px 10px;
  margin-left: 0px;
  cursor: pointer;
}

.learn-button {
  font-weight: bold;
  color: black;
  border-bottom: 2px solid green;
}

.donate-button {
  color: white;
  background-color: darkred;
  border-bottom: 2px solid darkred;
}
</style>
