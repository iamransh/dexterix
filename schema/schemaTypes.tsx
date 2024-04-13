import {z} from 'zod';

export const UserSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    isMentor: z.boolean().optional(),
    status: z.enum(['PENDING', 'ACCEPTED', 'REJECTED']).optional(),
    phone: z.string().optional(),
    password: z.string().optional(),
    about: z.string().optional(),
    profession: z.string().optional(),
    experience: z.string().optional(),
});

export type UserType = z.infer<typeof UserSchema>;

export const AdminSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type AdminType = z.infer<typeof AdminSchema>;

