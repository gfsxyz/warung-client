"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import CurrencyTag from "./CurrencyTag";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
      {/* images and actions */}
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image alt="image" src={data?.images?.[0]?.url} fill />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px=6 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <CurrencyTag value={data?.price} />
      </div>
    </div>
  );
};
export default ProductCard;