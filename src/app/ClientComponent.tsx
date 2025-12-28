"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import z from "zod";
import { createUserAction, CreateUserResult } from "./create-user-action";

const createUserSchema = z.object({
    name: z.string().min(1). max(30),
    email: z.string().email(). max(100),
    password: z.string().min(6). max(30),
});

type CreateUserData = z.infer<typeof createUserSchema>;

export default function App() {
    const [result, setResult] = useState<CreateUserResult | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })
  const onSubmit: SubmitHandler<CreateUserData> = async (data) => {
    const res = await createUserAction(data);
    setResult(res);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <input className= "border" {...register("name")} />
      {errors.name != null && <span>{errors.name.message}</span>}
    </div>
    <div>
      <input className= "border" {...register("email")} />
      {errors.email != null && <span>{errors.email.message}</span>}
    </div>
    <div>
      <input className= "border" {...register("password")} />
      {errors.password != null && <span>{errors.password.message}</span>}
    </div>

    {result != null && <p>{result.message}</p>}


      <input type="submit" />
    </form>
  )
}