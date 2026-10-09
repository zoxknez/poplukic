import { Breadcrumbs } from "@/components/PageHero";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div aria-hidden className="absolute inset-0 -z-10 bg-blueprint opacity-60" />
        <div className="mx-auto max-w-4xl px-4 pb-14 pt-28 sm:px-6 md:pb-20 md:pt-36">
          <Breadcrumbs
            items={[
              { label: "Početna", href: "/" },
              { label: title },
            ]}
          />
          <h1 className="mt-8 font-display text-[clamp(3rem,8vw,6.5rem)]">{title}</h1>
        </div>
      </section>
      <section className="bg-paper py-16 md:py-24">
        <div className="legal-prose mx-auto max-w-3xl px-4 sm:px-6">{children}</div>
      </section>
    </>
  );
}
