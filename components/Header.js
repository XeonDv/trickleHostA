function Header() {
    return (
        <header data-name="header" className="fixed w-full top-0 z-50 bg-opacity-90 bg-secondary-main backdrop-blur-sm border-b border-divider">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <a href="/" data-name="logo" className="text-2xl font-bold text-white">
                        HostAbroad.ca
                    </a>
                    <div data-name="nav-buttons" className="space-x-4">
                        <a href="/login" className="btn-secondary">
                            Login
                        </a>
                        <a href="/register/student" className="btn-primary">
                            Get Started
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
