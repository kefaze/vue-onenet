<template>
    <div>
        <NavHeader></NavHeader>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import NavHeader from "../../nav";
export default {
    data() {
        return {};
    },
    components: {
        NavHeader
    }
};
</script>

<style scoped>
/* ul{margin:0;padding:0;list-style:none;}  
.table{display:table;border-collapse:collapse;border:1px solid #ccc;}  
.table-caption{display:table-caption;margin:0;padding:0;font-size:16px;}  
.table-column-group{display:table-column-group;}  
.table-column{display:table-column;width:100px;}  
.table-row-group{display:table-row-group;}  
.table-row{display:table-row;}  
.table-row-group .table-row:hover,.table-footer-group .table-row:hover{background:#f6f6f6;}  
.table-cell{display:table-cell;padding:0 5px;border:1px solid #ccc;}  
.table-header-group{display:table-header-group;background:#eee;font-weight:bold;}  
.table-footer-group{display:table-footer-group;} */
</style>
