import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title:String,
    description:String,
    Image:String
});

const PostModal = models.Post || model('Post', postSchema);
export default PostModal;