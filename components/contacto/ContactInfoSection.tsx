"use client";

import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Input, Textarea } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactInfoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  type FormStatus =
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success" }
    | { type: "error"; message: string };

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success" });
        setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
      } else {
        setStatus({ type: "error", message: data.error || "Algo salió mal." });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: `No se pudo enviar el mensaje. Intenta de nuevo. Error: ${error instanceof Error ? error.message : String(error)}`,
      });
    }
  };

  return (
    <section className="py-20 bg-content1 ">
      <div className="container mx-auto grid grid-cols-1 gap-22 px-4 lg:grid-cols-2 lg:px-8 items-center  max-w-4xl">
        {/* Columna Izquierda: Datos y Formulario */}
        <div>
          <h2 className="font-display text-3xl font-bold text-primary">
            Si aún tenés alguna duda o consulta, contactanos...
          </h2>
          <div className="mt-6 space-y-4">
            <p className="flex items-center font-sans text-primary">
              <FaMapMarkerAlt className="mr-3 h-5 w-5 text-terracotta-suave" />{" "}
              <a
                href="https://maps.app.goo.gl/vCc3HGvZGsQsjuTf9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta-suave"
              >
                Juan Paullier 1192, Parque Rodó, Montevideo
              </a>
            </p>
            <p className="flex items-center font-sans text-primary">
              <FaEnvelope className="mr-3 h-5 w-5 text-terracotta-suave" />{" "}
              <a
                className="hover:text-terracotta-suave"
                href="mailto:info@pisama.uy"
              >
                info@pisama.uy
              </a>
            </p>
            <p className="flex items-center font-sans text-primary">
              <FaPhoneAlt className="mr-3 h-4 w-5 text-terracotta-suave" />{" "}
              <a className="hover:text-terracotta-suave" href="tel:+5985961360">
                +598 95961360
              </a>
            </p>
            <p className="flex items-center font-sans text-primary pb-6">
              <FaWhatsapp className="mr-3 h-5 w-5 text-terracotta-suave" />{" "}
              <a
                className="hover:text-terracotta-suave"
                href="https://wa.me/59895961360"
                rel="noopener noreferrer"
                target="_blank"
              >
                +598 95961360
              </a>
            </p>
          </div>
          <Divider />
          <h2 className="mt-7 font-display text-3xl font-bold text-primary">
            Envíanos un Mensaje
          </h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <Input
              fullWidth
              required
              disabled={status.type === "loading"}
              label="Tu Nombre"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              fullWidth
              required
              disabled={status.type === "loading"}
              label="Tu Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Textarea
              fullWidth
              required
              disabled={status.type === "loading"}
              label="Tu Mensaje"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              className="w-full bg-terracotta-suave font-display font-semibold text-white"
              disabled={status.type === "loading"}
              size="lg"
              startContent={
                status.type === "loading" ? (
                  <Spinner color="white" size="sm" />
                ) : undefined
              }
              type="submit"
            >
              {status.type === "loading" ? "Enviando..." : "Enviar mensaje"}
            </Button>
            {status.type === "success" && (
              <Alert className="mt-4 text-left" color="success">
                ¡Mensaje enviado! Gracias por contactarnos, te responderemos a
                la brevedad.
              </Alert>
            )}
            {status.type === "error" && (
              <Alert className="mt-4 text-left" color="danger">
                {status.message}
              </Alert>
            )}
          </form>
        </div>

        {/* Columna Derecha: Mapa */}
        <div className="w-full mx-auto h-[500px] max-w-[500px] overflow-hidden rounded-xl shadow-2xl">
          <iframe
            allowFullScreen={true}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0134501297057!2d-56.169923123518814!3d-34.90611197353255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81afa8928cc1%3A0x8bd901040c3bfb91!2sJuan%20Paullier%201192%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1758164896331!5m2!1ses!2suy"
            style={{ border: 0 }}
            title="Ubicación de Espacio Pisama en Google Maps"
          />
        </div>
      </div>
    </section>
  );
}
