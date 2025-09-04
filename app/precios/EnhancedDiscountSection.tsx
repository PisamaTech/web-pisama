import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import React from "react";
import {
  FaCrown,
  FaPercent,
  FaClock,
  FaArrowRight,
  FaCalculator,
  FaStar,
} from "react-icons/fa";

const EnhancedDiscountSection = () => {
  const discounts = [
    { range: "4 a 7", amount: 20, icon: <FaClock />, color: "primary" },
    { range: "8 a 11", amount: 40, icon: <FaPercent />, color: "secondary" },
    { range: "12 a 15", amount: 60, icon: <FaStar />, color: "success" },
    { range: "16 a 19", amount: 80, icon: <FaCrown />, color: "warning" },
  ];

  return (
    <>
      {/* Sección Hero de Descuentos */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6">
              <FaPercent className="text-lg" />
              <span className="font-semibold">¡DESCUENTOS ESPECIALES!</span>
            </div>

            <h2 className="font-display text-5xl font-bold text-gray-900 mb-4">
              ¡Premiamos tu{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                compromiso
              </span>
              !
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mientras más horas utilices por semana, mayores descuentos
              obtienes.
              <strong className="text-blue-600">
                {" "}
                Sin contratos, sin complicaciones.
              </strong>
            </p>
          </div>

          {/* Cards de Descuentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {discounts.map((discount, index) => (
              <Card
                key={discount.range}
                className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  index === 3
                    ? "border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50"
                    : index === 2
                      ? "border-2 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50"
                      : "bg-white hover:bg-gray-50"
                }`}
              >
                <CardHeader className="text-center pb-2">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      index === 3
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                        : index === 2
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                          : index === 1
                            ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white"
                            : "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                    }`}
                  >
                    {React.cloneElement(discount.icon, { size: 24 })}
                  </div>

                  {index === 3 && (
                    <Chip color="warning" variant="flat" className="mb-2">
                      ¡MÁS POPULAR!
                    </Chip>
                  )}

                  <h3 className="text-2xl font-bold text-gray-900">
                    {discount.range}{" "}
                    <span className="text-base font-normal text-gray-600">
                      horas/semana
                    </span>
                  </h3>
                </CardHeader>

                <CardBody className="text-center pt-0">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">
                      ${discount.amount}
                    </span>
                    <span className="text-gray-600"> descuento/hora</span>
                  </div>

                  <div className="text-sm text-gray-500 mb-4">
                    Ahorro estimado mensual: <br />
                    <span className="font-semibold text-green-600">
                      $
                      {discount.amount *
                        parseInt(discount.range.split(" ")[0]) *
                        4}
                    </span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Calculadora de Ahorros */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl">
            <CardBody className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FaCalculator className="text-blue-400" size={32} />
                  <h3 className="text-3xl font-bold">Calcula tu Ahorro</h3>
                </div>

                <p className="text-lg text-gray-300 mb-6">
                  Con nuestro sistema de descuentos por volumen, puedes ahorrar
                  hasta
                  <span className="text-yellow-400 font-bold">
                    {" "}
                    $320 por semana
                  </span>{" "}
                  utilizando 16+ horas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">
                      Sin descuento
                    </div>
                    <div className="text-gray-300">16h × $250 = $4,000</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <FaArrowRight className="text-green-400" size={24} />
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500">
                    <div className="text-2xl font-bold text-green-400">
                      Con descuento
                    </div>
                    <div className="text-gray-300">16h × $170 = $2,720</div>
                    <div className="text-sm text-green-400 font-semibold">
                      ¡$1,280 menos!
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8"
                  endContent={<FaArrowRight />}
                >
                  Consultar Disponibilidad
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Sección de Beneficios Adicionales */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Beneficios Adicionales
            </h3>
            <p className="text-gray-600">
              Además de los descuentos por volumen, obtienes estos beneficios
              exclusivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Flexibilidad Total
                </h4>
                <p className="text-sm text-gray-600">
                  Cambia tus horarios cuando quieras, sin penalizaciones
                </p>
              </CardBody>
            </Card>

            <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPercent className="text-green-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Descuentos Automáticos
                </h4>
                <p className="text-sm text-gray-600">
                  Se aplican automáticamente según tu uso semanal
                </p>
              </CardBody>
            </Card>

            <Card className="text-center shadow-md hover:shadow-lg transition-shadow">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Sin Contratos
                </h4>
                <p className="text-sm text-gray-600">
                  Libertad total, paga solo por lo que usas
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedDiscountSection;
