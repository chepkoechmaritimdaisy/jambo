export default function FAQPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted-dark">
          Find answers to common queries about our tattoo removal process, pricing, and aftercare.
        </p>
      </div>

      <div className="mt-12 flex flex-col">
        <details className="border-b border-border-dark py-4" open>
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <h3 className="text-lg font-medium text-white">How does laser tattoo removal work?</h3>
            <span className="material-symbols-outlined text-text-muted-dark">expand_more</span>
          </summary>
          <p className="mt-2 text-text-muted-dark">
            Our advanced laser technology works by emitting short pulses of high-energy light that are absorbed by the tattoo ink particles. This breaks the ink into smaller fragments, which are then naturally cleared away by the body's immune system over several weeks.
          </p>
        </details>
        <details className="border-b border-border-dark py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <h3 className="text-lg font-medium text-white">Is the tattoo removal process painful?</h3>
            <span className="material-symbols-outlined text-text-muted-dark">expand_more</span>
          </summary>
          <p className="mt-2 text-text-muted-dark">
            Most clients describe the sensation as similar to a rubber band snapping against the skin. We use advanced cooling techniques to minimize discomfort during the procedure. Any discomfort is brief and subsides quickly after the treatment.
          </p>
        </details>
        <details className="border-b border-border-dark py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <h3 className="text-lg font-medium text-white">How many sessions will I need?</h3>
            <span className="material-symbols-outlined text-text-muted-dark">expand_more</span>
          </summary>
          <p className="mt-2 text-text-muted-dark">
            The number of sessions required varies depending on the tattoo's size, color, age, and location, as well as your skin type. On average, clients need between 5 to 10 sessions for complete removal, spaced 6-8 weeks apart.
          </p>
        </details>
      </div>
    </div>
  );
}
