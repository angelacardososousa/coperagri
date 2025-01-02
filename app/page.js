'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona o usuário para outra página
    router.push("/inicial");
  }, [router]); // Dependência para garantir que o redirecionamento seja executado corretamente

  return (
    <div>
      <p>Redirecionando...</p>
    </div>
  );
}
