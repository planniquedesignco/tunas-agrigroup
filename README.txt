TUNAS AGRI GROUP — CLEAN WEBSITE PACKAGE

Home: index.html
Services: services/index.html
Contact: contact/index.html

Assets: assets/images/01.webp through 11.webp, plus the supplied TUNAS logo.

The latest client ZIP contained 11 images. All 11 are used in the home scroll sequence.
Home intentionally has no additional sections or footer.
Services uses a clean editorial layout without framed chips/cards.
Contact shows WhatsApp, Facebook, Instagram and LinkedIn with genuine vector icons, but the links are not activated until official account URLs are supplied.
Contact form opens a pre-filled email draft, but no recipient is configured.

Upload the contents of this folder (not the folder itself) to the repository root. All paths are relative and work on GitHub Pages and Cloudflare Pages.


WHATSAPP CONTACT CONFIGURATION
Edit assets/site.js at the very first line:
window.TUNAS_WHATSAPP_NUMBER = "60123456789";
Use the actual company number in international format, digits only.
Until configured, the WhatsApp form opens the WhatsApp share/contact-selection flow; it does NOT send directly to the company.
Facebook, Instagram and LinkedIn are hidden until their real URLs are available.
