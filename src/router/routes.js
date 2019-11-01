const Login = () => import(/* webpackChunkName: "login" */ "@/pages/Login.vue");
const User = () => import(/* webpackChunkName: "user" */ "@/pages/User.vue");
const Classify = () =>
  import(/* webpackChunkName: "classify" */ "@/pages/Classify.vue");
const Article = () =>
  import(/* webpackChunkName: "article" */ "@/pages/Article.vue");
const Articlecreate = () =>
  import(/* webpackChunkName: "articlecreate" */ "@/pages/Articlecreate.vue");
const Articleedit = () =>
  import(/* webpackChunkName: "articleedit" */ "@/pages/Articleedit.vue");
export default [
  {
    path: "/admin",
    name: "Login",
    component: Login
  },
  {
    path: "/admin/user",
    name: "User",
    component: User
  },
  {
    path: "/admin/classify",
    name: "Classify",
    component: Classify
  },
  {
    path: "/admin/article",
    name: "Artilce",
    component: Article
  },
  {
    path: "/admin/article/create",
    name: "Articlecreate",
    component: Articlecreate
  },
  {
    path: "/admin/article/edit/:id",
    name: "Articleedit",
    component: Articleedit
  }
];
