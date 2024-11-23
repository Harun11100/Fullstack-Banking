
export default function RootLayout({children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
       <main>
          SignUP AND In
          {children}
       </main>
      );
    }
    