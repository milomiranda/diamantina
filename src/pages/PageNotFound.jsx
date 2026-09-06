import { Link } from "react-router-dom";
import usePageTitle from "@/hooks/usePageTitle";

export default function PageNotFound() {
  usePageTitle("Page not found", "This page doesn't exist on Diamantina's website.");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-onyx text-paper-white px-6 text-center">
      <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-6">
        404
      </p>
      <h1 className="font-gs text-[48px] md:text-[64px] leading-[0.9] tracking-[-0.02em] mb-6">
        This page doesn't exist.
      </h1>
      <p className="font-ak text-[16px] leading-[1.5] text-ink-70 max-w-md mb-10">
        The page you're looking for isn't here. Let's get you back.
      </p>
      <Link
        to="/"
        className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-onyx bg-paper-white px-6 py-3 hover:opacity-80 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
