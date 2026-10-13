import { SiteFooter } from "@/components/layouts/SiteFooter";
import { SiteNav } from "@/components/layouts/SiteNav";
import { ApiSection } from "@/features/landing/components/sections/ApiSection";
import { Faq } from "@/features/landing/components/sections/Faq";
import { Features } from "@/features/landing/components/sections/Features";
import { GetStarted } from "@/features/landing/components/sections/GetStarted";
import { Hero } from "@/features/landing/components/sections/Hero";
import { HeroBackdrop } from "@/features/landing/components/sections/HeroBackdrop";
import { HowItWorks } from "@/features/landing/components/sections/HowItWorks";

export default function HomePage() {
  return (
    <>
      <div className="relative isolate pt-3 sm:pt-4">
        <HeroBackdrop />
        <SiteNav />
        <main>
          <Hero />
          <HowItWorks />
          <Features />
          <ApiSection />
          <Faq />
          <GetStarted />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
