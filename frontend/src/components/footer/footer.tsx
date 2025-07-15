import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-2 border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Satellite AI</h3>
            <p className="text-sm">
              Discover your Type of Area with AI-driven insights. Explore your Area and unlock a deeper understanding of your area.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/detect" className="hover:text-blue-400 transition">
                  Detect
                </Link>
              </li>
              <li>
                <Link href="https://www.kaggle.com/code/amanu1234/sattelite-image-classification" className="hover:text-blue-400 transition">
                  Model Notebook
                </Link>
              </li>
              <li>
                <Link href="https://www.kaggle.com/datasets/mahmoudreda55/satellite-image-classification" className="hover:text-blue-400 transition">
                  Dataset
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-sm">
              Have questions? Reach out at{" "}
              <a href="mailto:
              amanpreetsinghjhiwant7@gmail.com
              " className="hover:text-blue-400 transition">
                amanpreetsinghjhiwant7@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          &copy; {new Date().getFullYear()} Satellite AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}