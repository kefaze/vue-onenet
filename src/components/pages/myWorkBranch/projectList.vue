<template>
    <div>
        <div class="projectListContent">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <!-- <button>新建项目</button> -->
                    <router-link to="/myworkbranch/myproject" tag="button">新建项目</router-link>
                </div>
                <div class="table">
                    <h2 class="table-caption">花名册：</h2>
                    <div class="table-column-group">
                        <div class="table-column"></div>
                        <div class="table-column"></div>
                        <div class="table-column"></div>
                    </div>
                    <div class="table-header-group">
                        <ul class="table-row">
                            <li class="table-cell">序号</li>
                            <li class="table-cell">姓名</li>
                            <li class="table-cell">年龄</li>
                        </ul>
                    </div>
                    <div class="table-footer-group">
                        <ul class="table-row">
                            <li class="table-cell">footer</li>
                            <li class="table-cell">footer</li>
                            <li class="table-cell">footer</li>
                        </ul>
                    </div>
                    <div class="table-row-group">
                        <ul class="table-row">
                            <li class="table-cell">1</li>
                            <li class="table-cell">John</li>
                            <li class="table-cell">19</li>
                        </ul>
                        <ul class="table-row">
                            <li class="table-cell">2</li>
                            <li class="table-cell">Mark</li>
                            <li class="table-cell">21</li>
                        </ul>
                        <ul class="table-row">
                            <li class="table-cell">3</li>
                            <li class="table-cell">Kate</li>
                            <li class="table-cell">26</li>
                        </ul>
                    </div>
                </div>
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                            <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">4</a>
                        </li>
                        <li>
                            <a href="#">5</a>
                        </li>
                        <li>
                            <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.table {
    display: table;
    border-collapse: collapse;
    border: 1px solid #ccc;
}
.table-caption {
    display: table-caption;
    margin: 0;
    padding: 0;
    font-size: 16px;
}
.table-column-group {
    display: table-column-group;
}
.table-column {
    display: table-column;
    width: 100px;
}
.table-row-group {
    display: table-row-group;
}
.table-row {
    display: table-row;
}
.table-row-group .table-row:hover,
.table-footer-group .table-row:hover {
    background: #f6f6f6;
}
.table-cell {
    display: table-cell;
    padding: 0 5px;
    border: 1px solid #ccc;
}
.table-header-group {
    display: table-header-group;
    background: #eee;
    font-weight: bold;
}
.table-footer-group {
    display: table-footer-group;
}
</style>
