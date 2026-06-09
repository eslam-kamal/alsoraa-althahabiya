export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-navy py-16 px-4 relative overflow-hidden">
      {/* decorative gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">{title}</h1>
        {subtitle && (
          <p className="text-gray-400 text-base max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
