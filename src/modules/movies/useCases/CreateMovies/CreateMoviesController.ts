import { Request, Response } from "express";
import { CreateMoviesUseCase } from "./CreateMoviesUseCase";



export class CreateMoviesController{
    async handle(req: Request, res: Response){
        const {title, duration, release_data} = req.body

        const createMoviesUseCase = new CreateMoviesUseCase()

        const result = await createMoviesUseCase.execute({ title , duration, release_data })
        
        return res.status(201).json(result)
    }
}