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
    <button @click="nextPage">MORE ART</button>
  </section>
</template>

<script>
  import { fetchPainting } from "../../api/fetchPainting";

  export default {
    name: "Gallery",
    data() {
      return {
        currentPainting: {},
        currentPage: 1
      };
    },
    methods: {
      findWidth() {
        return (this.currentPainting.width / this.currentPainting.height) * 400
      },
      nextPage() {
        this.currentPage++;
        this.getPainting();
      },
      getPainting() {
        fetchPainting(this.currentPage)
        .then(result => { 
          this.currentPage = result.pageNum;
          this.currentPainting = result.cleanPainting
        })
      }
    },
    created() {
      this.getPainting();
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
  .painting,
  button {
    position: absolute;
  }

  .frame {
    z-index: 1;
    height: 600px
  }

  .painting {
    height: 400px
  }

  button {
    align-self: flex-end
  }
</style>
