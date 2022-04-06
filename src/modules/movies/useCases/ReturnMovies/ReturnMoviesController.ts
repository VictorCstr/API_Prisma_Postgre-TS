import { Request, Response } from "express";
import { ReturnMoviesUseCase } from "./ReturnMoviesUseCase";



export class ReturnMoviesController{
    async handle(req: Request, res: Response){

        const returnMoviesUseCase = new ReturnMoviesUseCase()

        const  result = await returnMoviesUseCase.execute()
        
        return res.status(201).json(result)
    }
}