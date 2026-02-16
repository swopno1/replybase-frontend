import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import ContactForm from './ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact',
  },
  title: 'Contact Us - ReplyBase',
  description: 'Have a question or want to work with us? Contact the ReplyBase team today.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
