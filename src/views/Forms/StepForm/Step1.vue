<template>
  <a-form :form="form">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="付款账户"
    >
      <a-input
        v-decorator="[
          'payAccount',
          {
            rules: [{ required: true, message: 'Please input your payAccount' }]
          }
        ]"
        placeholder="Please input your payAccount"
      />
    </a-form-item>

    <a-form-item
      :label-col="formTailLayout.labelCol"
      :wrapper-col="formTailLayout.wrapperCol"
    >
      <a-button type="primary" @click="handleSubmit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit() {
      this.form.validateFields((err, form) => {
        if (!err) {
          this.$store.commit({
            type: "form/saveStepFormData",
            payload: { ...form }
          });
          this.$router.push("/form/step-form/confirm");
        }
      });
    }
  }
};
</script>
