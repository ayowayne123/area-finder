import SearchHeader from "./header";

export default function UserLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
