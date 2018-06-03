<template>
    <div>
        <!-- <FirstMenu></FirstMenu> -->
        <SecondMenu :subMenus="subMenus"></SecondMenu>

        <div class="right">
            <div v-if="netResIsShow">
                <h1>网络还原</h1>
            </div>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
// import FirstMenu from "../firstMenu";
import SecondMenu from "../secondMenu";
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["netResIsShow"])
    },
    data() {
        return {
            subMenus: [
                {
                    name: "站点同步",
                    path: "/projectdetial/netRestore/siteSync"
                },
                {
                    name: "网络同步",
                    path: "/projectdetial/netRestore/netSync"
                },
                {
                    name: "标准导入",
                    path: "/projectdetial/netRestore/standardInput"
                }
            ]
        };
    },
    components: {
        SecondMenu
    },
    watch: {
        $route(to) {
            console.log(to);
            var path = to.path.substring(1);
            console.log(path)
            this.changeNetRestore(path)
            // if (to.path == "/projectdetial/netRestore") {
            //     this.$store.dispatch("netResIsShow");
            // } else {
            //     this.$store.dispatch("netResIsHide");
            // }
        }
    },
    methods: {
        changeNetRestore(path) {
            if (path == "projectdetial/netRestore") {
                this.$store.dispatch("netResIsShow");
            } else {
                this.$store.dispatch("netResIsHide");
            }
        }
    },
    mounted () {
        var path = this.$route.path.substring(1);
        this.changeNetRestore(path);
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
