import { Request, Response } from 'express';
import { withRouter, get } from './decorators';
import { formatData } from './utils';
import fs from 'fs';
@withRouter('/api')
class APIController {
  @get('/')
  async Data(req: Request, res: Response) {
    try {
      const siteName = req.query.siteName as string;
      if (siteName) {
        const rawData = fs.readFileSync(`${siteName}.json`, 'utf-8');
        const data = JSON.parse(rawData);
        res.status(200).json({ success: true, payload: formatData(data) });
      } else {
        res.status(400).json({ success: false, message: 'Insufficient query' });
      }
    } catch (e) {
      res.status(500).json({ success: false, message: e.message });
    }
  }
}
