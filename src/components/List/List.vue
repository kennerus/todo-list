<template>
  <ElCheckboxGroup
    :value="checkboxGroupValue"
    class="items-list"

    @input="removeItem"
  >
    <ElCheckbox
      v-for="item in items"
      :key="item.id"
      :label="item.id"
    >
      {{ item.label }}
    </ElCheckbox>
  </ElCheckboxGroup>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => [
        {
          label: 'Label',
          id: -1,
        },
      ],
    },
  },
  computed: {
    checkboxGroupValue() {
      return this.items.map(item => item.id);
    },
  },
  methods: {
    /**
     * @param {number[]} newIdsList список айдишников за исключением по которому кликнули
     */
    removeItem(newIdsList) {
      this.$confirm('Точно хотите удалить элемент?', 'Warning', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
        type: 'warning',
      })
        .then(() => {
          const newItemsList = this.items.filter(item => newIdsList.includes(item.id));

          this.$store.dispatch('A_SET_ITEMS', newItemsList)
            .then(() => this.$emit('remove'));
        })
        .catch(console.error);
    },
  },
};
</script>

<style scoped>

</style>
