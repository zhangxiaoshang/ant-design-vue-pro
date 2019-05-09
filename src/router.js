import Vue from "vue";
import Router from "vue-router";
import NotFond from "./views/404.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      name: "user",
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
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout.vue"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "dashboard",
          name: "dashboard",
          component: {
            render: h => h("router-view")
          },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis.vue")
            },
            {
              path: "/dashboard/monitor",
              name: "monitor",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Monitor.vue")
            },
            {
              path: "/dashboard/workplace",
              name: "workplace",
              component: () =>
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Workplace.vue")
            }
          ]
        },
        {
          path: "/form",
          name: "form",
          component: {
            render: h => h("router-view")
          },
          children: [
            {
              path: "/form",
              redirect: "/form/basic-form"
            },
            {
              path: "/form/basic-form",
              name: "basicform",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm.vue")
            },
            {
              path: "/form/step-form",
              name: "stepform",
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
                    import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1")
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2")
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3")
                }
              ]
            },
            {
              path: "/form/advanced-form",
              name: "advancedform",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/AdvancedForm.vue")
            }
          ]
        }
      ]
    },

    {
      path: "*",
      name: "404",
      component: NotFond
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
