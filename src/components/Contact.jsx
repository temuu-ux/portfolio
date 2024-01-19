import { Button } from "./element";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
export default function Contact() {
  return (
    <div>
      <div>
        <Button buttName="Get in touch" />
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div>
        <div>
          <PiEnvelopeSimpleLight />
          <p>temuulenb80@gmail.com</p>
          
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
