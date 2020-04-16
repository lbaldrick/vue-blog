<template>
    <div class="dropdown-menu">
        <div class="dropdown-menu_title" v-on:click="isDropdownOpenClose">
            <h1>{{menuHeader}}</h1>
            <i class="fas fa-plus fa-2x"></i>
        </div>

        <ul :class="menuOpen ? 'visible' : ''">
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
        name: 'DropdownMenu',
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
                return this.selectedMenuItemIds && this.selectedMenuItemIds.indexOf(item.id) > -1
            },
            isDropdownOpenClose: function() {
                this.menuOpen = !this.menuOpen
            }
        },
        data: function() {
            return {
                menuOpen: false,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    ul.visible {
        visibility: visible;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        visibility: hidden;
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