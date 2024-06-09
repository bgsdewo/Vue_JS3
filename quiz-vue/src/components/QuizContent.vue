<template>
     <section id="question-container">
        <div class="question-title">Pertanyaan 1</div>
    </section>
    <section id="option-container">
        <div class="option">
            <p class="option-label">A.</p>
            <div class="option-value">1</div>
        </div>
        <div class="option">
            <p class="option-label">B.</p>
            <div class="option-value">2</div>
        </div>
        <div class="option">
            <p class="option-label">C.</p>
            <div class="option-value">3</div>
        </div>
    </section>
</template>

<style scoped>
#question-container {
    margin-top: 30px;
}

.question-title{
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.option {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.option-label {
    font-size: 20px;
    font-weight: bold;
    widows: 50px;
    height: 50px;
    background-color: #a0ced9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
    background-color: #e2e2e2;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
}
</style>