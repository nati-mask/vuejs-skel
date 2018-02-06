<template>
    <div class="app-main">
        <header>
            <h1> {{ title }} </h1>
        </header>
        <div class="page">
            <p> This is content </p>
        </div>
    </div>
</template>

<script>

export default {
    components : {},
    data: function () {
        return {
            title: "App Title"
        }
    }
};

</script>

<style lang="less">
    @import "~app_less";
    .app-main {
        header {
            background-color: #eee;
            position: fixed;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 3px 5px hsla(0,0%,39%,.2);
        }
        .page {
            padding-top: 84px;
        }
    }
</style>
