<script setup lang="ts">
import StarList from './components/StarList.vue'
// import StarForm from './components/StarForm.vue'
</script>

<template>
  <div>
    <h1 class="title">Profil Browser</h1>
    <div style="display: flex; flex-direction: column">
      <StarList />

      <!-- Je n'ai pas eu le temps de finir l partie backoffice -->
      <!-- <StarForm class="star-form" /> -->
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
}

/* .star-form {
  margin: 40px;
} */
</style>
