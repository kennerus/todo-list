import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Получение объекта, который будет сохранён
 *
 * @param {string} label
 * @param {string | null} list
 * @return {object[]}
 */
function getObjectToAdd(label, list) {
  if (list !== null) {
    const listParsed = JSON.parse(list);

    listParsed.push({ label, id: listParsed.length });

    return listParsed;
  } else {
    return [{ label, id: 0 }];
  }
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    /**
     *
     * @param ctx
     * @param {object[]} newList
     * @constructor
     */
    A_SET_ITEMS(ctx, newList) {
      localStorage.setItem('todo-list', JSON.stringify(newList));
    },

    /**
     * @param ctx
     * @param {string} label
     * @constructor
     */
    A_ADD_ITEM(ctx, label) {
      const list = localStorage.getItem('todo-list');
      const newList = getObjectToAdd(label, list);

      ctx.dispatch('A_SET_ITEMS', newList);
    },

    A_GET_ITEMS(ctx) {
      const list = localStorage.getItem('todo-list');

      if (list === null) {
        ctx.dispatch('A_SET_ITEMS', []);

        return [];
      } else {
        return JSON.parse(list);
      }
    },
  },
  modules: {},
});
