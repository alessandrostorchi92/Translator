<script>

import { store, resetInputs } from "../store";

export default {

  data() {

    return {

        store,

    }

  },

  methods: {
    resetInputs,
  },

}

</script>

<template>

    <div class="container text-center py-5">

        <button class="reset-btn" @click="resetInputs">RESET</button>

    </div>


</template>


<style lang="scss" scoped>

.reset-btn {
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  width: 8rem;
  background-color: #f44336;
  color: white;
  border: 1px solid #ccc;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}


</style>