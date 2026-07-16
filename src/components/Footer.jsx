export default function Footer() {
  return (
    <footer className="w-full max-w-5xl px-6 mx-auto mt-auto pb-6 text-center font-mono text-xs text-gray-500">
      <hr className="border-t-4 border-black mb-4 opacity-20" />
      <p>
        Pokemon Explorer • {new Date().getFullYear()}
      </p>
    </footer>
  );
}