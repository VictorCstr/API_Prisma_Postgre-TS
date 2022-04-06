import { Request, Response } from "express";
import { ReturnUsersUseCase } from "./ReturnUsersUseCase";




export class ReturnUsersControllers{
    async handle(req: Request, res: Response){

        const returnUsersUseCase = new ReturnUsersUseCase

        const  result = await returnUsersUseCase.execute()
        
        return res.status(201).json(result)
    }
}