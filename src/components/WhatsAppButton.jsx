import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=96407822000028"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  )
}
