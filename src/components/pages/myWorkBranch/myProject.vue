<template>
    <div>
        <div class="myProjectContent">
            <div class="panel panel-default">
                <div class="panel-body">
                    <ul class="input_test">
                <li>
                    <label for="inp_name">姓名：</label>
                    <p><input id="inp_name" class="input_out" name="" type="text" onfocus="this.className='input_on';this.onmouseout=''" onblur="this.className='input_off';this.onmouseout=function(){this.className='input_out'};" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" /></p>
                    <span>请输入您的姓名</span>
                </li>
                <li>
                    <label for="inp_email">Email：</label>
                    <p><input id="inp_email" class="input_out" name="" type="text" onfocus="this.className='input_on';this.onmouseout=''" onblur="this.className='input_off';this.onmouseout=function(){this.className='input_out'};" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" /></p>
                    <span>请输入您的Email</span>
                </li>
                <li>
                    <label for="inp_web">网站：</label>
                    <p><input id="inp_web" class="input_out" name="" type="text" onfocus="this.className='input_on';this.onmouseout=''" onblur="this.className='input_off';this.onmouseout=function(){this.className='input_out'};" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" /></p>
                    <span>请输入您的网站</span>
                </li>
            </ul>
                </div>
            </div>
            <ul class="input_test">
                <li>
                    <label for="inp_name">姓名：</label>
                    <p><input id="inp_name" class="input_out" name="" type="text" onfocus="this.className='input_on';this.onmouseout=''" onblur="this.className='input_off';this.onmouseout=function(){this.className='input_out'};" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" /></p>
                    <span>请输入您的姓名</span>
                </li>
                <li>
                    <label for="inp_email">Email：</label>
                    <p><input id="inp_email" class="input_out" name="" type="text" onfocus="this.className='input_on';this.onmouseout=''" onblur="this.className='input_off';this.onmouseout=function(){this.className='input_out'};" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" /></p>
                    <span>请输入您的Email</span>
                </li>
                <li>
                    <label for="inp_web">网站：</label>
                    <p><input id="inp_web" class="input_out" name="" type="text" onfocus="this.className='input_on';this.onmouseout=''" onblur="this.className='input_off';this.onmouseout=function(){this.className='input_out'};" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" /></p>
                    <span>请输入您的网站</span>
                </li>
            </ul>
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
* {
    margin: 0;
    padding: 0;
}
body {
    font-size: 63%;
    color: #000;
}
/*input*/
.input_on {
    padding: 2px 8px 0pt 3px;
    height: 18px;
    border: 1px solid #999;
    background-color: #ffffcc;
}
.input_off {
    padding: 2px 8px 0pt 3px;
    height: 18px;
    border: 1px solid #ccc;
    background-color: #fff;
}
.input_move {
    padding: 2px 8px 0pt 3px;
    height: 18px;
    border: 1px solid #999;
    background-color: #ffffcc;
}
.input_out {
    /*height:16px;默认高度*/
    padding: 2px 8px 0pt 3px;
    height: 18px;
    border: 1px solid #ccc;
    background-color: #fff;
}
/*form*/
ul.input_test {
    margin: 20px auto 0 auto;
    width: 500px;
    list-style-type: none;
}
ul.input_test li {
    width: 500px;
    height: 22px;
    margin-bottom: 10px;
}
.input_test label {
    float: left;
    padding-right: 10px;
    width: 100px;
    line-height: 22px;
    text-align: right;
    font-size: 1.4em;
}
.input_test p {
    float: left;
    _margin-top: -1px;
}
.input_test span {
    float: left;
    padding-left: 10px;
    line-height: 22px;
    text-align: left;
    font-size: 1.2em;
    color: #999;
}
</style>
