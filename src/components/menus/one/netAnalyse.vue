<template>
  <div>
    <SecondMenu :subMenus="subMenus"></SecondMenu>

    <div class="right">
      网络分析内容
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import FirstMenu from "../firstMenu";
import SecondMenu from "../secondMenu"
export default {
    data() {
        return {
          subMenus: [
                {
                    name: "路由分析",
                    path: "/siteSync"
                },
                {
                    name: "网元分析",
                    path: "/netSync"
                },
                {
                    name: "链路分析",
                    path: "/standardInput"
                }
            ]
        };
    },
    components: {
        SecondMenu
    }
};
</script>
 
<style>
.right {
    width: 80%;
    height: 800px;
    border: 1px solid #000;
    float: left;
}
</style>
