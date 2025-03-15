import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/guard/jwt.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.useGlobalGuards(new JwtAuthGuard());

    const config = new DocumentBuilder()
    .setTitle('To-Do List Swagger')
    .setDescription('This API allows you to manage a list of tasks efficiently. ' +
                     'With it, users can create, edit, delete and list tasks. ' +
                     'In addition, it allows you to mark tasks as completed and filter them by status.')
    .setVersion('1.0')
    .addTag('Login')
    .addTag('Users')
    .addTag('Tasks')
      .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    }, 'JWT-auth')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
