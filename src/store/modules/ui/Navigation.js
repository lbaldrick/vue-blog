const LANGUAGE_MENU_ITEMS = {
    frontend: {
        title: 'Frontend Languages',
            items: [{
            id: "javascript",
            title: "Javascript",
            iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
            visible: true,
        },
        {
            id: "typescript",
            title: "Typescript",
            iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
            visible: true,
        },
        {
            id: "css",
            title: "CSS",
            iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
            visible: true,
        },
        {
            id: "html5",
            title: "HTML5",
            iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
            visible: true,
        },
        ]},
    middleware: {
        title: 'Middleware Languages',
            items:[
            {
                id: "node",
                title: "Node Js",
                iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
                visible: true,
            },
            {
                id: "java",
                title: "Java",
                iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
                visible: true,
            },
            {
                id: "golang",
                title: "Golang",
                iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
                visible: true,
            },
        ]}
};

const LIBRARIES_MENU_ITEMS = {
    frontend: {
        title: 'Frontend Languages',
        items: [{
            id: "lodash",
            title: "Lodash",
            iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
            visible: true,
        }
        ]},
    middleware: {
        title: 'Middleware Languages',
        items:[

        ]}
};

const FRAMEWORKS_MENU_ITEMS = {
    frontend: {
        title: 'Frontend Languages',
        items: [{
            id: "react",
            title: "React",
            iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
            visible: true,
        },
        {
            id: "vue",
            title: "Vue",
            iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
            visible: true,
        }
        ]},
    middleware: {
        title: 'Middleware Languages',
        items:[
            {
                id: "spring",
                title: "Spring",
                iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
                visible: true,
            }
        ]}
};


const MAIN_MENU_ITEMS =  [
    {
        id: "home",
        title: "Home",
        iconHtml: "<i class=\"fas fa-home fa-2x\"></i>",
        visible: true,
    },
    {
        id: "languages",
        title: "Languages",
        iconHtml: "<i class=\"fas fa-globe-europe fa-2x\"></i>",
        visible: true,
    },
    {
        id: "frameworks",
        title: "Frameworks",
        iconHtml: "<i class=\"fas fa-toolbox fa-2x\"></i>",
        visible: true,
    },
    {
        id: "libraries",
        title: "Libraries",
        iconHtml: "<i class=\"fas fa-book fa-2x\"></i>",
        visible: true,
    },
    {
        id: "wfh",
        title: "Remote Working",
        iconHtml: "<i class=\"fas fa-laptop-house fa-2x\"></i>",
        visible: true,
    },
    {
        id: "social",
        title: "Social",
        iconHtml: "<i class=\"fas fa-users fa-2x\"></i>",
        visible: true,
    },
    {
        id: "create",
        title: "Create",
        iconHtml: "<i class=\"fas fa-plus-circle fa-2x\"></i>",
        visible: false
    },
];

const Navigation = {
    state: {
        main: MAIN_MENU_ITEMS,
        languages: LANGUAGE_MENU_ITEMS,
        frameworks: FRAMEWORKS_MENU_ITEMS,
        libraries: LIBRARIES_MENU_ITEMS,
        selectedMainMenuItemId: null,
        selectedSubcategoryMenuItemId: null,
    },
    mutations: {
        logInOut(state) {
            state.main = state.main.map((item) => {
                if (item.id === 'create') {
                    return {
                        ...item,
                        visible: this.state.user.isLoggedIn
                    }
                }
                return item;
            })
        },
        selectMainMenuItem(state, payload) {
            state.selectedMainMenuItemId = payload.selectedMainMenuItemId
        },
        selectSubcategoryItemId(state, payload) {
            state.selectedSubcategoryItemId = payload.selectedSubcategoryItemId
        },
    },
    actions: {  },
    getters: {  }
};

export default Navigation;