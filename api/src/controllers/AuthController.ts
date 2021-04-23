import { Request, Response } from 'express';
import { withRouter, get, post } from './decorators';
import { User } from '../dbconf';
import { compare, encrypt } from './utils';
interface AuthBody {
  username: string;
  password: string;
}
interface RegisterBody extends AuthBody {
  modules: string[];
}
@withRouter('/auth')
class AuthController {
  @post('/login')
  async Login(req: Request, res: Response) {
    try {
      const { username, password }: AuthBody = req.body;
      if (username && password) {
        const user = await User.findOne({ username });
        if (user) {
          const match = await compare(password, user.hash);
          if (match) {
            res.status(200).json({ success: true, payload: user.info });
          } else {
            res
              .status(403)
              .json({ success: false, message: 'Wrong email or password' });
          }
        } else {
          res
            .status(403)
            .json({ success: false, message: 'Wrong email or password' });
        }
      } else {
        res
          .status(400)
          .json({ success: false, message: 'Invalid request body' });
      }
    } catch (e) {
      res.status(500).json({ success: false, message: e.message });
    }
  }
  @post('/register')
  async test(req: Request, res: Response) {
    try {
      const { username, password }: RegisterBody = req.body;
      if (username && password) {
        const exists = await User.countDocuments({ username });
        if (!exists) {
          const hash = await encrypt(password);
          const user = new User({ ...req.body, hash });
          user.save(async (error: any) => {
            if (error) {
              res.status(400).json({ success: false, message: error.message });
            } else {
              res.status(200).json({ success: true, payload: user.info });
            }
          });
        } else {
          res
            .status(409)
            .json({ success: false, message: 'User already exists' });
        }
      } else {
        res
          .status(400)
          .json({ success: false, message: 'Ivalid request body' });
      }
    } catch (e) {
      res.status(500).json({ success: false, message: e.message });
    }
  }
  @get('/users')
  async getAll(req: Request, res: Response) {
    try {
      const users = await User.find({});
      res.json({ success: true, payload: users });
    } catch (e) {
      res.status(500).json({ success: false, message: e.message });
    }
  }
}
