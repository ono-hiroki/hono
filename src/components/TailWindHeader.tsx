
export const TailWindHeader = () => {
    return (
            <nav className="w-full">
                <div className="flex justify-between max-w-5xl mx-auto items-center">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>
                        <h2 className="text-xl font-bold">タイトル</h2>
                    </div>
                    <div className="">
                        {/*// <!-- Mobile menu button -->*/}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/*// <!-- Mobile Menu open: "block", Menu closed: "hidden" -->*/}
                        <div className="hidden -mx-4 lg:flex lg:items-center">
                            <a
                                href="#"
                                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                            >Web developers</a
                            >
                            <a
                                href="#"
                                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                            >Web Designers</a
                            >
                            <a
                                href="#"
                                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                            >UI/UX Designers</a
                            >
                            <a
                                href="#"
                                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
                            >Contact</a
                            >
                        </div>
                    </div>
                </div>
            </nav>
    )
}
