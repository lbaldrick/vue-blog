<template>
    <div class="header">
        <div class="header_title">
            <h1>Tech Blog</h1>
        </div>

        <div class="header_actions">
            <div v-if="!isLoggedIn" class="header_actions_login" v-on:click="onLogInOut">
                <i class="fas fa-sign-in-alt fa-2x"></i>
                <div class="login_title">Log In</div>
            </div>
            <div v-if="isLoggedIn" class="header_actions_login" v-on:click="onLogInOut">
                <i class="fas fa-sign-out-alt fa-2x"></i>
                <div class="login_title">Log Out</div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'Header',
        props: {

        },
        computed: mapState({
            isLoggedIn: state => state.user.isLoggedIn,
        }),
        methods: {
            onLogInOut: function() {
                this.$store.commit('logInOut')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    .header {
        display: flex;
        flex-direction: row;
    }

    .header_actions {
        display: flex;
        flex-direction: row-reverse;
        width: 18%;
    }

    .header_actions_login:hover {
        opacity: .5;
        cursor: pointer;
    }

    .header_title {
        width: 80%;
        line-height: 1em;
    }
</style>