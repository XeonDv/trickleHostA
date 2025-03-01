const mockData = {
    users: [
        {
            id: 'mgr1',
            type: 'manager',
            name: 'John Manager',
            email: 'manager@hostabroad.ca',
            password: 'manager123', // In real app, this should be hashed
            branding: {
                welcomeText: 'Welcome to HostAbroad Toronto',
                phoneNumber: '+1 (416) 555-0123',
                logo: 'https://via.placeholder.com/150',
            }
        },
        {
            id: 'mgr2',
            type: 'manager',
            name: 'Sarah West',
            email: 'sarah@hostabroad.ca',
            password: 'sarah123',
            branding: {
                welcomeText: 'Welcome to HostAbroad Vancouver',
                phoneNumber: '+1 (604) 555-0124',
                logo: 'https://via.placeholder.com/150',
            }
        },
        {
            id: 'coord1',
            type: 'coordinator',
            name: 'Mike Smith',
            email: 'mike@hostabroad.ca',
            password: 'mike123',
            managerId: 'mgr1',
            region: 'Toronto East'
        },
        {
            id: 'coord2',
            type: 'coordinator',
            name: 'Lisa Chen',
            email: 'lisa@hostabroad.ca',
            password: 'lisa123',
            managerId: 'mgr1',
            region: 'Toronto West'
        },
        {
            id: 'coord3',
            type: 'coordinator',
            name: 'David Wilson',
            email: 'david@hostabroad.ca',
            password: 'david123',
            managerId: 'mgr2',
            region: 'Vancouver'
        }
    ],
    students: [
        {
            id: 'std1',
            name: 'Alice Chen',
            email: 'alice@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
            startDate: '2024-03-01',
            endDate: '2024-08-31',
            status: 'new lead',
            city: 'Toronto',
            agency: 'Global Education',
            coordinatorId: 'coord1',
            payment: {
                total: 5000,
                paid: 2500,
                pending: 2500,
                history: [
                    {
                        date: '2024-01-15',
                        amount: 2500,
                        type: 'deposit'
                    }
                ]
            }
        },
        {
            id: 'std2',
            name: 'James Wilson',
            email: 'james@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
            startDate: '2024-02-15',
            endDate: '2024-07-15',
            status: 'confirmed',
            city: 'Vancouver',
            agency: 'Study Abroad Inc',
            coordinatorId: 'coord3',
            payment: {
                total: 4500,
                paid: 4500,
                pending: 0,
                history: [
                    {
                        date: '2024-01-10',
                        amount: 4500,
                        type: 'full payment'
                    }
                ]
            }
        },
        {
            id: 'std3',
            name: 'Maria Garcia',
            email: 'maria@example.com',
            profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
            startDate: '2024-04-01',
            endDate: '2024-09-30',
            status: 'family assigned',
            city: 'Toronto',
            agency: 'International Studies',
            coordinatorId: 'coord2',
            payment: {
                total: 5500,
                paid: 3500,
                pending: 2000,
                history: [
                    {
                        date: '2024-01-20',
                        amount: 3500,
                        type: 'first installment'
                    }
                ]
            }
        }
    ],
    families: [
        {
            id: 'fam1',
            name: 'Thompson Family',
            email: 'thompson@example.com',
            phone: '+1 (416) 555-1234',
            address: '123 Maple Street',
            city: 'Toronto',
            status: 'certified',
            coordinatorId: 'coord1',
            availability: true,
            payments: {
                received: 3000,
                pending: 1000,
                history: [
                    {
                        date: '2024-01-20',
                        amount: 3000,
                        type: 'monthly payment'
                    }
                ]
            }
        },
        {
            id: 'fam2',
            name: 'Martinez Family',
            email: 'martinez@example.com',
            phone: '+1 (604) 555-5678',
            address: '456 Oak Avenue',
            city: 'Vancouver',
            status: 'need visit',
            coordinatorId: 'coord3',
            availability: false,
            payments: {
                received: 0,
                pending: 0,
                history: []
            }
        },
        {
            id: 'fam3',
            name: 'Singh Family',
            email: 'singh@example.com',
            phone: '+1 (416) 555-9012',
            address: '789 Pine Road',
            city: 'Toronto',
            status: 'certified',
            coordinatorId: 'coord2',
            availability: true,
            payments: {
                received: 2500,
                pending: 500,
                history: [
                    {
                        date: '2024-01-25',
                        amount: 2500,
                        type: 'monthly payment'
                    }
                ]
            }
        }
    ],
    pairings: [
        {
            id: 'pair1',
            studentId: 'std3',
            familyId: 'fam1',
            startDate: '2024-04-01',
            endDate: '2024-09-30',
            status: 'active',
            coordinatorId: 'coord2',
            documents: {
                studentDoc: 'student_details_pair1.pdf',
                familyDoc: 'family_details_pair1.pdf',
                agreement: 'agreement_pair1.pdf'
            }
        }
    ],
    reviews: [
        {
            id: 'rev1',
            studentId: 'std3',
            familyId: 'fam1',
            rating: 5,
            comment: 'Great experience with the Thompson family! They are very welcoming and helpful.',
            date: '2024-01-25'
        },
        {
            id: 'rev2',
            studentId: 'std2',
            familyId: 'fam2',
            rating: 4,
            comment: 'Good stay overall. The family was nice and location was convenient.',
            date: '2024-01-20'
        }
    ],
    agencies: [
        {
            id: 'ag1',
            name: 'Global Education',
            email: 'contact@globaledu.com',
            phone: '+1 (555) 123-4567',
            commission: 10, // percentage
            students: ['std1'],
            payments: {
                total: 500,
                paid: 250,
                pending: 250
            }
        },
        {
            id: 'ag2',
            name: 'Study Abroad Inc',
            email: 'info@studyabroad.com',
            phone: '+1 (555) 987-6543',
            commission: 12,
            students: ['std2'],
            payments: {
                total: 540,
                paid: 540,
                pending: 0
            }
        },
        {
            id: 'ag3',
            name: 'International Studies',
            email: 'contact@intstudies.com',
            phone: '+1 (555) 456-7890',
            commission: 15,
            students: ['std3'],
            payments: {
                total: 825,
                paid: 525,
                pending: 300
            }
        }
    ]
};
