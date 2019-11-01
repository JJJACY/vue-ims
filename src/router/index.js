import Vue from "vue";
import Router from "vue-router";
import routes from "./routes.js";
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式
Vue.use(Router);

console.log(routes);
const appRouter = new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: routes
});

appRouter.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

//eslint-disable-next-line
appRouter.afterEach((to, from) => {
  NProgress.done();
});

export default appRouter;
