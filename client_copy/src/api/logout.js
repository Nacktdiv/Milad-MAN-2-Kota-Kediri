export const apiLogout = async () => {
    try {
        const response = await fetch("http://localhost:3000/logout", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", 
        });

        if (!response.ok) {
            throw new Error("Gagal logout");
        }

        return await response.json();
    } catch (error) {
        console.error("Logout Error:", error);
        throw error;
    }
};
