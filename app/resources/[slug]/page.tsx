import { notFound } from "next/navigation";
import LearningDetail from "../../../components/LearningDetail";
import { resourcePages } from "../../../lib/learning-content";

export function generateStaticParams() {
  return resourcePages.map(({ slug }) => ({ slug }));
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resourcePages.find((page) => page.slug === slug);

  if (!resource) notFound();

  return (
    <LearningDetail
      title={resource.title}
      eyebrow={`Guide ${resource.number} · ${resource.label}`}
      description={resource.description}
      sections={resource.sections}
      backHref="/resources"
      backLabel="All resources"
    />
  );
}
