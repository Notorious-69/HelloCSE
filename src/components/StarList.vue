<script setup lang="ts">
import { useStarList } from '../stores/store'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const store = useStarList()

const { starList } = storeToRefs(store)

const currentIndex = ref(0)

const starComputed = computed(() => {
  return starList.value[currentIndex.value]
})

function changeProfil(index) {
  currentIndex.value = index
}
</script>

<template>
  <div class="star-container">
    <ul>
      <li
        v-for="(star, index) in starList"
        class="star-listItem"
        :class="{ active: index == currentIndex }"
        :key="star.id"
      >
        <p @click="changeProfil(index)">{{ star.firstName }}&nbsp{{ star.lastName }}</p>
      </li>
    </ul>
    <div class="star-profil">
      <img :src="starComputed.photo" alt="" />
      <h1>{{ starComputed.firstName }}&nbsp;{{ starComputed.lastName }}</h1>
      <p>
        {{ starComputed.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding-left: 0;
}
.star-container {
  display: flex;
  margin-left: 40px;
}
.star-container ul {
  padding: 20px 0 40px;
  margin-right: 0;
  border-right: 1px solid #717171;
  min-width: 170px;
}

.star-listItem {
  list-style: none;
  border: 1px solid #717171;
  margin: -1px;
  padding: 0 10px;
  background: #cecece;
  cursor: pointer;
}
.star-listItem:first-of-type {
  border-top-left-radius: 10px;
}

.star-listItem:last-of-type {
  border-bottom-left-radius: 10px;
}

.star-listItem.active {
  background: white;
  border-right: 1px solid white;
}

.star-listItem.active p {
  font-weight: 700;
}

.star-profil {
  max-width: 600px;
  padding-left: 15px;
}
.star-profil img {
  float: left;
  width: 200px;
  height: 200px;
  margin: 10px 10px 10px 0;
  /* aspect-ratio: 1 / 1;  */
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 0 10px -4px black;
}
.star-profil h1 {
  font-weight: 700;
}

.star-profil p {
  line-height: 1.5;
}

@media screen and (max-width: 425px) {
  .star-container {
    margin-left: 0;
    display: block;
  }
  .star-profil h1 {
    display: none;
  }
  .star-listItem {
    border-right: 0px;
  }
  .star-listItem:first-of-type {
    border-top-left-radius: 0;
  }
  .star-listItem:last-of-type {
    border-bottom-left-radius: 0;
  }
  .star-profil {
    padding-left: 0;
    padding: 10px;
  }
  .star-profil img {
    width: 150px;
    height: 150px;
  }
  .star-container ul {
    border-right: 0px;
  }
}
</style>
