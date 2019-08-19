<template>
  <div id="app">
    <p>Please enter a number to generate multiplication table.</p>

    <div class="input-group mb-3">
      <input class="form-control" type="number" name="inputNumber" />
      <div class="input-group-append">
        <button @click="generateTable()" class="btn btn-primary">Generate</button>
      </div>
    </div>

  <table class="table table-bordered table-responsive">
        <thead class="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>7</td>
            <td>7</td>
            <td>5</td>
            <td>56</td>
            <td>6</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>1</td>
            <td>3</td>
            <td>3</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>645</td>
            <td>65</td>
            <td>67</td>
            <td>56</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>45</td>
            <td>54</td>
            <td>454</td>
            <td>4</td>
            <td>43</td>
          </tr>
        </tbody>
      </table>
  </div>

</template>

<script>
export default {
  name: 'prime-multiply-table-app',
  data () {
    return {
      inputNumber: 5,
      primes: []
    }
  },
  methods: {
    generateTable: function () {
      
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
