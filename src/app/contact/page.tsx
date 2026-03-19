import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Book a Free Tutoring Session | Compassionate Test Prep Brooklyn NY',
    description:
        'Book your free 30-minute intro session with Josh at Compassionate Test Prep in Brooklyn, NY. No commitment. SAT, ACT, GMAT, Regents, math, and more.',
    alternates: { canonical: 'https://www.compassionatetestprep.com/contact' },
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <section className="bg-primary text-white py-20 px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">Contact for a Free Intro Session</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            No commitment, no pressure. Contact us for a free 30-minute session to meet Josh, discuss your goals, and see if it&apos;s a great fit.
                        </p>
                    </div>
                </section>

                <section className="py-20 px-4 sm:px-6 bg-bg">
                    <div className="max-w-2xl mx-auto">
                        {/* Contact Info + Form */}
                        <div>
                            <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">Send a Message</h2>
                            <form className="space-y-4" id="contact-form" action="#" method="POST">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-textMain mb-1">First Name</label>
                                        <input id="first-name" name="first_name" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-textMain mb-1">Last Name</label>
                                        <input id="last-name" name="last_name" type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Smith" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-textMain mb-1">Email Address</label>
                                    <input id="email" name="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="test-type" className="block text-sm font-medium text-textMain mb-1">What are you preparing for?</label>
                                    <select id="test-type" name="test_type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
                                        <option value="">Select a subject...</option>
                                        <option>SAT Prep</option>
                                        <option>ACT Prep</option>
                                        <option>GMAT Prep</option>
                                        <option>Regents Review</option>
                                        <option>AP English</option>
                                        <option>Math Tutoring</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-textMain mb-1">Tell us about your goals</label>
                                    <textarea id="message" name="message" rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="e.g. My daughter needs to raise her SAT score from 1100 to 1350 by March..." />
                                </div>
                                <button type="submit" id="contact-submit" className="btn-primary w-full justify-center text-base py-4">
                                    Send Message
                                </button>
                            </form>

                            {/* Contact Info */}
                            <div className="mt-8 pt-8 border-t border-gray-100 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-muted">
                                    <span className="text-primary text-lg">📍</span>
                                    <span>Brooklyn, NY (in-person &amp; online)</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted">
                                    <span className="text-primary text-lg">🕐</span>
                                    <span>Mon–Sat: 9:00 AM – 8:00 PM EST</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted">
                                    <span className="text-primary text-lg">🌐</span>
                                    <span>Google Business Profile: <a href="https://g.page/compassionate-test-prep" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline" id="gbp-link">View on Google Maps</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
