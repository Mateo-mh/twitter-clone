'use client'

import { useEffect, useRef, useState } from "react";

export function ComposePostTextArea() {
  const [pending, setPending] = useState(false); // Estado local para manejar el estado pendiente
  const alreadySend = useRef(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Simula el envío del formulario
  const simulateFormSubmission = () => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 2000); // Simula un retraso en el envío del formulario
  };

  useEffect(() => {
    if (textAreaRef.current == null) return;

    if (!pending && alreadySend.current) {
      alreadySend.current = false;
      textAreaRef.current.value = '';
      return;
    }

    alreadySend.current = pending;
  }, [pending]);

  useEffect(() => {
    // Simula la verificación periódica del estado del formulario
    const interval = setInterval(simulateFormSubmission, 5000); // Cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <textarea
      name="content"
      rows={4}
      ref={textAreaRef}
      className="w-full text-xl bg-gray-300/10 placeholder-gray-500 p-2"
      placeholder="¡¿Qué está pasando?!"
    ></textarea>
  );
}
