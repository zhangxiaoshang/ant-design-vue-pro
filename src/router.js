import Vue from "vue";
import Router from "vue-router";
import NotFond from "./views/404.vue";
import Forbidden from "./views/403.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import findLast from "lodash/findLast";
import { check, isLogin } from "./utils/auth";
import { notification } from "ant-design-vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      name: "user",
      hideInMenu: true,
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/UserLayout.vue"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login.vue")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register.vue")
        }
      ]
    },
    {
      path: "/",
      meta: { authority: ["admin", "user"] },
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout.vue"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘" },
          component: {
            render: h => h("router-view")
          },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页" },
              component: () =>
                import(
                  /* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis.vue"
                )
            },
            {
              path: "/dashboard/monitor",
              name: "monitor",
              meta: { title: "监控页" },
              component: () =>
                import(
                  /* webpackChunkName: "dashboard" */ "./views/Dashboard/Monitor.vue"
                )
            },
            {
              path: "/dashboard/workplace",
              name: "workplace",
              meta: { title: "工作站" },
              component: () =>
                import(
                  /* webpackChunkName: "dashboard" */ "./views/Dashboard/Workplace.vue"
                )
            }
          ]
        },
        {
          path: "/form",
          name: "form",
          meta: { icon: "form", title: "表单", authority: "admin" },
          component: {
            render: h => h("router-view")
          },
          children: [
            {
              path: "/form/basic-form",
              name: "basicform",
              meta: { title: "基础表单" },
              component: () =>
                import(
                  /* webpackChunkName: "form" */ "./views/Forms/BasicForm.vue"
                )
            },
            {
              path: "/form/step-form",
              name: "stepform",
              meta: { title: "分步表单" },
              hideChildrenInMenu: true,
              component: {
                render: h => h("router-view")
              },
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1"
                    )
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2"
                    )
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3"
                    )
                }
              ]
            },
            {
              path: "/form/advanced-form",
              name: "advancedform",
              meta: { title: "高级表单" },
              component: () =>
                import(
                  /* webpackChunkName: "form" */ "./views/Forms/AdvancedForm.vue"
                )
            }
          ]
        }
      ]
    },
    { path: "/403", name: "403", hideInMenu: true, component: Forbidden },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFond
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }

  const record = findLast(to.matched, item => item.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next("/user/login");
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "没有权限访问，请联系管理员！"
      });
      next("/403");
    }

    NProgress.done();
  }

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
