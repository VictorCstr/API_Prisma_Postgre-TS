import { Router } from "express";
import { CreateMoviesController } from "./modules/movies/useCases/CreateMovies/CreateMoviesController";
import { ReturnMoviesController } from "./modules/movies/useCases/ReturnMovies/ReturnMoviesController";
import { CreateMovieRentController} from "./modules/movies_rent/useCases/CreateMovieRent/CreateMovieRentController";
import { CreateUserController } from "./modules/users/useCases/CreateUser/CreateUserController";
import { ReturnUsersControllers } from "./modules/users/useCases/ReturnUsers/ReturnUsersController";

//Chamando o controller

const returnUsersControllers = new ReturnUsersControllers()
const createUserController = new CreateUserController()
const createMoviesController = new CreateMoviesController()
const returnMoviesController = new ReturnMoviesController()
const createMovieRentController = new CreateMovieRentController()

const routes = Router()

routes.get('/users', returnUsersControllers.handle)
routes.post('/users', createUserController.handle)

routes.get('/movies', returnMoviesController.handle)
routes.post('/movies', createMoviesController.handle)
routes.post('/rentmovies', createMovieRentController.handle)


export {routes}