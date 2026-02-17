import { ProductsResponse } from "@/interfaces/productInterface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { EyeOffIcon } from "lucide-react"
import { SearchIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import AddToCart from "@/components/AddToCart/AddToCart";
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function Products() {
  return (
    <div className="py-12">
      <Card className="w-full overflow-hidden">
 <Field className="mx-64 py-56 max-w-2xl">
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="text"
          placeholder="Ask anything"
        />
        <InputGroupAddon align="inline-end">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path d="M9.25 13.25a.75.75 0 0 0 1.5 0V4.636l2.955 3.129a.75.75 0 0 0 1.09-1.03l-4.25-4.5a.75.75 0 0 0-1.09 0l-4.25 4.5a.75.75 0 1 0 1.09 1.03L9.25 4.636v8.614Z" />
  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
  <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
</svg>

        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>chat with the AI or upload an image and let it scan.</FieldDescription>
    </Field>
      </Card>
      

    </div>
    
  );
}

export default Products;
