import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prismaclient/client";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
    async execute({name, email}:CreateUserDTO): Promise<[]> {
        // Verificar se o usuário existe
        const userAlreadyExists = await prisma.users.findUnique({
            where:{
                email
            }
        })

        if(userAlreadyExists){
           throw new Error("Usuário já existe!")
    
        }

        //Criar usuario
        const user = await prisma.users.create({
            data:{
                name,
                email
            }
        })

        return user;
    }
}