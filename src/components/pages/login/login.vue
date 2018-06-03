<template>
    <div>
        <div id="login">
            <h1>Login</h1>
            <form method="post">
                <input type="text" required="required" placeholder="用户名" name="u"></input>
                <input type="password" required="required" placeholder="密码" name="p"></input>
                <button class="but" type="submit">登录</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
html {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-style: sans-serif;
}
body {
    width: 100%;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    margin: 0;
    background-color: #4a374a;
}
#login {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
}
#login h1 {
    color: #fff;
    text-shadow: 0 0 10px;
    letter-spacing: 1px;
    text-align: center;
}
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
input {
    width: 278px;
    height: 18px;
    margin-bottom: 10px;
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    border-top: 1px solid #312e3d;
    border-left: 1px solid #312e3d;
    border-right: 1px solid #312e3d;
    border-bottom: 1px solid #56536a;
    border-radius: 4px;
    background-color: #2d2d3f;
}
.but {
    width: 300px;
    min-height: 20px;
    display: block;
    background-color: #4a77d4;
    border: 1px solid #3762bc;
    color: #fff;
    padding: 9px 14px;
    font-size: 15px;
    line-height: normal;
    border-radius: 5px;
    margin: 0;
}
</style>
