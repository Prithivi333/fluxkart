import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();



// **** Export default **** //

export default apiRouter;
