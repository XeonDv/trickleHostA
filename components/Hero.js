function Hero() {
    return (
        <section data-name="hero" className="hero-section min-h-screen flex items-center justify-center text-center px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6">
                    Welcome to Your Canadian Home Away from Home
                </h1>
                <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-300 mb-8">
                    Connect with welcoming host families and experience authentic Canadian life
                </p>
                <div data-name="hero-cta" className="space-x-4">
                    <a href="/student" className="btn-primary text-lg px-8 py-3">
                        I'm a Student
                    </a>
                    <a href="/family" className="btn-secondary text-lg px-8 py-3">
                        I'm a Host Family
                    </a>
                </div>
            </div>
        </section>
    );
}
