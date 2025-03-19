"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ChevronRight,
  Droplets,
  Shield,
  Zap,
  BarChart3,
  Phone,
  MapPin,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              style={{ marginRight: -10 }}
              src="/medicalicon.png" // Path to the logo in the public directory
              alt="SteamForce Medical Logo"
              width={30} // Adjust the width as needed
              height={10} // Adjust the height as needed
              className="object-contain"
            />
            <Image
              src="/steamforcemedical.png" // Path to the logo in the public directory
              alt="SteamForce Medical Logo"
              width={250} // Adjust the width as needed
              height={10} // Adjust the height as needed
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium hover:text-primary"
            >
              Benefits
            </Link>
            <Link
              href="#howitworks"
              className="text-sm font-medium hover:text-primary"
            >
              How it works
            </Link>
            {/* <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link> */}
            {/* <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link> */}
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Meny</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-3 px-4 py-4 bg-background border-t">
              <Link
                href="#features"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              {/* <Link
                href="#testimonials"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Referenser
              </Link> */}
              <Link
                href="#howitworks"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </Link>
              {/* <Link
                href="#contact"
                className="text-sm font-medium py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link> */}
              <Button asChild className="mt-2 w-full">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
          <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex flex-col gap-4 md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <Image
                  style={{ marginLeft: -7 }}
                  src="/dissinkefect.png"
                  alt="Dissinkfect Logo"
                  width={300} // Adjusted width to match heading size
                  height={60} // Adjusted height to match heading size
                  className="inline-block align-middle object-contain"
                />
              </h1>
              <p className="text-xl text-muted-foreground">
                An innovative, evidence-based, and clinically validated
                self-disinfecting sink system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button asChild size="lg" className="gap-2">
                  {/* <Link href="#contact">
                    Request a Demo
                    <ChevronRight className="h-4 w-4" />
                  </Link> */}
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <SinkAnimation />
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Healthcare-Associated Infections: A Persistent Problem
              </h2>
              <p className="text-lg text-muted-foreground">
                Healthcare-associated infections (HAIs) remain a persistent
                challenge in healthcare. Since the first Swedish point
                prevalence study conducted in 2003, the HAI rate has hovered
                around 10%. The highest incidence of HAIs occurs in intensive
                care units, at 19.0%.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">10%</h3>
                <p>
                  of patients are affected by healthcare-associated infections
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">SEK 8.4 billion</h3>
                <p>Annual cost of healthcare-associated infections</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">4+ days</h3>
                <p>Extended hospital stay, on average, due to one single HAI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Healthcare-Associated Infections: A Persistent Problem
              </h2>
              <p className="text-lg text-muted-foreground">
                Healthcare-associated infections (HAIs) remain a persistent
                challenge in healthcare. Since the first Swedish point
                prevalence study conducted in 2003, the HAI rate has hovered
                around 10%. The highest incidence of HAIs occurs in intensive
                care units, at 19.0%.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">10%</h3>
                <p>
                  of patients are affected by healthcare-associated infections
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">SEK 8.4 billion</h3>
                <p>Annual cost of healthcare-associated infections</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">4+ days</h3>
                <p>Extended hospital stay, on average, due to one single HAI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Dissinkfect® The Solution
              </h2>
              <p className="text-lg text-muted-foreground">
                Our innovative self-disinfecting sink system eliminates bacteria
                using advanced heat technology, preventing the spread of
                infections in healthcare environments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <Image
                  src="/handfat.jpg"
                  alt="Dissinkfect sink system"
                  width={500}
                  height={400}
                  className="rounded-lg mb-1 w-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Self-Disinfecting Technology
                    </h3>
                    <p className="text-muted-foreground">
                      The sink components are equipped with custom-made heating
                      elements controlled by a circuit board following a
                      proprietary protocol. The heat and steam generated
                      effectively kill bacteria and other microorganisms in the
                      sink and trap.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Clinically Validated
                    </h3>
                    <p className="text-muted-foreground">
                      Since 2019, Dissinkfect® has been installed at the
                      Intensive Care Unit, Linköping University Hospital.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Premium Materials
                    </h3>
                    <p className="text-muted-foreground">
                      The sink is made of electropolished stainless steel. This
                      corrosion-resistant surface is free of oxides, offering
                      multiple sanitary benefits and easy cleaning. The robust
                      50 mm diameter trap in 316L stainless steel is of
                      industrial quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Dissinkfect®?
              </h2>
              <p className="text-lg text-muted-foreground">
                Our system offers significant advantages over traditional sinks
                and other disinfection methods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">
                  Reduced Infection Rates
                </h3>
                <p className="text-muted-foreground mb-4">
                  Clinical studies show significantly lower bacterial presence
                  compared to conventional sinks, reducing the risk of
                  healthcare-associated infections.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span>
                        Bacterial growth was observed in only 20% of cultures
                        with Dissinkfect®, compared to up to 91% in regular
                        sinks.
                      </span>
                      <span className="block text-xs italic mt-1 text-muted-foreground">
                        (Gideskog M, Falkeborn T, Welander J, Melhus Å. Source
                        Control of Gram-Negative Bacteria Using
                        Self-Disinfecting Sinks in a Swedish Burn Centre.
                        Microorganisms. 2023 Apr 7;11(4):965. doi:
                        10.3390/microorganisms11040965.)
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Prior to installation, it was tested in a clinical
                      microbiology laboratory with various reference and patient
                      strains, including MRSA, VRE, and multidrug-resistant P.
                      aeruginosa, E. coli, and K. pneumoniae.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Cost-Effective</h3>
                <p className="text-muted-foreground mb-4">
                  By reducing healthcare-associated infections, Dissinkfect®
                  helps lower hospital costs and patient care duration.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Low operating cost (less than SEK 10/month based on 2024
                      electricity prices)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Reduces costs associated with HAIs (approximately SEK
                      110,000 per case)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Easy Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Available as a complete system or as a trap solution that can
                  be installed on existing sinks.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Simple installation process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Compatible with existing infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="howitworks" className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                How Dissinkfect® Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Our proprietary technology uses heat to eliminate bacteria and
                prevent biofilm formation.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Cycle</h3>
                <p>
                  The disinfection cycle can run automatically once daily
                  without staff intervention or be operated manually.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Heat Generation</h3>
                <p>
                  Custom-made heating elements heat the sink and trap to
                  temperatures that effectively kill bacteria.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Complete Disinfection
                </h3>
                <p>
                  The cycle eliminates bacteria and biofilms, creating a safe
                  environment for patients and staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section
          id="testimonials"
          className="py-16 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                What Healthcare Professionals Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Dissinkfect® is used by leading healthcare institutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">L</span>
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Linköping University Hospital
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Burn Center
                    </p>
                  </div>
                </div>
                <p className="italic">
                  "Nowadays, the most severely burned patients are often placed
                  in room 1, where the self-disinfecting sinks are located, to
                  reduce the risk of infection."
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">U</span>
                  </div>
                  <div>
                    <h3 className="font-bold">
                      Uppsala University Hospital
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Medical Technology Department
                    </p>
                  </div>
                </div>
                <p className="italic">
                  "A risk analysis of Dissinkfect® was conducted at the Medical
                  Technology Department at Uppsala University Hospital. The
                  product is CE-marked."
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Pricing */}
        {/* <section id="pricing" className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Investment in Patient Safety
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the solution that best fits your facility's needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Complete System</h3>
                <p className="text-muted-foreground mb-6">
                  Full Dissinkfect® sink and trap system
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Electropolished stainless steel sink</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Industrial-grade trap system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automated disinfection system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>2-year warranty</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="#contact">Request a Quote</Link>
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Trap-Only Solution</h3>
                <p className="text-muted-foreground mb-6">
                  For installation with existing sinks
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Compatible with standard sinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Industrial-grade trap system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automated disinfection system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>2-year warranty</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="#contact">Request a Quote</Link>
                </Button>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg shadow-md border border-primary">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  Recommended
                </div>
                <h3 className="text-xl font-bold mb-2">Service Package</h3>
                <p className="text-muted-foreground mb-6">
                  Complete system with annual maintenance
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complete Dissinkfect® system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Annual maintenance service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Replacement unit during repairs</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="#contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact */}
        <section id="contact" className="py-16 bg-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-muted-foreground">
                Reach out to learn more about Dissinkfect®.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>Sales and Technology: Navid Tajhizi, +46 73-534 66 69</p>
                    <p>Science: Åsa Melhus, +46 72-391 05 16</p>
                    <p>Contact: Natanael Berntsson, +46 70-795 61 74</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p>SteamForce Medical AB</p>
                    <p>Skjutbanevägen 11</p>
                    <p>703 69 Örebro</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="organization"
                      className="text-sm font-medium"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border rounded-md min-h-[120px]"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  style={{ marginLeft: -23 }}
                  src="/steamforcemedical2.png" // Path to the logo in the public directory
                  alt="SteamForce Medical Logo"
                  width={400} // Adjust the width as needed
                  height={100} // Adjust the height as needed
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                SteamForce Medical AB was founded and is operated by doctors and
                microbiology researchers at Uppsala University. The company
                focuses on infection prevention, aiming to reduce the number of
                infections now and in the future.
              </p>
            </div>
            {/* <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#benefits"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h3 className="font-bold mb-4">Legal Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SteamForce Medical AB. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SinkAnimation() {
  return (
    <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[60%] bg-gray-100 rounded-lg relative">
          {/* Sink basin */}
          <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[60%] h-[80%] bg-gray-300 rounded-b-full"></div>
            </div>

            {/* Water tap */}
            <div className="absolute top-[-20px] left-[50%] transform -translate-x-1/2 w-[10px] h-[30px] bg-gray-400"></div>

            {/* Animated steam effect */}
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center overflow-hidden">
              <div className="steam-animation">
                <div className="steam-particle"></div>
                <div className="steam-particle delay-1"></div>
                <div className="steam-particle delay-2"></div>
                <div className="steam-particle delay-3"></div>
                <div className="steam-particle delay-4"></div>
              </div>
            </div>

            {/* Bacteria icons that disappear */}
            <div className="bacteria-animation">
              <div className="bacteria-particle"></div>
              <div className="bacteria-particle delay-1"></div>
              <div className="bacteria-particle delay-2"></div>
              <div className="bacteria-particle delay-3"></div>
            </div>
          </div>

          {/* Sink drain */}
          <div className="absolute bottom-[-20px] left-[50%] transform -translate-x-1/2 w-[20px] h-[20px] bg-gray-400 rounded-full"></div>

          {/* Control panel */}
          <div className="absolute top-[10%] right-[10%] w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-[15px] h-[15px] bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-4 left-0 w-full text-center">
        <p className="text-sm font-medium">
          Self-disinfecting technology eliminates bacteria
        </p>
      </div>

      <style jsx>{`
        .steam-animation {
          position: relative;
          width: 100%;
          height: 100px;
        }

        .steam-particle {
          position: absolute;
          bottom: 0;
          left: calc(50% - 10px);
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: steam 3s infinite ease-out;
        }

        .delay-1 {
          animation-delay: 0.5s;
          left: calc(50% - 5px);
        }

        .delay-2 {
          animation-delay: 1s;
          left: calc(50% + 5px);
        }

        .delay-3 {
          animation-delay: 1.5s;
          left: calc(50% - 15px);
        }

        .delay-4 {
          animation-delay: 2s;
          left: calc(50% + 15px);
        }

        @keyframes steam {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-80px) scale(2);
            opacity: 0;
          }
        }

        .bacteria-animation {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .bacteria-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #5cdb95;
          border-radius: 50%;
          animation: bacteria 4s infinite;
        }

        .bacteria-particle:nth-child(1) {
          top: 30%;
          left: 30%;
        }

        .bacteria-particle:nth-child(2) {
          top: 50%;
          left: 20%;
          animation-delay: 1s;
        }

        .bacteria-particle:nth-child(3) {
          top: 40%;
          left: 70%;
          animation-delay: 2s;
        }

        .bacteria-particle:nth-child(4) {
          top: 70%;
          left: 60%;
          animation-delay: 3s;
        }

        @keyframes bacteria {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
