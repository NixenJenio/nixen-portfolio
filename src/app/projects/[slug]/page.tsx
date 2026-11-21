import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/portfolioData";
import PortfolioV3Shell from "@/components/PortfolioV3Shell";
import { PortfolioV3PageFrame } from "@/components/PortfolioV3PageFrame";
import PortfolioV3ProjectDetail from "@/components/PortfolioV3ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.id === slug);
  if (!project) notFound();

  return <PortfolioV3Shell>
    <PortfolioV3PageFrame><PortfolioV3ProjectDetail project={project} /></PortfolioV3PageFrame>
  </PortfolioV3Shell>;
}
