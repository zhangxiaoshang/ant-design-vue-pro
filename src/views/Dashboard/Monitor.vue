<template>
  <div>
    {{ $t("hello") }}
    <a-pagination
      showSizeChanger
      :pageSize.sync="pageSize"
      @showSizeChange="onShowSizeChange"
      :total="500"
      v-model="current"
    />

    <div
      :style="{
        width: '300px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px'
      }"
    >
      <a-calendar :fullscreen="false" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 4
    };
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    }
  }
};
</script>

<style></style>
