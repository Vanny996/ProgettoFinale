import { addUser, confirmRegistration, updateProfile }from'../controllers/userControllers/UserController.js';
import {loginValidator} from '../validator/loginValidator.js';
import { login } from '../controllers/userControllers/UserController.js';
import checkAuthorizationMiddleware from "../middlewares/checkAuthorizationMiddleware.js";
import {updateProfileValidator} from "../validator/updateProfileValidator.js";
export class UserRoutes{
    constructor (router){
        router.post('/user',addUserValidator,addUser);
        router.get('/user/:id/confirm/:token',confirmRegistrationValidator, confirmRegistration);
        router.post('/user/login',loginValidator,login);
        router.put('/user/profile',checkAuthorizationMiddleware,updateProfileValidator,updateProfile);
    }
}