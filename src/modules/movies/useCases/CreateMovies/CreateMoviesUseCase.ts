import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prismaclient/client";
import { CreateMoviesDTO } from "./CreateMoviesDTO";

export class CreateMoviesUseCase{
    async execute({title, duration, release_data}:CreateMoviesDTO): Promise<[]> {
        const movieAlreadyExists = await prisma.movie.findUnique({
            where:{
                title
            }
        })

        if(movieAlreadyExists){
           throw new Error("Este filme já existe!")
    
        }

        //Criar usuario
        const movie = await prisma.movie.create({
            data:{
                title,
                duration,
                release_data
            }
        })

        return movie;
    }
}