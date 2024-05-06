import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
    const useAuth = useContext(AuthContext)
    return useAuth;
};

export default useAuth;