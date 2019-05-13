<template>
  <div style="width: 256px">
    <a-menu
      :defaultSelectedKeys="['/dashboard/analysis']"
      :defaultOpenKeys="['/dashboard']"
      mode="inline"
      :theme="theme"
      :inlineCollapsed="collapsed"
      @select="handleSelect"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from "./SubMenu";

export default {
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  components: {
    "sub-menu": SubMenu
  },
  data() {
    const menuData = this._getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData: menuData,
      list: [
        {
          key: "1",
          title: "仪表盘",
          children: [
            {
              key: "1.1",
              title: "分析页"
            },
            {
              key: "1.2",
              title: "监控页"
            },
            {
              key: "1.3",
              title: "工作台"
            }
          ]
        },
        {
          key: "2",
          title: "表单",
          children: [
            {
              key: "2.1",
              title: "基础表单"
            },
            {
              key: "2.2",
              title: "分步表单"
            },
            {
              key: "2.3",
              title: "高级表单"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // const route = this.$route.options.routers;
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    _getMenuData(routes) {
      let menuData = [];
      routes.forEach(item => {
        if (!item.hideInMenu && item.name) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this._getMenuData(item.children);
          }

          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          console.log(item.path);
          menuData.push(...this._getMenuData(item.children));
        }
      });

      return menuData;
    },
    handleSelect({ key }) {
      this.$router.push({ path: key, query: this.$route.query });
    }
  }
};
</script>
