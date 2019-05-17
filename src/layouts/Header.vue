<template>
  <div class="header">
    <a-dropdown>
      <a-icon type="global"></a-icon>
      <a-menu
        slot="overlay"
        :selectedKeys="[$route.query.locale || 'zhCN']"
        @click="localeChange"
      >
        <a-menu-item key="zhCN">中文</a-menu-item>
        <a-menu-item key="enUS">English</a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    localeChange({ key }) {
      this.$router.push({ query: { ...this.$route.query, locale: key } });
    }
  }
};
</script>

<style scoped>
.header {
  float: right;
  margin-right: 30px;
}
</style>
