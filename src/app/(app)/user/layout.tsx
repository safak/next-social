import UserPrivateRoute from "@/components/PrivateRoutes/UserPrivateRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <UserPrivateRoute>{children}</UserPrivateRoute>;
}
