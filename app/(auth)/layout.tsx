// import { isAuthenticated } from "@/lib/actions/auth.action";
// import { redirect } from "next/navigation";
// import { ReactNode } from "react";

// async function AuthLayout({ children }: { children: ReactNode }) {
//   const isUserAuthenticated = await isAuthenticated();

//   if (isUserAuthenticated) redirect("/");

//   return <div className="auth-layout">{children}</div>;
// }

// export default AuthLayout;

import { ReactNode } from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return <div className="auth-layout">{children}</div>;
}
export default layout