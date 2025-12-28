"use server"

import z from "zod";
import prisma from "../../lib/prisma";

const createUserSchema = z.object({
    name: z.string().min(1). max(30),
    email: z.string().email(). max(100),
    password: z.string().min(6). max(30),
});

type CreateUserData = z.infer<typeof createUserSchema>;

export const createUserAction = async (data: CreateUserData) => {
    const validation = createUserSchema.safeParse(data)
    if (!validation.success) {
        return validation.error;
    }

    const {name, email, password} = validation.data;
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });

return user;
}