import { Suspense } from "react";
import { notFound } from "next/navigation";
import LearningDetail from "../../../components/LearningDetail";
import SpeakingGuide from "../../../components/SpeakingGuide";
import { resourcePages } from "../../../lib/learning-content";

export function generateStaticParams() {
  return resourcePages.map(({ slug }) => ({ slug }));
}

export default function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="content-page">
          <section className="page-hero container">
            <p role="status">Loading resource...</p>
          </section>
        </div>
      }
    >
      <ResourceDetail params={params} />
    </Suspense>
  );
}

async function ResourceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = resourcePages.find((page) => page.slug === slug);

  if (!resource) notFound();

  if (resource.slug === "speaking-guide") {
    return <SpeakingGuide />;
  }

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
