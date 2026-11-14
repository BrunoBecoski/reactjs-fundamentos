import { useQuery } from "@tanstack/react-query";

import { fetcher } from "../helpers/api";
import type { UserType } from "../models/user";

function useUsers() {
  const queryKey = "/users";
  const { data, isLoading } = useQuery<UserType[]>({
    queryKey: queryKey.split("/"),
    queryFn: () => fetcher(queryKey),
  });

  return {
    users: data || [],
    isLoadingUsers: isLoading,
  };
}

export default useUsers;
