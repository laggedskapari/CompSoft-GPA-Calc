<template>
  <div class="mainContainer">
    <div class="cgpaCalculator">
      <p class="headContainer">Enter SGPA:</p>
      <form @submit.prevent="Calc">
        <input type="number" placeholder="1st Sem SGPA"  v-model="SemesterMarks.firstSemSGPA">
        <input type="number" placeholder="2nd Sem SGPA"  v-model="SemesterMarks.secondSemSGPA">
        <input type="number" placeholder="3rd Sem SGPA"  v-model="SemesterMarks.thirdSemSGPA">
        <input type="number" placeholder="4th Sem SGPA"  v-model="SemesterMarks.fourthSemSGPA">
        <input type="number" placeholder="5th Sem SGPA"  v-model="SemesterMarks.fifthSemSGPA">
        <input type="number" placeholder="6th Sem SGPA"  v-model="SemesterMarks.sixthSemSGPA">
        <input type="number" placeholder="7th Sem SGPA"  v-model="SemesterMarks.seventhSemSGPA">
        <input type="number" placeholder="8th Sem SGPA"  v-model="SemesterMarks.eighthSemSGPA">

        <div class="buttonContainer">
          <button type="submit">Calculate CGPA</button>
        </div>
      </form>
    </div>

    <div class="resultContainer" v-if="showResult">
      <p><span class="designedText">{{ this.SemesterMarks.aggregateCgpa.toFixed(1) }} </span> / 10.0</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      SemesterMarks: {
        firstSemSGPA: 0,
        secondSemSGPA: 0,
        thirdSemSGPA: 0,
        fourthSemSGPA: 0,
        fifthSemSGPA: 0,
        sixthSemSGPA: 0,
        seventhSemSGPA: 0,
        eighthSemSGPA: 0,
        aggregateCgpa: 0,
      },
      showResult: false,

    }
  },
  methods: {
    Calc(){
      this.SemesterMarks.aggregateCgpa = ((this.SemesterMarks.firstSemSGPA/1 + this.SemesterMarks.secondSemSGPA/1 + this.SemesterMarks.thirdSemSGPA/1 + this.SemesterMarks.fourthSemSGPA/1 + this.SemesterMarks.fifthSemSGPA/1 + this.SemesterMarks.sixthSemSGPA/1 + this.SemesterMarks.seventhSemSGPA/1 + this.SemesterMarks.eighthSemSGPA/1)/8);
      this.showResult = true;
    }
  }
}
</script>

<style scoped>


*{
  margin: 0;
  padding: 0;
}

.mainContainer{
  width: 350px;
  height: auto;
  margin: 170px auto 30px;
  border: 3px #4CC3FF solid;
  border-radius: 10px;
  padding: 20px;
}


select{
  padding: 5px;
  font-size: 17px;
  outline: none;
  border: 2px solid #4CC3FF;
  margin-bottom: 10px;
}

button{
  padding: 3px 10px;
  font-size: 17px;
  background: #25274D;
  border-radius: 5px;
  color: #AAABB8;
  border: 2px solid #4CC3FF;
  outline: none;
}

button:hover{
  background: rgba(41, 100, 138, 0.50);
}

*{
  margin: 0;
  padding: 0;
}


.headContainer{
  font-size: 27px;
  font-weight: bold;
  color: #4CC3FF;
  margin-bottom: 5px;
}

select{
  padding: 5px;
  font-size: 17px;
  outline: none;
  border: 2px solid #4CC3FF;
  margin-bottom: 10px;
}

button{
  padding: 3px 10px;
  font-size: 17px;
  background: #25274D;
  border-radius: 5px;
  color: #AAABB8;
  border: 2px solid #4CC3FF;
  outline: none;
}

button:hover{
  background: rgba(41, 100, 138, 0.50);
}


input{
  margin-bottom: 10px;
  background-color: #25274D;
  padding: 10px;
  border: none;
  width: 90%;
  color: #AAABB8;
  font-size: 19px;
  outline: none;
  border-radius: 5px;
}

.resultContainer{
  width: 100px;
  margin: 20px auto auto;
  color: #AAABB8;
}

.designedText{
  font-size: 40px;
  color: #4CC3FF;
  font-weight: bold;
}
</style>
