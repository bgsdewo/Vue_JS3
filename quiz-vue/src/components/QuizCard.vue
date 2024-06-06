<template>
       <div class="card">
        <div class="card-body">
          <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Progamming" class="card-img"> 
           <h2>Progamming</h2>
          <p>2 questions</p>
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