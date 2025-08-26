import Image from "next/image"

export const Brand = () => (
  <div className="flex items-center gap-2">
    <Image src="/logo.png" alt="CarpalmaRent" width={36} height={36} className="rounded-xl" />
    <span className="font-semibold">Carpalmarent</span>
  </div>
)
