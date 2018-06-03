<template>
    <div>
        <NavHeader></NavHeader>
        <div class="homeContent" style="padding: 40px 40px 0 40px;">
            <div class="jumbotron">
                <h1>Hello, world!</h1>
                <p>...</p>
                <p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <div class="alert alert-warning" role="alert">正在开发中...</div>
        </div>
    </div>
</template>

<script>
import NavHeader from "../nav";
export default {
    data() {
        return {};
    },
    components: {
        NavHeader
    }
};
</script>

<style>
</style>
