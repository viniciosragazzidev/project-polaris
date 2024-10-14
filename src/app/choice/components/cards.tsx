import { ShoppingBag, Wallet, Wrench } from "lucide-react";

import FinanceImageCard from "@/medias/finance-image.jpg";
import OsImageCard from "@/medias/os-image.jpg";
import VendedorImageCard from "@/medias/vendedor-image.jpg";

import Card from "./card";
const Cards = () => {
  return (
    <section className="cards w-full h-full min-h-[500px]   grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3  gap-8 px-14 max-sm:px-5 max-sm:py-2 py-8 ">
      <Card
        icon={<ShoppingBag />}
        image={VendedorImageCard.src}
        title={"Vendas"}
        href="/sales"
        delay={1}
        className="max-md:col-span-3"
      />

      <Card
        icon={<Wrench />}
        image={OsImageCard.src}
        title={"Ordem de Serviço"}
        href="/os"
        delay={2}
        active
        className="max-md:col-span-3"
      />

      <Card
        icon={<Wallet />}
        image={FinanceImageCard.src}
        title={"Financeiro"}
        href="/finance"
        delay={3}
        className="max-lg:col-span-3"
      />
    </section>
  );
};

export default Cards;
