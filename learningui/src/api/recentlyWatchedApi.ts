export interface RecentlyWatched {
  title: string;
  subtitle: string;
  videoframe: string;
  summary: string;
  mindmap: string;
}

export const fetchRecentlyWatched = async (): Promise<RecentlyWatched[]> => {
  return [
    {
      title: "Add new refugees",
      subtitle: "Data Management for Refugees",
      videoframe: "video1.PNG",
      summary: "summary1.pdf",
      mindmap: "mindmap1.pdf",
    },
    // Add more entries as needed
  ];
}; 