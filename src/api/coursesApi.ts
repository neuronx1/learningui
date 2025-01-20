export interface Course {
  title: string;
  framePath: string;
  courseID: string;
  progress: number;
  nrVideos: number;
  startDate: string;
  dueDate: string;
  description: string;
}

export const fetchCourses = async (): Promise<Course[]> => {
  return [
    {
      title: "Data Management of Refugees",
      framePath: "video1.PNG",
      courseID: "someUUID",
      progress: 0.29,
      nrVideos: 8,
      startDate: "16.12.2024",
      dueDate: "07.01.2025",
      description: "This course provides practical and in-depth guidance on the entire lifecycle of refugee data, from ethical collection methods and secure storage practices to insightful analysis techniques and responsible utilization strategies."
    },    {
      title: "Data Management of Refugees",
      framePath: "video1.PNG",
      courseID: "someUUID",
      progress: 0.29,
      nrVideos: 8,
      startDate: "16.12.2024",
      dueDate: "07.01.2025",
      description: "This course provides practical and in-depth guidance on the entire lifecycle of refugee data, from ethical collection methods and secure storage practices to insightful analysis techniques and responsible utilization strategies."
    },    {
      title: "Data Management of Refugees",
      framePath: "video1.PNG",
      courseID: "someUUID",
      progress: 0.29,
      nrVideos: 8,
      startDate: "16.12.2024",
      dueDate: "07.01.2025",
      description: "This course provides practical and in-depth guidance on the entire lifecycle of refugee data, from ethical collection methods and secure storage practices to insightful analysis techniques and responsible utilization strategies."
    },    {
      title: "Data Management of Refugees",
      framePath: "video1.PNG",
      courseID: "someUUID",
      progress: 0.29,
      nrVideos: 8,
      startDate: "16.12.2024",
      dueDate: "07.01.2025",
      description: "This course provides practical and in-depth guidance on the entire lifecycle of refugee data, from ethical collection methods and secure storage practices to insightful analysis techniques and responsible utilization strategies."
    }
  ];
}; 