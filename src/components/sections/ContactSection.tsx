import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, GraduationCap, ArrowRight } from 'lucide-react';
import { PROFILE } from '../../data';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [subject, setSubject] = useState('Research Collaboration Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitting(true);

    try {
      // Send live email notification to abynayarangrajan@gmail.com & abinaya@agh.edu.pl
      await fetch("https://formsubmit.co/ajax/abynayarangrajan@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          institution: institution || 'Not Specified',
          subject: `[Academic Inquiry] ${subject}`,
          message,
          _cc: "abinaya@agh.edu.pl",
          _subject: `New Portfolio Inquiry: ${subject} from ${name}`,
          _template: "table"
        })
      });
    } catch (err) {
      console.warn("API mail dispatch fallback to mailto:", err);
      const mailSubject = encodeURIComponent(`[Academic Portfolio] ${subject} - from ${name}`);
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nInstitution: ${institution || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${PROFILE.email}?subject=${mailSubject}&body=${mailBody}`;
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14" id="contact-section">
      {/* Contact Details Side */}
      <div className="lg:col-span-2 space-y-8">
        <div className="space-y-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6] block">
            get in touch
          </span>
          <h3 className="text-2xl font-extrabold text-[#0F172A]">
            Scholarly Correspondence
          </h3>
          <p className="text-sm text-[#475569] leading-relaxed">
            Please feel free to reach out for research collaboration proposals, peer review requests, 
            or questions regarding 2D TMDCs and thermoelectrics.
          </p>
        </div>

        <div className="space-y-5">
          {/* Address */}
          <div className="flex gap-4">
            <div className="p-3 bg-[#3B82F6]/10 rounded-xl text-[#1E3A8A] shrink-0 self-start">
              <MapPin size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3B82F6] block mb-1">
                Primary Laboratory Address
              </span>
              <p className="text-xs md:text-sm text-[#334155] font-semibold leading-relaxed">
                {PROFILE.address}
              </p>
            </div>
          </div>

          {/* Emails */}
          <div className="flex gap-4">
            <div className="p-3 bg-[#3B82F6]/10 rounded-xl text-[#1E3A8A] shrink-0 self-start">
              <Mail size={18} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3B82F6] block">
                Official & Personal Emails
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="block text-xs md:text-sm text-[#0F172A] hover:text-[#3B82F6] transition-colors font-semibold"
                id="contact-email-1"
              >
                {PROFILE.email}
              </a>
              {PROFILE.email2 && (
                <a
                  href={`mailto:${PROFILE.email2}`}
                  className="block text-xs md:text-sm text-[#0F172A] hover:text-[#3B82F6] transition-colors font-semibold"
                  id="contact-email-2"
                >
                  {PROFILE.email2}
                </a>
              )}
            </div>
          </div>

          {/* Phone Numbers */}
          {PROFILE.phone && (
            <div className="flex gap-4">
              <div className="p-3 bg-[#3B82F6]/10 rounded-xl text-[#1E3A8A] shrink-0 self-start">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3B82F6] block mb-1">
                  Contact Telephones
                </span>
                <p className="text-xs md:text-sm text-[#334155] font-mono font-bold">
                  {PROFILE.phone}
                </p>
              </div>
            </div>
          )}

          {/* Google Scholar Link */}
          {PROFILE.scholar && (
            <div className="flex gap-4">
              <div className="p-3 bg-[#3B82F6]/10 rounded-xl text-[#1E3A8A] shrink-0 self-start">
                <GraduationCap size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#3B82F6] block mb-1">
                  Research Profiles
                </span>
                <a
                  href={PROFILE.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-[#0F172A] hover:text-[#3B82F6] transition-colors font-bold underline decoration-[#3B82F6]/30 decoration-2 underline-offset-4 flex items-center gap-1"
                  id="contact-scholar-link"
                >
                  <span>Google Scholar Profile</span>
                  <ArrowRight size={14} />
                </a>
                {PROFILE.orcid && (
                  <a
                    href={PROFILE.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-[#0F172A] hover:text-[#3B82F6] transition-colors font-bold underline decoration-[#3B82F6]/30 decoration-2 underline-offset-4 flex items-center gap-1 mt-1"
                    id="contact-orcid-link"
                  >
                    <span>ORCID (0000-0002-5199-109X)</span>
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inquiry Form Side */}
      <div className="lg:col-span-3 bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-[#3B82F6]/20 shadow-2xs hover:border-[#EF4444]/40 transition-colors relative">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
              id="academic-contact-form"
            >
              <h4 className="text-base md:text-lg font-bold text-[#0F172A] pb-2 border-b border-[#3B82F6]/10 mb-2">
                Send Academic Inquiry
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase text-[#3B82F6]" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Prof. / Dr. / Scholar Name"
                    className="w-full bg-blue-50/50 text-[#0F172A] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#3B82F6]/15 focus:outline-none focus:border-[#3B82F6] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase text-[#3B82F6]" htmlFor="contact-email-input">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@institution.edu"
                    className="w-full bg-blue-50/50 text-[#0F172A] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#3B82F6]/15 focus:outline-none focus:border-[#3B82F6] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase text-[#3B82F6]" htmlFor="contact-institution">
                  Affiliated Institution / Organization
                </label>
                <input
                  type="text"
                  id="contact-institution"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="University, Lab, or Company"
                  className="w-full bg-blue-50/50 text-[#0F172A] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#3B82F6]/15 focus:outline-none focus:border-[#3B82F6] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase text-[#3B82F6]" htmlFor="contact-subject">
                  Inquiry Category
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-blue-50/50 text-[#0F172A] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#3B82F6]/15 focus:outline-none focus:border-[#3B82F6] transition-all font-medium"
                >
                  <option value="Research Collaboration Inquiry">Research Collaboration Proposal</option>
                  <option value="Review / Editorial Request">Peer Review / Editorial Invitation</option>
                  <option value="Student Mentorship / Supervision">Ph.D. / Mentorship Program Request</option>
                  <option value="Conference / Seminar invitation">Conference Keynote / Seminar Speaker</option>
                  <option value="General Academic Question">General Academic Query</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase text-[#3B82F6]" htmlFor="contact-message">
                  Correspondence Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Introduce your research goals or inquiry detail here..."
                  className="w-full bg-blue-50/50 text-[#0F172A] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#3B82F6]/15 focus:outline-none focus:border-[#3B82F6] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1E3A8A] hover:bg-gradient-to-r hover:from-[#1E3A8A] hover:via-[#3B82F6] hover:to-[#EF4444] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Scholarly Message</span>
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-4 text-center space-y-6 flex flex-col items-center justify-center h-full"
              id="contact-success-panel"
            >
              <div className="p-4 bg-blue-50 text-[#1E3A8A] rounded-full animate-pulse border border-[#3B82F6]/20">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#0F172A]">
                  Correspondence Initiated!
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Your scholarly query regarding 
                  <strong> {subject}</strong> has been simulation-delivered to Dr. Abinaya Rengarajan.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setEmail('');
                  setInstitution('');
                  setMessage('');
                }}
                className="text-xs font-bold text-[#1E3A8A] hover:text-[#EF4444] uppercase tracking-widest border-b border-[#1E3A8A] pb-1 transition-all cursor-pointer"
                id="contact-reset-btn"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
