import { z } from "zod";

export const leadStepOneSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  area: z.string().min(2, "Enter your target area"),
});

export const leadStepTwoSchema = z.object({
  timeline: z.enum(["1-3 months", "3-6 months", "6+ months", "Exploring"]),
  siteStatus: z.enum([
    "I own the land",
    "Negotiating a commercial lease",
    "Still searching",
    "Other",
  ]),
  phone: z.string().min(7, "Enter a contact number").optional().or(z.literal("")),
});

export const leadStepThreeSchema = z.object({
  privacyAcknowledged: z.boolean().refine((v) => v === true, {
    message: "You must consent to processing for this enquiry",
  }),
  prospectusAcknowledged: z.boolean().refine((v) => v === true, {
    message: "You must acknowledge the prospectus / figures disclaimer",
  }),
  marketingConsent: z.boolean(),
});

export const leadSchema = leadStepOneSchema
  .merge(leadStepTwoSchema)
  .merge(leadStepThreeSchema);

export type LeadInput = z.infer<typeof leadSchema>;
