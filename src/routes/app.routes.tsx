import { publicRoutes } from "./public.routes";
import RequireAuth from "./RequireAuth";
import PrivateLayout from "../layouts/PrivateLayout";
import DashboardHome from "../pages/private/DashboardHome";

export const appRoutes = [
    publicRoutes,
    {
        path: "/dashboard",
        element: (
            <RequireAuth>
                <PrivateLayout />
            </RequireAuth>
        ),
        children: [{ index: true, element: <DashboardHome /> }],
    },
];