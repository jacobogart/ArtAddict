<template>
  <article class="info-card">
    <h2>{{currentPainting.title}}</h2>
    <p>Period: {{currentPainting.period}}</p>
    <p>Medium: {{currentPainting.medium}}</p>
    <p>Artist: {{currentPainting.artist}}</p>
    <p class="credit">{{currentPainting.credit}}</p>
  </article>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["currentPainting"]
};
</script>

<style scoped>
.info-card {
  font-family: Arial, Helvetica, sans-serif;
  width: 450px;
  height: 165px;
  background-color: rgb(250, 244, 228);
  padding: 10px;
  margin-right: 30px;
  overflow: scroll;
}

h2 {
  margin: 0;
  font-size: 20px;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}

.credit {
  margin-top: 10px;
}
</style>
