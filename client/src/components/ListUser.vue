<template>
     <div class="card my-4">
        <h5 class="card-header">Who to follow</h5>
            <div class="card-body">
                <div class="row">
                <div class="col-lg-12">
                    <ul class="list-unstyled mb-0">
                    <li v-for="(item, index) in user" :key="index">
                        <a href="#">{{item.name}} @{{item.userName}}</a>
                        <a class="btn"> follow </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ListUser",
  data: function() {
    return {
        user:{}
    }
  },
  methods:{
      getUser(){
          let self = this
          axios({
              method:"GET",
              url:`${api}/users`
          })
          .then(function({data}){
              self.user = data.data
          })
          .catch(function(err){
              console.log(err.message);
          })
      }
  },
  created() {
      this.getUser()
  },
};
</script>

<style>
</style>
