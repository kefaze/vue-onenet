<template>
    <div>
        <NavHeader></NavHeader>
        <FirstMenu></FirstMenu>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

        <!-- <div class="projectDetialContent">
            <div class="right">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div> -->
    </div>
</template>

<script>
import NavHeader from "../nav";
import FirstMenu from "../menus/firstMenu";

export default {
    data() {
        return {};
    },
    components: {
        NavHeader,
        FirstMenu
    }
};
</script>

<style scoped>

</style>
