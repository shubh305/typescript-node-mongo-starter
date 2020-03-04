import { User } from "./user.model";
import { UserService } from "../../services/user.service";
import { IUserDocument } from "./user.interfaces";
import { Controller } from "routing-controllers";

@Controller()
export class UserBusiness {
  constructor(private userService: UserService) { }

  public async login(body: IUserDocument) {
    return await this.userService.findByEmail(body.email);
  }

  public async signup(body: IUserDocument): Promise<any> {
    const user = new User(body);
    return this.userService.createUser(user);
  }

  public async getUser(id: string) {
    return await this.userService.findOne(id);
  }
  public async getAllUsers() {
    return await this.userService.findAll();
  }

}