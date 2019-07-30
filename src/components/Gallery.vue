<template>
  <section class="gallery">
    <Portrait v-bind:currentPainting="currentPainting" />
    <div class="info-button-holder">
      <InfoCard v-bind:currentPainting="currentPainting" />
      <button @click="nextPage">MORE ART</button>
    </div>
  </section>
</template>

<script>
import { fetchPainting } from "../../api/fetchPainting";
import Portrait from "./Portrait";
import InfoCard from "./InfoCard";

export default {
  name: "Gallery",
  components: {
    Portrait,
    InfoCard
  },
  data() {
    return {
      currentPainting: {},
      currentPage: 1
    };
  },
  methods: {
    nextPage() {
      this.currentPage++;
      this.getPainting();
    },
    getPainting() {
      fetchPainting(this.currentPage).then(result => {
        this.currentPage = result.pageNum;
        this.currentPainting = result.cleanPainting;
      });
    }
  },
  created() {
    this.getPainting();
  }
};
</script>

<style scoped>
.gallery {
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 720px;
}

.info-button-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
}

button {
  font-size: 24px;
  padding: 5px 20px;
  background-color: rgb(115, 177, 208);
  border: none;
  color: #351431;
  height: 80px;
}
</style>
