import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";



export class CreateMovieRentController{
    async handle(req: Request, res: Response){
        const {userId, movieID} = req.body

        const createMovieRentUseCase = new CreateMovieRentUseCase()

        const  result = await createMovieRentUseCase.execute({ userId , movieID })
        
        return res.status(201).json(result)
    }
}