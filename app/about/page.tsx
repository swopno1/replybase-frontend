import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              About ReplyBase
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-400">
              Our mission is to empower businesses with intelligent and intuitive chatbot solutions.
            </p>
          </header>

          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-400">
              <p>
                Founded in 2023, ReplyBase was born out of a passion for artificial intelligence and a desire to simplify customer interactions. We saw a need for a powerful, yet easy-to-use chatbot builder that could be adopted by businesses of all sizes.
              </p>
              <p>
                Our team is made up of experienced developers, designers, and AI enthusiasts who are dedicated to creating the best possible chatbot platform. We believe in the power of open-source and are committed to building a strong community around our product.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
