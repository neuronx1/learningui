export interface Comment {
    user_prename: string;
    user_surname: string;
    number_thumbs_up: number;
    text: string;
    replies: Comment[] | null;
}
