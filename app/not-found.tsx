import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-5">
      <div className="text-center font-mono">
        <div className="text-accent text-sm mb-2">$ curl /this-page</div>
        <div className="text-3xl font-semibold text-ink mb-2">404</div>
        <p className="text-ink-dim text-sm mb-6">command not found — page does not exist</p>
        <Link href="/" className="text-accent text-sm hover:underline">
          cd ~/home
        </Link>
      </div>
    </main>
  );
}
