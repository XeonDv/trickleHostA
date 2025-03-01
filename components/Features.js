function Features() {
    const features = [
        {
            icon: "fa-house-user",
            title: "Quality Host Families",
            description: "Carefully screened and selected host families providing safe and welcoming environments"
        },
        {
            icon: "fa-graduation-cap",
            title: "Student Support",
            description: "Comprehensive support for international students throughout their stay"
        },
        {
            icon: "fa-handshake",
            title: "Perfect Matching",
            description: "Personalized matching process ensuring compatibility between students and families"
        }
    ];

    return (
        <section data-name="features" className="py-20 px-4">
            <div className="container mx-auto">
                <h2 data-name="features-title" className="text-3xl font-bold text-center mb-12">
                    Why Choose HostAbroad.ca?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} data-name={`feature-card-${index}`} className="feature-card p-6 rounded-lg text-center">
                            <i className={`fas ${feature.icon} text-4xl text-primary-main mb-4`}></i>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
