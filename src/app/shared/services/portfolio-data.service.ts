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
      { label: 'Projetos', href: '#projetos' },
      { label: 'Contato', href: '#contato' },
    ];
  }

  getStats(): StatItem[] {
    return [
      { value: '5+', description: 'Anos de experiência' },
      { value: '30+', description: 'Projetos entregues' },
      { value: '12+', description: 'Tecnologias dominadas' },
      { value: '3', description: 'Empresas atendidas' },
    ];
  }

  getExperiences(): ExperienceItem[] {
    return [
      {
        period: '2023 — atual',
        role: 'Analista de Sistemas Sênior',
        company: 'Tech Solutions',
        description:
          'Liderança técnica de projetos de integração de sistemas e arquitetura de microsserviços. Desenvolvimento de soluções escaláveis com foco em alta disponibilidade.',
      },
      {
        period: '2021 — 2023',
        role: 'Analista de Sistemas Pleno',
        company: 'Analutika',
        description:
          'Desenvolvimento de APIs RESTful, integração com sistemas legados e modernização de plataformas internas com Python e Node.js.',
      },
      {
        period: '2019 — 2021',
        role: 'Desenvolvedor Backend',
        company: 'Netsmart',
        description:
          'Construção de plataformas web com foco em backend, utilizando Python e Node.js. Implementação de pipelines de dados e integrações com serviços de terceiros.',
      },
    ];
  }

  getTechnologies(): TechItem[] {
    return [
      { name: 'Python', category: 'BACKEND', icon: 'code' },
      { name: 'JavaScript', category: 'FRONTEND', icon: 'globe' },
      { name: 'React', category: 'FRONTEND', icon: 'layers' },
      { name: 'Node.js', category: 'BACKEND', icon: 'server' },
      { name: 'SQL', category: 'DATABASE', icon: 'database' },
      { name: 'PostgreSQL', category: 'DATABASE', icon: 'database' },
      { name: 'MongoDB', category: 'DATABASE', icon: 'database' },
      { name: 'Docker', category: 'DEVOPS', icon: 'box' },
      { name: 'Git', category: 'TOOLS', icon: 'git-branch' },
      { name: 'REST APIs', category: 'ARCHITECTURE', icon: 'globe' },
      { name: 'TypeScript', category: 'FRONTEND', icon: 'code' },
      { name: 'Redis', category: 'DATABASE', icon: 'database' },
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
          'Desenvolvimento de ERP completo para gestão de processos empresariais, integração com APIs de terceiros e dashboard analítico em tempo real.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
      },
      {
        number: '02',
        name: 'Plataforma de E-commerce',
        status: 'Produção',
        year: 2024,
        description:
          'Arquitetura de microsserviços para plataforma de vendas online com sistema de pagamentos integrado, gestão de estoque e analytics.',
        tags: ['Python', 'Docker', 'MongoDB'],
      },
      {
        number: '03',
        name: 'API de Integração Financeira',
        status: 'Produção',
        year: 2024,
        description:
          'API RESTful para integração com sistemas bancários e processamento de transações financeiras em tempo real com alta disponibilidade.',
        tags: ['Node.js', 'PostgreSQL', 'Redis'],
      },
    ];
  }

  getContactItems(): ContactItem[] {
    return [
      {
        icon: 'mail',
        main: 'vinicius.soares@email.com',
        subtitle: 'E-mail profissional',
        href: 'mailto:vinicius.soares@email.com',
      },
      {
        icon: 'linkedin',
        main: 'linkedin.com/in/viniciussoares',
        subtitle: 'Perfil LinkedIn',
        href: 'https://linkedin.com/in/viniciussoares',
      },
      {
        icon: 'github',
        main: 'github.com/viniciussoares',
        subtitle: 'Repositórios públicos',
        href: 'https://github.com/viniciussoares',
      },
    ];
  }

  getContactInfo(): ContactInfo {
    return {
      location: 'Brasil',
      availability: 'Imediata',
      modality: 'Remoto / Híbrido',
    };
  }

  getMarqueeTechs(): string[] {
    return [
      'CLOUD',
      'DEVOPS',
      'PYTHON',
      'REACT',
      'NODE.JS',
      'POSTGRESQL',
      'DOCKER',
      'MONGODB',
      'REST APIS',
      'MICROSSERVIÇOS',
      'GIT',
      'SQL',
    ];
  }
}
