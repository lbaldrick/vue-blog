<template>
    <div class="main-body">
        <BlogSubCategoryMenu/>
    </div>
</template>

<script>
    import BlogSubCategoryMenu from "@/components/menus/BlogSubCategoryMenu";

    export default {
        name: 'MainBody',
        components: {
            BlogSubCategoryMenu
        },
        props: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .main-body {

    }
</style>