<template>
  <section class="gallery">
    <Portrait v-bind:currentPainting="currentPainting" />
    <button @click="nextPage">MORE ART</button>
  </section>
</template>

<script>
import { fetchPainting } from "../../api/fetchPainting";
import Portrait from "./Portrait";

export default {
  name: "Gallery",
  components: {
    Portrait
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
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 620px;
}

button {
  margin-top: 20px;
  align-self: flex-end;
  position: absolute;
  font-size: 24px;
  padding: 5px 20px;
  background-color: rgb(115, 177, 208);
  border: none;
  color: #351431;
}
</style>
