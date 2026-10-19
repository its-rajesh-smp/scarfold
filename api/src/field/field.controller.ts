import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { ProjectService } from '../project/project.service.js';
import { FieldService } from './field.service.js';
import { CreateFieldDto, UpdateFieldDto } from './field.dto.js';

@Controller('projects/:projectId/fields')
@UseGuards(JwtAuthGuard)
export class FieldController {
  constructor(
    private readonly fieldService: FieldService,
    private readonly projectService: ProjectService,
  ) {}

  @Get('/')
  async getFields(@Param('projectId') projectId: string, @Req() req: any) {
    await this.assertProjectOwner(projectId, req.user.id);
    const fields = await this.fieldService.findAllByProject(projectId);
    return { message: 'Get fields successful', data: fields };
  }

  @Post('/')
  async createField(
    @Param('projectId') projectId: string,
    @Body() createFieldDto: CreateFieldDto,
    @Req() req: any,
  ) {
    await this.assertProjectOwner(projectId, req.user.id);
    const field = await this.fieldService.create(projectId, createFieldDto);
    return { message: 'Create field successful', data: field };
  }

  @Patch('/:fieldId')
  async updateField(
    @Param('projectId') projectId: string,
    @Param('fieldId') fieldId: string,
    @Body() updateFieldDto: UpdateFieldDto,
    @Req() req: any,
  ) {
    await this.assertProjectOwner(projectId, req.user.id);
    const field = await this.fieldService.update(
      fieldId,
      projectId,
      updateFieldDto,
    );

    if (!field) {
      throw new NotFoundException('Field not found');
    }

    return { message: 'Update field successful', data: field };
  }

  @Delete('/:fieldId')
  async deleteField(
    @Param('projectId') projectId: string,
    @Param('fieldId') fieldId: string,
    @Req() req: any,
  ) {
    await this.assertProjectOwner(projectId, req.user.id);
    const field = await this.fieldService.archive(fieldId, projectId);

    if (!field) {
      throw new NotFoundException('Field not found');
    }

    return { message: 'Delete field successful', data: {} };
  }

  // Fields are only reachable through a project the user owns
  private async assertProjectOwner(projectId: string, userId: string) {
    const project = await this.projectService.findOneByUser(projectId, userId);

    if (!project) {
      throw new NotFoundException('Project not found');
    }
  }
}
