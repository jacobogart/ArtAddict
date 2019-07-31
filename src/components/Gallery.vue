<template>
  <section v-if="currentPhrase < 8" class="gallery">
    <Portrait v-bind:currentPainting="currentPainting" />
    <div class="info-button-holder">
      <InfoCard v-bind:currentPainting="currentPainting" />
      <button @click="nextPage">{{buttonPhrases[currentPhrase]}}</button>
    </div>
  </section>
  <section v-else>
    <div v-for="(headline, index) in headlines" :key="index">
      <img :src="headline" alt="News headline" class="headline" 
        v-bind:style="{ 
          top: getRandomTop() + 'px',
          left: getRandomLeft() + 'px'
        }"
      />
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
      currentPage: Math.floor(Math.random() * 5400),
      buttonPhrases: [
        "Next Paiting",
        "Another Painting",
        "Just One More",
        "I Need Antoher",
        "God That's Good, Give Me More",
        "MORE ART!!",
        "Dont Stop, I Need More!",
        "In Case of Art Addiction, Press Here"
      ],
      headlines: [],
      currentPhrase: 0
    };
  },
  methods: {
    nextPage() {
      this.currentPage = Math.floor(Math.random() * 5400);
      this.currentPhrase++;
      this.getPainting();
      if (this.currentPhrase >= 8) {
        this.populateHeadlines();
      }
    },
    getPainting() {
      fetchPainting(this.currentPage).then(result => {
        this.currentPage = result.pageNum;
        this.currentPainting = result.cleanPainting;
      });
    },
    getRandomTop() {
      return Math.random() * window.innerHeight / 2;
    },
    getRandomLeft() {
      return Math.random() * window.innerWidth / 2;
    },
    populateHeadlines() {
      const localHeadlines = [
        "https://i.ibb.co/XyVdqzM/headline-1.png",
        "https://i.ibb.co/hByCPWk/headline-2.png",
        "https://i.ibb.co/PMTs3vV/headline-3.png",
        "https://i.ibb.co/5jbFnBf/headline-4.png",
        "https://i.ibb.co/mSPb6pM/headline-5.png",
        "https://i.ibb.co/h9MxSnf/headline-6.png",
        "https://i.ibb.co/ZdZhvZD/headline-7.png",
        "https://i.ibb.co/xsLKmvw/headline-8.png"
      ];

      localHeadlines.forEach((headline, index) => {
        setTimeout(() => {
          this.headlines.push(headline);
        }, 500 * (index + 1));
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

.headline {
  position: absolute;
}
</style>
