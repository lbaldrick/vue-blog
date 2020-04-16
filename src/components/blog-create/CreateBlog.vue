<template>
    <div class="create-blog">

    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'CreateBlog',
        components: {

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

    .create-blog{

    }

    i.fa-book {
        color: black;
    }
</style>