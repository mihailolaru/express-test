import { Request, Response, NextFunction } from 'express';

export const authCheckMiddleware = async (req: Request, res: Response, next: NextFunction) => {  
	const user = "";

	if (user) {
		res.status(403).json({
		err: "Admin resource. Access denied.",
		});
	} else {
		next();
	}

};

export const checkAuthorMiddleware  = async (req: Request, res: Response, next: NextFunction) => {  
	const author = "";

	if (author) {
		res.status(403).json({
		err: "Admin resource. Access denied.",
		});
	} else {
		next();
	}

};


