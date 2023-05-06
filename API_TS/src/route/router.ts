import { Router } from "express";
import { Session } from "../controller/loginController";

const router: Router = Router();
const sessionController = new Session();

router.get('/user', );


router.post('/user/login', sessionController.login)

export { router }; 