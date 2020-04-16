<template>
    <div class="footer">
        <h1>FOOTER</h1>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .footer {
        color: blue;
    }
</style>