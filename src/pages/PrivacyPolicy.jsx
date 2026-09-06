import { useNavigate } from "react-router-dom";
import Nav from "@/components/Nav";
import usePageTitle from "@/hooks/usePageTitle";

export default function PrivacyPolicy() {
  usePageTitle("Privacy Policy", "Diamantina's Privacy Policy.");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-onyx">
      <Nav />
      <main className="bg-white text-[#101522] min-h-screen">
        <button
          onClick={() => navigate(-1)}
          aria-label="Close"
          className="fixed top-5 right-5 z-[60] w-10 h-10 rounded-full bg-[#101522] text-white border-none text-base cursor-pointer flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          ✕
        </button>
        <div className="px-6 pt-40 pb-40 max-w-[780px] mx-auto">
          <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-[#101522]/40 mb-2">Legal</p>
          <h1 className="font-ak text-[48px] leading-[1] tracking-[-0.02em] font-bold text-[#101522]">
            Privacy Policy
          </h1>
          <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-[#101522]/45 mt-4">
            Last updated: 26 August 2026
          </p>
          <div className="mt-2 mb-2 text-diamantina text-[18px]">✦</div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">1. Who Is Responsible for Your Data?</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The data controller responsible for the processing described in this Privacy Policy is:"}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">Emilio Miranda Escamilla, operating Diamantina as an individual (not registered as a formal business)</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Trading as: Diamantina"}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Netherlands"}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Email: "}<span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[PRIVACY EMAIL]</span></p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Address: "}<span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[BUSINESS/POSTAL ADDRESS]</span></p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">2. Information We May Collect</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Depending on how you interact with Diamantina, we may process information such as:"}</p>
          <p className="font-ak text-[#101522] text-[15px] font-bold mt-4 mb-2">Information you provide directly</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"This may include:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"your name;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"email address;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"information you send through contact forms;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"newsletter subscription information;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"communications you send to us;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"information voluntarily provided when interacting with Diamantina."}</li>
          </ul>
          <p className="font-ak text-[#101522] text-[15px] font-bold mt-4 mb-2">Website and technical information</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"When you visit our Website, certain technical information may be processed, including:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"IP address;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"browser type;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"device type;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"operating system;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"pages visited;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"approximate interaction times;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"referring website or source;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"interactions with the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"cookie and tracking identifiers, where applicable."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Some of this information is processed only after you have provided the required consent."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">3. How We Use Personal Data</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We may process personal data to:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"operate and maintain the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"provide information about Diamantina and our events;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"respond to questions or communications;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"manage newsletter subscriptions where offered;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"understand how visitors interact with the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"improve our Website, communication and event promotion;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"measure the effectiveness of marketing campaigns;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"promote Diamantina events to relevant audiences;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"protect the Website against misuse or security threats;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"comply with legal obligations."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We do not sell your personal data."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">4. Cookies and Similar Technologies</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Our Website may use cookies and similar technologies."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Some technologies are necessary for the Website to function correctly. Others, particularly analytics and marketing technologies, may collect information about how visitors interact with the Website."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Where required by law, non-essential cookies and tracking technologies will not be activated until you have provided your consent."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"You can accept or reject marketing technologies through the cookie banner and can change or withdraw your preferences later through the cookie settings available on the Website."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">5. Meta Pixel</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"With your consent, Diamantina uses the Meta Pixel, a technology provided by Meta Platforms, to understand the effectiveness of our advertising and help us promote Diamantina events."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The Meta Pixel may allow us and Meta to understand actions taken on the Website after someone interacts with or views an advertisement."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Depending on your interaction and configuration, information processed through the Meta Pixel may include:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"pages or content viewed;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"interactions with the Website;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"referring URLs;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"browser and device information;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"IP address;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"cookie or advertising identifiers;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"events associated with advertising campaigns."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We may use this information for purposes such as:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"measuring advertising performance;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"understanding whether advertisements lead to Website visits or other relevant actions;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"creating advertising audiences;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"retargeting people who have previously interacted with Diamantina;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"improving the relevance and effectiveness of our advertising."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The Meta Pixel will only be activated where the required marketing consent has been provided."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Information processed by Meta is also subject to Meta's own privacy practices and policies."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"You can withdraw your consent at any time through the cookie settings on our Website."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">6. Legal Bases for Processing</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Depending on the activity, we process personal data on one or more of the following legal bases:"}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Consent, for example, where you agree to marketing cookies, the Meta Pixel or optional marketing communications."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Legitimate interests, where processing is reasonably necessary to operate, secure or improve Diamantina and does not override your rights and interests."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Contractual necessity, where processing is required to provide something you have requested or to perform an agreement with you."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Legal obligation, where we are required to process or retain information under applicable law."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Where processing is based on consent, you may withdraw that consent at any time."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">7. Sharing Personal Data</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We may share limited personal data with service providers that help us operate Diamantina, including providers of:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"website hosting;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"website infrastructure;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"email and communication services;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"ticketing services;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"analytics tools;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"advertising and marketing technology."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Where you consent to marketing tracking, information may also be processed by Meta Platforms in connection with the Meta Pixel and related advertising services."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We only share information where necessary for the relevant purpose or where required by law."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">8. International Data Transfers</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Some technology providers used by Diamantina may process information outside the European Economic Area."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Where personal data is transferred internationally, we will rely on appropriate safeguards or other lawful transfer mechanisms required under applicable data protection law."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">9. Data Retention</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We retain personal data only for as long as reasonably necessary for the purpose for which it was collected or as required by law."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Retention periods may differ depending on the type of information and the reason it is processed."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Marketing information based on consent will no longer be used for that purpose after consent is withdrawn, subject to any limited retention necessary to record or respect that withdrawal."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">10. Your Privacy Rights</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Under the GDPR, depending on the circumstances, you may have the right to:"}</p>
          <ul className="my-2.5 pl-5 list-disc">
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"access your personal data;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"correct inaccurate personal data;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"request deletion of your personal data;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"restrict certain processing;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"object to certain processing;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"withdraw consent;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"receive certain personal data in a portable format;"}</li>
            <li className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-1">{"lodge a complaint with a supervisory authority."}</li>
          </ul>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"To exercise your rights, contact us at "}<span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[PRIVACY EMAIL]</span>{"."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We may need to verify your identity before processing certain requests."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">11. Withdrawing Cookie Consent</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"You can change or withdraw your consent to optional cookies and tracking technologies at any time through the Cookie Settings available on the Website."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Rejecting or withdrawing consent to marketing cookies will not prevent you from accessing the Website."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">12. Security</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We take reasonable technical and organisational measures to protect personal data against unauthorised access, loss, alteration, disclosure or misuse."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"However, no internet-based service can guarantee absolute security."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">13. Third-Party Websites</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Our Website may link to external websites, ticketing platforms, social networks, venues or artist pages."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Those services operate under their own privacy policies. Diamantina is not responsible for the privacy practices of independent third-party websites."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">14. Children</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Diamantina's events and Website are not intended to knowingly collect personal data from children for behavioural advertising purposes."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Where an event has a specific age restriction, this will be communicated separately."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">15. Changes to This Privacy Policy</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"We may update this Privacy Policy when our Website, technology providers, activities or legal obligations change."}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"The latest version will always be available on this page."}</p>
        </div>
        <div className="mt-10">
          <p className="font-ak text-[#101522] text-[19px] font-bold mb-3.5 border-l-[3px] border-diamantina pl-3">16. Contact</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"For questions about privacy or the processing of your personal data:"}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Diamantina"}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">Emilio Miranda Escamilla, operating Diamantina as an individual (not registered as a formal business)</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[PRIVACY EMAIL]</span></p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]"><span className="bg-diamantina/10 text-diamantina px-1.5 py-0.5 font-semibold">[POSTAL ADDRESS, IF APPLICABLE]</span></p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"Netherlands"}</p>
          <p className="font-ak text-[#101522]/75 text-[15px] leading-[1.65] mb-2.5 max-w-[680px]">{"You also have the right to lodge a complaint with the competent data protection authority, including the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) where applicable."}</p>
        </div>
        </div>
      </main>
    </div>
  );
}
