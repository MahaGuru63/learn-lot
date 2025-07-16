import connectMongo from "../../../../utils/connectMongo";
import PostModal from "../../../../models/postModel";

export async function GET (){
    try {
        await connectMongo();
        const PostData = await PostModal.find({});
        return Response.json(PostData);
    
        } catch (error) {
       return Response.json({message :error.message}) 
    }
 
}