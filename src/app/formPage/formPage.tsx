import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function FormPageComponent(){
  return(
    <div className="flex items-center justify-center h-screen w-full ">
      <div className="bg-[url(/lickitung.png)] bg-center bg-no-repeat bg-contain inset-0 -z-1 absolute opacity-10 sm:scale-50"></div>
      <div className="w-full m-4 box-border sm:w-2xl p-6 border border-gray-200 rounded-lg">
        <span className="flex items-center mb-4">
          <img src="/kenjie.jpg" className="aspect-square" width={40} alt="" />
          <h1 className="text-4xl font-medium ml-2">Kenjie Pins</h1>
        </span>
        <p className="text-gray-500 mb-4">Fill the form to complete your purchase!</p>

        <form action="">
          <div className="mb-4">
            <label htmlFor="">Name<span className="text-red-500">*</span></label>
            <Input></Input>
          </div>
          <div className="mb-4">
            <label htmlFor="">Course and Section<span className="text-red-500">*</span></label>
            <Input></Input>
          </div>
          <div className="mb-4">
            <label htmlFor="">Phone Number<span className="text-red-500">*</span></label>
            <Input></Input>
          </div>
          <div className="mb-4">
            <label htmlFor="">Upload your customized pin picture<span className="text-red-500">*</span></label>
            <Input type="file"></Input>
          </div>
          <Button className="hover:cursor-pointer float-right w-30">Submit</Button>
        </form>
      </div>
    </div>
  )
}