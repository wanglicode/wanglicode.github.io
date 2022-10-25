import router from "./router";
import store from "@/store";
import { getToken } from "./utils/token"; // setToken在登录页面set
import loginPage from './views/demo/a'

const whiteList = ["/pageOne", "/pageTwo"];
let loginNum = 1
// console.log("router", router);
router.beforeEach( (to, from, next) => {
  // next()
  if(to.path =='/login') {
    if(loginNum!==1){
      next('/login')
    }else {
     loadMenus(to,next)

     
    }
  }else {
    next()
  }
  // if (getToken()) {
  //   // 已经登录了阻止跳转到登录页,如果不需要阻止这段逻辑就改成最下面去登录一样的逻辑
  //   if (to.path === "/login") {
  //     next("/");
  //   } else {
  //     // 判断是否已经拉取用户信息
  //     if (!store.state.user.name) {
  //       console.log("333");
  //       // 判断当前用户是否已拉去完user_info信息
  //       // 下面的第二个参数可以不传getToken看你获取用户信息里面怎么封装的
  //       store
  //         .dispatch("getInfo", getToken())
  //         .then(() => {
  //           // 拉去user_info
  //           // 动态路由，拉去菜单
  //           // 这里面写你获取用户信息要干的事情,不干就不写
  //           next();
  //         })
  //         .catch(() => {
  //           store.dispatch("logout");
  //         });
  //     } else {
  //       next();
  //     }
  //   }
  // } else if (whiteList.indexOf(to.path) !== -1) {
  //   // 免登录白名单
  //   next();
  // } else {
  //   // 否则全部去登录页
  //   // 先判断登录页面是否已经添加
  //   if (hasLogin()) {
  //     console.log('qq',to)
  //     next({path:'/login'});
  //   } else {
  //     // 添加登录页
  //     loadMenus(to, next);
  //   }
  // }
});

// 判断已经添加登录页面没防止重复添加
function hasLogin() {
  const routes = router.options.routes;
  let index = routes.findIndex(item => item.path === "/login");
  console.log("routes--", routes, index, index !== -1);

  return index !== -1;
}

// 动态加载路由
function loadMenus(to, next) {
  console.log("执行了几遍", to);
  loginNum++
  // 下面添加操作可以放到你需要在这之前调用接口,调接口包起来
  // 根据不同的域名添加对应的登录页面,下面还可以写成key,value形式匹配多个域名,可以添加localhost默认登录页面方便本地调试
  let path = window.location.pathname.includes("a") ? "a" : "b";
  let obj = {
    name: "login",
    path: "/login",
    component: loginPage
    // component: resolve => require([`@/views/demo/b.vue`],resolve)
  };
  // let index = router.options.routes.findIndex(item => item.path ==="/login")
  //router.addRoutes([obj]);
  // router.options.routes.push(obj); // 这一步为了上面hasLogin能够找到
  next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
  // next()
}
