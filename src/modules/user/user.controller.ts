import { Body, Get, JsonController, Param, Post } from "routing-controllers";
import { UserBusiness } from "./user.business";
import { IUserDocument } from "./user.interfaces";

@JsonController('/users')
export class UserController extends UserBusiness {

  @Post("/login")
  public async userLogin(@Body() body: IUserDocument): Promise<any> {
    return await this.login(body);
  }

  @Post("/signup")
  public async userSignup(@Body() body: IUserDocument): Promise<any> {
    return await this.signup(body);
  };

  @Get("/:id")
  public async userGetOne(@Param('id') id: string): Promise<any> {
    return await this.getUser(id);
  };

  @Get("/")
  public async userGetAll(): Promise<any> {
    console.log(this)
    return await this.getAllUsers();
  };
}