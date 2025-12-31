"use server";

import { actionClient } from "@/lib/safe-action";
import { UserOptionalDefaultsSchema } from "../../../../prisma/generated/zod/modelSchema/UserSchema";
import prisma from "@/lib/prisma";

export const signup = actionClient
  .schema(UserOptionalDefaultsSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
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
        message: "ユーザーが作成されました。",
      };
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: "ユーザーの作成に失敗しました。",
      };
    }
  });
