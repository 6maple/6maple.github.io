<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import { SwimlaneItem, resolveMockedSwimlanesDataByDeepCopy } from "./data";

const dragTaskId = ref<number>();

const swimlanes = ref(resolveMockedSwimlanesDataByDeepCopy());

interface VueDraggableEvent  {
  newIndex: number;
  oldIndex: number;
  item: HTMLDivElement;
  from: HTMLDivElement;
  to: HTMLDivElement;
  clone: HTMLDivElement;
};

const handleDragStart = (event: VueDraggableEvent, swimlane: SwimlaneItem) => {
  dragTaskId.value = swimlane.tasks[event.oldIndex].id;
};

const handleDragEnd = (event: VueDraggableEvent, swimlane: SwimlaneItem) => {
  dragTaskId.value = undefined;
};
</script>

<template>
  <div class="swimlane-container">
    <div v-for="swimlane in swimlanes" :key="swimlane.id" class="swimlane">
      <div class="swimlane-header">{{ swimlane.title }}</div>
      <draggable
        v-model="swimlane.tasks"
        group="tasks"
        ghost-class="task-dragging"
        @start="$event = handleDragStart($event, swimlane)"
        @end="$event = handleDragEnd($event, swimlane)"
        item-key="id"
      >
        <template #item="{ element: task }">
          <div :key="task.id" class="task" :class="{ dragging: dragTaskId === task.id }">
            <div class="task-header">
              <div class="task-label">{{ task.label }}</div>
              <div class="task-priority">{{ task.priority }}</div>
            </div>
            <div class="task-name">{{ task.name }}</div>
            <div class="task-dates">{{ task.start }} - {{ task.end }}</div>
            <div class="task-description">{{ task.description }}</div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped>
.swimlane-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ebecf0;
  background-image: url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100");
  background-size: cover;
  min-height: 100vh;
}

.swimlane {
  width: 30%;
  margin: 0 10px;
  background-color: #f4f5f7;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  opacity: 0.9;
  padding: 10px;
}

.swimlane:not(:first-child) {
  margin-left: 20px;
}

.swimlane-header {
  padding: 10px;
  background-color: #f4f5f7;
  border-bottom: 2px solid #d5d5d5;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.task {
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  opacity: 0.9;
  border-radius: 3px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.task-dragging {
  border: 2px solid skyblue;
}

.task:not(:first-child) {
  margin-top: 10px;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-label {
  padding: 5px 10px;
  background-color: #61bd4f;
  border-radius: 3px;
  color: white;
}

.task-priority {
  padding: 5px 10px;
  background-color: #f2d600;
  border-radius: 3px;
  color: white;
}

.task-name {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.task-dates {
  margin-top: 5px;
  font-size: 12px;
}

.task-description {
  margin-top: 10px;
  font-size: 14px;
}
</style>
