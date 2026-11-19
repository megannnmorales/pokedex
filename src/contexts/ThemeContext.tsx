import { createContext, useMemo, useState, type ReactNode } from "react"



type Theme = "light" | "dark";

export interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    
    const [theme, setTheme] = useState<Theme>("light");
    
    const value = useMemo(
        () => ({
            theme,
            toggleTheme: () =>
                setTheme((curr) => (curr === "light" ? "dark" : "light")),
        }),
        [theme],
    );

    return (
        <ThemeContext value={value}>{children}</ThemeContext>
    );
}


