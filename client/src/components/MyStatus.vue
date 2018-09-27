<template>
    <div class="card my-4">
        <h5 class="card-header">My Status</h5>
        <div class="card-body-fluid table-responsive">
            <table class="table table-bordered" style="width:"> 
            <thead class="thead-dark">
                <tr>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in myStatus" :key="index">
                <td>{{item.content}}</td>
                <td>
                    <div class="btn" v-on:click="deleteStatus(item._id)">Delete</div>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["token", "propsstatus", "delprops"],
  name: "MyStatus",
  data: function() {
    return {
      myStatus: "",
      message: "",
      status: {},
      isDelete: ""
    };
  },
  methods: {
    getMyStatus() {
      let self = this;
      axios({
        method: "GET",
        url: `${api}/status/user`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(function({ data }) {
          self.myStatus = data.data;
          //   self.$emit('my-article', self.myArticles)
        })
        .catch(function(err) {
          console.log(err.message);
        });
    },
    deleteStatus(id) {
      let self = this;
      axios({
        method: "DELETE",
        url: `${api}/status/${id}`,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(function(result) {
          self.message = "delete success";
          console.log("delete success");
          self.isDelete = result;
          self.$emit("delete-status", result);
        })
        .catch(function(err) {
          console.log(err.message);
          self.message = "delete failed";
        });
    }
  },
  watch: {
    propsstatus: function(newList, oldList) {
      if (newList) {
        this.getMyStatus();
      }
    },
    isDelete: function() {
      this.getMyStatus();
    }
  },
  created() {
    this.getMyStatus();
  }
};
</script>

<style>
</style>
