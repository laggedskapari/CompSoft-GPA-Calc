<template>
  <div class="mainContainer">
    <div class="sgpaNcgpaContainer">
      <div class="sgpaContainer" @click="redirectToSGPA">
       <img src="../../../assets/Images/exam.png" alt="Grade">
        <p class="buttonDescription">SGPA</p>
      </div>

      <div class="cgpaContainer" @click="redirectToCGPA">
        <img src="../../../assets/Images/score.png" alt="Marks">
        <p class="buttonDescription">CGPA</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    redirectToSGPA(){
      this.$router.push(`/user/${this.$store.getters['UserUsername/loadUserUsername']}/sgpacalculator`)
    },
    redirectToCGPA(){
      this.$router.push(`/user/${this.$store.getters['UserUsername/loadUserUsername']}/cgpacalculator`)
    }
  },
  created() {
    this.$store.dispatch('UserUsername/getUserUsername', this.$store.getters['Authentication/getCurrentUserUID']);
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  font-family: Roboto Condensed, "Helvetica Neue", sans-serif;
}

body{
  background-color: #2b3134;
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: Roboto Condensed, "Helvetica Neue", sans-serif;
}


.sgpaNcgpaContainer{

  display: flex;
  padding: 50px;
  margin: 100px auto auto;
  align-content: center;
  align-items: center;
  width: 400px;

}

.sgpaContainer, .cgpaContainer{
  border: 3px solid rgba(255, 255, 255, 0.31);
  margin: auto;
  align-items: center;
  text-align: center;
  align-content: center;
  border-radius: 10px;
  padding: 50px 50px 70px;
}

.sgpaContainer{
  margin-right: 20px;
}

.cgpaContainer img{
  margin-top: 30px;
  width: 100px;
  height: auto;
}

.sgpaContainer img{
  margin-top: 30px;
  width: 100px;
  height: auto;
}


.cgpaContainer:after{
  color: #2b3134;
  border-color:  rgba(255, 255, 255, 0.31);
}

.cgpaContainer:hover{
  border-color: #15e3e3;
}
.cgpaContainer:hover:after{
  border-color: #15e3e3;
}
.cgpaContainer:active:after{
  border-color: #15e3e3;
}

.sgpaContainer:after{
  color: #2b3134;
  border-color:  rgba(255, 255, 255, 0.31);
}

.sgpaContainer:hover{
  border-color: #4CC3FF;
}
.sgpaContainer:hover:after{
  border-color: #4CC3FF;
}
.sgpaContainer:active:after{
  border-color: #4CC3FF;
}

.buttonDescription{

  width: 100px;
  margin: 10px auto auto;
  text-align:center;
  align-items: center;
  align-content: center;
  color: #AAABB8;

}
</style>

