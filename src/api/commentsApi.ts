import { Comment } from "../types/Comment";

export const fetchComments = async (): Promise<Comment[]> => {
    return [
        {
            user_prename: "B",
            user_surname: "M",
            number_thumbs_up: 2,
            text: "How do I get access?",
            replies: [
                {
                    user_prename: "T",
                    user_surname: "S",
                    number_thumbs_up: 2,
                    text: "Click on this link: Asylum-Helper",
                    replies: null,
                },
            ],
        },
        {
            user_prename: "D",
            user_surname: "S",
            number_thumbs_up: 0,
            text: "What is the point of life?",
            replies: [
                {
                    user_prename: "T",
                    user_surname: "S",
                    number_thumbs_up: 4,
                    text: "42.",
                    replies: null,
                },
            ],
        },
        {
            user_prename: "B",
            user_surname: "M",
            number_thumbs_up: 2,
            text: "Great video, learned so much!",
            replies: [],
        },
    ];
};
