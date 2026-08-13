"use client";

export default function WhatsAppButton() {
  const phoneNumber = "2348039100957";

  const message =
    "Hello Jamestuns Trading Venture, I would like to enquire about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Jamestuns on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-[#20BA5A]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path d="M20.52 3.48A11.79 11.79 0 0012.05 0C5.43 0 .04 5.39.04 12.01c0 2.12.55 4.19 1.6 6.02L0 24l6.15-1.61a11.93 11.93 0 005.9 1.51h.01c6.62 0 12.01-5.39 12.01-12.01 0-3.2-1.25-6.21-3.55-8.41zM12.05 21.9a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.65.96.98-3.56-.23-.37A9.88 9.88 0 012.05 12C2.05 6.5 6.54 2.01 12.05 2.01a9.9 9.9 0 019.94 9.94 9.9 9.9 0 01-9.94 9.95zm5.43-7.46c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53 0 1.49 1.09 2.93 1.24 3.13.15.2 2.15 3.28 5.21 4.59.73.32 1.3.51 1.75.65.73.23 1.4.2 1.93.12.59-.09 1.79-.73 2.04-1.44.25-.71.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35z" />
      </svg>
    </a>
  );
}