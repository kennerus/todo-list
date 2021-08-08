<template>
  <ElMain>
    <ElRow :gutter="20">
      <ElCol
        :span="8"
        :offset="6"
      >
        <CreateListItem @submit="onSubmit" />
      </ElCol>
    </ElRow>

    <ElRow :gutter="20">
      <ElCol
        :span="12"
        :offset="6"
      >
        <List
          v-if="items.length > 0"
          :items="items"

          @remove="onRemove"
        />

        <ElEmpty
          v-else
          description="Добавьте первый элемент списка"
        />
      </ElCol>
    </ElRow>
  </ElMain>
</template>

<script>
import CreateListItem from '@/components/List/ListItemCreate';
import List from '@/components/List/List';

export default {
  name: 'VHome',
  components: { List, CreateListItem },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    /**
     * @param {object[]} items
     * @param {string} items.label
     * @param {number} items.id
     *
     */
    getItemsSuccess(items) {
      this.items = items;
    },

    getItems() {
      this.$store.dispatch('A_GET_ITEMS')
        .then(this.getItemsSuccess);
    },

    onSubmitSuccess() {
      this.$message({
        message: 'Элемент добавлен',
        type: 'success',
      });
      this.getItems();
    },

    /**
     * @param {string} name
     */
    onSubmit(name) {
      this.$store.dispatch('A_ADD_ITEM', name)
        .then(this.onSubmitSuccess);
    },

    onRemove() {
      this.$message({
        message: 'Элемент удалён',
        type: 'success',
      });
      this.getItems();
    },
  },
};
</script>

<style scoped>
.items-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-top: 40px;

  text-align: left;
}
</style>
