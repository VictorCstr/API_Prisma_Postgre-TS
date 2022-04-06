import { prisma } from "../../../../prismaclient/client";

export class ReturnMoviesUseCase{
        async execute() : Promise<[]> {
            const movies = await prisma.movie.findMany({
                orderBy:{
                    release_data: "desc"
                },
                include:{
                    movie_rent:{
                        select:{
                            user: true
                        }
                    }
                }
            })

        return movies
        }
}