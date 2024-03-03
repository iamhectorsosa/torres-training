"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { formAction } from "@/app/contact/actions";
import { ContactFormFields, formSchema } from "@/app/contact/form";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";

export const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useForm<ContactFormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      personal_training: false,
      mobility_training: false,
      notes: "",
    },
  });

  async function onSubmit(values: ContactFormFields) {
    setIsLoading(true);
    const { result } = await formAction(values);
    if (result === "SUCCESS") {
      form.reset();
      setIsLoading(false);
      return toast(
        `Thanks for reaching out, ${values.name}! We'll be in touch shortly!`,
        {
          duration: 8000,
        }
      );
    }
    return toast.error(`Oops! Something went wrong, ${values.name}!`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
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
                <Input placeholder="john.doe@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-muted-foreground">I am interested in:</p>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="personal_training"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="ml-2">Personal Training</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobility_training"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="ml-2">FRC Mobility Training</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hello Fabio! I cannot wait to get started!"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Write anything that you would like me to know
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader2Icon className="mr-2 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};
