<template>
    <div class="sidebar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .sidebar {
        width: 100%;
    }
</style>