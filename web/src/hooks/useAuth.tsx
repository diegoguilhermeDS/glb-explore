import { useContext } from "react";
import { AuthContext } from "@/providers/authContext";

export const useAuth = () => useContext(AuthContext);
