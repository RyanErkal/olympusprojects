import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	try {
		const { name, email, phone } = await req.json();

		if (!name || !email || !phone) {
			return NextResponse.json(
				{ message: "Missing required fields" },
				{ status: 400 }
			);
		}

		// User email template
		const userEmailTemplate = `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>The Olympus Projects</title>
					<style>
						body {
							font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
							line-height: 1.6;
							color: #333;
							margin: 0;
							padding: 0;
						}
						.email-container {
							max-width: 600px;
							margin: 0 auto;
							padding: 20px;
							background-color: #ffffff;
						}
						.header {
							text-align: center;
							padding: 20px 0;
							border-bottom: 2px solid #f3f4f6;
						}
						.logo {
							max-width: 200px;
							height: auto;
						}
						.content {
							padding: 30px 0;
						}
						.footer {
							text-align: center;
							padding: 20px;
							border-top: 2px solid #f3f4f6;
							color: #666;
							font-size: 14px;
						}
						.info-box {
							background-color: #f8f9fa;
							border-radius: 8px;
							padding: 20px;
							margin: 20px 0;
						}
						.button {
							display: inline-block;
							padding: 12px 24px;
							background-color: #FDD557;
							color: #000000;
							text-decoration: none;
							border-radius: 6px;
							font-weight: bold;
							margin: 20px 0;
						}
					</style>
				</head>
				<body>
					<div class="email-container">
						<div class="header">
							<img src="https://d3gxodpb7stuxj.cloudfront.net/olympusprojects/logo.png" alt="The Olympus Projects" class="logo">
						</div>
						<div class="content">
							<h1>Welcome to The Olympus Projects!</h1>
							<p>Hi ${name},</p>
							<p>Thank you for your interest in The Olympus Projects. We have received your inquiry and will be in touch shortly.</p>
							
							<div class="info-box">
								<h2>Your Information</h2>
								<ul style="list-style: none; padding-left: 0;">
									<li><strong>Name:</strong> ${name}</li>
									<li><strong>Email:</strong> ${email}</li>
									<li><strong>Phone:</strong> ${phone}</li>
								</ul>
							</div>

							<p>We're excited to help you achieve your fitness goals! Our team will contact you within the next 24 hours to schedule your consultation.</p>
							
							<p>Best Regards,<br>The Olympus Projects Team</p>
						</div>
						<div class="footer">
							© ${new Date().getFullYear()} The Olympus Projects. All rights reserved.
							<br>
							<small>This is an automated message, please do not reply to this email.</small>
						</div>
					</div>
				</body>
			</html>
		`;

		// Admin email template
		const adminEmailTemplate = `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>New Contact Form Submission</title>
					<style>
						body {
							font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
							line-height: 1.6;
							color: #333;
							margin: 0;
							padding: 0;
						}
						.email-container {
							max-width: 600px;
							margin: 0 auto;
							padding: 20px;
							background-color: #ffffff;
						}
						.header {
							text-align: center;
							padding: 20px 0;
							border-bottom: 2px solid #f3f4f6;
						}
						.logo {
							max-width: 200px;
							height: auto;
						}
						.content {
							padding: 30px 0;
						}
						.info-box {
							background-color: #f8f9fa;
							border-radius: 8px;
							padding: 20px;
							margin: 20px 0;
						}
					</style>
				</head>
				<body>
					<div class="email-container">
						<div class="header">
							<img src="https://d3gxodpb7stuxj.cloudfront.net/olympusprojects/logo.png" alt="The Olympus Projects" class="logo">
						</div>
						<div class="content">
							<h1>New Contact Form Submission</h1>
							<p>A new inquiry has been received from the website contact form.</p>
							
							<div class="info-box">
								<h2>Contact Details</h2>
								<ul style="list-style: none; padding-left: 0;">
									<li><strong>Name:</strong> ${name}</li>
									<li><strong>Email:</strong> ${email}</li>
									<li><strong>Phone:</strong> ${phone}</li>
								</ul>
							</div>

							<p>Please follow up with this lead as soon as possible.</p>
						</div>
					</div>
				</body>
			</html>
		`;

		// Send email to the user
		const userEmail = await resend.emails.send({
			from: "The Olympus Projects <ryan@redesignsolutions.co>",
			to: [email],
			subject: "Thank you for your inquiry!",
			replyTo: "train@theolympusprojects.com",
			html: userEmailTemplate
		});

		// Send email to the admin
		const adminEmail = await resend.emails.send({
			from: "The Olympus Projects <ryan@redesignsolutions.co>",
			to: ["ryanerkal1@gmail.com"],
			subject: "New Contact Form Submission",
			replyTo: email,
			html: adminEmailTemplate
		});

		if (userEmail.error || adminEmail.error) {
			console.error(
				"Resend Email Errors:",
				userEmail.error,
				adminEmail.error
			);
			return NextResponse.json(
				{ message: "Failed to send email" },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ message: "Emails sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
