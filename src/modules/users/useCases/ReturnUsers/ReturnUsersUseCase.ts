import { prisma } from "../../../../prismaclient/client";

export class ReturnUsersUseCase{
        async execute() : Promise<[]> {
            const users = await prisma.users.findMany({
                orderBy:{
                    name: "desc"
                },
                
            })

        return users
        }
}