// Definindo o componente Vue
const MyNameApp = {
  data() {
    return {
      name: "",
      age: 30,
      input_name: "",
      input_age: Number, // nome a ser exibido no HTML
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      console.log(this.input_name);
      this.name = this.input_name;
      this.age = this.input_age;
    },
  },
};

// Criando e montando o aplicativo Vue
Vue.createApp(MyNameApp).mount("#app");
