<template>
    <div class="blog-sub-category-menu">
        <DropdownMenu :menu-items="menuItems"
                  :menu-header="title"
                  :on-menu-item-click="onClick">
        </DropdownMenu>
    </div>
</template>

<script>
    import DropdownMenu from '../common/menus/DropdownMenu.vue'
    import {mapState} from "vuex";

    export default {
        name: 'BlogSubCategoryMenu',
        components: {
            DropdownMenu
        },
        computed: mapState({
            menuItems : state => state.navigation.main,
        }),
        data: function() {
            return {
                title: "",
                onClick: () => console.log("clicked")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {

    }

    i.fa-book {
        color: black;
    }
</style>

