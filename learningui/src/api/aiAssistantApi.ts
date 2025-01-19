export const getRecommendedQuestions = async (): Promise<string[]> => {
  return ["How do I change the Birthday?", "How do I change the entry?"];
};

export const restoreChatHistory = async () => {
  return [
    { role: "user", type: "text", text: "What do I do if the country is not listed in the countries of origin?" },    { role: "assistant", type: "text", text: "In this case, this country can be added in the system settings" },
    { role: "assistant", type: "video-timestamp", image_path: "assistant_frame.png", timestamp: 252 },

  ];
};

export const getAnswer = async (question: string): Promise<string> => {
  if (question === "How do I change the Birthday?") return "A";
  if (question === "How do I change the entry?") return "B";
  return "C";
};
