<template>
  <a-locale-provider :locale="locale">
    <router-view />
  </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";

export default {
  data() {
    return {
      locale: zhCN
    };
  },
  watch: {
    "$route.query.locale": function(val) {
      this.locale = val === "enUS" ? enUS : zhCN;
      this.$i18n.locale = val === "enUS" ? "en" : "zh";
    }
  }
};
</script>

<style lang="less"></style>
