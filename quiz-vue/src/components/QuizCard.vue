<script setup>
import { defineProps } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const { quiz } = defineProps(["quiz"])

function goToQuiz() {
  router.push({ name: "quiz", params: {id:quiz.id}})
}
</script>

<template>
       <div class="card" @click="goToQuiz">
        <div class="card-body">
          <img :src="quiz.img" 
                    :alt="quiz.title" class="card-img"> 
           <h2>{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }}</p>
        </div>
      </div> 
</template>


<style scoped>
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