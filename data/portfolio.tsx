import React from "react"
import { Cloud, Container, FileCode2, GitBranch, Activity, Terminal, Server, ShieldCheck, CloudCog, LineChart, Network } from "lucide-react"
import {
    SiAmazon,
    SiAmazonec2,
    SiAmazoniam,
    SiAmazoneks,
    SiAmazons3,
    SiAmazonrds,
    SiAmazoncloudwatch,
    SiAmazonroute53,
    SiDocker,
    SiKubernetes,
    SiHelm,
    SiTerraform,
    SiAnsible,
    SiJenkins,
    SiGithubactions,
    SiArgo,
    SiSonarqube,
    SiSonatype,
    SiGit,
    SiHashicorp,
    SiPrometheus,
    SiGrafana,
    SiElastic,
    SiPython,
    SiGnubash,
    SiLinux,
    SiUbuntu,
    SiCentos,
    SiNginx,
} from "react-icons/si"
import { FaNetworkWired, FaServer } from "react-icons/fa"

export const socialLinks = [
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/aditya-pandit-7a0b3b1b2/",
    },
    {
        title: "GitHub",
        href: "https://github.com/AdityaPandit1",
    },
    {
        title: "Email",
        href: "mailto:adityapandit1@gmail.com",
    },
];

// Skills Data
export const SKILL_CATEGORIES = [
    {
        id: "cloud-platforms",
        title: "Cloud Platforms",
        description: "Designing secure, scalable and cost-efficient workloads on AWS.",
        icon: Cloud,
        items: [
            { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
            { name: "EC2", icon: SiAmazonec2, color: "text-orange-400" },
            { name: "VPC", icon: FaNetworkWired, color: "text-slate-400" },
            { name: "IAM", icon: SiAmazoniam, color: "text-red-500" },
            { name: "EKS", icon: SiAmazoneks, color: "text-orange-300" },
            { name: "S3", icon: SiAmazons3, color: "text-green-500" },
            { name: "RDS", icon: SiAmazonrds, color: "text-blue-500" },
            { name: "Lambda", icon: SiAmazon, color: "text-orange-500" },
            { name: "CloudWatch", icon: SiAmazoncloudwatch, color: "text-pink-500" },
            { name: "CloudTrail", icon: SiAmazon, color: "text-slate-300" },
            { name: "ALB / NLB", icon: FaServer, color: "text-slate-400" },
            { name: "ASG", icon: SiAmazon, color: "text-orange-400" },
            { name: "Route 53", icon: SiAmazonroute53, color: "text-yellow-500" },
            { name: "VPC Endpoints", icon: FaNetworkWired, color: "text-slate-400" },
        ],
    },
    {
        id: "containers",
        title: "Containerization & Orchestration",
        description: "Shipping, scaling and securing workloads with Docker & Kubernetes.",
        icon: Container,
        items: [
            { name: "Docker", icon: SiDocker, color: "text-blue-500" },
            { name: "Kubernetes (EKS)", icon: SiKubernetes, color: "text-blue-400" },
            { name: "Helm", icon: SiHelm, color: "text-blue-600" },
            { name: "Ingress Controllers", icon: SiNginx, color: "text-green-500" },
            { name: "Autoscaling", icon: Activity, color: "text-emerald-400" },
            { name: "Kubernetes Security", icon: SiKubernetes, color: "text-blue-300" },
        ],
    },
    {
        id: "iac",
        title: "Infrastructure as Code",
        description: "Codifying infrastructure for repeatable, auditable environments.",
        icon: FileCode2,
        items: [
            { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
            { name: "Terragrunt", icon: SiTerraform, color: "text-purple-400" },
            { name: "Ansible", icon: SiAnsible, color: "text-red-500" },
        ],
    },
    {
        id: "cicd",
        title: "CI/CD & DevSecOps",
        description: "Enabling GitOps, secure delivery pipelines and secret management.",
        icon: GitBranch,
        items: [
            { name: "Jenkins", icon: SiJenkins, color: "text-red-400" },
            { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-500" },
            { name: "ArgoCD (GitOps)", icon: SiArgo, color: "text-orange-500" },
            { name: "SonarQube", icon: SiSonarqube, color: "text-blue-400" },
            { name: "Nexus", icon: SiSonatype, color: "text-green-500" },
            { name: "Git", icon: SiGit, color: "text-orange-600" },
            { name: "HashiCorp Vault", icon: SiHashicorp, color: "text-gray-400" },
        ],
    },
    {
        id: "observability",
        title: "Monitoring & Observability",
        description: "Building visibility and golden-signal alerting across platforms.",
        icon: Activity,
        items: [
            { name: "Prometheus", icon: SiPrometheus, color: "text-orange-500" },
            { name: "Grafana", icon: SiGrafana, color: "text-orange-400" },
            { name: "Loki", icon: SiGrafana, color: "text-orange-300" },
            { name: "ELK", icon: SiElastic, color: "text-yellow-500" },
            { name: "CloudWatch", icon: SiAmazoncloudwatch, color: "text-pink-500" },
        ],
    },
    {
        id: "scripting",
        title: "Scripting & Automation",
        description: "Automating operations and cloud tasks at scale.",
        icon: Terminal,
        items: [
            { name: "Python", icon: SiPython, color: "text-yellow-400" },
            { name: "Bash", icon: SiGnubash, color: "text-slate-300" },
        ],
    },
    {
        id: "systems",
        title: "OS & Systems",
        description: "Linux-based systems, networking and performance tuning.",
        icon: Server,
        items: [
            { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
            { name: "Ubuntu", icon: SiUbuntu, color: "text-orange-500" },
            { name: "CentOS", icon: SiCentos, color: "text-purple-500" },
            { name: "systemd", icon: Terminal, color: "text-slate-400" },
            { name: "Networking", icon: FaNetworkWired, color: "text-blue-400" },
            { name: "Performance tuning", icon: Activity, color: "text-green-400" },
        ],
    },
]

// Experience Data
export const EXPERIENCE_EVENTS = [
    {
        id: "innspark",
        date: "Aug 2024 – Present · Pune, IN",
        title: "Cloud Engineer · Innspark Solutions",
        description:
            "Architecting Zero-Trust on EKS using Vault and Vault Agent Injector to enforce zero hardcoded secrets across services. Migrated deployments from imperative Jenkins pipelines to GitOps with ArgoCD and Helm, enabling click-to-deploy environments for Dev/QA. Re-architected EKS compute layer with Karpenter and Spot instances, reducing AWS compute costs by ~40% and improving scaling from ~5 minutes to ~45 seconds. Deployed the PLG stack (Prometheus, Loki, Grafana) and Golden Signal alerting to reduce MTTR by ~35%.",
        icon: GitBranch,
        iconClass: "text-white w-5 h-5",
        image:
            "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2400&auto=format&fit=crop",
        category: "Cloud · GitOps · Observability",
        color: "indigo",
    },
    {
        id: "jawk",
        date: "Mar 2022 – Jul 2024 · Pune, IN",
        title: "Software Engineer · JAWK Softwares",
        description:
            "Designed AWS infrastructures using reusable Terraform modules (VPC, RDS, ALB, ASG) with remote state locking, cutting environment provisioning time by 80%. Led monolith-to-microservices migration using Docker multi-stage builds (60% smaller images, reduced vulnerability surface). Implemented event-driven pipelines with S3, SQS and Lambda to handle traffic spikes with 99.9% availability, and designed secure VPCs with public/private subnets and PrivateLink for S3/ECR.",
        icon: CloudCog,
        iconClass: "text-white w-5 h-5",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
        category: "Infrastructure as Code · AWS",
        color: "indigo",
    },
]

// Projects Data
export const PROJECTS = [
    {
        id: "zerotrust-devsecops",
        title: "Zero-Trust DevSecOps Platform (Vault + ArgoCD + EKS)",
        timeframe: "Oct 2023 – Present",
        role: "Cloud / DevSecOps Engineer",
        summary:
            "Zero-Trust platform on EKS using HashiCorp Vault, GitOps with ArgoCD, and Helm to standardize deployments and secrets management.",
        impact: [
            "Replaced static Kubernetes Secrets with Vault-issued ephemeral DB credentials for 15+ microservices.",
            "Achieved zero hardcoded secrets policy across critical workloads.",
            "Implemented ArgoCD App of Apps pattern for full GitOps control and drift detection.",
        ],
        tech: ["AWS EKS", "HashiCorp Vault", "ArgoCD", "Helm", "Kubernetes", "GitOps"],
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
        icon: ShieldCheck,
        iconClass: "w-5 h-5 text-emerald-400",
        category: "DevSecOps · Zero-Trust",
    },
    {
        id: "cost-optimized-autoscaling",
        title: "Cost-Optimized Autoscaling Infrastructure (Karpenter + KEDA)",
        timeframe: "Jul 2023 – Sep 2023",
        role: "Cloud Engineer",
        summary:
            "FinOps-focused autoscaling architecture using Karpenter for Spot capacity and KEDA for event-driven scaling.",
        impact: [
            "Configured Karpenter to aggressively provision EC2 Spot instances for stateless workloads with bin-packing.",
            "Scaled workloads based on SQS queue depth using KEDA instead of just CPU/Memory.",
            "Aligned compute with real demand, significantly reducing overprovisioning and idle capacity.",
        ],
        tech: ["Karpenter", "KEDA", "AWS EC2 Spot", "SQS", "EKS", "Autoscaling"],
        image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2400&auto=format&fit=crop",
        icon: LineChart,
        iconClass: "w-5 h-5 text-emerald-400",
        category: "FinOps · Autoscaling",
    },
    {
        id: "multi-region-identity",
        title: "Global Multi-Region Identity Platform (OpenLDAP + HAProxy)",
        timeframe: "Oct 2023 – Present",
        role: "Cloud / Platform Engineer",
        summary:
            "Highly available, multi-region identity platform built on OpenLDAP with N-Way replication and HAProxy.",
        impact: [
            "Migrated from Microsoft Active Directory to OpenLDAP, reducing licensing and operational overhead by ~30%.",
            "Configured Syncrepl-based N-Way multi-master replication for real-time consistency across regions.",
            "Deployed HAProxy in front of LDAP clusters to distribute read/write traffic and handle failover seamlessly.",
        ],
        tech: ["OpenLDAP", "HAProxy", "Syncrepl", "Linux", "Multi-region", "High Availability"],
        image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2400&auto=format&fit=crop",
        icon: Network,
        iconClass: "w-5 h-5 text-emerald-400",
        category: "Identity · High Availability",
    },
]
