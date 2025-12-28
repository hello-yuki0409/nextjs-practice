"use server"

import z from "zod";
import prisma from "../../lib/prisma";
import { actionClient } from "@/lib/safe-action";

export type CreateUserResult = {
    success: boolean;
    message: string;
}

const createUserSchema = z.object({
    name: z.string().min(1). max(30),
    email: z.string().email(). max(100),
    password: z.string().min(6). max(30),
});

export const createUserAction = actionClient.schema(createUserSchema).action(async({ parsedInput: { name, email, password } })=> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
})
