export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Suman Adhikari. All Rights Reserved.
      </div>
    </footer>
  );
}