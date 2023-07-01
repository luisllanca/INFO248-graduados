import { Response, Request, NextFunction } from "express";
import { validationResult, Result } from "express-validator";

const fieldsValidator = (req: Request, res: Response, next: NextFunction) => {
  // Manejo de errores
  const errors: Result = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  next();
};

export {
  fieldsValidator
};