import { publicRoutes } from "./public.routes";
import RequireAuth from "./RequireAuth";
import PrivateLayout from "../layouts/PrivateLayout";
import DashboardHome from "../pages/private/DashboardHome";
import PrivatePlaceholder from "../pages/private/PrivatePlaceholder";

export const appRoutes = [
    publicRoutes,
    {
        path: "/dashboard",
        element: (
            <RequireAuth>
                <PrivateLayout />
            </RequireAuth>
        ),
        children: [
            { index: true, element: <DashboardHome /> },
            { path: "categories", element: <PrivatePlaceholder title="Categorías" /> },
            { path: "posts", element: <PrivatePlaceholder title="Posts" /> },
            { path: "users", element: <PrivatePlaceholder title="Users" /> },
        ],
    },
];