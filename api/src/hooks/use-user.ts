import React from "react";

import { api, fetcher } from "../helpers/api";
import type { UserType } from "../models/user";

function useUser() {
  const [user, setUser] = React.useState<UserType | null>(null);
  const [requestStatus, setRequestStatus] = React.useState<
    "idle" | "loading" | "saving"
  >("idle");

  const getUser = React.useCallback(async (username: string) => {
    try {
      setRequestStatus("loading");

      const data = await fetcher(`/users/${username}`);

      setUser(data);
    } catch (error) {
      console.error(error);
      alert(`Erro ao buscar o usuário: ${username}`);
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  const createUser = async (payload: UserType) => {
    try {
      setRequestStatus("saving");

      await api("/users", { method: "POST", body: JSON.stringify(payload) });

      alert(`Usuário ${payload.name} criado com sucesso!`);
    } catch (error) {
      console.log(error);
      alert(`Erro ao criar o usuário: ${payload.name}`);
    } finally {
      setRequestStatus("idle");
    }
  };

  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
    createUser,
  };
}

export default useUser;
