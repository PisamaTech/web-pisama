"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Alert } from "@heroui/alert";
import { Spinner } from "@heroui/spinner";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Divider } from "@heroui/divider";

export default function ContactInfoSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    loading: boolean;
    error: string | null;
    success: boolean;
  }>({ loading: false, error: null, success: false });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
    } else {
      setStatus({ loading: false, error: data.error, success: false });
    }
  };

  return (
    <section className="py-20 bg-content2 ">
      <div className="container mx-auto grid grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:px-8 items-center  max-w-5xl">
        {/* Columna Izquierda: Mapa */}
        <div className="h-[500px] max-w-[500px]  overflow-hidden rounded-xl shadow-2xl">
          <iframe
            title="Ubicación de Espacio Pisama en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0134501297057!2d-56.169923123518814!3d-34.90611197353255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81afa8928cc1%3A0x8bd901040c3bfb91!2sJuan%20Paullier%201192%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses!2suy!4v1758164896331!5m2!1ses!2suy"
            width="500"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Columna Derecha: Datos y Formulario */}
        <div>
          <h2 className="font-display text-3xl font-bold text-primary">
            Nuestros Datos
          </h2>
          <div className="mt-6 space-y-4">
            <p className="flex items-center font-sans text-primary">
              <FaMapMarkerAlt className="mr-3 h-5 w-5 text-terracotta-suave" />{" "}
              Juan Paullier 1192, Parque Rodó, Montevideo
            </p>
            <p className="flex items-center font-sans text-primary">
              <FaEnvelope className="mr-3 h-5 w-5 text-terracotta-suave" />{" "}
              <a
                href="mailto:info@pisama.uy"
                className="hover:text-terracotta-suave"
              >
                info@pisama.uy
              </a>
            </p>
            <p className="flex items-center font-sans text-primary">
              <FaPhoneAlt className="mr-3 h-4 w-5 text-terracotta-suave" />{" "}
              <a href="tel:+5985961360" className="hover:text-terracotta-suave">
                +598 95961360
              </a>
            </p>
            <p className="flex items-center font-sans text-primary pb-6">
              <FaWhatsapp className="mr-3 h-5 w-5 text-terracotta-suave" />{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=598095961360"
                className="hover:text-terracotta-suave"
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
              label="Tu Nombre"
              name="name"
              type="text"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status.loading}
            />
            <Input
              label="Tu Email"
              name="email"
              type="email"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status.loading}
            />
            <Textarea
              label="Tu Mensaje"
              name="message"
              fullWidth
              required
              value={formData.message}
              onChange={handleChange}
              disabled={status.loading}
            />
            <Button
              type="submit"
              className="w-full bg-terracotta-suave font-display font-semibold text-white"
              size="lg"
              startContent={
                status.loading ? <Spinner color="white" size="sm" /> : undefined
              }
              disabled={status.loading}
            >
              {status.loading ? "Enviando..." : "Enviar mensaje"}
            </Button>
            {status.success && (
              <Alert color="success" className="mt-4 text-left">
                ¡Mensaje enviado! Gracias por contactarnos, te responderemos a
                la brevedad.
              </Alert>
            )}
            {status.error && (
              <Alert color="danger" className="mt-4 text-left">
                {status.error}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
