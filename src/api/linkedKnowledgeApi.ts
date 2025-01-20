export interface LinkedElement {
    icon: string;
    title: string;
    link: string;
    isWebLink: boolean;
}

export const fetchLinkedElements = async (): Promise<LinkedElement[]> => {
    // Simulierte API-Antwort
    return [
        { icon: "download-software.svg", title: "Download Software", link: "https://example.com/upload", isWebLink: true },
        { icon: "full_documentation.svg", title: "Get full documentation", link: "/files/software.zip", isWebLink: false },   
        { icon: "best_practices.svg", title: "Best Practices from colleagues", link: "/files/software.zip", isWebLink: false },
    ];
};
