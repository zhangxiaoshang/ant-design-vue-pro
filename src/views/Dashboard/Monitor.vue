<template>
  <div>
    {{ $t("hello") }}
    <a-pagination
      showSizeChanger
      :pageSize.sync="pageSize"
      :total="500"
      v-model="current"
    />

    <a-date-picker />
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
  methods: {}
};
</script>

<style></style>
