<template>
  <div class="portrait">
    <img
      src="../assets/portraitFrame.png"
      alt="Image Frame"
      class="frame"
      v-bind:style="{ 
        width: this.findWidth() * 1.37 + 'px',
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
  </div>
</template>

<script>
export default {
  name: 'Portrait',
  props: ['currentPainting'],
  methods: {
    findWidth() {
        return (this.currentPainting.width / this.currentPainting.height) * 400
      },
  }
};
</script>

<style>
  .portrait {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 620px
  }

  .frame {
    z-index: 1;
    height: 590px
  }

  .painting {
    height: 400px
  }

  .frame,
  .painting {
    position: absolute;
  }

</style>
