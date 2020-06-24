import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

// DTO - Data Transfer Object
// SoC: Separation of Concerns (Separação de preocupações)
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta
// lsof -i :5432
// net stat -a -b
// docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
