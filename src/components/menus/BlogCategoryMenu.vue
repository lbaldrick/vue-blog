<template>
    <div class="blog-category-menu">
        <ListMenu :menu-items="menuItems"
                  :menu-header="title"
                  :selected-menu-item-ids="selectedMenuItemsIds"
                  :on-menu-item-click="onClick"/>
    </div>
</template>

<script>
    import ListMenu from '../common/menus/ListMenu.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'BlogCategoryMenu',
        components: {
            ListMenu
        },
        computed: mapState({
            menuItems : state => state.navigation.main,
            selectedMenuItemsIds : state => [state.navigation.selectedMainMenuItemId]
        }),
        data: function() {
            return {
                title: '',
                onClick: (item) => this.$store.commit('selectMainMenuItem', {
                    selectedMainMenuItemId: item.id,
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {

    }

    .blog-category-menu {

    }

    i.fa-book {
        color: black;
    }
</style>