import { Injectable } from '@angular/core';
import type {
  NavItem,
  StatItem,
  ExperienceItem,
  TechItem,
  Project,
  ContactItem,
  ContactInfo,
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  getNavItems(): NavItem[] {
    return [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Tecnologias', href: '#tecnologias' },
      { label: 'Projetos', href: '#projetos', featureKey: 'projetos' },
      { label: 'Contato', href: '#contato' },
    ];
  }

  getStats(): StatItem[] {
    return [
      { value: '3+', description: 'Anos de experiência', icon: 'clock' },
      { value: '30+', description: 'Entregas em produção', icon: 'check-circle' },
      { value: '4', description: 'Tecnologias', icon: 'layers' },
      { value: 'Top 5', description: 'Banco onde atuo', icon: 'award' },
    ];
  }

  getExperiences(): ExperienceItem[] {
    return [
      {
        period: '2022 — atual',
        role: 'Analista de Sistemas Full Stack',
        company: 'Banco Safra',
        description:
          'Responsável pelo desenvolvimento de sistemas e jornadas de investimento com impacto direto na experiência do cliente. Referência técnica em funcionalidades de alta criticidade, com atuação ativa na definição de arquitetura e padronização de código. Full stack com Angular no front-end e .NET no back-end — do refinamento de requisitos com as áreas de negócio ao deploy em produção.',
      },
    ];
  }

  getTechnologies(): TechItem[] {
    return [
      { name: 'Angular / AngularJS', category: 'FRONTEND', icon: 'layers' },
      { name: '.NET / ASP.NET', category: 'BACKEND', icon: 'server' },
      { name: 'Node.js', category: 'BACKEND', icon: 'globe' },
      { name: 'Prompt Engineering', category: 'TOOLS', icon: 'code' },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        number: '01',
        name: 'Sistema de Gestão Empresarial',
        status: 'Produção',
        year: 2025,
        description:
          'ERP modular para gestão de processos empresariais com dashboards analíticos em tempo real e integração com APIs externas. Arquitetura orientada à performance e escalabilidade para suportar operações de alta demanda.',
        tags: ['Angular', '.NET', 'SQL Server'],
      },
      {
        number: '02',
        name: 'Plataforma de E-commerce',
        status: 'Produção',
        year: 2024,
        description:
          'Plataforma de vendas com sistema de pagamentos integrado, gestão de estoque em tempo real e analytics comportamental. Foco em jornada do usuário fluida e alta disponibilidade para períodos de pico.',
        tags: ['.NET', 'Angular', 'Node.js'],
      },
      {
        number: '03',
        name: 'API de Integração Financeira',
        status: 'Produção',
        year: 2024,
        description:
          'API robusta para integração com sistemas bancários e processamento de transações financeiras em tempo real. Desenvolvida com foco em segurança, rastreabilidade e alta disponibilidade em ambiente de produção crítico.',
        tags: ['.NET', 'Angular', 'REST API'],
      },
    ];
  }

  getContactItems(): ContactItem[] {
    return [
      {
        icon: 'mail',
        main: 'vinicius.sds04@gmail.com',
        subtitle: 'Envie uma mensagem',
        href: 'mailto:vinicius.sds04@gmail.com',
      },
      {
        icon: 'linkedin',
        main: 'linkedin.com/in/vinicius-soares-0806a9191',
        subtitle: 'Veja minha trajetória',
        href: 'https://www.linkedin.com/in/vinicius-soares-0806a9191/',
      },
      {
        icon: 'github',
        main: 'github.com/oviniciusoares',
        subtitle: 'Confira meu código',
        href: 'https://github.com/oviniciusoares',
      },
    ];
  }

  getContactInfo(): ContactInfo {
    return {
      location: 'São Paulo, SP',
      availability: 'Imediata',
      modality: 'Remoto / Híbrido',
    };
  }

  getMarqueeTechs(): string[] {
    return [
      'ANGULAR',
      'ANGULARJS',
      '.NET',
      'ASP.NET',
      'NODE.JS',
      'TYPESCRIPT',
      'FULL STACK',
      'FRONT-END',
      'BACK-END',
      'API REST',
      'SISTEMAS FINANCEIROS',
      'ANÁLISE DE SISTEMAS',
    ];
  }
}
