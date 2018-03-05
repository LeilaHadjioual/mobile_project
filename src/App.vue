<template>
  <div id="app">
    <img src="./assets/coffee-house-cafe-logo.png">
    <h1>{{ msg }}</h1>


  <ul>
    <Machine v-for="machine in machines"
             v-bind:machine="machine">
    </Machine>
  </ul>
    <!--<ul> -->
  <!--<li v-for="machine in machines" :class={color:machine.status}>-->
  <!--{{machine.name}}-->
  <!--<toggle-button v-model="machine.status" :value="false" width="100" height="35" color="#B4AF91" :sync="true"-->
  <!--:labels="{checked: 'active', unchecked: 'inactive'}"/>-->
  <!--</li>-->
    <!--</ul>-->
  </div>
</template>


<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome',
        machines: [{
          name: 'Coffee Machine #1',
          status: true,
        },
          {
            name: 'Coffee Machine #2',
            status: false,
          }]
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    margin: 10px;
  }

  a {
    color: #42b983;

  }

  .color {
    color: #B4AF91;
  }


</style>
