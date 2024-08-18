"use client"; // Agrega esta línea al principio del archivo

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";;
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section>
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-20 text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Soporte IT de Alta Calidad para Empresas Modernas</h1>
      <p className="text-xl mb-8">Soluciones personalizadas para optimizar tu infraestructura tecnológica y asegurar la continuidad de tu negocio.</p>
      <div className="flex justify-center space-x-4">
        <Button as={Link} color="primary" size="lg" href="/soluciones">
          Explora Nuestras Soluciones
        </Button>
        <Button as={Link} color="secondary" size="lg" href="/contacto">
          Contáctanos Ahora
        </Button>
      </div>
    </div>

    {/* Services Section */}
    <div className="py-16 text-center">
      <h2 className="text-3xl font-semibold mb-8">Nuestras Soluciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card Example */}
        <Card>
          <CardHeader className="font-bold text-xl">Soporte en la Nube</CardHeader>
          <CardBody>
            <p>Optimiza y protege tus servicios en la nube con nuestras soluciones expertas.</p>
          </CardBody>
          <CardFooter>
            <Link href="/soluciones/nube">Leer más</Link>
          </CardFooter>
        </Card>
        {/* Añade más tarjetas según lo necesites */}
      </div>
    </div>

    {/* Contact Section */}
    <div className="py-16 text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <h2 className="text-3xl font-semibold mb-8">¿Necesitas Ayuda?</h2>
        <p className="mb-8">Estamos aquí para resolver tus problemas tecnológicos. Contáctanos hoy mismo.</p>
        <form className="max-w-md mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-lg shadow-lg">
          <Input
            label="Nombre"
            placeholder="Tu nombre"
            className="mb-4"
          />
          <Input
            label="Email"
            placeholder="Tu email"
            type="email"
            className="mb-4"
          />
          <Input
            label="Asunto"
            placeholder="Asunto"
            className="mb-4"
          />
          <Textarea
            label="Mensaje"
            placeholder="Tu mensaje"
            className="mb-4"
            rows={4} // Opcional: Ajusta la altura del Textarea
          />
          <Button color="primary" type="submit">Enviar Mensaje</Button>
        </form>
      </div>
  </section>
  );
}
