<template>
  <img src="../assets/portraitFrame.png" alt="Image Frame" class="frame"/>
</template>

<script>
import { fetchPainting } from '../../api/fetchPainting';

export default {
  name: 'Gallery',
  data() {
    return {
      currentPainting: {},
      currentPage: 1
    }
  },
  created() {
    fetchPainting(this.currentPage)
      .then(result => this.currentPainting = result)
      .then(() => this.currentPage++)
  }
};
</script>

<style scoped>
.frame {
  height: 100px;
  width: 200px
}
</style>
