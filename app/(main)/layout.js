import Header from "./header";

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
