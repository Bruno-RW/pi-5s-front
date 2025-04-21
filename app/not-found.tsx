import Button from "@/components/ui/custom/Button";

const NotFound = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-2 py-10 px-12 sm:px-20 lg:py-16 lg:px-28">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-0">404</h1>
        <h2 className="text-xl sm:text-2xl mb-5">Página não encontrada</h2>
        <Button className="w-full rounded-sm" href="/">Retornar ao início</Button>
      </div>
    </div>
  )
};

export default NotFound;