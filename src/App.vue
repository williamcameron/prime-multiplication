<template>
  <div id="app">
    <p>Please enter a number to generate multiplication table.</p>
    <div class="input-group mb-3">
      <input class="form-control" type="number" name="inputNumber" v-model="inputNumber" />
        <div class="input-group-append">
        <button @click="generateTable()" class="btn btn-primary">Generate</button>
      </div>
    </div>

    <p v-if="generating" class="bg-info">Generating...</p>
    <div v-else>
      <table v-if="primes.length" class="table table-bordered table-responsive">
        <thead class="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col" v-for="prime in primes" v-bind:key="prime">{{prime}}</th>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="prime in primes" v-bind:key=prime>
            <th scope="row">{{prime}}</th>
            <td v-for="prime_nested in primes" v-bind:key=prime_nested>{{prime*prime_nested}}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>No primes found.</p>
      <p v-if="usererror" class="bg-warning">Please enter a valid input to generate table.</p>
    </div>
  </div>

</template>

<script>
import {getFirstPrimes} from './Primes';

export default {
  name: 'prime-multiply-table-app',
  data () {
    return {
      inputNumber: 5,
      primes: [],
      generating: false
    }
  },
  created () { 
    this.generateTable();
  },
  computed: {
    usererror: function() {
      return parseInt(this.inputNumber)<=0;
    }
  },
  methods: {
    generateTable: function() {
    let go = true;
      if(this.inputNumber>=500) {
        go = false;
        if(confirm('This might take a while.  Are you sure?')) {
          go = true;
        }
      }

      if(go) {
        this.generating = true;
        this.primes = getFirstPrimes(parseInt(this.inputNumber));
        this.generating = false;
      }
    }
  }
}
</script>

<style>
table {
    border-collapse: collapse;
    overflow: hidden;
    z-index: 1;
}
td, th, .row, .col {
    cursor: pointer;
    padding: 5px;
    position: relative;
}
th {
    background-color: #e9ecef;

}
th,
td{
    border: 1px solid #CCC;
}

/* Column and Row hovering */
td:hover::before,
.row:hover::before { 
    background-color: #ddd;
    content: '\00a0';  
    height: 100%;
    left: -5000px;
    position: absolute;  
    top: 0;
    /*width: 10000px;*/
    z-index: -1;
    right:0;
}
td:hover::after,
.col:hover::after{ 
    background-color: #ddd;
    content: '\00a0';  
    /*height: 10000px; */
    bottom:0;
    left: 0;
    position: absolute;  
    top: -5000px;
    width: 100%;
    z-index: -1;        
}
</style>
