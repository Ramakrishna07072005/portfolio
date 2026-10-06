import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  FileText
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-carbon-850">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-400">
          <span className="w-8 h-[1px] bg-copper-500"></span>
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Contact &amp; Professional Inquiries
        </h2>
        <p className="text-sm sm:text-base text-carbon-400 max-w-2xl font-mono">
          {siteConfig.contact.availability}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Contact Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card with Copy button */}
          <div className="p-5 rounded-2xl bg-carbon-900/80 border border-carbon-800 hover:border-copper-500/40 transition-colors space-y-3">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-750 text-copper-400">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-carbon-850 hover:bg-carbon-800 text-xs font-mono text-carbon-300 hover:text-white border border-carbon-750 transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-signal-emerald" />
                    <span className="text-signal-emerald">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <div className="text-xs font-mono text-carbon-400">Direct Email</div>
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm sm:text-base font-bold font-mono text-white hover:text-copper-400 transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-carbon-900/80 border border-carbon-800 hover:border-signal-cyan/40 transition-colors space-y-3">
            <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-750 text-signal-cyan w-fit">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-carbon-400">Telephone / Mobile</div>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="text-sm sm:text-base font-bold font-mono text-white hover:text-signal-cyan transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-5 rounded-2xl bg-carbon-900/80 border border-carbon-800 space-y-3">
            <div className="p-2.5 rounded-xl bg-carbon-850 border border-carbon-750 text-signal-emerald w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-carbon-400">Location</div>
              <div className="text-sm sm:text-base font-bold text-white">
                {siteConfig.contact.location}
              </div>
            </div>
          </div>

          {/* LinkedIn & GitHub Links */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-carbon-900/80 border border-carbon-800 hover:border-copper-500/50 hover:bg-carbon-850 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-copper-400" />
                <span className="text-xs font-mono font-semibold text-white">LinkedIn</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-carbon-500 group-hover:text-white" />
            </a>

            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-carbon-900/80 border border-carbon-800 hover:border-copper-500/50 hover:bg-carbon-850 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-copper-400" />
                <span className="text-xs font-mono font-semibold text-white">GitHub</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-carbon-500 group-hover:text-white" />
            </a>
          </div>

        </div>

        {/* Message Composer & Resume Download Action (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Quick Message Composer (mailto action) */}
          <div className="p-6 rounded-2xl bg-carbon-900/80 border border-carbon-800 space-y-4">
            <div className="space-y-1">
              <h3 className="text-base font-mono font-bold text-white">
                Compose Message
              </h3>
              <p className="text-xs text-carbon-400">
                Send an immediate message directly to <span className="font-mono text-copper-400">{siteConfig.contact.email}</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="msg-subject" className="block text-xs font-mono text-carbon-400 mb-1">
                  Subject / Topic
                </label>
                <input
                  id="msg-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Embedded Hardware Opportunity / Project Discussion"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-carbon-950 border border-carbon-750 text-white placeholder-carbon-500 text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-colors font-sans"
                />
              </div>

              <div>
                <label htmlFor="msg-body" className="block text-xs font-mono text-carbon-400 mb-1">
                  Message Details
                </label>
                <textarea
                  id="msg-body"
                  rows={4}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Hello Ramakrishna, I came across your portfolio and wanted to discuss..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-carbon-950 border border-carbon-750 text-white placeholder-carbon-500 text-sm focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-colors font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-copper-500 hover:bg-copper-600 text-carbon-950 font-mono text-xs font-bold shadow-lg shadow-copper-500/20 hover:shadow-copper-500/40 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send via Default Email App</span>
              </button>
            </form>
          </div>

          {/* Quick Resume Download Card */}
          <div className="p-5 rounded-2xl bg-carbon-850/60 border border-carbon-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                <Download className="w-4 h-4 text-copper-400" />
                Download Complete Curriculum Vitae
              </h4>
              <p className="text-xs text-carbon-400">
                Official PDF resume detailing education, hardware projects, certifications, and R&amp;D internship.
              </p>
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto">
              <a
                href={siteConfig.resume.downloadUrl}
                download={siteConfig.resume.filename}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-copper-500 hover:bg-copper-600 text-carbon-950 font-mono text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href={siteConfig.resume.viewHtmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-xl bg-carbon-800 hover:bg-carbon-700 text-carbon-300 hover:text-white border border-carbon-700 transition-colors"
                title="View HTML Resume in Browser"
              >
                <FileText className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
