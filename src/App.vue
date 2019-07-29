<template>
  <div id="app">
    <Header />
    <Gallery />
  </div>
</template>

<script>
import Header from "./components/Header";
import Gallery from './components/Gallery';

export default {
  name: "app",
  components: {
    Header,
    Gallery
  }
};
</script>

<style>
</style>
