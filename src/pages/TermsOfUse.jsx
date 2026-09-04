import { useNavigate } from "react-router-dom";
import Nav from "@/components/Nav";

export default function TermsOfUse() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-onyx">
      <Nav />
      <main className="bg-white text-paper-white min-h-screen">
        <button
          onClick={() => navigate(-1)}
          aria-label="Close"
          className="fixed top-5 right-5 z-[60] w-10 h-10 rounded-full bg-paper-white text-white border-none text-base cursor-pointer flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          ✕
        </button>
        <div className="px-6 pt-40 pb-40 max-w-[780px] mx-auto">
          <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/40 mb-2">Legal</p>
          <h1 className="font-ak text-[48px] leading-[1] tracking-[-0.02em] font-bold text-paper-white">
            Terms of Use
          </h1>
          <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/45 mt-4">
            Last updated: 26 August 2026
          </p>
          <div className="mt-2 mb-2 text-diamantina text-[18px]">✦</div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">1. About Diamantina</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Diamantina is a queer-centered party series, cultural platform and community born in the Netherlands, connecting audiences with underground, experimental and emerging sounds and artists."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The Website provides information about Diamantina, upcoming events, artists, projects and related activities."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">2. Website Use</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"You may use this Website for personal and lawful purposes."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"You agree not to:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-1">{"use the Website for unlawful or fraudulent purposes;"}</li>
            <li className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-1">{"interfere with the operation or security of the Website;"}</li>
            <li className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-1">{"attempt to gain unauthorized access to the Website or its systems;"}</li>
            <li className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-1">{"copy or exploit Website content for commercial purposes without permission;"}</li>
            <li className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-1">{"impersonate Diamantina or falsely suggest an affiliation with us;"}</li>
            <li className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-1">{"use automated systems to scrape or collect information from the Website in a manner that disrupts its operation."}</li>
          </ul>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We reserve the right to restrict access where necessary to protect the Website, our organisation or our users."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">3. Events</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Information about events, including dates, times, venues, lineups and programming, may occasionally change."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Artists, schedules, locations or other elements of an event may be modified where reasonably necessary."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Where tickets are sold through a third-party ticketing provider, additional terms and conditions from that provider may apply to the purchase."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Ticket refund, cancellation and transfer conditions will be communicated during the ticket purchasing process or through the applicable ticketing provider."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">4. Event Admission</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Possession of a valid ticket does not remove the obligation to comply with venue rules, applicable law and Diamantina's Party Rules."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Diamantina aims to create a respectful and welcoming environment."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Harassment, discrimination, violence, intimidation, unwanted sexual behaviour or behaviour that compromises the safety or wellbeing of others may result in removal from an event."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Where appropriate, admission may also be refused in accordance with applicable law, venue policies and ticket conditions."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">5. Intellectual Property</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Unless otherwise indicated, the Diamantina name, visual identity, graphics, artwork, photography, videos, written material and other original content appearing on the Website are owned by or licensed to Diamantina."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"These materials may not be reproduced, distributed, modified, commercially exploited or presented as your own without prior permission."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Sharing links to our Website or sharing our publicly available promotional material for personal, editorial or non-commercial purposes is welcome."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">6. Artists and Third-Party Content</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Certain photographs, artwork, music, artist biographies, logos or other materials may belong to participating artists, photographers, designers, venues or other third parties."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Ownership of such material remains with the respective rights holders."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">7. External Websites</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The Website may contain links to ticketing platforms, artist pages, social networks, venues or other third-party services."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Diamantina does not control these external websites and is not responsible for their content, availability, privacy practices or terms."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"When you leave our Website, the policies of the relevant third party may apply."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">8. Availability of the Website</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We aim to keep the Website accessible and accurate, but we cannot guarantee uninterrupted availability."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We may update, modify, suspend or remove parts of the Website when reasonably necessary."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">9. Liability</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"To the extent permitted by applicable law, Diamantina is not liable for indirect or consequential losses resulting solely from the use or temporary unavailability of this Website."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Nothing in these Terms excludes or limits liability where doing so would be prohibited under applicable Dutch or European law."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">10. Privacy and Cookies</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Your use of the Website is also subject to our Privacy Policy."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The Website may use cookies and similar technologies. Non-essential marketing and tracking technologies are used only in accordance with applicable consent requirements."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"You can manage your preferences through the cookie controls available on the Website."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">11. Changes to These Terms</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We may update these Terms from time to time, for example when our services, Website or legal obligations change."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The most recent version will always be published on this page together with its effective date."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">12. Governing Law</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"These Terms are governed by the laws of the Netherlands."}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Any mandatory rights available to consumers under Dutch or European Union law remain unaffected."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-paper-white text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">13. Contact</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Questions about these Terms can be sent to:"}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Diamantina"}</p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[YOUR FULL NAME], operating as Diamantina (sole trader/individual, unless you register a company)</span></p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[EMAIL ADDRESS]</span></p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[POSTAL ADDRESS, IF APPLICABLE]</span></p>
          <p className="font-ak text-paper-white/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Netherlands"}</p>
        </div>
        </div>
      </main>
    </div>
  );
}
