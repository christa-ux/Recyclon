import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../components/index.vue")},
        //{ path: "/temp-home", component: () => import("./components/TempHomePage.vue")},
        { path: "/sign-in", component: () => import("../components/auth/signIn.vue") },
        { path: "/sign-up", component: () => import("../components/auth/signUp.vue") },
        //{ path: "/about", component: () => import("./components/AboutPage.vue") },
        //{ path: "/news", component: () => import("./components/user/LocalNews.vue") },
        //{ path: "/preferences", component: () => import("../views/user/Preferences.vue"), meta: { requiresAuth: true } },
        //{ path: "/:pathMatch(.*)*", component: () => import("../views/errors/404.vue") }
    ],
});

export default router;