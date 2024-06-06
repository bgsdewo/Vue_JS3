<script setup>
import { ref, watch } from "vue";
import srcQuiz from "./data/quizes.json"

const quizes = ref(srcQuiz)
const search = ref("")

watch(search, () =>{
  quizes.value = srcQuiz.filter((quiz) =>{
    return quiz.title.toLowerCase().includes(search.value.toLocaleLowerCase())
  })
})
</script>


<template>
  <main>
    <header>
      <h1 id="title">QuizVue</h1>
      <input v-model.trim="search" type="text" id="search-input"/>
    </header>
    <section id="quiz-container">
      <div v-for="(quiz, index) in quizes" :key="index" class="card">
        <div class="card-body">
          <img :src="quiz.img" :alt="quiz.title" class="card-img"> <!-- Menambahkan class "card-img" -->
          <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }}</p>
        </div>
      </div>
    </section>
  </main>
</template>


<style scoped>
main {
  max-width: 900px;
  margin:0 auto
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  border: none;
  background-color:#c9c9c9d8;
  padding: 10px;
  border-radius: 5px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card-img {
  width: 100%; /* Menyesuaikan lebar gambar dengan lebar parent (kotak kartu) */
  height: auto; /* Mengatur tinggi gambar agar proporsional */
  object-fit: cover; /* Memastikan gambar terpotong sesuai dengan dimensi yang ditetapkan */
}

.card-body {
padding:0 15px;
}

.card-body h2 {
  font-weight: bold;
}
</style>