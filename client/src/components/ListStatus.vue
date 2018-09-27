<template>
    <div>
        <div class="card mb-4" v-for="(item, index) in status" :key="index">
            <div class="card-body">
                <h2 class="card-title">{{item.userId.name}} @{{item.userId.userName}}</h2>
                <p class="card-text">{{item.content}}</p>
            </div>
            <div class="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListArticle",
  data: function() {
    return {
      status: [],
    };
  },
  props: ["token", "propsstatus", "delprops", "resultsearch", "newprops"],
  methods: {
    getAllStatus() {
      let self = this;
      axios({
        method: "GET",
        url: `${api}/status`
      })
        .then(function({ data }) {
          self.status = data.data;
          self.$emit("data-allstatus", self.status);
        })
        .catch(function(err) {
          console.log(err.message);
        });
    },
    convertDate(input) {
      return moment(input).format("MMMM Do YYYY");
    }
  },
  created() {
    this.getAllStatus();
  },
  watch: {
    propsarticle: function(newList, oldList) {
      if (newList) {
        this.getAllStatus();
      }
    },
    delprops: function() {
      this.getAllStatus();
    },
    resultsearch: function(newData, oldData) {
      if (newData) {
        this.status = newData;
      } else {
        this.status = oldData;
      }
    },
    newprops: function(){
        this.getAllStatus()
    }
  }
};
</script>

<style>
</style>
