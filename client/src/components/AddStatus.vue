<template>
    <div class="card mb-4">
        <div class="card-body">
            <h2 class="card-title">Add Status</h2>
            <form onSubmit ="return false">
            <div class="form-group">
                <label for="validationDefault01">Status:</label>
                <input type="text" class="form-control" id="validationDefault01" placeholder="status content" v-model="inputStatus" required>
            </div>            
            <button class="btn btn-primary" type="submit" v-on:click="addStatus">Post</button>
            <router-link to='/'>
            <button class="btn btn-secondary" type="button">Cancel</button>
            </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["status", "token"],
  name: "AddStatus",
  data: function() {
    return {
      newStatus: "",
      inputStatus: "",
    };
  },
  methods: {
    addStatus() {
      let self = this;
      axios({
        method: "POST",
        url: `${api}/status`,
        headers: {
          token: localStorage.getItem("token")
        },
        data: {
          content: this.inputStatus,
        }
      })
        .then(({ data }) => {
          this.newStatus = data.data;
          this.$router.push("/");
            this.$emit('new-status', this.newStatus)
            this.inputStatus = ''
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
