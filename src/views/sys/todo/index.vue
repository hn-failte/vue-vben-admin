<template>
  <div class="root">
    <header>
      ToDoList
      <div>共{{ eventNumber }}事项</div>
    </header>
    <main>
      <ul>
        <template v-for="event in eventList" :key="event.id">
          <li class="event" v-text="event.name"></li>
        </template>
      </ul>
    </main>
    <footer>
      <input @input="oninput" type="text" />
      <span v-if="important" style="color: red">!important</span>
      <div @click="addEvent" class="addEvent">添加事件</div>
      <div :ref="(el) => (doms['end'] = el)"></div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
  import {
    ref,
    // unref,
    // toRefs,
    watch,
    computed,
    onUpdated,
    onMounted,
    onActivated,
  } from 'vue';

  declare type ToDoEvent = {
    name: string;
    id: string;
  };

  // const refProps = toRefs(props);

  const eventList = ref([] as ToDoEvent[]);

  const eventNumber = computed(() => eventList.value.length);

  const important = ref(false);

  const doms = ref({});

  watch(eventList, (/*newVal, oldVal*/) => {
    console.log(eventList.value);
  });

  const inputVal = ref('');

  const oninput = (e: InputEvent) => {
    inputVal.value = (e && e.target && (e.target as HTMLInputElement).value) || '';
    important.value = inputVal.value.length > 10;
    doms.value['end'].innerText = inputVal.value.length;
  };

  const addEvent = () => {
    eventList.value = [
      ...eventList.value,
      {
        name: inputVal.value,
        id: Math.random().toString(36).slice(2),
      } as ToDoEvent,
    ];
  };

  onMounted(() => {
    console.log('onMounted');
  });

  onUpdated(() => {
    console.log('onUpdated');
  });

  onActivated(() => {
    console.log('onActivated');
  });
</script>

<style lang="less" scoped>
  .root {
    height: 100%;
    width: 100%;
  }
</style>
