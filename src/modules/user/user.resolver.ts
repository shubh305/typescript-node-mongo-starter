import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { UserService } from "../../services/user.service";
import { User } from "./user.type";

@Service()
@Resolver(of => User)
export class UserResolver {
  constructor(private userService: UserService) { }

  @Query(returns => [User])
  public users(): Promise<any> {
    return this.userService.findAll();
  }
}
