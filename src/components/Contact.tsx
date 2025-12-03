import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Contact Us
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO.text}
        </p>

        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="flex items-center">
            <Phone className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
