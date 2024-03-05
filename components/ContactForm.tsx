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
import { ContactFormFields, formSchema } from "@/app/contact/form";
import { Loader2Icon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { formAction } from "@/app/contact/actions";
import { toast } from "sonner";
import { useServerFunction } from "@/lib/utils";

export const ContactForm: React.FC<Partial<ContactFormFields>> = ({
  name = "",
  email = "",
  personal_training = false,
  mobility_training = false,
  notes = "",
}) => {
  const form = useForm<ContactFormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      email,
      personal_training,
      mobility_training,
      notes,
    },
  });

  const { isPending, execute } = useServerFunction(formAction, {
    onSuccess: (variables) => {
      toast.success("Email sent!", {
        description: `Thanks for reaching out, ${variables.name}!`,
      });
    },
    onError: (error) => {
      toast.error("Something went wrong!", {
        description: error.message,
      });
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => execute(values))}
        className="space-y-4"
      >
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
        <Button disabled={isPending} type="submit">
          {isPending && <Loader2Icon className="mr-2 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};
