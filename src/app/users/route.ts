import z from "zod";
import prisma from "../../../lib/prisma";

const createUserSchema = z.object({
    name: z.string().min(1, {message: "名前は1文字以上です"}). max(30),
    email: z.string().email(). max(100),
    password: z.string().min(6). max(30),
});

export async function POST(request: Request) {
    const res = await request.json();

const validation = createUserSchema.safeParse(res)
if (!validation.success) {
    return Response.json(validation.error, {status: 400})
}

const {name, email, password} = validation.data;

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    });
    return Response.json({user});
}