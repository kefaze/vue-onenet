import Vue from "vue";
import Router from "vue-router";

// 页面路由
import Login from "../components/pages/login/login";
import Home from "../components/pages/home";

import MyWorkBranch from "../components/pages/myWorkBranch/myWorkBranch";
import MyProject from "../components/pages/myWorkBranch/myProject";
import ProjectList from "../components/pages/myWorkBranch/projectlist";

import ProjectDetial from "../components/pages/projectDetial";

import NetRestore from "../components/menus/one/netRestore";
import NetAnalyse from "../components/menus/one/netAnalyse";

import SiteSync from "../components/menus/two/siteSync";
import NetSync from "../components/menus/two/netSync";
import StandardInput from "../components/menus/two/standardInput";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Login
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/myworkbranch",
      component: MyWorkBranch,
      redirect: "myworkbranch/projectlist",
      children: [
        {
          path: "projectlist",
          component: ProjectList
        },
        {
          path: "myproject",
          component: MyProject
        }
      ]
    },
    {
      path: "/projectdetial",
      component: ProjectDetial,
      redirect: "/projectdetial/netRestore",
      children: [
        {
          path: "netRestore",
          component: NetRestore,
          children: [
            {
              path: "siteSync",
              component: SiteSync
            },
            {
              path: "netSync",
              component: NetSync
            },
            {
              path: "StandardInput",
              component: StandardInput
            }
          ]
        },
        {
          path: "netAnalyse",
          component: NetAnalyse
        }
      ]
    }
  ]
});
