import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { EpicModule } from './epic/epic.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [UserModule, ProjectModule, EpicModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
