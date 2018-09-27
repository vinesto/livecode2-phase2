<template>
<div class="card my-4">
    <h5 class="card-header">Search</h5>
    <div class="card-body">
        <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for..." v-model="search">
        <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">Go!</button>
        </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ["datasearch", "datastatus"],
  data() {
    return {
      search: "",
      temp: ""
    };
  },
  watch: {
    search: function(newData, oldData) {
      if (newData) {
        let status = [];
        this.datasearch.forEach(element => {
          if (element.content.toLowerCase().indexOf(newData.toLowerCase()) > -1) {
            status.push(element);
          }
        });
        this.temp = status;
        this.$emit("data-after-search", this.temp);
      } else if (oldData) {
        let status = [];
        this.datasearch.forEach(element => {
          status.push(element);
        });
        this.temp = status;
        this.$emit("data-after-search", this.temp);
      }
    }
  }
};
</script>

<style>
</style>
