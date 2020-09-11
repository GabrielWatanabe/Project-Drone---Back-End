import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import RepoModule from './repo.module';
import * as ormOptions from './config/orm';
import DroneResolver from './resolvers/drone.resolver';
import { GraphQLModule} from '@nestjs/graphql'

const graphQLImports = [
  DroneResolver,
];

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule, ...graphQLImports, GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    playground: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
