import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("E-mail é obrigatório").email("Deve ser um e-mail válido"),
    password: z.string().nonempty("Senha é obrigatória"),
});

export const userRegisterSchema = z
    .object({
        name: z
            .string()
            .nonempty("Nome é obrigatório")
            .min(3, "O nome deve conter pelo menos 3 caracteres"),
        email: z.string().nonempty("E-mail é obrigatório").email("Deve ser um e-mail válido"),
        password: z.string().nonempty("Senha é obrigatória").min(4, "A senha deve ter no mínimo 4 caracteres"),
        confirmPassword: z.string().nonempty("Confirmação de senha é obrigatória").min(4, "A senha deve ter no mínimo 4 caracteres"),
        avatarUrl: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não correspodem",
        path: ["confirmPassword"],
    });


export type LoginData = z.infer<typeof loginSchema>
export type UserRegisterData = z.infer<typeof userRegisterSchema>