<template>
  <div class="container-fluid h-100 w-100" style="background-color: #293f54">
    <div class="row align-items-center h-100">
      <div class="col-md-4 mr-auto ml-auto">
        <div class="card shadow">
          <div class="card-body">
            <div class="card-title text-center">
              <h1>Anima</h1>
            </div>

            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
