import Vue from 'vue';
const Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }
};

export default Event;
