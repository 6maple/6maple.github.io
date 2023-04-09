export const MOCK_SWIMLANES = [
  {
    id: 1,
    title: "Swimlane 1",
    tasks: [
      {
        id: 1,
        label: "Task 1",
        priority: "High",
        name: "Task 1",
        start: "2021-01-01",
        end: "2021-01-02",
        description: "Task 1 Description",
      },
      {
        id: 2,
        label: "Task 2",
        priority: "Medium",
        name: "Task 2",
        start: "2021-01-01",
        end: "2021-01-02",
        description: "Task 2 Description",
      },
    ],
  },
  {
    id: 2,
    title: "Swimlane 2",
    tasks: [
      {
        id: 3,
        label: "Task 3",
        priority: "Low",
        name: "Task 3",
        start: "2021-01-01",
        end: "2021-01-02",
        description: "Task 3 Description",
      },
      {
        id: 4,
        label: "Task 4",
        priority: "High",
        name: "Task 4",
        start: "2021-01-01",
        end: "2021-01-02",
        description: "Task 4 Description",
      },
    ],
  },
  {
    id: 3,
    title: "Swimlane 3",
    tasks: [
      {
        id: 5,
        label: "Task 5",
        priority: "Medium",
        name: "Task 5",
        start: "2021-01-01",
        end: "2021-01-02",
        description: "Task 5 Description",
      },
      {
        id: 6,
        label: "Task 6",
        priority: "Low",
        name: "Task 6",
        start: "2021-01-01",
        end: "2021-01-02",
        description: "Task 6 Description",
      },
    ],
  },
];

export const resolveMockedSwimlanesDataByDeepCopy = () => {
  return JSON.parse(JSON.stringify(MOCK_SWIMLANES));
};

export type SwimlaneItem = typeof MOCK_SWIMLANES[0];