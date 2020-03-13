import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({
  description: 'User object.',
})
export class User {

  @Field(type => ID)
  public _id: string;

  @Field({
    description: 'The name of the user.',
  })
  public name: string;

  @Field({
    description: 'The email of the user.',
  })
  public email: string;

}
