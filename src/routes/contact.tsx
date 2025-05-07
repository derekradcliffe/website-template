"use client";

import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().min(1, {
    message: "Email is required",
  }),
  phone: z.string().min(1, {
    message: "Phone number is required",
  }),
  message: z.string(),
});

function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit() {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_nqohsnn", // Service ID
          "template_cuxtahh", // Template ID
          formRef.current,
          "zgY9b2ubAOCMOZ78s" // Public Key
        )
        .then(
          () => {
            alert("This is going to look better soon, but thank you for your email!");
            form.reset();
            console.log("SUCCESS!");
          },
          (error: any) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gray-800 text-white text-5xl font-light w-full text-center pb-24 pt-24 mb-12 mt-16">
        Reach out, we want to talk to you!
      </div>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:w-[50%] w-[80%] mx-auto"
        >
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.x Jane or John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.x porkAndBeans@beans.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="e.x 555-555-5555" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.x Dear Santa..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="cursor-pointer hover:bg-white hover:text-black hover: border border-black" type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default Contact;