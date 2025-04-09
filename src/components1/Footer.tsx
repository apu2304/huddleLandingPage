import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
})

const Footer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div>
      <img src="assets/images/bg-footer-top-desktop.svg" alt="" 
      className="w-screen hidden md:block"/>
      <img src="assets/images/bg-footer-top-mobile.svg" alt="" 
      className="w-screen block md:hidden"/>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 
      md:grid-rows-1 py-12 px-16 bg-[var(--gunmetal)] gap-16">
        <div className="flex flex-col justify-center row-start-2 md:row-start-1 md:row-end-2
        col-start-1 col-end-2 md:col-start-1 row-end-3 md:col-end-2 text-[var(--white)] gap-3">
           <img src="assets/images/logoWhite.svg" alt="" className="w-[60%] md:w-[50%] "/>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
           vestibulum a, ultrices quis sem.</p>
          <div className="flex items-center gap-3 mt-4">
          <FaPhoneAlt className="text-2xl"/>
          <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="flex items-center gap-3 mt-4">
          <MdAttachEmail  className="text-2xl"/>
          <p>example@huddle.com</p>
          </div>
          <div className="flex items-center gap-3 mt-10">
          <FaFacebookSquare  className="text-2xl hover:text-[#1877F2]"/>
          <FaInstagram  className="text-2xl hover:text-[#C13584]"/>
          <FaTwitter  className="text-2xl hover:text-[#1DA1F2]"/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-2 text-white">
            <h1 className="text-3xl font-bold">Newsletter</h1>
            <p className="max-w-md"> To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
            send you spam or pass on your email address</p>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row w-full gap-5 mt-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" {...field} className="bg-white w-full " />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
        <Button type="submit" className="bg-[var(--rose-pink)] hover:bg-[var(--persian-pink)] w-44">Submit</Button>
        </div>
      </form>
    </Form>
        </div>
      
      </div>
     
    </div>
  )
}

export default Footer
