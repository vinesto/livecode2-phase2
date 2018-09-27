<template>
  <div class="home">
    <div class="container">

      <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-8">

          <h1 class="my-4">Page Heading
            <small>Secondary Text</small>
          </h1>

          <!-- Blog Status -->
          <add-status v-bind:token="tokenHome" v-if="tokenHome" v-on:new-status="getNewStatus"  />
          <list-status v-bind:propsstatus="listStatus" v-bind:delprops="checkDelete" v-bind:newprops="checkNew" @data-allstatus="dataallstatus=$event" :resultsearch="getStatus" />

        </div>

        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

          <!-- Search Widget -->
          <search-status :datasearch="dataallstatus" :datastatus="search" v-on:data-after-search="getStatus=$event"/>

          <!-- Categories Widget -->
          <list-user/>
          <!-- <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">Freebies</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> -->

          <!-- Side Widget -->
          <my-status v-if="tokenHome" v-bind:token="tokenHome" v-bind:propsstatus="listStatus" v-on:delete-status="getDelete" />

        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ListStatus from "@/components/ListStatus.vue";
import AddStatus from "@/components/AddStatus.vue";
import SearchStatus from "@/components/SearchStatus.vue";
import MyStatus from "@/components/MyStatus.vue"
import ListUser from "@/components/ListUser.vue"

export default {
  props: ["tokenfromapp", "test"],
  components: {
    ListStatus,
    AddStatus,
    SearchStatus,
    MyStatus,
    ListUser
  },
  data: function() {
    return {
      tokenHome: false,
      // Statuss:'',
      editStatus: "",
      newStatus: "",
      checkNew:false,
      fetchData: false,
      listStatus: false,
      deleteStatus: "",
      checkDelete: false,
      commentStatus: "",
      checkComment: false,
      search: false,
      dataallstatus: "",
      getStatus: ""
    };
  },
  methods: {
    getNewStatus(value) {
      this.newStatus = value;
      // this.fetchData = true
    },
    getDelete(value) {
      this.deleteStatus = value;
    },
    getEditStatus(value) {
      this.editStatus = value;
      console.log(this.editStatuss, "aaaaa");
    },
    getCommentStatus(value) {
      this.commentStatus = value;
    }
  },
  watch: {
    newStatus:function(){
      if(this.checkNew){
        this.checkNew = false
      } else {
        this.checkNew = true
      }
    },
    tokenfromapp: function(newtoken, oldtoken) {
      if (newtoken) {
        this.tokenHome = true;
      } else if (oldtoken) {
        this.tokenHome = false;
      }
    },
    deleteStatus: function() {
      if (this.checkDelete) {
        this.checkDelete = false;
      } else {
        this.checkDelete = true;
      }
    }
  },
  created() {
    let checkToken = localStorage.getItem("token");
    if (checkToken) {
      this.tokenHome = true;
    } else {
      this.tokenHome = false;
    }
  }
};
</script>
