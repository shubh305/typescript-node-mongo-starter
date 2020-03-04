import { Service } from 'typedi';
import { IUserDocument } from "../modules/user/user.interfaces";
import { User } from "../modules/user/user.model";

@Service()
export class UserService {
  public async findAll(): Promise<IUserDocument[]> {
    return await User.find({}).lean();
  }

  public async findOne(id: string): Promise<IUserDocument[]> {
    return await User.find({ _id: id }).limit(1).lean();
  }

  public async findByEmail(email: string): Promise<IUserDocument[]> {
    return await User.find({ email: email }).limit(1).lean();
  }

  public async createUser(user: IUserDocument): Promise<IUserDocument> {
    await user.save();
    let token = user.generateAuthToken();
    user = user.toObject();
    user.token = token;
    return user;
  }

}
