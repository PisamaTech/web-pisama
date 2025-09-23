import { Alert } from "@heroui/alert";
import { FaExclamationCircle } from "react-icons/fa";

const NonAvailableAlert = () => (
  <Alert
    color="danger"
    className="mt-6 text-left border-1"
    icon={<FaExclamationCircle />}
  >
    <div className="flex">
      <div className="ml-3">
        <h3 className="text-base font-medium">Consultorio 2 - No Disponible</h3>
        <div className="mt-2 text-sm">
          <p>
            Actualmente el <strong>Consultorio 2 </strong> no se encuentra
            disponible, ya que se encuentra alquilado en exclusividad por una
            profesional.
          </p>
        </div>
      </div>
    </div>
  </Alert>
);

export default NonAvailableAlert;
