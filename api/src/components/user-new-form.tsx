import React from "react";

import useUser from "../hooks/use-user";
import type { UserType } from "../models/user";

function UserNewForm() {
  const { createUser, userRequestStatus } = useUser();

  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const data = new FormData(formRef.current);

    const payload: UserType = {
      id: data.get("id").toString(),
      name: data.get("name").toString(),
    };

    await createUser(payload);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <input placeholder="Username" name="id" required />
      </div>

      <div>
        <input placeholder="Nome" name="name" required />
      </div>

      <div>
        <button type="submit" disabled={userRequestStatus === "saving"}>
          {userRequestStatus === "saving" ? "Criando..." : "Criar usuário"}
        </button>
      </div>
    </form>
  );
}

export default UserNewForm;
