<template>
    <div>
        <div class="home" v-for="item in routeName">
            <div @click="go(item)">{{item}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                routeName: ['test', 'toast', 'calendar', 'calendarzijiayou', 'pullupImport', 'actionSheet',
                            'swipe', 'mintSwipe', 'inputExample']
            }
        },
        methods: {
            go (to) {
                this.$router.push({name: to})
            }
        }
    }
</script>
<style lang="less">
.home {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
}
</style>

