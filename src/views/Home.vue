<template>
  <div class="home">
<div class="layer">
  <div class="layer_inner">
    <div class="content">
    <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home'
}
</script>
<style scoped>
.home{
  background:url(../assets/cover_cook.jpg)no-repeat center center fixed;
/* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;

  left: 0;
}
.layer{position:absolute;display:table;top:0;left:0;width:100%;height:100%}
.layer .layer_inner{display:table-cell;vertical-align:middle; padding-bottom:10%}
@media screen and (max-width: 1024px) { /* Specific to this particular image */
.home {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}
</style>
