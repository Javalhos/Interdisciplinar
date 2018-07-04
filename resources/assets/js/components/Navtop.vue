<template>
  <div class="nav_menu">
    <ul class="nav justify-content-end">
      <li class="nav-item mb-1 mt-1">
        <a style="cursor: pointer;" class="nav-link-top" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Auth from '../store/Auth.js';

export default {
  methods: {
    logout() {
      Auth.remove();
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

