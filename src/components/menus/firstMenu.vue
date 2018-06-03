<template>
    <div>
        <!-- 一级菜单 -->
        <div class="grid-ad-box">
            <div class="grid-container">
                <div class="grid-link-container">
                    <ul style="width:100%">
                        <li style="float:left" v-for="(menus,index) in menuLists" :key="index" @click="activeCurrentItem(index)">
                            <router-link :to="{path: menus.path}" class="grid-link">
                                <span class="atp">{{menus.name}}</span>
                                <span class="ats"></span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 左侧二级菜单

        <div class="" style="width:20%;float:left">
            <div class="sidebar">
                <ul class="nav nav-sidebar">
                    <li v-for="(item,index) in menuLists[nowIndex].subMenus" :key="index">
                        <router-link tag="a" :to="{path: item.path}" >
                            {{item.name}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            menuLists: [
                {
                    name: "网络还原",
                    path: "/projectdetial/netRestore",
                    subMenus: [
                        {
                            name: "站点同步",
                            path: "/projectdetial/siteSync"
                        },
                        {
                            name: "网络同步",
                            path: "/netSync"
                        },
                        {
                            name: "标准导入",
                            path: "/standardInput"
                        }
                    ]
                },
                {
                    name: "网络分析",
                    path: "/projectdetial/netAnalyse",
                    subMenus: [
                        {
                            name: "路由分析",
                            path: "/routerAnalyse"
                        },
                        {
                            name: "站点分析",
                            path: "/siteAnalyse"
                        },
                        {
                            name: "网元分析",
                            path: "/netElementAnalyse"
                        }
                    ]
                }
            ],
            secondMenu: [],
            nowIndex: 0
        };
    },
    methods: {
        activeCurrentItem(index) {
            this.nowIndex = index;
            console.log(this.nowIndex);
        }
    }
};
</script>

<style scoped>
.grid-ad-box {
    display: table;
    table-layout: fixed;
    display: block;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    height: 40px;
    width: 100%;
    padding-left: 25%;
    margin: 0 auto;
}
.grid-container {
    height: 30px;
    width: 100%;
    display: table-row;
    display: inline-block;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    vertical-align: top;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
.grid-link-container {
    height: 30px;
    width: 100%;
    display: table;
    display: inline-block;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: -2px \9;
}
.grid-link {
    width: 100px;
    height: 30px;
    display: block;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    text-align: center;
    line-height: 13px;
    box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.35) inset,
        0px 1px 1px rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: 1px solid #0088ff;
    border-radius: 30px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: #0088ff;
    font-weight: normal;
    font-family: arial, sans-serif;
    font-size: 16px;
}
</style>
