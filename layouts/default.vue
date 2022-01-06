<template>
  <div>
    <navigation-bar/>
    <Nuxt/>
  </div>
</template>

<script>
import navigationBar from "@/components/navigationBar";
export default {
  components: {
    navigationBar
  }
}
</script>

<style>
html, body {
  font-family: Roboto Condensed, "Helvetica Neue", sans-serif;
  background-color: #25274D;
}
</style>
