import React, { ReactNode, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Code,
  Database,
  MessageSquare,
  Server,
  Zap,
  X,
} from "lucide-react";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Request a Demo</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">QueryLingo</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="relative bg-purple-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Query Databases with
                    </span>{" "}
                    <span className="block text-purple-300 xl:inline">
                      Human Language
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Transform English queries into SQL and MongoDB commands
                    effortlessly. Simplify your database interactions with
                    AI-powered Human Language processing.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <svg
              className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full"
              viewBox="0 0 528 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="528" height="560" fill="#3B0764" />
              <text
                x="50%"
                y="15%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#3B82F6"
                fontSize="48"
                fontWeight="bold"
              >
                QueryLingo
              </text>
              <text
                x="30%"
                y="30%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="24"
              >
                Human Language Question
              </text>
              <text
                x="70%"
                y="30%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="24"
              >
                Query
              </text>
              <path d="M264 168 L396 168" stroke="white" strokeWidth="2" />
              <path
                d="M396 168 L386 158 M396 168 L386 178"
                stroke="white"
                strokeWidth="2"
              />
              <text
                x="50%"
                y="45%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="72"
                fontWeight="bold"
              >
                Mind
              </text>
              <rect
                x="44"
                y="280"
                width="440"
                height="2"
                fill="black"
                fillOpacity="0.1"
              />
              <rect
                x="44"
                y="320"
                width="440"
                height="2"
                fill="black"
                fillOpacity="0.1"
              />
              <rect
                x="44"
                y="360"
                width="440"
                height="2"
                fill="black"
                fillOpacity="0.1"
              />
              <rect
                x="44"
                y="400"
                width="440"
                height="2"
                fill="white"
                fillOpacity="0.1"
              />
              <rect
                x="44"
                y="440"
                width="440"
                height="2"
                fill="black"
                fillOpacity="0.1"
              />
              <text
                x="50%"
                y="90%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="24"
              >
                Enterprise Data
              </text>
              <text
                x="50%"
                y="95%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="16"
                opacity="0.7"
              >
                MySQL • PostgreSQL • MongoDB • MariaDB • SQLite
              </text>
            </svg>
          </div>
          {/* comment under page */}
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
                Features
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to query your databases
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                QueryLingo brings the power of Human Language processing to your
                database interactions.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <Database className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Multiple Databases
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Support for SQL and MongoDB databases, all through a single
                    interface.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <MessageSquare className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Human Language Queries
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Ask questions in plain English and get accurate database
                    queries in return.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <Zap className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      Lightning Fast
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Get instant results with our optimized query translation
                    engine.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        {/* Banner Section */}
        <section className="bg-blue-800 rounded-lg p-8 mb-16">
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-4">
                See QueryMaster in Action
              </h2>
              <div className="bg-gray-900 p-4 rounded">
                <p className="text-green-400 mb-2">
                  // Example: Convert English to SQL
                </p>
                <p className="text-white">
                  Input: "Show me the top 5 customers by total purchase amount"
                </p>
                <p className="text-blue-300 mt-2">
                  Output: SELECT customers.name, SUM(orders.total_amount) as
                  total_purchases
                  <br />
                  FROM customers
                  <br />
                  JOIN orders ON customers.id = orders.customer_id
                  <br />
                  GROUP BY customers.id
                  <br />
                  ORDER BY total_purchases DESC
                  <br />
                  LIMIT 5;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-100">
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                  How It Works
                </h2>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <Database
                      size={48}
                      className="mx-auto mb-4 text-blue-600"
                    />
                    <p>Connect Database</p>
                  </div>
                  <ArrowRight size={24} className="text-gray-400" />
                  <div className="text-center">
                    <Code size={48} className="mx-auto mb-4 text-blue-600" />
                    <p>Write in English</p>
                  </div>
                  <ArrowRight size={24} className="text-gray-400" />
                  <div className="text-center">
                    <Server size={48} className="mx-auto mb-4 text-blue-600" />
                    <p>Get SQL/MongoDB Query</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request Demo Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Revolutionize Your Database Queries?
            </h2>
            <button
              onClick={openModal}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300"
            >
              Request a Demo
            </button>
          </div>
        </section>
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </Modal>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 QueryLingo. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
