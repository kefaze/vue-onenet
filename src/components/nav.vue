<template>
    <div>
        <!-- 导航 -->
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">one net</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-left">
                        <li v-if="item.isShow"  v-for="(item,index) in menuList" :key="index">
                            <router-link :to="{path: item.path}">{{item.name}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>  
  
<script>
export default {
    data() {
        return {
            menuList: [ 
                {name: "首页", isShow: true, path: '/home'},
                {name: "我的工作台", isShow: true, path: '/myworkbranch'}
            ]
        };
    },
    methods: {
        // fetchMenus() {
        //     var _this = this;
        //     this.$http
        //         .get("../src/data/menus.data")
        //         .then(function(res) {
        //             console.log(res);
        //             _this.menuList = res;
        //         })
        //         .catch(function(err) {
        //             console.log(err);
        //         });
        // }
    },
    mounted() {
        
    },
};
</script>  
  
<!-- Add "scoped" attribute to limit CSS to this component only -->  
<style scoped>
</style>  