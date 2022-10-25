const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ave Cesare, morituri te salutant!',
        img: 'img/gandalf2.jpg'
      }
    }
  }).mount('#app');