import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-brand-600 text-sm font-semibold tracking-wide uppercase">
        Error 404
      </p>
      <h1 className="text-brand-900 mt-2 text-3xl font-bold">
        We couldn't find that page
      </h1>
      <p className="mt-3 text-slate-600">
        The page may have moved while we redesigned the site. Try the home page
        or contact us and we'll help you find it.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </div>
  );
}
