<template>
    <div class="list-menu">
        <h1>{{menuHeader}}</h1>
        <ul>
            <li v-for="item in visibleItems(menuItems)"
                v-on:click.stop="onMenuItemClick(item)"
                :key="item.id"
                :class="[isSelected(item) ? 'selected' : '']">
                <div class="list-menu_icon" v-html="item.iconHtml"/>
                <div class="list-menu_title">{{ item.title }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ListMenu',
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
            },
            selectedMenuItemIds: {
                type: Array,
                required: false,
            }
        },
        methods: {
            visibleItems: function (items) {
                return items.filter(function (item) {
                    return item.visible
                })
            },
            isSelected: function (item) {
                console.log("id", item.id)
                console.log("selectedMenuItemIds", this.selectedMenuItemIds)
                return this.selectedMenuItemIds && this.selectedMenuItemIds.indexOf(item.id) > -1
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0;
        text-align: left;
        padding: 1em;
        display: flex;
    }

    li:hover {
        cursor: pointer;
        opacity: .5;
    }

    li.selected {
        background: yellow;
    }

    .list-menu {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        line-height: 2em;
    }

    .list-menu_title {
        padding-left: 1em;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .list-menu_icon {
        width: 2em;
    }
</style>