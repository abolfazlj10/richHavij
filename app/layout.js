import './main.css'

export const metadata = {
  title: "Mowj Arman 🌊",
  description: "created by abolfazl_j10",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
