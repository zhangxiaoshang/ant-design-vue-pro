<template>
  <a-form :form="form">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="付款账户"
      >{{ step.payAccount }}</a-form-item
    >

    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="密码"
    >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your password' }] }
        ]"
        type="password"
        placeholder="Please input your password"
      />
    </a-form-item>

    <a-form-item
      :label-col="formTailLayout.labelCol"
      :wrapper-col="formTailLayout.wrapperCol"
    >
      <a-button type="default" @click="handleBack">上一步</a-button>
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
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleBack() {
      this.$router.push("/form/step-form/info");
    },
    handleSubmit() {
      const { step, form, $store } = this;
      form.validateFields((err, form) => {
        if (!err) {
          $store.dispatch({
            type: "form/submitStepForm",
            payload: {
              ...step,
              ...form
            }
          });
        }
      });
    }
  }
};
</script>
