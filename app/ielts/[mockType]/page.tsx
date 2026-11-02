import { notFound } from "next/navigation";
import LearningDetail from "../../../components/LearningDetail";
import { mockPages } from "../../../lib/learning-content";

export function generateStaticParams() {
  return mockPages.map(({ slug }) => ({ mockType: slug }));
}

export default async function MockDetailPage({
  params,
}: {
  params: Promise<{ mockType: string }>;
}) {
  const { mockType } = await params;
  const mock = mockPages.find((page) => page.slug === mockType);

  if (!mock) notFound();

  return (
    <LearningDetail
      title={mock.title}
      eyebrow={`IELTS Mock · ${mock.label}`}
      description={mock.description}
      sections={mock.sections}
      backHref="/ielts"
      backLabel="IELTS Mock"
      variant="ielts"
    />
  );
}
