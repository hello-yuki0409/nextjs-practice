"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import z from "zod";
import { createUserAction, CreateUserResult } from "./create-user-action";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";

const createUserSchema = z.object({
    name: z.string().min(1). max(30),
    email: z.string().email(). max(100),
    password: z.string().min(6). max(30),
});


export default function App() {
    const [result, setResult] = useState<CreateUserResult | null>(null)
  const  { form, action, handleSubmitWithAction } = useHookFormAction(createUserAction, zodResolver(createUserSchema),{
    		actionProps: {
             
          onSuccess: ({data}) => {
                    if (data != null) return
                    setResult(data);
                },
            },
  });

  const {register, formState: {errors}, }= form;

  return (
    <form onSubmit={handleSubmitWithAction}>
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

      <button>{action.isPending ? "送信中・・・": "送信"}</button>
    </form>
  )
}