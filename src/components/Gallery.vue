<template>
  <section class="gallery">
    <img
      src="../assets/portraitFrame.png"
      alt="Image Frame"
      class="frame"
      v-bind:style="{ 
        width: this.findWidth() * 1.38 + 'px',
      }"
    />
    <img
      class="painting"
      v-bind:src="currentPainting.imageURL"
      v-bind:alt="currentPainting.title"
      v-bind:style="{ 
        width: this.findWidth() + 'px',
      }"
    />
  </section>
</template>

<script>
import { fetchPainting } from "../../api/fetchPainting";

export default {
  name: "Gallery",
  data() {
    return {
      currentPainting: {},
      currentPage: 126
    };
  },
  methods: {
    findWidth() {
      return (this.currentPainting.width / this.currentPainting.height) * 400
    }
  },
  created() {
    fetchPainting(this.currentPage)
      .then(result => (this.currentPainting = result))
      .then(() => this.currentPage++);
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px
}
.frame,
.painting {
  position: absolute;
}

.frame {
  z-index: 1;
  height: 600px
}

.painting {
  height: 400px
}
</style>
