import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { ProjectService } from './project.service.js';
import { CreateProjectDto, UpdateProjectDto } from './project.dto.js';

@Controller('projects')
@UseGuards(JwtAuthGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/')
  async getProjects(@Req() req: any) {
    const userId = req.user.id;
    const projects = await this.projectService.findAllByUser(userId);
    return { message: 'Get projects successful', data: projects };
  }

  @Get('/:id')
  async getProject(@Param('id') projectId: string, @Req() req: any) {
    const userId = req.user.id;
    const project = await this.projectService.findOneByUser(projectId, userId);

    if (!project) {
      throw new NotFoundException('Project not found');
    }

    return { message: 'Get project successful', data: project };
  }

  @Post('/')
  async createProject(
    @Body() createProjectDto: CreateProjectDto,
    @Req() req: any,
  ) {
    const userId = req.user.id;
    const project = await this.projectService.create(userId, createProjectDto);
    return { message: 'Create project successful', data: project };
  }

  @Patch('/:id')
  async updateProject(
    @Body() updateProjectDto: UpdateProjectDto,
    @Req() req: any,
  ) {
    const userId = req.user.id;
    const projectId = req.params.id;
    await this.projectService.update(projectId, userId, updateProjectDto);

    return { message: 'Update project successful', data: {} };
  }

  @Patch('/:id/archive')
  async archiveProject(@Req() req: any) {
    const userId = req.user.id;
    const projectId = req.params.id;
    await this.projectService.archive(projectId, userId);

    return { message: 'Archive project successful', data: {} };
  }
}
