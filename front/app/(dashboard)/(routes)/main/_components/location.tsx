
"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import data from "./_const/state-municipality.json";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";

const FormSchema = z.object({
  city: z.string({
    required_error: "Please select a city.",
  }),
  delegation: z.string({
    required_error: "Please select a delegation.",
  }),
  zone: z.string({
    required_error: "Please select a zone.",
  }),
  sector: z.string({
    required_error: "Please select a sector.",
  }),
  lane: z.string({
    required_error: "Please select a lane.",
  }),
});

export function Location() {
  const [delegations, setDelegations] = useState<null | { Name: string; Value: string; }[]>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  //ts-ignore
  const handleCityChange = (value:any) => {
    form.setValue("city", value);
    const selectedCity  = data.find((city) => city.Value === value);
    setDelegations(selectedCity ? selectedCity.Delegations : []);
    form.setValue("delegation", ""); // Reset delegation value
  };

  function onSubmit() {
    return;
  }

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 flex items-center flex-col md:flex-row gap-4"
        >
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>City</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    handleCityChange(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {data.map((city) => (
                      <SelectItem key={city.Value} value={city.Value}>
                        {city.Name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="delegation"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormLabel className="">Delegation</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a delegation" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {delegations && delegations.map((delegation) => (
                      <SelectItem key={delegation.Value} value={delegation.Value}>
                        {delegation.Name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Zone</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a zone" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Zone1">Zone 1</SelectItem>
                    <SelectItem value="Zone2">Zone 2</SelectItem>
                    <SelectItem value="Zone3">Zone 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Sector</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a sector" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Sector1">Sector 1</SelectItem>
                    <SelectItem value="Sector2">Sector 2</SelectItem>
                    <SelectItem value="Sector3">Sector 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lane"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormLabel className="">Lane</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a lane" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Lane1">Lane 1</SelectItem>
                    <SelectItem value="Lane2">Lane 2</SelectItem>
                    <SelectItem value="Lane3">Lane 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="self-end">
            Apply
          </Button>
        </form>
      </Form>
    </div>
  );
}
