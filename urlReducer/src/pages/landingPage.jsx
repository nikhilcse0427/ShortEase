import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();
  const [longUrl, setLongUrl] = useState();
  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`)
  }
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="my-5 sm:text-3xl md:text-7xl lg:16xl text-white text-center font-extrabold">
        The only URL shortener<br />you will ever need!👇
      </h1>
      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row md:flex-row w-full sm:w-2/5 gap-2 justify-center items-center">
        <input
          type="url"
          value={longUrl}
          placeholder="URL Shortner.."
          className="h-full flex-1 px-4 py-4 rounded-md text-2xl border-2 border-white"
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button variant="destructive" className="h-full font-bold">
          Shorten
        </Button>
      </form>
      <img src="../public/banner1.png" alt="banner page" className="w-full h-140 my-11 md:px-22" />
      <Accordion type="multiple" collapsible className="w-full md:px-35 text-white-800">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl">How does the ShortEase url shortner works?</AccordionTrigger>
          <AccordionContent className="text-xl">
            When you enter long url, our system generates shorter version of that URL.
            This shortened URL redirect to orignal url when is accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl">Do i need to make an account to use this app?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes, you need to create an account to access all the features of this app, including analytics, custom URLs, and managing your shortened links.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl">What analytics are available for my shortened URLs?</AccordionTrigger>
          <AccordionContent className="text-xl">
            You can view analytics such as the number of clicks, geographic location of users, devices used to access <br />your shortened URLs, and the time and date of access. These insights help you track the performance of your links.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default LandingPage
