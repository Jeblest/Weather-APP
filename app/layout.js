import "@styles/globals.css";
import { CityProvider } from "@context/CityContext";
export const metadata = {
  title: 'Weather Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-cols">
        <CityProvider>
          {children}

        </CityProvider>
      </body>
    </html>
  )
}
