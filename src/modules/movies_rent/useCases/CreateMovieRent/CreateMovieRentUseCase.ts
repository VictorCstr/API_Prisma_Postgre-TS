import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prismaclient/client";
import { CreateMovieRentDTO } from "./CreateMovieRentDTO";

export class CreateMovieRentUseCase{
    async execute({userId, movieID}:CreateMovieRentDTO): Promise<[]> {
        const MovieExists = await prisma.movie.findFirst({
            where:{
               id : movieID
            }
        })

        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where:{
                movieID
            }
        })

        const userExist = await prisma.users.findUnique({
            where:{
                id: userId
            }
        })

        if(MovieExists || movieAlreadyRented || userExist){
            throw new Error('Faça a checagem se o filme ou o usuário existem. Caso sejam, o filme já está alugado!')
        }

        //Criar usuario
        const movieRent = await prisma.movieRent.create({
            data:{
                userId,
                movieID
            }
        })

        return movieRent;
    }
}