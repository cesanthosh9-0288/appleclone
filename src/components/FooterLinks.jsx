function FooterLinks() {
    const footerColumns = [
        {
            headingGroups: [
                {
                    title: "Shop and Learn",
                    links: [
                        "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"
                    ]
                },
                {
                    title: "Apple Wallet",
                    links: ["Wallet"]
                }
            ]
        },
        {
            headingGroups: [
                {
                    title: "Account",
                    links: [
                        "Manage Your Apple Account",
                        "Apple Store Account",
                        "iCloud.com"
                    ]
                },
                {
                    title: "Entertainment",
                    links: [
                        "Apple One",
                        "Apple TV+",
                        "Apple Music",
                        "Apple Arcade",
                        "Apple Podcasts",
                        "Apple Books",
                        "App Store"
                    ]
                }
            ]
        },
        {
            headingGroups: [
                {
                    title: "Apple Store",
                    links: [
                        "Find a Store",
                        "Genius Bar",
                        "Today at Apple",
                        "Group Reservations",
                        "Apple Camp",
                        "Apple Trade In",
                        "Ways to Buy",
                        "Recycling Programme",
                        "Order Status",
                        "Shopping Help"
                    ]
                }
            ]
        },
        {
            headingGroups: [
                {
                    title: "For Business",
                    links: [
                        "Apple and Business",
                        "Shop for Business"
                    ]
                },
                {
                    title: "For Education",
                    links: [
                        "Apple and Education",
                        "Shop for Education",
                        "Shop for University"
                    ]
                },
                {
                    title: "For Healthcare",
                    links: ["Apple and Healthcare"]
                },
                {
                    title: "For Government",
                    links: ["Apple and Government"]
                }
            ]
        },
        {
            headingGroups: [
                {
                    title: "Apple Values",
                    links: [
                        "Accessibility",
                        "Education",
                        "Environment",
                        "Privacy",
                        "Supply Chain Innovation"
                    ]
                },
                {
                    title: "About Apple",
                    links: [
                        "Newsroom",
                        "Apple Leadership",
                        "Career Opportunities",
                        "Investors",
                        "Ethics & Compliance",
                        "Events",
                        "Contact Apple"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="bg-black text-gray-400 text-xs py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {footerColumns.map((column, colIdx) => (
                    <div key={colIdx} className="space-y-6">
                        {column.headingGroups.map((group, groupIdx) => (
                            <div key={groupIdx}>
                                <h3 className="text-white font-semibold mb-2">{group.title}</h3>
                                <ul className="space-y-1">
                                    {group.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <a href="#" className="hover:underline hover:text-white">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="border-t border-gray-700 mt-6 pt-4 text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center">
                <p>© 2025 Apple Inc. All rights reserved.</p>
                <p className="mt-2 md:mt-0">India</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Use</a>
                    <a href="#" className="hover:underline">Sales Policy</a>
                    <a href="#" className="hover:underline">Legal</a>
                    <a href="#" className="hover:underline">Site Map</a>
                </div>
            </div>
        </div>
    );
}

export default FooterLinks;
