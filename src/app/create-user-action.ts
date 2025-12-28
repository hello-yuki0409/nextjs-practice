"use server"

import z from "zod";
import prisma from "../../lib/prisma";

export type CreateUserResult = {
    success: boolean;
    message: string;
}

const createUserSchema = z.object({
    name: z.string().min(1). max(30),
    email: z.string().email(). max(100),
    password: z.string().min(6). max(30),
});

type CreateUserData = z.infer<typeof createUserSchema>;

export const createUserAction = async (data: CreateUserData): Promise<CreateUserResult> => {
    const validation = createUserSchema.safeParse(data)
    if (!validation.success) {
        console.error(validation.error)
        return {
            success: false,
            message: "バリデーションエラー",
        }
    }

    const {name, email, password} = validation.data;
    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

return {
    success: true,
    message: "ユーザー作成成功",
}
}
catch (err) {
    console.error(err);
    return {
        success: false,
        message: "ユーザー作成失敗",
    }
}
}

export const createUserActionFormServerComponent = async (
    FormData: FormData ) => {
        const userData = Object.fromEntries(FormData.entries())

        const validation = createUserSchema.safeParse(userData)
        if (!validation.success) {
            throw new Error("バリデーションエラー");
}

const {name, email, password} = validation.data;
    await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    })};