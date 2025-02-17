// Definindo o componente Vue
const MyNameApp = {
  data() {
    return {
      name: "Mikael",
      age: 30, // nome a ser exibido no HTML
    };
  },
};

// Criando e montando o aplicativo Vue
Vue.createApp(MyNameApp).mount("#app");
