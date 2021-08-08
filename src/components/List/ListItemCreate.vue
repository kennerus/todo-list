<template>
  <ElForm
    :model="form"
    ref="createNewItem"
    :rules="rules"

    @submit.native.prevent="onSubmit"
  >
    <ElFormItem
      label="Введите название"
      prop="itemName"
    >
      <ElInput
        id="itemName"
        v-model="form.itemName"
        autocomplete="on"
      />
    </ElFormItem>

    <ElButton
      type="primary"
      native-type="submit"
    >
      Добавить
    </ElButton>
  </ElForm>
</template>

<script>
export default {
  name: 'ListItemCreate',
  data() {
    return {
      form: {
        itemName: '',
      },
      rules: {
        itemName: [{ required: true, message: 'Введите название', trigger: 'blur' }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.createNewItem.validate(valid => {
        if (valid) {
          this.$emit('submit', this.form.itemName);
          this.form.itemName = '';
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
