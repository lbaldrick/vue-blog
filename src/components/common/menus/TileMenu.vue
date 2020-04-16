<template>
    <div class="tile-menu">
        <h1>{{menuHeader}}</h1>
        <ul class="tile-menu_list">
            <li v-for="item in menuItems"
                v-on:click.stop="onMenuItemClick(item)"
                :key="item.id">
                <div class="tile-menu_list_item">
                    <div class="tile-menu_list_item_description">
                        <div class="tile-menu_list_item_description_icon" v-html="item.iconHtml"/>
                        <div class="tile-menu_list_item_description_title">{{ item.title }}</div>
                    </div>
                    <div class="tile-menu_list_item_additional-info">
                        {{ item.additionalInfo }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TileMenu',
        props: {
            menuItems: {
                type: Array,
                required: true,
            },
            menuHeader: {
                type: String,
                required: false,
            },
            onMenuItemClick: {
                type: Function,
                required: true,
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    ul {
        list-style: none;
        margin: auto;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        width: 90%;
    }

    li {
        text-align: left;
        padding: 1em;
        display: flex;
        min-width: 20em;
        width: 40%;
        border: solid;
        box-shadow: 4px 4px #D3D3D3;
        margin: auto auto 1em;
        height: 4em;
    }

    li:hover {
        cursor: pointer;
        opacity: .5;
    }

    li:active {
        transform: translateY(4px);
        box-shadow: 0 0;
    }

    .tile-menu {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        line-height: 2em;
    }

    .tile-menu_list_item {
        display: flex;
        flex-direction: row;
    }

    .tile-menu_list_item_description {
        width: 6.5em;
    }

    .tile-menu_list_item_description_title {
        line-height: 1em;
    }

    .tile-menu_title {
        padding-left: 1em;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .tile-menu_icon {
        width: 2em;
    }
</style>