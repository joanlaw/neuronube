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
          {/* Soporte técnico y mantenimiento Card */}
          <Card>
            <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1724082251/neuronube/pexels-jeshoots-4316_uggvla.jpg" alt="Soporte Técnico" className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader className="font-bold text-xl mt-4">Soporte técnico y mantenimiento</CardHeader>
            <CardBody>
              <p>Ofrecemos soporte técnico profesional, ya sea de manera remota o presencial, y realizamos mantenimiento preventivo para garantizar el rendimiento óptimo de tu infraestructura IT. Nuestro equipo altamente capacitado está listo para resolver problemas técnicos y prevenir futuros inconvenientes, asegurando así un funcionamiento continuo y eficiente.</p>
            </CardBody>
            <CardFooter>
              {/*<Link href="/soluciones/odoo">Leer más</Link> */} 
            </CardFooter>
          </Card>
          
          {/* Soporte y desarrollo para módulos de Odoo Card */}
          <Card>
            <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1724082250/neuronube/pexels-luis-gomes-166706-546819_tydkfj.jpg" alt="Odoo" className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader className="font-bold text-xl mt-4">Desarrollo para Odoo</CardHeader>
            <CardBody>
              <p>Ofrecemos soporte integral, capacitación y desarrollo personalizado de módulos para Odoo. Nuestro objetivo es adaptar la solución ERP a las necesidades específicas de tu empresa, asegurando una implementación y uso eficientes.</p>
            </CardBody>
            <CardFooter>
             {/*<Link href="/soluciones/odoo">Leer más</Link> */} 
            </CardFooter>
          </Card>
          
          {/* Telecomunicaciones Card */}
          <Card>
            <img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1724082746/neuronube/pexels-pixabay-60504_sz9chr.jpg" alt="Telecomunicaciones" className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader className="font-bold text-xl mt-4">Telecomunicaciones</CardHeader>
            <CardBody>
              <p>Especialistas en cableado estructurado, configuración de equipos y seguridad perimetral. Implementamos soluciones para asegurar una red eficiente y protegida, con un enfoque en la configuración de firewalls y la seguridad de tu infraestructura.</p>
            </CardBody>
            <CardFooter>
              {/*<Link href="/soluciones/odoo">Leer más</Link> */} 
            </CardFooter>
          </Card>
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
