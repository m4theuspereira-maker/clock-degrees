import { Response } from "express";

export const serverError = (res: Response, error: any): Response => {
  return res.status(500).json({ error: error.message });
};

export const badrequestError = (res: Response, error: string): Response => {
  return res.status(400).json({ error });
};

export const ok = (res: Response, data: any): Response => {
  if (Array.isArray(data)) {
    return res.status(200).json({ count: data.length, data });
  }

  return res.status(200).json(data);
};
