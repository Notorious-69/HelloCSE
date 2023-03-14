<script setup lang="ts">
import { useStarList } from '@/stores/store'
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const photo = ref('')
const description = ref('')

const store = useStarList()

function addStarAndClear() {
  if (photo.length === 0) {
    return
  }

  store.addStar(firstName, lastName, photo, description)

  lastName.value = ''
  firstName.value = ''
  photo.value = ''
  description.value = ''
}
</script>

<template>
  <div>
    <form class="star-formContainer" @submit.prevent="addStarAndClear">
      <h2>Prénom</h2>
      <input v-model="firstName" type="text" />
      <h2>Nom</h2>
      <input v-model="lastName" type="text" />
      <h2>Image URL</h2>
      <input v-model="photo" type="text" />
      <h2>Description</h2>
      <textarea v-model="description" type="text" />
      <button>Add</button>
    </form>
  </div>
</template>
z

<style scoped>
.star-formContainer {
  width: 400px;
  display: flex;
  flex-direction: column;
}
.star-formContainer input {
  margin: 10px;
}
</style>
