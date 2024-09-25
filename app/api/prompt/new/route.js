import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();

    try {
        await connectToDB();
        const newPromt = new Prompt({
            creator: userId,
            tag
        });
        await newPromt.save();

        return new Response(JSON.stringify(newPromt), {
            status: 201
        });
    } catch (error) {

    }
};