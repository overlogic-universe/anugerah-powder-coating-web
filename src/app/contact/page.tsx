"use client";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const message = encodeURIComponent(
      `Hallo, Anugerah Powder Coating Blora, Perkenalkan Saya: \n\n\nMenemukan nomor ini melalui Websites anugerahpowderblora.com, Saya ingin bertanya mengenai: \n\n\n\nTerimakasih`
    );

    const phoneNumber = "6282220001081";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.location.href = whatsappUrl;
  }, []);

  return null;
};

export default Contact;