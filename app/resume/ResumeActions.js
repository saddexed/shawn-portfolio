'use client';

export default function ResumeActions({ pdfHref }) {
  const downloadWebResume = () => {
    window.print();
  };

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={pdfHref}
        download
        className="rounded-full border border-secondary px-4 py-2 text-sm no-underline"
      >
        Download PDF Resume
      </a>
      <button
        type="button"
        onClick={downloadWebResume}
        className="text-primary cursor-pointer rounded-full border border-secondary bg-transparent px-4 py-2 text-sm transition-opacity hover:opacity-80"
      >
        Download Web Resume
      </button>
    </div>
  );
}
