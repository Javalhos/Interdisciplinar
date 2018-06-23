<template>
  <div class="container-fluid">
    <div class="row">
      <app-sidebar></app-sidebar>
      <div class="col ml-0 pl-0 pr-0">
        <app-navtop></app-navtop>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Navtop from "../components/Navtop.vue";

export default {
  components: {
    "app-sidebar": Sidebar,
    "app-navtop": Navtop
  }
};
</script>
