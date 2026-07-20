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
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5d735a] block">
            get in touch
          </span>
          <h3 className="text-2xl font-extrabold text-[#2d3a28]">
            Scholarly Correspondence
          </h3>
          <p className="text-sm text-[#5d735a] leading-relaxed">
            Please feel free to reach out for research collaboration proposals, peer review requests, 
            or questions regarding 2D TMDCs and thermoelectrics.
          </p>
        </div>

        <div className="space-y-5">
          {/* Address */}
          <div className="flex gap-4">
            <div className="p-3 bg-[#5d735a]/10 rounded-xl text-[#2d3a28] shrink-0 self-start">
              <MapPin size={18} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#5d735a]/60 block mb-1">
                Primary Laboratory Address
              </span>
              <p className="text-xs md:text-sm text-[#36453b] font-semibold leading-relaxed">
                {PROFILE.address}
              </p>
            </div>
          </div>

          {/* Emails */}
          <div className="flex gap-4">
            <div className="p-3 bg-[#5d735a]/10 rounded-xl text-[#2d3a28] shrink-0 self-start">
              <Mail size={18} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#5d735a]/60 block">
                Official & Personal Emails
              </span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="block text-xs md:text-sm text-[#2d3a28] hover:text-[#5d735a] transition-colors font-semibold"
                id="contact-email-1"
              >
                {PROFILE.email}
              </a>
              {PROFILE.email2 && (
                <a
                  href={`mailto:${PROFILE.email2}`}
                  className="block text-xs md:text-sm text-[#2d3a28] hover:text-[#5d735a] transition-colors font-semibold"
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
              <div className="p-3 bg-[#5d735a]/10 rounded-xl text-[#2d3a28] shrink-0 self-start">
                <Phone size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#5d735a]/60 block mb-1">
                  Contact Telephones
                </span>
                <p className="text-xs md:text-sm text-[#36453b] font-mono font-bold">
                  {PROFILE.phone}
                </p>
              </div>
            </div>
          )}

          {/* Google Scholar Link */}
          {PROFILE.scholar && (
            <div className="flex gap-4">
              <div className="p-3 bg-[#5d735a]/10 rounded-xl text-[#2d3a28] shrink-0 self-start">
                <GraduationCap size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#5d735a]/60 block mb-1">
                  Research Profiles
                </span>
                <a
                  href={PROFILE.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-[#2d3a28] hover:text-[#5d735a] transition-colors font-bold underline decoration-[#5d735a]/30 decoration-2 underline-offset-4 flex items-center gap-1"
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
                    className="text-xs md:text-sm text-[#2d3a28] hover:text-[#5d735a] transition-colors font-bold underline decoration-[#5d735a]/30 decoration-2 underline-offset-4 flex items-center gap-1 mt-1"
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
      <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl border border-[#819280]/20 shadow-sm relative">
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
              <h4 className="text-base md:text-lg font-bold text-[#2d3a28] pb-2 border-b border-[#819280]/10 mb-2">
                Send Academic Inquiry
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase text-[#5d735a]" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Prof. / Dr. / Scholar Name"
                    className="w-full bg-[#5d735a]/5 text-[#2d3a28] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#819280]/15 focus:outline-none focus:border-[#5d735a] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase text-[#5d735a]" htmlFor="contact-email-input">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@institution.edu"
                    className="w-full bg-[#5d735a]/5 text-[#2d3a28] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#819280]/15 focus:outline-none focus:border-[#5d735a] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase text-[#5d735a]" htmlFor="contact-institution">
                  Affiliated Institution / Organization
                </label>
                <input
                  type="text"
                  id="contact-institution"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="University, Lab, or Company"
                  className="w-full bg-[#5d735a]/5 text-[#2d3a28] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#819280]/15 focus:outline-none focus:border-[#5d735a] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase text-[#5d735a]" htmlFor="contact-subject">
                  Inquiry Category
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#5d735a]/5 text-[#2d3a28] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#819280]/15 focus:outline-none focus:border-[#5d735a] transition-all font-medium"
                >
                  <option value="Research Collaboration Inquiry">Research Collaboration Proposal</option>
                  <option value="Review / Editorial Request">Peer Review / Editorial Invitation</option>
                  <option value="Student Mentorship / Supervision">Ph.D. / Mentorship Program Request</option>
                  <option value="Conference / Seminar invitation">Conference Keynote / Seminar Speaker</option>
                  <option value="General Academic Question">General Academic Query</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono font-bold uppercase text-[#5d735a]" htmlFor="contact-message">
                  Correspondence Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Introduce your research goals or inquiry detail here..."
                  className="w-full bg-[#5d735a]/5 text-[#2d3a28] text-xs md:text-sm px-4 py-2.5 rounded-lg border border-[#819280]/15 focus:outline-none focus:border-[#5d735a] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2d3a28] hover:bg-[#5d735a] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
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
              <div className="p-4 bg-[#5d735a]/10 text-[#2d3a28] rounded-full animate-pulse">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#2d3a28]">
                  Correspondence Initiated!
                </h4>
                <p className="text-sm text-[#5d735a] leading-relaxed max-w-sm mx-auto">
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
                className="text-xs font-bold text-[#2d3a28] hover:text-[#5d735a] uppercase tracking-widest border-b border-[#2d3a28] pb-1 transition-all"
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
