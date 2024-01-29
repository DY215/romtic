new Vue({
    el: '#app',
    data: {
      title: 'Romantic Ceremony',
      description: 'Welcome to our romantic ceremony. Are you ready to start the journey of love and joy?',
    },
    methods: {
      startCeremony() {
        window.location.href = 'stars.html'; // 点击按钮后跳转到星空页面
      }
    }
  });
  