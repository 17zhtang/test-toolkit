export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
    name: "login",
    meta: {
      title: "登录",
      hidden: true,
      icon: "",
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "",
      hidden: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "House",
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: true,
      icon: "",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "404",
      hidden: true,
      icon: "",
    },
  },
  //菜单
  {
    path: "/devices",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "设备管理",
      hidden: false,
      icon: "Cellphone",
    },
    children: [
      {
        path: "/devices",
        component: () => import("@/views/Devices/index.vue"),
        meta: {
          title: "测试设备",
          hidden: false,
          icon: "Cellphone",
        },
      },
    ],
  },
  {
    path: "/testAccount",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "测试账号管理",
      hidden: false,
      icon: "User",
    },
    children: [
      {
        path: "/testAccount/",
        component: () => import("@/views/TestAccount/index.vue"),
        meta: {
          title: "测试账号",
          hidden: false,
          icon: "User",
        },
      },
    ],
  },
	

	{
    path: "/timestamp",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "时间戳转换",
      hidden: false,
      icon: "Timer",
    },
    children: [
      {
        path: "/timestamp/",
        component: () => import("@/views/Timestamp/index.vue"),
        meta: {
          title: "时间戳转换",
          hidden: false,
          icon: "Timer",
        },
      },
    ],
  },


	{
    path: "/jsonFormat",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "json格式化",
      hidden: false,
      icon: "ArrowRightBold",
    },
    children: [
      {
        path: "/jsonFormat/",
        component: () => import("@/views/JsonFormat/index.vue"),
        meta: {
          title: "json格式化",
          hidden: false,
          icon: "ArrowRightBold",
        },
      },
    ],
  },

	{
    path: "/QRCode",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "生成二维码",
      hidden: false,
      icon: "ArrowRightBold",
    },
    children: [
      {
        path: "/QRCode",
        component: () => import("@/views/QRCode/index.vue"),
        meta: {
          title: "生成二维码",
          hidden: false,
          icon: "Grid",
        },
      },
    ],
  },

  {
    path: "/test",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "测试一级路由",
      hidden: false,
      icon: "User",
    },
    children: [
      {
        path: "/test/test1",
        component: () => import("@/views/TestAccount/index.vue"),
        meta: {
          title: "测试二级路由1",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/test/test2",
        component: () => import("@/views/TestAccount/index.vue"),
        meta: {
          title: "测试二级路由2",
          hidden: false,
          icon: "User",
        },
      },
    ],
  },
];