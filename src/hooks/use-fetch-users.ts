import { useQuery } from "react-query";

import { fetchUsers } from "@/mocks/users";

export const useFetchUsers = () => {
  return useQuery("users", fetchUsers);
};
