function StudentLanding() {
    return (
        <div data-name="student-landing" className="min-h-screen">
            <Header />
            <main className="pt-20">
                <section className="hero-section py-20 px-4">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Your Journey Starts Here
                        </h1>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Join our community of international students experiencing authentic Canadian life with caring host families.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10">
                                <h2 className="text-2xl font-bold mb-4">New Student?</h2>
                                <p className="text-gray-300 mb-6">
                                    Create your account and find your perfect homestay match.
                                </p>
                                <a href="/register/student" className="btn-primary block w-full py-3">
                                    Register Now
                                </a>
                            </div>
                            <div className="bg-white bg-opacity-5 p-8 rounded-lg border border-white border-opacity-10">
                                <h2 className="text-2xl font-bold mb-4">Returning Student?</h2>
                                <p className="text-gray-300 mb-6">
                                    Access your dashboard to manage your homestay experience.
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
                            Why Choose HostAbroad.ca?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="feature-card p-6">
                                <i className="fas fa-home text-4xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Quality Homes</h3>
                                <p className="text-gray-400">
                                    All our host families are carefully screened and selected to ensure a safe and comfortable environment.
                                </p>
                            </div>
                            <div className="feature-card p-6">
                                <i className="fas fa-hands-helping text-4xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                                <p className="text-gray-400">
                                    Our team is always available to help you with any questions or concerns during your stay.
                                </p>
                            </div>
                            <div className="feature-card p-6">
                                <i className="fas fa-map-marked-alt text-4xl text-primary-main mb-4"></i>
                                <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
                                <p className="text-gray-400">
                                    Homes located in safe neighborhoods with convenient access to schools and amenities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white bg-opacity-5 py-20 px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Simple Registration Process
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-main rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                                <p className="text-gray-400">
                                    Fill in your basic information and preferences
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-main rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Submit Documents</h3>
                                <p className="text-gray-400">
                                    Upload required documents and sign agreement
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-main rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
                                <p className="text-gray-400">
                                    We'll match you with the perfect host family
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
