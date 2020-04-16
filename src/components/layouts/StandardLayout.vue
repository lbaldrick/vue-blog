<template>
    <div class="standard-layout">
        <div class="standard-layout_top">
            <Header/>
        </div>
        <div class="standard-layout_middle">
            <div :class="[isCollapsed ? 'collapsed' : '', 'standard-layout_middle_left']">
                <div class="standard-layout_middle_left_collapse-header">
                    <i v-if="isCollapsed" @click="isCollapsed = !isCollapsed" class="fas fa-angle-double-right fa-2x"></i>
                    <i v-if="!isCollapsed" @click="isCollapsed = !isCollapsed" class="fas fa-angle-double-left fa-2x"></i>
                </div>
                <Sidebar>
                    <BlogCategoryMenu/>
                </Sidebar>
            </div>
            <div class="standard-layout_middle_right">
                <MainBody/>
            </div>
        </div>
        <div class="standard-layout_bottom">
            <Footer/>
        </div>
    </div>
</template>



<script>
    import Footer from './Footer.vue'
    import Header from './Header.vue'
    import MainBody from './MainBody.vue'
    import Sidebar from './Sidebar.vue'
    import BlogCategoryMenu from "@/components/menus/BlogCategoryMenu";

    export default {
        name: 'StandardLayout',
        components: {
            BlogCategoryMenu,
            Footer,
            Header,
            MainBody,
            Sidebar,
        },
        data: function() {
            return {
                isCollapsed: false,
            }
        }
    }
</script>

<style scoped>
    .standard-layout {
        display: flex;
        flex-direction: column;
        width: 99%;
        height: 99%;
        border: solid 2px black;
        margin: auto;
    }
    .standard-layout_top {
        height: 10%;
        border: solid 2px black;
        min-height: 4em;
    }
    .standard-layout_middle {
        display: flex;
        border: solid 2px black;
        height: 80%;
    }
    .standard-layout_middle_left {
        width: 26%;
        max-width: 14em;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        min-width: 4.5em;
    }

    .standard-layout_middle_left_collapse-header {
        display: flex;
        flex-direction: row-reverse;

    }

    .standard-layout_middle_left_collapse-header i:hover {
        cursor: pointer;
        opacity: .5;
    }


    .collapsed {
        width: 4em;
        transition: width .5s linear;
    }

    .standard-layout_middle_right {
        flex-grow: 1;
        border: solid 2px black;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .standard-layout_bottom {
        height: 10%;
        min-height: 4em;
    }
</style>
