/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectWhereInput } from "./ProjectWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProjectCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProjectWhereInput,
  })
  @Field(() => ProjectWhereInput, { nullable: true })
  @Type(() => ProjectWhereInput)
  where?: ProjectWhereInput;
}

export { ProjectCountArgs as ProjectCountArgs };
