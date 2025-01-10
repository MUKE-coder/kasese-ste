"use server";

import { Resend } from "resend";
import { isEmailBlacklisted } from "@/lib/isEmailBlackListed";
import { sendAdminEmail, sendPatientEmail } from "@/lib/contact";
import { AppointmentFormData } from "@/components/frontend/AppointmentForm";
import { db } from "@/prisma/db";
import { AppointmentStatus } from "@prisma/client";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(data: AppointmentFormData) {
  const { email } = data;
  if (isEmailBlacklisted(email)) {
    return {
      success: false,
      message: "Please use a valid, non-temporary email address.",
    };
  }

  try {
    // Send welcome email
    const res = await resend.emails.send({
      from: "Kasese Hospital <info@enerwatengineering.com>",
      to: ["gmukejohnbaptist@gmail.com"],
      subject: "New Contact Form Submission from kasesehospital.com",
      html: sendAdminEmail(data),
    });

    // Schedule course offer email
    const thirtyMinutesFromNow = new Date(
      Date.now() + 2 * 60 * 1000
    ).toISOString();

    const sender = await resend.emails.send({
      from: "Kasese Hospital <info@enerwatengineering.com>",
      to: email,
      subject: "Thank You for Contacting Enerwat",
      html: sendPatientEmail(data),
      // scheduledAt: thirtyMinutesFromNow,
    });
    // console.log(res, sender);
    return {
      success: true,
      message:
        "Thank you for your submission! We'll review your entry and get back to you soon.",
    };
  } catch (error) {
    console.error("Error processing course offer submission:", error);
    return {
      success: false,
      message: "An error occurred while processing your request.",
    };
  }
}

export async function createAppointment(data: AppointmentFormData) {
  console.log(data);
  try {
    const newApp = await db.appointment.create({
      data: {
        ...data,
        appointmentDate: new Date(data.appointmentDate),
      },
    });
    console.log(newApp);
    return newApp;
  } catch (error) {
    console.log(error);
  }
}

export async function getAppointmentByReference(referenceId: string) {
  return await db.appointment.findUnique({
    where: { referenceId },
  });
}

export async function updateAppointmentStatus(
  referenceId: string,
  status: AppointmentStatus
) {
  return await db.appointment.update({
    where: { referenceId },
    data: { status },
  });
}

export async function getTodaysAppointments() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return await db.appointment.findMany({
    where: {
      appointmentDate: {
        gte: today,
        lt: tomorrow,
      },
    },
    orderBy: {
      preferredTime: "asc",
    },
  });
}
