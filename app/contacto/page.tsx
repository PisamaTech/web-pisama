import ContactFaqSection from "@/components/contacto/ContactFaqSection";
import ContactHeaderSection from "@/components/contacto/ContactHeaderSection";
import ContactInfoSection from "@/components/contacto/ContactInfoSection";

export default function ContactoPage(): JSX.Element {
  return (
    <>
      <ContactHeaderSection />
      <ContactFaqSection />
      <ContactInfoSection />
    </>
  );
}
