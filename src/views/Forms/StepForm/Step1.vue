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
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="收款账户"
    >
      <ReceiverAccount
        v-decorator="[
          'receiverAccount',
          {
            initialValue: step.receiverAccount,
            rules: [
              {
                required: true,
                message: '请输入收款账号',
                validator: (rule, value, callback) => {
                  if (value && value.number) {
                    callback();
                  } else {
                    callback(false);
                  }
                }
              }
            ]
          }
        ]"
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
import ReceiverAccount from "@/components/ReceiverAccount";
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  components: {
    ReceiverAccount
  },
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
