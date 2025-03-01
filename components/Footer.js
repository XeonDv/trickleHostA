function Footer() {
    return (
        <footer data-name="footer" className="bg-secondary-main border-t border-divider">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div data-name="footer-about">
                        <h3 className="text-xl font-bold mb-4">HostAbroad.ca</h3>
                        <p className="text-gray-400">
                            Connecting international students with welcoming Canadian host families.
                        </p>
                    </div>
                    <div data-name="footer-links">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/register/family" className="text-gray-400 hover:text-white">Host Family Registration</a></li>
                            <li><a href="/register/student" className="text-gray-400 hover:text-white">Student Registration</a></li>
                            <li><a href="/login" className="text-gray-400 hover:text-white">Login</a></li>
                        </ul>
                    </div>
                    <div data-name="footer-contact">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="text-gray-400 space-y-2">
                            <p><i className="fas fa-envelope mr-2"></i> info@hostabroad.ca</p>
                            <p><i className="fas fa-phone mr-2"></i> +1 (XXX) XXX-XXXX</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-divider text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} HostAbroad.ca. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
