<template>
  <div class="mainContainer">
    <div class="schemeBranchSelector">

      <p class="semSelector">SEMESTER : </p>
      <select name="branch" id="branch" v-model="semesterValue">
        <option value="" selected>SELECT SEMESTER</option>
        <option value="1st & 2nd Physics Cycle">1st & 2nd (PHYSICS CYCLE)</option>
        <option value="1st & 2nd Chemistry Cycle">1st & 2nd (CHEMISTRY CYCLE)</option>
        <option value="3rd Sem All Branch">3rd (All Branch)</option>
        <option value="4th Sem All Branch">4th (All Branch)</option>
        <option value="5th Sem All Branch">5th (All Branch)</option>
        <option value="6th Sem All Branch">6th (All Branch)</option>
        <option value="7th Sem CSE,ISE,ECE,EEE,CV">7th (CSE, ISE)</option>
        <option value="7th Sem E&C/E&E,Civil">7th (E&C/E&E,Civil)</option>
        <option value="8TH Sem All Branch">8th (All Branch)</option>
      </select>

      <button @click="semSelection">CONTINUE</button>

    </div>

    <div class="headContainer" v-if="physicForm">
      <p>Enter Marks:</p>
      <form @submit.prevent="Calc">

        <input type="number" placeholder="18MAT11/21" v-model="subjectCodes.scMAT11_21">
        <input type="number" placeholder="18PHY12/22" v-model="subjectCodes.scPHY12_22">
        <input type="number" placeholder="18ELE13/23" v-model="subjectCodes.scELE13_23">
        <input type="number" placeholder="18CIV14/24" v-model="subjectCodes.scCIV14_24">
        <input type="number" placeholder="18EGDL15/25" v-model="subjectCodes.scEGDL15_25">
        <input type="number" placeholder="18PHYL16/26" v-model="subjectCodes.scPHYL16_26">
        <input type="number" placeholder="18ELEL17/27" v-model="subjectCodes.scELEL17_27">
        <input type="number" placeholder="18EGH18/28" v-model="subjectCodes.scEGH18_28">

        <div class="buttonContainer">
          <button type="submit">CALCULATE</button>
        </div>
      </form>
    </div>

    <div class="headContainer" v-if="chemistryForm">
      <p>Enter Marks:</p>
      <form @submit.prevent="Calc">

        <input type="number" placeholder="18MAT11/21" v-model="subjectCodes.scCMAT11_21">
        <input type="number" placeholder="18CHE12/22" v-model="subjectCodes.scCHE12_22">
        <input type="number" placeholder="18CPS13/23" v-model="subjectCodes.scCPS13_23">
        <input type="number" placeholder="18ELN14/24" v-model="subjectCodes.scELN14_24">
        <input type="number" placeholder="18ME15/25" v-model="subjectCodes.scME15_25">
        <input type="number" placeholder="18CHEL16/26" v-model="subjectCodes.scCHEL16_26">
        <input type="number" placeholder="18CPL17/27" v-model="subjectCodes.scCPL17_27">
        <input type="number" placeholder="18EGH18/28" v-model="subjectCodes.scCEGH18_28">

        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>

    <div class="headContainer" v-if="sem3Form">
      <p>Enter Marks : </p>

      <form @submit.prevent="Calc">

        <input type="number" placeholder="18MAT31" v-model="subjectCodes.scMAT31">
        <input type="number" placeholder="18XX32" v-model="subjectCodes.scXX32">
        <input type="number" placeholder="18XX33" v-model="subjectCodes.scXX33">
        <input type="number" placeholder="18XX34" v-model="subjectCodes.scXX34">
        <input type="number" placeholder="18XX35" v-model="subjectCodes.scXX35">
        <input type="number" placeholder="18XX36" v-model="subjectCodes.scXX36">
        <input type="number" placeholder="18XXL37" v-model="subjectCodes.scXXL37">
        <input type="number" placeholder="18XXL38" v-model="subjectCodes.scXXL38">
        <input type="number" placeholder="18CPC39/49 OR KANNADA" v-model="subjectCodes.scCPC39_49">

        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>


    <div class="headContainer" v-if="sem4Form">
      <p>Enter Marks:</p>


      <form @submit.prevent="Calc">

        <input type="number" placeholder="18MAT41" v-model="subjectCodes.scMAT41">
        <input type="number" placeholder="18XX42" v-model="subjectCodes.scXX42">
        <input type="number" placeholder="18XX43" v-model="subjectCodes.scXX43">
        <input type="number" placeholder="18XX44" v-model="subjectCodes.scXX44">
        <input type="number" placeholder="18XX45" v-model="subjectCodes.scXX45">
        <input type="number" placeholder="18XX46" v-model="subjectCodes.scXX46">
        <input type="number" placeholder="18XXL47" v-model="subjectCodes.scXXL47">
        <input type="number" placeholder="18XXL48" v-model="subjectCodes.scXXL48">
        <input type="number" placeholder="18CPC39/49 or Kannada" v-model="subjectCodes.scC4PC39_49">

        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>

    <div class="headContainer" v-if="sem5Form">
      <p>Enter Marks : </p>


      <form @submit.prevent="Calc">

        <input type="number" placeholder="18XX51" v-model="subjectCodes.scXX51">
        <input type="number" placeholder="18XX52" v-model="subjectCodes.scXX52">
        <input type="number" placeholder="18XX53" v-model="subjectCodes.scXX53">
        <input type="number" placeholder="18XX54" v-model="subjectCodes.scXX54">
        <input type="number" placeholder="18XX55" v-model="subjectCodes.scXX55">
        <input type="number" placeholder="18XX56" v-model="subjectCodes.scXX56">
        <input type="number" placeholder="18XXL57" v-model="subjectCodes.scXXL57">
        <input type="number" placeholder="18XXL58" v-model="subjectCodes.scXXL58">
        <input type="number" placeholder="ENVIRONMENTAL STUDIES" v-model="subjectCodes.scENV_STUDIES">

        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>
    <div class="headContainer" v-if="sem6Form">
      <p>Enter Marks:</p>
      <form @submit.prevent="Calc">

        <input type="number" placeholder="18XX61" v-model="subjectCodes.scXX61">
        <input type="number" placeholder="18XX62" v-model="subjectCodes.scXX62">
        <input type="number" placeholder="18XX63" v-model="subjectCodes.scXX63">
        <input type="number" placeholder="18XX64" v-model="subjectCodes.scXX64">
        <input type="number" placeholder="18XX65" v-model="subjectCodes.scXX65">
        <input type="number" placeholder="18XX66L" v-model="subjectCodes.scXX66">
        <input type="number" placeholder="18XXL67L" v-model="subjectCodes.scXXL67">
        <input type="number" placeholder="18XXMP68 (Mini-Projet)" v-model="subjectCodes.scXXMP68">


        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>

    <div class="headContainer" v-if="sem7_1Form">
      <p>Enter Marks : </p>

      <form @submit.prevent="Calc">

        <input type="number" placeholder="18CS71" v-model="subjectCodes.scCS71">
        <input type="number" placeholder="18CS72" v-model="subjectCodes.scCS72">
        <input type="number" placeholder="18CS73X" v-model="subjectCodes.scCS73X">
        <input type="number" placeholder="18CS74X" v-model="subjectCodes.scCS74X">
        <input type="number" placeholder="18CS75X" v-model="subjectCodes.scCS75X">
        <input type="number" placeholder="18CSL76" v-model="subjectCodes.scCSL76">
        <input type="number" placeholder="18CSP77" v-model="subjectCodes.scCSP77">

        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>


    <div class="headContainer" v-if="sem7_2Form">
      <p>Enter Marks : </p>
      <form @submit.prevent="Calc">
        <input type="number" placeholder="18XX71" v-model="subjectCodes.scXX71">
        <input type="number" placeholder="18XX72" v-model="subjectCodes.scXX72">
        <input type="number" placeholder="18XX73X" v-model="subjectCodes.scXX73X">
        <input type="number" placeholder="18XX74X" v-model="subjectCodes.scXX74X">
        <input type="number" placeholder="18XX75X" v-model="subjectCodes.scXX75X">
        <input type="number" placeholder="18XXL76" v-model="subjectCodes.scXXL76">
        <input type="number" placeholder="18XXL77" v-model="subjectCodes.scXXL77">
        <input type="number" placeholder="18XXP78" v-model="subjectCodes.scXXP78">


        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>

    <div class="headContainer" v-if="sem8Form">
      <p>Enter Marks : </p>
      <form @submit.prevent="Calc">
        <input type="number" placeholder="18XX81" v-model="subjectCodes.scXX81">
        <input type="number" placeholder="18XX82X" v-model="subjectCodes.scXX82X">
        <input type="number" placeholder="18XXP83" v-model="subjectCodes.scXXP83">
        <input type="number" placeholder="18XXS84" v-model="subjectCodes.scXXS84">
        <input type="number" placeholder="18XX185 (Internship)" v-model="subjectCodes.scXX185">

        <div class="buttonContainer">
          <button type="submit">Calculate SGPA</button>
        </div>
      </form>
    </div>

    <div class="resultContainer" v-if="showResult">
      <p><span class="designedText">{{ this.aggregate.toFixed(1) }} </span> / 10.0</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {

      subjectCodes: {

        scMAT11_21: 0,
        scPHY12_22: 0,
        scELE13_23: 0,
        scCIV14_24: 0,
        scEGDL15_25: 0,
        scPHYL16_26: 0,
        scELEL17_27: 0,
        scEGH18_28: 0,
        scCMAT11_21: 0,
        scCHE12_22: 0,
        scCPS13_23: 0,
        scELN14_24: 0,
        scME15_25: 0,
        scCHEL16_26: 0,
        scCPL17_27: 0,
        scCEGH18_28: 0,
        scMAT31: 0,
        scXX32: 0,
        scXX33: 0,
        scXX34: 0,
        scXX35: 0,
        scXX36: 0,
        scXXL37: 0,
        scXXL38: 0,
        scCPC39_49: 0,
        scMAT41: 0,
        scXX42: 0,
        scXX43: 0,
        scXX44: 0,
        scXX45: 0,
        scXX46: 0,
        scXXL47: 0,
        scXXL48: 0,
        scC4PC39_49: 0,
        scXX51: 0,
        scXX52: 0,
        scXX53: 0,
        scXX54: 0,
        scXX55: 0,
        scXX56: 0,
        scXXL57: 0,
        scXXL58: 0,
        scENV_STUDIES: 0,
        scXX61: 0,
        scXX62: 0,
        scXX63: 0,
        scXX64: 0,
        scXX65: 0,
        scXX66: 0,
        scXXL67: 0,
        scXXMP68: 0,
        scCS71: 0,
        scCS72: 0,
        scCS73X: 0,
        scCS74X: 0,
        scCS75X: 0,
        scCSL76: 0,
        scCSP77: 0,
        scXX71: 0,
        scXX72: 0,
        scXX73X: 0,
        scXX74X: 0,
        scXX75X: 0,
        scXXL76: 0,
        scXXL77: 0,
        scXXP78: 0,
        scXX81: 0,
        scXX82X: 0,
        scXXP83: 0,
        scXXS84: 0,
        scXX185: 0

      },
      semesterValue: '',
      physicForm: false,
      chemistryForm: false,
      sem3Form: false,
      sem4Form: false,
      sem5Form: false,
      sem6Form: false,
      sem7_1Form: false,
      sem7_2Form: false,
      sem8Form: false,
      aggregate: 0,
      showResult: false,

      physicsCycleCredits : {

        pMAT11_21: 4,
        pPHY12_22: 4,
        pELE13_23: 3,
        pCIV14_24: 3,
        pEGDL15_25: 3,
        pPHYL16_26: 1,
        pELEL17_27: 1,
        pEGH18_28: 1,

      },
      chemistryCycleCredits: {

        cMAT11_21: 4,
        cCHE12_22: 4,
        cCPS13_23: 3,
        cELN14_24: 3,
        cME15_25: 3,
        cCHEL16_26: 1,
        cCPL17_27: 1,
        cEGH18_28: 1

      },

      sem3Credits : {

        MAT31: 4,
        XX32: 4,
        XX33: 3,
        XX34: 3,
        XX35: 3,
        XX36: 3,
        XXL37: 2,
        XXL38: 2,
        CPC39_49: 1

      },

      sem4Credits : {

        MAT41: 4,
        XX42: 4,
        XX43: 3,
        XX44: 4,
        XX45: 3,
        XX46: 3,
        XXL47: 2,
        XXL48: 2,
        C4PC39_49: 1

      },

      sem5Credits: {

        XX51: 3,
        XX52: 4,
        XX53: 4,
        XX54: 3,
        XX55: 3,
        XX56: 4,
        XXL57: 2,
        XXL58: 2,
        ENV_STUDIES: 1

      },

      sem6Credits: {

        XX61: 4,
        XX62: 4,
        XX63: 4,
        XX64: 3,
        XX65: 3,
        XX66: 2,
        XXL67: 2,
        XXMP68: 2,

      },

      sem7ACredits: {

        CS71: 4,
        CS72: 4,
        CS73X: 3,
        CS74X: 3,
        CS75X: 3,
        CSL76: 2,
        CSP77: 2

      },

      sem7BCredits: {

        XX71: 3,
        XX72: 3,
        XX73X: 3,
        XX74X: 3,
        XX75X: 3,
        XXL76: 2,
        XXL77: 2,
        XXP78: 2

      },

      sem8Credits: {

        XX81: 3,
        XX82X: 3,
        XXP83: 8,
        XXS84: 1,
        XX185: 3

      }

    }
  },

  methods: {
    semSelection() {
      this.switchForm();
    },

    switchForm() {
      if (this.semesterValue === '1st & 2nd Physics Cycle') {
        this.physicForm = true;
        this.chemistryForm = false;
        this.sem3Form = false;
        this.sem4Form = false;
        this.sem5Form = false;
        this.sem6Form = false;
        this.sem7_1Form = false;
        this.sem7_2Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '1st & 2nd Chemistry Cycle') {
        this.chemistryForm = true;
        this.physicForm = false;
        this.sem3Form = false;
        this.sem4Form = false;
        this.sem5Form = false;
        this.sem6Form = false;
        this.sem7_1Form = false;
        this.sem7_2Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '3rd Sem All Branch') {
        this.sem3Form = true;
        this.physicForm = false;
        this.chemistryForm = false;
        this.sem4Form = false;
        this.sem5Form = false;
        this.sem6Form = false;
        this.sem7_1Form = false;
        this.sem7_2Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '4th Sem All Branch') {
        this.sem4Form = true;
        this.physicForm = false;
        this.chemistryForm = false;
        this.sem3Form = false;
        this.sem5Form = false;
        this.sem6Form = false;
        this.sem7_1Form = false;
        this.sem7_2Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '5th Sem All Branch') {
        this.sem5Form = true;
        this.physicForm = false;
        this.chemistryForm = false;
        this.sem3Form = false;
        this.sem4Form = false;
        this.sem6Form = false;
        this.sem7_1Form = false;
        this.sem7_2Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '6th Sem All Branch') {
        this.sem6Form = true;
        this.physicForm = false;
        this.chemistryForm = false;
        this.sem3Form = false;
        this.sem4Form = false;
        this.sem5Form = false;
        this.sem7_1Form = false;
        this.sem7_2Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '7th Sem CSE,ISE,ECE,EEE,CV') {
        this.sem7_1Form = true;
        this.physicForm = false;
        this.chemistryForm = false;
        this.sem3Form = false;
        this.sem4Form = false;
        this.sem5Form = false;
        this.sem6Form = false;
        this.sem7_2Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '7th Sem E&C/E&E,Civil') {
        this.sem7_2Form = true;
        this.physicForm = false;
        this.chemistryForm = false;
        this.sem3Form = false;
        this.sem4Form = false;
        this.sem5Form = false;
        this.sem6Form = false;
        this.sem7_1Form = false;
        this.sem8Form = false;
      } else if (this.semesterValue === '8TH Sem All Branch') {
        this.sem8Form = true;
        this.physicForm = false;
        this.chemistryForm = false;
        this.sem3Form = false;
        this.sem4Form = false;
        this.sem5Form = false;
        this.sem6Form = false;
        this.sem7_1Form = false;
        this.sem7_2Form = false;

      }
    },

    Calc() {
      if (this.semesterValue === '1st & 2nd Physics Cycle') {

        this.aggregate = ( ((this.subjectCodes.scMAT11_21/10) * this.physicsCycleCredits.pMAT11_21) + ((this.subjectCodes.scPHY12_22/10) * this.physicsCycleCredits.pPHY12_22) + ((this.subjectCodes.scELE13_23/10) * this.physicsCycleCredits.pELE13_23) + ((this.subjectCodes.scCIV14_24/10) * this.physicsCycleCredits.pCIV14_24) + ((this.subjectCodes.scEGDL15_25/10) * this.physicsCycleCredits.pEGDL15_25) + ((this.subjectCodes.scPHYL16_26/10) * this.physicsCycleCredits.pPHYL16_26) + ((this.subjectCodes.scELEL17_27/10) * this.physicsCycleCredits.pELEL17_27) + ((this.subjectCodes.scEGH18_28/10) * this.physicsCycleCredits.pEGH18_28))/(this.physicsCycleCredits.pMAT11_21 + this.physicsCycleCredits.pEGH18_28 + this.physicsCycleCredits.pELEL17_27 + this.physicsCycleCredits.pPHYL16_26 + this.physicsCycleCredits.pCIV14_24 + this.physicsCycleCredits.pEGDL15_25 + this.physicsCycleCredits.pPHY12_22 + this.physicsCycleCredits.pELE13_23);
        this.showResult = true;

      } else if (this.semesterValue === '1st & 2nd Chemistry Cycle') {

        this.aggregate = ( ((this.subjectCodes.scCMAT11_21/10) * this.chemistryCycleCredits.cMAT11_21) + ((this.subjectCodes.scCHE12_22/10) * this.chemistryCycleCredits.cCHE12_22) + ((this.subjectCodes.scCPS13_23/10) * this.chemistryCycleCredits.cCPS13_23) + ((this.subjectCodes.scELN14_24/10) * this.chemistryCycleCredits.cELN14_24) + ((this.subjectCodes.scME15_25/10) * this.chemistryCycleCredits.cME15_25) + ((this.subjectCodes.scCHEL16_26/10) * this.chemistryCycleCredits.cCHEL16_26) + ((this.subjectCodes.scCPL17_27/10) * this.chemistryCycleCredits.cCPL17_27) + ((this.subjectCodes.scCEGH18_28/10) * this.chemistryCycleCredits.cEGH18_28))/(this.chemistryCycleCredits.cMAT11_21 + this.chemistryCycleCredits.cCPS13_23 + this.chemistryCycleCredits.cELN14_24 + this.chemistryCycleCredits.cME15_25 + this.chemistryCycleCredits.cCHEL16_26 + this.chemistryCycleCredits.cCPL17_27 + this.chemistryCycleCredits.cEGH18_28 + this.chemistryCycleCredits.cCHE12_22);
        this.showResult = true;

      } else if (this.semesterValue === '3rd Sem All Branch') {

        this.aggregate = ( ((this.subjectCodes.scMAT31/10) * this.sem3Credits.MAT31) + ((this.subjectCodes.scXX32/10) * this.sem3Credits.XX32) + ((this.subjectCodes.scXX33/10) * this.sem3Credits.XX33) + ((this.subjectCodes.scXX34/10) * this.sem3Credits.XX34) + ((this.subjectCodes.scXX35/10) * this.sem3Credits.XX35) + ((this.subjectCodes.scXX36/10) * this.sem3Credits.XX36) + ((this.subjectCodes.scXXL37/10) * this.sem3Credits.XXL37) + ((this.subjectCodes.scXXL38/10) * this.sem3Credits.XXL38) + ((this.subjectCodes.scCPC39_49/10) * this.sem3Credits.CPC39_49))/(this.sem3Credits.MAT31 + this.sem3Credits.XX32 + this.sem3Credits.XX33 + this.sem3Credits.XX34 + this.sem3Credits.XX35 + this.sem3Credits.XX36 + this.sem3Credits.XXL37 + this.sem3Credits.XXL38 + this.sem3Credits.CPC39_49);
        this.showResult = true;

      } else if (this.semesterValue === '4th Sem All Branch') {

        this.aggregate = ( ((this.subjectCodes.scMAT41/10) * this.sem4Credits.MAT41) + ((this.subjectCodes.scXX42/10) * this.sem4Credits.XX42) + ((this.subjectCodes.scXX43/10) * this.sem4Credits.XX43) + ((this.subjectCodes.scXX44/10) * this.sem4Credits.XX44) + ((this.subjectCodes.scXX45/10) * this.sem4Credits.XX45) + ((this.subjectCodes.scXX46/10) * this.sem4Credits.XX46) + ((this.subjectCodes.scXXL47/10) * this.sem4Credits.XXL47) + ((this.subjectCodes.scXXL48/10) * this.sem4Credits.XXL48) + ((this.subjectCodes.scC4PC39_49/10) * this.sem4Credits.C4PC39_49))/(this.sem4Credits.MAT41 + this.sem4Credits.XX42 + this.sem4Credits.XX43 + this.sem4Credits.XX44 + this.sem4Credits.XX45 + this.sem4Credits.XX46 + this.sem4Credits.XXL47 + this.sem4Credits.XXL48 + this.sem4Credits.C4PC39_49);
        this.showResult = true;

      } else if (this.semesterValue === '5th Sem All Branch') {

        this.aggregate = ( ((this.subjectCodes.scXX51/10) * this.sem5Credits.XX51) + ((this.subjectCodes.scXX52/10) * this.sem5Credits.XX52) + ((this.subjectCodes.scXX53/10) * this.sem5Credits.XX53) + ((this.subjectCodes.scXX54/10) * this.sem5Credits.XX54) + ((this.subjectCodes.scXX55/10) * this.sem5Credits.XX55) + ((this.subjectCodes.scXX56/10) * this.sem5Credits.XX56) + ((this.subjectCodes.scXXL57/10) * this.sem5Credits.XXL57) + ((this.subjectCodes.scXXL58/10) * this.sem5Credits.XXL58) + ((this.subjectCodes.scENV_STUDIES/10) * this.sem5Credits.ENV_STUDIES))/(this.sem5Credits.XX51 + this.sem5Credits.XX52 + this.sem5Credits.XX53 + this.sem5Credits.XX54 + this.sem5Credits.XX55 + this.sem5Credits.XX56 + this.sem5Credits.XXL57 + this.sem5Credits.XXL58 + this.sem5Credits.ENV_STUDIES);
        this.showResult = true;

      } else if (this.semesterValue === '6th Sem All Branch') {

        this.aggregate = ( ((this.subjectCodes.scXX61/10) * this.sem6Credits.XX61) + ((this.subjectCodes.scXX62/10) * this.sem6Credits.XX62) + ((this.subjectCodes.scXX63/10) * this.sem6Credits.XX63) + ((this.subjectCodes.scXX64/10) * this.sem6Credits.XX64) + ((this.subjectCodes.scXX65/10) * this.sem6Credits.XX65) + ((this.subjectCodes.scXX66/10) * this.sem6Credits.XX66) + ((this.subjectCodes.scXXL67/10) * this.sem6Credits.XXL67) + ((this.subjectCodes.scXXMP68/10) * this.sem5Credits.XXMP68))/(this.sem6Credits.XX61 + this.sem6Credits.XX62 + this.sem6Credits.XX63 + this.sem6Credits.XX64 + this.sem6Credits.XX65 + this.sem6Credits.XX66 + this.sem6Credits.XXL67 + this.sem6Credits.XXMP68);
        this.showResult = true;

      } else if (this.semesterValue === '7th Sem CSE,ISE,ECE,EEE,CV') {

        this.aggregate = ( ((this.subjectCodes.scCS71/10) * this.sem7ACredits.CS71) + ((this.subjectCodes.scCS72/10) * this.sem7ACredits.CS72) + ((this.subjectCodes.scCS73X/10) * this.sem7ACredits.CS73X) + ((this.subjectCodes.scCS74X/10) * this.sem7ACredits.CS74X) + ((this.subjectCodes.scCS75X/10) * this.sem7ACredits.CS75X) + ((this.subjectCodes.scCSL76/10) * this.sem7ACredits.CSL76) + ((this.subjectCodes.scCSP77/10) * this.sem7ACredits.CSP77) )/(this.sem7ACredits.CS71 + this.sem7ACredits.CS72 + this.sem7ACredits.CS73X + this.sem7ACredits.CS74X + this.sem7ACredits.CS75X + this.sem7ACredits.CSL76 + this.sem7ACredits.CSP77 );
        this.showResult = true;

      } else if (this.semesterValue === '7th Sem E&C/E&E,Civil') {

        this.aggregate = ( ((this.subjectCodes.scXX71/10) * this.sem7BCredits.XX71) + ((this.subjectCodes.scXX72/10) * this.sem7BCredits.XX72) + ((this.subjectCodes.scXX73X/10) * this.sem7BCredits.XX73X) + ((this.subjectCodes.scXX74X/10) * this.sem7BCredits.XX74X) + ((this.subjectCodes.scXX75X/10) * this.sem7BCredits.XX75X) + ((this.subjectCodes.scXXL76/10) * this.sem7BCredits.XXL76) + ((this.subjectCodes.scXXL77/10) * this.sem7BCredits.XXL77) +((this.subjectCodes.scXXP78/10) * this.sem7BCredits.XXP78))/(this.sem7BCredits.XX71 + this.sem7BCredits.XX72 + this.sem7BCredits.XX73X + this.sem7BCredits.XX74X + this.sem7BCredits.XX75X + this.sem7BCredits.XXL76 + this.sem7BCredits.XXL77 + this.sem7BCredits.XXP78 );
        this.showResult = true;

      } else if (this.semesterValue === '8TH Sem All Branch') {

        this.aggregate = (((this.subjectCodes.scXX81/10) * this.sem8Credits.XX81) + ((this.subjectCodes.scXX82X/10) * this.sem8Credits.XX82X) + ((this.subjectCodes.scXXP83/10) * this.sem8Credits.XXP83) + ((this.subjectCodes.scXXS84/10) * this.sem8Credits.XXS84) + ((this.subjectCodes.scXX185/10) * this.sem8Credits.XX185))/(this.sem8Credits.XX81 + this.sem8Credits.XX82X + this.sem8Credits.XXP83 + this.sem8Credits.XXS84 + this.sem8Credits.XX185);
        this.showResult = true;

      }
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

.semSelector{
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

