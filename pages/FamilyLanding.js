function FamilyLanding() {
    return (
        <div data-name="family-landing" className="min-h-screen">
            <Header />
            <main className="pt-20">
                <section className="hero-section py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Become a Host Family
                        </h1>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Join our community of welcoming Canadian families and make a difference in an international student's life.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10">
                                <h2 className="text-2xl font-bold mb-4">New Host Family?</h2>
                                <p className="text-gray-300 mb-6">
                                    Start your journey as a host family and welcome international students into your home.
                                </p>
                                <a href="/register/family" className="btn-primary block w-full py-3">
                                    Register Now
                                </a>
                            </div>
                            <div className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10">
                                <h2 className="text-2xl font-bold mb-4">Returning Host?</h2>
                                <p className="text-gray-300 mb-6">
                                    Access your dashboard to manage your homestay profile and students.
                                </p>
                                <a href="/login" className="btn-secondary block w-full py-3">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Why Host With Us?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="feature-card p-6">
                                <i className="fas fa-globe text-4xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Cultural Exchange</h3>
                                <p className="text-gray-400">
                                    Share your Canadian culture and learn about different cultures from around the world.
                                </p>
                            </div>
                            <div className="feature-card p-6">
                                <i className="fas fa-hand-holding-heart text-4xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
                                <p className="text-gray-400">
                                    Make a positive impact on a student's life while creating lasting memories.
                                </p>
                            </div>
                            <div className="feature-card p-6">
                                <i className="fas fa-shield-alt text-4xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Full Support</h3>
                                <p className="text-gray-400">
                                    Receive comprehensive support and guidance throughout your hosting journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white bg-opacity-5 py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            How It Works
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-main rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Register</h3>
                                <p className="text-gray-400">
                                    Complete your family profile
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-main rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Verify</h3>
                                <p className="text-gray-400">
                                    Pass our screening process
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-main rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Match</h3>
                                <p className="text-gray-400">
                                    Get matched with students
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-main rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">4</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Host</h3>
                                <p className="text-gray-400">
                                    Welcome students to your home
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
