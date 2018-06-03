<template>
    <div>
        <!-- 左侧二级菜单 -->
        <div class="" style="width:20%;float:left">
            <div class="sidebar">
                <ul class="nav nav-sidebar">
                    <li v-for="(item,index) in subMenus" :key="index">
                        <router-link tag="a" :to="{path: item.path}">
                            {{item.name}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        subMenus: {
			type: Array,
			default: []
		},
    },
    data() {
        return {
            nowIndex: 0
        };
    },
    methods: {
        activeCurrentItem(index) {
            this.nowIndex = index;
            console.log(this.nowIndex);
        }
    },
    mounted(){
        console.log(this.subMenus);
    }
};
</script>

<style scoped>

</style>
